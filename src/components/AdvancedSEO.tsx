import { Helmet } from 'react-helmet-async';

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
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
  url = 'https://ytterman.com',
  image = 'https://ytterman.com/og-image.jpg',
  organization = false,
  faq = [],
  reviews = []
}: AdvancedSEOProps) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ytterman",
    "description": "Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare i Västernorrland",
    "url": "https://ytterman.com",
    "logo": "https://ytterman.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+46-76-111-84-47",
      "contactType": "customer service",
      "email": "tobias@ytterman.com",
      "areaServed": "SE-Y",
      "availableLanguage": "Swedish"
    },
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Västernorrland",
      "addressCountry": "SE"
    },
    "sameAs": [
      "https://www.facebook.com/ytterman",
      "https://www.linkedin.com/company/ytterman"
    ],
    "founder": {
      "@type": "Person",
      "name": "Tobias Ytterman"
    },
    "areaServed": {
      "@type": "State",
      "name": "Västernorrland"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ytterman - Kontrollansvarig & BAS",
    "description": "Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare (BAS-P/BAS-U) i Västernorrland",
    "url": "https://ytterman.com",
    "telephone": "+46-76-111-84-47",
    "email": "tobias@ytterman.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Västernorrland",
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
      "Kontrollansvarig",
      "BAS-P",
      "BAS-U",
      "Byggkontroll",
      "Arbetsmiljösamordning"
    ],
    "priceRange": "15000-50000 SEK"
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

  const reviewSchema = reviews.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ytterman",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
      "reviewCount": reviews.length,
      "bestRating": 5,
      "worstRating": 1
    },
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
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:site_name" content="Ytterman" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Tobias Ytterman" />
      <meta name="geo.region" content="SE-Y" />
      <meta name="geo.placename" content="Västernorrland" />
      <meta name="geo.position" content="62.3908;17.3069" />
      <meta name="ICBM" content="62.3908, 17.3069" />
      
      {/* Structured Data */}
      {organization && (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      )}
      
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {reviewSchema && (
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      )}
    </Helmet>
  );
};