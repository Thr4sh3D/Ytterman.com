import { CheckCircle, MessageCircle, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroBanner } from './HeroBanner';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/46761118447?text=Hej! Jag är intresserad av dina tjänster som kontrollansvarig och BAS.', '_blank');
  };

  return (
    <section id="hem" className="pt-24 pb-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">Certifierad & Erfaren</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Bygglov och slutbesked utan strul – certifierad{' '}
              <span className="text-gradient">Kontrollansvarig & BAS i Västernorrland</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              Jag hjälper dig med kontrollansvar, BAS P/BAS U och kontakten med kommunen så att ditt projekt går igenom smidigt och i tid.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Verksam i Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå och hela Västernorrland – över 20 års erfarenhet från byggsektorn
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg">Certifierad och erfaren – med bred och praktisk kompetens</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg">Fast pris eller tydlig timdebitering</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg">Digital hantering, platsbesök och snabb återkoppling</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg">Trygga paket för nybyggnation, ombyggnad eller BRF‑projekt</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg">Möjlighet att kombinera KA + BAS‑P/U i ett komplett paket</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="earth-gradient text-white hover:opacity-90 text-lg px-8 py-6"
              >
                Boka kostnadsfri genomgång
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-white text-lg px-8 py-6"
              >
                Få fast prisförslag
              </Button>
            </div>
          </div>

          {/* Right Column - Banner and Visual Elements */}
          <div className="animate-slide-up">
            <div className="space-y-8">
              {/* Hero Banner */}
              <HeroBanner />
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <Award className="w-6 h-6 text-accent mb-2" />
                  <h3 className="font-bold text-lg mb-1">20+ År</h3>
                  <p className="text-xs text-muted-foreground">Erfarenhet inom bygg</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <Shield className="w-6 h-6 text-accent mb-2" />
                  <h3 className="font-bold text-lg mb-1">Certifierad</h3>
                  <p className="text-xs text-muted-foreground">KA, BAS-P & BAS-U</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <CheckCircle className="w-6 h-6 text-accent mb-2" />
                  <h3 className="font-bold text-lg mb-1">Fast Pris</h3>
                  <p className="text-xs text-muted-foreground">Tydliga kostnader</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <MessageCircle className="w-6 h-6 text-accent mb-2" />
                  <h3 className="font-bold text-lg mb-1">Snabb Kontakt</h3>
                  <p className="text-xs text-muted-foreground">Digital hantering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};