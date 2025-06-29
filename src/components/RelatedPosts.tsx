import { useState, useEffect } from 'react';
import { BlogPost } from '@/entities';
import { BlogCard } from '@/components/BlogCard';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RelatedPostsProps {
  currentPost: any;
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
        }, '-created_at', 3);
        
        // Filter out current post and limit to 2
        const filtered = posts
          .filter(post => post.id !== currentPost.id)
          .slice(0, 2);
        
        setRelatedPosts(filtered);
      } catch (error) {
        console.error('Error fetching related posts:', error);
        // Fallback to sample posts
        const samplePosts = [
          {
            id: 'sample-2',
            title: 'BAS-P vs BAS-U - Skillnader och ansvar',
            slug: 'bas-p-bas-u-skillnader-ansvar',
            excerpt: 'Förstå skillnaderna mellan BAS-P och BAS-U. Vilka ansvarsområden har respektive roll och när behövs de i ditt byggprojekt?',
            featured_image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop',
            category: 'BAS',
            author: 'Tobias Ytterman',
            reading_time: 6,
            created_at: new Date(Date.now() - 86400000).toISOString(),
            tags: ['BAS-P', 'BAS-U', 'arbetsmiljö'],
            published: true
          },
          {
            id: 'sample-3',
            title: 'Bygglov i Västernorrland - Process och tips',
            slug: 'bygglov-vasternorrland-process-tips',
            excerpt: 'Praktiska tips för bygglovsprocessen i Västernorrlands kommuner. Undvik vanliga fallgropar och få ditt bygglov godkänt snabbare.',
            featured_image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
            category: 'Bygglov',
            author: 'Tobias Ytterman',
            reading_time: 10,
            created_at: new Date(Date.now() - 172800000).toISOString(),
            tags: ['bygglov', 'Västernorrland', 'kommun'],
            published: true
          }
        ];
        setRelatedPosts(samplePosts.filter(post => post.category !== currentPost.category).slice(0, 2));
      } finally {
        setLoading(false);
      }
    };

    if (currentPost) {
      fetchRelatedPosts();
    }
  }, [currentPost]);

  if (loading || relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Relaterade guider
            </h2>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/blogg'}
            >
              Alla guider
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};