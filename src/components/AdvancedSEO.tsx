import { Helmet } from 'react-helmet-async';

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image?: string;
  type?: 'website' | 'article';
  organization?: boolean;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faq?: Array<{ question: string; answer: string }>;
  service?: {
    name: string;
    description: string;
    provider: string;
    areaServed: string[];
    priceRange?: string;
  };
  article?: {
    publishedTime: string;
    modifiedTime: string;
    author: string;
    section: string;
    tags?: string[];
  };
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
  image = 'https://ytterman.com/og-image.jpg',
  type = 'website',
  organization = false,
  breadcrumbs,
  faq,
  service,
  article,
  reviews
}: AdvancedSEOProps) => {
  const structuredData: any[] = [];

  // Organization Schema
  if (organization) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ytterman",
      "description": "Certifierad Kontrollansvarig och BAS-samordnare i Västernorrland",
      "url": "https://ytterman.com",
      "logo": "https://ytterman.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+46761118447",
        "contactType": "customer service",
        "email": "tobias@ytterman.com",
        "areaServed": "SE",
        "availableLanguage": "Swedish"
      },
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Västernorrland",
        "addressCountry": "SE"
      },
      "sameAs": [
        "https://www.linkedin.com/company/ytterman"
      ]
    });
  }

  // Breadcrumbs Schema
  if (breadcrumbs && breadcrumbs.length > 1) {
    structuredData.push({
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

  // FAQ Schema
  if (faq && faq.length > 0) {
    structuredData.push({
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

  // Service Schema
  if (service) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": service.provider
      },
      "areaServed": service.areaServed.map(area => ({
        "@type": "City",
        "name": area
      })),
      "offers": service.priceRange ? {
        "@type": "Offer",
        "priceRange": service.priceRange,
        "priceCurrency": "SEK"
      } : undefined
    });
  }

  // Article Schema
  if (article && type === 'article') {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": image,
      "datePublished": article.publishedTime,
      "dateModified": article.modifiedTime,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Ytterman",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ytterman.com/logo.png"
        }
      },
      "articleSection": article.section,
      "keywords": article.tags?.join(', ')
    });
  }

  // Reviews Schema
  if (reviews && reviews.length > 0) {
    const aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1),
      "reviewCount": reviews.length,
      "bestRating": 5,
      "worstRating": 1
    };

    structuredData.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Ytterman",
      "aggregateRating": aggregateRating,
      "review": reviews.map(review => ({
        "@type": "Review",
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
      }))
    });
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Ytterman" />
      <meta property="og:locale" content="sv_SE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific */}
      {article && type === 'article' && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
          {article.tags?.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Structured Data */}
      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Ytterman" />
      <meta name="language" content="Swedish" />
      <meta name="geo.region" content="SE-Y" />
      <meta name="geo.placename" content="Västernorrland" />
      <meta name="geo.position" content="62.3908;17.3069" />
      <meta name="ICBM" content="62.3908, 17.3069" />
    </Helmet>
  );
};