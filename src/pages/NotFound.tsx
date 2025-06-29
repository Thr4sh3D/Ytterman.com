import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
              <h2 className="text-3xl font-bold text-slate-700 mb-6">
                Sidan hittades inte
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Tyvärr kunde vi inte hitta sidan du söker. Den kan ha flyttats, 
                tagits bort eller så skrev du fel adress.
              </p>
            </div>
            
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
            
            <div className="mt-12 p-6 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Behöver du hjälp?
              </h3>
              <p className="text-slate-600 mb-4">
                Kontakta oss gärna om du behöver hjälp att hitta rätt information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+46761118447"
                  className="text-primary hover:text-primary/80 font-semibold"
                >
                  📞 076-111 84 47
                </a>
                <a 
                  href="mailto:tobias@ytterman.com"
                  className="text-primary hover:text-primary/80 font-semibold"
                >
                  ✉️ tobias@ytterman.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NotFound;