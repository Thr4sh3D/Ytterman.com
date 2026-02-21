interface SEOContentProps {
  children: React.ReactNode;
  keywords?: string[];
  semanticKeywords?: string[];
  className?: string;
}

export const SEOContent = ({ 
  children, 
  keywords = [], 
  semanticKeywords = [],
  className = ""
}: SEOContentProps) => {
  return (
    <div 
      className={className}
      data-seo-keywords={keywords.join(',')}
      data-semantic-keywords={semanticKeywords.join(',')}
    >
      {children}
    </div>
  );
};

// Enhanced SEO-optimized content helpers with local keywords
export const seoKeywords = {
  primary: [
    'kontrollansvarig Västernorrland',
    'kontrollansvarig Sundsvall',
    'kontrollansvarig Härnösand', 
    'BAS-P Sundsvall',
    'BAS-P Västernorrland',
    'BAS-U Härnösand',
    'BAS-U Sollefteå',
    'byggkontroll Västernorrland',
    'arbetsmiljösamordnare Timrå',
    'kontrollansvarig Kramfors',
    'bygglov Sundsvall',
    'bygglov Härnösand'
  ],
  secondary: [
    'PBL kontroll',
    'slutbevis bygglov',
    'arbetsmiljöplan bygg',
    'riskbedömning byggarbetsplats',
    'byggarbetsmiljö samordning',
    'kontrollplan PBL',
    'teknisk kontroll bygg',
    'besiktning bygglov',
    'bygglovshandlingar',
    'planritningar',
    'situationsplan',
    'sektionsritningar'
  ],
  semantic: [
    'certifierad byggexpert Västernorrland',
    'trygg byggprocess',
    'professionell byggkontroll',
    'erfaren kontrollansvarig',
    'kvalitetssäkring byggprojekt',
    'regelefterlevnad PBL',
    'säker arbetsmiljö bygg',
    'byggprojekt Sundsvall',
    'byggföretag Härnösand',
    'byggtjänster Sollefteå',
    'byggkonsult Timrå',
    'byggexpert Kramfors'
  ],
  local: [
    'Sundsvall byggkontroll',
    'Härnösand kontrollansvarig',
    'Sollefteå BAS-P',
    'Timrå BAS-U',
    'Kramfors bygglov',
    'Västernorrland byggexpert',
    'Medelpad kontrollansvarig',
    'Ångermanland BAS',
    'norra Sverige byggkontroll'
  ]
};

export const seoContent = {
  hero: {
    title: "Certifierad Kontrollansvarig & BAS i Västernorrland - Trygg Byggprocess",
    subtitle: "Över 20 års erfarenhet i byggbranschen med certifiering inom kontrollansvarig (KA), BAS-P och BAS-U tjänster i Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors. Fast pris och professionell hantering för din byggprocess.",
    cta: "Få kostnadsfri konsultation och offert idag"
  },
  services: {
    intro: "Kompletta byggtjänster för trygg och regelenlig byggprocess i Västernorrland",
    ka: {
      title: "Kontrollansvarig (KA) enligt PBL",
      description: "Certifierad kontrollansvarig för teknisk kontroll, slutbesiktning och slutbevis enligt Plan- och bygglagen. Verksam i Sundsvall, Härnösand och hela Västernorrland."
    },
    basP: {
      title: "BAS-P - Byggarbetsmiljösamordnare Projektering", 
      description: "Professionell arbetsmiljösamordning under projekteringsfasen med arbetsmiljöplan och riskbedömning för byggprojekt i Västernorrland."
    },
    basU: {
      title: "BAS-U - Byggarbetsmiljösamordnare Utförande",
      description: "Säker arbetsmiljösamordning under byggfasen med regelbundna säkerhetsronder och dokumentation för trygg byggprocess."
    }
  },
  about: {
    experience: "Över 20 års gedigen erfarenhet inom byggbranschen och arbetsmiljö i Västernorrland",
    certification: "Certifierad enligt senaste regelverket och medlem i Svenska Byggingenjörers Riksförbund (SBR)",
    approach: "Personlig service med digital hantering för effektiv och trygg byggprocess i hela Västernorrland"
  },
  locations: {
    primary: "Verksam i Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors",
    coverage: "Täcker hela Västernorrland med fokus på Medelpad och Ångermanland",
    response: "Snabb respons och flexibla möten i hela regionen"
  }
};

// SEO-optimized FAQ content
export const seoFAQ = [
  {
    question: "Vad kostar en kontrollansvarig i Västernorrland?",
    answer: "Våra kontrollansvarig-tjänster börjar från 15,000 SEK beroende på projektets omfattning. Vi erbjuder fast pris och kostnadsfri konsultation för alla projekt i Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors."
  },
  {
    question: "Hur lång tid tar det att få kontrollplan?",
    answer: "En kontrollplan färdigställs vanligtvis inom 1-2 veckor efter att vi mottagit alla nödvändiga handlingar. Vi arbetar effektivt för att inte försena din byggprocess."
  },
  {
    question: "Behöver jag BAS-P och BAS-U för mitt projekt?",
    answer: "BAS-P behövs under projekteringsfasen när flera entreprenörer ska arbeta på projektet. BAS-U krävs under byggfasen. Vi hjälper dig bedöma vad som krävs för ditt specifika projekt."
  },
  {
    question: "Vilka områden täcker ni i Västernorrland?",
    answer: "Vi verkar i hela Västernorrland med huvudfokus på Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors. Vi hjälper även kunder i övriga delar av regionen."
  }
];