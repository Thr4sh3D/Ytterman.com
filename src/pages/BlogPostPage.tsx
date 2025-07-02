import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowLeft, Share2, User } from 'lucide-react';
import { BlogPost } from '@/entities';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { OptimizedImage } from '@/components/OptimizedImage';
import { BlogContent } from '@/components/BlogContent';
import { RelatedPosts } from '@/components/RelatedPosts';
import { CanonicalUrl } from '@/components/CanonicalUrl';

export default function BlogPostPage() {
  const { slug } = useParams();
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
          }, '-created_at', 4);
          
          // Remove current post from related posts
          setRelatedPosts(related.filter(p => p.id !== posts[0].id).slice(0, 3));
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast here
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-slate-200 rounded w-1/2 mb-8"></div>
              <div className="h-64 bg-slate-200 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-slate-200 rounded"></div>
                <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                <div className="h-4 bg-slate-200 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Artikeln hittades inte</h1>
            <p className="text-slate-600 mb-8">Den artikel du söker efter finns inte eller har tagits bort.</p>
            <Link to="/blogg">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till bloggen
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Hem', href: '/' },
    { label: 'Blogg', href: '/blogg' },
    { label: post.title, href: `/blogg/${post.slug}` }
  ];

  return (
    <>
      <Helmet>
        <title>{post.title} | SEO & Bygglovshjälp</title>
        <meta name="description" content={post.meta_description || post.excerpt} />
        <meta name="keywords" content={post.keywords} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://ytterman.com/blogg/${post.slug}`} />
        {post.featured_image && (
          <meta property="og:image" content={post.featured_image} />
        )}
        <meta property="article:published_time" content={post.created_at} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.featured_image,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "SEO & Bygglovshjälp"
            },
            "datePublished": post.created_at,
            "dateModified": post.updated_at || post.created_at,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://ytterman.com/blogg/${post.slug}`
            }
          })}
        </script>
      </Helmet>
      
      {/* Add canonical URL for blog post */}
      <CanonicalUrl path={`/blogg/${post.slug}`} />

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
          </section>

          <article className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Article Header */}
                <header className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Link to="/blogg">
                      <Button variant="outline" size="sm">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Tillbaka
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" onClick={handleShare}>
                      <Share2 className="w-4 h-4 mr-2" />
                      Dela
                    </Button>
                  </div>

                  {post.category && (
                    <span className="inline-block bg-primary text-white px-3 py-1 rounded text-sm font-medium mb-4">
                      {post.category}
                    </span>
                  )}

                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    {post.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
                    </div>
                    
                    {post.reading_time && (
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>{post.reading_time} min läsning</span>
                      </div>
                    )}
                    
                    {post.author && (
                      <div className="flex items-center">
                        <User className="w-5 h-5 mr-2" />
                        <span>{post.author}</span>
                      </div>
                    )}
                  </div>

                  {post.excerpt && (
                    <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                      {post.excerpt}
                    </p>
                  )}
                </header>

                {/* Featured Image */}
                {post.featured_image && (
                  <div className="mb-12">
                    <OptimizedImage
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
                      width={800}
                      height={400}
                      priority
                    />
                  </div>
                )}

                {/* Article Content */}
                <div className="prose prose-lg prose-slate max-w-none">
                  <BlogContent content={post.content} />
                </div>

                {/* Article Footer */}
                <footer className="mt-12 pt-8 border-t border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags && post.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="outline" onClick={handleShare}>
                      <Share2 className="w-4 h-4 mr-2" />
                      Dela artikel
                    </Button>
                  </div>
                </footer>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <RelatedPosts posts={relatedPosts} currentCategory={post.category} />
          )}
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
