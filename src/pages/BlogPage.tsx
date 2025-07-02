import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogPost } from '@/entities';
import { Helmet } from 'react-helmet-async';
import { Clock, Tag, User } from 'lucide-react';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await BlogPost.list('-created_at');
        setPosts(fetchedPosts);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(fetchedPosts.map(post => post.category))].filter(Boolean);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  return (
    <>
      <Helmet>
        <title>Blogg | Byggkontroll & Teknisk Konsultation</title>
        <meta name="description" content="Läs våra senaste artiklar om byggkontroll, kontrollansvarig, BAS-P, BAS-U och andra byggtekniska ämnen." />
        <meta name="keywords" content="byggblogg, kontrollansvarig, BAS-P, BAS-U, byggprojekt, teknisk konsultation" />
      </Helmet>
      
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vår blogg</h1>
            <p className="text-xl text-green-50 max-w-2xl">
              Läs våra senaste artiklar om byggkontroll, kontrollansvarig, BAS-P, BAS-U och andra byggtekniska ämnen.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/4">
                {loading ? (
                  <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
                  </div>
                ) : filteredPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-8">
                    {filteredPosts.map((post) => (
                      <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <Link to={`/blogg/${post.slug}`}>
                          <img 
                            src={post.featured_image || "/api/placeholder/600/300"} 
                            alt={post.title} 
                            className="w-full h-48 object-cover"
                          />
                        </Link>
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.reading_time || 5} min läsning</span>
                            {post.category && (
                              <>
                                <span className="mx-2">•</span>
                                <Tag className="w-4 h-4 mr-1" />
                                <span>{post.category}</span>
                              </>
                            )}
                          </div>
                          
                          <Link to={`/blogg/${post.slug}`}>
                            <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                              {post.title}
                            </h2>
                          </Link>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1 text-gray-500" />
                            <span className="text-sm text-gray-500">{post.author || 'BuildControl Team'}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Inga inlägg hittades</h3>
                    <p className="text-gray-600">
                      {selectedCategory 
                        ? `Det finns inga inlägg i kategorin "${selectedCategory}" ännu.` 
                        : 'Det finns inga blogginlägg ännu.'}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="md:w-1/4">
                <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Kategorier</h3>
                  
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory('')}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === '' 
                          ? 'bg-green-100 text-green-700' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      Alla kategorier
                    </button>
                    
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category 
                            ? 'bg-green-100 text-green-700' 
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}