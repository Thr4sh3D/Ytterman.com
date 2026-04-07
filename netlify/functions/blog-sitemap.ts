import { getStore } from '@netlify/blobs';

interface ArticleIndexEntry {
  slug: string;
  published_at: string;
}

interface ArticleIndex {
  articles: ArticleIndexEntry[];
}

const BASE_URL = 'https://ytterman.com';

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const normalizeSlug = (slug: string) =>
  slug
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join('/');

const formatLastmod = (dateString: string) => {
  const date = new Date(dateString);
  return Number.isNaN(date.getTime()) ? null : date.toISOString().split('T')[0];
};

const renderSitemap = (articles: ArticleIndexEntry[]) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  articles.forEach((article) => {
    const lastmod = formatLastmod(article.published_at);

    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(`${BASE_URL}/blogg/${normalizeSlug(article.slug)}/`)}</loc>\n`;
    if (lastmod) {
      xml += `    <lastmod>${escapeXml(lastmod)}</lastmod>\n`;
    }
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';
  return xml;
};

export default async (_req: Request) => {
  try {
    const store = getStore('blog-posts');
    const indexRaw = await store.get('__index');
    const index: ArticleIndex = indexRaw ? JSON.parse(indexRaw) : { articles: [] };

    return new Response(renderSitemap(index.articles), {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error generating blog sitemap:', error);

    return new Response(renderSitemap([]), {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  }
};

export const config = {
  path: '/sitemap-blog.xml',
  methods: ['GET'],
};
