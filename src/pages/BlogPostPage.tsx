import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { BlogPost } from '@/entities';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, ArrowLeft, Share2, Phone } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: async () => {
      const posts = await BlogPost.filter({ slug, published: true });
      return posts[0] || null;
    },
    enabled: !!slug
  });

  const { data: relatedPosts = [] } = useQuery({
    queryKey: ['relatedPosts', post?.category],
    queryFn: () => BlogPost.filter({ 
      category: post?.category, 
      published: true 
    }, { sort: '-created_at', limit: 3 }),
    enabled: !!post?.category
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled sharing
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      toast.success('Länk kopierad till urklipp!');
    }
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-slate-600">Laddar artikel...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Artikel hittades inte</h1>
            <p className="text-slate-600 mb-8">Den artikel du söker finns inte eller har tagits bort.</p>
            <Button onClick={() => navigate('/blogg')} className="earth-gradient text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tillbaka till bloggen
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const filteredRelatedPosts = relatedPosts.filter(relatedPost => relatedPost.id !== post.id).slice(0, 3);

  return (
    <>
      <SEO 
        title={`${post.title} | Ytterman`}
        description={post.meta_description || post.excerpt}
        keywords={post.keywords}
        canonicalUrl={`https://ytterman.com/blogg/${post.slug}`}
        ogImage={post.featured_image}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.featured_image,
          "author": {
            "@type": "Person",
            "name": post.author || "Tobias Ytterman"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Ytterman",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ytterman.com/logo.png"
            }
          },
          "datePublished": post.created_at,
          "dateModified": post.updated_at,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://ytterman.com/blogg/${post.slug}`
          }
        }}
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Breadcrumb */}
          <section className="py-4 bg-slate-50 border-b">
            <div className="container mx-auto px-4">
              <nav className="text-sm text-slate-600">
                <a href="/" className="hover:text-primary">Hem</a>
                <span className="mx-2">/</span>
                <a href="/blogg" className="hover:text-primary">Blogg</a>
                <span className="mx-2">/</span>
                <span className="text-slate-900">{post.title}</span>
              </nav>
            </div>
          </section>

          {/* Article Header */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Button 
                  onClick={() => navigate('/blogg')}
                  variant="ghost"
                  className="mb-6"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Tillbaka till bloggen
                </Button>

                <div className="flex items-center gap-4 mb-6">
                  {post.category && (
                    <Badge variant="secondary">{post.category}</Badge>
                  )}
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.created_at).toLocaleDateString('sv-SE')}
                  </div>
                  {post.reading_time && (
                    <div className="flex items-center text-slate-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.reading_time} min läsning
                    </div>
                  )}
                  <Button
                    onClick={handleShare}
                    variant="ghost"
                    size="sm"
                    className="ml-auto"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Dela
                  </Button>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  {post.title}
                </h1>

                <p className="text-xl text-slate-600 mb-8">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-slate-500 text-sm mb-8">
                  <User className="w-4 h-4 mr-2" />
                  <span>Av {post.author || 'Tobias Ytterman'}</span>
                </div>

                {post.featured_image && (
                  <div className="mb-12">
                    <img 
                      src={post.featured_image} 
                      alt={post.title}
                      className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div 
                  className="prose prose-lg max-w-none prose-slate prose-headings:text-slate-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Taggar:</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Behöver du hjälp med ditt byggprojekt?
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Som erfaren kontrollansvarig och BAS-samordnare hjälper jag dig genom hela byggprocessen. 
                  Kontakta mig för en kostnadsfri konsultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/kontakt'}
                    className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Kostnadsfri konsultation
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/tjanster'}
                    variant="outline"
                    className="px-8 py-4 text-lg"
                  >
                    Se våra tjänster
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Related Posts */}
          {filteredRelatedPosts.length > 0 && (
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Relaterade artiklar</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {filteredRelatedPosts.map((relatedPost) => (
                      <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                            onClick={() => navigate(`/blogg/${relatedPost.slug}`)}>
                        {relatedPost.featured_image && (
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={relatedPost.featured_image} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            {relatedPost.category && (
                              <Badge variant="outline" className="text-xs">{relatedPost.category}</Badge>
                            )}
                            <div className="flex items-center text-slate-500 text-xs">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(relatedPost.created_at).toLocaleDateString('sv-SE')}
                            </div>
                          </div>
                          <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-slate-600 text-sm line-clamp-3">
                            {relatedPost.excerpt}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPostPage;