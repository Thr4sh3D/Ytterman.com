import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { BlogPost } from '@/entities';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError('Ingen slug angiven');
        setLoading(false);
        return;
      }

      try {
        const posts = await BlogPost.filter({ slug, published: true });
        if (posts.length > 0) {
          setPost(posts[0]);
        } else {
          // Fallback for sample posts
          const samplePosts = [
            {
              id: 'sample-1',
              title: 'Kontrollansvarig - Din guide till en säker byggprocess',
              slug: 'kontrollansvarig-guide-saker-byggprocess',
              excerpt: 'Lär dig allt om kontrollansvarigs roll i byggprocessen. Från kontrollplan till slutbesiktning - vi guidar dig genom hela processen.',
              content: `
                <h2>Vad är en kontrollansvarig?</h2>
                <p>En kontrollansvarig (KA) är en certifierad person som enligt Plan- och bygglagen (PBL) ansvarar för att utföra teknisk kontroll under byggprocessen. Rollen är avgörande för att säkerställa att byggprojektet följer gällande regelverk och bygglovsvillkor.</p>
                
                <h2>Kontrollansvarigs huvuduppgifter</h2>
                <ul>
                  <li>Upprätta kontrollplan innan byggstart</li>
                  <li>Utföra teknisk kontroll enligt kontrollplanen</li>
                  <li>Dokumentera alla kontroller och avvikelser</li>
                  <li>Utfärda slutbevis när projektet är klart</li>
                </ul>
                
                <h2>När behövs en kontrollansvarig?</h2>
                <p>Kontrollansvarig krävs för de flesta byggprojekt som:</p>
                <ul>
                  <li>Kräver bygglov</li>
                  <li>Omfattas av anmälningsplikt</li>
                  <li>Är större än 50 kvm</li>
                  <li>Påverkar bärande konstruktioner</li>
                </ul>
                
                <h2>Kontrollplanen - grunden för allt</h2>
                <p>Kontrollplanen är det dokument som styr hela kontrollprocessen. Den innehåller:</p>
                <ul>
                  <li>Vilka kontroller som ska utföras</li>
                  <li>När kontrollerna ska genomföras</li>
                  <li>Vem som ansvarar för varje kontroll</li>
                  <li>Dokumentationskrav</li>
                </ul>
              `,
              featured_image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=400&fit=crop',
              category: 'Kontrollansvarig',
              author: 'Tobias Ytterman',
              reading_time: 8,
              created_at: new Date().toISOString(),
              tags: ['kontrollansvarig', 'byggprocess', 'PBL'],
              published: true,
              meta_description: 'Komplett guide om kontrollansvarigs roll i byggprocessen. Lär dig om kontrollplan, teknisk kontroll och slutbevis.',
              keywords: 'kontrollansvarig, KA, byggprocess, kontrollplan, teknisk kontroll, PBL'
            }
          ];
          
          const foundPost = samplePosts.find(p => p.slug === slug);
          if (foundPost) {
            setPost(foundPost);
          } else {
            setError('Blogginlägget hittades inte');
          }
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError('Fel vid hämtning av blogginlägg');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sv-SE', {
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
      alert('Länk kopierad till urklipp!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-slate-600">Laddar blogginlägg...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return <Navigate to="/blogg" replace />;
  }

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Guide", url: "https://ytterman.com/blogg" },
    { name: post.title, url: `https://ytterman.com/blogg/${post.slug}` }
  ];

  return (
    <>
      <AdvancedSEO 
        title={`${post.title} | Ytterman Guide`}
        description={post.meta_description || post.excerpt}
        keywords={post.keywords || ''}
        url={`https://ytterman.com/blogg/${post.slug}`}
        breadcrumbs={breadcrumbs}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-12 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Button 
                  variant="ghost" 
                  asChild
                  className="mb-6"
                >
                  <a href="/blogg">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Tillbaka till guider
                  </a>
                </Button>

                <div className="mb-6">
                  <Badge variant="secondary" className="mb-4">
                    {post.category}
                  </Badge>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    {post.title}
                  </h1>
                  
                  <p className="text-xl text-slate-600 mb-8">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(post.created_at)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.reading_time} min läsning
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleShare}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Dela
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          {post.featured_image && (
            <section className="py-8 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <img 
                    src={post.featured_image} 
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Content */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div 
                  className="prose prose-lg max-w-none prose-slate prose-headings:text-slate-900 prose-a:text-primary prose-strong:text-slate-900"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Taggar</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string, index: number) => (
                        <Badge key={index} variant="outline">
                          {tag}
                        </Badge>
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Behöver du hjälp med ditt byggprojekt?
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Kontakta oss för en kostnadsfri konsultation och få professionell hjälp 
                  med kontrollansvarig och BAS-tjänster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    size="lg" 
                    className="earth-gradient text-white hover:opacity-90"
                  >
                    <a href="/#kontakt">
                      Få kostnadsfri konsultation
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    asChild
                  >
                    <a href="tel:+46761118447">
                      Ring 076-111 84 47
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPostPage;