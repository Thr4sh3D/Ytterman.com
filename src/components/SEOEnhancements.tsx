import { useEffect } from 'react';

export const SEOEnhancements = () => {
  useEffect(() => {
    // Add structured data for website
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ytterman",
      "url": "https://ytterman.com",
      "description": "Certifierad Kontrollansvarig och BAS-samordnare i Västernorrland",
      "publisher": {
        "@type": "Organization",
        "name": "Ytterman"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ytterman.com/blogg?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Add local business schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Ytterman",
      "description": "Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare",
      "url": "https://ytterman.com",
      "telephone": "+46761118447",
      "email": "tobias@ytterman.com",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Västernorrland",
        "addressCountry": "SE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 62.3908,
        "longitude": 17.3069
      },
      "areaServed": [
        "Sundsvall", "Härnösand", "Sollefteå", "Timrå", "Kramfors"
      ],
      "serviceType": [
        "Kontrollansvarig enligt PBL",
        "BAS-P (Byggarbetsmiljösamordnare under projektering)",
        "BAS-U (Byggarbetsmiljösamordnare under utförande)",
        "Bygglovshandlingar"
      ],
      "priceRange": "15000-50000 SEK",
      "openingHours": "Mo-Fr 08:00-17:00"
    };

    // Add schemas to head
    const addSchema = (schema: any, id: string) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(websiteSchema, 'website-schema');
    addSchema(localBusinessSchema, 'local-business-schema');

    // Cleanup function
    return () => {
      const websiteScript = document.getElementById('website-schema');
      const businessScript = document.getElementById('local-business-schema');
      if (websiteScript) websiteScript.remove();
      if (businessScript) businessScript.remove();
    };
  }, []);

  return null;
};