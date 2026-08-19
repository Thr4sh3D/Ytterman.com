export type SchemaPageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'FAQPage' | 'ServicePage' | 'TechArticle';

export interface RouteDefinition {
  id: string;
  path: string;
  indexable: boolean;
  prerender: boolean;
  sitemap: { priority: string; changefreq: string } | null;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    robots: string;
    image: string;
  };
  schema: {
    pageType: SchemaPageType;
    serviceKey?: string;
    dateModified?: string;
  };
}

export const SITE_URL: string;
export const routeRegistry: readonly RouteDefinition[];
export const ROUTE_PATHS: Readonly<Record<string, string>>;
export const redirectRegistry: readonly { from: string; to: string; reason: string }[];
export const routeByPath: ReadonlyMap<string, RouteDefinition>;
export const normalizeRoutePath: (path: string) => string;
export const getRouteByPath: (path: string) => RouteDefinition | undefined;
export const getPrerenderRoutes: () => string[];
export const getSitemapRoutes: () => RouteDefinition[];
export const toCanonicalUrl: (path: string) => string;
