import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  structuredData?: object;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  url = 'https://buildcontrol.se',
  image = 'https://buildcontrol.se/og-image.jpg',
  type = 'website',
  structuredData,
  author,
  publishedTime,
  modifiedTime
}: SEOHeadProps) => {
  const fullTitle = title.includes('BuildControl') ? title : `${title} | BuildControl`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author || "BuildControl Team"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="BuildControl" />
      <meta property="og:locale" content="sv_SE" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@buildcontrol" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          <meta property="article:section" content="Byggkontroll" />
          <meta property="article:tag" content="kontrollansvarig" />
          <meta property="article:tag" content="BAS-P" />
          <meta property="article:tag" content="BAS-U" />
          <meta property="article:tag" content="Västernorrland" />
        </>
      )}
      
      {/* Robots and indexing */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Language and region */}
      <meta httpEquiv="content-language" content="sv-SE" />
      <link rel="alternate" hrefLang="sv-SE" href={url} />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// FAQ Schema generator
export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
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

// Article Schema generator
export const articleSchema = (article: {
  title: string;
  description: string;
  author: string;
  publishedTime: string;
  modifiedTime?: string;
  image: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": [article.image],
  "datePublished": article.publishedTime,
  "dateModified": article.modifiedTime || article.publishedTime,
  "author": {
    "@type": "Organization",
    "name": article.author,
    "url": "https://buildcontrol.se"
  },
  "publisher": {
    "@type": "Organization",
    "name": "BuildControl",
    "logo": {
      "@type": "ImageObject",
      "url": "https://buildcontrol.se/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

// Service Schema generator
export const serviceSchema = (service: {
  name: string;
  description: string;
  provider: string;
  areaServed: string[];
  serviceType: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": service.provider,
    "url": "https://buildcontrol.se"
  },
  "areaServed": service.areaServed.map(area => ({
    "@type": "Place",
    "name": area
  })),
  "serviceType": service.serviceType,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Byggkontrolltjänster",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kontrollansvarig enligt PBL"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "BAS-P Byggarbetsmiljösamordnare"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "BAS-U Byggarbetsmiljösamordnare"
        }
      }
    ]
  }
});

// Breadcrumb Schema generator
export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const TechnicalSEO = () => {
  return (
    <Helmet>
      {/* Critical CSS for above-the-fold content */}
      <style type="text/css">{`
        /* Critical CSS - Above the fold */
        body { 
          margin: 0; 
          font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #1f2937;
        }
        .container { 
          max-width: 1200px; 
          margin: 0 auto; 
          padding: 0 1.5rem; 
        }
        .header { 
          background: white; 
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .hero { 
          background: linear-gradient(135deg, #1e40af, #1e3a8a); 
          color: white; 
          padding: 4rem 0;
          text-align: center;
        }
        .btn-primary { 
          background: #2563eb; 
          color: white; 
          padding: 0.75rem 1.5rem; 
          border-radius: 0.5rem;
          text-decoration: none;
          display: inline-block;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        .btn-primary:hover {
          background: #1d4ed8;
        }
        /* Prevent layout shift */
        img, video, iframe {
          max-width: 100%;
          height: auto;
        }
        /* Loading states */
        .loading {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Resource hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Mobile optimization */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Cache control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
    </Helmet>
  );
};