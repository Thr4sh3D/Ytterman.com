import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://ytterman.com';
const APP_TSX_PATH = path.join(__dirname, '../src/App.tsx');
const STATIC_SITEMAP_OUTPUT_PATH = path.join(__dirname, '../public/sitemap-static.xml');
const SITEMAP_INDEX_OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');
const DYNAMIC_SITEMAPS = [];
const EXCLUDED_ROUTES = new Set([
  '/tack',
]);

// Route priorities based on importance
const ROUTE_PRIORITIES = {
  '/': { priority: '1.0', changefreq: 'weekly' },
  '/tjanster': { priority: '0.9', changefreq: 'monthly' },
  '/kontakt': { priority: '0.9', changefreq: 'monthly' },
  '/kontrollansvarig': { priority: '0.9', changefreq: 'monthly' },
  '/kontrollansvarig-sundsvall': { priority: '0.9', changefreq: 'monthly' },
  '/kontrollansvarig-harnosand': { priority: '0.9', changefreq: 'monthly' },
  '/kontrollansvarig-timra': { priority: '0.9', changefreq: 'monthly' },
  '/kontrollansvarig-kramfors': { priority: '0.9', changefreq: 'monthly' },
  '/kontrollansvarig-solleftea': { priority: '0.9', changefreq: 'monthly' },
  '/bas-p': { priority: '0.9', changefreq: 'monthly' },
  '/bas-u': { priority: '0.9', changefreq: 'monthly' },
  '/energideklaration': { priority: '0.8', changefreq: 'monthly' },
  '/overlatelsebesiktning': { priority: '0.8', changefreq: 'monthly' },
  '/energiberakning-online': { priority: '0.8', changefreq: 'monthly' },
  '/om': { priority: '0.7', changefreq: 'monthly' },
  '/faq': { priority: '0.8', changefreq: 'monthly' },
  '/guider': { priority: '0.7', changefreq: 'monthly' },
  '/guider/*': { priority: '0.7', changefreq: 'monthly' }, // Default for guide pages
  '/integritetspolicy': { priority: '0.3', changefreq: 'yearly' },
  '/tack': { priority: '0.2', changefreq: 'yearly' },
  '/produkter': { priority: '0.8', changefreq: 'monthly' },
  '/byggstart-planerare': { priority: '0.8', changefreq: 'monthly' },
  '/blogg': { priority: '0.8', changefreq: 'daily' },
};

// Get default priority for a route
function getRoutePriority(route) {
  if (ROUTE_PRIORITIES[route]) {
    return ROUTE_PRIORITIES[route];
  }
  // Check for guide pages
  if (route.startsWith('/guider/')) {
    return ROUTE_PRIORITIES['/guider/*'];
  }
  // Default for other routes
  return { priority: '0.5', changefreq: 'monthly' };
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Extract routes from App.tsx
function extractRoutes() {
  const content = fs.readFileSync(APP_TSX_PATH, 'utf-8');
  const routeRegex = /<Route\s+path="([^"]+)"/g;
  const routes = [];
  let match;

  while ((match = routeRegex.exec(content)) !== null) {
    const route = match[1];
    // Skip wildcard routes (404) and dynamic routes with params
    if (route !== '*' && !route.includes(':') && !EXCLUDED_ROUTES.has(route)) {
      routes.push(route);
    }
  }

  return routes.sort();
}

// Generate static sitemap XML
function generateStaticSitemap(routes) {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach(route => {
    const { priority, changefreq } = getRoutePriority(route);
    // Root URL keeps its trailing slash; all other routes get a trailing slash
    // to match GitHub Pages' directory-based serving (avoids 301 redirects)
    const url = route === '/' ? DOMAIN + '/' : DOMAIN + route + '/';
    
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(url)}</loc>\n`;
    xml += `    <lastmod>${escapeXml(today)}</lastmod>\n`;
    xml += `    <changefreq>${escapeXml(changefreq)}</changefreq>\n`;
    xml += `    <priority>${escapeXml(priority)}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';
  return xml;
}

function generateSitemapIndex() {
  const today = new Date().toISOString().split('T')[0];
  const sitemapUrls = [`${DOMAIN}/sitemap-static.xml`, ...DYNAMIC_SITEMAPS];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  sitemapUrls.forEach((url) => {
    xml += '  <sitemap>\n';
    xml += `    <loc>${escapeXml(url)}</loc>\n`;
    xml += `    <lastmod>${escapeXml(today)}</lastmod>\n`;
    xml += '  </sitemap>\n';
  });

  xml += '</sitemapindex>\n';
  return xml;
}

// Main function
function main() {
  console.log('🔍 Extracting routes from App.tsx...');
  const routes = extractRoutes();
  
  console.log(`✅ Found ${routes.length} routes:\n${routes.map(r => '  - ' + r).join('\n')}`);
  
  console.log('\n📝 Generating sitemap-static.xml...');
  const staticSitemap = generateStaticSitemap(routes);
  const sitemapIndex = generateSitemapIndex();
  
  fs.writeFileSync(STATIC_SITEMAP_OUTPUT_PATH, staticSitemap, 'utf-8');
  fs.writeFileSync(SITEMAP_INDEX_OUTPUT_PATH, sitemapIndex, 'utf-8');
  console.log(`✅ Static sitemap generated successfully at: ${STATIC_SITEMAP_OUTPUT_PATH}`);
  console.log(`✅ Sitemap index generated successfully at: ${SITEMAP_INDEX_OUTPUT_PATH}`);
  console.log(`📊 Total URLs: ${routes.length}`);
}

// Run the script
main();
