import { Helmet } from 'react-helmet-async';

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image?: string;
  type?: 'website' | 'article';
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
  organization?: boolean;
}

export const AdvancedSEO = ({
  title,
  description,
  keywords,
  url,
  image = 'https://ytterman.com/og-image.jpg',
  type = 'website',
  article,
  breadcrumbs,
  faq,
  organization = false
}: AdvancedSEOProps) => {
  const structuredData = [];

  // Organization schema
  if (organization) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ytterman",
      "url": "https://ytterman.com",
      "logo": "https://ytterman.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+46-76-111-84-47",
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

  // Breadcrumbs schema
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

  // FAQ schema
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

  // Article schema
  if (type === 'article' && article) {
    structuredData.push({
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
      "dateModified": article.modifiedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      }
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
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Ytterman" />
      <meta property="og:locale" content="sv_SE" />

      {/* Article specific Open Graph */}
      {type === 'article' && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags && article.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};