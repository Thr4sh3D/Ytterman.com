const SITE_URL = 'https://ytterman.com';

const defaultRobots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

const defineRoute = ({
  id,
  path,
  title,
  description,
  keywords = [],
  pageType = 'WebPage',
  serviceKey,
  indexable = true,
  prerender = true,
  priority = '0.5',
  changefreq = 'monthly',
  dateModified,
}) => ({
  id,
  path,
  indexable,
  prerender,
  sitemap: indexable ? { priority, changefreq } : null,
  meta: {
    title,
    description,
    keywords,
    robots: indexable ? defaultRobots : 'noindex, follow',
    image: `${SITE_URL}/og-image.png`,
  },
  schema: { pageType, serviceKey, dateModified },
});

const coreRoutes = [
  defineRoute({
    id: 'home', path: '/', priority: '1.0', changefreq: 'weekly', pageType: 'WebPage',
    title: 'Kontrollansvarig & överlåtelsebesiktning i Västernorrland | Ytterman',
    description: 'Kiwa-certifierad kontrollansvarig i Västernorrland. Överlåtelsebesiktning från 9 900 kr inkl. moms. Tydliga villkor och över 20 års byggerfarenhet.',
    keywords: ['kontrollansvarig Västernorrland', 'överlåtelsebesiktning Västernorrland', 'husbesiktning', 'Tobias Ytterman'],
  }),
  defineRoute({
    id: 'services', path: '/tjanster', priority: '0.9', pageType: 'CollectionPage',
    title: 'Tjänster inom KA, BAS och bygg | Ytterman',
    description: 'Kontrollansvarig, BAS-P, BAS-U, bygglovshandlingar och överlåtelsebesiktning. Energideklaration samordnas via behörig partner.',
    keywords: ['byggtjänster', 'kontrollansvarig', 'BAS-P', 'BAS-U', 'energideklaration'],
  }),
  defineRoute({
    id: 'contact', path: '/kontakt', priority: '0.9', pageType: 'ContactPage',
    title: 'Kontakta Ytterman – beskriv ditt byggprojekt',
    description: 'Skicka projekttyp, ort, tidplan och tillgängliga handlingar för besked om upplägg och offert från Ytterman.',
    keywords: ['kontakt kontrollansvarig', 'offert KA', 'offert BAS'],
  }),
  defineRoute({
    id: 'about', path: '/om', priority: '0.7', pageType: 'AboutPage',
    title: 'Om Tobias Ytterman – certifierad kontrollansvarig',
    description: 'Lär känna Tobias Ytterman: Kiwa-certifierad kontrollansvarig, utbildad för BAS-P/BAS-U och ansluten till SBR.',
    keywords: ['Tobias Ytterman', 'Kiwa KA11926', 'kontrollansvarig', 'SBR'],
  }),
  defineRoute({
    id: 'faq', path: '/faq', priority: '0.8', pageType: 'FAQPage',
    title: 'Vanliga frågor om KA, BAS och byggprojekt | Ytterman',
    description: 'Svar om kontrollansvarig, BAS-P, BAS-U, kontrollplan, priser, offert och byggprocessen.',
    keywords: ['frågor kontrollansvarig', 'frågor BAS-P', 'kontrollplan FAQ'],
  }),
  defineRoute({
    id: 'prices', path: '/priser', priority: '0.9', pageType: 'WebPage',
    title: 'Priser för kontrollansvarig och KA + BAS 2026 | Ytterman',
    description: 'Paketpriser inklusive moms för tillbyggnad, ombyggnation och fritidshus samt kombinerade uppdrag med KA och BAS-P/U.',
    keywords: ['kontrollansvarig pris', 'KA pris 2026', 'KA BAS paket'],
  }),
  defineRoute({
    id: 'business', path: '/foretag', priority: '0.8', pageType: 'WebPage',
    title: 'KA och BAS för företag och fastighetsägare | Ytterman',
    description: 'Projekt- och portföljförfrågningar för byggföretag, arkitekter, fastighetsägare och bostadsrättsföreningar som behöver KA eller BAS-P/U.',
    keywords: ['kontrollansvarig företag', 'BAS byggföretag', 'projektportfölj bygg'],
  }),
  defineRoute({
    id: 'collaboration', path: '/samarbeta', priority: '0.5', pageType: 'WebPage',
    title: 'Intresseanmälan för KA och energiexperter | Ytterman',
    description: 'Certifierade kontrollansvariga N/K och certifierade energiexperter kan anmäla intresse för möjliga framtida samarbeten.',
    keywords: ['samarbete kontrollansvarig', 'certifierad KA', 'certifierad energiexpert'],
  }),
  defineRoute({
    id: 'areas', path: '/omraden', priority: '0.7', pageType: 'CollectionPage',
    title: 'Områden för Yttermans byggtjänster | Västernorrland',
    description: 'Ytterman tar emot projektförfrågningar i Västernorrland. Tillgänglighet, platsbesök, resor och kostnader bekräftas per projekt.',
    keywords: ['kontrollansvarig Västernorrland', 'BAS Västernorrland'],
  }),
  defineRoute({
    id: 'thankYou', path: '/tack', indexable: false, pageType: 'WebPage',
    title: 'Tack för din förfrågan | Ytterman',
    description: 'Din projektförfrågan har skickats till Ytterman.',
  }),
  defineRoute({
    id: 'privacy', path: '/integritetspolicy', priority: '0.3', changefreq: 'yearly', pageType: 'WebPage',
    title: 'Integritetspolicy | Ytterman',
    description: 'Information om hur Ytterman behandlar personuppgifter, kontaktförfrågningar, cookies och mätdata.',
    keywords: ['integritetspolicy Ytterman', 'personuppgifter'],
  }),
  defineRoute({
    id: 'notFound', path: '/404', indexable: false, prerender: false, pageType: 'WebPage',
    title: 'Sidan hittades inte (404) | Ytterman',
    description: 'Sidan du söker finns inte. Gå vidare till Yttermans tjänster, guider eller kontakt.',
    keywords: [],
  }),
];

