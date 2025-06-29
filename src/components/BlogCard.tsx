import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    featured_image?: string;
    category: string;
    reading_time: number;
    author: string;
    created_at: string;
  };
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      {post.featured_image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.featured_image} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.created_at)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{post.reading_time} min</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        
        <p className="text-slate-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => window.location.href = `/blogg/${post.slug}`}
            className="text-primary hover:text-primary/80"
          >
            Läs mer
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </article>
  );
};