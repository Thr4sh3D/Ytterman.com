import { getStore } from '@netlify/blobs';

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

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const secret = req.headers.get('x-webhook-secret');
  if (!secret || secret !== process.env.BLOGSEO_WEBHOOK_SECRET) {
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

  // Store the full article
  await store.set(article.id, JSON.stringify(article));

  // Update the index
  const indexRaw = await store.get('__index');
  const index: ArticleIndex = indexRaw ? JSON.parse(indexRaw) : { articles: [] };

  const entry: ArticleIndexEntry = {
    id: article.id,
    slug: article.slug,
    title: article.title,
    published_at: article.published_at,
    main_image_url: article.main_image_url,
    meta_description: article.meta_description,
    keyword: article.keyword,
  };

  const existingIndex = index.articles.findIndex((a) => a.id === article.id);
  if (existingIndex >= 0) {
    index.articles[existingIndex] = entry;
  } else {
    // Insert newest first
    index.articles.unshift(entry);
  }

  await store.set('__index', JSON.stringify(index));

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const config = {
  path: '/api/blogseo-webhook',
};
