import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      slug: "vad-ar-kontrollansvarig",
      title: "Vad är en Kontrollansvarig och varför behöver du en?",
      excerpt: "En komplett guide till kontrollansvarigs roll, uppgifter och när du behöver anlita en för ditt byggprojekt.",
      date: "2024-12-15",
      readTime: "5 min",
      category: "Byggkontroll",
      featured: true
    },
    {
      slug: "bas-p-vs-bas-u-skillnader",
      title: "BAS-P vs BAS-U - Skillnader och när du behöver dem",
      excerpt: "Lär dig skillnaderna mellan BAS-P och BAS-U, och förstå när varje typ av byggarbetsmiljösamordnare behövs.",
      date: "2024-12-10",
      readTime: "4 min",
      category: "Arbetsmiljö",
      featured: false
    }
  ];

  const categories = ["Alla", "Byggkontroll", "Arbetsmiljö", "Bygglov", "Tips & Råd"];

  return (
    <>
      <SEO 
        title="Blogg - Expertråd om Byggkontroll & BAS | Ytterman"
        description="Läs våra expertartiklar om kontrollansvarig, BAS, byggkontroll och byggprocesser. Praktiska tips och råd från över 20 års erfarenhet."
        keywords="byggkontroll blogg, kontrollansvarig tips, BAS råd, bygglov guide, Västernorrland byggexpert"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Expertråd & Tips
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Praktiska råd och djupgående artiklar om byggkontroll, kontrollansvarig 
                  och BAS från över 20 års erfarenhet i byggbranschen.
                </p>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-12 bg-white border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-6 py-2 rounded-full transition-colors ${
                      index === 0 
                        ? 'bg-accent text-white' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <section key={index} className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                      Utvald artikel
                    </span>
                  </div>
                  <article className="bg-slate-50 rounded-2xl p-8 md:p-12">
                    <div className="flex items-center space-x-4 text-sm text-slate-500 mb-6">
                      <span className="px-3 py-1 bg-white rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('sv-SE')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                      {post.title}
                    </h2>
                    
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      to={`/blogg/${post.slug}`}
                      className="inline-flex items-center text-accent hover:text-accent/80 font-semibold text-lg transition-colors"
                    >
                      Läs hela artikeln
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </article>
                </div>
              </div>
            </section>
          ))}

          {/* All Posts */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                  Alla artiklar
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post, index) => (
                    <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                          <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('sv-SE')}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-sm text-slate-500">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          
                          <Link 
                            to={`/blogg/${post.slug}`}
                            className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors"
                          >
                            Läs mer
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Få de senaste tipsen direkt i inkorgen
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Prenumerera på vårt nyhetsbrev för att få expertråd, branschuppdateringar 
                och praktiska tips om byggkontroll och BAS.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input 
                  type="email" 
                  placeholder="Din e-postadress"
                  className="flex-1 px-4 py-3 rounded-lg text-slate-900"
                />
                <button className="px-6 py-3 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity font-semibold">
                  Prenumerera
                </button>
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

export default Blog;
