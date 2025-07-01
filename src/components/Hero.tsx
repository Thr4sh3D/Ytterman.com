import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Certifierad Kontrollansvarig & BAS i Västernorrland
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Över 20 års erfarenhet av byggkontroll och arbetsmiljösamordning. 
            Vi hjälper dig genom hela byggprocessen med trygghet och kvalitet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const element = document.getElementById('kontakt');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Få kostnadsfri offert
            </Button>
            <a 
              href="tel:+46761118447"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              076-111 84 47
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};