const serviceRoutes = [
  defineRoute({
    id: 'kontrollansvarig', path: '/kontrollansvarig', priority: '0.9', pageType: 'ServicePage', serviceKey: 'kontrollansvarig',
    title: 'Kontrollansvarig i Västernorrland | Ytterman',
    description: 'Kiwa-certifierad kontrollansvarig, KA11926, behörighet N för projekt av normal art. Kontrollplan, samråd, uppföljning och utlåtande.',
    keywords: ['kontrollansvarig', 'KA Västernorrland', 'kontrollplan', 'slutbesked'],
  }),
  defineRoute({
    id: 'kontrollansvarigFjall', path: '/kontrollansvarig-i-fjallen', priority: '0.8', pageType: 'ServicePage', serviceKey: 'kontrollansvarig',
    title: 'Kontrollansvarig för fjällhus och fritidshus | Ytterman',
    description: 'Förfrågan om kontrollansvarig för fjällhus och fritidshus. Behörighet, upplägg, platsbesök och resor bedöms för varje projekt.',
    keywords: ['kontrollansvarig fjällhus', 'KA fritidshus', 'bygglov fjällen'],
  }),
  defineRoute({
    id: 'basP', path: '/bas-p', priority: '0.9', pageType: 'ServicePage', serviceKey: 'basP',
    title: 'BAS-P i Västernorrland – projektering | Ytterman',
    description: 'Byggarbetsmiljösamordning under planering och projektering enligt AFS 2023:3. Omfattning och mandat anpassas till projektet.',
    keywords: ['BAS-P Västernorrland', 'byggarbetsmiljösamordnare projektering', 'AFS 2023:3'],
  }),
  defineRoute({
    id: 'basU', path: '/bas-u', priority: '0.9', pageType: 'ServicePage', serviceKey: 'basU',
    title: 'BAS-U i Västernorrland – utförande | Ytterman',
    description: 'Byggarbetsmiljösamordning under utförandet enligt AFS 2023:3 med samordning, riskuppföljning och arbetsmiljöplan.',
    keywords: ['BAS-U Västernorrland', 'byggarbetsmiljösamordnare utförande', 'AFS 2023:3'],
  }),
  defineRoute({
    id: 'energyDeclaration', path: '/energideklaration', priority: '0.8', pageType: 'ServicePage', serviceKey: 'energyDeclaration',
    title: 'Energideklaration via certifierad energiexpert | Ytterman',
    description: 'Ytterman erbjuder och samordnar energideklaration. En certifierad energiexpert hos behörig partner utför och registrerar deklarationen.',
    keywords: ['energideklaration', 'certifierad energiexpert', 'energiklass Västernorrland'],
  }),
  defineRoute({
    id: 'inspection', path: '/overlatelsebesiktning', priority: '0.8', pageType: 'ServicePage', serviceKey: 'inspection',
    title: 'Överlåtelsebesiktning i Västernorrland | Ytterman',
    description: 'Överlåtelsebesiktning från 9 900 kr inkl. moms av synliga och åtkomliga delar. Omfattning, begränsningar och slutligt pris bekräftas vid bokning.',
    keywords: ['överlåtelsebesiktning', 'husbesiktning', 'fastighetsbesiktning'],
  }),
  defineRoute({
    id: 'energyCalculation', path: '/energiberakning-online', priority: '0.6', pageType: 'WebPage', serviceKey: 'energyCalculation',
    title: 'Energiberäkning online via partner | Ytterman',
    description: 'Starta en aktiv energiberäkning på partnerns webbplats. Pris, villkor och leverans hanteras av partnern; Ytterman får provision via länken.',
    keywords: ['energiberäkning online', 'energiberäkning bygglov', 'energiberäkning via partner'],
  }),
  defineRoute({
    id: 'buildingPermitDocuments', path: '/bygglovshandlingar', priority: '0.8', pageType: 'ServicePage', serviceKey: 'buildingPermitDocuments',
    title: 'Bygglovshandlingar för ditt projekt | Ytterman',
    description: 'Planritningar, sektioner, situationsplan och teknisk beskrivning efter projektets och kommunens behov.',
    keywords: ['bygglovshandlingar', 'planritning', 'situationsplan'],
  }),
];

