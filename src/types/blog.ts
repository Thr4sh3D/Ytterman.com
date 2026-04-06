export interface BlogPostMeta {
  id: string;
  slug: string;
  title: string;
  published_at: string;
  main_image_url: string;
  meta_description: string;
  keyword: string | null;
}

export interface BlogArticle extends BlogPostMeta {
  content: string;
  format: 'markdown' | 'html';
}
