/**
 * Pre-renders every static React Router route into dist/<route>/index.html.
 *
 * The output keeps the client bundle, so React hydrates the existing markup and
 * the site remains fully interactive. Crawlers and AI agents receive the real
 * heading, body copy, links, metadata and JSON-LD without executing JavaScript.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from '../dist-ssr/entry-server.js';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(scriptDirectory, '..');
const distPath = join(projectRoot, 'dist');
const indexPath = join(distPath, 'index.html');
const appSourcePath = join(projectRoot, 'src', 'App.tsx');
const headBlockPattern = /<!-- app-head-start -->[\s\S]*?<!-- app-head-end -->/;
const rootPlaceholder = '<div id="root"></div>';

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html saknas – kör klientbygget före prerenderingen.');
}

const baseHtml = readFileSync(indexPath, 'utf8');
if (!headBlockPattern.test(baseHtml) || !baseHtml.includes(rootPlaceholder)) {
  throw new Error('index.html saknar app-head-markörer eller tom #root-behållare.');
}

const extractStaticRoutes = () => {
  const source = readFileSync(appSourcePath, 'utf8');
  const routePattern = /<Route\s+path="([^"]+)"/g;
  const routes = new Set();

  for (const match of source.matchAll(routePattern)) {
    const route = match[1];
    if (route !== '*' && !route.includes(':')) {
      routes.add(route);
    }
  }

  return [...routes].sort((left, right) => {
    if (left === '/') return -1;
    if (right === '/') return 1;
    return left.localeCompare(right, 'sv');
  });
};

const toCanonicalPath = (route) => route === '/' ? '/' : `${route.replace(/\/+$/, '')}/`;

const toOutputPath = (route) => route === '/'
  ? indexPath
  : join(distPath, route.replace(/^\/+|\/+$/g, ''), 'index.html');

const buildDocument = (rendered, { spaFallback = false } = {}) => {
  const headHtml = rendered.headHtml
    // Viewport is static in index.html and should only occur once.
    .replace(/<meta[^>]+name="viewport"[^>]*>\n?\s*/g, '');

  return baseHtml
    .replace(
      headBlockPattern,
      `<!-- app-head-start -->\n    ${headHtml}\n    <!-- app-head-end -->`,
    )
    .replace(
      rootPlaceholder,
      `<div id="root"${spaFallback ? ' data-spa-fallback="true"' : ''}>${rendered.appHtml}</div>`,
    );
};

const prerender = async (route, destination, options) => {
  const canonicalPath = toCanonicalPath(route);
  const rendered = await render(canonicalPath);

  if (!rendered.appHtml.includes('<main')) {
    throw new Error(`${route} saknar <main> i den för-renderade appen.`);
  }

  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, buildDocument(rendered, options), 'utf8');
};

const routes = extractStaticRoutes();
for (const route of routes) {
  await prerender(route, toOutputPath(route));
  console.log(`  ✓ ${toCanonicalPath(route)}`);
}

// GitHub Pages returns 404.html for unknown paths while preserving the URL.
// The marker lets the client mount from scratch, so dynamic routes such as
// /blogg/:slug still work without trying to hydrate the prerendered 404 page.
await prerender('/404', join(distPath, '404.html'), { spaFallback: true });

console.log(`\n✅ För-renderade ${routes.length} routes samt 404-sidan med verkligt React-innehåll.`);
