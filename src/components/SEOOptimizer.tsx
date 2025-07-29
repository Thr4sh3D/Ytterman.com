import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  type?: 'website' | 'article' | 'service';
  image?: string;
  structuredData?: object;
  noindex?: boolean;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  url,
  type = 'website',
  image = 'https://ytterman.com/og-image.jpg',
  structuredData,
  noindex = false
}) => {
  const fullTitle = title.includes('Ytterman') ? title : `${title} | Ytterman`;
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      
      {/* Robots meta */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:site_name" content="Ytterman - Kontrollansvarig & BAS" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Language and region */}
      <meta name="language" content="Swedish" />
      <meta name="geo.region" content="SE-Y" />
      <meta name="geo.placename" content="Västernorrland" />
      
      {/* Hreflang */}
      <link rel="alternate" hrefLang="sv" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Organization structured data (always include) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ytterman - Kontrollansvarig & BAS",
          "url": "https://ytterman.com",
          "logo": "https://ytterman.com/logo.png",
          "description": "Certifierad kontrollansvarig och byggarbetsmiljösamordnare (BAS-P/BAS-U) i Västernorrland med över 20 års erfarenhet.",
          "areaServed": {
            "@type": "State",
            "name": "Västernorrland"
          },
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 62.3908,
              "longitude": 17.3069
            },
            "geoRadius": "100000"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "areaServed": "SE",
            "availableLanguage": "Swedish"
          },
          "sameAs": [
            "https://www.linkedin.com/company/ytterman",
            "https://www.facebook.com/ytterman"
          ]
        })}
      </script>
    </Helmet>
  );
};