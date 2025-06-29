import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { BlogPost } from '@/entities';
import { RelatedPosts } from '@/components/RelatedPosts';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await BlogPost.filter({ slug, published: true });
        if (posts.length > 0) {
          setPost(posts[0]);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Could add a toast notification here
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-slate-600">Laddar artikel...</p>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-slate-900 mb-6">
                Artikeln hittades inte
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Tyvärr kunde vi inte hitta den artikel du söker.
              </p>
              <Button onClick={() => window.location.href = '/blogg'}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till guiderna
              </Button>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Guider", url: "https://ytterman.com/blogg" },
    { name: post.title, url: `https://ytterman.com/blogg/${post.slug}` }
  ];

  return (
    <>
      <AdvancedSEO 
        title={`${post.title} | Ytterman`}
        description={post.meta_description || post.excerpt}
        keywords={post.keywords || post.tags?.join(', ')}
        url={`https://ytterman.com/blogg/${post.slug}`}
        image={post.featured_image}
        type="article"
        article={{
          publishedTime: post.created_at,
          modifiedTime: post.updated_at,
          author: post.author,
          section: post.category,
          tags: post.tags
        }}
        breadcrumbs={breadcrumbs}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          <article>
            <div className="container mx-auto px-4 py-12">
              <div className="max-w-4xl mx-auto">
                <Button 
                  variant="ghost" 
                  onClick={() => window.location.href = '/blogg'}
                  className="mb-8"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Tillbaka till guiderna
                </Button>

                <header className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={sharePost}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Dela
                    </Button>
                  </div>

                  <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                    {post.title}
                  </h1>

                  <p className="text-xl text-slate-600 mb-8">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center space-x-6 text-slate-500 mb-8">
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
                  </div>

                  {post.featured_image && (
                    <div className="mb-8">
                      <img 
                        src={post.featured_image} 
                        alt={post.title}
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                </header>

                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {post.tags && post.tags.length > 0 && (
                  <footer className="mt-12 pt-8 border-t border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Taggar:</h3>
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
                  </footer>
                )}
              </div>
            </div>
          </article>

          <RelatedPosts currentPost={post} />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPostPage;