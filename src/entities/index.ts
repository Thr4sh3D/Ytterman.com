import { superdevClient } from '@/lib/superdev/client';

export interface BlogPostRecord {
  id: string;
  title?: string;
  category?: string;
  featured_image?: string;
  created_at?: string;
}

export const BlogPost = superdevClient.entity('BlogPost') as {
  list: () => Promise<BlogPostRecord[]>;
  delete: (id: string) => Promise<unknown>;
};
