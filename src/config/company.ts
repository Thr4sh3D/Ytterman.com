export type DeliveryModel = 'tobias' | 'partner' | 'digital';
export type PublicationStatus = 'active' | 'interest-only';

export interface ServiceConfig {
  id: string;
  name: string;
  shortDescription: string;
  deliveryModel: DeliveryModel;
  publicationStatus: PublicationStatus;
  priceLabel: string;
  features: readonly string[];
  path: string;
  requiresCertifiedPerformer?: boolean;
}

export const formatSek = (amount: number) => `${amount.toLocaleString('sv-SE')} kr`;

export const COMPANY = {
  brandName: 'Ytterman',
  publicName: 'Tobias Ytterman',
  siteUrl: 'https://ytterman.com',
  email: 'tobias@ytterman.com',
  emailHref: 'mailto:tobias@ytterman.com',
  contactPath: '/kontakt/',
  experienceYears: 20,
  experienceLabel: 'Över 20 års erfarenhet',
  region: 'Västernorrland',
  countryCode: 'SE',
  areaServed: ['Västernorrland'],
  localPageAreas: [
    'Sundsvall',
    'Härnösand',
    'Timrå',
    'Kramfors',
    'Sollefteå',
    'Örnsköldsvik',
    'Ånge',
  ],
  membership: {
    shortName: 'SBR',
    name: 'Svenska Byggingenjörers Riksförbund',
  },
  // Juridiskt namn, organisationsnummer och fullständig adress publiceras först
  // efter ägarverifiering. Se docs/external-profile-corrections.md.
  legalIdentityVerified: false,
} as const;

export const KA_CERT = {
  title: 'Certifierad kontrollansvarig enligt PBL',
  issuer: 'Kiwa Certification AB',
  certificateNumber: 'KA11926',
  authorization: 'N',
  authorizationLabel: 'Behörighet N – projekt av normal art',
  validUntil: '2030-07-02',
  verificationUrl: 'https://idun.kiwa.se/certificates/25642',
} as const;

export const BAS = {
  rolesLabel: 'BAS-P och BAS-U',
  qualificationLabel: 'Utbildad för uppdrag som BAS-P och BAS-U',
  trainingProvider: 'UtbildningsKraft',
  completedOn: '2025-06-25',
  validUntil: '2030-06-24',
  regulation: 'AFS 2023:3',
  description:
    'Tobias erbjuder uppdrag som byggarbetsmiljösamordnare under projektering och utförande, med utbildning, kompetens och erfarenhet för rollerna.',
  credentialRule:
    'BAS-P och BAS-U ska beskrivas som roller och kompetens, inte som en myndighetscertifiering.',
} as const;

export const PRICING = {
  year: 2026,
  includesVat: true,
  ka: {
    extension: {
      label: 'Tillbyggnad',
      bas: 29_500,
      plus: 34_500,
      description: 'Till exempel uterum, garage, förråd eller utökad bostadsyta.',
    },
    renovation: {
      label: 'Ombyggnation',
      bas: 32_500,
      plus: 38_500,
      description: 'Till exempel planlösningsändring eller en mer omfattande renovering.',
    },
    newVacationHome: {
      label: 'Nyproduktion fritidshus',
      bas: 34_500,
      plus: 39_500,
      description: 'Nyproduktion av fritidshus av normal art.',
    },
  },
  kaBasPackage: {
    from: 46_500,
    to: 52_500,
  },
  includedSupplementRounds: 1,
  supplementRule:
    'En normal kompletteringsvända ingår. Upprepade kompletteringar på grund av ändringar eller bristande underlag debiteras separat.',
} as const;

export const PRICE_LABELS = {
  kaBasFrom: `Från ${formatSek(PRICING.ka.extension.bas)}`,
  kaPlusFrom: `Från ${formatSek(PRICING.ka.extension.plus)}`,
  kaBasPackage: `${PRICING.kaBasPackage.from.toLocaleString('sv-SE')}–${formatSek(PRICING.kaBasPackage.to)}`,
  schemaRange: `${PRICING.ka.extension.bas.toLocaleString('sv-SE')}–${PRICING.kaBasPackage.to.toLocaleString('sv-SE')} SEK`,
  quote: 'Pris lämnas efter genomgång av underlaget',
  interest: 'Intresseanmälan',
} as const;

export const BUSINESS_COPY = {
  defaultResponse:
    'Skicka din förfrågan via formuläret eller e-post så återkommer jag med nästa steg utifrån projektets omfattning och aktuell kapacitet.',
  preferredContact:
    'E-post och formuläret är de snabbaste kontaktvägarna eftersom jag ofta är ute i projekt under dagtid.',
  kaScope:
    'Kontrollansvarig biträder byggherren med att upprätta förslag till kontrollplan, följer upp att kontrollplanen och gällande villkor följs samt lämnar eget utlåtande som underlag inför slutbesked. Byggnadsnämnden beslutar om slutbesked.',
  energyPartner:
    'Ytterman erbjuder och samordnar energideklaration. Själva deklarationen utförs via behörig partner av en certifierad energiexpert.',
  energyPartnerShort: 'Samordnas av Ytterman och utförs av certifierad energiexpert hos behörig partner.',
  digitalInterest:
    'Tjänsten visas som intresseanmälan tills betalning och automatisk leverans är verifierade.',
} as const;

