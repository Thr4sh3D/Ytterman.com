import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export const SEO = ({ 
  title = "Kontrollansvarig & BAS-P/BAS-U - Trygg Byggprocess med Ytterman",
  description = "Erfaren kontrollansvarig och byggarbetsmiljösamordnare (BAS-P/BAS-U) i Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå och hela Västernorrland. 20+ års erfarenhet inom bygg och projektledning. Fast pris och digital hantering.",
  keywords = "kontrollansvarig, BAS-P, BAS-U, byggarbetsmiljösamordnare, Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå, Västernorrland, bygglov, slutbesked, kontrollplan, arbetsmiljöplan, byggprojekt, Tobias Ytterman",
  canonicalUrl = "https://ytterman.se"
}: SEOProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trygg Byggprocess med Ytterman",
    "description": description,
    "url": canonicalUrl,
    "telephone": "+46761118447",
    "email": "tobias@ytterman.com",
    "founder": {
      "@type": "Person",
      "name": "Tobias Ytterman",
      "jobTitle": "Kontrollansvarig & Byggarbetsmiljösamordnare"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Sundsvall",
        "addressRegion": "Västernorrland"
      },
      {
        "@type": "City", 
        "name": "Härnösand",
        "addressRegion": "Västernorrland"
      },
      {
        "@type": "City",
        "name": "Sollefteå", 
        "addressRegion": "Västernorrland"
      },
      {
        "@type": "City",
        "name": "Kramfors",
        "addressRegion": "Västernorrland"
      },
      {
        "@type": "City",
        "name": "Timrå",
        "addressRegion": "Västernorrland"
      }
    ],
    "serviceType": [
      "Kontrollansvarig enligt PBL",
      "Byggarbetsmiljösamordnare BAS-P",
      "Byggarbetsmiljösamordnare BAS-U",
      "Kontrollplan",
      "Arbetsmiljöplan",
      "Byggprojektledning"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Viksjö",
      "addressRegion": "Västernorrland",
      "addressCountry": "SE"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="sv_SE" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Tobias Ytterman" />
      <meta name="geo.region" content="SE-Y" />
      <meta name="geo.placename" content="Västernorrland" />
      <meta name="ICBM" content="62.3908,17.3069" />
    </Helmet>
  );
};