import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { BlogPost } from '@/entities';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Search, User, ArrowRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => BlogPost.filter({ published: true }, { sort: '-created_at' })
  });

  const categories = [...new Set(blogPosts.map(post => post.category).filter(Boolean))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <>
      <SEO 
        title="Expertguider & Tips - Byggbranschens Blogg | Ytterman"
        description="Läs våra expertguider om kontrollansvarig, BAS-P, BAS-U, bygglov och byggprocesser. Praktiska tips och råd från erfaren byggkonsult i Västernorrland."
        keywords="byggblogg, kontrollansvarig guide, BAS-P tips, BAS-U råd, bygglov hjälp, byggprocess, Västernorrland byggexpert"
        canonicalUrl="https://ytterman.com/blogg"
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Expertguider & Tips
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Praktiska råd och djupgående guider om kontrollansvarig, BAS, bygglov och byggprocesser. 
                  Baserat på över 20 års erfarenhet i byggbranschen.
                </p>
                
                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
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
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Alla kategorier</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Post */}
          {featuredPost && (
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Utvalda artiklar</h2>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      {featuredPost.featured_image && (
                        <div className="md:w-1/2">
                          <img 
                            src={featuredPost.featured_image} 
                            alt={featuredPost.title}
                            className="w-full h-64 md:h-full object-cover"
                          />
                        </div>
                      )}
                      <div className={`${featuredPost.featured_image ? 'md:w-1/2' : 'w-full'} p-8`}>
                        <div className="flex items-center gap-4 mb-4">
                          {featuredPost.category && (
                            <Badge variant="secondary">{featuredPost.category}</Badge>
                          )}
                          <div className="flex items-center text-slate-500 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(featuredPost.created_at).toLocaleDateString('sv-SE')}
                          </div>
                          {featuredPost.reading_time && (
                            <div className="flex items-center text-slate-500 text-sm">
                              <Clock className="w-4 h-4 mr-1" />
                              {featuredPost.reading_time} min
                            </div>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                          {featuredPost.title}
                        </h3>
                        <p className="text-slate-600 mb-6">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-slate-500 text-sm">
                            <User className="w-4 h-4 mr-1" />
                            {featuredPost.author || 'Tobias Ytterman'}
                          </div>
                          <Button 
                            onClick={() => window.location.href = `/blogg/${featuredPost.slug}`}
                            className="earth-gradient text-white hover:opacity-90"
                          >
                            Läs mer <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </section>
          )}

          {/* Blog Posts Grid */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">
                  {searchTerm || selectedCategory ? 'Sökresultat' : 'Senaste artiklarna'}
                </h2>
                
                {isLoading ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                      <Card key={i} className="animate-pulse">
                        <div className="h-48 bg-slate-200"></div>
                        <CardContent className="p-6">
                          <div className="h-4 bg-slate-200 rounded mb-2"></div>
                          <div className="h-4 bg-slate-200 rounded mb-4"></div>
                          <div className="h-20 bg-slate-200 rounded"></div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : regularPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map((post) => (
                      <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                            onClick={() => window.location.href = `/blogg/${post.slug}`}>
                        {post.featured_image && (
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={post.featured_image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            {post.category && (
                              <Badge variant="outline" className="text-xs">{post.category}</Badge>
                            )}
                            <div className="flex items-center text-slate-500 text-xs">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(post.created_at).toLocaleDateString('sv-SE')}
                            </div>
                          </div>
                          <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-slate-500 text-xs">
                              <User className="w-3 h-3 mr-1" />
                              {post.author || 'Tobias Ytterman'}
                            </div>
                            {post.reading_time && (
                              <div className="flex items-center text-slate-500 text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                {post.reading_time} min
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-600 text-lg">
                      {searchTerm || selectedCategory 
                        ? 'Inga artiklar hittades för din sökning.' 
                        : 'Inga artiklar publicerade än.'}
                    </p>
                    {(searchTerm || selectedCategory) && (
                      <Button 
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedCategory('');
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
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Behöver du personlig rådgivning?
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Våra guider ger dig grundläggande kunskap, men varje byggprojekt är unikt. 
                  Kontakta oss för skräddarsydd rådgivning inom kontrollansvarig och BAS-tjänster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/kontakt'}
                    className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                  >
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
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPage;