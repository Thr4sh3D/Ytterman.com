import { Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    'Över 20 års erfarenhet',
    'Certifierad enligt PBL',
    'Fast pris utan dolda kostnader',
    'Kostnadsfri konsultation'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Trygg Byggprocess med{' '}
                <span className="earth-gradient bg-clip-text text-transparent">
                  Ytterman
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare (BAS-P/BAS-U) 
                i Västernorrland. Vi hjälper dig genom hela byggprocessen med professionell 
                kontroll och säkerhetssamordning.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                >
                  Få kostnadsfri offert
                  <ArrowRight className="w-5 h-5 ml-2" />
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
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Våra tjänsteområden
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-slate-700">Sundsvall</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-slate-700">Härnösand</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-slate-700">Sollefteå</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-slate-700">Timrå</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-slate-700">Kramfors</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Kostnadsfri konsultation:</strong> Vi erbjuder alltid en första 
                  konsultation utan kostnad för att bedöma ditt projekts behov.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};