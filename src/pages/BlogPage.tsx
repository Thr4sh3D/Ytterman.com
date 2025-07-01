import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOComponents';
import { TechnicalSEO } from '@/components/TechnicalSEO';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Kontrollansvarig - Din guide till en säker byggprocess",
      slug: "kontrollansvarig-guide-saker-byggprocess",
      excerpt: "Allt du behöver veta om kontrollansvarig enligt PBL. Från ansvar och krav till hur du väljer rätt KA för ditt projekt.",
      author: "BuildControl Team",
      date: "2024-01-15",
      category: "Kontrollansvarig",
      readTime: 8,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "BAS-P vs BAS-U - Skillnader och ansvar förklarat",
      slug: "bas-p-bas-u-skillnader-ansvar",
      excerpt: "Förstå skillnaderna mellan BAS-P och BAS-U, när de behövs och vilket ansvar de har i byggprocessen.",
      author: "BuildControl Team",
      date: "2024-01-10",
      category: "BAS",
      readTime: 6,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Bygglov i Västernorrland - Process och tips",
      slug: "bygglov-vasternorrland-process-tips",
      excerpt: "Praktisk guide för bygglovsansökan i Västernorrlands kommuner. Tips för smidig process och vanliga fallgropar.",
      author: "BuildControl Team",
      date: "2024-01-05",
      category: "Bygglov",
      readTime: 10,
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="Blogg - Byggkontroll, BAS och Kontrollansvarig Guide"
        description="Läs våra expertguider om byggkontroll, kontrollansvarig, BAS-P, BAS-U och bygglov. Praktiska tips och råd för ditt byggprojekt i Västernorrland."
        keywords="byggkontroll blogg, kontrollansvarig guide, BAS-P tips, BAS-U råd, bygglov Västernorrland, byggprojekt"
        url="https://buildcontrol.se/blogg"
        type="website"
      />
      <TechnicalSEO />
      
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogg & Guider</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Expertkunskap om byggkontroll, säkerhet och regelverket - direkt från våra specialister
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Search */}
              <div className="mb-12">
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Sök artiklar..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Blog Posts */}
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
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
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}