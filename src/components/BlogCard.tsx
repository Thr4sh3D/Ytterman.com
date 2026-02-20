import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    featured_image?: string;
    category: string;
    author: string;
    reading_time: number;
    created_at: string;
    tags?: string[];
  };
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const navigate = useNavigate();
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      {post.featured_image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.featured_image} 
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
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
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-slate-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-slate-600">
            <User className="w-4 h-4" />
            <span className="text-sm">{post.author}</span>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"navigate(`/blogg/${post.slug}`)
            onClick={() => window.location.href = `/blogg/${post.slug}`}
            className="text-primary hover:text-primary/80"
          >
            Läs mer
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};