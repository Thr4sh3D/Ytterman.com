/**
 * Creates dist/<route>/index.html for each SPA route.
 *
 * GitHub Pages serves files at their exact path. For a route like /faq,
 * creating dist/faq/index.html makes GitHub Pages return HTTP 200 instead
 * of falling through to dist/404.html (HTTP 404). This is essential for
 * Google Search Console and other bots that don't execute JavaScript.
 */

import { mkdirSync, copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, '..', 'dist');
const indexPath = join(distPath, 'index.html');

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
  'guider/seo-felsokning',
];

let created = 0;
for (const route of routes) {
  const routeDir = join(distPath, route);
  const dest = join(routeDir, 'index.html');
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(indexPath, dest);
  console.log(`  ✓ ${route}/index.html`);
  created++;
}

console.log(`\n✅ Created ${created} route directories for GitHub Pages SPA routing`);
