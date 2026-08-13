/**
 * Creates dist/<route>/index.html for each SPA route.
 *
 * GitHub Pages serves files at their exact path. For a route like /faq,
 * creating dist/faq/index.html makes GitHub Pages return HTTP 200 instead
 * of falling through to dist/404.html (HTTP 404). This is essential for
 * Google Search Console and other bots that don't execute JavaScript.
 */

import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, '..', 'dist');
const indexPath = join(distPath, 'index.html');
const DOMAIN = 'https://ytterman.com';
const DEFAULT_TITLE = 'Trygg Byggprocess med Ytterman - Kontrollansvarig & BAS i Västernorrland';
const DEFAULT_DESCRIPTION = 'Certifierad kontrollansvarig enligt PBL och uppdrag som BAS-P/BAS-U i Västernorrland. Över 20 års erfarenhet. Energideklaration utförs via behörig partner av certifierad energiexpert.';

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
  'kontrollansvarig-i-fjallen',
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
  // Digitala produkter
  'produkter',
  'byggstart-planerare',
  // Blogg
  'blogg',
];

const routeSeoData = {
  faq: {
    title: 'Vanliga frågor om kontrollansvarig och BAS | Ytterman',
    description: 'Svar om kontrollansvarig, BAS-P, BAS-U, bygglov, certifiering, priser, energideklaration via partner och lokala förfrågningar.',
  },
  kontakt: {
    title: 'Kontakta Ytterman - Kontrollansvarig & BAS Västernorrland',
    description: 'Behöver du kontrollansvarig eller BAS? Ring 076-111 84 47 eller mejla tobias@ytterman.com och beskriv projektet så återkommer vi med nästa steg.',
  },
  guider: {
    title: 'Bygguider – kontrollansvarig, BAS och byggprocess | Ytterman',
    description: 'Guider om kontrollansvarig, BAS-P/BAS-U, bygglov, energideklaration via partner, överlåtelsebesiktning och byggprocess.',
  },
  energideklaration: {
    title: 'Energideklaration i Västernorrland | Ytterman',
    description: 'Ytterman erbjuder och samordnar energideklaration i Västernorrland. Deklarationen utförs via behörig partner av certifierad energiexpert.',
  },
  om: {
    title: 'Om Ytterman – kontrollansvarig och BAS i Västernorrland',
    description: 'Lär känna Tobias Ytterman – certifierad kontrollansvarig enligt PBL och utbildad för uppdrag som BAS-P och BAS-U, med över 20 års erfarenhet i byggbranschen.',
  },
  tjanster: {
    title: 'Byggtjänster Västernorrland - KA, BAS, Energiberäkning | Ytterman',
    description: 'Kontrollansvarig, BAS-P och BAS-U i Västernorrland. Energideklaration samordnas av Ytterman och utförs av certifierad energiexpert hos behörig partner.',
  },
  priser: {
    title: 'Priser Kontrollansvarig & BAS 2026 | Ytterman',
    description: 'Paketpriser 2026 för kontrollansvarig. KA Bas från 29 500 kr inklusive moms och paket KA + BAS-P/U 46 500–52 500 kr.',
  },
  omraden: {
    title: 'Kontrollansvarig & Besiktningsman Sundsvall, Härnösand | Ytterman',
    description: 'Kontrollansvarig, BAS-P, BAS-U och andra byggtjänster i Västernorrland. Omfattning, resor och leveranstid framgår av offerten för varje projekt.',
  },
  kontrollansvarig: {
    title: 'Kontrollansvarig i Västernorrland - Certifierad & Erfaren | Ytterman',
    description: 'Certifierad kontrollansvarig enligt PBL med över 20 års erfarenhet i byggbranschen. Se 2026-priser och begär offert utifrån projektets omfattning.',
  },
  'bas-p': {
    title: 'BAS-P i Västernorrland | Ytterman',
    description: 'BAS-P under projektering med utbildning, kompetens och över 20 års erfarenhet i byggbranschen. Arbete utifrån AFS 2023:3.',
  },
  'bas-u': {
    title: 'BAS-U i Västernorrland | Ytterman',
    description: 'BAS-U under utförande med utbildning, kompetens och över 20 års erfarenhet i byggbranschen. Arbete utifrån AFS 2023:3.',
  },
  overlatelsebesiktning: {
    title: 'Överlåtelsebesiktning Sundsvall & Härnösand | Ytterman',
    description: 'Överlåtelsebesiktning med över 20 års erfarenhet i byggbranschen. Omfattning, pris och leveranstid bekräftas vid bokning.',
  },
  'energiberakning-online': {
    title: 'Energiberäkning online för bygglov | Ytterman',
    description: 'Digital energiberäkning för byggprojekt. Skicka en intresseanmälan för besked om underlag, pris och leverans innan beställning.',
  },
  bygglovshandlingar: {
    title: 'Bygglovshandlingar i Västernorrland | Ytterman',
    description: 'Bygglovshandlingar anpassade efter projektets och kommunens krav. Omfattning och pris bekräftas efter genomgång av underlaget.',
  },
  integritetspolicy: {
    title: 'Integritetspolicy | Ytterman',
    description: 'Läs hur Ytterman hanterar kontaktuppgifter och andra personuppgifter.',
  },
  tack: {
    title: 'Tack för din förfrågan | Ytterman',
    description: 'Tack för din förfrågan om kontrollansvarig, BAS-P eller BAS-U. Vi går igenom uppgifterna och återkommer med nästa steg.',
  },
  'kontrollansvarig-sundsvall': {
    title: 'Kontrollansvarig i Sundsvall | Ytterman',
    description: 'Certifierad kontrollansvarig i Sundsvall med över 20 års erfarenhet. Se 2026-priser och begär en offert anpassad till projektets omfattning.',
  },
  'kontrollansvarig-harnosand': {
    title: 'Kontrollansvarig i Härnösand | Ytterman',
    description: 'Certifierad kontrollansvarig i Härnösand med över 20 års erfarenhet. Omfattning, resor och pris specificeras i projektets offert.',
  },
  'kontrollansvarig-i-fjallen': {
    title: 'Kontrollansvarig i fjällen | Ytterman',
    description: 'Förfrågningar om kontrollansvarig för fjällhus och fritidshus bedöms utifrån plats, kontrollbehov, behörighet och kapacitet. Resor specificeras i offerten.',
  },
  'kontrollansvarig-timra': {
    title: 'Kontrollansvarig i Timrå – certifierad KA | Ytterman',
    description: 'Certifierad kontrollansvarig i Timrå med över 20 års erfarenhet. Omfattning, resor och pris specificeras i projektets offert.',
  },
  'kontrollansvarig-kramfors': {
    title: 'Kontrollansvarig i Kramfors | Ytterman',
    description: 'Certifierad kontrollansvarig i Kramfors med över 20 års erfarenhet. Omfattning, resor och pris specificeras i projektets offert.',
  },
  'kontrollansvarig-solleftea': {
    title: 'Kontrollansvarig i Sollefteå | Ytterman',
    description: 'Certifierad kontrollansvarig i Sollefteå med över 20 års erfarenhet. Omfattning, resor och pris specificeras i projektets offert.',
  },
  'overlatelsebesiktning-sundsvall': {
    title: 'Överlåtelsebesiktning i Sundsvall | Ytterman',
    description: 'Överlåtelsebesiktning i Sundsvall med över 20 års erfarenhet i byggbranschen. Omfattning och leveranstid bekräftas vid bokning.',
  },
  'overlatelsebesiktning-harnosand': {
    title: 'Överlåtelsebesiktning Härnösand - Erfaren Besiktningsman | Ytterman',
    description: 'Överlåtelsebesiktning i Härnösand med över 20 års erfarenhet i byggbranschen. Omfattning och leveranstid bekräftas vid bokning.',
  },
  'overlatelsebesiktning-timra': {
    title: 'Överlåtelsebesiktning Timrå | Ytterman',
    description: 'Överlåtelsebesiktning i Timrå med över 20 års erfarenhet i byggbranschen. Omfattning och leveranstid bekräftas vid bokning.',
  },
  'overlatelsebesiktning-kramfors': {
    title: 'Överlåtelsebesiktning i Kramfors | Ytterman',
    description: 'Överlåtelsebesiktning i Kramfors med över 20 års erfarenhet i byggbranschen. Omfattning och leveranstid bekräftas vid bokning.',
  },
  'overlatelsebesiktning-solleftea': {
    title: 'Överlåtelsebesiktning Sollefteå - Erfaren Besiktningsman | Ytterman',
    description: 'Överlåtelsebesiktning i Sollefteå med över 20 års erfarenhet i byggbranschen. Omfattning och leveranstid bekräftas vid bokning.',
  },
  'overlatelsebesiktning-ornskoldsvik': {
    title: 'Överlåtelsebesiktning i Örnsköldsvik | Ytterman',
    description: 'Överlåtelsebesiktning i Örnsköldsvik med över 20 års erfarenhet i byggbranschen. Omfattning och leveranstid bekräftas vid bokning.',
  },
  'overlatelsebesiktning-ange': {
    title: 'Överlåtelsebesiktning Ånge - Erfaren Besiktningsman | Ytterman',
    description: 'Överlåtelsebesiktning i Ånge med över 20 års erfarenhet i byggbranschen. Omfattning och leveranstid bekräftas vid bokning.',
  },
  'guider/kontrollansvarig': {
    title: 'Kontrollansvarigs roll i byggprocessen | Ytterman',
    description: 'Guide till kontrollansvarigs roll enligt PBL, kontrollplan, byggplatsbesök, avvikelser och utlåtande inför slutbesked.',
  },
  'guider/bas': {
    title: 'BAS-P och BAS-U Guide - Arbetsmiljösamordning 2026 | Ytterman',
    description: 'Guide om BAS-P och BAS-U, skillnader och aktuellt regelverk enligt AFS 2023:3. Praktiska råd från Tobias Ytterman i Västernorrland.',
  },
  'guider/bygglov': {
    title: 'Bygglovsprocessen – lov, startbesked och slutbesked | Ytterman',
    description: 'Praktisk guide till bygglovsprocessens beslut, handlingar, kontrollplan, tekniskt samråd, startbesked och slutbesked.',
  },
  'guider/kvalitetskontroll': {
    title: 'Kvalitetskontroll i byggprojekt – roller och dokumentation | Ytterman',
    description: 'Guide till projekteringskontroll, kontrollplan enligt PBL, entreprenörens egenkontroll, sakkunnigkontroll och separat besiktning.',
  },
  'guider/overlatelsebesiktning': {
    title: 'Överlåtelsebesiktning – omfattning och rapport | Ytterman',
    description: 'Guide till okulär överlåtelsebesiktning, åtkomlighet, begränsningar, rapport och fortsatt teknisk utredning.',
  },
  'guider/energi': {
    title: 'Energideklaration – certifierad energiexpert via partner | Ytterman',
    description: 'Guide till energideklaration, energiprestanda, underlag och partnerleverans. Ytterman samordnar; certifierad energiexpert utför och registrerar.',
  },
  'guider/miljo': {
    title: 'Miljöarbete i byggprojekt – mål och verifiering | Ytterman',
    description: 'Guide till strukturerat miljöarbete i byggprojekt: energi, material, återbruk, avfall, innemiljö och spårbar verifiering.',
  },
  'guider/digitala-verktyg': {
    title: 'Digitala verktyg för byggprojekt | Ytterman',
    description: 'Översikt över digitala verktyg för projekthantering, dokumentation och kommunikation i byggprojekt.',
  },
  'guider/kontrollansvarig-bygglov': {
    title: 'Kontrollansvarig och bygglov – roll och process | Ytterman',
    description: 'Guide till när kontrollansvarig kan krävas, förslag till kontrollplan, tekniskt samråd, uppföljning och underlag inför slutbesked.',
  },
  'guider/kontrollansvarig-certifiering': {
    title: 'Kontrollansvarig certifiering – verifiera KA | Ytterman',
    description: 'Guide till hur du verifierar en kontrollansvarigs certifikat, behörighet och giltighetstid. Tobias Ytterman: Kiwa KA11926, behörighet N.',
  },
  'guider/kontrollansvarig-ansvar': {
    title: 'Kontrollansvarigs roll enligt PBL – ansvar och avgränsning | Ytterman',
    description: 'Guide till kontrollansvarigs uppgifter: kontrollplan, uppföljning, avvikelser och utlåtande inför slutbesked.',
  },
  'guider/kontrollansvarig-timpris': {
    title: 'Kontrollansvarig pris 2026 – paket och villkor | Ytterman',
    description: 'Paketpriser 2026 för kontrollansvarig: tillbyggnad, ombyggnation, fritidshus och paket med BAS-P/U. Alla belopp inklusive moms.',
  },
  'guider/bas-p-guide': {
    title: 'BAS-P Guide 2026 - Arbetsmiljösamordnare Projektering | Västernorrland',
    description: 'BAS-P-guide om riskarbete, projekteringssamordning, arbetsmiljöplan och överlämning enligt AFS 2023:3.',
  },
  'guider/bas-u-guide': {
    title: 'BAS-U Guide 2026 - Arbetsmiljösamordnare Utförande | Västernorrland',
    description: 'BAS-U-guide om samordning, arbetsmiljöplan, riskuppföljning och ansvarsfördelning enligt AFS 2023:3.',
  },
  'guider/vad-ar-bas': {
    title: 'Vad är BAS? - Förklaring av BAS-P och BAS-U 2026 | Västernorrland',
    description: 'Guide till BAS-P och BAS-U, rollernas skeden, ansvarsfördelning och aktuellt regelverk AFS 2023:3.',
  },
  'guider/tekniskt-samrad': {
    title: 'Tekniskt samråd – syfte och process enligt PBL | Ytterman',
    description: 'Guide till när tekniskt samråd hålls, vilka som deltar och vad byggnadsnämnden går igenom inför beslut om startbesked.',
  },
  'guider/kontrollplan': {
    title: 'Kontrollplan Bygglov - Guide till PBL Kontrollplan 2026',
    description: 'Detaljerad guide om kontrollplan i byggprojekt. Vad kontrollplanen ska innehålla, kontrollpunkter och hur den används. Från erfaren kontrollansvarig.',
  },
  'guider/slutbesked': {
    title: 'Slutbesked Bygglov - Guide till Process & Krav 2026',
    description: 'Guide till underlag inför slutbesked, byggherrens begäran, kontrollansvarigs utlåtande och byggnadsnämndens beslut.',
  },
  'guider/vasternorrland': {
    title: 'Byggprojekt i Västernorrland – kontrollansvarig och kommun',
    description: 'Guide till kontrollansvarig, kommunala beslut och projektunderlag i Västernorrland. Aktuella krav och handläggningstider kontrolleras alltid med kommunen.',
  },
  'guider/bygglovsguide-vanliga-misstag-husbygge': {
    title: 'Bygglovsguide – vanliga misstag och rollfördelning | Ytterman',
    description: 'Undvik missförstånd om lov, startbesked, kontrollansvarig, BAS, kontrollplan, ändringar och slutbesked.',
  },
  produkter: {
    title: 'Digitala verktyg – intresseanmälan | Ytterman',
    description: 'Ytterman utvecklar digitala planeringsverktyg för byggprojekt. För närvarande visas de som intresseanmälan tills betalning och automatisk leverans är verifierade.',
  },
  'byggstart-planerare': {
    title: 'Byggstart-planerare – intresseanmälan | Ytterman',
    description: 'Anmäl intresse för ett digitalt planeringsverktyg för byggstart. Pris, villkor och leverans bekräftas före beställning.',
  },
  blogg: {
    title: 'Blogg – Byggkunskap & Tips | Ytterman',
    description: 'Guider och kunskap om kontrollansvarig, BAS-P, BAS-U, bygglov och byggprocessen i Västernorrland.',
  },
};

