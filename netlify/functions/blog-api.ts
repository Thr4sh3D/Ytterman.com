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

  if (slug) {
    // Return a single post by slug
    const indexRaw = await store.get('__index');
    const index: ArticleIndex = indexRaw ? JSON.parse(indexRaw) : { articles: [] };
    const meta = index.articles.find((a) => a.slug === slug);

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

    return new Response(articleRaw, { status: 200, headers: corsHeaders });
  }

  // Return the index (metadata only, no content)
  const indexRaw = await store.get('__index');
  const index: ArticleIndex = indexRaw ? JSON.parse(indexRaw) : { articles: [] };

  return new Response(JSON.stringify(index.articles), {
    status: 200,
    headers: corsHeaders,
  });
};

export const config = {
  path: '/api/blog-posts',
  methods: ['GET'],
};
