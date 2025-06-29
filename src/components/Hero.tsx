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
          {/* Main heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Certifierad Kontrollansvarig och BAS U/P – Västernorrland
          </h1>

          {/* Subheading */}
          <h2 className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Kontrollansvarig & Byggarbetsmiljösamordnare BAS-P / BAS-U
          </h2>

          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            Verksam i Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå och hela Västernorrland
          </p>

          {/* Key benefits */}
          <div className="grid md:grid-cols-2 gap-4 mb-10 text-left max-w-3xl mx-auto">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-slate-700">Certifierad och erfaren – med bred och praktisk kompetens</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-slate-700">Fast pris eller tydlig timdebitering</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-slate-700">Digital hantering, platsbesök och snabb återkoppling</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-slate-700">Trygga paket för nybyggnation, ombyggnad eller BRF‑projekt</span>
            </div>
            <div className="flex items-start md:col-span-2">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span className="text-slate-700">Möjlighet att kombinera KA + BAS‑P/U i ett komplett paket</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold group"
            >
              Kontakta mig
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-slate-50"
            >
              <a href="https://wa.me/46761118447" target="_blank" rel="noopener noreferrer" className="flex items-center">
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Stats section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Certifierad & Erfaren</h3>
            <p className="text-slate-600 mb-8">Över 20 års erfarenhet inom bygg och arbetsmiljö</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">KA</div>
                <div className="text-sm text-slate-600">Certifierad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">BAS-P/U</div>
                <div className="text-sm text-slate-600">SBR Medlem</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">Västernorrland</div>
                <div className="text-sm text-slate-600">20+ År</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">Erfarenhet</div>
                <div className="text-sm text-slate-600">inom bygg</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-lg font-semibold text-slate-900 mb-1">Certifierad</div>
                <div className="text-sm text-slate-600">KA, BAS-P & BAS-U</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-slate-900 mb-1">Fast Pris</div>
                <div className="text-sm text-slate-600">Tydliga kostnader</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-slate-900 mb-1">Snabb Kontakt</div>
                <div className="text-sm text-slate-600">Digital hantering</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-slate-900 mb-1">Västernorrland</div>
                <div className="text-sm text-slate-600">Hela regionen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};