// Gemensam, verifierbar datakälla för lokala KA-sidor.

import { BUSINESS_COPY, COMPANY, KA_CERT, PRICING, formatSek } from '@/config/company';

export interface CityData {
  id: string;
  name: string;
  slug: string;
  municipality: string;
  travelTime: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  localContent: {
    intro: string;
    whyLocal: string;
    projectTypes: string[];
    neighborhoods: string[];
  };
}

interface CitySeed {
  id: string;
  name: string;
  municipality: string;
  neighborhoods: string[];
}

const citySeeds: CitySeed[] = [
  { id: 'sundsvall', name: 'Sundsvall', municipality: 'Sundsvalls kommun', neighborhoods: ['Centrum', 'Alnö', 'Matfors', 'Stöde'] },
  { id: 'harnosand', name: 'Härnösand', municipality: 'Härnösands kommun', neighborhoods: ['Centrum', 'Älandsbro', 'Viksjö', 'Häggdånger'] },
  { id: 'timra', name: 'Timrå', municipality: 'Timrå kommun', neighborhoods: ['Centrala Timrå', 'Söråker', 'Bergeforsen', 'Vivsta'] },
  { id: 'kramfors', name: 'Kramfors', municipality: 'Kramfors kommun', neighborhoods: ['Kramfors centrum', 'Bollstabruk', 'Nyland', 'Docksta'] },
  { id: 'solleftea', name: 'Sollefteå', municipality: 'Sollefteå kommun', neighborhoods: ['Sollefteå tätort', 'Ramsele', 'Junsele', 'Långsele'] },
];

const priceAnswer = (city: string) =>
  `För ${PRICING.year} kostar KA Bas för tillbyggnad ${formatSek(PRICING.ka.extension.bas)}, ombyggnation ${formatSek(PRICING.ka.renovation.bas)} och nyproduktion av fritidshus ${formatSek(PRICING.ka.newVacationHome.bas)}. Priserna är inklusive moms. Slutlig omfattning för projektet i ${city} bekräftas i offerten.`;

const availabilityAnswer = (city: string) =>
  `Tillgänglighet och upplägg för platsbesök i ${city} bekräftas efter genomgång av projektet. Resor och eventuella resekostnader specificeras i offerten.`;

const createCityData = (seed: CitySeed): CityData => ({
  id: seed.id,
  name: seed.name,
  slug: `kontrollansvarig-${seed.id}`,
  municipality: seed.municipality,
  travelTime: 'Resor specificeras i offerten',
  description: `Information om kontrollansvarig för projekt i ${seed.name}. Tillgänglighet och resor bekräftas per projekt.`,
  heroTitle: `Kontrollansvarig i ${seed.name}`,
  heroSubtitle: KA_CERT.authorizationLabel,
  heroDescription: `Skicka en förfrågan om kontrollansvarig för ditt projekt i ${seed.name}. ${BUSINESS_COPY.kaScope}`,
  seo: {
    title: `Kontrollansvarig i ${seed.name} | Ytterman`,
    description: `Certifierad kontrollansvarig för projekt av normal art i ${seed.name}. ${COMPANY.experienceLabel}, paketpriser för ${PRICING.year} och resor specificerade i offerten.`,
    keywords: `kontrollansvarig ${seed.name}, KA ${seed.name}, kontrollplan ${seed.name}, slutbesked ${seed.name}, certifierad kontrollansvarig ${seed.name}`,
  },
  faq: [
    {
      question: `Vad kostar en kontrollansvarig i ${seed.name}?`,
      answer: priceAnswer(seed.name),
    },
    {
      question: `Behöver mitt projekt i ${seed.name} en kontrollansvarig?`,
      answer: `Det beror på åtgärden och byggnadsnämndens bedömning. Kommunen beslutar om kontrollansvarig krävs. Ytterman går igenom projektets art och om det ryms inom ${KA_CERT.authorizationLabel.toLowerCase()}.`,
    },
    {
      question: `När kan du vara på plats i ${seed.name}?`,
      answer: availabilityAnswer(seed.name),
    },
    {
      question: `Vilka projekt kan du ta i ${seed.name}?`,
      answer: 'Varje förfrågan bedöms mot uppdragets omfattning, aktuell kapacitet och behörighet N för projekt av normal art. Skicka underlaget så får du besked om upplägg och offert.',
    },
  ],
  localContent: {
    intro: `Den här sidan samlar information för dig som söker kontrollansvarig till ett projekt i ${seed.name}. Ett publicerat ortsnamn innebär inte garanterad tillgänglighet.`,
    whyLocal: availabilityAnswer(seed.name),
    projectTypes: [
      'Tillbyggnad av normal art',
      'Ombyggnation av normal art',
      'Nyproduktion av fritidshus av normal art',
      'Andra projekt efter bedömning av underlaget',
    ],
    neighborhoods: seed.neighborhoods,
  },
});

export const cityData: Record<string, CityData> = Object.fromEntries(
  citySeeds.map((seed) => [seed.id, createCityData(seed)]),
);

export const cityPageSlugs = Object.values(cityData).map((city) => city.slug);

export const getCityBySlug = (slug: string): CityData | undefined =>
  Object.values(cityData).find((city) => city.slug === slug);

export const getOtherCities = (currentId: string): CityData[] =>
  Object.values(cityData).filter((city) => city.id !== currentId);
