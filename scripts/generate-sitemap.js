import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getSitemapRoutes, SITE_URL, toCanonicalUrl } from '../src/config/routeRegistry.mjs';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const staticOutput = path.join(scriptDirectory, '../public/sitemap-static.xml');
const indexOutput = path.join(scriptDirectory, '../public/sitemap.xml');

const escapeXml = (value) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const routes = getSitemapRoutes();
const urlEntries = routes.map((route) => [
  '  <url>',
  `    <loc>${escapeXml(toCanonicalUrl(route.path))}</loc>`,
  `    <changefreq>${escapeXml(route.sitemap.changefreq)}</changefreq>`,
  `    <priority>${escapeXml(route.sitemap.priority)}</priority>`,
  '  </url>',
].join('\n'));

const staticSitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urlEntries,
  '</urlset>',
  '',
].join('\n');

const sitemapIndex = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '  <sitemap>',
  `    <loc>${SITE_URL}/sitemap-static.xml</loc>`,
  '  </sitemap>',
  '</sitemapindex>',
  '',
].join('\n');

fs.writeFileSync(staticOutput, staticSitemap, 'utf8');
fs.writeFileSync(indexOutput, sitemapIndex, 'utf8');

console.log(`✅ Sitemap skapad från det gemensamma ruttregistret: ${routes.length} URL:er.`);
