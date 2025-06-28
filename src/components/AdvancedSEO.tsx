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
  };
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
  service
}: AdvancedSEOProps) => {
  
  // Base structured data
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ytterman",
    "alternateName": "Tobias Ytterman",
    "description": "Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare med över 20 års erfarenhet i Västernorrland",
    "url": url,
    "telephone": "+46761118447",
    "email": "tobias@ytterman.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Viksjö",
      "addressRegion": "Västernorrland",
      "addressCountry": "SE"
    },
    "areaServed": [
      { "@type": "City", "name": "Sundsvall" },
      { "@type": "City", "name": "Härnösand" },
      { "@type": "City", "name": "Sollefteå" },
      { "@type": "City", "name": "Timrå" },
      { "@type": "City", "name": "Kramfors" }
    ],
    "serviceType": [
      "Kontrollansvarig",
      "BAS-P (Byggarbetsmiljösamordnare under projektering)",
      "BAS-U (Byggarbetsmiljösamordnare under utförande)",
      "Bygglovshandlingar",
      "Planritningar",
      "Situationsplaner",
      "Sektionsritningar"
    ],
    "priceRange": "Från 15,000 SEK",
    "openingHours": "Mo-Fr 08:00-17:00",
    "founder": {
      "@type": "Person",
      "name": "Tobias Ytterman",
      "jobTitle": "Kontrollansvarig & Byggarbetsmiljösamordnare"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Certifierad Kontrollansvarig"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "Certifierad BAS-P/BAS-U"
      }
    ]
  };

  // Additional structured data arrays
  const structuredDataArray = [baseStructuredData];

  // Add breadcrumbs if provided
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

  // Add FAQ if provided
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

  // Add service if provided
  if (service) {
    structuredDataArray.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "provider": {
        "@type": "LocalBusiness",
        "name": service.provider
      },
      "areaServed": service.areaServed.map(area => ({
        "@type": "City",
        "name": area
      })),
      "priceRange": service.priceRange || "Från 15,000 SEK"
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
        "name": "Ytterman",
        "logo": {
          "@type": "ImageObject",
          "url": "/logo.png"
        }
      },
      "datePublished": article.publishedTime,
      "dateModified": article.modifiedTime || article.publishedTime,
      "articleSection": article.section,
      "keywords": article.tags?.join(", ") || keywords
    });
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Tobias Ytterman" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="Swedish" />
      <meta name="geo.region" content="SE-Y" />
      <meta name="geo.placename" content="Västernorrland" />
      <meta name="geo.position" content="62.3908;17.3069" />
      <meta name="ICBM" content="62.3908, 17.3069" />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:site_name" content="Ytterman" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

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

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
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
    </Helmet>
  );
};