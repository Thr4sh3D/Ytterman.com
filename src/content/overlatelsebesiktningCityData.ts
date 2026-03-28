// City-specific data for överlåtelsebesiktning landing pages
// Each city gets unique SEO-optimized content, FAQ, and structured data

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
  structuredData: {
    addressLocality: string;
    latitude: number;
    longitude: number;
  };
}

export const overlatelsebesiktningCityData: Record<string, OverlatelsebesiktningCityData> = {
  sundsvall: {
    id: 'sundsvall',
    name: 'Sundsvall',
    slug: 'overlatelsebesiktning-sundsvall',
    municipality: 'Sundsvalls kommun',
    travelTime: 'Hembas – direkt tillgänglig',
    description: 'Överlåtelsebesiktning i Sundsvall med kontor i Viksjö. Snabb service och detaljerad rapport inom 48 timmar.',
    heroTitle: 'Överlåtelsebesiktning i Sundsvall',
    heroSubtitle: 'Trygg fastighetsaffär med professionell besiktning',
    heroDescription: 'Behöver du en överlåtelsebesiktning i Sundsvall? Med kontor i Viksjö och över 20 års erfarenhet i byggbranschen genomför jag grundliga besiktningar av villor, bostadsrätter och fastigheter i hela Sundsvall. Du får en detaljerad rapport med fotografisk dokumentation inom 48 timmar.',
    seo: {
      title: 'Överlåtelsebesiktning Sundsvall - Certifierad Besiktningsman | Ytterman',
      description: 'Överlåtelsebesiktning i Sundsvall. Kontor i Viksjö, 20+ års erfarenhet. Detaljerad rapport inom 48 timmar. Villor, bostadsrätter och fastigheter. Boka din besiktning idag.',
      keywords: 'överlåtelsebesiktning Sundsvall, besiktning Sundsvall, besiktningsman Sundsvall, husbesiktning Sundsvall, fastighetsbesiktning Sundsvall, besiktning hus Sundsvall, överlåtelsebesiktning villa Sundsvall, köpbesiktning Sundsvall, säljbesiktning Sundsvall, besiktningsprotokoll Sundsvall'
    },
    faq: [
      {
        question: 'Vad kostar en överlåtelsebesiktning i Sundsvall?',
        answer: 'Priset för en överlåtelsebesiktning i Sundsvall beror på fastighetens storlek och typ. En standardbesiktning av en villa i Sundsvall kostar från 12 000 SEK. Kontakta mig för en exakt offert anpassad efter din fastighet.'
      },
      {
        question: 'Hur snabbt kan du göra en besiktning i Sundsvall?',
        answer: 'Med kontor i Viksjö, bara 15 minuter från Sundsvalls centrum, kan jag ofta utföra besiktningen inom 1–3 arbetsdagar. Vid brådskande ärenden kan jag ofta prioritera snabbare. Rapporten levereras inom 48 timmar efter besiktningen.'
      },
      {
        question: 'Vilka typer av fastigheter besiktigar du i Sundsvall?',
        answer: 'Jag besiktigar alla typer av bostadsfastigheter i Sundsvall – villor i Petersvik och Granloholm, radhus i Nacksta, äldre trähus i centrum och fritidshus på Alnö. Besiktningen anpassas efter fastighetens ålder och konstruktion.'
      },
      {
        question: 'Vad ingår i en överlåtelsebesiktning i Sundsvall?',
        answer: 'Besiktningen är en okulär (visuell) kontroll av fastighetens alla synliga byggnadsdelar – konstruktion, fasad, tak, grund, väggar, golv, fönster, dörrar samt synliga delar av el-, VVS- och ventilationsinstallationer. Du får fotografisk dokumentation och en detaljerad rapport med prioriterade åtgärdsförslag.'
      },
      {
        question: 'Kan jag vara med under besiktningen i Sundsvall?',
        answer: 'Absolut! Jag uppmuntrar att köpare och/eller säljare deltar under besiktningen. Det ger dig möjlighet att ställa frågor direkt och få en bättre förståelse för fastighetens skick. Besiktningen tar normalt 2–4 timmar beroende på fastighetens storlek.'
      }
    ],
    localContent: {
      intro: 'Som besiktningsman med bas i Sundsvall har jag djup kunskap om den lokala fastighetsmarknaden och de vanligaste byggnadstyperna i området. Från äldre trähus i centrum till nyare villor i Granloholm – jag vet vad man ska titta efter.',
      whyLocal: 'Med kontor i Viksjö erbjuder jag snabb och flexibel service i hela Sundsvall. Min lokalkännedom om Sundsvalls byggbestånd, från 1800-talsbebyggelse till moderna villor, ger dig en mer träffsäker besiktning.',
      propertyTypes: [
        'Villor och radhus i alla prisklasser',
        'Äldre trähus och kulturhistorisk bebyggelse',
        'Nyproduktion och moderna bostäder',
        'Fritidshus och permanentbostäder'
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
    slug: 'overlatelsebesiktning-harnosand',
    municipality: 'Härnösands kommun',
    travelTime: '30 min från Sundsvall',
    description: 'Överlåtelsebesiktning i Härnösand med specialkunskap om kulturhistorisk bebyggelse och äldre trähus.',
    heroTitle: 'Överlåtelsebesiktning i Härnösand',
    heroSubtitle: 'Professionell besiktning med lokal expertis',
    heroDescription: 'Söker du en besiktningsman i Härnösand? Med erfarenhet av Härnösands kulturhistoriska bebyggelse och äldre trähus genomför jag professionella överlåtelsebesiktningar i hela kommunen. Detaljerad rapport med fotografisk dokumentation inom 48 timmar.',
    seo: {
      title: 'Överlåtelsebesiktning Härnösand - Erfaren Besiktningsman | Ytterman',
      description: 'Överlåtelsebesiktning i Härnösand. Specialkunskap om kulturhistorisk bebyggelse och äldre trähus. 20+ års erfarenhet. Rapport inom 48 timmar. Boka besiktning.',
      keywords: 'överlåtelsebesiktning Härnösand, besiktning Härnösand, besiktningsman Härnösand, husbesiktning Härnösand, fastighetsbesiktning Härnösand, besiktning hus Härnösand, överlåtelsebesiktning villa Härnösand, köpbesiktning Härnösand, säljbesiktning Härnösand, besiktning kulturbyggnad Härnösand'
    },
    faq: [
      {
        question: 'Vad kostar en överlåtelsebesiktning i Härnösand?',
        answer: 'Priset för en överlåtelsebesiktning i Härnösand varierar beroende på fastighetens storlek och typ. Standardbesiktning av villa börjar från 12 000 SEK. Äldre kulturhistoriska byggnader kan kräva extra tid. Kontakta mig för en kostnadsfri offert.'
      },
      {
        question: 'Har du erfarenhet av äldre hus i Härnösand?',
        answer: 'Ja, jag har gedigen erfarenhet av äldre trähus och kulturhistorisk bebyggelse i Härnösand. Jag vet vilka typiska problem som uppstår i äldre byggnader – från fuktskador i grunder till brister i äldre takbeläggning – och vad man särskilt bör uppmärksamma.'
      },
      {
        question: 'Hur snabbt kan du besiktiga i Härnösand?',
        answer: 'Härnösand ligger bara 30 minuter från mitt kontor. Jag kan normalt utföra besiktningen inom 1–3 arbetsdagar, ofta snabbare vid brådskande ärenden. Rapporten levereras digitalt inom 48 timmar.'
      },
      {
        question: 'Vad händer om besiktningen hittar allvarliga fel?',
        answer: 'Om jag upptäcker allvarliga brister dokumenteras dessa noggrant i rapporten med fotografier och rekommendationer. Jag kan rekommendera fortsatt utredning av fackman (t.ex. fuktmätning eller elbesiktning) för att fastställa omfattningen. Rapporten ger dig underlag för prisförhandling.'
      }
    ],
    localContent: {
      intro: 'Härnösand med sin rika kulturhistoria och unika stadskärna har många äldre fastigheter med speciella förutsättningar. Som besiktningsman med erfarenhet av Härnösands byggnadsbestånd vet jag vad man ska leta efter.',
      whyLocal: 'Min förståelse för Härnösands fastighetsmarknad och de vanligaste byggtyperna i kommunen gör att du får en träffsäker besiktning. Jag har genomfört många besiktningar i området och vet vilka problem som är vanligast.',
      propertyTypes: [
        'Äldre trähus och kulturhistorisk bebyggelse',
        'Villor och radhus i bostadsområden',
        'Strandnära fastigheter och fritidshus',
        'Nyproducerade bostäder'
      ],
      neighborhoods: ['Centrum', 'Sälsten', 'Häggdånger', 'Brunne', 'Älandsbro', 'Viksjö']
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
    slug: 'overlatelsebesiktning-timra',
    municipality: 'Timrå kommun',
    travelTime: '20 min från Sundsvall',
    description: 'Överlåtelsebesiktning i Timrå med snabb service och lokal närvaro. Detaljerad rapport inom 48 timmar.',
    heroTitle: 'Överlåtelsebesiktning i Timrå',
    heroSubtitle: 'Snabb och professionell besiktning nära dig',
    heroDescription: 'Behöver du en överlåtelsebesiktning i Timrå? Med bara 20 minuter från mitt kontor erbjuder jag snabb och flexibel service för alla typer av fastigheter i Timrå kommun. Över 20 års erfarenhet och detaljerad rapport inom 48 timmar.',
    seo: {
      title: 'Överlåtelsebesiktning Timrå - Snabb Service & Lokal Närvaro | Ytterman',
      description: 'Överlåtelsebesiktning i Timrå. Bara 20 min bort, snabb service. 20+ års erfarenhet. Detaljerad rapport inom 48 timmar. Boka besiktning idag.',
      keywords: 'överlåtelsebesiktning Timrå, besiktning Timrå, besiktningsman Timrå, husbesiktning Timrå, fastighetsbesiktning Timrå, besiktning hus Timrå, överlåtelsebesiktning villa Timrå, köpbesiktning Timrå, säljbesiktning Timrå, besiktningsprotokoll Timrå'
    },
    faq: [
      {
        question: 'Vad kostar en överlåtelsebesiktning i Timrå?',
        answer: 'Priset för en överlåtelsebesiktning i Timrå beror på fastighetens storlek. En standardbesiktning av villa börjar från 12 000 SEK. Inga extra reskostnader tillkommer för projekt i Timrå. Kontakta mig för en exakt offert.'
      },
      {
        question: 'Hur snabbt kan du besiktiga en fastighet i Timrå?',
        answer: 'Timrå ligger bara 20 minuter från mitt kontor, vilket gör att jag kan erbjuda mycket snabb service. Normalt kan besiktningen genomföras inom 1–2 arbetsdagar. Rapporten levereras digitalt inom 48 timmar.'
      },
      {
        question: 'Besiktigar du även fritidshus i Timrå kommun?',
        answer: 'Ja, jag besiktigar alla typer av fastigheter i Timrå kommun – villor, radhus, fritidshus och äldre bostadshus. Oavsett om fastigheten ligger i centrala Timrå, Söråker eller Bergeforsen genomför jag samma noggranna besiktning.'
      },
      {
        question: 'Vad bör jag tänka på inför besiktningen i Timrå?',
        answer: 'Se till att vind, krypgrund, källare och elcentral är åtkomliga. Rensa bort snö från tak och flytta möbler från väggar i fuktkänsliga områden. Nycklar till alla utrymmen ska finnas tillgängliga. Du får en fullständig checklista vid bokning.'
      }
    ],
    localContent: {
      intro: 'Timrå kommun har en blandad bebyggelse med allt från äldre villor till nyproduktion. Som besiktningsman med lokal närvaro i området erbjuder jag snabb och tillgänglig service.',
      whyLocal: 'Med kort avstånd till Timrå kan jag erbjuda flexibla besiktningstider och snabb hantering. Min erfarenhet av fastighetsbeståndet i kommunen ger dig en grundligare och mer träffsäker besiktning.',
      propertyTypes: [
        'Villor och radhus i bostadsområden',
        'Äldre bostadshus och arbetarbostäder',
        'Fritidshus och stugor',
        'Nyproducerade bostäder'
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
    slug: 'overlatelsebesiktning-kramfors',
    municipality: 'Kramfors kommun',
    travelTime: '40 min från Sundsvall',
    description: 'Överlåtelsebesiktning i Kramfors med erfarenhet av fastigheter i både tätort och på landsbygd.',
    heroTitle: 'Överlåtelsebesiktning i Kramfors',
    heroSubtitle: 'Professionell besiktning i hela Kramfors kommun',
    heroDescription: 'Letar du efter en besiktningsman i Kramfors? Med erfarenhet av fastigheter i både Kramfors tätort och på landsbygden genomför jag professionella överlåtelsebesiktningar i hela kommunen. Detaljerad rapport inom 48 timmar, inga extra reskostnader.',
    seo: {
      title: 'Överlåtelsebesiktning Kramfors - Professionell Besiktningsman | Ytterman',
      description: 'Överlåtelsebesiktning i Kramfors. Erfarenhet av tätort och landsbygd. 20+ års erfarenhet, inga reskostnader. Rapport inom 48 timmar. Boka besiktning.',
      keywords: 'överlåtelsebesiktning Kramfors, besiktning Kramfors, besiktningsman Kramfors, husbesiktning Kramfors, fastighetsbesiktning Kramfors, besiktning hus Kramfors, överlåtelsebesiktning villa Kramfors, köpbesiktning Kramfors, säljbesiktning Kramfors, besiktningsprotokoll Kramfors'
    },
    faq: [
      {
        question: 'Vad kostar en överlåtelsebesiktning i Kramfors?',
        answer: 'Priset för en överlåtelsebesiktning i Kramfors varierar beroende på fastighetens storlek och typ. Standardbesiktning av villa börjar från 12 000 SEK. Resor inom Kramfors kommun ingår utan extra kostnad. Kontakta mig för en kostnadsfri offert.'
      },
      {
        question: 'Tar du uppdrag på landsbygden i Kramfors kommun?',
        answer: 'Absolut! Jag tar uppdrag i hela Kramfors kommun – centrala Kramfors, Bollstabruk, Nyland och omkringliggande landsbygd. Resor ingår i priset och jag planerar mina besök effektivt.'
      },
      {
        question: 'Hur snabbt kan du besiktiga i Kramfors?',
        answer: 'Kramfors ligger cirka 40 minuter från mitt kontor. Jag planerar normalt besiktningen inom 1–3 arbetsdagar. Vid brådskande ärenden gör jag mitt bästa för att prioritera snabba besök. Rapporten levereras digitalt inom 48 timmar.'
      },
      {
        question: 'Vilka typer av fastigheter besiktigar du i Kramfors?',
        answer: 'Jag besiktigar alla typer av bostadsfastigheter i Kramfors kommun – villor, äldre trähus, fritidshus, lantbruksfastigheter med bostadshus och permanentbostäder. Besiktningen anpassas efter fastighetens ålder och konstruktion.'
      }
    ],
    localContent: {
      intro: 'Kramfors kommun har ett varierat fastighetsbestånd med allt från stadsnära villor till lantbruksfastigheter och fritidshus. Min erfarenhet av dessa olika fastighetstyper gör att jag kan ge dig en grundlig besiktning.',
      whyLocal: 'Min kunskap om Kramfors kommuns fastighetsbestånd och lokala förutsättningar ger dig en trygg och professionell besiktning. Inga extra reskostnader tillkommer oavsett var i kommunen fastigheten ligger.',
      propertyTypes: [
        'Villor och radhus i tätorten',
        'Äldre trähus och landsbygdsfastigheter',
        'Fritidshus och permanentbostäder',
        'Lantbruksfastigheter med bostadshus'
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
    slug: 'overlatelsebesiktning-solleftea',
    municipality: 'Sollefteå kommun',
    travelTime: '45 min från Sundsvall',
    description: 'Överlåtelsebesiktning i Sollefteå med erfarenhet av landsbygdsfastigheter och klimatanpassade byggnader.',
    heroTitle: 'Överlåtelsebesiktning i Sollefteå',
    heroSubtitle: 'Erfaren besiktningsman för Sollefteå kommun',
    heroDescription: 'Behöver du en överlåtelsebesiktning i Sollefteå? Med erfarenhet av landsbygdsfastigheter och förståelse för det lokala klimatets påverkan på byggnader genomför jag professionella besiktningar i hela Sollefteå kommun. Detaljerad rapport inom 48 timmar.',
    seo: {
      title: 'Överlåtelsebesiktning Sollefteå - Erfaren Besiktningsman | Ytterman',
      description: 'Överlåtelsebesiktning i Sollefteå. Erfarenhet av landsbygdsfastigheter och klimatanpassade byggnader. 20+ års erfarenhet, inga reskostnader. Boka besiktning.',
      keywords: 'överlåtelsebesiktning Sollefteå, besiktning Sollefteå, besiktningsman Sollefteå, husbesiktning Sollefteå, fastighetsbesiktning Sollefteå, besiktning hus Sollefteå, överlåtelsebesiktning villa Sollefteå, köpbesiktning Sollefteå, säljbesiktning Sollefteå, besiktningsprotokoll Sollefteå'
    },
    faq: [
      {
        question: 'Vad kostar en överlåtelsebesiktning i Sollefteå?',
        answer: 'Priset för en överlåtelsebesiktning i Sollefteå beror på fastighetens storlek och typ. Standardbesiktning av villa börjar från 12 000 SEK. Resor inom Sollefteå kommun ingår utan extra kostnad. Kontakta mig för en kostnadsfri offert.'
      },
      {
        question: 'Tar du uppdrag i hela Sollefteå kommun?',
        answer: 'Ja, jag tar uppdrag i hela Sollefteå kommun – från Sollefteå tätort till Ramsele, Junsele, Långsele och övriga delar av kommunen. Inga extra reskostnader tillkommer.'
      },
      {
        question: 'Hur påverkar klimatet fastigheter i Sollefteå?',
        answer: 'Sollefteås inlandsklimat med kalla vintrar och stora temperaturskillnader ställer särskilda krav på byggnader. Jag är extra uppmärksam på tjälskador, fukt i grunder, snölaster på tak och isbildning. Min erfarenhet av lokala förutsättningar ger dig en mer träffsäker besiktning.'
      },
      {
        question: 'Hur snabbt kan du besiktiga i Sollefteå?',
        answer: 'Sollefteå ligger cirka 45 minuter från mitt kontor. Jag planerar normalt besiktningen inom 1–3 arbetsdagar och samordnar gärna flera uppdrag i området. Rapporten levereras digitalt inom 48 timmar.'
      }
    ],
    localContent: {
      intro: 'Sollefteå kommun med sin vidsträckta geografi och varierande klimat ställer särskilda krav på fastigheter. Som besiktningsman med erfarenhet av områdets byggnadsbestånd vet jag vad man ska vara uppmärksam på.',
      whyLocal: 'Min förståelse för Sollefteås lokala förutsättningar – från klimatpåverkan till äldre byggtraditioner – ger dig en professionell och grundlig besiktning. Inga extra reskostnader tillkommer.',
      propertyTypes: [
        'Äldre landsbygdsfastigheter',
        'Villor och bostadshus i tätorten',
        'Fritidshus och permanentbostäder',
        'Klimatanpassade nybyggnationer'
      ],
      neighborhoods: ['Sollefteå tätort', 'Ramsele', 'Junsele', 'Långsele', 'Graninge']
    },
    structuredData: {
      addressLocality: 'Sollefteå',
      latitude: 63.1661,
      longitude: 17.2690
    }
  },

  ornskoldsvik: {
    id: 'ornskoldsvik',
    name: 'Örnsköldsvik',
    slug: 'overlatelsebesiktning-ornskoldsvik',
    municipality: 'Örnsköldsviks kommun',
    travelTime: '1 h 15 min från Sundsvall',
    description: 'Överlåtelsebesiktning i Örnsköldsvik med erfarenhet av kust- och stadsnära fastigheter.',
    heroTitle: 'Överlåtelsebesiktning i Örnsköldsvik',
    heroSubtitle: 'Professionell besiktning för hela Örnsköldsvik',
    heroDescription: 'Söker du en besiktningsman i Örnsköldsvik? Med över 20 års erfarenhet i byggbranschen genomför jag professionella överlåtelsebesiktningar i hela Örnsköldsviks kommun. Från kustnära villor till centrala fastigheter – du får en detaljerad rapport inom 48 timmar.',
    seo: {
      title: 'Överlåtelsebesiktning Örnsköldsvik - Professionell Besiktning | Ytterman',
      description: 'Överlåtelsebesiktning i Örnsköldsvik. 20+ års erfarenhet, detaljerad rapport inom 48 timmar. Villor, bostadsrätter och fastigheter i hela kommunen. Boka besiktning.',
      keywords: 'överlåtelsebesiktning Örnsköldsvik, besiktning Örnsköldsvik, besiktningsman Örnsköldsvik, husbesiktning Örnsköldsvik, fastighetsbesiktning Örnsköldsvik, besiktning hus Örnsköldsvik, överlåtelsebesiktning villa Örnsköldsvik, köpbesiktning Örnsköldsvik, säljbesiktning Örnsköldsvik, besiktningsprotokoll Örnsköldsvik'
    },
    faq: [
      {
        question: 'Vad kostar en överlåtelsebesiktning i Örnsköldsvik?',
        answer: 'Priset för en överlåtelsebesiktning i Örnsköldsvik beror på fastighetens storlek och typ. Standardbesiktning av villa börjar från 12 000 SEK. Kontakta mig för en kostnadsfri offert anpassad efter din fastighet i Örnsköldsvik.'
      },
      {
        question: 'Hur snabbt kan du besiktiga i Örnsköldsvik?',
        answer: 'Örnsköldsvik ligger cirka 1 timme och 15 minuter från mitt kontor. Jag planerar normalt besiktningen inom 2–4 arbetsdagar och samordnar gärna flera uppdrag i Örnsköldsviks-området. Rapporten levereras digitalt inom 48 timmar.'
      },
      {
        question: 'Vilka områden i Örnsköldsvik täcker du?',
        answer: 'Jag tar uppdrag i hela Örnsköldsviks kommun – centrala Örnsköldsvik, Domsjö, Bredbyn, Björna, Husum och Köpmanholmen. Oavsett var i kommunen fastigheten ligger genomför jag samma noggranna besiktning.'
      },
      {
        question: 'Vad bör man tänka på vid köp av kustnära fastigheter i Örnsköldsvik?',
        answer: 'Kustnära fastigheter i Örnsköldsvik kan ha särskilda utmaningar som saltpåverkan, fukt och vindutsatthet. Vid besiktningen är jag extra uppmärksam på fasad, tak, grunder och fuktindikatorer som kan vara vanliga i kustmiljö.'
      }
    ],
    localContent: {
      intro: 'Örnsköldsvik med sitt kustnära läge och varierade bebyggelse erbjuder allt från centrala stadsvillor till lantliga fastigheter. Som besiktningsman med bred erfarenhet genomför jag grundliga besiktningar anpassade efter varje fastighets unika förutsättningar.',
      whyLocal: 'Min erfarenhet av kustens påverkan på byggnader och kunskap om regionens fastighetsbestånd ger dig en professionell besiktning. Jag förstår de utmaningar som kustklimatet innebär och vad man bör vara extra uppmärksam på.',
      propertyTypes: [
        'Kustnära villor och fastigheter',
        'Stadsvillor och radhus i centrum',
        'Fritidshus och strandtomter',
        'Äldre bostadshus och landsbygdsfastigheter'
      ],
      neighborhoods: ['Centrala Örnsköldsvik', 'Domsjö', 'Bredbyn', 'Björna', 'Husum', 'Köpmanholmen']
    },
    structuredData: {
      addressLocality: 'Örnsköldsvik',
      latitude: 63.2909,
      longitude: 18.7152
    }
  },

  ange: {
    id: 'ange',
    name: 'Ånge',
    slug: 'overlatelsebesiktning-ange',
    municipality: 'Ånge kommun',
    travelTime: '1 h från Sundsvall',
    description: 'Överlåtelsebesiktning i Ånge med erfarenhet av landsbygdsfastigheter och inlandsklimatet.',
    heroTitle: 'Överlåtelsebesiktning i Ånge',
    heroSubtitle: 'Erfaren besiktningsman för Ånge kommun',
    heroDescription: 'Behöver du en överlåtelsebesiktning i Ånge? Med över 20 års erfarenhet i byggbranschen och förståelse för inlandsklimatets påverkan på fastigheter genomför jag professionella besiktningar i hela Ånge kommun. Detaljerad rapport inom 48 timmar.',
    seo: {
      title: 'Överlåtelsebesiktning Ånge - Erfaren Besiktningsman | Ytterman',
      description: 'Överlåtelsebesiktning i Ånge. Erfarenhet av landsbygdsfastigheter och inlandsklimatet. 20+ års erfarenhet. Rapport inom 48 timmar. Boka besiktning idag.',
      keywords: 'överlåtelsebesiktning Ånge, besiktning Ånge, besiktningsman Ånge, husbesiktning Ånge, fastighetsbesiktning Ånge, besiktning hus Ånge, överlåtelsebesiktning villa Ånge, köpbesiktning Ånge, säljbesiktning Ånge, besiktningsprotokoll Ånge'
    },
    faq: [
      {
        question: 'Vad kostar en överlåtelsebesiktning i Ånge?',
        answer: 'Priset för en överlåtelsebesiktning i Ånge beror på fastighetens storlek och typ. Standardbesiktning av villa börjar från 12 000 SEK. Kontakta mig för en kostnadsfri offert anpassad efter din fastighet i Ånge.'
      },
      {
        question: 'Tar du uppdrag i hela Ånge kommun?',
        answer: 'Ja, jag tar uppdrag i hela Ånge kommun – Ånge tätort, Fränsta, Ljungaverk, Torpshammar och omkringliggande landsbygd. Jag planerar mina besök effektivt för att ge dig bästa möjliga service.'
      },
      {
        question: 'Hur påverkar inlandsklimatet fastigheter i Ånge?',
        answer: 'Ånges inlandsklimat med kalla vintrar, snörika förhållanden och tjäle ställer höga krav på byggnader. Jag är extra uppmärksam på grundens skick, snölaster, tjälskador, fukt i källare och vindsisolering. Min erfarenhet av dessa förutsättningar ger dig en grundligare besiktning.'
      },
      {
        question: 'Hur snabbt kan du besiktiga i Ånge?',
        answer: 'Ånge ligger cirka en timme från mitt kontor. Jag planerar normalt besiktningen inom 2–4 arbetsdagar och samordnar gärna flera uppdrag i Ånge-området. Rapporten levereras digitalt inom 48 timmar.'
      }
    ],
    localContent: {
      intro: 'Ånge kommun med sitt inlandsklimat och varierade fastighetsbestånd ställer särskilda krav på besiktningar. Min erfarenhet av landsbygdsfastigheter och förståelse för klimatets påverkan ger dig en trygg fastighetsaffär.',
      whyLocal: 'Min kunskap om Ånge kommuns byggbestånd och inlandsklimatets påverkan på fastigheter gör att jag kan identifiera potentiella problem som mindre erfarna besiktningsmän kan missa. Inga extra reskostnader tillkommer.',
      propertyTypes: [
        'Äldre landsbygdsfastigheter',
        'Villor och bostadshus i tätorten',
        'Fritidshus och stugbyar',
        'Lantbruksfastigheter med bostadshus'
      ],
      neighborhoods: ['Ånge tätort', 'Fränsta', 'Ljungaverk', 'Torpshammar', 'Alby']
    },
    structuredData: {
      addressLocality: 'Ånge',
      latitude: 62.5247,
      longitude: 15.6592
    }
  }
};

// Get all city slugs for routing
export const overlatelsebesiktningCitySlugs = Object.values(overlatelsebesiktningCityData).map(city => city.slug);

// Helper to get city data by slug
export const getOverlatelsebesiktningCityBySlug = (slug: string): OverlatelsebesiktningCityData | undefined => {
  return Object.values(overlatelsebesiktningCityData).find(city => city.slug === slug);
};

// Get all other cities for cross-linking (excluding the current city)
export const getOtherOverlatelsebesiktningCities = (currentId: string): OverlatelsebesiktningCityData[] => {
  return Object.values(overlatelsebesiktningCityData).filter(city => city.id !== currentId);
};
