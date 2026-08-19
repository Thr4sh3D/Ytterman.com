import {
  ACTIVE_SERVICE_NAMES,
  BAS,
  BUSINESS_COPY,
  COMPANY,
  KA_CREDENTIAL_SCHEMA,
  KA_CERT,
  PRICE_LABELS,
  PARTNER_LINKS,
  SERVICES,
} from '@/config/company';
import type { RouteDefinition } from '@/config/routeRegistry.mjs';
import { toCanonicalUrl } from '@/config/routeRegistry.mjs';

type SchemaNode = Record<string, unknown>;

const IDS = {
  website: `${COMPANY.siteUrl}/#website`,
  business: `${COMPANY.siteUrl}/#professional-service`,
  person: `${COMPANY.siteUrl}/#tobias-ytterman`,
  energyPartner: `${COMPANY.siteUrl}/#energy-declaration-partner`,
  energyCalculationPartner: `${COMPANY.siteUrl}/#energy-calculation-partner`,
} as const;

const serviceId = (key: string) => `${COMPANY.siteUrl}/#service-${key}`;

const buildServiceNode = (key: string): SchemaNode | null => {
  const service = SERVICES[key as keyof typeof SERVICES];
  if (!service) return null;

  const partnerDelivered = service.deliveryModel === 'partner';
  const energyCalculationPartner = key === 'energyCalculation';
  const partnerId = energyCalculationPartner ? IDS.energyCalculationPartner : IDS.energyPartner;
  return {
    '@type': 'Service',
    '@id': serviceId(key),
    name: service.name,
    description: service.shortDescription,
    url: `${COMPANY.siteUrl}${service.path}`,
    serviceType: service.name,
    areaServed: COMPANY.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    provider: partnerDelivered
      ? { '@id': partnerId }
      : { '@id': IDS.business },
    ...(partnerDelivered
      ? {
          broker: { '@id': IDS.business },
          disambiguatingDescription: energyCalculationPartner
            ? `${BUSINESS_COPY.energyCalculationPartner} ${BUSINESS_COPY.energyCalculationAffiliate}`
            : BUSINESS_COPY.energyPartner,
        }
      : {}),
  };
};

const buildCoreGraph = (): SchemaNode[] => {
  const activeServiceEntries = Object.entries(SERVICES)
    .filter(([, service]) => service.publicationStatus === 'active');

  return [
    {
      '@type': 'WebSite',
      '@id': IDS.website,
      url: `${COMPANY.siteUrl}/`,
      name: COMPANY.brandName,
      inLanguage: 'sv-SE',
      publisher: { '@id': IDS.business },
    },
    {
      '@type': 'ProfessionalService',
      '@id': IDS.business,
      name: COMPANY.brandName,
      alternateName: COMPANY.publicName,
      url: `${COMPANY.siteUrl}/`,
      email: COMPANY.email,
      description: `${KA_CERT.title}, ${BAS.rolesLabel} och byggrelaterade tjänster i ${COMPANY.region}. ${BUSINESS_COPY.energyPartner}`,
      areaServed: COMPANY.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
      serviceType: ACTIVE_SERVICE_NAMES,
      priceRange: PRICE_LABELS.schemaRange,
      affiliation: { '@type': 'Organization', name: COMPANY.affiliation.name },
      employee: { '@id': IDS.person },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Aktiva tjänster',
        itemListElement: activeServiceEntries.map(([key]) => ({
          '@type': 'Offer',
          itemOffered: { '@id': serviceId(key) },
        })),
      },
    },
    {
      '@type': 'Person',
      '@id': IDS.person,
      name: COMPANY.publicName,
      jobTitle: 'Kontrollansvarig och byggarbetsmiljösamordnare',
      worksFor: { '@id': IDS.business },
      hasCredential: [KA_CREDENTIAL_SCHEMA],
      knowsAbout: [KA_CERT.title, BAS.rolesLabel, BAS.regulation],
    },
    {
      '@type': 'Organization',
      '@id': IDS.energyPartner,
      name: 'Behörig partner för energideklaration',
      description: 'Partnerorganisation där deklarationen utförs av certifierad energiexpert. Partner och behörighet verifieras inför uppdraget.',
    },
    {
      '@type': 'Organization',
      '@id': IDS.energyCalculationPartner,
      name: 'Partner för Energiberäkning online',
      url: PARTNER_LINKS.energyCalculation,
      description: BUSINESS_COPY.energyCalculationPartner,
    },
    ...activeServiceEntries
      .map(([key]) => buildServiceNode(key))
      .filter((node): node is SchemaNode => Boolean(node)),
  ];
};

const pageNode = (
  canonicalUrl: string,
  title: string,
  description: string,
  pageType: string,
  serviceKey?: string,
  dateModified?: string,
): SchemaNode => ({
  '@type': pageType,
  '@id': `${canonicalUrl}#webpage`,
  url: canonicalUrl,
  name: title,
  description,
  inLanguage: 'sv-SE',
  isPartOf: { '@id': IDS.website },
  about: serviceKey ? { '@id': serviceId(serviceKey) } : { '@id': IDS.business },
  ...(pageType === 'TechArticle'
    ? {
        author: { '@id': IDS.person },
        publisher: { '@id': IDS.business },
        ...(dateModified ? { dateModified } : {}),
      }
    : {}),
  ...(pageType === 'ServicePage' && serviceKey
    ? { mainEntity: { '@id': serviceId(serviceKey) } }
    : {}),
});

export const buildRouteSchema = (route: RouteDefinition) => {
  const canonicalUrl = toCanonicalUrl(route.path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...buildCoreGraph(),
      pageNode(
        canonicalUrl,
        route.meta.title,
        route.meta.description,
        route.schema.pageType,
        route.schema.serviceKey,
        route.schema.dateModified,
      ),
    ],
  };
};

interface DynamicSchemaInput {
  canonicalUrl: string;
  title: string;
  description: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
  faq?: Array<{ question: string; answer: string }>;
}

export const buildDynamicSchema = ({
  canonicalUrl,
  title,
  description,
  article,
  breadcrumbs = [],
  faq = [],
}: DynamicSchemaInput) => {
  const graph: SchemaNode[] = [
    ...buildCoreGraph(),
    {
      ...pageNode(canonicalUrl, title, description, article ? 'Article' : 'WebPage'),
      ...(article
        ? {
            datePublished: article.publishedTime,
            dateModified: article.modifiedTime || article.publishedTime,
            articleSection: article.section,
            keywords: article.tags?.join(', '),
          }
        : {}),
    },
  ];

  if (breadcrumbs.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumbs`,
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    });
  }

  if (faq.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
};
