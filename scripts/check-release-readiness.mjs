import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
} from 'node:fs';
import { extname, join } from 'node:path';
import { gzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import {
  getPrerenderRoutes,
  getSitemapRoutes,
  redirectRegistry,
  toCanonicalUrl,
} from '../src/config/routeRegistry.mjs';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const distPath = join(projectRoot, 'dist');
const failures = [];
const metrics = {
  prerenderedRoutes: 0,
  redirects: redirectRegistry.length,
  internalReferences: 0,
  jsonLdBlocks: 0,
  initialTransferGzipBytes: 0,
  cssBytes: 0,
  cssGzipBytes: 0,
  largestJavaScriptBytes: 0,
  ogImageBytes: 0,
};

const fail = (message) => failures.push(message);
const read = (file) => readFileSync(file, 'utf8');
const routeOutput = (route) => route === '/'
  ? join(distPath, 'index.html')
  : join(distPath, route.replace(/^\/+|\/+$/g, ''), 'index.html');
const stripTags = (value) => value
  .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z0-9#]+;/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();
const attribute = (tag, name) => tag.match(new RegExp(`\\b${name}=(?:"([^"]*)"|'([^']*)')`, 'i'))?.slice(1).find((value) => value !== undefined);

if (!existsSync(distPath)) {
  console.error('❌ dist saknas. Kör npm run build före releasekontrollen.');
  process.exit(1);
}

const routeFiles = new Map();
for (const route of getPrerenderRoutes()) {
  const file = routeOutput(route);
  if (!existsSync(file)) {
    fail(`${route}: byggd HTML saknas`);
    continue;
  }

  const html = read(file);
  routeFiles.set(route, html);
  metrics.prerenderedRoutes += 1;

  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const mainCount = (html.match(/<main\b/gi) || []).length;
  if (h1Count !== 1) fail(`${route}: förväntade exakt en H1, hittade ${h1Count}`);
  if (mainCount !== 1) fail(`${route}: förväntade exakt ett main-landmark, hittade ${mainCount}`);
  if (!/<html\b[^>]*\blang="sv"/i.test(html)) fail(`${route}: html lang="sv" saknas`);
  const mainHtml = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '';
  if (!/<div id="root">[\s\S]*?<main\b/i.test(html) || stripTags(mainHtml).length < 400) {
    fail(`${route}: huvudinnehållet är inte användbart utan JavaScript`);
  }

  const canonical = [...html.matchAll(/<link\b[^>]*\brel="canonical"[^>]*>/gi)]
    .map((match) => attribute(match[0], 'href'));
  const expectedCanonical = toCanonicalUrl(route);
  if (canonical.length !== 1 || canonical[0] !== expectedCanonical) {
    fail(`${route}: canonical ska vara ${expectedCanonical}`);
  }

  for (const tag of html.match(/<img\b[^>]*>/gi) || []) {
    if (attribute(tag, 'alt') === undefined) fail(`${route}: bild saknar alt-attribut: ${tag.slice(0, 100)}`);
    const loading = attribute(tag, 'loading');
    const priority = attribute(tag, 'fetchpriority');
    if (!loading && priority !== 'high') fail(`${route}: bild är varken lazy-loadad eller uttryckligen prioriterad`);
    if (/\bopacity-0\b/.test(attribute(tag, 'class') || '')) fail(`${route}: bild döljs utan JavaScript`);
  }

  const visibleHtml = html.replace(/<form\b[^>]*(?:\bhidden\b|aria-hidden="true")[^>]*>[\s\S]*?<\/form>/gi, '');
  for (const tag of visibleHtml.match(/<button\b[^>]*>[\s\S]*?<\/button>/gi) || []) {
    const opening = tag.match(/^<button\b[^>]*>/i)?.[0] || '';
    const accessibleName = attribute(opening, 'aria-label') || attribute(opening, 'aria-labelledby') || stripTags(tag);
    if (!accessibleName) fail(`${route}: knapp saknar tillgängligt namn`);
  }

  const labelTargets = new Set([...visibleHtml.matchAll(/<label\b[^>]*\bfor="([^"]+)"/gi)].map((match) => match[1]));
  for (const match of visibleHtml.matchAll(/<(input|textarea|select)\b[^>]*>/gi)) {
    const tag = match[0];
    if ((attribute(tag, 'type') || '').toLowerCase() === 'hidden') continue;
    const id = attribute(tag, 'id');
    const hasExplicitName = attribute(tag, 'aria-label') || attribute(tag, 'aria-labelledby') || (id && labelTargets.has(id));
    const preceding = visibleHtml.slice(Math.max(0, match.index - 500), match.index);
    const insideLabel = preceding.lastIndexOf('<label') > preceding.lastIndexOf('</label>');
    if (!hasExplicitName && !insideLabel) fail(`${route}: formulärfält saknar label eller aria-label: ${tag.slice(0, 100)}`);
  }

  for (const script of html.match(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi) || []) {
    const value = script.replace(/^<script\b[^>]*>/i, '').replace(/<\/script>$/i, '').trim();
    try {
      JSON.parse(value);
      metrics.jsonLdBlocks += 1;
    } catch {
      fail(`${route}: ogiltig JSON-LD`);
    }
  }

  if (/googletagmanager\.com|google-analytics\.com|fonts\.(googleapis|gstatic)\.com/i.test(html)) {
    fail(`${route}: Google- eller marknadsföringsresurs finns i HTML före samtycke`);
  }
}

const getTargetHtml = (pathname) => {
  const normalized = pathname === '/' ? '/' : `/${pathname.replace(/^\/+|\/+$/g, '')}`;
  if (routeFiles.has(normalized)) return routeFiles.get(normalized);
  const redirect = redirectRegistry.find((entry) => entry.from === normalized);
  if (redirect) return existsSync(routeOutput(normalized)) ? read(routeOutput(normalized)) : null;
  return null;
};

for (const [sourceRoute, html] of routeFiles) {
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/gi)) {
    const rawTarget = match[1];
    if (!rawTarget || /^(?:data:|blob:|javascript:)/i.test(rawTarget)) continue;
    if (rawTarget.startsWith('mailto:')) {
      if (rawTarget.split('?')[0] !== 'mailto:tobias@ytterman.com') fail(`${sourceRoute}: inkonsekvent mailto-länk ${rawTarget}`);
      continue;
    }
    if (rawTarget.startsWith('tel:')) {
      if (!/^tel:\+?[0-9 -]{7,20}$/.test(rawTarget)) fail(`${sourceRoute}: ogiltig tel-länk ${rawTarget}`);
      continue;
    }
    if (/^https?:\/\//i.test(rawTarget) && !rawTarget.startsWith('https://ytterman.com')) continue;

    const localTarget = rawTarget.startsWith('https://ytterman.com')
      ? rawTarget.slice('https://ytterman.com'.length) || '/'
      : rawTarget;
    if (!localTarget.startsWith('/') && !localTarget.startsWith('#')) continue;
    metrics.internalReferences += 1;

    const [pathAndQuery, hash = ''] = localTarget.split('#', 2);
    const pathname = (pathAndQuery.split('?')[0] || sourceRoute) || '/';
    if (extname(pathname)) {
      const file = join(distPath, pathname.replace(/^\/+/, ''));
      if (!existsSync(file)) fail(`${sourceRoute}: intern resurs saknas ${pathname}`);
      continue;
    }
    const targetHtml = getTargetHtml(pathname);
    if (!targetHtml) {
      fail(`${sourceRoute}: intern länk saknar byggd route ${pathname}`);
      continue;
    }
    if (hash && !new RegExp(`\\bid=["']${hash.replace(/[.*+?^$()|[\]{}\\]/g, '\\$&')}["']`, 'i').test(targetHtml)) {
      fail(`${sourceRoute}: ankarmål saknas ${pathname}#${hash}`);
    }
  }
}

const sitemapFile = join(distPath, 'sitemap-static.xml');
if (!existsSync(sitemapFile)) {
  fail('dist/sitemap-static.xml saknas');
} else {
  const actual = [...read(sitemapFile).matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]).sort();
  const expected = getSitemapRoutes().map((route) => toCanonicalUrl(route.path)).sort();
  if (JSON.stringify(actual) !== JSON.stringify(expected)) fail('Sitemap-routes avviker från det centrala ruttregistret');
  for (const route of getSitemapRoutes()) {
    if (!existsSync(routeOutput(route.path))) fail(`Sitemap-route saknar byggd output: ${route.path}`);
  }
}

