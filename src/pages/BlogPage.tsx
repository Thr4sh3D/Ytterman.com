import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOComponents';
import { TechnicalSEO } from '@/components/TechnicalSEO';
import { LocalSEO } from '@/components/LocalSEO';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@/entities';
import { blogPosts as staticBlogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Hämta blogginlägg från databasen
  const { data: dbPosts = [], isLoading } = useQuery({
    queryKey: ['published-blog-posts'],
    queryFn: () => BlogPost.filter({ published: true }, '-created_at', 50)
  });

  // Kombinera databas-inlägg med statiska inlägg för demo
  const allPosts = [
    ...dbPosts.map((post: any) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      author: post.author,
      date: post.created_at,
      category: post.category,
      readTime: post.reading_time,
      image: post.featured_image || "/api/placeholder/400/250",
      featured: false,
      keywords: post.keywords?.split(',') || [],
      metaDescription: post.meta_description
    })),
    ...staticBlogPosts.map(post => ({
      ...post,
      date: post.date,
      readTime: post.readTime
    }))
  ];

  const categories = ['Alla', 'Kontrollansvarig', 'BAS', 'Bygglov', 'Säkerhet', 'Regelverk'];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Alla' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Laddar blogginlägg...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Blogg - Byggkontroll, BAS och Kontrollansvarig Guide Västernorrland"
        description="Läs våra expertguider om byggkontroll, kontrollansvarig, BAS-P, BAS-U och bygglov. Praktiska tips och råd för ditt byggprojekt i Västernorrland, Sundsvall, Härnösand."
        keywords="byggkontroll blogg, kontrollansvarig guide Västernorrland, BAS-P tips Sundsvall, BAS-U råd Härnösand, bygglov guide Kramfors"
        url="https://ytterman.com/blogg"
        type="website"
      />
      <TechnicalSEO />
      <LocalSEO />
      
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blogg & Expertguider
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Expertkunskap om byggkontroll, säkerhet och regelverket - direkt från våra specialister 
              med över 15 års erfarenhet i Västernorrland
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Kontrollansvarig
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                BAS-P & BAS-U
              </span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                Bygglov
              </span>
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                Västernorrland
              </span>
            </div>
          </div>
        </section>
        
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Utvalda artiklar
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm ml-4">
                          {post.readTime} min läsning
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        <Link 
                          to={`/blogg/${post.slug}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-2" />
                          <span className="mr-4">{post.author}</span>
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(post.date).toLocaleDateString('sv-SE')}</span>
                        </div>
                        
                        <Link 
                          to={`/blogg/${post.slug}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Läs mer <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Search and Filter */}
              <div className="mb-12">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div className="relative max-w-md w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Sök artiklar om kontrollansvarig, BAS, bygglov..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Tag className="w-5 h-5 text-gray-500" />
                    <div className="flex space-x-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category === 'Alla' ? '' : category)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            (selectedCategory === category) || (selectedCategory === '' && category === 'Alla')
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* All Posts */}
              <div className="space-y-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-center mb-3">
                          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-sm ml-4">
                            {post.readTime} min läsning
                          </span>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                          <Link 
                            to={`/blogg/${post.slug}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="w-4 h-4 mr-2" />
                            <span className="mr-4">{post.author}</span>
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{new Date(post.date).toLocaleDateString('sv-SE')}</span>
                          </div>
                          
                          <Link 
                            to={`/blogg/${post.slug}`}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Läs mer <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Inga artiklar hittades för "{searchTerm}"
                  </p>
                  <p className="text-gray-400 mt-2">
                    Prova att söka på "kontrollansvarig", "BAS-P", "bygglov" eller "Västernorrland"
                  </p>
                </div>
              )}
              
              {/* Newsletter Signup */}
              <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Få de senaste artiklarna direkt i din inkorg
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Prenumerera på vårt nyhetsbrev och få expertråd om byggkontroll, nya regelverk 
                  och praktiska tips för ditt byggprojekt i Västernorrland.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Din e-postadress"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  />
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                    Prenumerera
                  </button>
                </div>
                <p className="text-xs text-blue-200 mt-3">
                  Vi skickar max 2 e-post per månad. Avsluta prenumeration när som helst.
                </p>
              </div>

              {/* SEO Content Section */}
              <div className="mt-16 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Expertguider för byggprojekt i Västernorrland
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Kontrollansvarig & Byggkontroll
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Lär dig allt om kontrollansvarig enligt PBL, kostnader, ansvar och hur du väljer 
                      rätt KA för ditt byggprojekt i Sundsvall, Härnösand eller andra delar av Västernorrland.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Kontrollansvarig kostnad och priser</li>
                      <li>• PBL-krav och certifiering</li>
                      <li>• Kontrollplan och dokumentation</li>
                      <li>• Tekniskt samråd och slutsamråd</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      BAS-P & BAS-U Arbetsmiljö
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Få expertkunskap om byggarbetsmiljösamordnare för planering och utförande. 
                      Praktiska guider för AFS 1999:3 och arbetsmiljöplaner.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• BAS-P vs BAS-U skillnader</li>
                      <li>• Arbetsmiljöplan mallar</li>
                      <li>• Skyddsronder och kontroller</li>
                      <li>• AFS 1999:3 krav och tillämpning</li>
                    </ul>
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