import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { BlogCard } from '@/components/BlogCard';
import { BlogCategories } from '@/components/BlogCategories';
import { BlogPost } from '@/entities';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

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
        const publishedPosts = await BlogPost.filter({ published: true }, { sort: '-created_at' });
        setPosts(publishedPosts);
        setFilteredPosts(publishedPosts);
        
        // Extract unique categories
        const uniqueCategories = ['alla', ...new Set(publishedPosts.map(post => post.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
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
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchTerm]);

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Blogg", url: "https://ytterman.com/blogg" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Blogg - Byggexpertis & SEO Tips | Ytterman"
        description="Läs våra expertartiklar om kontrollansvarig, BAS-tjänster, byggprocesser och SEO. Praktiska tips och råd från erfaren byggexpert i Västernorrland."
        keywords="byggblogg, kontrollansvarig tips, BAS-P guide, BAS-U råd, byggprocess, PBL, arbetsmiljö bygg, SEO byggföretag, Västernorrland byggexpert"
        url="https://ytterman.com/blogg"
        breadcrumbs={breadcrumbs}
        organization={true}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Byggexpertis & Branschinsikter
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Få värdefulla tips och expertråd om kontrollansvarig, BAS-tjänster, 
                  byggprocesser och mycket mer från vår erfarna byggexpert.
                </p>
              </div>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Sök artiklar..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
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
                    <p className="mt-4 text-slate-600">Laddar artiklar...</p>
                  </div>
                ) : filteredPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-600 text-lg">
                      {searchTerm || selectedCategory !== 'alla' 
                        ? 'Inga artiklar hittades med dina sökkriterier.' 
                        : 'Inga artiklar publicerade än.'}
                    </p>
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