const ogFile = join(distPath, 'og-image.png');
if (!existsSync(ogFile)) {
  fail('OG-bilden saknas i dist');
} else {
  const png = readFileSync(ogFile);
  metrics.ogImageBytes = png.length;
  const width = png.readUInt32BE(16);
  const height = png.readUInt32BE(20);
  if (width !== 1200 || height !== 630) fail(`OG-bilden är ${width}×${height}, förväntat 1200×630`);
  if (png.length > 150_000) fail(`OG-bilden är för stor: ${png.length} byte`);
}

const listFiles = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  return entry.isDirectory() ? listFiles(path) : [path];
});
const builtFiles = listFiles(distPath);
const cssFiles = builtFiles.filter((file) => file.endsWith('.css'));
const jsFiles = builtFiles.filter((file) => file.endsWith('.js'));
metrics.cssBytes = cssFiles.reduce((sum, file) => sum + statSync(file).size, 0);
metrics.cssGzipBytes = cssFiles.reduce((sum, file) => sum + gzipSync(readFileSync(file)).length, 0);
metrics.largestJavaScriptBytes = Math.max(0, ...jsFiles.map((file) => statSync(file).size));
if (metrics.cssBytes > 120_000 || metrics.cssGzipBytes > 22_000) fail('CSS-budget överskriden (120 kB rå / 22 kB gzip)');
if (metrics.largestJavaScriptBytes > 250_000) fail('En JavaScript-chunk överskrider 250 kB rå storlek');

