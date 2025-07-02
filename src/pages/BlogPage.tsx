import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  // Placeholder blog posts for demonstration
  const blogPosts = [
    {
      id: 1,
      title: "Guide: Vad är en kontrollansvarig och när behöver du en?",
      excerpt: "Allt du behöver veta om kontrollansvarig enligt PBL. Vi förklarar rollen, när den behövs och vad som ingår i tjänsten.",
      slug: "guide-kontrollansvarig-pbl",
      featured_image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop",
      category: "Kontrollansvarig",
      reading_time: 5,
      published_date: "2024-01-15",
      author: "Tobias Ytterman"
    },
    {
      id: 2,
      title: "BAS-P vs BAS-U: Skillnader och när du behöver vilken",
      excerpt: "Förvirrad över skillnaden mellan BAS-P och BAS-U? Vi förklarar rollerna och hjälper dig välja rätt för ditt projekt.",
      slug: "bas-p-vs-bas-u-skillnader",
      featured_image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop",
      category: "BAS",
      reading_time: 7,
      published_date: "2024-01-10",
      author: "Tobias Ytterman"
    },
    {
      id: 3,
      title: "Bygglovsprocessen i Västernorrland: En komplett guide",
      excerpt: "Steg-för-steg guide genom bygglovsprocessen i Sundsvall, Härnösand och övriga Västernorrland.",
      slug: "bygglovsprocessen-vasternorrland-guide",
      featured_image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
      category: "Bygglov",
      reading_time: 8,
      published_date: "2024-01-05",
      author: "Tobias Ytterman"
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Blogg", url: "https://ytterman.com/blogg" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Blogg - Expertguider om Kontrollansvarig & BAS | Ytterman"
        description="Läs expertguider om kontrollansvarig, BAS-P, BAS-U och byggprocessen. Praktiska tips och råd från över 20 års erfarenhet i Västernorrland."
        keywords="kontrollansvarig guide, BAS-P tips, BAS-U råd, bygglov Västernorrland, byggprocess, PBL, AML"
        url="https://ytterman.com/blogg"
        breadcrumbs={breadcrumbs}
        organization={true}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Breadcrumbs */}
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Expertguider & Tips
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Läs våra expertguider om kontrollansvarig, BAS-P, BAS-U och byggprocessen. 
                  Praktiska tips och råd baserade på över 20 års erfarenhet.
                </p>
              </div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <article key={post.id} className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                      <OptimizedImage
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                        width={400}
                        height={250}
                      />
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                          <span className="bg-primary text-white px-2 py-1 rounded text-xs">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.reading_time} min</span>
                          </div>
                        </div>
                        
                        <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                          {post.title}
                        </h2>
                        
                        <p className="text-slate-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-slate-500">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <Button 
                            onClick={() => window.location.href = `/blogg/${post.slug}`}
                            variant="outline"
                            size="sm"
                          >
                            Läs mer
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Få de senaste guiderna
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Prenumerera på vårt nyhetsbrev för att få de senaste guiderna och 
                  tipsen om kontrollansvarig, BAS och byggprocessen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Din e-postadress"
                    className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="earth-gradient text-white hover:opacity-90 px-6 py-3">
                    Prenumerera
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

export default BlogPage;