export const SERVICES = {
  kontrollansvarig: {
    id: 'kontrollansvarig-service',
    name: 'Kontrollansvarig (KA)',
    shortDescription: KA_CERT.title,
    deliveryModel: 'tobias',
    publicationStatus: 'active',
    priceLabel: PRICE_LABELS.kaBasFrom,
    features: [
      'Förslag till kontrollplan och uppföljning enligt PBL',
      'Medverkan vid tekniskt samråd och arbetsplatsbesök',
      'Dokumentation och utlåtande inför slutbesked',
      KA_CERT.authorizationLabel,
    ],
    path: '/kontrollansvarig/',
  },
  basP: {
    id: 'bas-p-service',
    name: 'BAS-P (Projektering)',
    shortDescription: 'Byggarbetsmiljösamordning under projekteringen.',
    deliveryModel: 'tobias',
    publicationStatus: 'active',
    priceLabel: PRICE_LABELS.quote,
    features: [
      'Arbetsmiljöplan när det krävs',
      'Riskbedömning och säkerhetsanalys',
      'Samordning mellan projektörer',
      `Arbete utifrån ${BAS.regulation}`,
    ],
    path: '/bas-p/',
  },
  basU: {
    id: 'bas-u-service',
    name: 'BAS-U (Utförande)',
    shortDescription: 'Byggarbetsmiljösamordning under utförandet.',
    deliveryModel: 'tobias',
    publicationStatus: 'active',
    priceLabel: PRICE_LABELS.quote,
    features: [
      'Samordning mellan entreprenörer',
      'Uppföljning av arbetsmiljöplanen',
      'Säkerhetsronder utifrån projektets riskbild',
      `Arbete utifrån ${BAS.regulation}`,
    ],
    path: '/bas-u/',
  },
  energyDeclaration: {
    id: 'energideklaration-service',
    name: 'Energideklaration',
    shortDescription: BUSINESS_COPY.energyPartnerShort,
    deliveryModel: 'partner',
    publicationStatus: 'active',
    priceLabel: PRICE_LABELS.quote,
    features: [
      'Ytterman är din kontakt och samordnare',
      'Utförs av certifierad energiexpert hos behörig partner',
      'Energiprestanda, energiklass och åtgärdsförslag',
      'Partnerns giltiga behörighet kontrolleras inför uppdraget',
    ],
    path: '/energideklaration/',
    requiresCertifiedPerformer: true,
  },
  energyCalculation: {
    id: 'energiberakning-online-service',
    name: 'Energiberäkning online',
    shortDescription: 'Digital energiberäkning – skicka en intresseanmälan för besked om upplägg och leverans.',
    deliveryModel: 'digital',
    publicationStatus: 'interest-only',
    priceLabel: PRICE_LABELS.interest,
    features: [
      'Intresseanmälan före beställning',
      'Underlaget bedöms innan leverans bekräftas',
      'Pris och leveranstid lämnas för det aktuella projektet',
    ],
    path: '/energiberakning-online/',
  },
  buildingPermitDocuments: {
    id: 'bygglovshandlingar',
    name: 'Bygglovshandlingar',
    shortDescription: 'Handlingar anpassade efter projektets och kommunens krav.',
    deliveryModel: 'tobias',
    publicationStatus: 'active',
    priceLabel: PRICE_LABELS.quote,
    features: [
      'Planritningar och sektioner efter behov',
      'Situationsplan och teknisk beskrivning efter behov',
      'Omfattning och pris bekräftas efter underlagsgranskning',
    ],
    path: '/bygglovshandlingar/',
  },
  inspection: {
    id: 'overlatelsebesiktning-service',
    name: 'Överlåtelsebesiktning',
    shortDescription: 'Okulär besiktning inför en fastighetsöverlåtelse.',
    deliveryModel: 'tobias',
    publicationStatus: 'active',
    priceLabel: PRICE_LABELS.quote,
    features: [
      'Okulär kontroll av åtkomliga delar',
      'Dokumentation av synliga iakttagelser',
      'Omfattning och leveranstid bekräftas vid bokning',
    ],
    path: '/overlatelsebesiktning/',
  },
  buildingStartPlanner: {
    id: 'byggstart-planerare',
    name: 'Byggstart-planerare',
    shortDescription: 'Digitalt planeringsverktyg som för närvarande tar emot intresseanmälningar.',
    deliveryModel: 'digital',
    publicationStatus: 'interest-only',
    priceLabel: PRICE_LABELS.interest,
    features: [
      'Planeringsstöd i webbläsaren',
      'Pris och leverans bekräftas innan beställning',
    ],
    path: '/byggstart-planerare/',
  },
} as const satisfies Record<string, ServiceConfig>;

export const ACTIVE_SERVICE_NAMES = Object.values(SERVICES)
  .filter((service) => service.publicationStatus === 'active')
  .map((service) => service.name);

export const KA_CREDENTIAL_SCHEMA = {
  '@type': 'EducationalOccupationalCredential',
  credentialCategory: 'Certifiering',
  name: KA_CERT.title,
  recognizedBy: {
    '@type': 'Organization',
    name: KA_CERT.issuer,
  },
  identifier: KA_CERT.certificateNumber,
} as const;
