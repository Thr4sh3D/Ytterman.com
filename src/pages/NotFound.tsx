import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
              <h1 className="text-9xl font-bold text-slate-200 mb-4">404</h1>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Sidan hittades inte
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Tyvärr kunde vi inte hitta sidan du letar efter. 
                Den kan ha flyttats eller så finns den inte längre.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="earth-gradient text-white hover:opacity-90"
              >
                <a href="/">
                  <Home className="mr-2 w-5 h-5" />
                  Tillbaka till startsidan
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Gå tillbaka
              </Button>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Behöver du hjälp?
              </h3>
              <p className="text-slate-600 mb-4">
                Kontakta oss om du inte hittar det du letar efter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="tel:+46761118447">
                    Ring 076-111 84 47
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:tobias@ytterman.com">
                    Skicka e-post
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;