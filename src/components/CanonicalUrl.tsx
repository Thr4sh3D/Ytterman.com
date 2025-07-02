import { Helmet } from 'react-helmet-async';

interface CanonicalUrlProps {
  path?: string;
  fullUrl?: string;
}

/**
 * Component to add canonical URL tags to pages
 * @param path - The path portion of the URL (without domain)
 * @param fullUrl - Complete URL including domain (overrides path if provided)
 */
export const CanonicalUrl = ({ path, fullUrl }: CanonicalUrlProps) => {
  // Base domain for the site
  const baseDomain = "https://ytterman.com";
  
  // Use fullUrl if provided, otherwise construct from path
  const canonicalUrl = fullUrl || (path ? `${baseDomain}${path.startsWith('/') ? path : `/${path}`}` : baseDomain);

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};