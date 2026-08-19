import { Helmet } from 'react-helmet-async';
import { COMPANY } from '@/config/company';

interface SeoDocumentProps {
  title: string;
  description: string;
  keywords?: string | string[];
  canonicalUrl: string;
  image?: string;
  robots?: string;
  type?: string;
  schema: Record<string, unknown>;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

export const SeoDocument = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  image = `${COMPANY.siteUrl}/og-image.png`,
  robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  type = 'website',
  schema,
  article,
}: SeoDocumentProps) => {
  const keywordContent = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  return (
    <Helmet>
      <html lang="sv" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordContent && <meta name="keywords" content={keywordContent} />}
      <meta name="author" content={COMPANY.publicName} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:site_name" content={COMPANY.brandName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {article?.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
      {(article?.modifiedTime || article?.publishedTime) && (
        <meta property="article:modified_time" content={article.modifiedTime || article.publishedTime} />
      )}
      {article?.author && <meta property="article:author" content={article.author} />}
      {article?.section && <meta property="article:section" content={article.section} />}
      {article?.tags?.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
