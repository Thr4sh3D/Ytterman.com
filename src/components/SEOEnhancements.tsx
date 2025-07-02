import { Helmet } from 'react-helmet-async';

export const SEOEnhancements = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ytterman - Kontrollansvarig & BAS",
    "description": "Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare (BAS-P/BAS-U) i Västernorrland. Över 20 års erfarenhet inom byggbranschen.",
    "url": "https://ytterman.com",
    "telephone": "+46761118447",
    "email": "tobias@ytterman.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Västernorrland",
      "addressCountry": "SE"
    },
    "areaServed": [
      "Sundsvall",
      "Härnösand", 
      "Sollefteå",
      "Timrå",
      "Kramfors",
      "Västernorrland"
    ],
    "serviceType": [
      "Kontrollansvarig",
      "BAS-P",
      "BAS-U",
      "Byggkontroll",
      "Arbetsmiljösamordning"
    ],
    "priceRange": "12000-25000 SEK",
    "founder": {
      "@type": "Person",
      "name": "Tobias Ytterman"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "Svenska Byggingenjörers Riksförbund"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional meta tags for better SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Tobias Ytterman" />
      <meta name="geo.region" content="SE-Y" />
      <meta name="geo.placename" content="Västernorrland" />
      <meta name="ICBM" content="62.3908,17.3069" />
      
      {/* Open Graph tags */}
      <meta property="og:type" content="business.business" />
      <meta property="og:locale" content="sv_SE" />
      <meta property="business:contact_data:locality" content="Västernorrland" />
      <meta property="business:contact_data:region" content="Västernorrland" />
      <meta property="business:contact_data:country_name" content="Sverige" />
      
      {/* Additional keywords in meta */}
      <meta name="keywords" content="kontrollansvarig Västernorrland, BAS-P Sundsvall, BAS-U Härnösand, byggkontroll Sollefteå, arbetsmiljösamordnare Timrå, kontrollansvarig Kramfors, bygglov Västernorrland, PBL kontroll, slutbevis, arbetsmiljöplan, riskbedömning bygg, byggarbetsmiljö, kontrollplan, certifierad kontrollansvarig, byggexpert Västernorrland" />
    </Helmet>
  );
};