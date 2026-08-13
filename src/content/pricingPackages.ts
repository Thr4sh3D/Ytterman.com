import { PRICE_LABELS, PRICING, formatSek } from '@/config/company';

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceSubtext?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ActionTypePrice {
  actionType: string;
  basPrice: string;
  plusPrice: string;
  description: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'ka-bas',
    name: 'KA Bas',
    subtitle: 'Grundläggande kontroll',
    price: PRICE_LABELS.kaBasFrom,
    priceSubtext: 'inkl. moms',
    description: 'För projekt av normal art med tydliga handlingar och avgränsad omfattning.',
    features: [
      'Förslag till kontrollplan för projektet',
      'Genomgång av underlag och handlingar',
      'Medverkan i tekniskt samråd vid behov',
      'Arbetsplatsbesök enligt offert och kontrollplan',
      'KA-utlåtande som underlag inför slutbesked',
      'Löpande kommunikation via e-post och överenskomna projektkanaler',
    ],
    popular: false,
  },
  {
    id: 'ka-plus',
    name: 'KA Plus',
    subtitle: 'Utökad uppföljning',
    price: PRICE_LABELS.kaPlusFrom,
    priceSubtext: 'inkl. moms',
    description: 'För projekt som behöver fler avstämningar, fler besök och tätare uppföljning.',
    features: [
      'Allt i KA Bas ingår',
      'Utökad omfattning av arbetsplatsbesök enligt offert',
      'Fler avstämningar under projektets gång',
      'Extra stöd inför tekniskt samråd',
      'Uppföljning av avvikelser och åtgärder',
    ],
    popular: true,
  },
  {
    id: 'premium-ka-bas',
    name: 'KA + BAS-P/U',
    subtitle: 'Samordnat paket',
    price: PRICE_LABELS.kaBasPackage,
    priceSubtext: 'inkl. moms',
    description: 'Kontrollansvar och arbetsmiljösamordning i ett sammanhållet upplägg.',
    features: [
      'Kontrollansvarig enligt PBL',
      'BAS-P under projekteringen',
      'BAS-U under utförandet när det ingår i offerten',
      'Riskgenomgång och arbetsmiljöplan när det krävs',
      'Samlad kommunikation och tydlig rollfördelning',
    ],
    popular: false,
  },
];

export const actionTypePrices: ActionTypePrice[] = Object.values(PRICING.ka).map((item) => ({
  actionType: item.label,
  basPrice: formatSek(item.bas),
  plusPrice: formatSek(item.plus),
  description: item.description,
}));

export const disclaimerPoints = [
  PRICING.supplementRule,
  'Priserna gäller projekt av normal art och justeras om komplexitet, antal platsbesök eller omfattning avviker.',
  'KA ansvarar för kontroll enligt PBL. Entreprenadledning, projektering och entreprenadrättslig slutbesiktning ingår inte om det inte avtalas separat.',
];

export const pricingFAQ = [
  {
    question: 'Vad är skillnaden mellan KA Bas och KA Plus?',
    answer: 'KA Bas passar projekt av normal art med tydliga handlingar och avgränsad omfattning. KA Plus innehåller fler arbetsplatsbesök och tätare uppföljning. Slutlig omfattning framgår alltid av offerten.',
  },
  {
    question: 'När passar paketet KA + BAS-P/U?',
    answer: 'Paketet passar när kontrollansvar enligt PBL och arbetsmiljösamordning behöver samordnas. Vilka BAS-roller som ingår avgörs av projektets skeden och dokumenteras i offerten.',
  },
  {
    question: 'Vad menas med kompletteringsvända?',
    answer: PRICING.supplementRule,
  },
];
