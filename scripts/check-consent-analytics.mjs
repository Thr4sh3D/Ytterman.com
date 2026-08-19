import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const read = (path) => readFileSync(join(projectRoot, path), 'utf8');
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const indexHtml = read('index.html');
const provider = read('src/components/AnalyticsProvider.tsx');
const consentUi = read('src/components/GoogleConsentMode.tsx');
const app = read('src/App.tsx');
const contactForm = read('src/components/ContactForm.tsx');
const thankYou = read('src/pages/TackPage.tsx');
const analyticsConfig = read('src/config/analytics.ts');
const builtIndex = existsSync(join(projectRoot, 'dist/index.html')) ? read('dist/index.html') : '';

assert(!indexHtml.includes('googletagmanager.com'), 'index.html får inte kontakta Google före samtycke.');
assert(!/fonts\.(googleapis|gstatic)\.com/.test(indexHtml), 'Google Fonts får inte vara en render-blockerande extern resurs.');
assert(!indexHtml.includes('dataLayer') && !indexHtml.includes('gtag('), 'index.html får inte initiera mätning före samtycke.');
assert(provider.includes('readConsent()') && provider.includes('loadGoogleTag(preferences)'), 'Google-taggen måste styras av sparat samtycke.');
assert(provider.includes('VITE_') === false, 'Miljö-ID:n ska läsas i den centrala konfigurationen, inte utspritt.');
assert(analyticsConfig.includes('VITE_GA_MEASUREMENT_ID') && analyticsConfig.includes('VITE_GOOGLE_ADS_ID'), 'Miljökonfiguration för GA och Ads saknas.');
assert(!/AW-\d{5,}/.test([indexHtml, provider, contactForm, thankYou].join('\n')), 'Hårdkodat Google Ads-ID hittades.');
assert(!/GA_MEASUREMENT_ID(?!\b\))/.test(indexHtml), 'Platshållar-ID hittades i index.html.');

for (const label of ['Avvisa valfria', 'Acceptera valfria', 'Anpassa', 'Spara val']) {
  assert(consentUi.includes(label), `Samtyckesgränssnittet saknar ”${label}”.`);
}
assert(app.includes('<AnalyticsProvider />') && app.includes('<GoogleConsentMode />'), 'Samtycke och analys är inte monterade i routerträdet.');
assert(provider.includes('PII_KEY') && provider.includes('ALLOWED_PARAMETERS'), 'Tillåtelselista och PII-filter saknas.');
assert(!contactForm.includes('name: formData.name'), 'Formulärnamn får inte skickas till analys.');
assert(!thankYou.includes("gtag('event'") && !thankYou.includes('fbq('), 'Tacksidan får inte mäta en konvertering bara genom ett sidbesök.');
if (builtIndex) {
  assert(!/googletagmanager\.com|google-analytics\.com|fonts\.(googleapis|gstatic)\.com/.test(builtIndex), 'Byggd startsida innehåller ett Google-anrop före samtycke.');
}

for (const legacyPath of [
  'src/components/ConversionTracking.tsx',
  'src/components/GoogleAdsTracking.tsx',
  'src/components/GoogleTagManager.tsx',
  'src/hooks/useGoogleAdsTracking.ts',
  'src/utils/googleAdsTracking.ts',
]) {
  assert(!existsSync(join(projectRoot, legacyPath)), `Parallell spårningsimplementation finns kvar: ${legacyPath}`);
}

if (failures.length) {
  console.error(`❌ Samtyckes-/analyskontrollen misslyckades:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log('✅ Google-taggar blockeras före samtycke och mätningen är centraliserad utan PII-parametrar.');
