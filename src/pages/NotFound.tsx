import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { Home, ArrowLeft, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const popularPages = [
    { title: "Kontrollansvarig", path: "/kontrollansvarig", description: "Certifierad KA-tjänst" },
    { title: "BAS-P", path: "/bas-p", description: "Projekteringssamordning" },
    { title: "BAS-U", path: "/bas-u", description: "Utförandesamordning" },
    { title: "Villor & Småhus", path: "/villor-smahus", description: "Specialiserade tjänster" },
    { title: "Tjänster", path: "/tjanster", description: "Alla våra tjänster" },
    { title: "Blogg", path: "/blogg", description: "Expertråd och tips" }
  ];

  return (
    <>
      <SEO 
        title="Sidan hittades inte - 404 | Ytterman"
        description="Sidan du letar efter finns inte. Hitta rätt sida eller kontakta oss för hjälp med kontrollansvarig och BAS-tjänster i Västernorrland."
        keywords="404, sida ej funnen, kontrollansvarig, BAS, Västernorrland"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* 404 Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-8xl font-bold text-slate-300 mb-8">404</div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">
                  Sidan hittades inte
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Tyvärr kunde vi inte hitta sidan du letar efter. Den kan ha flyttats, 
                  tagits bort eller så skrev du fel adress.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <Link 
                    to="/"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    <Home className="w-5 h-5 mr-2" />
                    Tillbaka till startsidan
                  </Link>
                  <button 
                    onClick={() => window.history.back()}
                    className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors text-lg font-semibold"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Gå tillbaka
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Pages */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                  Populära sidor
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularPages.map((page, index) => (
                    <Link 
                      key={index}
                      to={page.path}
                      className="block p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {page.title}
                      </h3>
                      <p className="text-slate-600">
                        {page.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Help */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Behöver du hjälp?
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Om du inte hittar det du letar efter, tveka inte att kontakta oss. 
                  Vi hjälper gärna till med frågor om kontrollansvarig, BAS eller 
                  andra byggkontrolltjänster.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    076-111 84 47
                  </a>
                  <a 
                    href="mailto:tobias@ytterman.com"
                    className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors text-lg font-semibold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    tobias@ytterman.com
                  </a>
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

export default NotFound;