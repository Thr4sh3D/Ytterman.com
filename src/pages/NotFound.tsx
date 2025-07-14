import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Button } from '@/components/ui/button';
import { Home, Search, Phone, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const popularPages = [
    { name: "Tjänster", url: "/tjanster", description: "Våra byggtjänster" },
    { name: "Kontrollansvarig", url: "/kontrollansvarig", description: "KA-tjänster" },
    { name: "BAS-P", url: "/bas-p", description: "Arbetsmiljösamordning projektering" },
    { name: "BAS-U", url: "/bas-u", description: "Arbetsmiljösamordning utförande" },
    { name: "Guide", url: "/blogg", description: "Expertguider och tips" },
    { name: "Kontakt", url: "/kontakt", description: "Kom i kontakt med oss" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Sidan hittades inte (404) | Ytterman"
        description="Sidan du söker finns inte. Hitta våra tjänster inom kontrollansvarig, BAS-P, BAS-U och byggkonsultation i Västernorrland."
        keywords="404, sida hittades inte, kontrollansvarig, BAS-P, BAS-U, Västernorrland"
        url="https://ytterman.com/404"
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-8xl font-bold text-slate-300 mb-6">404</div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">
                  Sidan hittades inte
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Sidan du söker finns inte eller har flyttats. 
                  Använd navigationen nedan för att hitta det du letar efter.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button 
                    onClick={() => window.location.href = '/'}
                    className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                  >
                    <Home className="w-5 h-5 mr-2" />
                    Tillbaka till startsidan
                  </Button>
                  <Button 
                    onClick={() => window.history.back()}
                    variant="outline"
                    className="px-8 py-4 text-lg"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Gå tillbaka
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  Populära sidor
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularPages.map((page, index) => (
                    <a
                      key={index}
                      href={page.url}
                      className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow group"
                    >
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {page.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Behöver du hjälp?
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Om du inte hittar det du söker, kontakta oss direkt. 
                Vi hjälper gärna till med dina frågor om kontrollansvarig, 
                BAS-P, BAS-U eller andra byggtjänster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/kontakt'}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Kontakta oss
                </Button>
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold"
                >
                  Ring direkt: 076-111 84 47
                </a>
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