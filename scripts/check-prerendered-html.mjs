import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const distPath = join(projectRoot, 'dist');
const appSource = readFileSync(join(projectRoot, 'src', 'App.tsx'), 'utf8');
const routePattern = /<Route\s+path="([^"]+)"/g;
const routes = [...new Set(
  [...appSource.matchAll(routePattern)]
    .map((match) => match[1])
    .filter((route) => route !== '*' && !route.includes(':')),
)];

const failures = [];
const oldPhonePatterns = [
  /076[\s-]*111[\s-]*84[\s-]*47/i,
  /(?:\+|00)?46[\s-]*76[\s-]*111[\s-]*84[\s-]*47/i,
];

const routePath = (route) => route === '/' ? '/' : `${route.replace(/\/+$/, '')}/`;
const outputPath = (route) => route === '/'
  ? join(distPath, 'index.html')
  : join(distPath, route.replace(/^\/+|\/+$/g, ''), 'index.html');

const getCanonicalUrls = (html) => [...html.matchAll(/<link\b[^>]*>/gi)]
  .map((match) => match[0])
  .filter((tag) => /\brel="canonical"/i.test(tag))
  .map((tag) => tag.match(/\bhref="([^"]+)"/i)?.[1])
  .filter(Boolean);

const checkPage = (route, file) => {
  if (!existsSync(file)) {
    failures.push(`${route}: filen saknas (${file})`);
    return;
  }

  const html = readFileSync(file, 'utf8');
  const expectedCanonical = `https://ytterman.com${routePath(route)}`;
  const canonicalUrls = getCanonicalUrls(html);
  const titleCount = (html.match(/<title\b/gi) || []).length;

  if (!/<div id="root"><[\s\S]*?<main\b/i.test(html)) {
    failures.push(`${route}: #root innehåller inte för-renderat <main>-innehåll`);
  }
  if (!/<h1\b/i.test(html)) {
    failures.push(`${route}: för-renderad H1 saknas`);
  }
  if (!/<meta\b[^>]*name="description"[^>]*content="[^"]+"/i.test(html)) {
    failures.push(`${route}: meta description saknas`);
  }
  if (!/<meta\b[^>]*name="robots"[^>]*content="[^"]+"/i.test(html)) {
    failures.push(`${route}: robots-direktiv saknas`);
  }
  if (titleCount !== 1) {
    failures.push(`${route}: förväntade en title-tagg men hittade ${titleCount}`);
  }
  if (canonicalUrls.length !== 1 || canonicalUrls[0] !== expectedCanonical) {
    failures.push(`${route}: canonical är ${canonicalUrls.join(', ') || 'saknad'}, förväntade ${expectedCanonical}`);
  }
  if (html.includes('>Laddar...</p>')) {
    failures.push(`${route}: endast Suspense-laddaren för-renderades`);
  }
  for (const pattern of oldPhonePatterns) {
    if (pattern.test(html)) {
      failures.push(`${route}: det borttagna publika telefonnumret finns i HTML`);
    }
  }
};

for (const route of routes) {
  checkPage(route, outputPath(route));
}

const notFoundPath = join(distPath, '404.html');
if (!existsSync(notFoundPath)) {
  failures.push('/404: dist/404.html saknas');
} else {
  const notFoundHtml = readFileSync(notFoundPath, 'utf8');
  if (!/<div id="root" data-spa-fallback="true">/i.test(notFoundHtml)) {
    failures.push('/404: markering för dynamiska GitHub Pages-routes saknas');
  }
  if (!/<h1\b[^>]*>\s*Sidan hittades inte\s*<\/h1>/i.test(notFoundHtml)) {
    failures.push('/404: för-renderad 404-rubrik saknas');
  }
  if (!/<meta\b[^>]*name="robots"[^>]*content="noindex, follow"/i.test(notFoundHtml)) {
    failures.push('/404: noindex-direktiv saknas');
  }
}

if (failures.length > 0) {
  console.error(`Prerender-kontrollen hittade ${failures.length} fel:\n`);
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}

console.log(`Prerender-kontrollen är grön (${routes.length} routes + 404 med H1, innehåll och unik metadata).`);
