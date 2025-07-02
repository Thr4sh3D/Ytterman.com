import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '@/entities';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { OptimizedImage } from '@/components/OptimizedImage';
import { formatDate } from '@/lib/utils';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const posts = await BlogPost.filter({ slug: slug });
        
        if (posts.length === 0) {
          setError('Inlägget kunde inte hittas');
          return;
        }
        
        setPost(posts[0]);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Ett fel uppstod när inlägget skulle hämtas');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const breadcrumbItems = [
    { label: 'Hem', href: '/' },
    { label: 'Blogg', href: '/blogg' },
    { label: post?.title || 'Inlägg', href: `/blogg/${slug}` }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="py-4">
            <Skeleton className="h-6 w-64" />
          </div>
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-10 w-3/4 mb-4" />
            <div className="flex gap-4 mb-6">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-32" />
            </div>
            <Skeleton className="h-64 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
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
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Inlägget kunde inte hittas</h1>
            <p className="text-slate-600 mb-8">{error || 'Inlägget du söker finns inte eller har tagits bort.'}</p>
            <Link to="/blogg">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Tillbaka till bloggen
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Bygglovshjälp & Kontrollansvar</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yoursite.com/blogg/${post.slug}`} />
        {post.featured_image && <meta property="og:image" content={post.featured_image} />}
        <link rel="canonical" href={`https://yoursite.com/blogg/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.featured_image,
            "datePublished": post.created_at,
            "dateModified": post.updated_at,
            "author": {
              "@type": "Person",
              "name": post.author || "Expert"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Bygglovshjälp & Kontrollansvar",
              "logo": {
                "@type": "ImageObject",
                "url": "https://yoursite.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://yoursite.com/blogg/${post.slug}`
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
          </section>
          
          <article className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
              {post.category && (
                <Link to={`/blogg?category=${post.category}`} className="inline-block mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </Link>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-sm text-slate-500 mb-8 gap-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
                </div>
                
                {post.reading_time && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.reading_time} min läsning</span>
                  </div>
                )}
                
                {post.author && (
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                )}
              </div>
              
              {post.featured_image && (
                <div className="mb-8 rounded-xl overflow-hidden">
                  <OptimizedImage
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-auto"
                    width={800}
                    height={450}
                    priority
                  />
                </div>
              )}
              
              <div 
                className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-lg prose-blockquote:border-primary/50 prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-12 pt-8 border-t border-slate-200">
                <Link to="/blogg">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Tillbaka till alla artiklar
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}