import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const searchableExtensions = new Set(['.html', '.js', '.json', '.mjs', '.ts', '.tsx']);
const searchableRoots = ['src', 'public'];
const searchableFiles = [
  ...searchableRoots.flatMap((directory) => walk(join(projectRoot, directory))),
  join(projectRoot, 'index.html'),
  join(projectRoot, 'scripts/create-github-pages-routes.mjs'),
].filter((file) => searchableExtensions.has(extname(file)));

function walk(directory) {
  return readdirSync(directory)
    .flatMap((entry) => {
      const path = join(directory, entry);
      return statSync(path).isDirectory() ? walk(path) : [path];
    });
}

function sourceName(file) {
  return relative(projectRoot, file);
}

function lineNumber(text, index) {
  return text.slice(0, index).split('\n').length;
}

const forbiddenRules = [
  ['inaktuellt BAS-regelverk', /AFS\s*1999:3/gi],
  ['BAS beskrivet som certifiering', /\b(?:certifierad|certifierade)\s+(?:som\s+)?BAS[-\s]?[PU]\b/gi],
  ['BAS beskrivet som certifiering', /\bBAS[-\s]?[PU]\s*(?:-|–|—|,|:)?\s*certifierad\b/gi],
  ['obekräftad titel', /\bcertifierad byggkonsult\b/gi],
  ['felaktigt påstående om energiexpert', /\b(?:Tobias(?:\s+Ytterman)?|Ytterman)\s+(?:är|som)\s+(?:en\s+)?certifierad energiexpert\b/gi],
  ['fel utförare av energideklaration', /\b(?:Tobias(?:\s+Ytterman)?|Ytterman)\s+(?:utför|registrerar)\s+energideklaration(?:en)?\b/gi],
  ['felaktig KA-behörighet', /fullständig behörighet/gi],
  ['KA utfärdar eller begär slutbesked', /\b(?:KA|kontrollansvarig(?:e|a)?)\s+(?:utfärdar|utfärda|beslutar om|ansöker om|begär)\s+slutbesked\b/gi],
  ['KA kallar till eller leder tekniskt samråd', /\b(?:KA|kontrollansvarig(?:e|a)?)\s+(?:kallar(?:\s+till)?|leder)\s+(?:det\s+)?teknisk(?:t|a)\s+samråd(?:et)?\b/gi],
  ['KA upprättar kontrollplan självständigt', /\b(?:KA|kontrollansvarig(?:e|a)?)\s+upprättar\s+(?:en\s+|ett\s+)?(?:förslag\s+till\s+)?kontrollplan(?:en)?\b/gi],
  ['fel BAS-tröskel om flera företag', /\bBAS[-\s]?[PU]?\s+(?:krävs|behövs)\s+(?:bara|endast)\s+(?:om|när)\s+(?:flera|minst\s+två|två\s+eller\s+fler)\s+(?:företag|entreprenörer)\b/gi],
  ['fel BAS-tröskel från förhandsanmälan', /\bBAS[-\s]?[PU]?\s+(?:krävs|behövs)[^.\n]{0,80}\b(?:30\s+dagar|500\s+persondagar)\b/gi],
  ['obekräftat svarslöfte', /\b(?:svar|återkoppling|återkommer|rapport)\w*\s+(?:alltid\s+)?inom\s+(?:24|48)\s*timmar\b/gi],
  ['obekräftat startlöfte', /\bstart\w*\s+inom\s+1\s*(?:-|–|—)\s*2\s+veckor\b/gi],
  ['obekräftat minutlöfte', /\b(?:svar|resultat|rapport)\w*\s+inom\s+(?:några\s+)?minuter\b/gi],
  ['obekräftat hastighetslöfte', /\bsnabb(?:are)?\s+(?:handläggning|återkoppling)\b/gi],
  ['obekräftad kostnadsfri resa', /\b(?:utan|inga)\s+resekostnader\b|\bkostnadsfri(?:a)?\s+res(?:a|or)\b/gi],
  ['obekräftad lokal restid', /\bbara\s+\d+\s+min(?:ut(?:er)?)?\s+(?:bort|restid)\b|\b\d+\s+minuters\s+restid\b/gi],
  ['obekräftat fast reseupplägg', /\bfast resepåslag\b/gi],
  ['overifierad juridisk identitet', /\b(?:MTY Konsult|8809134672)\b/gi],
  ['inaktuellt pris 14 900', /\b14(?:\s|\.)?900\s*(?:kr|kronor)\b/gi],
  ['inaktuellt pris 19 900', /\b19(?:\s|\.)?900\s*(?:kr|kronor)\b/gi],
  ['inaktuellt pris 24 900', /\b24(?:\s|\.)?900\s*(?:kr|kronor)\b/gi],
  ['inaktuellt pris 27 900', /\b27(?:\s|\.)?900\s*(?:kr|kronor)\b/gi],
  ['inaktuellt pris 34 900', /\b34(?:\s|\.)?900\s*(?:kr|kronor)\b/gi],
  ['inaktuellt pris 39 900', /\b39(?:\s|\.)?900\s*(?:kr|kronor)\b/gi],
  ['inaktuellt pris 49 900', /\b49(?:\s|\.)?900\s*(?:kr|kronor)\b/gi],
];

