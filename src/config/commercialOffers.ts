import { PRICING, SERVICES, formatSek } from '@/config/company';

export interface KaPackageLevel {
  id: 'ka-bas' | 'ka-plus';
  name: string;
  subtitle: string;
  description: string;
  included: readonly string[];
  popular?: boolean;
}

export const KA_PACKAGE_LEVELS = [
  {
    id: 'ka-bas',
    name: 'KA Bas',
    subtitle: 'Tydligt avgränsad grundnivå',
    description: 'För projekt av normal art med kompletta handlingar och ett förutsägbart kontrollbehov.',
    included: [
      'Genomgång av projektets underlag',
      'Biträde med förslag till kontrollplan',
      'Medverkan vid tekniskt samråd när det ingår i uppdraget',
      'Arbetsplatsbesök enligt offert och kontrollplan',
      'Uppföljning och KA-utlåtande inför slutbesked',
      PRICING.supplementRule,
    ],
    popular: false,
  },
  {
    id: 'ka-plus',
    name: 'KA Plus',
    subtitle: 'Tätare stöd och uppföljning',
    description: 'För projekt som behöver fler avstämningar, fler besök eller mer aktiv uppföljning.',
    included: [
      'Allt som ingår i KA Bas',
      'Utökad omfattning av arbetsplatsbesök enligt offert',
      'Fler avstämningar under projektets gång',
      'Extra stöd inför tekniskt samråd',
      'Utökad uppföljning av avvikelser och åtgärder',
      PRICING.supplementRule,
    ],
    popular: true,
  },
] as const satisfies readonly KaPackageLevel[];

export const KA_PROJECT_OFFERS = Object.entries(PRICING.ka).map(([id, project]) => ({
  id,
  name: project.label,
  description: project.description,
  basPrice: formatSek(project.bas),
  plusPrice: formatSek(project.plus),
}));

export const KA_BAS_PACKAGE = {
  id: 'ka-bas-paket',
  name: 'KA + BAS-P/U',
  subtitle: 'Samordnat projektupplägg',
  price: `${formatSek(PRICING.kaBasPackage.from)}–${formatSek(PRICING.kaBasPackage.to)}`,
  description:
    'Kontrollansvar enligt PBL och de BAS-roller som behövs i projektet samordnas i ett tydligt upplägg.',
  included: [
    'Kontrollansvarig enligt PBL',
    'BAS-P under planering och projektering när det ingår i offerten',
    'BAS-U under utförandet när det ingår i offerten',
    'Samlad plan för avstämningar, dokumentation och ansvar',
    'En kontaktväg för de avtalade rollerna',
  ],
} as const;

export const OFFER_EXCLUSIONS = [
  'Projektering, byggledning och entreprenadledning ingår inte om det inte avtalas separat.',
  'Entreprenadrättslig slutbesiktning ingår inte i KA-paketen.',
  'Myndighetsavgifter, konsulter, provningar och intyg från tredje part ingår inte.',
  'Resor, extra arbetsplatsbesök och arbete utanför avtalad omfattning prissätts i offerten.',
] as const;

export const OFFER_TERMS = [
  `Alla publicerade priser för ${PRICING.year} är inklusive moms.`,
  PRICING.supplementRule,
  'Slutlig offert lämnas efter bedömning av projektets omfattning, underlag, tidplan, resor och behov av platsbesök.',
] as const;

export type DigitalProductKey = 'buildingStartPlanner' | 'energyCalculation' | 'projectReview';

export interface DigitalProductOffer {
  key: DigitalProductKey;
  name: string;
  publicationStatus: 'hidden' | 'interest-only' | 'purchasable';
  contentReady: boolean;
  automaticDelivery: boolean;
  paymentLink?: string;
  informationPath: string;
}

const cleanPaymentLink = (value: string | undefined) => value?.trim() || undefined;

export const DIGITAL_PRODUCT_OFFERS = {
  buildingStartPlanner: {
    key: 'buildingStartPlanner',
    name: SERVICES.buildingStartPlanner.name,
    publicationStatus: 'interest-only',
    contentReady: false,
    automaticDelivery: false,
    paymentLink: cleanPaymentLink(import.meta.env.VITE_PAYMENT_LINK_BUILDING_START_PLANNER),
    informationPath: '/kontakt/?service=other&utm_source=ytterman&utm_medium=internal&utm_campaign=byggstart-planerare-information',
  },
  energyCalculation: {
    key: 'energyCalculation',
    name: SERVICES.energyCalculation.name,
    publicationStatus: 'interest-only',
    contentReady: false,
    automaticDelivery: false,
    paymentLink: cleanPaymentLink(import.meta.env.VITE_PAYMENT_LINK_ENERGY_CALCULATION),
    informationPath: '/kontakt/?service=other&utm_source=ytterman&utm_medium=internal&utm_campaign=energiberakning-information',
  },
  projectReview: {
    key: 'projectReview',
    name: 'Digital projektgranskning',
    publicationStatus: 'hidden',
    contentReady: false,
    automaticDelivery: false,
    paymentLink: cleanPaymentLink(import.meta.env.VITE_PAYMENT_LINK_PROJECT_REVIEW),
    informationPath: '/kontakt/?service=other&utm_source=ytterman&utm_medium=internal&utm_campaign=projektgranskning-information',
  },
} as const satisfies Record<DigitalProductKey, DigitalProductOffer>;

export const isDigitalProductOrderable = (product: DigitalProductOffer) =>
  product.publicationStatus === 'purchasable'
  && product.contentReady
  && product.automaticDelivery
  && Boolean(product.paymentLink);
