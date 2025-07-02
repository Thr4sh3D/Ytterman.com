import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, User } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  category?: string;
  tags?: string[];
  author?: string;
  reading_time?: number;
  created_at: string;
}

interface BlogListProps {
  posts: BlogPost[];
  loading: boolean;
}

export function BlogList({ posts, loading }: BlogListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-48 bg-gray-100 rounded-t-lg"></div>
            <CardHeader>
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="h-3 bg-gray-100 rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-3 bg-gray-100 rounded"></div>
                <div className="h-3 bg-gray-100 rounded w-5/6"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Tag className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Inga artiklar hittades</h3>
          <p className="text-gray-600">
            Det finns inga publicerade blogginlägg i denna kategori än. 
            Kom tillbaka snart för nya expertguider!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Card key={post.id} className="group hover:shadow-md transition-all duration-300 border border-gray-200 shadow-sm bg-white">
          <Link to={`/blogg/${post.slug}`} className="block">
            {post.featured_image && (
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            )}
            
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-3">
                {post.category && (
                  <Badge variant="outline" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200">
                    {post.category}
                  </Badge>
                )}
                <div className="flex items-center text-xs text-gray-500 gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.created_at).toLocaleDateString('sv-SE')}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                {post.title}
              </h3>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  {post.author && (
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  )}
                  {post.reading_time && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.reading_time} min</span>
                    </div>
                  )}
                </div>
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-gray-50 text-gray-600">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600">
                      +{post.tags.length - 3}
                    </Badge>
                  )}
                </div>
              )}
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}