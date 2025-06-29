import { Helmet } from 'react-helmet-async';

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  service?: {
    name: string;
    description: string;
    provider: string;
    areaServed: string[];
    priceRange?: string;
    aggregateRating?: {
      ratingValue: number;
      reviewCount: number;
    };
  };
  organization?: boolean;
  reviews?: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>;
}

export const AdvancedSEO = ({
  title = "Ytterman - Kontrollansvarig & BAS i Västernorrland",
  description = "Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare (BAS-P/BAS-U) i Västernorrland. Över 20 års erfarenhet. Trygg byggprocess med fast pris. Verksam i Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors.",
  keywords = "kontrollansvarig, BAS-P, BAS-U, byggkontroll, Västernorrland, Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors, bygglov, byggarbetsmiljösamordnare, kontrollplan, slutbevis, byggprocess",
  url = "https://ytterman.com",
  image = "/og-image.jpg",
  type = "website",
  article,
  breadcrumbs,
  faq,
  service,
  organization = false,
  reviews
}: AdvancedSEOProps) => {
  
  // Enhanced organization data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ytterman.com/#organization",
    "name": "Ytterman",
    "alternateName": "Tobias Ytterman",
    "description": "Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare med över 20 års erfarenhet i Västernorrland",
    "url": url,
    "telephone": "+46761118447",
    "email": "tobias@ytterman.com",
    "foundingDate": "2003",
    "founder": {
      "@type": "Person",
      "name": "Tobias Ytterman",
      "jobTitle": "Kontrollansvarig & Byggarbetsmiljösamordnare",
      "knowsAbout": [
        "Plan- och bygglagen (PBL)",
        "Arbetsmiljöverkets föreskrifter",
        "Byggkontroll",
        "Arbetsmiljösamordning",
        "Kontrollplaner",
        "Teknisk kontroll"
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Viksjö",
      "addressRegion": "Västernorrland",
      "postalCode": "871 96",
      "addressCountry": "SE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 62.3908,
      "longitude": 17.3069
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
        "name": "Sollefteå",
        "containedInPlace": {
          "@type": "AdministrativeArea", 
          "name": "Västernorrlands län"
        }
      },
      {
        "@type": "City",
        "name": "Timrå",
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
      }
    ],
    "serviceType": [
      "Kontrollansvarig enligt PBL",
      "BAS-P (Byggarbetsmiljösamordnare under projektering)",
      "BAS-U (Byggarbetsmiljösamordnare under utförande)",
      "Bygglovshandlingar",
      "Planritningar", 
      "Situationsplaner",
      "Sektionsritningar",
      "Kontrollplaner",
      "Teknisk kontroll",
      "Slutbesiktning"
    ],
    "priceRange": "15000-50000 SEK",
    "currenciesAccepted": "SEK",
    "paymentAccepted": "Faktura, Bankgiro",
    "openingHours": [
      "Mo-Fr 08:00-17:00"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Certifierad Kontrollansvarig",
        "credentialCategory": "Yrkescertifiering",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Boverket"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Certifierad BAS-P/BAS-U",
        "credentialCategory": "Yrkescertifiering",
        "recognizedBy": {
          "@type": "Organization", 
          "name": "Arbetsmiljöverket"
        }
      }
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "Svenska"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+46761118447",
        "contactType": "customer service",
        "availableLanguage": "Swedish",
        "areaServed": "SE"
      },
      {
        "@type": "ContactPoint",
        "email": "tobias@ytterman.com",
        "contactType": "customer service",
        "availableLanguage": "Swedish"
      }
    ]
  };

  // Add aggregate rating if reviews exist
  if (reviews && reviews.length > 0) {
    const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    organizationData["aggregateRating"] = {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": reviews.length,
      "bestRating": 5,
      "worstRating": 1
    };
  }

  const structuredDataArray = [organizationData];

  // Add website schema for homepage
  if (organization) {
    structuredDataArray.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://ytterman.com/#website",
      "url": "https://ytterman.com",
      "name": "Ytterman - Kontrollansvarig & BAS",
      "description": "Certifierad Kontrollansvarig och BAS i Västernorrland",
      "publisher": {
        "@id": "https://ytterman.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ytterman.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "sv-SE"
    });
  }

  // Add breadcrumbs
  if (breadcrumbs && breadcrumbs.length > 0) {
    structuredDataArray.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    });
  }

  // Add FAQ
  if (faq && faq.length > 0) {
    structuredDataArray.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
  }

  // Add service with enhanced data
  if (service) {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://ytterman.com/#organization"
      },
      "areaServed": service.areaServed.map(area => ({
        "@type": "City",
        "name": area,
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Västernorrlands län"
        }
      })),
      "priceRange": service.priceRange || "Från 15,000 SEK",
      "category": "Byggkontroll och Arbetsmiljösamordning"
    };

    if (service.aggregateRating) {
      serviceSchema["aggregateRating"] = {
        "@type": "AggregateRating",
        "ratingValue": service.aggregateRating.ratingValue,
        "reviewCount": service.aggregateRating.reviewCount,
        "bestRating": 5,
        "worstRating": 1
      };
    }

    structuredDataArray.push(serviceSchema);
  }

  // Add reviews
  if (reviews && reviews.length > 0) {
    reviews.forEach(review => {
      structuredDataArray.push({
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "LocalBusiness",
          "@id": "https://ytterman.com/#organization"
        },
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": 5,
          "worstRating": 1
        },
        "reviewBody": review.reviewBody,
        "datePublished": review.datePublished
      });
    });
  }

  // Add article if provided
  if (article) {
    structuredDataArray.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": image,
      "author": {
        "@type": "Person",
        "name": article.author || "Tobias Ytterman"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://ytterman.com/#organization"
      },
      "datePublished": article.publishedTime,
      "dateModified": article.modifiedTime || article.publishedTime,
      "articleSection": article.section,
      "keywords": article.tags?.join(", ") || keywords
    });
  }

  return (
    <Helmet>
      {/* Enhanced Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Tobias Ytterman" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Language and Location */}
      <meta name="language" content="Swedish" />
      <meta name="geo.region" content="SE-Y" />
      <meta name="geo.placename" content="Västernorrland" />
      <meta name="geo.position" content="62.3908;17.3069" />
      <meta name="ICBM" content="62.3908, 17.3069" />
      <meta name="distribution" content="local" />
      <meta name="coverage" content="Västernorrland, Sverige" />

      {/* Enhanced Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Ytterman - Kontrollansvarig och BAS i Västernorrland" />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:site_name" content="Ytterman" />
      <meta property="og:updated_time" content={new Date().toISOString()} />

      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Ytterman - Kontrollansvarig och BAS" />

      {/* Article specific tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime || article.publishedTime} />
          <meta property="article:author" content={article.author || "Tobias Ytterman"} />
          <meta property="article:section" content={article.section} />
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Canonical and Alternate URLs */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="sv" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredDataArray)}
      </script>

      {/* Additional Meta Tags for Local SEO */}
      <meta name="DC.title" content={title} />
      <meta name="DC.description" content={description} />
      <meta name="DC.subject" content="Kontrollansvarig, BAS-P, BAS-U, Byggkontroll" />
      <meta name="DC.coverage" content="Västernorrland, Sverige" />
      <meta name="DC.type" content="Service" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.language" content="sv" />
      <meta name="DC.creator" content="Tobias Ytterman" />
      <meta name="DC.publisher" content="Ytterman" />
      <meta name="DC.rights" content="© 2024 Ytterman. Alla rättigheter förbehållna." />

      {/* Business specific meta tags */}
      <meta name="business:contact_data:street_address" content="Viksjö" />
      <meta name="business:contact_data:locality" content="Viksjö" />
      <meta name="business:contact_data:region" content="Västernorrland" />
      <meta name="business:contact_data:postal_code" content="871 96" />
      <meta name="business:contact_data:country_name" content="Sverige" />
      <meta name="business:contact_data:phone_number" content="+46761118447" />
      <meta name="business:contact_data:email" content="tobias@ytterman.com" />

      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="format-detection" content="address=yes" />
      <meta name="format-detection" content="email=yes" />

      {/* Theme and appearance */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Ytterman" />

      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* Content language */}
      <meta httpEquiv="content-language" content="sv-SE" />
    </Helmet>
  );
};