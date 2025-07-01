import { Helmet } from 'react-helmet-async';

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  organization?: boolean;
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
  organization = false,
  faq = [],
  reviews = []
}: AdvancedSEOProps) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ytterman",
    "description": description,
    "url": url,
    "telephone": "+46761118447",
    "email": "tobias@ytterman.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Västernorrland",
      "addressCountry": "SE"
    },
    "founder": {
      "@type": "Person",
      "name": "Tobias Ytterman",
      "jobTitle": "Kontrollansvarig & BAS-samordnare"
    },
    "memberOf": {
      "@type": "Organization", 
      "name": "Svenska Byggingenjörers Riksförbund"
    },
    "areaServed": [
      "Sundsvall",
      "Härnösand",
      "Sollefteå", 
      "Timrå",
      "Kramfors"
    ]
  };

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

  const reviewsSchema = reviews.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ytterman",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": reviews.length.toString()
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString()
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {organization && (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      )}
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {reviewsSchema && (
        <script type="application/ld+json">
          {JSON.stringify(reviewsSchema)}
        </script>
      )}
    </Helmet>
  );
};