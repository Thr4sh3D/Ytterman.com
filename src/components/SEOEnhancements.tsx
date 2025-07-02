import { Helmet } from 'react-helmet-async';

export const SEOEnhancements = () => {
  return (
    <Helmet>
      <title>Ytterman - Kontrollansvarig & BAS i Västernorrland | Certifierad Expert</title>
      <meta name="description" content="Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare (BAS-P/BAS-U) i Västernorrland. Över 20 års erfarenhet. Trygg byggprocess med fast pris." />
      <meta name="keywords" content="kontrollansvarig Västernorrland, BAS-P Sundsvall, BAS-U Härnösand, byggkontroll Sollefteå, kontrollansvarig Timrå, BAS Kramfors" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ytterman.com/" />
      <meta property="og:title" content="Ytterman - Kontrollansvarig & BAS i Västernorrland" />
      <meta property="og:description" content="Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare (BAS-P/BAS-U) i Västernorrland. Över 20 års erfarenhet." />
      <meta property="og:image" content="https://ytterman.com/images/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ytterman.com/" />
      <meta property="twitter:title" content="Ytterman - Kontrollansvarig & BAS i Västernorrland" />
      <meta property="twitter:description" content="Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare (BAS-P/BAS-U) i Västernorrland. Över 20 års erfarenhet." />
      <meta property="twitter:image" content="https://ytterman.com/images/og-image.jpg" />
      
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ytterman",
            "image": "https://ytterman.com/images/logo.png",
            "url": "https://ytterman.com",
            "telephone": "+46761118447",
            "email": "tobias@ytterman.com",
            "description": "Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare (BAS-P/BAS-U) i Västernorrland.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sundsvall",
              "addressRegion": "Västernorrland",
              "postalCode": "85466",
              "addressCountry": "SE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 62.3908,
              "longitude": 17.3069
            },
            "areaServed": ["Sundsvall", "Härnösand", "Sollefteå", "Timrå", "Kramfors"],
            "priceRange": "$$"
          }
        `}
      </script>
      
      {/* Structured Data for FAQ */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Vad är en kontrollansvarig och när behöver jag en?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "En kontrollansvarig (KA) krävs enligt Plan- och bygglagen (PBL) för att utföra teknisk kontroll under byggprocessen. KA behövs för de flesta byggprojekt som kräver bygglov eller anmälan."
                }
              },
              {
                "@type": "Question",
                "name": "Vad kostar kontrollansvarig och BAS-tjänster?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Våra priser börjar från 12,000 SEK för BAS-P, 15,000 SEK för kontrollansvarig och 18,000 SEK för BAS-U. Priset beror på projektets omfattning och komplexitet."
                }
              },
              {
                "@type": "Question",
                "name": "Vilka områden täcker Ytterman?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vi verkar i hela Västernorrland med fokus på Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors. Vi hjälper även kunder i övriga delar av regionen."
                }
              }
            ]
          }
        `}
      </script>
    </Helmet>
  );
};