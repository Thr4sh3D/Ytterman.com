import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { BlogPost } from '@/entities';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await BlogPost.filter({ slug, published: true });
        if (posts.length > 0) {
          setPost(posts[0]);
          
          // Fetch related posts from same category
          const related = await BlogPost.filter({ 
            category: posts[0].category, 
            published: true 
          }, { sort: '-created_at', limit: 3 });
          
          setRelatedPosts(related.filter(p => p.id !== posts[0].id));
        } else {
          navigate('/blogg');
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        navigate('/blogg');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug, navigate]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      try {
        await navigator.clipboard.writeText(url);
        toast({
          title: "Länk kopierad!",
          description: "Artikelns länk har kopierats till urklipp.",
        });
      } catch (error) {
        console.log('Error copying to clipboard:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-slate-600">Laddar artikel...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return null;
  }

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Blogg", url: "https://ytterman.com/blogg" },
    { name: post.title, url: `https://ytterman.com/blogg/${post.slug}` }
  ];

  return (
    <>
      <AdvancedSEO 
        title={`${post.title} | Ytterman Blogg`}
        description={post.meta_description || post.excerpt}
        keywords={post.keywords || `${post.category}, byggexpertis, kontrollansvarig, BAS`}
        url={`https://ytterman.com/blogg/${post.slug}`}
        breadcrumbs={breadcrumbs}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          <article>
            {/* Hero Section */}
            <section className="py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <Button 
                    variant="ghost" 
                    onClick={() => navigate('/blogg')}
                    className="mb-6"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Tillbaka till blogg
                  </Button>
                  
                  <div className="mb-6">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                    {post.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>{formatDate(post.created_at)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>{post.reading_time} min läsning</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={sharePost}
                      className="ml-auto"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Dela
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Image */}
            {post.featured_image && (
              <section className="py-8">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto">
                    <img 
                      src={post.featured_image} 
                      alt={post.title}
                      className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </section>
            )}

            {/* Content */}
            <section className="py-12 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                  
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Taggar</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="py-12 bg-slate-50">
                <div className="container mx-auto px-4">
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                      Relaterade artiklar
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                          {relatedPost.featured_image && (
                            <div className="aspect-video overflow-hidden">
                              <img 
                                src={relatedPost.featured_image} 
                                alt={relatedPost.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                              {relatedPost.title}
                            </h3>
                            <p className="text-slate-600 mb-4 line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => navigate(`/blogg/${relatedPost.slug}`)}
                              className="w-full"
                            >
                              Läs mer
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}
          </article>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPostPage;