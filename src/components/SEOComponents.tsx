import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

export const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image = '/api/placeholder/1200/630',
  url,
  type = 'website',
  structuredData 
}: SEOProps) => {
  const fullTitle = title.includes('BuildControl') ? title : `${title} | BuildControl`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content="BuildControl" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="BuildControl" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Structured Data Schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BuildControl",
  "description": "Professionell byggkontroll, kontrollansvarig, BAS-P och BAS-U tjänster i Västernorrland",
  "url": "https://buildcontrol.se",
  "logo": "https://buildcontrol.se/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+46-XXX-XXX-XXX",
    "contactType": "customer service",
    "availableLanguage": "Swedish"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Västernorrland",
    "addressCountry": "SE"
  },
  "sameAs": [
    "https://www.linkedin.com/company/buildcontrol"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BuildControl",
  "description": "Professionell byggkontroll och teknisk konsultation",
  "url": "https://buildcontrol.se",
  "telephone": "+46-XXX-XXX-XXX",
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
  "openingHours": "Mo-Fr 08:00-17:00",
  "priceRange": "$$",
  "servedCuisine": "Building Control Services"
};

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const reviewSchema = (reviews: Array<{author: string, rating: number, text: string}>) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BuildControl",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
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
    "reviewBody": review.text
  }))
});