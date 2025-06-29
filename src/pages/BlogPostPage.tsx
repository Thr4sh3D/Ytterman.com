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
import { useToast } from '@/hooks/use-toast';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!slug) {
          setError(true);
          return;
        }

        const posts = await BlogPost.filter({ slug, published: true });
        if (posts.length > 0) {
          setPost(posts[0]);
        } else {
          // Fallback sample post for demo
          const samplePost = {
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
            updated_at: new Date().toISOString(),
            tags: ['kontrollansvarig', 'byggprocess', 'PBL'],
            published: true,
            meta_description: 'Komplett guide om kontrollansvarigs roll i byggprocessen. Lär dig om kontrollplan, teknisk kontroll och slutbevis.',
            keywords: 'kontrollansvarig, KA, byggprocess, kontrollplan, teknisk kontroll, PBL'
          };
          
          if (samplePost.slug === slug) {
            setPost(samplePost);
          } else {
            setError(true);
          }
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError(true);
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

  const sharePost = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Länk kopierad!",
          description: "Länken har kopierats till urklipp.",
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Fallback to copying URL
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Länk kopierad!",
          description: "Länken har kopierats till urklipp.",
        });
      } catch (clipboardError) {
        toast({
          title: "Kunde inte dela",
          description: "Försök kopiera länken manuellt.",
          variant: "destructive"
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-slate-600">Laddar guide...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Guide hittades inte</h1>
            <p className="text-slate-600 mb-8">Den guide du söker finns inte eller har tagits bort.</p>
            <Button onClick={() => window.location.href = '/blogg'}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tillbaka till guiderna
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
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
        keywords={post.keywords}
        url={`https://ytterman.com/blogg/${post.slug}`}
        image={post.featured_image}
        type="article"
        article={{
          publishedTime: post.created_at,
          modifiedTime: post.updated_at || post.created_at,
          author: post.author,
          section: post.category,
          tags: post.tags
        }}
        breadcrumbs={breadcrumbs}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          <article className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Back button */}
                <Button 
                  variant="ghost" 
                  onClick={() => window.location.href = '/blogg'}
                  className="mb-8 hover:bg-slate-100"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Tillbaka till guiderna
                </Button>

                {/* Article header */}
                <header className="mb-8">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.created_at)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.reading_time} min läsning</span>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    {post.title}
                  </h1>
                  
                  <p className="text-xl text-slate-600 mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-slate-600">
                      <User className="w-5 h-5" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    
                    <Button variant="outline" size="sm" onClick={sharePost}>
                      <Share2 className="w-4 h-4 mr-2" />
                      Dela
                    </Button>
                  </div>
                </header>

                {/* Featured image */}
                {post.featured_image && (
                  <div className="mb-8 rounded-xl overflow-hidden">
                    <img 
                      src={post.featured_image} 
                      alt={post.title}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Article content */}
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <h3 className="text-sm font-medium text-slate-900 mb-3">Taggar:</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover:bg-slate-200 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>

          {/* Related posts */}
          <RelatedPosts currentPost={post} />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPostPage;