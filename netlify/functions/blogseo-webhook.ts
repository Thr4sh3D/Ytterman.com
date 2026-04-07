import { getStore } from '@netlify/blobs';
import { timingSafeEqual } from 'crypto';

interface BlogSeoArticle {
  id: string;
  slug: string;
  title: string;
  content: string;
  format: 'markdown' | 'html';
  published_at: string;
  main_image_url: string;
  meta_description: string;
  keyword: string | null;
}

interface BlogSeoPayload {
  article: BlogSeoArticle;
  main_image: { url: string; alt: string };
  website: { id: string; baseUrl: string };
  published_at: string;
  timestamp: string;
}

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

const normalizeString = (value: unknown) =>
  typeof value === 'string' ? value.trim() : '';

const normalizeKeyword = (value: unknown) => {
  const keyword = normalizeString(value);
  return keyword || null;
};

const normalizePublishedAt = (...candidates: unknown[]) => {
  for (const candidate of candidates) {
    const value = normalizeString(candidate);
    if (value && !Number.isNaN(new Date(value).getTime())) {
      return value;
    }
  }

  return new Date().toISOString();
};

const stripMarkup = (value: string) =>
  value
    .replace(/<[^>]*>/g, ' ')
    .replace(/[#[\]_*`()>]/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const buildMetaDescription = (article: BlogSeoArticle) => {
  const metaDescription = normalizeString(article.meta_description);
  if (metaDescription) {
    return metaDescription;
  }

  const contentPreview = stripMarkup(normalizeString(article.content)).slice(0, 157).trim();
  if (contentPreview) {
    return `${contentPreview}${contentPreview.length >= 157 ? '...' : ''}`;
  }

  return normalizeString(article.title);
};

const parseIndex = (indexRaw: string | null): ArticleIndex => {
  if (!indexRaw) {
    return { articles: [] };
  }

  try {
    const parsed = JSON.parse(indexRaw) as Partial<ArticleIndex>;
    return {
      articles: Array.isArray(parsed.articles) ? parsed.articles : [],
    };
  } catch (error) {
    console.error('Failed to parse existing blog index, recreating it:', error);
    return { articles: [] };
  }
};

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const secret = req.headers.get('x-webhook-secret');
  const expectedSecret = process.env.BLOGSEO_WEBHOOK_SECRET;

  if (
    !secret ||
    !expectedSecret ||
    secret.length !== expectedSecret.length ||
    !timingSafeEqual(Buffer.from(secret), Buffer.from(expectedSecret))
  ) {
    return new Response(JSON.stringify({ error: 'Invalid signature' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let payload: BlogSeoPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { article } = payload;
  if (!article?.id || !article?.slug || !article?.title) {
    return new Response(JSON.stringify({ error: 'Missing required article fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const store = getStore('blog-posts');
  const normalizedArticle: BlogSeoArticle = {
    ...article,
    id: normalizeString(article.id),
    slug: normalizeString(article.slug),
    title: normalizeString(article.title),
    content: normalizeString(article.content),
    format: article.format === 'html' ? 'html' : 'markdown',
    published_at: normalizePublishedAt(article.published_at, payload.published_at, payload.timestamp),
    main_image_url: normalizeString(article.main_image_url || payload.main_image?.url),
    meta_description: buildMetaDescription(article),
    keyword: normalizeKeyword(article.keyword),
  };

  if (!normalizedArticle.id || !normalizedArticle.slug || !normalizedArticle.title) {
    return new Response(JSON.stringify({ error: 'Missing required normalized article fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Store the full article
    await store.set(normalizedArticle.id, JSON.stringify(normalizedArticle));

    // Update the index
    const index = parseIndex(await store.get('__index'));

    const entry: ArticleIndexEntry = {
      id: normalizedArticle.id,
      slug: normalizedArticle.slug,
      title: normalizedArticle.title,
      published_at: normalizedArticle.published_at,
      main_image_url: normalizedArticle.main_image_url,
      meta_description: normalizedArticle.meta_description,
      keyword: normalizedArticle.keyword,
    };

    const existingIndex = index.articles.findIndex((a) => a.id === normalizedArticle.id);
    if (existingIndex >= 0) {
      index.articles[existingIndex] = entry;
    } else {
      // Insert newest first
      index.articles.unshift(entry);
    }

    index.articles.sort(
      (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
    );

    await store.set('__index', JSON.stringify(index));
  } catch (err) {
    console.error('Failed to store article in Netlify Blobs:', err);
    return new Response(JSON.stringify({ error: 'Storage error, please retry' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const config = {
  path: '/api/blogseo-webhook',
  methods: ['POST'],
};
