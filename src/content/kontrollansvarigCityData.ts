// City-specific data for kontrollansvarig landing pages
// Each city gets unique SEO-optimized content, FAQ, and structured data

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
  structuredData: {
    addressLocality: string;
    latitude: number;
    longitude: number;
  };
}

export const cityData: Record<string, CityData> = {
  sundsvall: {
    id: 'sundsvall',
    name: 'Sundsvall',
    slug: 'kontrollansvarig-sundsvall',
    municipality: 'Sundsvalls kommun',
    travelTime: 'Hembas – direkt tillgänglig',
    description: 'Kontrollansvarig i Sundsvall med kontor i Viksjö. Snabb service för alla typer av byggprojekt i Sundsvall med omnejd.',
    heroTitle: 'Kontrollansvarig i Sundsvall',
    heroSubtitle: 'Certifierad kontrollansvarig med lokal närvaro i Sundsvall',
    heroDescription: 'Behöver du en kontrollansvarig i Sundsvall? Som certifierad kontrollansvarig (KA enligt PBL) med kontor i Viksjö och över 20 års erfarenhet i byggbranschen är jag din lokala expert. Jag hjälper dig genom hela byggprocessen – från kontrollplan till slutbevis – med snabb service och personligt engagemang.',
    seo: {
      title: 'Kontrollansvarig Sundsvall - Certifierad KA med Lokal Närvaro | Ytterman',
      description: 'Certifierad kontrollansvarig i Sundsvall. Kontor i Viksjö med 20+ års erfarenhet. Fast pris, snabb service för villor, tillbyggnader och kommersiella projekt. Boka kostnadsfri konsultation.',
      keywords: 'kontrollansvarig Sundsvall, kontrollansvarig Sundsvalls kommun, KA Sundsvall, byggkontroll Sundsvall, kontrollplan Sundsvall, slutbevis Sundsvall, kontrollansvarig villa Sundsvall, kontrollansvarig bygglov Sundsvall, certifierad kontrollansvarig Sundsvall, PBL kontroll Sundsvall'
    },
    faq: [
      {
        question: 'Vad kostar en kontrollansvarig i Sundsvall?',
        answer: 'Priset för en kontrollansvarig i Sundsvall beror på projektets storlek och komplexitet. För en villatillbyggnad i Sundsvall börjar priserna från cirka 15 000 SEK. Nybyggnad av villa kostar vanligtvis från 19 999 SEK. Kontakta mig för en kostnadsfri offert anpassad efter ditt specifika projekt i Sundsvall.'
      },
      {
        question: 'Behöver jag en kontrollansvarig för mitt byggprojekt i Sundsvall?',
        answer: 'Ja, enligt Plan- och bygglagen (PBL) krävs en certifierad kontrollansvarig för alla bygglovspliktiga åtgärder i Sundsvalls kommun. Det gäller nybyggnation, tillbyggnader och större renoveringar. Sundsvalls kommun kräver att kontrollansvarig utses redan vid bygglovsansökan.'
      },
      {
        question: 'Hur snabbt kan du vara på plats i Sundsvall?',
        answer: 'Med kontor i Viksjö, bara 15 minuter från Sundsvalls centrum, kan jag ofta vara på plats samma dag eller senast nästa arbetsdag. För akuta ärenden prioriterar jag snabb service i hela Sundsvallsområdet, inklusive Skönsberg, Nacksta, Petersvik och Granloholm.'
      },
      {
        question: 'Vilka typer av byggprojekt hanterar du i Sundsvall?',
        answer: 'Jag hanterar alla typer av bygglovspliktiga projekt i Sundsvall – från villabyggen i Petersvik och Granloholm till tillbyggnader i Nacksta och Skönsberg, samt kommersiella projekt i centrala Sundsvall. Min breda erfarenhet täcker nybyggnation, ombyggnad och rivning.'
      }
    ],
    localContent: {
      intro: 'Som kontrollansvarig med bas i Sundsvall har jag djup kunskap om Sundsvalls kommuns byggnormer, lokala förutsättningar och samarbete med byggnadsnämnden.',
      whyLocal: 'Med kontor i Viksjö är jag alltid nära till hands för platsbesök och möten. Min lokalkännedom om Sundsvalls byggmarknad, från villaområden till kommersiella zoner, ger dig en tryggare byggprocess.',
      projectTypes: [
        'Nybyggnation av villor och flerbostadshus',
        'Tillbyggnader och renoveringar',
        'Kommersiella byggprojekt',
        'Industribyggnationer vid E4-stråket'
      ],
      neighborhoods: ['Petersvik', 'Granloholm', 'Nacksta', 'Skönsberg', 'Centrum', 'Alnö', 'Matfors', 'Stöde']
    },
    structuredData: {
      addressLocality: 'Sundsvall',
      latitude: 62.3908,
      longitude: 17.3069
    }
  },

  harnosand: {
    id: 'harnosand',
    name: 'Härnösand',
    slug: 'kontrollansvarig-harnosand',
    municipality: 'Härnösands kommun',
    travelTime: '30 min från Sundsvall',
    description: 'Kontrollansvarig i Härnösand med specialkunskap om kulturhistorisk bebyggelse och samarbete med Härnösands byggnadsnämnd.',
    heroTitle: 'Kontrollansvarig i Härnösand',
    heroSubtitle: 'Certifierad kontrollansvarig med erfarenhet i Härnösand',
    heroDescription: 'Söker du en kontrollansvarig i Härnösand? Med erfarenhet av Härnösands kulturhistoriska stadskärna och nära samarbete med kommunens byggnadsnämnd hjälper jag dig som certifierad kontrollansvarig (KA enligt PBL) med allt från kontrollplan till slutbevis. Över 20 års erfarenhet i byggbranschen.',
    seo: {
      title: 'Kontrollansvarig Härnösand - Certifierad KA & Kulturbyggnad | Ytterman',
      description: 'Certifierad kontrollansvarig i Härnösand. Specialkunskap om K-märkta byggnader och kulturhistorisk bebyggelse. 20+ års erfarenhet, fast pris. Boka kostnadsfri konsultation.',
      keywords: 'kontrollansvarig Härnösand, kontrollansvarig Härnösands kommun, KA Härnösand, byggkontroll Härnösand, kontrollplan Härnösand, slutbevis Härnösand, kontrollansvarig kulturbyggnad Härnösand, kontrollansvarig bygglov Härnösand, certifierad kontrollansvarig Härnösand, PBL kontroll Härnösand'
    },
    faq: [
      {
        question: 'Vad kostar en kontrollansvarig i Härnösand?',
        answer: 'Kostnaden för en kontrollansvarig i Härnösand varierar beroende på projektets art och storlek. Enklare tillbyggnader börjar från cirka 15 000 SEK medan nybyggnation av villa kostar från 19 999 SEK. Projekt som involverar K-märkta byggnader kan kräva extra insatser. Kontakta mig för en kostnadsfri offert.'
      },
      {
        question: 'Har du erfarenhet av K-märkta byggnader i Härnösand?',
        answer: 'Ja, jag har lång erfarenhet av om- och tillbyggnader av kulturhistoriskt värdefulla byggnader i Härnösands stadskärna. Jag förstår de särskilda krav som ställs vid arbeten med K-märkta fastigheter och samarbetar nära med Härnösands kommun för att säkerställa att kulturvärden bevaras.'
      },
      {
        question: 'Hur snabbt kan du vara på plats i Härnösand?',
        answer: 'Härnösand ligger bara 30 minuter från mitt kontor i Viksjö. Jag kan normalt vara på plats inom 1–2 arbetsdagar, ofta samma dag vid akuta behov. Jag har regelbundna uppdrag i Härnösand och planerar effektiva besök i hela kommunen.'
      },
      {
        question: 'Vilka byggprojekt hanterar du i Härnösand?',
        answer: 'I Härnösand hanterar jag allt från renovering av kulturhistoriska byggnader i centrum till nybyggnation i Sälsten och Häggdånger. Jag har erfarenhet av både bostadsprojekt och kommersiella fastigheter i Härnösands kommun.'
      }
    ],
    localContent: {
      intro: 'Härnösand med sin rika kulturhistoria och unika stadskärna ställer särskilda krav på kontrollansvarig. Med min erfarenhet av K-märkt bebyggelse och samarbete med Härnösands byggnadsnämnd är jag rätt val för ditt byggprojekt.',
      whyLocal: 'Min förståelse för Härnösands kulturhistoriska värden och lokala byggregler ger dig en tryggare process. Jag har genomfört många projekt i kommunen och har etablerade kontakter med lokala byggföretag och myndigheter.',
      projectTypes: [
        'Renovering av kulturhistoriska byggnader',
        'Nybyggnation av villor och bostäder',
        'Tillbyggnader i stadskärnan',
        'Ombyggnad av äldre fastigheter'
      ],
      neighborhoods: ['Centrum', 'Sälsten', 'Häggdånger', 'Brunne', 'Viksjö', 'Älandsbro']
    },
    structuredData: {
      addressLocality: 'Härnösand',
      latitude: 62.6323,
      longitude: 17.9409
    }
  },

  timra: {
    id: 'timra',
    name: 'Timrå',
    slug: 'kontrollansvarig-timra',
    municipality: 'Timrå kommun',
    travelTime: '20 min från Sundsvall',
    description: 'Kontrollansvarig i Timrå med erfarenhet av både bostadsprojekt och industribyggnation i Timrå kommun.',
    heroTitle: 'Kontrollansvarig i Timrå',
    heroSubtitle: 'Certifierad kontrollansvarig med snabb service i Timrå',
    heroDescription: 'Behöver du en kontrollansvarig i Timrå? Med bara 20 minuter till Timrå från mitt kontor i Viksjö erbjuder jag snabb och flexibel service som certifierad kontrollansvarig (KA enligt PBL). Över 20 års erfarenhet av både villa- och industribyggnation i Timrå kommun.',
    seo: {
      title: 'Kontrollansvarig Timrå - Certifierad KA Nära Till Hands | Ytterman',
      description: 'Certifierad kontrollansvarig i Timrå. Bara 20 min bort, snabb service för villor och industriprojekt. 20+ års erfarenhet, fast pris. Boka kostnadsfri konsultation.',
      keywords: 'kontrollansvarig Timrå, kontrollansvarig Timrå kommun, KA Timrå, byggkontroll Timrå, kontrollplan Timrå, slutbevis Timrå, kontrollansvarig villa Timrå, kontrollansvarig industri Timrå, certifierad kontrollansvarig Timrå, PBL kontroll Timrå'
    },
    faq: [
      {
        question: 'Vad kostar en kontrollansvarig i Timrå?',
        answer: 'Priset för en kontrollansvarig i Timrå beror på projektets omfattning. Enklare tillbyggnader börjar från cirka 15 000 SEK och nybyggnation av villa från 19 999 SEK. Inga extra reskostnader tillkommer för projekt i Timrå. Kontakta mig för en kostnadsfri offert.'
      },
      {
        question: 'Behöver jag kontrollansvarig för mitt byggprojekt i Timrå?',
        answer: 'Ja, Plan- och bygglagen (PBL) kräver en certifierad kontrollansvarig för alla bygglovspliktiga projekt i Timrå kommun. Det gäller nybyggnation, tillbyggnader och större renoveringar oavsett om projektet ligger i Söråker, Bergeforsen eller centrala Timrå.'
      },
      {
        question: 'Hur snabbt kan du vara på plats i Timrå?',
        answer: 'Timrå ligger bara 20 minuter från mitt kontor, vilket gör att jag kan erbjuda mycket snabb service. Ofta samma dag för akuta ärenden, och flexibla platsbesök i hela Timrå kommun inklusive Söråker, Bergeforsen och E4-stråket.'
      },
      {
        question: 'Hanterar du industribyggnation i Timrå?',
        answer: 'Ja, jag har bred erfarenhet av industribyggnation längs E4-stråket i Timrå. Förutom bostadsprojekt hanterar jag kontrollansvar för industri- och kommersiella byggnader. Min erfarenhet av både mindre och större projekt gör att jag kan anpassa insatsen efter dina behov.'
      }
    ],
    localContent: {
      intro: 'Timrå kommun är ett växande område med stark industritradition och attraktiva bostadsområden. Som kontrollansvarig i Timrå erbjuder jag snabb och tillgänglig service tack vare kort avstånd.',
      whyLocal: 'Med bara 20 minuters restid kan jag snabbt vara på plats i Timrå. Min erfarenhet från både villa- och industribyggnation i kommunen ger dig tryggheten att projektet följer alla gällande regler.',
      projectTypes: [
        'Villabyggen i Söråker och Bergeforsen',
        'Industribyggnader vid E4-stråket',
        'Renoveringar i centrala Timrå',
        'Tillbyggnader och komplementbyggnader'
      ],
      neighborhoods: ['Söråker', 'Bergeforsen', 'Centrala Timrå', 'Skog', 'Vivsta']
    },
    structuredData: {
      addressLocality: 'Timrå',
      latitude: 62.4873,
      longitude: 17.3241
    }
  },

  kramfors: {
    id: 'kramfors',
    name: 'Kramfors',
    slug: 'kontrollansvarig-kramfors',
    municipality: 'Kramfors kommun',
    travelTime: '40 min från Sundsvall',
    description: 'Kontrollansvarig i Kramfors med erfarenhet av byggprojekt i både tätort och landsbygd i Kramfors kommun.',
    heroTitle: 'Kontrollansvarig i Kramfors',
    heroSubtitle: 'Certifierad kontrollansvarig för Kramfors kommun',
    heroDescription: 'Letar du efter en kontrollansvarig i Kramfors? Som certifierad kontrollansvarig (KA enligt PBL) med erfarenhet av byggprojekt i hela Kramfors kommun hjälper jag dig genom byggprocessen. Över 20 års erfarenhet, inga extra reskostnader och personlig service från kontrollplan till slutbevis.',
    seo: {
      title: 'Kontrollansvarig Kramfors - Certifierad KA för Hela Kommunen | Ytterman',
      description: 'Certifierad kontrollansvarig i Kramfors. Erfarenhet av tätort och landsbygd, inga reskostnader. 20+ års erfarenhet, fast pris. Boka kostnadsfri konsultation.',
      keywords: 'kontrollansvarig Kramfors, kontrollansvarig Kramfors kommun, KA Kramfors, byggkontroll Kramfors, kontrollplan Kramfors, slutbevis Kramfors, kontrollansvarig villa Kramfors, kontrollansvarig bygglov Kramfors, certifierad kontrollansvarig Kramfors, PBL kontroll Kramfors'
    },
    faq: [
      {
        question: 'Vad kostar en kontrollansvarig i Kramfors?',
        answer: 'Priset för en kontrollansvarig i Kramfors varierar beroende på projektet. Enklare tillbyggnader börjar från cirka 15 000 SEK och nybyggnation från 19 999 SEK. Alla resor inom Kramfors kommun ingår utan extra kostnad. Kontakta mig för en kostnadsfri offert.'
      },
      {
        question: 'Tar du uppdrag på landsbygden i Kramfors kommun?',
        answer: 'Absolut! Jag tar uppdrag i hela Kramfors kommun – både i centrala Kramfors, Bollstabruk och på landsbygden i omkringliggande byar. Resor ingår i priset och jag planerar mina besök effektivt för att ge dig bästa möjliga service.'
      },
      {
        question: 'Hur snabbt kan du vara på plats i Kramfors?',
        answer: 'Kramfors ligger cirka 40 minuter från mitt kontor. Jag planerar normalt platsbesök inom 1–2 arbetsdagar. Vid akuta behov kan jag ofta prioritera om för att vara på plats snabbare. Jag koordinerar gärna flera besök i Kramforsområdet.'
      },
      {
        question: 'Vilka typer av projekt hanterar du i Kramfors?',
        answer: 'I Kramfors kommun hanterar jag alla bygglovspliktiga projekt – nybyggnation i centrum, renoveringar i Bollstabruk, fritidshusbyggen och landsbygdsbyggnation. Min breda erfarenhet gör att jag kan hantera projekt av alla storlekar i hela kommunen.'
      }
    ],
    localContent: {
      intro: 'Kramfors kommun har ett stort geografiskt område med varierade byggförutsättningar. Som kontrollansvarig i Kramfors har jag erfarenhet av projekt i både tätort och på landsbygden.',
      whyLocal: 'Min kunskap om Kramfors kommuns byggregler och lokala förutsättningar, kombinerat med erfarenhet av landsbygdsbyggnation, gör att jag kan ge dig professionell och trygg service oavsett var i kommunen projektet ligger.',
      projectTypes: [
        'Nybyggnation i Kramfors centrum',
        'Renoveringar och ombyggnader i Bollstabruk',
        'Fritidshus och permanentbostäder',
        'Landsbygdsbyggnation i omkringliggande byar'
      ],
      neighborhoods: ['Kramfors centrum', 'Bollstabruk', 'Nyland', 'Docksta', 'Ullånger']
    },
    structuredData: {
      addressLocality: 'Kramfors',
      latitude: 62.9310,
      longitude: 17.7763
    }
  },

  solleftea: {
    id: 'solleftea',
    name: 'Sollefteå',
    slug: 'kontrollansvarig-solleftea',
    municipality: 'Sollefteå kommun',
    travelTime: '45 min från Sundsvall',
    description: 'Kontrollansvarig i Sollefteå med erfarenhet av landsbygdsbyggnation och klimatanpassat byggande i Sollefteå kommun.',
    heroTitle: 'Kontrollansvarig i Sollefteå',
    heroSubtitle: 'Certifierad kontrollansvarig för Sollefteå kommun',
    heroDescription: 'Behöver du en kontrollansvarig i Sollefteå? Med erfarenhet av landsbygdsbyggnation och klimatanpassat byggande är jag din certifierade kontrollansvarig (KA enligt PBL) för Sollefteå kommun. Över 20 års erfarenhet, inga extra reskostnader och trygg service från kontrollplan till slutbevis.',
    seo: {
      title: 'Kontrollansvarig Sollefteå - Certifierad KA för Landsbygd & Tätort | Ytterman',
      description: 'Certifierad kontrollansvarig i Sollefteå. Erfarenhet av landsbygdsbyggnation och klimatanpassat byggande. 20+ års erfarenhet, inga reskostnader. Boka kostnadsfri konsultation.',
      keywords: 'kontrollansvarig Sollefteå, kontrollansvarig Sollefteå kommun, KA Sollefteå, byggkontroll Sollefteå, kontrollplan Sollefteå, slutbevis Sollefteå, kontrollansvarig villa Sollefteå, kontrollansvarig bygglov Sollefteå, certifierad kontrollansvarig Sollefteå, PBL kontroll Sollefteå'
    },
    faq: [
      {
        question: 'Vad kostar en kontrollansvarig i Sollefteå?',
        answer: 'Priset för en kontrollansvarig i Sollefteå beror på projektets omfattning. Enklare tillbyggnader börjar från cirka 15 000 SEK och nybyggnation från 19 999 SEK. Alla resor inom Sollefteå kommun ingår utan extra kostnad. Kontakta mig för en kostnadsfri offert.'
      },
      {
        question: 'Tar du uppdrag i hela Sollefteå kommun?',
        answer: 'Ja, jag tar uppdrag i hela Sollefteå kommun – från Sollefteå tätort till landsbygden och småorter. Min erfarenhet av landsbygdsbyggnation och effektiv planering av platsbesök gör att du får samma höga service oavsett var projektet ligger.'
      },
      {
        question: 'Hur snabbt kan du vara på plats i Sollefteå?',
        answer: 'Sollefteå ligger cirka 45 minuter från mitt kontor. Jag planerar normalt platsbesök inom 1–3 arbetsdagar och samordnar gärna flera uppdrag i området. Vid akuta ärenden gör jag mitt bästa för att prioritera snabba besök.'
      },
      {
        question: 'Har du erfarenhet av klimatanpassat byggande i Sollefteå?',
        answer: 'Ja, Sollefteås klimat ställer särskilda krav på byggande. Jag har erfarenhet av energieffektivt byggande och förståelse för de utmaningar som inlandsklimatet medför – från tjälisolering till snölaster. Jag ser till att kontrollplanen tar hänsyn till lokala klimatförutsättningar.'
      }
    ],
    localContent: {
      intro: 'Sollefteå kommun med sin vidsträckta geografi och varierande klimat ställer särskilda krav på byggprojekt. Som kontrollansvarig i Sollefteå har jag erfarenhet av landsbygdens unika förutsättningar.',
      whyLocal: 'Min förståelse för Sollefteå kommuns lokala byggförutsättningar, inklusive klimatanpassning och landsbygdens utmaningar, ger dig en trygg och professionell byggprocess. Inga extra reskostnader tillkommer.',
      projectTypes: [
        'Lantbruksbyggnader och ekonomibyggnader',
        'Fritidshus och permanentbostäder',
        'Renoveringar i Sollefteå tätort',
        'Klimatanpassade nybyggnationer'
      ],
      neighborhoods: ['Sollefteå tätort', 'Ramsele', 'Junsele', 'Långsele', 'Graninge']
    },
    structuredData: {
      addressLocality: 'Sollefteå',
      latitude: 63.1661,
      longitude: 17.2690
    }
  }
};

// Get all city slugs for routing
export const cityPageSlugs = Object.values(cityData).map(city => city.slug);

// Helper to get city data by slug
export const getCityBySlug = (slug: string): CityData | undefined => {
  return Object.values(cityData).find(city => city.slug === slug);
};

// Get all other cities for cross-linking (excluding the current city)
export const getOtherCities = (currentId: string): CityData[] => {
  return Object.values(cityData).filter(city => city.id !== currentId);
};
