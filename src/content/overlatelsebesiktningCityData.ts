// Gemensam, verifierbar datakälla för lokala sidor om överlåtelsebesiktning.

import { COMPANY, SERVICES } from '@/config/company';

export interface OverlatelsebesiktningCityData {
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
    propertyTypes: string[];
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
  { id: 'ornskoldsvik', name: 'Örnsköldsvik', municipality: 'Örnsköldsviks kommun', neighborhoods: ['Centrala Örnsköldsvik', 'Domsjö', 'Bredbyn', 'Husum'] },
  { id: 'ange', name: 'Ånge', municipality: 'Ånge kommun', neighborhoods: ['Ånge tätort', 'Fränsta', 'Ljungaverk', 'Torpshammar'] },
];

const priceAnswer = (city: string) =>
  `Priset beror på fastighetens typ, storlek, ålder och avtalad omfattning. ${SERVICES.inspection.priceLabel}. Resor och eventuella resekostnader specificeras i offerten för ${city}.`;

const availabilityAnswer = (city: string) =>
  `Tillgänglighet för besiktning i ${city}, behov av platsbesök och rapportens leveranstid bekräftas vid bokning.`;

const createCityData = (seed: CitySeed): OverlatelsebesiktningCityData => ({
  id: seed.id,
  name: seed.name,
  slug: `overlatelsebesiktning-${seed.id}`,
  municipality: seed.municipality,
  travelTime: 'Resor specificeras i offerten',
  description: `Information om överlåtelsebesiktning i ${seed.name}. Omfattning, pris, resor och leveranstid bekräftas vid bokning.`,
  heroTitle: `Överlåtelsebesiktning i ${seed.name}`,
  heroSubtitle: 'Okulär besiktning med avtalad omfattning',
  heroDescription: `Skicka en förfrågan om överlåtelsebesiktning i ${seed.name}. ${COMPANY.experienceLabel}; omfattning, pris och leveranstid bekräftas vid bokning.`,
  seo: {
    title: `Överlåtelsebesiktning i ${seed.name} | Ytterman`,
    description: `Överlåtelsebesiktning i ${seed.name} med ${COMPANY.experienceLabel.toLowerCase()} i byggbranschen. Omfattning, pris, resor och leveranstid bekräftas vid bokning.`,
    keywords: `överlåtelsebesiktning ${seed.name}, besiktning ${seed.name}, husbesiktning ${seed.name}, fastighetsbesiktning ${seed.name}, besiktningsrapport ${seed.name}`,
  },
  faq: [
    {
      question: `Vad kostar en överlåtelsebesiktning i ${seed.name}?`,
      answer: priceAnswer(seed.name),
    },
    {
      question: `När kan en besiktning göras i ${seed.name}?`,
      answer: availabilityAnswer(seed.name),
    },
    {
      question: 'Vad ingår i besiktningen?',
      answer: 'Besiktningen är okulär och omfattningen anges i uppdragsbekräftelsen. Där framgår också eventuella begränsningar, dokumentation, rapportinnehåll och rekommendation om fortsatt teknisk utredning.',
    },
    {
      question: 'Kan köpare eller säljare delta?',
      answer: 'Deltagande och praktiskt upplägg stäms av vid bokning. Då bekräftas även vilka utrymmen och handlingar som behöver vara tillgängliga.',
    },
  ],
  localContent: {
    intro: `Den här sidan samlar information för dig som söker överlåtelsebesiktning i ${seed.name}. Ett publicerat ortsnamn innebär inte garanterad tillgänglighet.`,
    whyLocal: availabilityAnswer(seed.name),
    propertyTypes: [
      'Villa eller radhus',
      'Fritidshus',
      'Äldre bostadshus',
      'Andra bostadsfastigheter efter underlagsbedömning',
    ],
    neighborhoods: seed.neighborhoods,
  },
});

export const overlatelsebesiktningCityData: Record<string, OverlatelsebesiktningCityData> = Object.fromEntries(
  citySeeds.map((seed) => [seed.id, createCityData(seed)]),
);

export const overlatelsebesiktningCitySlugs = Object.values(overlatelsebesiktningCityData).map(
  (city) => city.slug,
);

export const getOverlatelsebesiktningCityBySlug = (
  slug: string,
): OverlatelsebesiktningCityData | undefined =>
  Object.values(overlatelsebesiktningCityData).find((city) => city.slug === slug);

export const getOtherOverlatelsebesiktningCities = (
  currentId: string,
): OverlatelsebesiktningCityData[] =>
  Object.values(overlatelsebesiktningCityData).filter((city) => city.id !== currentId);
