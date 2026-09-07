import { superdevClient } from '@/lib/superdev/client';

export interface BlogPostRecord {
  id: string;
  title?: string;
  featured_image?: string;
  category?: string;
  created_at: string;
}

const blogPostEntity = superdevClient.entity('BlogPost');

export const BlogPost = {
  list: async (): Promise<BlogPostRecord[]> => blogPostEntity.list() as Promise<BlogPostRecord[]>,
  delete: (id: string) => blogPostEntity.delete(id),
};
