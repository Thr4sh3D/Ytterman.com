import { Helmet } from 'react-helmet-async';
import {
  ACTIVE_SERVICE_NAMES,
  BAS,
  BUSINESS_COPY,
  COMPANY,
  KA_CREDENTIAL_SCHEMA,
  KA_CERT,
  PRICE_LABELS,
  SERVICES,
} from '@/config/company';

interface JsonLdSchemaProps {
  type?: 'ProfessionalService' | 'LocalBusiness';
}

export const JsonLdSchema = ({ type = 'ProfessionalService' }: JsonLdSchemaProps) => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: COMPANY.brandName,
    alternateName: COMPANY.publicName,
    description: `${KA_CERT.title} och ${BAS.qualificationLabel.toLowerCase()} i ${COMPANY.region}. ${BUSINESS_COPY.energyPartner}`,
    url: COMPANY.siteUrl,
    email: COMPANY.email,
    image: `${COMPANY.siteUrl}/og-image.png`,
    logo: `${COMPANY.siteUrl}/favicon.svg`,
    areaServed: COMPANY.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    serviceType: ACTIVE_SERVICE_NAMES,
    priceRange: PRICE_LABELS.schemaRange,
    hasCredential: [KA_CREDENTIAL_SCHEMA],
    knowsAbout: [BAS.rolesLabel, BAS.regulation],
    memberOf: {
      '@type': 'Organization',
      name: COMPANY.membership.name,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tjänster',
      itemListElement: Object.values(SERVICES)
        .filter((service) => service.publicationStatus === 'active')
        .map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.shortDescription,
          },
        })),
    },
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: COMPANY.publicName,
    jobTitle: 'Kontrollansvarig och byggarbetsmiljösamordnare',
    hasCredential: [KA_CREDENTIAL_SCHEMA],
    knowsAbout: [BAS.rolesLabel, BAS.regulation],
    worksFor: {
      '@type': 'Organization',
      name: COMPANY.brandName,
      url: COMPANY.siteUrl,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
};
