import { Helmet } from 'react-helmet-async';

export const LocalSEO = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ytterman",
    "description": "Professionella byggkontrolltjänster i Västernorrland. Kontrollansvarig, BAS-P, BAS-U och bygglovshjälp.",
    "url": "https://ytterman.com",
    "telephone": "+46-XX-XXX-XX-XX",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Västernorrland",
      "addressCountry": "SE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "62.3908",
      "longitude": "17.3069"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Sundsvall"
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
      }
    ],
    "serviceType": [
      "Kontrollansvarig",
      "BAS-P",
      "BAS-U", 
      "Byggkontroll",
      "Bygglovshjälp"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-17:00",
    "sameAs": [
      "https://www.facebook.com/ytterman",
      "https://www.linkedin.com/company/ytterman"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Hem",
        "item": "https://ytterman.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tjänster",
        "item": "https://ytterman.com/tjanster"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blogg",
        "item": "https://ytterman.com/blogg"
      }
    ]
  };

  return (
    <Helmet>
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* Geo Meta Tags */}
      <meta name="geo.region" content="SE-Y" />
      <meta name="geo.placename" content="Västernorrland" />
      <meta name="geo.position" content="62.3908;17.3069" />
      <meta name="ICBM" content="62.3908, 17.3069" />
      
      {/* Local Keywords */}
      <meta name="geo.keywords" content="Sundsvall, Härnösand, Kramfors, Sollefteå, Västernorrland, byggkontroll, kontrollansvarig, BAS" />
    </Helmet>
  );
};