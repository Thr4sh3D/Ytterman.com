// Knowledge Base Content Data
// Centraliserad metadata för alla guider i kunskapsbanken

import { LucideIcon } from 'lucide-react';

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
    description: 'En komplett guide om vad en kontrollansvarig gör och varför det är viktigt för ditt byggprojekt.',
    category: 'Kontrollansvarig',
    readTime: '8 min',
    icon: 'Shield',
    seo: {
      title: 'Kontrollansvarig Guide - Allt du behöver veta 2025 | Ytterman',
      description: 'Komplett guide om kontrollansvarigs roll, ansvar och när du behöver en. Expert råd från certifierad kontrollansvarig Tobias Ytterman i Västernorrland.'
    },
    keywords: ['kontrollansvarig', 'byggkontroll', 'PBL', 'plan- och bygglagen', 'bygglov', 'teknisk kontroll', 'slutbevis', 'kontrollplan', 'Västernorrland'],
    link: '/guider/kontrollansvarig'
  },
  {
    slug: 'bas',
    title: 'BAS-P vs BAS-U: Skillnader och när de behövs',
    description: 'Förstå skillnaderna mellan BAS-P och BAS-U samt när respektive roll krävs i ditt projekt.',
    category: 'Säkerhetssamordning',
    readTime: '6 min',
    icon: 'Users',
    seo: {
      title: 'BAS-P och BAS-U Guide - Säkerhetssamordning 2025 | Ytterman',
      description: 'Komplett guide om BAS-P och BAS-U roller, skillnader och lagkrav enligt AFS 1999:3. Expert råd från certifierad säkerhetssamordnare Tobias Ytterman i Västernorrland.'
    },
    keywords: ['BAS-P', 'BAS-U', 'säkerhetssamordnare', 'arbetsmiljö', 'AFS 1999:3', 'byggarbetsmiljö', 'arbetsmiljöplan', 'Västernorrland'],
    link: '/guider/bas'
  },
  {
    slug: 'bygglov',
    title: 'Bygglovsprocessen steg för steg',
    description: 'En praktisk guide till bygglovsprocessen från ansökan till slutbesked.',
    category: 'Bygglov',
    readTime: '10 min',
    icon: 'FileText',
    seo: {
      title: 'Bygglov Guide Västernorrland - Sundsvall, Härnösand | Ytterman',
      description: 'Komplett guide för bygglovsprocessen i Västernorrlands kommuner. Handläggningstider, krav och tips från expert Tobias Ytterman.'
    },
    keywords: ['bygglov', 'bygglovsansökan', 'bygglovsprocess', 'Västernorrland', 'Sundsvall', 'Härnösand', 'Sollefteå', 'Kramfors', 'Timrå'],
    link: '/guider/bygglov'
  },
  {
    slug: 'kvalitetskontroll',
    title: 'Kvalitetskontroll i byggprojekt',
    description: 'Lär dig om kvalitetskontrollens betydelse och hur den genomförs i byggprojekt.',
    category: 'Kvalitetskontroll',
    readTime: '7 min',
    icon: 'Building',
    seo: {
      title: 'Kvalitetskontroll Guide - Byggkvalitet & Kontrollpunkter | Ytterman',
      description: 'Komplett guide om kvalitetskontroll i byggprojekt. Kritiska kontrollpunkter, dokumentation och slutbesiktning. Expert råd från Tobias Ytterman.'
    },
    keywords: ['kvalitetskontroll', 'byggkvalitet', 'kontrollpunkter', 'slutbesiktning', 'byggdokumentation', 'kvalitetssäkring'],
    link: '/guider/kvalitetskontroll'
  },
  {
    slug: 'overlatelsebesiktning',
    title: 'Överlåtelsebesiktning - Vad du behöver veta',
    description: 'Komplett guide om överlåtelsebesiktning vid fastighetsförsäljning.',
    category: 'Besiktning',
    readTime: '5 min',
    icon: 'BookOpen',
    seo: {
      title: 'Överlåtelsebesiktning Guide - Fastighetsbesiktning Försäljning | Ytterman',
      description: 'Komplett guide om överlåtelsebesiktning vid fastighetsförsäljning. Processen, kostnad och vad som ingår. Expert råd från Tobias Ytterman i Västernorrland.'
    },
    keywords: ['överlåtelsebesiktning', 'fastighetsbesiktning', 'försäljningsbesiktning', 'köpebesiktning', 'husbesiktning', 'fastighetsförsäljning', 'Västernorrland'],
    link: '/guider/overlatelsebesiktning'
  },
  {
    slug: 'energi',
    title: 'Energideklaration och energikrav',
    description: 'Allt om energideklaration, energikrav och hur du förbättrar din fastighets energiprestanda.',
    category: 'Energi',
    readTime: '9 min',
    icon: 'Zap',
    seo: {
      title: 'Energideklaration Guide - Energiklass & Besparingspotential | Ytterman',
      description: 'Komplett guide om energideklaration för fastigheter. Energiklasser, lagkrav, besparingstips och processen. Expert råd från Tobias Ytterman i Västernorrland.'
    },
    keywords: ['energideklaration', 'energiklass', 'energiprestanda', 'energibesiktning', 'energibesparing', 'fastighetsenergideklaration', 'Västernorrland'],
    link: '/guider/energi'
  },
  {
    slug: 'miljo',
    title: 'Miljökrav i byggprocessen',
    description: 'Guide om miljökrav, hållbarhet och miljöcertifieringar i byggbranschen.',
    category: 'Miljö',
    readTime: '8 min',
    icon: 'Leaf',
    seo: {
      title: 'Miljötänk Byggprocess - Hållbart Byggande & Certifiering | Ytterman',
      description: 'Guide till hållbart byggande och miljötänk. BREEAM, LEED, energieffektivisering och miljöcertifiering. Expert råd från Tobias Ytterman.'
    },
    keywords: ['hållbart byggande', 'miljötänk', 'BREEAM', 'LEED', 'energieffektivisering', 'miljöcertifiering', 'grön byggnad'],
    link: '/guider/miljo'
  },
  {
    slug: 'digitala-verktyg',
    title: 'Digitala verktyg för byggprojekt',
    description: 'Översikt över moderna digitala verktyg som effektiviserar byggprocessen.',
    category: 'Digitalisering',
    readTime: '6 min',
    icon: 'Laptop',
    seo: {
      title: 'Digitala Verktyg Byggprojekt - Effektivisering & Kommunikation | Ytterman',
      description: 'Guide till moderna digitala verktyg för byggprojekt. Projekthantering, dokumentation och kommunikation. Expert råd från Tobias Ytterman.'
    },
    keywords: ['digitala verktyg', 'byggprojekt', 'projekthantering', 'digital dokumentation', 'byggappar', 'kommunikation'],
    link: '/guider/digitala-verktyg'
  },
  // Nya djupgående artiklar
  {
    slug: 'kontrollansvarig-bygglov',
    title: 'Kontrollansvarig och Bygglov - Komplett Guide',
    description: 'Allt du behöver veta om kontrollansvarigs roll i bygglovsprocessen, från ansökan till slutbesked.',
    category: 'Kontrollansvarig',
    readTime: '9 min',
    icon: 'FileText',
    seo: {
      title: 'Kontrollansvarig Bygglov - Roll, Ansvar & Process 2025 | Ytterman',
      description: 'Komplett guide om kontrollansvarigs roll vid bygglov. När KA behövs, ansvar i processen och hur vi hjälper dig. Expert råd från Tobias Ytterman i Västernorrland.'
    },
    keywords: ['kontrollansvarig bygglov', 'KA bygglov', 'bygglovsprocess', 'kontrollansvarig ansökan', 'startbesked', 'Västernorrland'],
    link: '/guider/kontrollansvarig-bygglov'
  },
  {
    slug: 'kontrollansvarig-certifiering',
    title: 'Certifiering för Kontrollansvarig - Krav och Process',
    description: 'Omfattande guide om KA-certifiering: utbildningskrav, certifieringsorgan, förnyelse och hur du verifierar certifikat.',
    category: 'Kontrollansvarig',
    readTime: '8 min',
    icon: 'Shield',
    seo: {
      title: 'Kontrollansvarig Certifiering - Krav, Process & Förnyelse | Ytterman',
      description: 'Allt om certifiering för kontrollansvarig: Boverkets krav, certifieringsorgan, utbildning, prov och förnyelse. Expert guide från certifierad KA Tobias Ytterman.'
    },
    keywords: ['kontrollansvarig certifiering', 'KA certifikat', 'Boverket certifiering', 'certifieringsorgan', 'KA utbildning', 'certifieringskrav'],
    link: '/guider/kontrollansvarig-certifiering'
  },
  {
    slug: 'kontrollansvarig-ansvar',
    title: 'Kontrollansvarigs Ansvar och Skyldigheter',
    description: 'Detaljerad genomgång av kontrollansvarigs juridiska och praktiska ansvar enligt PBL och BBR.',
    category: 'Kontrollansvarig',
    readTime: '10 min',
    icon: 'Shield',
    seo: {
      title: 'Kontrollansvarigs Ansvar - Juridik, Skyldigheter & Befogenheter | Ytterman',
      description: 'Komplett guide om kontrollansvarigs ansvar enligt PBL. Juridiskt ansvar, skyldigheter, befogenheter och ansvarsförsäkring. Expert råd från Tobias Ytterman.'
    },
    keywords: ['kontrollansvarig ansvar', 'KA skyldigheter', 'juridiskt ansvar', 'PBL ansvar', 'ansvarsförsäkring', 'befogenheter'],
    link: '/guider/kontrollansvarig-ansvar'
  },
  {
    slug: 'kontrollansvarig-timpris',
    title: 'Priser och Timpris för Kontrollansvarig',
    description: 'Transparent prissättning för kontrollansvarig: timpris, fast pris, vad som påverkar kostnaden och hur du får bästa värdet.',
    category: 'Kontrollansvarig',
    readTime: '7 min',
    icon: 'FileText',
    seo: {
      title: 'Kontrollansvarig Timpris & Priser 2025 - Vad Kostar Det? | Ytterman',
      description: 'Transparent prissättning för kontrollansvarig. Timpris, fast pris, genomsnittskostnader och vad som påverkar priset. Kostnadsfri offert från Ytterman.'
    },
    keywords: ['kontrollansvarig timpris', 'kontrollansvarig pris', 'KA kostnad', 'vad kostar kontrollansvarig', 'prissättning', 'fast pris'],
    link: '/guider/kontrollansvarig-timpris'
  },
  {
    slug: 'bas-p-guide',
    title: 'BAS-P Guide - Projektering och Arbetsmiljösamordning',
    description: 'Komplett guide om BAS-P: roll, ansvar, arbetsmiljöplan, riskbedömning och samordning under projekteringsfasen.',
    category: 'Säkerhetssamordning',
    readTime: '9 min',
    icon: 'Users',
    seo: {
      title: 'BAS-P Guide - Arbetsmiljösamordnare Projektering 2025 | Ytterman',
      description: 'Omfattande guide om BAS-P enligt AFS 1999:3. Roll, ansvar, arbetsmiljöplan, riskbedömning och samordning. Expert råd från certifierad BAS-P Tobias Ytterman.'
    },
    keywords: ['BAS-P', 'arbetsmiljösamordnare projektering', 'arbetsmiljöplan', 'riskbedömning', 'AFS 1999:3', 'projekteringsfas'],
    link: '/guider/bas-p-guide'
  },
  {
    slug: 'bas-u-guide',
    title: 'BAS-U Guide - Utförande och Byggsäkerhet',
    description: 'Komplett guide om BAS-U: roll på byggarbetsplatsen, säkerhetsronder, samordningsmöten och uppföljning av arbetsmiljö.',
    category: 'Säkerhetssamordning',
    readTime: '9 min',
    icon: 'Users',
    seo: {
      title: 'BAS-U Guide - Byggarbetsmiljösamordnare Utförande 2025 | Ytterman',
      description: 'Omfattande guide om BAS-U enligt AFS 1999:3. Roll, säkerhetsronder, samordningsmöten och byggarbetsplatssäkerhet. Expert råd från certifierad BAS-U Tobias Ytterman.'
    },
    keywords: ['BAS-U', 'arbetsmiljösamordnare utförande', 'säkerhetsronder', 'byggarbetsplats', 'arbetsmiljö byggplats', 'samordningsmöten'],
    link: '/guider/bas-u-guide'
  },
  {
    slug: 'vad-ar-bas',
    title: 'Vad är BAS? - Skillnad mellan BAS-P och BAS-U',
    description: 'Förklaring av BAS-roller: vad är byggarbetsmiljösamordnare, när behövs BAS-P och BAS-U, och lagkrav enligt AFS 1999:3.',
    category: 'Säkerhetssamordning',
    readTime: '7 min',
    icon: 'Users',
    seo: {
      title: 'Vad är BAS? BAS-P & BAS-U Förklarat - Lagkrav & Skillnader | Ytterman',
      description: 'Enkelt förklarad guide om BAS: vad är byggarbetsmiljösamordnare, skillnad mellan BAS-P och BAS-U, lagkrav och när du behöver BAS. Expert råd från Tobias Ytterman.'
    },
    keywords: ['vad är BAS', 'byggarbetsmiljösamordnare', 'BAS förklaring', 'BAS-P BAS-U skillnad', 'när behövs BAS', 'AFS 1999:3'],
    link: '/guider/vad-ar-bas'
  },
  {
    slug: 'tekniskt-samrad',
    title: 'Tekniskt Samråd i Byggprocessen',
    description: 'Komplett guide om tekniskt samråd: syfte, deltagare, genomförande och dokumentation enligt PBL.',
    category: 'Bygglov',
    readTime: '8 min',
    icon: 'Users',
    seo: {
      title: 'Tekniskt Samråd - Syfte, Process & Krav enligt PBL | Ytterman',
      description: 'Allt om tekniskt samråd i byggprocessen: när det krävs, vem deltar, hur det genomförs och vad som dokumenteras. Expert råd från Tobias Ytterman i Västernorrland.'
    },
    keywords: ['tekniskt samråd', 'samråd bygglov', 'PBL samråd', 'byggsamråd', 'byggmöte', 'samrådsmöte'],
    link: '/guider/tekniskt-samrad'
  },
  {
    slug: 'kontrollplan',
    title: 'Kontrollplan - Upprättande och Innehåll',
    description: 'Omfattande guide om kontrollplan: lagkrav, innehåll, kritiska kontrollpunkter och hur kontrollplanen används i byggprocessen.',
    category: 'Kvalitetskontroll',
    readTime: '10 min',
    icon: 'FileText',
    seo: {
      title: 'Kontrollplan Byggprojekt - Upprättande, Innehåll & Krav | Ytterman',
      description: 'Komplett guide om kontrollplan enligt PBL: vad den ska innehålla, kritiska kontrollpunkter, uppföljning och dokumentation. Expert råd från KA Tobias Ytterman.'
    },
    keywords: ['kontrollplan', 'kontrollplan bygglov', 'kontrollpunkter', 'teknisk kontroll', 'kvalitetsplan', 'PBL kontroll'],
    link: '/guider/kontrollplan'
  },
  {
    slug: 'slutbesked',
    title: 'Slutbesked - Process och Krav',
    description: 'Detaljerad guide om slutbesked från byggnadsnämnden: krav, process, dokumentation och kontrollansvarigs roll.',
    category: 'Bygglov',
    readTime: '8 min',
    icon: 'CheckCircle',
    seo: {
      title: 'Slutbesked Bygglov - Krav, Process & Slutbevis enligt PBL | Ytterman',
      description: 'Allt om slutbesked och slutbevis: krav för slutbesked, ansökan, handlingar, kontrollansvarigs intyg och när byggnaden får tas i bruk. Expert guide från Tobias Ytterman.'
    },
    keywords: ['slutbesked', 'slutbevis', 'slutbesked bygglov', 'ibrukt agande', 'PBL slutbesked', 'byggnadsnämnd'],
    link: '/guider/slutbesked'
  },
  {
    slug: 'vasternorrland',
    title: 'Kontrollansvarig & BAS i Västernorrland',
    description: 'Lokal guide för kontrollansvarig och BAS-tjänster i Västernorrlands kommuner: Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå och Örnsköldsvik.',
    category: 'Lokalt',
    readTime: '11 min',
    icon: 'MapPin',
    seo: {
      title: 'Kontrollansvarig Västernorrland - Sundsvall, Härnösand, Sollefteå | Ytterman',
      description: 'Kontrollansvarig och BAS-tjänster i Västernorrland. Lokala byggkrav, handläggningstider och erfarenhet från Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå, Örnsköldsvik. Expert Tobias Ytterman.'
    },
    keywords: ['kontrollansvarig Västernorrland', 'BAS Sundsvall', 'kontrollansvarig Härnösand', 'bygglov Timrå', 'kontrollansvarig Sollefteå', 'BAS Kramfors', 'Örnsköldsvik'],
    link: '/guider/vasternorrland'
  },
  {
    slug: 'bygglovsguide-vanliga-misstag-husbygge',
    title: 'Bygglovsguide och vanliga misstag vid husbygge',
    description: 'Omfattande guide om bygglovsprocessen och de 12 vanligaste misstagen vid nybyggnad och tillbyggnad. Praktiska råd om kontrollplan, tekniskt samråd och BAS-krav.',
    category: 'Bygglov',
    readTime: '12 min',
    icon: 'AlertTriangle',
    seo: {
      title: 'Bygglovsguide 2025 - 12 Vanliga Misstag & Undvik Dem | Ytterman',
      description: 'Komplett bygglovsguide för husbygge i Västernorrland: processen, kontrollplan, tekniskt samråd, KA-krav och de 12 vanligaste misstagen. Expert råd från Tobias Ytterman.'
    },
    keywords: ['bygglovsguide', 'vanliga misstag husbygge', 'kontrollansvarig bygglov', 'kontrollplan', 'tekniskt samråd', 'slutbesked', 'BAS-P', 'BAS-U', 'nybyggnad', 'tillbyggnad', 'Västernorrland'],
    link: '/guider/bygglovsguide-vanliga-misstag-husbygge'
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
