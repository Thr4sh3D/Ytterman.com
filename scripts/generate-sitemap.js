import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://ytterman.com';
const APP_TSX_PATH = path.join(__dirname, '../src/App.tsx');
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Route priorities based on importance
const ROUTE_PRIORITIES = {
  '/': { priority: '1.0', changefreq: 'weekly' },
  '/tjanster': { priority: '0.9', changefreq: 'monthly' },
  '/kontakt': { priority: '0.9', changefreq: 'monthly' },
  '/kontrollansvarig': { priority: '0.9', changefreq: 'monthly' },
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

// Extract routes from App.tsx
function extractRoutes() {
  const content = fs.readFileSync(APP_TSX_PATH, 'utf-8');
  const routeRegex = /<Route\s+path="([^"]+)"/g;
  const routes = [];
  let match;

  while ((match = routeRegex.exec(content)) !== null) {
    const route = match[1];
    // Skip wildcard routes (404)
    if (route !== '*') {
      routes.push(route);
    }
  }

  return routes.sort();
}

// Generate sitemap XML
function generateSitemap(routes) {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach(route => {
    const { priority, changefreq } = getRoutePriority(route);
    const url = route === '/' ? DOMAIN + '/' : DOMAIN + route;
    
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';
  return xml;
}

// Main function
function main() {
  console.log('🔍 Extracting routes from App.tsx...');
  const routes = extractRoutes();
  
  console.log(`✅ Found ${routes.length} routes:\n${routes.map(r => '  - ' + r).join('\n')}`);
  
  console.log('\n📝 Generating sitemap.xml...');
  const sitemap = generateSitemap(routes);
  
  fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf-8');
  console.log(`✅ Sitemap generated successfully at: ${OUTPUT_PATH}`);
  console.log(`📊 Total URLs: ${routes.length}`);
}

// Run the script
main();
