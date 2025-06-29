import { Helmet } from 'react-helmet-async';

export const SEOEnhancements = () => {
  return (
    <Helmet>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//wa.me" />
      
      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Web app manifest */}
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#8B4513" />
      
      {/* Additional SEO meta tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Hreflang for Swedish content */}
      <link rel="alternate" hrefLang="sv" href="https://ytterman.com" />
      <link rel="alternate" hrefLang="x-default" href="https://ytterman.com" />
      
      {/* Additional structured data for local business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Ytterman",
          "image": "https://ytterman.com/logo.png",
          "description": "Certifierad Kontrollansvarig och BAS-samordnare i Västernorrland",
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
          "url": "https://ytterman.com",
          "telephone": "+46761118447",
          "email": "tobias@ytterman.com",
          "priceRange": "12000-50000 SEK",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 62.3908,
              "longitude": 17.3069
            },
            "geoRadius": "100000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Byggtjänster",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Kontrollansvarig (KA)",
                  "description": "Certifierad kontrollansvarig enligt PBL"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "BAS-P",
                  "description": "Byggarbetsmiljösamordnare under projektering"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "BAS-U",
                  "description": "Byggarbetsmiljösamordnare under utförande"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};