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
    price: 'Från 29 500 kr',
    priceSubtext: 'inkl. moms',
    description: 'Passar okomplicerade projekt med tydliga handlingar och få aktörer. Du får den lagstadgade kontrollen enligt PBL på ett effektivt sätt.',
    features: [
      'Kontrollplan skräddarsydd för ditt projekt',
      'Genomgång av underlag och handlingar',
      'Medverkan i tekniskt samråd vid behov',
      '1 arbetsplatsbesök under byggtiden',
      'KA-utlåtande inför slutbesked',
      'Löpande kommunikation via telefon och e-post'
    ],
    popular: false
  },
  {
    id: 'ka-plus',
    name: 'KA Plus',
    subtitle: 'Utökad trygghet',
    price: 'Från 34 500 kr',
    priceSubtext: 'inkl. moms',
    description: 'Passar projekt med fler aktörer, otydligare underlag eller större behov av avstämningar. Ger dig extra stöd och fler besök för ökad trygghet.',
    features: [
      'Allt i KA Bas ingår',
      '2 arbetsplatsbesök (istället för 1)',
      'Fler avstämningar under projektets gång',
      'Extra stöd vid tekniskt samråd',
      'Uppföljning av avvikelser och åtgärder',
      'Snabbare svarstid och utökad tillgänglighet'
    ],
    popular: true
  },
  {
    id: 'premium-ka-bas',
    name: 'Premium: KA + BAS',
    subtitle: 'Komplett paket',
    price: 'Från 46 500–52 500 kr',
    priceSubtext: 'inkl. moms',
    description: 'Passar när beställaren vill samla kontrollansvar och arbetsmiljösamordning i ett sammanhållet upplägg. Alla roller i en hand ger effektiv samordning.',
    features: [
      'KA (Kontrollansvarig enligt PBL)',
      'BAS-P (Byggarbetsmiljösamordnare projektering)',
      'BAS-U (Byggarbetsmiljösamordnare utförande)',
      'Riskgenomgång och identifiering av arbetsmiljörisker',
      'Arbetsmiljöplan vid behov (t.ex. samordningsplan)',
      'Samlad samordning för hela projektet'
    ],
    popular: false
  }
];

export const actionTypePrices: ActionTypePrice[] = [
  {
    actionType: 'Tillbyggnad',
    basPrice: '29 500 kr',
    plusPrice: '34 500 kr',
    description: 'T.ex. uterum, garage, förråd eller utökad bostadsyta'
  },
  {
    actionType: 'Ombyggnation',
    basPrice: '32 500 kr',
    plusPrice: '38 500 kr',
    description: 'T.ex. fasadändring, planlösningsändring eller omfattande renovering'
  },
  {
    actionType: 'Nybyggnad',
    basPrice: '34 500 kr',
    plusPrice: '39 500 kr',
    description: 'T.ex. småhus, fritidshus, komplementbostad eller annan nybyggnation'
  }
];

export const disclaimerPoints = [
  '1 normal kompletteringsvända i bygglovsprocessen ingår.',
  'Upprepade kompletteringar som beror på ändringar, sena beslut eller bristande underlag debiteras enligt timpris.',
  'Priserna är exempel och kan justeras vid avvikande komplexitet, fler platsbesök eller om projektets omfattning ändras.',
  'KA ansvarar för kontroll enligt PBL – entreprenadledning och projektering ingår inte.'
];

export const pricingFAQ = [
  {
    question: 'Vad är skillnaden mellan KA Bas och KA Plus?',
    answer: 'KA Bas passar okomplicerade projekt med tydliga handlingar och få aktörer. KA Plus ger utökad trygghet med 2 arbetsplatsbesök istället för 1, fler avstämningar och extra stöd vid tekniskt samråd och uppföljning. Välj Plus om projektet har fler inblandade, otydligare underlag eller om du vill ha tätare uppföljning.'
  },
  {
    question: 'När passar Premium (KA + BAS-P/U)?',
    answer: 'Premium passar när du vill samla kontrollansvar enligt PBL och arbetsmiljösamordning i ett sammanhållet upplägg. Det är särskilt lämpligt för större projekt, när du har flera entreprenörer på plats samtidigt, eller när arbetsmiljökraven är höga. Alla roller i en hand ger effektiv samordning och färre kontaktytor.'
  },
  {
    question: 'Vad menas med kompletteringsvända?',
    answer: '1 normal kompletteringsvända i bygglovsprocessen ingår i priset. Det innebär att om kommunen ber om kompletteringar eller förtydliganden (vilket är vanligt), så hanterar vi det utan extra kostnad. Upprepade kompletteringar som beror på ändringar, sena beslut eller bristande underlag debiteras enligt timpris (1 200–1 400 kr/h + moms).'
  }
];