const kaCities = [
  ['Sundsvall', 'KA för normal art, tydlig rollfördelning och offertunderlag för projekt i Sundsvall.'],
  ['Härnösand', 'KA för normal art i Härnösand med tydlig avgränsning mot byggledning, projektering och besiktning.'],
  ['Timrå', 'Kontrollansvarig i Timrå med en spårbar process från offert och kontrollplan till utlåtande.'],
  ['Kramfors', 'Kontrollansvarig i Kramfors med planerade platsbesök, tydliga resevillkor och projektspecifik offert.'],
  ['Sollefteå', 'Kontrollansvarig i Sollefteå med fokus på komplett underlag, ändringshantering och tydlig offert.'],
];
const slugify = (value) => value.toLowerCase().replaceAll('å', 'a').replaceAll('ä', 'a').replaceAll('ö', 'o');

const localRoutes = [
  ...kaCities.map(([city, description]) => defineRoute({
    id: `kontrollansvarig${slugify(city).replace(/^./, (letter) => letter.toUpperCase())}`,
    path: `/kontrollansvarig-${slugify(city)}`,
    priority: '0.8',
    pageType: 'ServicePage',
    serviceKey: 'kontrollansvarig',
    title: `Kontrollansvarig i ${city} | Ytterman`,
    description,
    keywords: [`kontrollansvarig ${city}`, `KA ${city}`, `kontrollplan ${city}`],
  })),
];

