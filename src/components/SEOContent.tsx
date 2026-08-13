import { BAS, BUSINESS_COPY, COMPANY, KA_CERT, PRICE_LABELS } from '@/config/company';

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
    'kontrollansvarig Timrå',
    'kontrollansvarig Kramfors',
    'kontrollansvarig Sollefteå',
    'BAS-P Sundsvall',
    'BAS-P Västernorrland',
    'BAS-U Härnösand',
    'BAS-U Sollefteå',
    'byggkontroll Västernorrland',
    'arbetsmiljösamordnare Timrå',
    'bygglov Sundsvall',
    'bygglov Härnösand'
  ],
  secondary: [
    'PBL kontroll',
    'slutbesked bygglov',
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
    'certifierad kontrollansvarig Västernorrland',
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
    'Sundsvall kontrollansvarig',
    'Härnösand kontrollansvarig',
    'Timrå kontrollansvarig',
    'Kramfors kontrollansvarig',
    'Sollefteå kontrollansvarig',
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
    title: "Certifierad kontrollansvarig samt BAS-P/BAS-U i Västernorrland",
    subtitle: `${COMPANY.experienceLabel} i byggbranschen. ${KA_CERT.authorizationLabel} samt utbildning, kompetens och erfarenhet för uppdrag som ${BAS.rolesLabel}.`,
    cta: "Beskriv projektet och be om offert"
  },
  services: {
    intro: "Byggtjänster med verifierad omfattning och tydlig rollfördelning i Västernorrland",
    ka: {
      title: "Kontrollansvarig (KA) enligt PBL",
      description: BUSINESS_COPY.kaScope
    },
    basP: {
      title: "BAS-P - Byggarbetsmiljösamordnare Projektering", 
      description: `Arbetsmiljösamordning under projektering utifrån uppdragets riskbild och ${BAS.regulation}.`
    },
    basU: {
      title: "BAS-U - Byggarbetsmiljösamordnare Utförande",
      description: `Arbetsmiljösamordning under utförandet med aktiviteter anpassade till projektets riskbild och ${BAS.regulation}.`
    }
  },
  about: {
    experience: `${COMPANY.experienceLabel} i byggbranschen`,
    certification: `${KA_CERT.title}, ${KA_CERT.authorizationLabel}, och medlem i ${COMPANY.membership.name} (${COMPANY.membership.shortName})`,
    approach: "Personlig kontakt och digital hantering enligt det avtalade uppdragets upplägg"
  },
  locations: {
    primary: `Förfrågningar tas emot från ${COMPANY.region}`,
    coverage: "Tillgänglighet, platsbesök och resor bekräftas per projekt",
    response: "Återkoppling och mötesupplägg bekräftas utifrån projekt och aktuell kapacitet"
  }
};

// SEO-optimized FAQ content
export const seoFAQ = [
  {
    question: "Vad kostar en kontrollansvarig i Västernorrland?",
    answer: `${PRICE_LABELS.kaBasFrom} inklusive moms gäller KA Bas för tillbyggnad. Övriga paketpriser och villkor finns på prissidan.`
  },
  {
    question: "Hur lång tid tar det att få kontrollplan?",
    answer: "Tidsplanen beror på projektets omfattning och om underlaget är komplett. Upplägg och förväntad leverans bekräftas efter genomgång av handlingarna."
  },
  {
    question: "Behöver jag BAS-P och BAS-U för mitt projekt?",
    answer: `Byggherren ska utse lämplig BAS-P för planering och projektering och BAS-U för utförandet av bygg- och anläggningsarbetet. Roller och omfattning bedöms för projektet utifrån bland annat ${BAS.regulation}.`
  },
  {
    question: "Vilka områden täcker ni i Västernorrland?",
    answer: `Ytterman tar emot förfrågningar från ${COMPANY.region}. Tillgänglighet, resor och eventuella resekostnader bekräftas för varje projekt.`
  }
];
