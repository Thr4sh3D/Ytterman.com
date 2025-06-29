import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { BlogPost } from '@/entities';
import { BlogCard } from '@/components/BlogCard';
import { BlogCategories } from '@/components/BlogCategories';
import { Search, Calendar, User, Clock, AlertCircle, RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('alla');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchPosts = async (isRetry = false) => {
    try {
      if (isRetry) {
        setLoading(true);
        setError(null);
      }
      
      const publishedPosts = await BlogPost.filter({ published: true }, '-created_at');
      setPosts(publishedPosts);
      setFilteredPosts(publishedPosts);
      setError(null);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setError(error);
      
      // Provide fallback sample data for demonstration
      const fallbackPosts = [
        {
          id: 'sample-1',
          title: 'Kontrollansvarig - Din guide till en säker byggprocess',
          slug: 'kontrollansvarig-guide-saker-byggprocess',
          excerpt: 'Lär dig allt om kontrollansvarigs roll i byggprocessen. Från kontrollplan till slutbesiktning - vi guidar dig genom hela processen.',
          content: '',
          featured_image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=400&fit=crop',
          category: 'Kontrollansvarig',
          author: 'Tobias Ytterman',
          reading_time: 8,
          created_at: new Date().toISOString(),
          tags: ['kontrollansvarig', 'byggprocess', 'PBL'],
          published: true
        },
        {
          id: 'sample-2',
          title: 'BAS-P vs BAS-U - Skillnader och ansvar',
          slug: 'bas-p-bas-u-skillnader-ansvar',
          excerpt: 'Förstå skillnaderna mellan BAS-P och BAS-U. Vilka ansvarsområden har respektive roll och när behövs de i ditt byggprojekt?',
          content: '',
          featured_image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop',
          category: 'BAS',
          author: 'Tobias Ytterman',
          reading_time: 6,
          created_at: new Date(Date.now() - 86400000).toISOString(),
          tags: ['BAS-P', 'BAS-U', 'arbetsmiljö'],
          published: true
        },
        {
          id: 'sample-3',
          title: 'Bygglov i Västernorrland - Process och tips',
          slug: 'bygglov-vasternorrland-process-tips',
          excerpt: 'Praktiska tips för bygglovsprocessen i Västernorrlands kommuner. Undvik vanliga fallgropar och få ditt bygglov godkänt snabbare.',
          content: '',
          featured_image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
          category: 'Bygglov',
          author: 'Tobias Ytterman',
          reading_time: 10,
          created_at: new Date(Date.now() - 172800000).toISOString(),
          tags: ['bygglov', 'Västernorrland', 'kommun'],
          published: true
        }
      ];
      
      setPosts(fallbackPosts);
      setFilteredPosts(fallbackPosts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== 'alla') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.keywords && post.keywords.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchTerm]);

  const categories = ['alla', ...new Set(posts.map(post => post.category))];

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    fetchPosts(true);
  };

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Guide", url: "https://ytterman.com/blogg" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Guide - Kontrollansvarig & BAS Guide | Ytterman"
        description="Läs våra expertguider om kontrollansvarig, BAS-P, BAS-U, bygglov och arbetsmiljö. Praktiska tips och råd för byggprojekt i Västernorrland."
        keywords="kontrollansvarig guide, BAS-P tips, BAS-U råd, bygglov process, arbetsmiljö byggarbetsplats, byggkontroll, PBL guide, Västernorrland byggprojekt"
        url="https://ytterman.com/blogg"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Guide & Expertråd
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Expertkunskap om kontrollansvarig, BAS och byggprocesser. 
                  Praktiska tips och råd för framgångsrika byggprojekt.
                </p>
                
                {/* Search */}
                <div className="max-w-md mx-auto relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Sök guider..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 py-3 text-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Error Alert */}
          {error && (
            <section className="py-4 bg-white border-b">
              <div className="container mx-auto px-4">
                <Alert className="max-w-4xl mx-auto">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="flex items-center justify-between">
                    <span>
                      Det uppstod ett problem med att ladda guider från servern. 
                      Visar exempel-innehåll istället.
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleRetry}
                      className="ml-4"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Försök igen
                    </Button>
                  </AlertDescription>
                </Alert>
              </div>
            </section>
          )}

          {/* Categories */}
          <section className="py-8 bg-white border-b">
            <div className="container mx-auto px-4">
              <BlogCategories 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                  <p className="mt-4 text-slate-600">Laddar guider...</p>
                </div>
              ) : filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-slate-600">
                    {searchTerm || selectedCategory !== 'alla' 
                      ? 'Inga guider hittades för din sökning.' 
                      : 'Inga guider publicerade än.'}
                  </p>
                  {(searchTerm || selectedCategory !== 'alla') && (
                    <Button 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('alla');
                      }}
                      variant="outline"
                      className="mt-4"
                    >
                      Rensa filter
                    </Button>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* SEO Content Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Expertkunskap för ditt byggprojekt
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Våra guider täcker allt från grundläggande bygglovsprocesser till 
                  avancerade arbetsmiljöfrågor. Få den kunskap du behöver för ett 
                  framgångsrikt byggprojekt i Västernorrland.
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <User className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">Kontrollansvarig</h3>
                    <p className="text-slate-600">Guider om KA-rollen, kontrollplaner och teknisk kontroll</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <Calendar className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">BAS-P & BAS-U</h3>
                    <p className="text-slate-600">Arbetsmiljösamordning under projektering och utförande</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <Clock className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">Byggprocessen</h3>
                    <p className="text-slate-600">Praktiska tips för bygglov, besiktningar och slutbevis</p>
                  </div>
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