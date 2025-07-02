import { Helmet } from 'react-helmet-async';

interface Breadcrumb {
  name: string;
  url: string;
}

interface Article {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
  type?: string;
  organization?: boolean;
  breadcrumbs?: Breadcrumb[];
  article?: Article;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  reviews?: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>;
}

export const AdvancedSEO = ({ 
  title, 
  description, 
  keywords, 
  url, 
  image = "/og-image.jpg",
  type = "website",
  organization = false,
  breadcrumbs = [],
  article,
  faq = [],
  reviews = []
}: AdvancedSEOProps) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ytterman",
    "alternateName": "Tobias Ytterman",
    "description": "Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare med över 20 års erfarenhet i Västernorrland",
    "url": "https://ytterman.com",
    "telephone": "+46761118447",
    "email": "tobias@ytterman.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Viksjö",
      "addressRegion": "Västernorrland",
      "postalCode": "86010",
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
    "serviceType": [
      "Kontrollansvarig enligt PBL",
      "BAS-P (Byggarbetsmiljösamordnare under projektering)",
      "BAS-U (Byggarbetsmiljösamordnare under utförande)",
      "Bygglovshandlingar",
      "Planritningar",
      "Situationsplaner",
      "Sektionsritningar"
    ],
    "priceRange": "Från 12,000 SEK",
    "openingHours": "Mo-Fr 08:00-17:00",
    "founder": {
      "@type": "Person",
      "name": "Tobias Ytterman",
      "jobTitle": "Kontrollansvarig & Byggarbetsmiljösamordnare",
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
    },
    "memberOf": {
      "@type": "Organization", 
      "name": "Svenska Byggingenjörers Riksförbund"
    },
    "aggregateRating": reviews.length > 0 ? {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    } : undefined,
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  };

  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  const faqSchema = faq.length > 0 ? {
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
  } : null;

  const articleSchema = article ? {
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
        "url": "https://ytterman.com/logo.png"
      }
    },
    "datePublished": article.publishedTime,
    "dateModified": article.modifiedTime || article.publishedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": article.section,
    "keywords": article.tags?.join(", ")
  } : null;

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
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:site_name" content="Ytterman" />
      
      {/* Article specific Open Graph */}
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

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@ytterman" />
      <meta name="twitter:creator" content="@tobiasytterman" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="DC.title" content={title} />
      <meta name="DC.description" content={description} />
      <meta name="DC.subject" content="Kontrollansvarig, BAS-P, BAS-U, Byggkontroll" />
      <meta name="DC.coverage" content="Västernorrland, Sverige" />
      <meta name="DC.type" content="Service" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.language" content="sv" />
      
      {/* Mobile and Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Structured Data */}
      {organization && (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      )}
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};