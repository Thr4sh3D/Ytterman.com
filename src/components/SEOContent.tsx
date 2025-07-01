interface SEOContentProps {
  children: React.ReactNode;
  keywords?: string[];
  semanticKeywords?: string[];
}

export const SEOContent = ({ 
  children, 
  keywords = [], 
  semanticKeywords = [] 
}: SEOContentProps) => {
  // This component wraps content to add semantic SEO improvements
  // without changing visual appearance
  return (
    <div 
      data-seo-keywords={keywords.join(',')}
      data-semantic-keywords={semanticKeywords.join(',')}
    >
      {children}
    </div>
  );
};

// SEO-optimized content helpers
export const seoKeywords = {
  primary: [
    'kontrollansvarig Västernorrland',
    'BAS-P Sundsvall', 
    'BAS-U Härnösand',
    'byggkontroll Sollefteå',
    'arbetsmiljösamordnare Timrå',
    'kontrollansvarig Kramfors'
  ],
  secondary: [
    'PBL kontroll',
    'slutbevis bygglov',
    'arbetsmiljöplan',
    'riskbedömning bygg',
    'byggarbetsmiljö',
    'kontrollplan'
  ],
  semantic: [
    'certifierad byggexpert',
    'trygg byggprocess',
    'professionell byggkontroll',
    'erfaren kontrollansvarig',
    'kvalitetssäkring bygg',
    'regelefterlevnad PBL'
  ]
};

export const seoContent = {
  hero: {
    title: "Certifierad Kontrollansvarig & BAS i Västernorrland - Trygg Byggprocess",
    subtitle: "Över 20 års erfarenhet av kontrollansvarig (KA), BAS-P och BAS-U tjänster. Verksam i Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors. Fast pris och professionell hantering.",
    cta: "Få kostnadsfri konsultation och offert idag"
  },
  services: {
    intro: "Kompletta byggtjänster för trygg och regelenlig byggprocess i Västernorrland",
    ka: {
      title: "Kontrollansvarig (KA) enligt PBL",
      description: "Certifierad kontrollansvarig för teknisk kontroll, slutbesiktning och slutbevis enligt Plan- och bygglagen."
    },
    basP: {
      title: "BAS-P - Byggarbetsmiljösamordnare Projektering", 
      description: "Professionell arbetsmiljösamordning under projekteringsfasen med arbetsmiljöplan och riskbedömning."
    },
    basU: {
      title: "BAS-U - Byggarbetsmiljösamordnare Utförande",
      description: "Säker arbetsmiljösamordning under byggfasen med regelbundna säkerhetsronder och dokumentation."
    }
  },
  about: {
    experience: "Över 20 års gedigen erfarenhet inom byggbranschen och arbetsmiljö",
    certification: "Certifierad enligt senaste regelverket och medlem i Svenska Byggingenjörers Riksförbund (SBR)",
    approach: "Personlig service med digital hantering för effektiv och trygg byggprocess"
  }
};