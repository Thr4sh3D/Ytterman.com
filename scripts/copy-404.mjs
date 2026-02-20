import { readFileSync, writeFileSync, existsSync } from 'fs';
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

  // Read index.html content
  const indexContent = readFileSync(indexPath, 'utf-8');

  // Write 404.html with identical content
  writeFileSync(notFoundPath, indexContent, 'utf-8');

  console.log('✅ Successfully created dist/404.html from dist/index.html');
} catch (error) {
  console.error('❌ Error copying index.html to 404.html:', error.message);
  process.exit(1);
}
