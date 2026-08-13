import { Helmet } from 'react-helmet-async';
import { ACTIVE_SERVICE_NAMES, BAS, COMPANY, KA_CREDENTIAL_SCHEMA, KA_CERT, PRICE_LABELS } from '@/config/company';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
}

export const SEO = ({
  title = "Ytterman - Kontrollansvarig & BAS i Västernorrland",
  description = `${KA_CERT.title} och ${BAS.qualificationLabel.toLowerCase()} i ${COMPANY.region}. ${COMPANY.experienceLabel} i byggbranschen.`,
  keywords = "kontrollansvarig, BAS-P, BAS-U, byggkontroll, Västernorrland, Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors, bygglov, byggarbetsmiljösamordnare, kontrollplan, slutbesked, byggprocess",
  url = "https://ytterman.com",
  image = "/og-image.png",
  type = "website"
}: SEOProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY.brandName,
    "alternateName": COMPANY.publicName,
    "description": `${KA_CERT.title} och ${BAS.qualificationLabel.toLowerCase()} med ${COMPANY.experienceLabel.toLowerCase()} i byggbranschen i ${COMPANY.region}`,
    "url": url,
    "telephone": COMPANY.phone.e164,
    "email": COMPANY.email,
    "areaServed": COMPANY.areaServed.map(name => ({ "@type": "AdministrativeArea", name })),
    "serviceType": ACTIVE_SERVICE_NAMES,
    "priceRange": PRICE_LABELS.schemaRange,
    "hasCredential": [KA_CREDENTIAL_SCHEMA],
    "knowsAbout": [BAS.rolesLabel, BAS.regulation]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={COMPANY.publicName} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Swedish" />
      <meta name="geo.region" content="SE-Y" />
      <meta name="geo.placename" content={COMPANY.region} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:site_name" content={COMPANY.brandName} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional Meta Tags for Local SEO */}
      <meta name="DC.title" content={title} />
      <meta name="DC.description" content={description} />
      <meta name="DC.subject" content="Kontrollansvarig, BAS-P, BAS-U, Byggkontroll" />
      <meta name="DC.coverage" content={`${COMPANY.region}, Sverige`} />
      <meta name="DC.type" content="Service" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.language" content="sv" />
    </Helmet>
  );
};
