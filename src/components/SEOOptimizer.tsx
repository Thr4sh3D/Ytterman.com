import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BAS, COMPANY, KA_CERT } from '@/config/company';

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
  image = 'https://ytterman.com/og-image.png',
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
          "name": `${COMPANY.brandName} - Kontrollansvarig & BAS`,
          "url": COMPANY.siteUrl,
          "logo": `${COMPANY.siteUrl}/favicon.svg`,
          "description": `${KA_CERT.title} och ${BAS.qualificationLabel.toLowerCase()} i ${COMPANY.region} med ${COMPANY.experienceLabel.toLowerCase()} i byggbranschen.`,
          "areaServed": {
            "@type": "State",
            "name": COMPANY.region
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": COMPANY.email,
            "areaServed": COMPANY.countryCode,
            "availableLanguage": "Swedish"
          }
        })}
      </script>
    </Helmet>
  );
};
