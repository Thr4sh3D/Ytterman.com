import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-8xl font-bold text-primary mb-8">404</div>
              <h1 className="text-4xl font-bold text-slate-900 mb-6">
                Sidan kunde inte hittas
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Tyvärr kunde vi inte hitta sidan du letar efter. 
                Den kan ha flyttats eller så har länken ändrats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Tillbaka till startsidan
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="px-8 py-4 text-lg"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Gå tillbaka
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Helpful Links */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Kanske letar du efter något av detta?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Våra tjänster", description: "Se alla våra byggtjänster", link: "/tjanster" },
                  { title: "Kontrollansvarig", description: "Läs mer om KA-tjänster", link: "/kontrollansvarig" },
                  { title: "BAS-P", description: "Arbetsmiljösamordning projektering", link: "/bas-p" },
                  { title: "BAS-U", description: "Arbetsmiljösamordning utförande", link: "/bas-u" },
                  { title: "Blogg", description: "Läs våra expertartiklar", link: "/blogg" },
                  { title: "Kontakt", description: "Kom i kontakt med oss", link: "/kontakt" }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {item.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.location.href = item.link}
                    >
                      Gå dit
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NotFound;