export const redirectRegistry = Object.freeze([
  'sundsvall',
  'harnosand',
  'timra',
  'kramfors',
  'solleftea',
  'ornskoldsvik',
  'ange',
].map((city) => ({
  from: `/overlatelsebesiktning-${city}`,
  to: '/overlatelsebesiktning',
  reason: 'Tunn lokal dublett konsoliderad till regional tjänstesida',
})));

const guideDefinitions = [
  ['kontrollansvarig', 'Kontrollansvarigs roll i byggprocessen', 'Guide till KA-rollens uppgifter, kontrollplan, uppföljning, avvikelser och utlåtande inför slutbesked.'],
  ['nar-kravs-kontrollansvarig', 'När krävs en kontrollansvarig?', 'Kort guide till huvudregeln, undantag och byggnadsnämndens bedömning av om ett projekt behöver kontrollansvarig.'],
  ['bas', 'BAS-P och BAS-U – roller och skillnader', 'Guide till BAS-P och BAS-U, rollernas olika skeden och arbetsmiljösamordning enligt AFS 2023:3.'],
  ['bygglov', 'Bygglovsprocessen steg för steg', 'Guide till bygglov, handlingar, tekniskt samråd, startbesked, kontrollplan och slutbesked.'],
  ['kvalitetskontroll', 'Kontroller och kvalitet i byggprojekt', 'Skillnaden mellan kontrollplan, egenkontroll, sakkunnigkontroll och separat entreprenadbesiktning.'],
  ['overlatelsebesiktning', 'Överlåtelsebesiktning – omfattning och rapport', 'Guide till okulär överlåtelsebesiktning, åtkomlighet, begränsningar och fortsatt teknisk utredning.'],
  ['energi', 'Energideklaration – ansvar och partnerleverans', 'Guide till energideklaration och hur Ytterman samordnar leverans via partner med certifierad energiexpert.'],
  ['miljo', 'Miljöarbete i byggprojekt', 'Guide till mål, ansvar, energi, material, återbruk, avfall och verifierbar miljödokumentation.'],
  ['digitala-verktyg', 'Digitala verktyg för byggprojekt', 'Guide till digital projekthantering, dokumentation och kommunikation i byggprojekt.'],
  ['kontrollansvarig-bygglov', 'Kontrollansvarig i bygglovsprocessen', 'Guide till kontrollansvarigs roll från kontrollplan och tekniskt samråd till utlåtande inför slutbesked.'],
  ['kontrollansvarig-certifiering', 'Kontrollansvarig certifiering – verifiera KA', 'Så verifierar du certifikat, behörighet och giltighetstid för kontrollansvarig. Tobias Ytterman har Kiwa KA11926.'],
  ['kontrollansvarig-ansvar', 'Kontrollansvarigs ansvar och avgränsning', 'Guide till KA-rollens uppgifter och gränser mot byggherre, entreprenör, besiktningsman och byggnadsnämnd.'],
  ['kontrollansvarig-timpris', 'Kontrollansvarig pris 2026', 'Guide till Yttermans paketpriser för kontrollansvarig och kombinerade uppdrag med BAS-P/U.'],
  ['bas-p-guide', 'BAS-P – projektering och arbetsmiljösamordning', 'Guide till BAS-P:s samordningsuppgifter, riskarbete, arbetsmiljöplan och överlämning.'],
  ['bas-u-guide', 'BAS-U – samordning under utförandet', 'Guide till BAS-U:s samordningsuppgifter, riskuppföljning och arbetsmiljöplan under byggskedet.'],
  ['vad-ar-bas', 'Vad är BAS-P och BAS-U?', 'Förklaring av BAS-rollerna, när de behövs och hur ansvaret fördelas enligt AFS 2023:3.'],
  ['tekniskt-samrad', 'Tekniskt samråd enligt PBL', 'Guide till när tekniskt samråd hålls, vilka som deltar och vad byggnadsnämnden går igenom.'],
  ['kontrollplan', 'Kontrollplan i byggprojekt', 'Guide till förslag till kontrollplan, kontrollpunkter, ansvar, verifiering och uppföljning enligt PBL.'],
  ['slutbesked', 'Slutbesked – krav och process', 'Guide till byggherrens underlag, kontrollansvarigs utlåtande och byggnadsnämndens beslut om slutbesked.'],
  ['vasternorrland', 'Byggprojekt i Västernorrland', 'Guide till kontrollansvarig, kommunala beslut och projektunderlag för byggprojekt i Västernorrland.'],
  ['bygglovsguide-vanliga-misstag-husbygge', 'Bygglovsguide – vanliga misstag att förebygga', 'Praktisk guide om lov, startbesked, kontrollansvarig, BAS, ändringar, kontrollplan och slutbesked.'],
];

