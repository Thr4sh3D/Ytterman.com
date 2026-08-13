// Knowledge Base Content Data
// Centraliserad metadata för alla guider i kunskapsbanken

export interface GuideMetadata {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  icon: string; // Namnet på Lucide-ikonen (ex: 'Shield', 'Users')
  seo: {
    title: string;
    description: string;
  };
  keywords: string[]; // SEO keywords för sökmotoroptimering och intern mappning
  updated?: string;
  link: string; // För bakåtkompatibilitet med GuidesPage
}

export const knowledgeBase: GuideMetadata[] = [
  {
    slug: 'kontrollansvarig',
    title: 'Kontrollansvarigs roll i byggprocessen',
    description: 'Guide till KA-rollens uppgifter, gränser och underlag från kontrollplan till slutbesked.',
    category: 'Kontrollansvarig',
    readTime: '8 min',
    icon: 'Shield',
    seo: {
      title: 'Kontrollansvarig guide 2026 | Ytterman',
      description: 'Guide till kontrollansvarigs roll enligt PBL, kontrollplan, byggplatsbesök, avvikelser och utlåtande inför slutbesked.'
    },
    keywords: ['kontrollansvarig', 'byggkontroll', 'PBL', 'plan- och bygglagen', 'bygglov', 'teknisk kontroll', 'slutbesked', 'kontrollplan', 'Västernorrland'],
    link: '/guider/kontrollansvarig/'
  },
  {
    slug: 'bas',
    title: 'BAS-P vs BAS-U: Skillnader och när de behövs',
    description: 'Förstå skillnaderna mellan BAS-P och BAS-U samt när respektive roll krävs i ditt projekt.',
    category: 'Säkerhetssamordning',
    readTime: '6 min',
    icon: 'Users',
    seo: {
      title: 'BAS-P och BAS-U guide 2026 | Ytterman',
      description: 'Guide om BAS-P och BAS-U, skillnader och aktuellt regelverk enligt AFS 2023:3. Praktiska råd från Tobias Ytterman i Västernorrland.'
    },
    keywords: ['BAS-P', 'BAS-U', 'säkerhetssamordnare', 'arbetsmiljö', 'AFS 2023:3', 'byggarbetsmiljö', 'arbetsmiljöplan', 'Västernorrland'],
    link: '/guider/bas/'
  },
  {
    slug: 'bygglov',
    title: 'Bygglovsprocessen steg för steg',
    description: 'En praktisk guide till bygglovsprocessen från ansökan till slutbesked.',
    category: 'Bygglov',
    readTime: '10 min',
    icon: 'FileText',
    seo: {
      title: 'Bygglovsprocessen – lov, startbesked och slutbesked | Ytterman',
      description: 'Praktisk guide till bygglovsprocessens beslut, handlingar, kontrollplan, tekniskt samråd, startbesked och slutbesked.'
    },
    keywords: ['bygglov', 'bygglovsansökan', 'bygglovsprocess', 'Västernorrland', 'Sundsvall', 'Härnösand', 'Sollefteå', 'Kramfors', 'Timrå'],
    link: '/guider/bygglov/'
  },
  {
    slug: 'kvalitetskontroll',
    title: 'Kontroller och kvalitet i byggprojekt',
    description: 'Skillnaden mellan projekteringskontroll, kontrollplan, egenkontroll, sakkunnigkontroll och besiktning.',
    category: 'Kvalitetskontroll',
    readTime: '7 min',
    icon: 'Building',
    seo: {
      title: 'Kvalitetskontroll i byggprojekt – roller och dokumentation | Ytterman',
      description: 'Guide till projekteringskontroll, kontrollplan enligt PBL, entreprenörens egenkontroll, sakkunnigkontroll och separat besiktning.'
    },
    keywords: ['kvalitetskontroll', 'byggkvalitet', 'kontrollpunkter', 'slutbesiktning', 'byggdokumentation', 'kvalitetssäkring'],
    link: '/guider/kvalitetskontroll/'
  },
  {
    slug: 'overlatelsebesiktning',
    title: 'Överlåtelsebesiktning – omfattning och begränsningar',
    description: 'Vad en okulär överlåtelsebesiktning kan omfatta och vad som behöver avtalas före uppdraget.',
    category: 'Besiktning',
    readTime: '5 min',
    icon: 'BookOpen',
    seo: {
      title: 'Överlåtelsebesiktning – omfattning och rapport | Ytterman',
      description: 'Guide till okulär överlåtelsebesiktning, åtkomlighet, begränsningar, rapport och fortsatt teknisk utredning.'
    },
    keywords: ['överlåtelsebesiktning', 'fastighetsbesiktning', 'försäljningsbesiktning', 'köpebesiktning', 'husbesiktning', 'fastighetsförsäljning', 'Västernorrland'],
    link: '/guider/overlatelsebesiktning/'
  },
  {
    slug: 'energi',
    title: 'Energideklaration – ansvar och partnerleverans',
    description: 'Vad en energideklaration innehåller och hur Ytterman samordnar tjänsten via behörig partner.',
    category: 'Energi',
    readTime: '9 min',
    icon: 'Zap',
    seo: {
      title: 'Energideklaration – certifierad energiexpert via partner | Ytterman',
      description: 'Guide till energideklaration, energiprestanda, underlag och partnerleverans. Ytterman samordnar; certifierad energiexpert utför och registrerar.'
    },
    keywords: ['energideklaration', 'energiklass', 'energiprestanda', 'energibesiktning', 'energibesparing', 'fastighetsenergideklaration', 'Västernorrland'],
    link: '/guider/energi/'
  },
  {
    slug: 'miljo',
    title: 'Miljöarbete i byggprojekt',
    description: 'Checklista för mål, ansvar, energi, material, återbruk och verifierbar dokumentation.',
    category: 'Miljö',
    readTime: '8 min',
    icon: 'Leaf',
    seo: {
      title: 'Miljöarbete i byggprojekt – mål och verifiering | Ytterman',
      description: 'Guide till strukturerat miljöarbete i byggprojekt: energi, material, återbruk, avfall, innemiljö och spårbar verifiering.'
    },
    keywords: ['hållbart byggande', 'miljötänk', 'BREEAM', 'LEED', 'energieffektivisering', 'miljöcertifiering', 'grön byggnad'],
    link: '/guider/miljo/'
  },
  {
    slug: 'digitala-verktyg',
    title: 'Digitala verktyg för byggprojekt',
    description: 'Översikt över moderna digitala verktyg som effektiviserar byggprocessen.',
    category: 'Digitalisering',
    readTime: '6 min',
    icon: 'Laptop',
    seo: {
      title: 'Digitala verktyg för byggprojekt | Ytterman',
      description: 'Översikt över digitala verktyg för projekthantering, dokumentation och kommunikation i byggprojekt.'
    },
    keywords: ['digitala verktyg', 'byggprojekt', 'projekthantering', 'digital dokumentation', 'byggappar', 'kommunikation'],
    link: '/guider/digitala-verktyg/'
  },
  // Nya djupgående artiklar
  {
    slug: 'kontrollansvarig-bygglov',
    title: 'Kontrollansvarig i bygglovsprocessen',
    description: 'Rollfördelningen från första underlag till byggnadsnämndens beslut om slutbesked.',
    category: 'Kontrollansvarig',
    readTime: '9 min',
    icon: 'FileText',
    seo: {
      title: 'Kontrollansvarig och bygglov – roll och process | Ytterman',
      description: 'Guide till när kontrollansvarig kan krävas, förslag till kontrollplan, tekniskt samråd, uppföljning och underlag inför slutbesked.'
    },
    keywords: ['kontrollansvarig bygglov', 'KA bygglov', 'bygglovsprocess', 'kontrollansvarig ansökan', 'startbesked', 'Västernorrland'],
    link: '/guider/kontrollansvarig-bygglov/'
  },
  {
    slug: 'kontrollansvarig-certifiering',
    title: 'Certifiering för kontrollansvarig – verifiera KA',
    description: 'Så kontrollerar du certifikat, behörighet, certifieringsorgan och giltighetstid för en kontrollansvarig.',
    category: 'Kontrollansvarig',
    readTime: '8 min',
    icon: 'Shield',
    seo: {
      title: 'Kontrollansvarig certifiering – verifiera KA | Ytterman',
      description: 'Guide till hur du verifierar en kontrollansvarigs certifikat, behörighet och giltighetstid. Tobias Ytterman: Kiwa KA11926, behörighet N.'
    },
    keywords: ['kontrollansvarig certifiering', 'KA certifikat', 'Boverket certifiering', 'certifieringsorgan', 'KA utbildning', 'certifieringskrav'],
    link: '/guider/kontrollansvarig-certifiering/'
  },
  {
    slug: 'kontrollansvarig-ansvar',
    title: 'Kontrollansvarigs roll och ansvar',
    description: 'Praktisk avgränsning av KA-rollen enligt PBL och vad som ligger kvar hos byggherre, entreprenör och byggnadsnämnd.',
    category: 'Kontrollansvarig',
    readTime: '10 min',
    icon: 'Shield',
    seo: {
      title: 'Kontrollansvarigs roll enligt PBL – ansvar och avgränsning | Ytterman',
      description: 'Guide till kontrollansvarigs uppgifter: kontrollplan, uppföljning, avvikelser och utlåtande inför slutbesked.'
    },
    keywords: ['kontrollansvarig ansvar', 'KA skyldigheter', 'juridiskt ansvar', 'PBL ansvar', 'ansvarsförsäkring', 'befogenheter'],
    link: '/guider/kontrollansvarig-ansvar/'
  },
  {
    slug: 'kontrollansvarig-timpris',
    title: 'Pris för kontrollansvarig 2026',
    description: 'Yttermans paketpriser inklusive moms och vad du bör kontrollera när du jämför offerter.',
    category: 'Kontrollansvarig',
    readTime: '7 min',
    icon: 'FileText',
    seo: {
      title: 'Kontrollansvarig pris 2026 – paket och villkor | Ytterman',
      description: 'Paketpriser 2026 för kontrollansvarig: tillbyggnad, ombyggnation, fritidshus och paket med BAS-P/U. Alla belopp inklusive moms.'
    },
    keywords: ['kontrollansvarig timpris', 'kontrollansvarig pris', 'KA kostnad', 'vad kostar kontrollansvarig', 'prissättning', 'fast pris'],
    link: '/guider/kontrollansvarig-timpris/'
  },
  {
    slug: 'bas-p-guide',
    title: 'BAS-P – projektering och arbetsmiljösamordning',
    description: 'Guide till BAS-P:s samordningsuppgifter, arbetsmiljöplan, riskarbete och överlämning under projekteringen.',
    category: 'Säkerhetssamordning',
    readTime: '9 min',
    icon: 'Users',
    seo: {
      title: 'BAS-P guide – arbetsmiljösamordning 2026 | Ytterman',
      description: 'Omfattande guide om BAS-P enligt AFS 2023:3. Roll, ansvar, arbetsmiljöplan, riskbedömning och samordning. Praktiska råd från Tobias Ytterman.'
    },
    keywords: ['BAS-P', 'arbetsmiljösamordnare projektering', 'arbetsmiljöplan', 'riskbedömning', 'AFS 2023:3', 'projekteringsfas'],
    link: '/guider/bas-p-guide/'
  },
  {
    slug: 'bas-u-guide',
    title: 'BAS-U – samordning under utförandet',
    description: 'Guide till BAS-U:s samordningsuppgifter, arbetsmiljöplan, riskuppföljning och ansvarsfördelning under utförandet.',
    category: 'Säkerhetssamordning',
    readTime: '9 min',
    icon: 'Users',
    seo: {
      title: 'BAS-U guide – arbetsmiljösamordning 2026 | Ytterman',
      description: 'Omfattande guide om BAS-U enligt AFS 2023:3. Roll, säkerhetsronder, samordningsmöten och byggarbetsplatssäkerhet. Praktiska råd från Tobias Ytterman.'
    },
    keywords: ['BAS-U', 'arbetsmiljösamordnare utförande', 'säkerhetsronder', 'byggarbetsplats', 'arbetsmiljö byggplats', 'samordningsmöten'],
    link: '/guider/bas-u-guide/'
  },
  {
    slug: 'vad-ar-bas',
    title: 'Vad är BAS? - Skillnad mellan BAS-P och BAS-U',
    description: 'Förklaring av BAS-roller: vad är byggarbetsmiljösamordnare, när behövs BAS-P och BAS-U, och lagkrav enligt AFS 2023:3.',
    category: 'Säkerhetssamordning',
    readTime: '7 min',
    icon: 'Users',
    seo: {
      title: 'Vad är BAS? BAS-P och BAS-U förklarat | Ytterman',
      description: 'Guide till BAS-P och BAS-U, rollernas skeden, ansvarsfördelning och aktuellt regelverk AFS 2023:3.'
    },
    keywords: ['vad är BAS', 'byggarbetsmiljösamordnare', 'BAS förklaring', 'BAS-P BAS-U skillnad', 'när behövs BAS', 'AFS 2023:3'],
    link: '/guider/vad-ar-bas/'
  },
  {
    slug: 'tekniskt-samrad',
    title: 'Tekniskt samråd i byggprocessen',
    description: 'Guide till tekniskt samråd: syfte, deltagare, byggnadsnämndens genomgång och projektets underlag.',
    category: 'Bygglov',
    readTime: '8 min',
    icon: 'Users',
    seo: {
      title: 'Tekniskt samråd – syfte och process enligt PBL | Ytterman',
      description: 'Guide till när tekniskt samråd hålls, vilka som deltar och vad byggnadsnämnden går igenom inför beslut om startbesked.'
    },
    keywords: ['tekniskt samråd', 'samråd bygglov', 'PBL samråd', 'byggsamråd', 'byggmöte', 'samrådsmöte'],
    link: '/guider/tekniskt-samrad/'
  },
  {
    slug: 'kontrollplan',
    title: 'Kontrollplan - Upprättande och Innehåll',
    description: 'Omfattande guide om kontrollplan: lagkrav, innehåll, kritiska kontrollpunkter och hur kontrollplanen används i byggprocessen.',
    category: 'Kvalitetskontroll',
    readTime: '10 min',
    icon: 'FileText',
    seo: {
      title: 'Kontrollplan i byggprojekt – innehåll och användning | Ytterman',
      description: 'Guide till förslag till kontrollplan enligt PBL, kontrollpunkter, ansvar, verifiering och uppföljning.'
    },
    keywords: ['kontrollplan', 'kontrollplan bygglov', 'kontrollpunkter', 'teknisk kontroll', 'kvalitetsplan', 'PBL kontroll'],
    link: '/guider/kontrollplan/'
  },
  {
    slug: 'slutbesked',
    title: 'Slutbesked - Process och Krav',
    description: 'Detaljerad guide om slutbesked från byggnadsnämnden: krav, process, dokumentation och kontrollansvarigs roll.',
    category: 'Bygglov',
    readTime: '8 min',
    icon: 'CheckCircle',
    seo: {
      title: 'Slutbesked bygglov – krav och process enligt PBL | Ytterman',
      description: 'Allt om slutbesked: underlag, byggherrens begäran, kontrollansvarigs utlåtande och byggnadsnämndens beslut.'
    },
    keywords: ['slutbesked', 'slutbesked bygglov', 'ibruktagande', 'PBL slutbesked', 'byggnadsnämnd'],
    link: '/guider/slutbesked/'
  },
  {
    slug: 'vasternorrland',
    title: 'Byggprojekt i Västernorrland',
    description: 'Praktisk guide till vilka kommunala uppgifter du behöver kontrollera inför ett byggprojekt i Västernorrland.',
    category: 'Lokalt',
    readTime: '11 min',
    icon: 'MapPin',
    seo: {
      title: 'Byggprojekt i Västernorrland – kontrollansvarig och kommun',
      description: 'Guide till kontrollansvarig, kommunala beslut och projektunderlag i Västernorrland. Aktuella krav och handläggningstider kontrolleras alltid med kommunen.'
    },
    keywords: ['kontrollansvarig Västernorrland', 'BAS Sundsvall', 'kontrollansvarig Härnösand', 'bygglov Timrå', 'kontrollansvarig Sollefteå', 'BAS Kramfors', 'Örnsköldsvik'],
    link: '/guider/vasternorrland/'
  },
  {
    slug: 'bygglovsguide-vanliga-misstag-husbygge',
    title: 'Bygglovsguide – vanliga misstag att förebygga',
    description: 'Praktisk checklista för beslut, roller, underlag, kontrollplan och dokumentation i byggprocessen.',
    category: 'Bygglov',
    readTime: '12 min',
    icon: 'AlertTriangle',
    seo: {
      title: 'Bygglovsguide – vanliga misstag och rollfördelning | Ytterman',
      description: 'Undvik missförstånd om lov, startbesked, kontrollansvarig, BAS, kontrollplan, ändringar och slutbesked.'
    },
    keywords: ['bygglovsguide', 'vanliga misstag husbygge', 'kontrollansvarig bygglov', 'kontrollplan', 'tekniskt samråd', 'slutbesked', 'BAS-P', 'BAS-U', 'nybyggnad', 'tillbyggnad', 'Västernorrland'],
    link: '/guider/bygglovsguide-vanliga-misstag-husbygge/'
  }
];

// Hjälpfunktioner
export const getGuideBySlug = (slug: string): GuideMetadata | undefined => {
  return knowledgeBase.find(guide => guide.slug === slug);
};

export const getGuidesByCategory = (category: string): GuideMetadata[] => {
  return knowledgeBase.filter(guide => guide.category === category);
};

export const getAllGuides = (): GuideMetadata[] => {
  return knowledgeBase;
};
