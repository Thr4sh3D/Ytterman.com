import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Phone } from 'lucide-react';
import { SEO } from '@/components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Sidan hittades inte - Ytterman | Kontrollansvarig Västernorrland"
        description="Sidan du söker finns inte. Gå tillbaka till startsidan för att hitta information om kontrollansvarig och BAS-tjänster i Västernorrland."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="w-20 h-20 earth-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">404</span>
            </div>
            
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              Sidan hittades inte
            </h1>
            
            <p className="text-slate-600 mb-8">
              Sidan du söker finns tyvärr inte. Den kan ha flyttats eller tagits bort.
              Gå tillbaka till startsidan för att hitta information om våra tjänster.
            </p>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={() => window.location.href = '/'}
              className="earth-gradient text-white hover:opacity-90 w-full"
            >
              <Home className="w-4 h-4 mr-2" />
              Gå till startsidan
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => window.history.back()}
              className="w-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Gå tillbaka
            </Button>
            
            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-3">
                Behöver du hjälp? Kontakta oss direkt:
              </p>
              <a 
                href="tel:+46761118447"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>076-111 84 47</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;