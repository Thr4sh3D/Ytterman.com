import { COMPANY, KA_CERT, PRICING, formatSek } from '@/config/company';

export interface CityProcessStep {
  title: string;
  description: string;
}

export interface CityData {
  id: string;
  name: string;
  slug: string;
  municipality: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  focusTitle: string;
  focusIntro: string;
  focusPoints: readonly string[];
  process: readonly CityProcessStep[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  faq: Array<{ question: string; answer: string }>;
}

const priceAnswer = (city: string) =>
  `Paketpriserna ${PRICING.year} inklusive moms börjar på ${formatSek(PRICING.ka.extension.bas)} för KA Bas vid tillbyggnad. Ombyggnation och nyproduktion av fritidshus har egna Bas- och Pluspriser. Slutlig offert för projektet i ${city} lämnas efter bedömning av omfattning, underlag, platsbesök och resor.`;

const needAnswer = (city: string) =>
  `Det avgörs i det enskilda ärendet. Vid många lov-, rivnings- och markåtgärder behövs kontrollansvarig, medan vissa enklare åtgärder kan undantas. Byggnadsnämnden i ${city} lämnar besked för projektet; Ytterman kan hjälpa till att bedöma om uppdraget ryms inom ${KA_CERT.authorizationLabel.toLowerCase()}.`;

const sharedProcessEnd: CityProcessStep[] = [
  {
    title: 'Offert och uppdragsbekräftelse',
    description: 'Roll, omfattning, platsbesök, resor, kompletteringar och pris dokumenteras innan uppdraget startar.',
  },
  {
    title: 'Kontrollplan och uppföljning',
    description: 'KA biträder med förslag till kontrollplan, följer upp den beslutade planen och dokumenterar avtalade byggplatsbesök.',
  },
  {
    title: 'Utlåtande inför slutbesked',
    description: 'KA lämnar sitt utlåtande som underlag. Det är byggnadsnämnden som beslutar om slutbesked.',
  },
];

const cityEntries: CityData[] = [
  {
    id: 'sundsvall',
    name: 'Sundsvall',
    slug: 'kontrollansvarig-sundsvall',
    municipality: 'Sundsvalls kommun',
    heroTitle: 'Kontrollansvarig för byggprojekt i Sundsvall',
    heroDescription: 'Ytterman betjänar Sundsvall med certifierad kontrollansvarig för projekt av normal art. Skicka projektets grunduppgifter för bedömning och tydlig offert.',
    intro: 'För ett projekt i Sundsvall är den bästa starten att skilja på byggnadsnämndens beslut, byggherrens ansvar och kontrollansvarigs uppdrag. Den här sidan hjälper privatpersoner, företag och bostadsrättsföreningar att samla rätt offertunderlag utan att föregripa kommunens bedömning.',
    focusTitle: 'Få ordning på roller och underlag tidigt',
    focusIntro: 'En tidig underlagskontroll gör det lättare att avgränsa KA-uppdraget och jämföra offerter på samma grund.',
    focusPoints: [
      'Beskriv åtgärden och ange om lov eller anmälan redan har lämnats in.',
      'Bifoga beslut, ritningar och kommunens frågor om de finns.',
      'Ange önskad byggstart och vilka aktörer som redan är utsedda.',
      'Efterfråga separat omfattning för KA, BAS-P och BAS-U när flera roller är aktuella.',
    ],
    process: [
      { title: 'Förfrågan från Sundsvall', description: 'Du skickar projekttyp, fastighetsbeteckning, aktuellt skede, tidplan och tillgängliga handlingar.' },
      ...sharedProcessEnd,
    ],
    seo: {
      title: 'Kontrollansvarig i Sundsvall – KA för normal art | Ytterman',
      description: 'Ytterman betjänar Sundsvall med Kiwa-certifierad kontrollansvarig, behörighet N. Se process, tjänster, paketpriser och offertväg.',
      keywords: 'kontrollansvarig Sundsvall, KA Sundsvall, kontrollplan Sundsvall, KA pris Sundsvall',
    },
    faq: [
      { question: 'Betjänar Ytterman byggprojekt i Sundsvall?', answer: 'Ja. Ytterman tar emot projektförfrågningar från Sundsvall. Tillgänglighet, resor och platsbesök bekräftas efter genomgång av projektet.' },
      { question: 'Vad bör en offertförfrågan från Sundsvall innehålla?', answer: 'Beskriv åtgärden, fastigheten, ärendets skede, önskad tidplan och bifoga de beslut och ritningar som finns. Det räcker för en första bedömning; kompletterande underlag begärs vid behov.' },
      { question: 'Vad kostar kontrollansvarig i Sundsvall?', answer: priceAnswer('Sundsvall') },
      { question: 'När krävs kontrollansvarig i Sundsvall?', answer: needAnswer('Sundsvall') },
    ],
  },
  {
    id: 'harnosand',
    name: 'Härnösand',
    slug: 'kontrollansvarig-harnosand',
    municipality: 'Härnösands kommun',
    heroTitle: 'Kontrollansvarig i Härnösand med tydlig rollfördelning',
    heroDescription: 'Ytterman betjänar Härnösand med KA-tjänster för projekt av normal art. Uppdraget avgränsas mot projektering, byggledning och entreprenadbesiktning.',
    intro: 'När du söker kontrollansvarig i Härnösand är det viktigt att veta vad KA faktiskt ansvarar för – och vad som ligger kvar hos byggherre, projektörer och entreprenörer. Här får du en rak avgränsning och en offertväg för det aktuella projektet.',
    focusTitle: 'Skilj KA från byggledning och besiktning',
    focusIntro: 'Kontrollansvarig följer kontrollplanen enligt PBL men tar inte automatiskt över andra aktörers ansvar.',
    focusPoints: [
      'KA biträder byggherren med förslag till kontrollplan.',
      'KA följer upp kontroller och dokumenterar sina byggplatsbesök.',
      'Projektering och entreprenörernas utförandeansvar ligger kvar hos respektive aktör.',
      'Entreprenadrättslig slutbesiktning måste avtalas som ett separat uppdrag.',
    ],
    process: [
      { title: 'Avgränsa behovet', description: 'Förfrågan anger om behovet gäller enbart KA eller även BAS-P, BAS-U eller andra separata tjänster.' },
      ...sharedProcessEnd,
    ],
    seo: {
      title: 'Kontrollansvarig i Härnösand – tydligt KA-uppdrag | Ytterman',
      description: 'Ytterman betjänar Härnösand med certifierad KA, behörighet N. Läs om rollfördelning, process, priser och offertunderlag.',
      keywords: 'kontrollansvarig Härnösand, KA Härnösand, kontrollplan Härnösand, KA offert Härnösand',
    },
    faq: [
      { question: 'Betjänar Ytterman projekt i Härnösand?', answer: 'Ja. Ytterman tar emot förfrågningar om kontrollansvarig och övriga publicerade tjänster i Härnösand. Uppdrag bekräftas efter bedömning av behörighet och kapacitet.' },
      { question: 'Är kontrollansvarig samma sak som byggledare?', answer: 'Nej. KA-rollen följer av PBL och gäller bland annat kontrollplan, uppföljning, dokumentation och utlåtande. Byggledning är ett separat uppdrag.' },
      { question: 'Vad kostar kontrollansvarig i Härnösand?', answer: priceAnswer('Härnösand') },
      { question: 'När krävs kontrollansvarig i Härnösand?', answer: needAnswer('Härnösand') },
    ],
  },
  {
    id: 'timra',
    name: 'Timrå',
    slug: 'kontrollansvarig-timra',
    municipality: 'Timrå kommun',
    heroTitle: 'Kontrollansvarig i Timrå från offert till slutbesked',
    heroDescription: 'Ytterman betjänar Timrå med certifierad KA för projekt av normal art och en spårbar process från första underlag till utlåtande.',
    intro: 'För projekt i Timrå ger en tydlig ordningsföljd mindre risk för missförstånd: först bedöms ärendet och behörigheten, därefter avtalas omfattningen och sedan följs den kontrollplan som byggnadsnämnden beslutar om.',
    focusTitle: 'En process som går att följa',
    focusIntro: 'Varje steg ska lämna ett tydligt underlag till nästa – utan löften om kommunens beslut eller projektets tidsåtgång.',
    focusPoints: [
      'Förfrågan och handlingar samlas innan offert.',
      'Omfattning och planerade platsbesök skrivs in i uppdraget.',
      'Kontrollpunkter följs upp mot beslutad kontrollplan.',
      'Avvikelser och underlag hanteras löpande inför KA:s utlåtande.',
    ],
    process: [
      { title: 'Samla ärendet', description: 'Skicka beslutsunderlag, ritningar och en kort lägesbild för projektet i Timrå.' },
      ...sharedProcessEnd,
    ],
    seo: {
      title: 'Kontrollansvarig i Timrå – process och KA-pris | Ytterman',
      description: 'Ytterman betjänar Timrå med kontrollansvarig, behörighet N. Se processen från offert till utlåtande, tjänster och paketpriser.',
      keywords: 'kontrollansvarig Timrå, KA Timrå, kontrollplan Timrå, slutbesked Timrå',
    },
    faq: [
      { question: 'Tar Ytterman KA-uppdrag i Timrå?', answer: 'Ytterman tar emot förfrågningar från Timrå. Projektets art, omfattning, underlag och tidplan bedöms innan uppdraget bekräftas.' },
      { question: 'Vilka steg ingår i ett KA-uppdrag?', answer: 'Normalt ingår underlagsgenomgång, förslag till kontrollplan, avtalade möten och byggplatsbesök, uppföljning samt utlåtande inför slutbesked. Exakt omfattning står i offerten.' },
      { question: 'Vad kostar kontrollansvarig i Timrå?', answer: priceAnswer('Timrå') },
      { question: 'När krävs kontrollansvarig i Timrå?', answer: needAnswer('Timrå') },
    ],
  },
  {
    id: 'kramfors',
    name: 'Kramfors',
    slug: 'kontrollansvarig-kramfors',
    municipality: 'Kramfors kommun',
    heroTitle: 'Kontrollansvarig i Kramfors med planerade platsbesök',
    heroDescription: 'Ytterman betjänar Kramfors med KA för projekt av normal art. Behovet av platsbesök och resor bedöms och prissätts innan uppdraget startar.',
    intro: 'I ett KA-uppdrag i Kramfors behöver projektets kontrollbehov och planerade byggskeden vara tydliga redan i offerten. Då går det att planera relevanta platsbesök utan att lova restider, fasta resevillkor eller en omfattning som ännu inte är känd.',
    focusTitle: 'Planera besöken efter projektets kontrollbehov',
    focusIntro: 'Antalet byggplatsbesök är inte ett standardtal. De kopplas till projektets risker, kontrollplan och avtalade omfattning.',
    focusPoints: [
      'Ange preliminär byggstart och kända huvudmoment.',
      'Beskriv vilka kontroller som ska utföras av andra namngivna kontrollanter.',
      'Planerade KA-besök och deras syfte anges i offerten.',
      'Extra besök efter ändringar eller avvikelser avtalas separat.',
    ],
    process: [
      { title: 'Bedöm besöksbehovet', description: 'Projektets skeden, kontrollpunkter och tillgängliga handlingar används för att föreslå en rimlig besöksplan.' },
      ...sharedProcessEnd,
    ],
    seo: {
      title: 'Kontrollansvarig i Kramfors – KA och platsbesök | Ytterman',
      description: 'Ytterman betjänar Kramfors med certifierad KA, behörighet N. Läs om platsbesök, process, priser, resor och offertväg.',
      keywords: 'kontrollansvarig Kramfors, KA Kramfors, kontrollplan Kramfors, KA platsbesök Kramfors',
    },
    faq: [
      { question: 'Betjänar Ytterman byggprojekt i Kramfors?', answer: 'Ja. Projektförfrågningar från Kramfors bedöms mot behörighet, omfattning och aktuell kapacitet. Resor och platsbesök specificeras i offerten.' },
      { question: 'Hur många platsbesök ingår i Kramfors?', answer: 'Det finns inget generellt antal. Besöken planeras efter projektets art, kontrollplan, byggskeden och offertens omfattning.' },
      { question: 'Vad kostar kontrollansvarig i Kramfors?', answer: priceAnswer('Kramfors') },
      { question: 'När krävs kontrollansvarig i Kramfors?', answer: needAnswer('Kramfors') },
    ],
  },
  {
    id: 'solleftea',
    name: 'Sollefteå',
    slug: 'kontrollansvarig-solleftea',
    municipality: 'Sollefteå kommun',
    heroTitle: 'Kontrollansvarig i Sollefteå med fokus på komplett underlag',
    heroDescription: 'Ytterman betjänar Sollefteå med KA för projekt av normal art. Tydliga handlingar och dokumenterade ändringar ger ett bättre beslutsunderlag genom processen.',
    intro: 'För ett projekt i Sollefteå är ett komplett och versionsstyrt underlag centralt för KA-arbetet. Sidan visar vad du bör skicka in, hur ändringar hanteras och varför slutlig offert alltid bygger på projektets faktiska omfattning.',
    focusTitle: 'Minska sena kompletteringar',
    focusIntro: 'När ritningar eller förutsättningar ändras behöver berörda kontroller och dokument uppdateras spårbart.',
    focusPoints: [
      'Skicka den senaste versionen av beslut, ritningar och tekniska handlingar.',
      'Märk ändringar och ange vad som har ändrats sedan föregående version.',
      'Klargör vem som ansvarar för respektive kontroll och verifikat.',
      'En normal kompletteringsvända ingår; upprepade ändringar eller bristande underlag debiteras separat.',
    ],
    process: [
      { title: 'Kontrollera underlaget', description: 'Aktuella handlingar och projektets skede gås igenom innan omfattning och offert fastställs.' },
      ...sharedProcessEnd,
    ],
    seo: {
      title: 'Kontrollansvarig i Sollefteå – underlag och KA-offert | Ytterman',
      description: 'Ytterman betjänar Sollefteå med kontrollansvarig, behörighet N. Se underlag, process, paketpriser och offertväg.',
      keywords: 'kontrollansvarig Sollefteå, KA Sollefteå, kontrollplan Sollefteå, KA offert Sollefteå',
    },
    faq: [
      { question: 'Tar Ytterman förfrågningar från Sollefteå?', answer: 'Ja. Ytterman betjänar Sollefteå och bedömer varje förfrågan utifrån projektets art, underlag, tidplan och aktuell kapacitet.' },
      { question: 'Vad händer om handlingarna ändras under projektet?', answer: 'Ändringen behöver beskrivas och relevanta kontroller och dokument uppdateras. Om ändringen orsakar arbete utanför avtalad omfattning prissätts det separat innan arbetet fortsätter.' },
      { question: 'Vad kostar kontrollansvarig i Sollefteå?', answer: priceAnswer('Sollefteå') },
      { question: 'När krävs kontrollansvarig i Sollefteå?', answer: needAnswer('Sollefteå') },
    ],
  },
];

export const cityData: Record<string, CityData> = Object.fromEntries(
  cityEntries.map((city) => [city.id, city]),
);

export const cityPageSlugs = cityEntries.map((city) => city.slug);
export const getCityBySlug = (slug: string): CityData | undefined => cityEntries.find((city) => city.slug === slug);
export const getOtherCities = (currentId: string): CityData[] => cityEntries.filter((city) => city.id !== currentId);

export const LOCAL_SEO_AUDIT = {
  auditedAt: '2026-08-19',
  retainedKaPages: cityPageSlugs,
  consolidatedInspectionPages: [
    'overlatelsebesiktning-sundsvall',
    'overlatelsebesiktning-harnosand',
    'overlatelsebesiktning-timra',
    'overlatelsebesiktning-kramfors',
    'overlatelsebesiktning-solleftea',
    'overlatelsebesiktning-ornskoldsvik',
    'overlatelsebesiktning-ange',
  ],
  rationale: `KA-sidorna behålls för fem prioriterade orter med eget beslutsstöd. Tunna besiktningssidor konsolideras till den regionala tjänstesidan. Ytterman har inga publicerade lokalkontor; tjänsteområdet är ${COMPANY.region}.`,
} as const;
