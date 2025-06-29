import { Helmet } from 'react-helmet-async';

export const SEOEnhancements = () => {
  return (
    <Helmet>
      {/* Additional meta tags for better SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Ytterman" />
      <meta name="language" content="Swedish" />
      <meta name="geo.region" content="SE-Y" />
      <meta name="geo.placename" content="Västernorrland" />
      <meta name="geo.position" content="62.3908;17.3069" />
      <meta name="ICBM" content="62.3908, 17.3069" />
      
      {/* Additional structured data for local business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Ytterman",
          "description": "Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare i Västernorrland",
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
              "name": "Sollefteå"
            },
            {
              "@type": "City",
              "name": "Timrå"
            },
            {
              "@type": "City",
              "name": "Kramfors"
            }
          ],
          "priceRange": "12000-30000 SEK",
          "paymentAccepted": "Cash, Credit Card, Bank Transfer",
          "currenciesAccepted": "SEK"
        })}
      </script>
    </Helmet>
  );
};