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
    description: 'Du får ditt projekt godkänt utan onödiga kompletteringar. Perfekt om du har tydliga handlingar och vill ha den lagstadgade kontrollen snabbt och professionellt.',
    features: [
      'Kontrollplan skräddarsydd för ditt projekt',
      'Genomgång av underlag och handlingar',
      'Medverkan i tekniskt samråd vid behov',
      '1 arbetsplatsbesök under byggtiden',
      'KA-utlåtande inför slutbesked',
      'Löpande kommunikation via telefon och e-post',
      '✓ Så här går det till: 1) Du skickar dina handlingar 2) Fast pris inom 24 h 3) Jag guidar dig till slutbesked'
    ],
    popular: false
  },
  {
    id: 'ka-plus',
    name: 'KA Plus',
    subtitle: 'Utökad trygghet',
    price: 'Från 34 500 kr',
    priceSubtext: 'inkl. moms',
    description: 'Du slipper stress och oro – jag finns med dig hela vägen och löser problem innan de blir dyra. Mest valt av privatpersoner och mindre företag.',
    features: [
      'Allt i KA Bas ingår',
      '2 arbetsplatsbesök (istället för 1)',
      'Fler avstämningar under projektets gång',
      'Extra stöd vid tekniskt samråd',
      'Uppföljning av avvikelser och åtgärder',
      'Snabbare svarstid och utökad tillgänglighet',
      '✓ Så här går det till: 1) Vi går igenom ditt projekt 2) Du får ett fast pris 3) Löpande stöd tills slutbesked är klart'
    ],
    popular: true
  },
  {
    id: 'premium-ka-bas',
    name: 'Premium: KA + BAS',
    subtitle: 'Komplett paket',
    price: 'Från 46 500–52 500 kr',
    priceSubtext: 'inkl. moms',
    description: 'Allt samlat i en hand – säkerhet både för bygget och arbetsmiljön. Perfekt när du vill ha full kontroll och minimera risk för stopp i projektet.',
    features: [
      'KA (Kontrollansvarig enligt PBL)',
      'BAS-P (Byggarbetsmiljösamordnare projektering)',
      'BAS-U (Byggarbetsmiljösamordnare utförande)',
      'Riskgenomgång och identifiering av arbetsmiljörisker',
      'Arbetsmiljöplan vid behov (t.ex. samordningsplan)',
      'Samlad samordning för hela projektet',
      '✓ Så här går det till: 1) Helhetsbild av projektet 2) Fast offert 3) Total hjälp från bygglov till slutbesked'
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
  '1 normal kompletteringsvända i bygglovsprocessen ingår – jag hjälper dig tills ärendet är klart.',
  'Upprepade kompletteringar som beror på ändringar, sena beslut eller bristande underlag debiteras enligt timpris.',
  'Om kommunen kräver kompletteringar i de delar jag ansvarar för som KA, hjälper jag dig utan extra kostnad tills ärendet är i mål – det är min trygghetsgaranti.',
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