let created = 0;
const baseHtml = readFileSync(indexPath, 'utf-8');

const getRouteUrl = (route) => `${DOMAIN}/${route}/`;

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const upsertTag = (html, pattern, replacement, anchor) => {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace(anchor, `${anchor}\n    ${replacement}`);
};

const updateTitleTag = (html, title) => {
  const escapedTitle = escapeHtml(title);

  if (/<title>[^<]*<\/title>/.test(html)) {
    return html.replace(/<title>[^<]*<\/title>/, `<title>${escapedTitle}</title>`);
  }

  return html.replace('<head>', `<head>\n    <title>${escapedTitle}</title>`);
};

for (const route of routes) {
  const routeDir = join(distPath, route);
  const dest = join(routeDir, 'index.html');
  mkdirSync(routeDir, { recursive: true });
  const routeUrl = getRouteUrl(route);
  const seoData = routeSeoData[route];
  let routeHtml = baseHtml;

  if (!seoData) {
    console.warn(`⚠️  Missing SEO metadata for route: ${route}`);
  }

  const rawPageTitle = seoData?.title ?? DEFAULT_TITLE;
  const rawPageDescription = seoData?.description ?? DEFAULT_DESCRIPTION;
  const pageTitle = escapeHtml(rawPageTitle);
  const pageDescription = escapeHtml(rawPageDescription);

  routeHtml = upsertTag(
    routeHtml,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${routeUrl}" />`,
    '<meta name="robots" content="index, follow" />'
  );

  routeHtml = upsertTag(
    routeHtml,
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${routeUrl}" />`,
    `<meta property="og:description" content="${DEFAULT_DESCRIPTION}" />`
  );

  routeHtml = updateTitleTag(routeHtml, rawPageTitle);

  routeHtml = upsertTag(
    routeHtml,
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${pageDescription}" />`,
    '<meta name="author" content="Tobias Ytterman" />'
  );

  routeHtml = upsertTag(
    routeHtml,
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${pageTitle}" />`,
    '<meta property="og:type" content="website" />'
  );

  routeHtml = upsertTag(
    routeHtml,
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${pageDescription}" />`,
    `<meta property="og:title" content="${pageTitle}" />`
  );

  routeHtml = upsertTag(
    routeHtml,
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${pageTitle}" />`,
    '<meta name="twitter:card" content="summary_large_image" />'
  );

  routeHtml = upsertTag(
    routeHtml,
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${pageDescription}" />`,
    `<meta name="twitter:title" content="${pageTitle}" />`
  );

  writeFileSync(dest, routeHtml, 'utf-8');
  console.log(`  ✓ ${route}/index.html`);
  created++;
}

console.log(`\n✅ Created ${created} route directories for GitHub Pages SPA routing`);