const violations = [];

for (const file of searchableFiles) {
  const text = readFileSync(file, 'utf8');
  for (const [label, pattern] of forbiddenRules) {
    pattern.lastIndex = 0;
    for (const match of text.matchAll(pattern)) {
      violations.push(`${sourceName(file)}:${lineNumber(text, match.index)} – ${label}: “${match[0]}”`);
    }
  }
}

const digitalPages = [
  'src/pages/ByggstartPlanerare.tsx',
  'src/pages/EnergiberakningOnlinePage.tsx',
  'src/pages/ProdukterPage.tsx',
];

for (const path of digitalPages) {
  const text = readFileSync(join(projectRoot, path), 'utf8');
  if (!/intresseanmälan/i.test(text)) {
    violations.push(`${path} – digital tjänst saknar tydlig intresseanmälan`);
  }
  const purchaseClaim = /\b(?:köp nu|betala nu|direkt nedladdning|ladda ner direkt|omedelbar leverans)\b/gi;
  for (const match of text.matchAll(purchaseClaim)) {
    violations.push(`${path}:${lineNumber(text, match.index)} – obekräftat digitalt köp-/leveranslöfte: “${match[0]}”`);
  }
}

const companyConfigPath = join(projectRoot, 'src/config/company.ts');
const companyConfig = readFileSync(companyConfigPath, 'utf8');
const requiredConfigFragments = [
  "certificateNumber: 'KA11926'",
  "authorization: 'N'",
  "validUntil: '2030-07-02'",
  "regulation: 'AFS 2023:3'",
  'extension: {',
  'bas: 29_500',
  'plus: 34_500',
  'bas: 32_500',
  'plus: 38_500',
  'bas: 34_500',
  'plus: 39_500',
  'from: 46_500',
  'to: 52_500',
  "deliveryModel: 'partner'",
  "publicationStatus: 'interest-only'",
  'legalIdentityVerified: false',
];

for (const fragment of requiredConfigFragments) {
  if (!companyConfig.includes(fragment)) {
    violations.push(`src/config/company.ts – obligatorisk verifierad uppgift saknas: ${fragment}`);
  }
}

const contactValues = [
  companyConfig.match(/email:\s*'([^']+)'/)?.[1],
  companyConfig.match(/display:\s*'([^']+)'/)?.[1],
  companyConfig.match(/e164:\s*'([^']+)'/)?.[1],
].filter(Boolean);
const sourceFilesOutsideCompanyConfig = walk(join(projectRoot, 'src'))
  .filter((file) => searchableExtensions.has(extname(file)) && file !== companyConfigPath);

