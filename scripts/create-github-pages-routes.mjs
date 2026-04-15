/**
 * Creates dist/<route>/index.html for each SPA route.
 *
 * GitHub Pages serves files at their exact path. For a route like /faq,
 * creating dist/faq/index.html makes GitHub Pages return HTTP 200 instead
 * of falling through to dist/404.html (HTTP 404). This is essential for
 * Google Search Console and other bots that don't execute JavaScript.
 */

import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, '..', 'dist');
const indexPath = join(distPath, 'index.html');
const DOMAIN = 'https://ytterman.com';

if (!existsSync(indexPath)) {
  console.error('❌ dist/index.html not found – run "npm run build" first.');
  process.exit(1);
}

// All routes that must return HTTP 200 on GitHub Pages
const routes = [
  // Main pages
  'faq',
  'kontakt',
  'guider',
  'energideklaration',
  'om',
  'tjanster',
  'priser',
  'omraden',
  'kontrollansvarig',
  'bas-p',
  'bas-u',
  'overlatelsebesiktning',
  'energiberakning-online',
  'bygglovshandlingar',
  'integritetspolicy',
  'tack',
  // City-specific Kontrollansvarig pages
  'kontrollansvarig-sundsvall',
  'kontrollansvarig-harnosand',
  'kontrollansvarig-i-fjallen',
  'kontrollansvarig-timra',
  'kontrollansvarig-kramfors',
  'kontrollansvarig-solleftea',
  // City-specific Överlåtelsebesiktning pages
  'overlatelsebesiktning-sundsvall',
  'overlatelsebesiktning-harnosand',
  'overlatelsebesiktning-timra',
  'overlatelsebesiktning-kramfors',
  'overlatelsebesiktning-solleftea',
  'overlatelsebesiktning-ornskoldsvik',
  'overlatelsebesiktning-ange',
  // Guide pages
  'guider/kontrollansvarig',
  'guider/bas',
  'guider/bygglov',
  'guider/kvalitetskontroll',
  'guider/overlatelsebesiktning',
  'guider/energi',
  'guider/miljo',
  'guider/digitala-verktyg',
  'guider/kontrollansvarig-bygglov',
  'guider/kontrollansvarig-certifiering',
  'guider/kontrollansvarig-ansvar',
  'guider/kontrollansvarig-timpris',
  'guider/bas-p-guide',
  'guider/bas-u-guide',
  'guider/vad-ar-bas',
  'guider/tekniskt-samrad',
  'guider/kontrollplan',
  'guider/slutbesked',
  'guider/vasternorrland',
  'guider/bygglovsguide-vanliga-misstag-husbygge',
  // Digitala produkter
  'produkter',
  'byggstart-planerare',
  // Blogg
  'blogg',
];

let created = 0;
const baseHtml = readFileSync(indexPath, 'utf-8');

const getRouteUrl = (route) => `${DOMAIN}/${route}/`;

const upsertTag = (html, pattern, replacement, anchor) => {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace(anchor, `${anchor}\n    ${replacement}`);
};

for (const route of routes) {
  const routeDir = join(distPath, route);
  const dest = join(routeDir, 'index.html');
  mkdirSync(routeDir, { recursive: true });
  const routeUrl = getRouteUrl(route);
  let routeHtml = baseHtml;

  routeHtml = upsertTag(
    routeHtml,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${routeUrl}" />`,
    '<meta name="robots" content="index, follow" />'
  );

  routeHtml = upsertTag(
    routeHtml,
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${routeUrl}" />`,
    '<meta property="og:description" content="Certifierad kontrollansvarig och BAS-P/BAS-U i Västernorrland. Över 20 års erfarenhet i byggbranschen. Snabb hantering, digitala verktyg och trygg byggprocess." />'
  );

  writeFileSync(dest, routeHtml, 'utf-8');
  console.log(`  ✓ ${route}/index.html`);
  created++;
}

console.log(`\n✅ Created ${created} route directories for GitHub Pages SPA routing`);
