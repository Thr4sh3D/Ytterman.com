import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
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

interface RelatedPostsProps {
  posts: BlogPost[];
  currentCategory: string;
}

export const RelatedPosts = ({ posts, currentCategory }: RelatedPostsProps) => {
  if (posts.length === 0) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Fler artiklar inom {currentCategory}
            </h2>
            <p className="text-slate-600">
              Utforska fler expertguider och tips inom samma område
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link to={`/blogg/${post.slug}`}>
                    <span className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                      Läs mer <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blogg">
              <button className="earth-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors">
                Se alla artiklar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};