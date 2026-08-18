import { isValidElement, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { SeoDocument } from '@/components/SeoDocument';
import { getRouteByPath } from '@/config/routeRegistry.mjs';
import { COMPANY } from '@/config/company';
import { buildDynamicSchema } from '@/seo/schema';
import { normalizeSiteUrl } from '@/utils/url';

interface Breadcrumb {
  name: string;
  url: string;
}

interface Article {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

interface AdvancedSEOProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
  type?: string;
  robots?: string;
  organization?: boolean;
  breadcrumbs?: Breadcrumb[];
  article?: Article;
  faq?: Array<{ question: string; answer: string | ReactNode }>;
  reviews?: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>;
}

const extractText = (node: ReactNode): string => {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join(' ');
  if (isValidElement(node)) return extractText((node.props as { children?: ReactNode }).children);
  return '';
};

/**
 * Compatibility entrypoint for dynamic content.
 * Static routes are owned exclusively by RouteSeo and the shared route registry.
 */
export const AdvancedSEO = ({
  title,
  description,
  keywords,
  url,
  image = `${COMPANY.siteUrl}/og-image.png`,
  type = 'website',
  robots,
  breadcrumbs = [],
  article,
  faq = [],
}: AdvancedSEOProps) => {
  const { pathname } = useLocation();

  if (getRouteByPath(pathname)) return null;

  const canonicalUrl = normalizeSiteUrl(url);
  const normalizedFaq = faq.map((item) => ({
    question: item.question,
    answer: extractText(item.answer).replace(/\s+/g, ' ').trim(),
  }));

  return (
    <SeoDocument
      title={title}
      description={description}
      keywords={keywords}
      canonicalUrl={canonicalUrl}
      image={image.startsWith('http') ? image : `${COMPANY.siteUrl}${image}`}
      robots={robots}
      type={type}
      article={article}
      schema={buildDynamicSchema({
        canonicalUrl,
        title,
        description,
        article,
        breadcrumbs: breadcrumbs.map((crumb) => ({
          ...crumb,
          url: normalizeSiteUrl(crumb.url),
        })),
        faq: normalizedFaq,
      })}
    />
  );
};
