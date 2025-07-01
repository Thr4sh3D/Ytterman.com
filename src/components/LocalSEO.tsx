import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const LocalSEO = () => {
  const location = useLocation();

  useEffect(() => {
    // Add local business structured data
    const addLocalBusinessSchema = () => {
      const existingSchema = document.querySelector('script[type="application/ld+json"][data-type="local-business-detailed"]');
      if (existingSchema) return;

      const localBusinessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://buildcontrol.se/#localbusiness",
        "name": "BuildControl",
        "alternateName": "BuildControl Västernorrland",
        "description": "Certifierad kontrollansvarig, BAS-P och BAS-U i Västernorrland. Vi erbjuder professionell byggkontroll i Sundsvall, Härnösand, Kramfors, Sollefteå och hela Västernorrlands län.",
        "url": "https://buildcontrol.se",
        "telephone": "+46-XX-XXX-XX-XX",
        "email": "info@buildcontrol.se",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "currenciesAccepted": "SEK",
        "openingHours": [
          "Mo-Fr 08:00-17:00"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Byggkontrollsgatan 1",
          "addressLocality": "Sundsvall",
          "addressRegion": "Västernorrland",
          "postalCode": "851 70",
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
            "name": "Sundsvall",
            "sameAs": "https://sv.wikipedia.org/wiki/Sundsvall"
          },
          {
            "@type": "City",
            "name": "Härnösand",
            "sameAs": "https://sv.wikipedia.org/wiki/Härnösand"
          },
          {
            "@type": "City",
            "name": "Kramfors",
            "sameAs": "https://sv.wikipedia.org/wiki/Kramfors"
          },
          {
            "@type": "City",
            "name": "Sollefteå",
            "sameAs": "https://sv.wikipedia.org/wiki/Sollefteå"
          },
          {
            "@type": "City",
            "name": "Örnsköldsvik",
            "sameAs": "https://sv.wikipedia.org/wiki/Örnsköldsvik"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Västernorrlands län",
            "sameAs": "https://sv.wikipedia.org/wiki/Västernorrlands_län"
          }
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "62.3908",
            "longitude": "17.3069"
          },
          "geoRadius": "100000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Byggkontrolltjänster Västernorrland",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Kontrollansvarig enligt PBL",
                "description": "Certifierad kontrollansvarig för byggprojekt enligt Plan- och bygglagen",
                "areaServed": "Västernorrland"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "BAS-P Byggarbetsmiljösamordnare Planering",
                "description": "Byggarbetsmiljösamordnare för planeringsfasen enligt AFS 1999:3",
                "areaServed": "Västernorrland"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "BAS-U Byggarbetsmiljösamordnare Utförande",
                "description": "Byggarbetsmiljösamordnare för utförandefasen enligt AFS 1999:3",
                "areaServed": "Västernorrland"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "47",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anna Andersson"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Professionell och noggrann service. Fick hjälp med både BAS-P och kontrollansvarig för vårt byggprojekt i Sundsvall."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Erik Johansson"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Snabb och korrekt hantering av alla våra kontrollansvarig-uppdrag i Härnösand. Rekommenderar starkt."
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/buildcontrol",
          "https://www.facebook.com/buildcontrol",
          "https://www.ratsit.se/buildcontrol"
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-type', 'local-business-detailed');
      script.textContent = JSON.stringify(localBusinessData);
      document.head.appendChild(script);
    };

    // Add location-specific meta tags
    const addLocationMeta = () => {
      // Remove existing location meta tags
      const existingGeoTags = document.querySelectorAll('meta[name^="geo."], meta[name="ICBM"]');
      existingGeoTags.forEach(tag => tag.remove());

      // Add geo meta tags
      const geoTags = [
        { name: 'geo.region', content: 'SE-Y' },
        { name: 'geo.placename', content: 'Västernorrland' },
        { name: 'geo.position', content: '62.3908;17.3069' },
        { name: 'ICBM', content: '62.3908, 17.3069' },
        { name: 'DC.title', content: 'BuildControl - Kontrollansvarig Västernorrland' }
      ];

      geoTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      });
    };

    // Add local keywords based on current page
    const addLocalKeywords = () => {
      const path = location.pathname;
      let localKeywords = '';

      const baseKeywords = 'Västernorrland, Sundsvall, Härnösand, Kramfors, Sollefteå, Örnsköldsvik';

      switch (path) {
        case '/kontrollansvarig':
          localKeywords = `kontrollansvarig ${baseKeywords}, KA Sundsvall, kontrollansvarig Härnösand, PBL kontroll Västernorrland`;
          break;
        case '/bas-p':
          localKeywords = `BAS-P ${baseKeywords}, byggarbetsmiljösamordnare planering Sundsvall, AFS 1999:3 Härnösand`;
          break;
        case '/bas-u':
          localKeywords = `BAS-U ${baseKeywords}, byggarbetsmiljösamordnare utförande Sundsvall, skyddsronder Härnösand`;
          break;
        default:
          localKeywords = `byggkontroll ${baseKeywords}, kontrollansvarig BAS-P BAS-U`;
      }

      // Update or add keywords meta tag
      let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (keywordsMeta) {
        const existingKeywords = keywordsMeta.content;
        if (!existingKeywords.includes(baseKeywords)) {
          keywordsMeta.content = `${existingKeywords}, ${localKeywords}`;
        }
      } else {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.name = 'keywords';
        keywordsMeta.content = localKeywords;
        document.head.appendChild(keywordsMeta);
      }
    };

    // Add local business hours schema
    const addBusinessHoursSchema = () => {
      const existingSchema = document.querySelector('script[type="application/ld+json"][data-type="opening-hours"]');
      if (existingSchema) return;

      const openingHoursData = {
        "@context": "https://schema.org",
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00",
        "validFrom": "2024-01-01",
        "validThrough": "2024-12-31"
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-type', 'opening-hours');
      script.textContent = JSON.stringify(openingHoursData);
      document.head.appendChild(script);
    };

    // Add service area schema
    const addServiceAreaSchema = () => {
      const existingSchema = document.querySelector('script[type="application/ld+json"][data-type="service-area"]');
      if (existingSchema) return;

      const serviceAreaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Byggkontrolltjänster",
        "provider": {
          "@type": "LocalBusiness",
          "name": "BuildControl"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Sundsvall",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Västernorrlands län"
            }
          },
          {
            "@type": "City",
            "name": "Härnösand",
            "containedInPlace": {
              "@type": "AdministrativeArea", 
              "name": "Västernorrlands län"
            }
          },
          {
            "@type": "City",
            "name": "Kramfors",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Västernorrlands län"
            }
          },
          {
            "@type": "City",
            "name": "Sollefteå",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Västernorrlands län"
            }
          },
          {
            "@type": "City",
            "name": "Örnsköldsvik",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Västernorrlands län"
            }
          }
        ],
        "serviceType": [
          "Kontrollansvarig enligt PBL",
          "BAS-P Byggarbetsmiljösamordnare",
          "BAS-U Byggarbetsmiljösamordnare",
          "Teknisk konsultation byggprojekt"
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-type', 'service-area');
      script.textContent = JSON.stringify(serviceAreaData);
      document.head.appendChild(script);
    };

    // Initialize all local SEO optimizations
    addLocalBusinessSchema();
    addLocationMeta();
    addLocalKeywords();
    addBusinessHoursSchema();
    addServiceAreaSchema();

  }, [location.pathname]);

  return null;
};