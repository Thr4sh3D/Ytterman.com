import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroBanner } from '@/components/HeroBanner';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Kontrollansvarig & BAS-samordnare i{' '}
              <span className="text-gradient">Västernorrland</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Certifierad kontrollansvarig och BAS-samordnare med över 20 års erfarenhet. 
              Säker byggprocess från start till mål.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Få kostnadsfri offert
              </Button>
              <a 
                href="tel:+46761118447"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                076-111 84 47
              </a>
            </div>
          </div>
          <div className="lg:pl-12">
            <HeroBanner />
          </div>
        </div>
      </div>
    </section>
  );
};