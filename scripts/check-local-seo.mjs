import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { redirectRegistry, routeRegistry, toCanonicalUrl } from '../src/config/routeRegistry.mjs';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};
const source = (relativePath) => readFileSync(join(projectRoot, relativePath), 'utf8');

const retainedKaRoutes = routeRegistry.filter((route) => /^\/kontrollansvarig-(sundsvall|harnosand|timra|kramfors|solleftea)$/.test(route.path));
const inspectionLocationRoutes = routeRegistry.filter((route) => /^\/overlatelsebesiktning-/.test(route.path));

assert(retainedKaRoutes.length === 5, 'Exakt fem prioriterade KA-ortssidor ska vara indexerbara.');
assert(inspectionLocationRoutes.length === 0, 'Tunna lokala besiktningssidor får inte vara indexerbara.');
assert(redirectRegistry.length === 7, 'Samtliga sju tidigare besiktningssidor ska ha redirects.');
assert(redirectRegistry.every((redirect) => redirect.to === '/overlatelsebesiktning'), 'Besiktningsredirects ska gå till den regionala tjänstesidan.');

const citySource = source('src/content/kontrollansvarigCityData.ts');
for (const city of ['Sundsvall', 'Härnösand', 'Timrå', 'Kramfors', 'Sollefteå']) {
  assert(citySource.includes(`name: '${city}'`), `${city} saknas i den centrala ortsmodellen.`);
  assert(citySource.includes(`heroTitle: 'Kontrollansvarig`), 'Ortssidorna saknar unik H1-data.');
}
assert(citySource.includes('LOCAL_SEO_AUDIT'), 'Den dokumenterade konsolideringsrevisionen saknas.');

const proofSource = source('src/content/verifiedProof.ts');
for (const fragment of ['verified: boolean', 'publicationConsent: boolean', 'item.verified && item.publicationConsent']) {
  assert(proofSource.includes(fragment), `Verifieringsmodellen saknar spärren: ${fragment}`);
}
assert(proofSource.includes('caseStudies: readonly CaseStudy[] = []'), 'Case får inte förifyllas med exempel.');
assert(proofSource.includes('customerReviews: readonly CustomerReview[] = []'), 'Recensioner får inte förifyllas med exempel.');

const schemaSources = [source('src/seo/schema.ts'), source('src/components/AdvancedSEO.tsx')].join('\n');
assert(!/AggregateRating|"Review"|'Review'/.test(schemaSources), 'Recensionsschema får inte publiceras innan verkliga recensioner finns.');

const guideLayout = source('src/components/GuideLayout.tsx');
assert(guideLayout.includes('Uppdaterad <time'), 'Guiderna ska visa uppdateringsdatum.');
assert(guideLayout.includes('Officiella källor'), 'Guiderna ska kunna visa officiella källor.');

const requiredGuideRoutes = [
  '/guider/kontrollansvarig',
  '/guider/nar-kravs-kontrollansvarig',
  '/guider/kontrollansvarig-certifiering',
  '/guider/slutbesked',
  '/guider/vad-ar-bas',
  '/guider/kontrollansvarig-timpris',
];
for (const path of requiredGuideRoutes) {
  const route = routeRegistry.find((candidate) => candidate.path === path);
  assert(route?.schema.pageType === 'TechArticle', `${path} ska vara en registrerad faktaguide.`);
  assert(Boolean(route?.schema.dateModified), `${path} ska ha uppdateringsdatum i schema.`);
}

const distRoot = join(projectRoot, 'dist');
if (existsSync(distRoot)) {
  for (const redirect of redirectRegistry) {
    const htmlPath = join(distRoot, redirect.from.slice(1), 'index.html');
    assert(existsSync(htmlPath), `${redirect.from} saknar statisk redirect.`);
    if (!existsSync(htmlPath)) continue;
    const html = readFileSync(htmlPath, 'utf8');
    const target = toCanonicalUrl(redirect.to);
    assert(html.includes('name="robots" content="noindex, follow"'), `${redirect.from} saknar noindex.`);
    assert(html.includes(`rel="canonical" href="${target}"`), `${redirect.from} har fel canonical.`);
    assert(html.includes(`http-equiv="refresh" content="0; url=${target}"`), `${redirect.from} har fel redirectmål.`);
  }

  for (const route of retainedKaRoutes) {
    const html = readFileSync(join(distRoot, route.path.slice(1), 'index.html'), 'utf8');
    for (const fragment of ['Begär offert', 'Process för KA-förfrågan', 'Vanliga frågor om KA', 'Faktabaserade guider']) {
      assert(html.includes(fragment), `${route.path} saknar innehållet “${fragment}”.`);
    }
  }
}

if (failures.length) {
  console.error(`❌ Lokal SEO-kontrollen misslyckades:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log('✅ Lokal SEO, guider, redirects och verifierade kundbevis är kontrollerade.');
