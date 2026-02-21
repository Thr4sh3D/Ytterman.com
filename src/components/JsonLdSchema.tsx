import { Helmet } from 'react-helmet-async';

interface JsonLdSchemaProps {
  type?: 'ProfessionalService' | 'LocalBusiness';
}

export const JsonLdSchema = ({ type = 'ProfessionalService' }: JsonLdSchemaProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": "Ytterman",
    "alternateName": "Ytterman - Kontrollansvarig & BAS",
    "description": "Certifierad kontrollansvarig (KA) och Byggarbetsmiljösamordnare (BAS-P/BAS-U) med över 20 års erfarenhet i byggbranschen i Västernorrland",
    "url": "https://ytterman.com",
    "telephone": "+46761118447",
    "email": "tobias@ytterman.com",
    "image": "https://ytterman.com/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Viksjö",
      "addressRegion": "Västernorrland",
      "addressCountry": "SE"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Sundsvall"
      },
      {
        "@type": "City",
        "name": "Timrå"
      },
      {
        "@type": "City",
        "name": "Härnösand"
      },
      {
        "@type": "City",
        "name": "Kramfors"
      },
      {
        "@type": "City",
        "name": "Sollefteå"
      },
      {
        "@type": "City",
        "name": "Örnsköldsvik"
      },
      {
        "@type": "State",
        "name": "Västernorrland"
      }
    ],
    "serviceType": [
      "Kontrollansvarig (KA)",
      "BAS-P (Byggarbetsmiljösamordnare under projektering)",
      "BAS-U (Byggarbetsmiljösamordnare under utförande)",
      "Bygglovshandlingar",
      "Energideklaration",
      "Överlåtelsebesiktning",
      "Energiberäkning online"
    ],
    "priceRange": "Från 2,999 SEK",
    "openingHours": "Mo-Fr 08:00-17:00",
    "founder": {
      "@type": "Person",
      "name": "Tobias Ytterman",
      "jobTitle": "Kontrollansvarig & Byggarbetsmiljösamordnare",
      "email": "tobias@ytterman.com",
      "telephone": "+46761118447"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Certifiering",
        "name": "Certifierad Kontrollansvarig"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Certifiering",
        "name": "Certifierad BAS-P/BAS-U"
      }
    ],
    "knowsAbout": [
      "Byggkontroll",
      "Arbetsmiljösamordning",
      "Plan- och bygglagen (PBL)",
      "Boverkets författningssamling (BFS)",
      "Arbetsmiljöverkets föreskrifter (AFS)",
      "Energideklaration",
      "Bygglovsprocessen"
    ],
    "slogan": "Trygg byggprocess med fast pris"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