const guideRoutes = [
  defineRoute({
    id: 'guides', path: '/guider', priority: '0.7', pageType: 'CollectionPage',
    title: 'Guider om KA, BAS, bygglov och besiktning | Ytterman',
    description: 'Praktiska guider om kontrollansvarig, BAS-P/U, bygglov, kontrollplan, besiktning, energi och byggprojekt.',
    keywords: ['byggguider', 'kontrollansvarig guide', 'BAS guide'],
  }),
  ...guideDefinitions.map(([slug, title, description]) => defineRoute({
    id: `guide-${slug}`,
    path: `/guider/${slug}`,
    priority: '0.7',
    pageType: 'TechArticle',
    title: `${title} | Ytterman`,
    description,
    keywords: [title, 'Ytterman', 'Västernorrland'],
    dateModified: '2026-08-19',
  })),
];

const contentRoutes = [
  defineRoute({
    id: 'blog', path: '/blogg', priority: '0.7', pageType: 'CollectionPage',
    title: 'Guider och kunskap om byggprojekt | Ytterman',
    description: 'Artiklar och guider om kontrollansvarig, BAS, bygglov, arbetsmiljö och praktisk projektstyrning.',
    keywords: ['byggblogg', 'byggkunskap', 'kontrollansvarig artiklar'],
  }),
  defineRoute({
    id: 'products', path: '/produkter', priority: '0.6', pageType: 'CollectionPage',
    title: 'Energiberäkning online och digitala byggverktyg | Ytterman',
    description: 'Starta energiberäkning via aktiv extern partnertjänst eller anmäl intresse för Yttermans kommande digitala planeringsverktyg.',
    keywords: ['energiberäkning online', 'digitala byggverktyg', 'byggplanering'],
  }),
  defineRoute({
    id: 'buildingStartPlanner', path: '/byggstart-planerare', priority: '0.6', pageType: 'WebPage', serviceKey: 'buildingStartPlanner',
    title: 'Byggstart-planerare – intresseanmälan | Ytterman',
    description: 'Digitalt planeringsverktyg för byggstart. Skicka intresseanmälan; pris och leverans bekräftas före beställning.',
    keywords: ['byggstart planerare', 'planera byggprojekt'],
  }),
];

export const routeRegistry = Object.freeze([
  ...coreRoutes,
  ...serviceRoutes,
  ...localRoutes,
  ...guideRoutes,
  ...contentRoutes,
]);

export const ROUTE_PATHS = Object.freeze(Object.fromEntries(routeRegistry.map((route) => [route.id, route.path])));
export const routeByPath = new Map(routeRegistry.map((route) => [route.path, route]));

export const normalizeRoutePath = (path) => {
  if (!path || path === '/') return '/';
  return `/${path.replace(/^\/+|\/+$/g, '')}`;
};

export const getRouteByPath = (path) => routeByPath.get(normalizeRoutePath(path));
export const getPrerenderRoutes = () => routeRegistry.filter((route) => route.prerender).map((route) => route.path);
export const getSitemapRoutes = () => routeRegistry.filter((route) => route.indexable && route.sitemap);
export const toCanonicalUrl = (path) => {
  const normalized = normalizeRoutePath(path);
  return normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}/`;
};

export { SITE_URL };
