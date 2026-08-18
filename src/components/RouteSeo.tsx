import { useLocation } from 'react-router-dom';
import { SeoDocument } from '@/components/SeoDocument';
import { getRouteByPath, toCanonicalUrl } from '@/config/routeRegistry.mjs';
import { buildRouteSchema } from '@/seo/schema';

export const RouteSeo = () => {
  const { pathname } = useLocation();
  const route = getRouteByPath(pathname)
    ?? (!pathname.startsWith('/blogg/') ? getRouteByPath('/404') : undefined);

  if (!route) return null;

  return (
    <SeoDocument
      title={route.meta.title}
      description={route.meta.description}
      keywords={route.meta.keywords}
      canonicalUrl={toCanonicalUrl(route.path)}
      image={route.meta.image}
      robots={route.meta.robots}
      type={route.schema.pageType === 'TechArticle' ? 'article' : 'website'}
      schema={buildRouteSchema(route)}
    />
  );
};
