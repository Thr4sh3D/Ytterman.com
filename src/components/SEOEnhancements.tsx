import { Helmet } from 'react-helmet-async';
import { BAS, COMPANY, KA_CREDENTIAL_SCHEMA, KA_CERT, PRICE_LABELS, SERVICES } from '@/config/company';

export const SEOEnhancements = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY.brandName,
    "description": `${KA_CERT.title} och utbildad för uppdrag som ${BAS.rolesLabel}. ${COMPANY.experienceLabel}.`,
    "url": COMPANY.siteUrl,
    "telephone": COMPANY.phone.e164,
    "email": COMPANY.email,
    "areaServed": COMPANY.areaServed.map(name => ({ "@type": "AdministrativeArea", name })),
    "serviceType": [
      "Kontrollansvarig",
      "BAS-P",
      "BAS-U",
      "Byggkontroll",
      "Arbetsmiljösamordning",
      SERVICES.energyDeclaration.name
    ],
    "priceRange": PRICE_LABELS.schemaRange,
    "hasCredential": [KA_CREDENTIAL_SCHEMA],
    "knowsAbout": [BAS.rolesLabel, BAS.regulation],
    "memberOf": {
      "@type": "Organization",
      "name": COMPANY.membership.name
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional meta tags for better SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={COMPANY.publicName} />
      <meta name="geo.region" content="SE-Y" />
      <meta name="geo.placename" content={COMPANY.region} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content="business.business" />
      <meta property="og:locale" content="sv_SE" />
      <meta property="business:contact_data:locality" content="Västernorrland" />
      <meta property="business:contact_data:region" content="Västernorrland" />
      <meta property="business:contact_data:country_name" content="Sverige" />
      
      {/* Additional keywords in meta */}
      <meta name="keywords" content="kontrollansvarig Västernorrland, BAS-P Sundsvall, BAS-U Härnösand, byggkontroll Sollefteå, arbetsmiljösamordnare Timrå, kontrollansvarig Kramfors, bygglov Västernorrland, PBL kontroll, slutbesked, arbetsmiljöplan, riskbedömning bygg, byggarbetsmiljö, kontrollplan, certifierad kontrollansvarig" />
    </Helmet>
  );
};
