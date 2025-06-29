import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      {post.featured_image && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={post.featured_image} 
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className="flex-grow">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {post.category}
          </Badge>
          <div className="flex items-center text-xs text-slate-500">
            <Clock className="w-3 h-3 mr-1" />
            {post.reading_time} min
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 line-clamp-2 mb-2">
          {post.title}
        </h3>
        
        <p className="text-slate-600 line-clamp-3 text-sm">
          {post.excerpt}
        </p>
      </CardHeader>
      
      <CardFooter className="pt-0">
        <div className="w-full">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
            <div className="flex items-center">
              <User className="w-3 h-3 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {formatDate(post.created_at)}
            </div>
          </div>
          
          <Button 
            asChild 
            variant="outline" 
            className="w-full group"
          >
            <a href={`/blogg/${post.slug}`}>
              Läs mer
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};