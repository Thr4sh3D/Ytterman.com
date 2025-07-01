import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  type?: string;
  image?: string;
  robots?: string;
  structuredData?: object;
}

export const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  url, 
  type = 'website', 
  image = 'https://ytterman.com/og-image.jpg',
  robots = 'index, follow',
  structuredData
}: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Ytterman" />
      <meta property="og:locale" content="sv_SE" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Ytterman" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="sv" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ytterman",
    "description": "Professionella byggkontrolltjänster i Västernorrland. Kontrollansvarig, BAS-P, BAS-U och bygglovshjälp.",
    "url": "https://ytterman.com",
    "telephone": "+46-XX-XXX-XX-XX",
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
        "name": "Kramfors"
      },
      {
        "@type": "City",
        "name": "Sollefteå"
      }
    ],
    "serviceType": [
      "Kontrollansvarig",
      "BAS-P",
      "BAS-U", 
      "Byggkontroll",
      "Bygglovshjälp"
    ],
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};