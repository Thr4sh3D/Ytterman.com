import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { BlogCard } from '@/components/BlogCard';
import { BlogCategories } from '@/components/BlogCategories';
import { BlogPost } from '@/entities';
import { Search } from 'lucide-react';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categories, setCategories] = useState(['alla']);
  const [selectedCategory, setSelectedCategory] = useState('alla');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const publishedPosts = await BlogPost.filter({ published: true }, '-created_at');
        setPosts(publishedPosts);
        setFilteredPosts(publishedPosts);
        
        // Extract unique categories
        const uniqueCategories = ['alla', ...new Set(publishedPosts.map(post => post.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Set empty arrays as fallback
        setPosts([]);
        setFilteredPosts([]);
      } finally {
        setLoading(false);
      }
    };

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
        post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchTerm]);

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Guider", url: "https://ytterman.com/blogg" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Byggguider & Tips - Kontrollansvarig & BAS | Ytterman"
        description="Läs våra expertguider om kontrollansvarig, BAS-P, BAS-U och byggprocesser. Praktiska tips och råd för ditt byggprojekt i Västernorrland."
        keywords="byggguider, kontrollansvarig guide, BAS-P tips, BAS-U råd, byggprocess, PBL, arbetsmiljö, Västernorrland"
        url="https://ytterman.com/blogg"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Byggguider & Expertråd
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Praktiska guider och tips om kontrollansvarig, BAS och byggprocesser. 
                  Lär dig av vår expertis och gör ditt byggprojekt säkrare och smidigare.
                </p>
              </div>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Search */}
                <div className="relative mb-8">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Sök i guider..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Categories */}
                <BlogCategories
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategorySelect={setSelectedCategory}
                />
              </div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-12 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Inga guider hittades
                    </h3>
                    <p className="text-slate-600 mb-8">
                      {searchTerm || selectedCategory !== 'alla' 
                        ? 'Prova att ändra dina sökkriterier eller välj en annan kategori.'
                        : 'Vi arbetar på att publicera fler guider. Kom tillbaka snart!'
                      }
                    </p>
                    {(searchTerm || selectedCategory !== 'alla') && (
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedCategory('alla');
                        }}
                        className="text-primary hover:text-primary/80 font-semibold"
                      >
                        Visa alla guider
                      </button>
                    )}
                  </div>
                )}
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