import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { OptimizedImage } from '@/components/OptimizedImage';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  reading_time: number;
  created_at: string;
  category: string;
  author: string;
}

interface BlogListProps {
  posts: BlogPost[];
  loading: boolean;
}

export const BlogList = ({ posts, loading }: BlogListProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-6">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-4" />
              <Skeleton className="h-20 w-full mb-4" />
              <Skeleton className="h-10 w-1/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-semibold text-slate-700 mb-4">Inga blogginlägg hittades</h3>
        <p className="text-slate-500 mb-8">Det finns inga publicerade inlägg i denna kategori ännu.</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <Link to={`/blogg/${post.slug}`} className="block">
            <div className="relative h-48 overflow-hidden">
              {post.featured_image ? (
                <OptimizedImage
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  width={400}
                  height={200}
                />
              ) : (
                <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-400">Ingen bild</span>
                </div>
              )}
              {post.category && (
                <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded text-sm">
                  {post.category}
                </span>
              )}
            </div>
          </Link>
          
          <div className="p-6">
            <div className="flex items-center text-sm text-slate-500 mb-3 space-x-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
              </div>
              {post.reading_time && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.reading_time} min läsning</span>
                </div>
              )}
            </div>
            
            <Link to={`/blogg/${post.slug}`} className="block">
              <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-primary transition-colors">
                {post.title}
              </h3>
            </Link>
            
            <p className="text-slate-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            
            <Link to={`/blogg/${post.slug}`}>
              <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                Läs mer <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};