for (const file of sourceFilesOutsideCompanyConfig) {
  const source = readFileSync(file, 'utf8');
  for (const value of contactValues) {
    const index = source.indexOf(value);
    if (index !== -1) {
      violations.push(`${sourceName(file)}:${lineNumber(source, index)} – kontaktuppgift ska hämtas från src/config/company.ts: “${value}”`);
    }
  }
}

const energyConfigSection = companyConfig.slice(
  companyConfig.indexOf('energyDeclaration:'),
  companyConfig.indexOf('energyCalculation:'),
);
for (const phrase of [
  "deliveryModel: 'partner'",
  "publicationStatus: 'active'",
  'behörig partner',
  'certifierad energiexpert',
]) {
  if (!energyConfigSection.includes(phrase)) {
    violations.push(`src/config/company.ts – energideklaration saknar formuleringen “${phrase}”`);
  }
}

const pricingContent = readFileSync(join(projectRoot, 'src/content/pricingPackages.ts'), 'utf8');
if (!pricingContent.includes("from '@/config/company'")) {
  violations.push('src/content/pricingPackages.ts – prisinnehållet använder inte den centrala konfigurationen');
}

for (const manifestName of ['public/manifest.json', 'public/site.webmanifest']) {
  try {
    JSON.parse(readFileSync(join(projectRoot, manifestName), 'utf8'));
  } catch (error) {
    violations.push(`${manifestName} – ogiltig JSON: ${error.message}`);
  }
}

const indexHtml = readFileSync(join(projectRoot, 'index.html'), 'utf8');
for (const match of indexHtml.matchAll(/<script\b[^>]*\btype=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
  try {
    JSON.parse(match[1]);
  } catch (error) {
    violations.push(`index.html – ogiltig JSON-LD: ${error.message}`);
  }
}

const assetReferences = new Set();
for (const match of indexHtml.matchAll(/["'](\/(?:[^"'?#]+\.)[a-z0-9]{2,8})(?:[?#][^"']*)?["']/gi)) {
  assetReferences.add(match[1]);
}
for (const manifestName of ['public/manifest.json', 'public/site.webmanifest']) {
  const manifest = JSON.parse(readFileSync(join(projectRoot, manifestName), 'utf8'));
  for (const icon of manifest.icons ?? []) {
    assetReferences.add(icon.src.startsWith('/') ? icon.src : `/${icon.src}`);
  }
}

for (const assetPath of assetReferences) {
  const localPath = assetPath.startsWith('/src/')
    ? join(projectRoot, assetPath.slice(1))
    : join(projectRoot, 'public', assetPath.slice(1));
  if (!existsSync(localPath)) {
    violations.push(`saknad lokal resurs: ${assetPath} (förväntad fil ${sourceName(localPath)})`);
  }
}

const distPath = join(projectRoot, 'dist');
let checkedDistAssets = 0;
if (existsSync(distPath)) {
  const distHtmlFiles = walk(distPath).filter((file) => extname(file) === '.html');
  for (const file of distHtmlFiles) {
    const html = readFileSync(file, 'utf8');
    for (const match of html.matchAll(/["'](\/(?:[^"'?#]+\.)[a-z0-9]{2,8})(?:[?#][^"']*)?["']/gi)) {
      const assetPath = match[1];
      const localPath = join(distPath, assetPath.slice(1));
      checkedDistAssets += 1;
      if (!existsSync(localPath)) {
        violations.push(`${sourceName(file)}:${lineNumber(html, match.index)} – byggd sida refererar till saknad resurs: ${assetPath}`);
      }
    }
  }
}

if (violations.length > 0) {
  console.error(`Affärsfaktakontrollen hittade ${violations.length} fel:\n`);
  console.error(violations.map((violation) => `- ${violation}`).join('\n'));
  process.exit(1);
}

console.log(`Affärsfaktakontrollen är grön (${searchableFiles.length} källfiler, ${assetReferences.size} källresurser, ${checkedDistAssets} byggda resursreferenser).`);
