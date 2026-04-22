import { getStore } from '@netlify/blobs';

interface ArticleIndexEntry {
  id: string;
  slug: string;
  title: string;
  published_at: string;
  main_image_url: string;
  meta_description: string;
  keyword: string | null;
}

interface ArticleIndex {
  articles: ArticleIndexEntry[];
}

interface StoredBlogArticle extends Partial<ArticleIndexEntry> {
  content?: string;
  format?: 'markdown' | 'html' | string;
}

const normalizeString = (value: unknown) =>
  typeof value === 'string' ? value.trim() : '';

const normalizeKeyword = (value: unknown) => {
  const keyword = normalizeString(value);
  return keyword || null;
};

const normalizePublishedAt = (value: unknown) => {
  const publishedAt = normalizeString(value);
  return publishedAt && !Number.isNaN(new Date(publishedAt).getTime())
    ? publishedAt
    : new Date(0).toISOString();
};

const parsePositiveInteger = (value: string | null) => {
  if (!value) {
    return null;
  }

  const parsed = Number.parseInt(value, 10);

  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
};

const parseNonNegativeInteger = (value: string | null) => {
  if (!value) {
    return 0;
  }

  const parsed = Number.parseInt(value, 10);

  return Number.isInteger(parsed) && parsed >= 0 ? parsed : 0;
};

const normalizeIndexEntry = (entry: Partial<ArticleIndexEntry>): ArticleIndexEntry | null => {
  const id = normalizeString(entry.id);
  const slug = normalizeString(entry.slug);
  const title = normalizeString(entry.title);

  if (!id || !slug || !title) {
    return null;
  }

  return {
    id,
    slug,
    title,
    published_at: normalizePublishedAt(entry.published_at),
    main_image_url: normalizeString(entry.main_image_url),
    meta_description: normalizeString(entry.meta_description),
    keyword: normalizeKeyword(entry.keyword),
  };
};

const parseIndex = (indexRaw: string | null) => {
  if (!indexRaw) {
    return [];
  }

  try {
    const parsed = JSON.parse(indexRaw) as Partial<ArticleIndex>;
    const articles = Array.isArray(parsed.articles) ? parsed.articles : [];

    return articles
      .map((entry) => normalizeIndexEntry(entry))
      .filter((entry): entry is ArticleIndexEntry => Boolean(entry))
      .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
  } catch (error) {
    console.error('Failed to parse blog index:', error);
    return [];
  }
};

const normalizeArticle = (article: StoredBlogArticle, meta: ArticleIndexEntry) => ({
  id: normalizeString(article.id) || meta.id,
  slug: normalizeString(article.slug) || meta.slug,
  title: normalizeString(article.title) || meta.title,
  content: normalizeString(article.content),
  format: article.format === 'html' ? 'html' : 'markdown',
  published_at: normalizePublishedAt(article.published_at || meta.published_at),
  main_image_url: normalizeString(article.main_image_url) || meta.main_image_url,
  meta_description: normalizeString(article.meta_description) || meta.meta_description,
  keyword: normalizeKeyword(article.keyword ?? meta.keyword),
});

export default async (req: Request) => {
  if (req.method !== 'GET') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://ytterman.com',
  };

  const store = getStore('blog-posts');

  const url = new URL(req.url);
  const slug = url.searchParams.get('slug');
  const limit = parsePositiveInteger(url.searchParams.get('limit'));
  const offset = parseNonNegativeInteger(url.searchParams.get('offset'));

  if (slug) {
    // Return a single post by slug
    const index = parseIndex(await store.get('__index'));
    const meta = index.find((a) => a.slug === slug);

    if (!meta) {
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    const articleRaw = await store.get(meta.id);
    if (!articleRaw) {
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    try {
      const article = normalizeArticle(JSON.parse(articleRaw) as StoredBlogArticle, meta);

      return new Response(JSON.stringify(article), { status: 200, headers: corsHeaders });
    } catch (error) {
      console.error(`Failed to parse blog article ${meta.id}:`, error);

      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: corsHeaders,
      });
    }
  }

  // Return the index (metadata only, no content)
  const index = parseIndex(await store.get('__index'));
  const safeOffset = Math.min(offset, index.length);
  const paginatedIndex = limit ? index.slice(safeOffset, safeOffset + limit) : index;

  return new Response(JSON.stringify(paginatedIndex), {
    status: 200,
    headers: {
      ...corsHeaders,
      'Cache-Control': 'public, max-age=300',
      'X-Total-Count': String(index.length),
    },
  });
};

export const config = {
  path: '/api/blog-posts',
  methods: ['GET'],
};
