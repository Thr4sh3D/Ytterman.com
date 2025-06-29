import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-100/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 mb-8">
            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-slate-700">
              Certifierad Kontrollansvarig & BAS
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Trygg byggprocess med
            <span className="earth-gradient bg-clip-text text-transparent block">
              Ytterman
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare med över 20 års 
            erfarenhet. Vi guidar dig genom hela byggprocessen i Västernorrland.
          </p>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-slate-700">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span>Fast pris</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span>Snabb hantering</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span>Personlig service</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold group"
            >
              Få kostnadsfri konsultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-slate-50"
            >
              <a href="tel:+46761118447" className="flex items-center">
                <Phone className="mr-2 w-5 h-5" />
                076-111 84 47
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4">Verksam i hela Västernorrland</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
              <span>Sundsvall</span>
              <span>•</span>
              <span>Härnösand</span>
              <span>•</span>
              <span>Sollefteå</span>
              <span>•</span>
              <span>Timrå</span>
              <span>•</span>
              <span>Kramfors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};