import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
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
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.created_at)}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-slate-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-slate-500 text-sm">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>{post.reading_time} min</span>
          </div>
        </div>
        
        <Link to={`/blogg/${post.slug}`}>
          <Button 
            variant="outline" 
            className="w-full mt-4"
          >
            Läs mer
          </Button>
        </Link>
      </div>
    </div>
  );
};