const homeHtml = routeFiles.get('/') || '';
const initialAssets = new Set([...homeHtml.matchAll(/<(?:link|script)\b[^>]*(?:rel="(?:modulepreload|stylesheet)"|type="module")[^>]*(?:href|src)="([^"]+)"/gi)]
  .map((match) => match[1])
  .filter((value) => value.startsWith('/')));
for (const asset of initialAssets) {
  const file = join(distPath, asset.replace(/^\/+/, ''));
  if (existsSync(file)) metrics.initialTransferGzipBytes += gzipSync(readFileSync(file)).length;
}
if (metrics.initialTransferGzipBytes > 150_000) fail(`Initial gzip-budget överskriden: ${metrics.initialTransferGzipBytes} byte`);

const packageJson = JSON.parse(read(join(projectRoot, 'package.json')));
const packageLock = JSON.parse(read(join(projectRoot, 'package-lock.json')));
for (const section of ['dependencies', 'devDependencies']) {
  const declared = packageJson[section] || {};
  const locked = packageLock.packages?.['']?.[section] || {};
  if (JSON.stringify(declared) !== JSON.stringify(locked)) fail(`package.json och package-lock.json skiljer sig i ${section}`);
}

if (failures.length) {
  console.error(`❌ Releasekontrollen hittade ${failures.length} fel:\n- ${failures.join('\n- ')}`);
  console.error('\nMätvärden:', JSON.stringify(metrics, null, 2));
  process.exit(1);
}

console.log(`✅ Releasekontrollen är grön: ${metrics.prerenderedRoutes} routes, ${metrics.internalReferences} interna referenser och ${metrics.jsonLdBlocks} giltiga JSON-LD-block.`);
console.log('Mätvärden:', JSON.stringify(metrics, null, 2));
