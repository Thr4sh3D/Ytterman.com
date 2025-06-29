import { useState, useEffect } from 'react';
import { BlogPost } from '@/entities';
import { BlogCard } from './BlogCard';

interface RelatedPostsProps {
  currentPost: {
    id: string;
    category: string;
    tags?: string[];
  };
}

export const RelatedPosts = ({ currentPost }: RelatedPostsProps) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        // Fetch posts from same category, excluding current post
        const posts = await BlogPost.filter({ 
          category: currentPost.category, 
          published: true 
        }, '-created_at', 6);
        
        const filtered = posts.filter(post => post.id !== currentPost.id).slice(0, 3);
        setRelatedPosts(filtered);
      } catch (error) {
        console.error('Error fetching related posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedPosts();
  }, [currentPost]);

  if (loading || relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Relaterade artiklar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};