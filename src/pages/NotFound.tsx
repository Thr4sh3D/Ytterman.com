import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <AdvancedSEO 
        title="Sidan hittades inte - 404 | Ytterman"
        description="Sidan du söker finns inte. Gå tillbaka till startsidan eller kontakta oss för hjälp."
        url="https://ytterman.com/404"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-8xl font-bold text-primary mb-8">404</div>
              
              <h1 className="text-4xl font-bold text-slate-900 mb-6">
                Sidan hittades inte
              </h1>
              
              <p className="text-xl text-slate-600 mb-8">
                Sidan du söker finns inte eller har flyttats. 
                Kanske kan vi hjälpa dig att hitta det du letar efter?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Gå till startsidan
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
              
              <div className="mt-12 p-6 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Behöver du hjälp?
                </h3>
                <p className="text-slate-600 mb-4">
                  Kontakta oss gärna om du inte hittar det du söker.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+46761118447"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    076-111 84 47
                  </a>
                  <a 
                    href="mailto:tobias@ytterman.com"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    tobias@ytterman.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default NotFound;