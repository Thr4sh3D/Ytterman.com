import { isValidElement, type ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { normalizeSiteUrl } from '@/utils/url';

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
  robots?: string;
  organization?: boolean;
  breadcrumbs?: Breadcrumb[];
  article?: Article;
  faq?: Array<{
    question: string;
    answer: string | ReactNode;
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
  url: rawUrl, 
  image = "/og-image.png",
  type = "website",
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  organization = false,
  breadcrumbs = [],
  article,
  faq = [],
  reviews = []
}: AdvancedSEOProps) => {
  // Ensure trailing slash for GitHub Pages compatibility (avoids 301 redirects)
  const url = normalizeSiteUrl(rawUrl);
  const extractTextFromNode = (node: ReactNode): string => {
    if (node == null || typeof node === 'boolean') {
      return '';
    }

    if (typeof node === 'string' || typeof node === 'number') {
      return String(node);
    }

    if (Array.isArray(node)) {
      return node.map(extractTextFromNode).join(' ');
    }

    if (isValidElement(node)) {
      return extractTextFromNode((node.props as { children?: ReactNode }).children);
    }

    return '';
  };

  const normalizeFaqAnswer = (answer: string | ReactNode) => {
    if (typeof answer === 'string') {
      return answer;
    }

    return extractTextFromNode(answer)
      .replace(/\s+/g, ' ')
      .trim();
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ytterman – Kontrollansvarig & BAS",
    "alternateName": "Tobias Ytterman",
    "description": "Certifierad kontrollansvarig (KA) och BAS-P/BAS-U i Västernorrland. Över 20 års erfarenhet inom byggteknik.",
    "url": "https://ytterman.com",
    "telephone": "+46761118447",
    "email": "tobias@ytterman.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Härnösand",
      "addressRegion": "Västernorrland",
      "addressCountry": "SE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 62.6323,
      "longitude": 17.9409
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Härnösand"
      },
      {
        "@type": "City",
        "name": "Sundsvall"
      },
      {
        "@type": "City",
        "name": "Sollefteå"
      },
      {
        "@type": "City",
        "name": "Kramfors"
      },
      {
        "@type": "City",
        "name": "Timrå"
      },
      {
        "@type": "City",
        "name": "Örnsköldsvik"
      }
    ],
    "sameAs": [],
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
      "item": normalizeSiteUrl(crumb.url)
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
        "text": normalizeFaqAnswer(item.answer)
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
      <meta name="robots" content={robots} />
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
