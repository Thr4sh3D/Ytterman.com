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
const DEFAULT_DESCRIPTION = 'Certifierad kontrollansvarig och BAS-P/BAS-U i Västernorrland. Över 20 års erfarenhet i byggbranschen. Snabb hantering, digitala verktyg och trygg byggprocess.';

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
    title: 'FAQ Kontrollansvarig & BAS - 32+ Frågor & Svar | Västernorrland',
    description: 'Komplett FAQ om kontrollansvarig, BAS-P, BAS-U, bygglov, certifiering, priser och lokala tjänster i Sundsvall, Härnösand, Timrå. Expertråd från Tobias Ytterman. Svar på alla dina frågor!',
  },
  kontakt: {
    title: 'Kontakta Ytterman - Kontrollansvarig & BAS Västernorrland',
    description: 'Behöver du kontrollansvarig eller BAS? Ring 076-111 84 47 eller mejla tobias@ytterman.com. Kostnadsfri konsultation. Svar inom 24h!',
  },
  guider: {
    title: 'Bygguider - Kontrollansvarig, BAS, Bygglov & Mer | Ytterman',
    description: 'Omfattande guider om byggprocessen: Kontrollansvarig, BAS-P/BAS-U, bygglov, energideklaration, överlåtelsebesiktning. Expertråd från certifierad byggkonsult i Västernorrland.',
  },
  energideklaration: {
    title: 'Energideklaration i Västernorrland | Ytterman',
    description: 'Behöver du energideklaration? Certifierad energiexpert med 20+ års erfarenhet i Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors. Snabb handläggning.',
  },
  om: {
    title: 'Om Ytterman - Kontrollansvarig & BAS-expert i Västernorrland',
    description: 'Lär känna Tobias Ytterman - certifierad kontrollansvarig och BAS-expert med över 20 års erfarenhet i byggbranschen. Trygg byggprocess i Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors.',
  },
  tjanster: {
    title: 'Byggtjänster Västernorrland - KA, BAS, Energiberäkning | Ytterman',
    description: 'Kontrollansvarig, BAS-P, BAS-U, energiberäkning online och bygglovshandlingar. 20+ års erfarenhet. Fast pris. Sundsvall, Härnösand, Sollefteå. Offert på 24h!',
  },
  priser: {
    title: 'Priser Kontrollansvarig & BAS 2025 - Timpris & Fastpris | Ytterman',
    description: 'Transparenta priser för kontrollansvarig, BAS-P och BAS-U. Timpris 1,200-1,800 kr/h eller fastpris från 19,999 kr. Kostnadsfri offert - Ring 076-111 84 47!',
  },
  omraden: {
    title: 'Kontrollansvarig & Besiktningsman Sundsvall, Härnösand | Ytterman',
    description: 'Certifierad kontrollansvarig, besiktningsman och byggkonsult i Västernorrland. Sundsvall, Härnösand, Sollefteå, Kramfors, Örnsköldsvik. Snabb service utan reskostnader.',
  },
  kontrollansvarig: {
    title: 'Kontrollansvarig i Västernorrland - Certifierad & Erfaren | Ytterman',
    description: 'Behöver du en kontrollansvarig? Certifierad kontrollansvarig med 20+ års erfarenhet i Sundsvall, Härnösand, Timrå, Kramfors och Sollefteå. Fast pris, trygg process.',
  },
  'bas-p': {
    title: 'BAS-P i Västernorrland | Ytterman',
    description: 'Behöver du BAS-P? Certifierad byggarbetsmiljösamordnare under projektering med 20+ års erfarenhet i Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors.',
  },
  'bas-u': {
    title: 'BAS-U i Västernorrland | Ytterman',
    description: 'Behöver du BAS-U? Certifierad byggarbetsmiljösamordnare under utförande med 20+ års erfarenhet i Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors.',
  },
  overlatelsebesiktning: {
    title: 'Överlåtelsebesiktning Sundsvall & Härnösand | Ytterman',
    description: 'Behöver du överlåtelsebesiktning? 20+ års erfarenhet i byggbranschen. Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors. Boka online eller kontakta oss.',
  },
  'energiberakning-online': {
    title: 'Energiberäkning online för bygglov | Ytterman',
    description: 'Gör din energiberäkning online snabbt och enkelt. Professionell kvalitet till fast pris 2,999 kr. Sundsvall, Härnösand, Sollefteå. Svar inom minuter!',
  },
  bygglovshandlingar: {
    title: 'Bygglovshandlingar i Västernorrland | Ytterman',
    description: 'Behöver du bygglovshandlingar? Vi tar fram kompletta handlingar för bygglov: planritningar, fasadritningar, sektioner och energiberäkningar. Från 8,000 kr.',
  },
  integritetspolicy: {
    title: 'Integritetspolicy - MTY Konsult | Ytterman',
    description: 'Läs vår integritetspolicy för MTY Konsult. Vi värnar om din integritet och personuppgifter enligt GDPR.',
  },
  tack: {
    title: 'Tack för din förfrågan - Vi återkommer inom 24h | Ytterman',
    description: 'Tack för din förfrågan om kontrollansvarig, BAS-P eller BAS-U. Vi återkommer inom 24 timmar med kostnadsfri konsultation och fast prisoffert.',
  },
  'kontrollansvarig-sundsvall': {
    title: 'Kontrollansvarig i Sundsvall | Ytterman',
    description: 'Certifierad kontrollansvarig i Sundsvall. Kontor i Viksjö med 20+ års erfarenhet. Fast pris, snabb service för villor, tillbyggnader och kommersiella projekt. Boka kostnadsfri konsultation.',
  },
  'kontrollansvarig-harnosand': {
    title: 'Kontrollansvarig Härnösand - Certifierad KA & Kulturbyggnad | Ytterman',
    description: 'Certifierad kontrollansvarig i Härnösand. Specialkunskap om K-märkta byggnader och kulturhistorisk bebyggelse. 20+ års erfarenhet, fast pris. Boka kostnadsfri konsultation.',
  },
  'kontrollansvarig-i-fjallen': {
    title: 'Kontrollansvarig i fjällen | Ytterman',
    description: 'Certifierad kontrollansvarig (KA) och BAS-P/BAS-U för fjällhus och fritidshus. Täcker Åre, Vemdalen, Funäsdalen, Hemavan och hela fjällkedjan. Digital uppföljning + paketerade platsbesök.',
  },
  'kontrollansvarig-timra': {
    title: 'Kontrollansvarig Timrå - Certifierad KA Nära Till Hands | Ytterman',
    description: 'Certifierad kontrollansvarig i Timrå. Bara 20 min bort, snabb service för villor och industriprojekt. 20+ års erfarenhet, fast pris. Boka kostnadsfri konsultation.',
  },
  'kontrollansvarig-kramfors': {
    title: 'Kontrollansvarig i Kramfors | Ytterman',
    description: 'Certifierad kontrollansvarig i Kramfors. Erfarenhet av tätort och landsbygd, inga reskostnader. 20+ års erfarenhet, fast pris. Boka kostnadsfri konsultation.',
  },
  'kontrollansvarig-solleftea': {
    title: 'Kontrollansvarig i Sollefteå | Ytterman',
    description: 'Certifierad kontrollansvarig i Sollefteå. Erfarenhet av landsbygdsbyggnation och klimatanpassat byggande. 20+ års erfarenhet, inga reskostnader. Boka kostnadsfri konsultation.',
  },
  'overlatelsebesiktning-sundsvall': {
    title: 'Överlåtelsebesiktning i Sundsvall | Ytterman',
    description: 'Överlåtelsebesiktning i Sundsvall. Kontor i Viksjö, 20+ års erfarenhet. Detaljerad rapport inom 48 timmar. Villor, bostadsrätter och fastigheter. Boka din besiktning idag.',
  },
  'overlatelsebesiktning-harnosand': {
    title: 'Överlåtelsebesiktning Härnösand - Erfaren Besiktningsman | Ytterman',
    description: 'Överlåtelsebesiktning i Härnösand. Specialkunskap om kulturhistorisk bebyggelse och äldre trähus. 20+ års erfarenhet. Rapport inom 48 timmar. Boka besiktning.',
  },
  'overlatelsebesiktning-timra': {
    title: 'Överlåtelsebesiktning Timrå - Snabb Service & Lokal Närvaro | Ytterman',
    description: 'Överlåtelsebesiktning i Timrå. Bara 20 min bort, snabb service. 20+ års erfarenhet. Detaljerad rapport inom 48 timmar. Boka besiktning idag.',
  },
  'overlatelsebesiktning-kramfors': {
    title: 'Överlåtelsebesiktning i Kramfors | Ytterman',
    description: 'Överlåtelsebesiktning i Kramfors. Erfarenhet av tätort och landsbygd. 20+ års erfarenhet, inga reskostnader. Rapport inom 48 timmar. Boka besiktning.',
  },
  'overlatelsebesiktning-solleftea': {
    title: 'Överlåtelsebesiktning Sollefteå - Erfaren Besiktningsman | Ytterman',
    description: 'Överlåtelsebesiktning i Sollefteå. Erfarenhet av landsbygdsfastigheter och klimatanpassade byggnader. 20+ års erfarenhet, inga reskostnader. Boka besiktning.',
  },
  'overlatelsebesiktning-ornskoldsvik': {
    title: 'Överlåtelsebesiktning i Örnsköldsvik | Ytterman',
    description: 'Överlåtelsebesiktning i Örnsköldsvik. 20+ års erfarenhet, detaljerad rapport inom 48 timmar. Villor, bostadsrätter och fastigheter i hela kommunen. Boka besiktning.',
  },
  'overlatelsebesiktning-ange': {
    title: 'Överlåtelsebesiktning Ånge - Erfaren Besiktningsman | Ytterman',
    description: 'Överlåtelsebesiktning i Ånge. Erfarenhet av landsbygdsfastigheter och inlandsklimatet. 20+ års erfarenhet. Rapport inom 48 timmar. Boka besiktning idag.',
  },
  'guider/kontrollansvarig': {
    title: 'Kontrollansvarig Guide - Allt du behöver veta 2025 | Ytterman',
    description: 'Komplett guide om kontrollansvarigs roll, ansvar och när du behöver en. Expert råd från certifierad kontrollansvarig Tobias Ytterman i Västernorrland.',
  },
  'guider/bas': {
    title: 'BAS-P och BAS-U Guide - Säkerhetssamordning 2025 | Ytterman',
    description: 'Komplett guide om BAS-P och BAS-U roller, skillnader och lagkrav enligt AFS 1999:3. Expert råd från certifierad säkerhetssamordnare Tobias Ytterman i Västernorrland.',
  },
  'guider/bygglov': {
    title: 'Bygglov Guide Västernorrland - Sundsvall, Härnösand | Ytterman',
    description: 'Komplett guide för bygglovsprocessen i Västernorrlands kommuner. Handläggningstider, krav och tips från expert Tobias Ytterman.',
  },
  'guider/kvalitetskontroll': {
    title: 'Kvalitetskontroll Guide - Byggkvalitet & Kontrollpunkter | Ytterman',
    description: 'Komplett guide om kvalitetskontroll i byggprojekt. Kritiska kontrollpunkter, dokumentation och slutbesiktning. Expert råd från Tobias Ytterman.',
  },
  'guider/overlatelsebesiktning': {
    title: 'Guide: Överlåtelsebesiktning | Ytterman',
    description: 'Komplett guide om överlåtelsebesiktning vid fastighetsförsäljning. Processen, kostnad och vad som ingår. Expert råd från Tobias Ytterman i Västernorrland.',
  },
  'guider/energi': {
    title: 'Energideklaration Guide - Energiklass & Besparingspotential | Ytterman',
    description: 'Komplett guide om energideklaration för fastigheter. Energiklasser, lagkrav, besparingstips och processen. Expert råd från Tobias Ytterman i Västernorrland.',
  },
  'guider/miljo': {
    title: 'Miljötänk Byggprocess - Hållbart Byggande & Certifiering | Ytterman',
    description: 'Guide till hållbart byggande och miljötänk. BREEAM, LEED, energieffektivisering och miljöcertifiering. Expert råd från Tobias Ytterman.',
  },
  'guider/digitala-verktyg': {
    title: 'Digitala verktyg för byggprojekt | Ytterman',
    description: 'Guide till moderna digitala verktyg för byggprojekt. Projekthantering, dokumentation och kommunikation. Expert råd från Tobias Ytterman.',
  },
  'guider/kontrollansvarig-bygglov': {
    title: 'Kontrollansvarig Bygglov - Roll, Ansvar & Process 2025 | Ytterman',
    description: 'Komplett guide om kontrollansvarigs roll vid bygglov. När KA behövs, ansvar i processen och hur vi hjälper dig. Expert råd från Tobias Ytterman i Västernorrland.',
  },
  'guider/kontrollansvarig-certifiering': {
    title: 'Kontrollansvarig Certifiering - Krav & Process 2025 | Boverket',
    description: 'Allt om certifiering för kontrollansvariga. Vilka krav gäller, vilken utbildning behövs och hur certifieringsprocessen fungerar. Expertguide från certifierad KA.',
  },
  'guider/kontrollansvarig-ansvar': {
    title: 'Kontrollansvarig Ansvar - Skyldigheter & Juridik 2025 | PBL',
    description: 'Fullständig genomgång av kontrollansvarigs ansvar enligt Plan- och bygglagen. Juridiskt ansvar, skyldigheter, försäkring och konsekvenser vid fel.',
  },
  'guider/kontrollansvarig-timpris': {
    title: 'Kontrollansvarig Pris & Timpris 2025 - Vad Kostar KA? | Västernorrland',
    description: 'Komplett guide om priser för kontrollansvarig. Timpris, totalpriser för olika projekt och vad som påverkar kostnaden. Transparenta priser från erfaren KA.',
  },
  'guider/bas-p-guide': {
    title: 'BAS-P Guide 2025 - Arbetsmiljösamordnare Projektering | Västernorrland',
    description: 'Allt om BAS-P (Byggarbetsmiljösamordnare Projektering). Ansvar, arbetsmiljöplan, krav och skillnad mot BAS-U. Expert guide från erfaren BAS-samordnare.',
  },
  'guider/bas-u-guide': {
    title: 'BAS-U Guide 2025 - Arbetsmiljösamordnare Utförande | Västernorrland',
    description: 'Komplett guide om BAS-U (Byggarbetsmiljösamordnare Utförande). Ansvar, säkerhetsronder, samordning och hur BAS-U arbetar på byggarbetsplatsen.',
  },
  'guider/vad-ar-bas': {
    title: 'Vad är BAS? - Förklaring av BAS-P och BAS-U 2025 | Västernorrland',
    description: 'Enkel guide som förklarar vad BAS (Byggarbetsmiljösamordnare) är, skillnaden mellan BAS-P och BAS-U och när du behöver anlita BAS. Från erfaren samordnare.',
  },
  'guider/tekniskt-samrad': {
    title: 'Tekniskt Samråd - Guide till PBL Samråd 2025 | Västernorrland',
    description: 'Allt om tekniskt samråd i byggprocessen. Vad som behandlas, vilka som deltar och hur samrådsmötet genomförs. Expert guide från erfaren kontrollansvarig.',
  },
  'guider/kontrollplan': {
    title: 'Kontrollplan Bygglov - Guide till PBL Kontrollplan 2025',
    description: 'Detaljerad guide om kontrollplan i byggprojekt. Vad kontrollplanen ska innehålla, kontrollpunkter och hur den används. Från erfaren kontrollansvarig.',
  },
  'guider/slutbesked': {
    title: 'Slutbesked Bygglov - Guide till Process & Krav 2025',
    description: 'Allt om slutbesked i byggprocessen. Hur du ansöker, vilka dokument som krävs och vad som händer efter slutbesked. Guide från erfaren kontrollansvarig.',
  },
  'guider/vasternorrland': {
    title: 'Kontrollansvarig Västernorrland - Guide till Bygglov & Regler 2025',
    description: 'Allt om kontrollansvarig och bygglov i Västernorrlands kommuner. Specifik information för Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå och Örnsköldsvik.',
  },
  'guider/bygglovsguide-vanliga-misstag-husbygge': {
    title: 'Bygglovsguide: 12 vanliga misstag | Ytterman',
    description: 'Komplett bygglovsguide för husbygge i Västernorrland. Lär dig processen, kontrollplan, tekniskt samråd, KA-krav och undvik de 12 vanligaste misstagen. Expert råd från Tobias Ytterman.',
  },
  produkter: {
    title: 'Digitala produkter för byggprojekt | Ytterman',
    description: 'Nedladdningsbara interaktiva verktyg för privatpersoner och proffs. Planera din byggstart offline med Yttermans digitala produkter.',
  },
  'byggstart-planerare': {
    title: 'Byggstart-planerare – Digital produkt för byggplanering | Ytterman',
    description: 'Ladda ned ett interaktivt digitalt verktyg för att planera din byggstart. Samla projektinfo, lov, handlingar, entreprenörer, budget och kontrollpunkter – öppnas direkt i webbläsaren.',
  },
  blogg: {
    title: 'Blogg – Byggkunskap & Tips | Ytterman',
    description: 'Expertartiklar om kontrollansvarig, BAS-P, BAS-U, bygglov och byggprocessen i Västernorrland. Ny kunskap publiceras varje dag.',
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
    '<meta property="og:description" content="Certifierad kontrollansvarig och BAS-P/BAS-U i Västernorrland. Över 20 års erfarenhet i byggbranschen. Snabb hantering, digitala verktyg och trygg byggprocess." />'
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
