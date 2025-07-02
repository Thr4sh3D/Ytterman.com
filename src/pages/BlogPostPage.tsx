import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogPost } from '@/entities';
import { Helmet } from 'react-helmet-async';
import { Clock, Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        
        // Find post by slug
        const posts = await BlogPost.filter({ slug });
        
        if (posts && posts.length > 0) {
          const currentPost = posts[0];
          setPost(currentPost);
          
          // Fetch related posts from the same category
          if (currentPost.category) {
            const related = await BlogPost.filter({ category: currentPost.category });
            setRelatedPosts(related.filter(p => p.id !== currentPost.id).slice(0, 3));
          }
        } else {
          setError('Inlägget kunde inte hittas');
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Ett fel uppstod vid hämtning av inlägget');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{error || 'Inlägget kunde inte hittas'}</h1>
          <Link 
            to="/blogg" 
            className="inline-flex items-center text-green-600 hover:text-green-700"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Tillbaka till bloggen
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Byggkontroll & Teknisk Konsultation</title>
        <meta name="description" content={post.meta_description || post.excerpt} />
        <meta name="keywords" content={post.keywords} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.meta_description || post.excerpt} />
        <meta property="og:image" content={post.featured_image} />
        <meta property="og:type" content="article" />
      </Helmet>
      
      <Header />
      
      <main>
        <article>
          {/* Hero section with featured image */}
          <div className="relative h-[40vh] md:h-[50vh] bg-gray-900">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: `url(${post.featured_image || "/api/placeholder/1200/600"})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-end pb-12">
              <div className="max-w-3xl">
                {post.category && (
                  <div className="inline-block bg-green-600 text-white px-3 py-1 text-sm font-medium rounded-md mb-4">
                    {post.category}
                  </div>
                )}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center text-gray-300 gap-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author || 'BuildControl Team'}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{format(new Date(post.created_at), 'dd MMM yyyy')}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.reading_time || 5} min läsning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>
                
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string, index: number) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="md:w-1/3">
                <div className="sticky top-24">
                  {/* Author info */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Om författaren</h3>
                    <div className="flex items-center">
                      <img 
                        src="/api/placeholder/60/60" 
                        alt={post.author || 'BuildControl Team'} 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{post.author || 'BuildControl Team'}</h4>
                        <p className="text-sm text-gray-600">Byggexpert</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Related posts */}
                  {relatedPosts.length > 0 && (
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Relaterade inlägg</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost) => (
                          <div key={relatedPost.id} className="flex items-start">
                            <img 
                              src={relatedPost.featured_image || "/api/placeholder/80/80"} 
                              alt={relatedPost.title} 
                              className="w-16 h-16 object-cover rounded-md mr-3"
                            />
                            <div>
                              <Link 
                                to={`/blogg/${relatedPost.slug}`}
                                className="font-medium text-gray-900 hover:text-green-600 transition-colors line-clamp-2"
                              >
                                {relatedPost.title}
                              </Link>
                              <div className="text-xs text-gray-500 mt-1">
                                {format(new Date(relatedPost.created_at), 'dd MMM yyyy')}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Back to blog */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-6 text-center">
            <Link 
              to="/blogg" 
              className="inline-flex items-center bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Tillbaka till bloggen
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}