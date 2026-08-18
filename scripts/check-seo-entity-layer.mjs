import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { routeRegistry, getPrerenderRoutes, toCanonicalUrl } from '../src/config/routeRegistry.mjs';

const projectRoot = new URL('..', import.meta.url).pathname;
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

assert(new Set(routeRegistry.map((route) => route.id)).size === routeRegistry.length, 'Rutt-ID:n är inte unika.');
assert(new Set(routeRegistry.map((route) => route.path)).size === routeRegistry.length, 'Ruttvägar är inte unika.');

for (const route of routeRegistry) {
  assert(Boolean(route.meta.title.trim()), `${route.path} saknar titel.`);
  assert(Boolean(route.meta.description.trim()), `${route.path} saknar beskrivning.`);
  assert(route.meta.description.length <= 180, `${route.path} har en onödigt lång metabeskrivning.`);
  assert(route.indexable === Boolean(route.sitemap), `${route.path} har inkonsekvent index-/sitemapstatus.`);
}

const sourceRoot = join(projectRoot, 'src');
const sourceFiles = [];
const walk = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) walk(entryPath);
    else if (/\.tsx?$/.test(entry.name)) sourceFiles.push(entryPath);
  }
};
walk(sourceRoot);

const jsonLdOwners = sourceFiles.filter((file) => readFileSync(file, 'utf8').includes('application/ld+json'));
assert(jsonLdOwners.length === 1 && jsonLdOwners[0].endsWith('/components/SeoDocument.tsx'),
  `JSON-LD ska endast skrivas av SeoDocument, hittade: ${jsonLdOwners.join(', ')}`);

const appSource = readFileSync(join(sourceRoot, 'App.tsx'), 'utf8');
const staticLiteralRoutes = [...appSource.matchAll(/<Route\s+path="(?!\*|\/blogg\/:slug)([^"]+)"/g)];
assert(staticLiteralRoutes.length === 0, 'App.tsx innehåller statiska strängrutter utanför ruttregistret.');

const distRoot = join(projectRoot, 'dist');
if (existsSync(distRoot)) {
  for (const route of getPrerenderRoutes()) {
    const htmlPath = route === '/'
      ? join(distRoot, 'index.html')
      : join(distRoot, route.slice(1), 'index.html');
    assert(existsSync(htmlPath), `${route} saknar för-renderad HTML.`);
    if (!existsSync(htmlPath)) continue;

    const html = readFileSync(htmlPath, 'utf8');
    assert((html.match(/<meta data-rh="true" name="description"/g) || []).length === 1,
      `${route} ska ha exakt en metabeskrivning.`);
    assert((html.match(/<link data-rh="true" rel="canonical"/g) || []).length === 1,
      `${route} ska ha exakt en canonical.`);
    assert((html.match(/type="application\/ld\+json"/g) || []).length === 1,
      `${route} ska ha exakt ett JSON-LD-block.`);
    assert(html.includes(`href="${toCanonicalUrl(route)}"`), `${route} har fel canonical.`);
  }

  const energyHtml = readFileSync(join(distRoot, 'energideklaration', 'index.html'), 'utf8');
  assert(energyHtml.includes('Behörig partner för energideklaration'), 'Energipartner saknas i entitetsgrafen.');
  assert(energyHtml.includes('certifierad energiexpert'), 'Certifierad energiexpert saknas i partnerbeskrivningen.');
  assert(!energyHtml.includes('Tobias Ytterman</script>'), 'Energigrafen får inte ange Tobias som certifierad energiexpert.');
}

if (failures.length) {
  console.error(`❌ SEO-/entitetskontrollen misslyckades:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log(`✅ SEO-/entitetslagret verifierat för ${routeRegistry.length} registrerade routes.`);
