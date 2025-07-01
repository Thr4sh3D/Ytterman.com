import { Helmet } from 'react-helmet-async';

interface Breadcrumb {
  name: string;
  url: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}

interface Service {
  name: string;
  description: string;
  provider: string;
  areaServed: string[];
  priceRange: string;
}

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
  type?: string;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section: string;
    tags: string[];
  };
  breadcrumbs?: Breadcrumb[];
  faq?: FAQ[];
  reviews?: Review[];
  service?: Service;
  organization?: boolean;
}

export const AdvancedSEO = ({
  title,
  description,
  keywords,
  url,
  image = 'https://ytterman.com/images/og-image.jpg',
  type = 'website',
  article,
  breadcrumbs,
  faq,
  reviews,
  service,
  organization = false
}: AdvancedSEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Article Specific Meta Tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
          {article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Structured Data - BreadcrumbList */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.name,
              "item": item.url
            }))
          })}
        </script>
      )}
      
      {/* Structured Data - FAQ */}
      {faq && faq.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      )}
      
      {/* Structured Data - Reviews */}
      {reviews && reviews.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Ytterman Byggkonsult",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length,
              "reviewCount": reviews.length
            },
            "review": reviews.map(review => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": review.author
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating
              },
              "reviewBody": review.reviewBody,
              "datePublished": review.datePublished
            }))
          })}
        </script>
      )}
      
      {/* Structured Data - Service */}
      {service && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.name,
            "description": service.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": service.provider
            },
            "areaServed": service.areaServed,
            "priceRange": service.priceRange
          })}
        </script>
      )}
      
      {/* Structured Data - Organization */}
      {organization && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ytterman",
            "url": "https://ytterman.com",
            "logo": "https://ytterman.com/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+46761118447",
              "contactType": "customer service",
              "areaServed": "SE",
              "availableLanguage": ["Swedish", "English"]
            },
            "sameAs": [
              "https://www.facebook.com/ytterman",
              "https://www.instagram.com/ytterman",
              "https://www.linkedin.com/company/ytterman"
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};