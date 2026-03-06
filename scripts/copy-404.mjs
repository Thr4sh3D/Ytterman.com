import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const distPath = join(projectRoot, 'dist');
const indexPath = join(distPath, 'index.html');
const notFoundPath = join(distPath, '404.html');

try {
  // Check if dist/index.html exists
  if (!existsSync(indexPath)) {
    console.error('❌ Error: dist/index.html not found. Please run "npm run build" first.');
    process.exit(1);
  }

  // Copy index.html to 404.html
  // This is necessary for GitHub Pages SPA routing
  // GitHub Pages serves 404.html when a route is not found
  // By making it identical to index.html, React Router can handle all routing
  copyFileSync(indexPath, notFoundPath);

  console.log('✅ Successfully created dist/404.html (copy of dist/index.html)');
  console.log('   This enables proper SPA routing on GitHub Pages');
} catch (error) {
  console.error('❌ Error copying index.html to 404.html:', error.message);
  process.exit(1);
}
