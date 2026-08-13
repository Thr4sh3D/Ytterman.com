import { CheckCircle, MessageCircle, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroBanner } from './HeroBanner';
import { BAS, COMPANY, KA_CERT } from '@/config/company';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hem" className="pt-24 pb-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">{KA_CERT.authorizationLabel}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Kontrollansvarig och BAS för{' '}
              <span className="text-gradient">byggprojekt i {COMPANY.region}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              Certifierad kontrollansvarig enligt PBL och utbildad för uppdrag som {BAS.rolesLabel}.
              Uppdragets roller, omfattning och tidplan bekräftas före start.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              {COMPANY.experienceLabel} i byggbranschen. Förfrågningar tas emot från {COMPANY.region};
              tillgänglighet och resor bekräftas per projekt.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg">Kiwa {KA_CERT.certificateNumber} · {KA_CERT.authorizationLabel}</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg">Fast pris eller tydlig timdebitering</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg">Digital hantering och platsbesök enligt uppdragets upplägg</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg">Tydliga paketpriser för angivna projekttyper</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg">KA och BAS‑P/U kan kombineras med tydlig rollfördelning</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="earth-gradient text-white hover:opacity-90 text-lg px-8 py-6"
              >
                Skicka projektförfrågan
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-white text-lg px-8 py-6"
              >
                Se priser och be om offert
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
                  <h3 className="font-bold text-lg mb-1">Certifierad KA</h3>
                  <p className="text-xs text-muted-foreground">Behörighet N · normal art</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <CheckCircle className="w-6 h-6 text-accent mb-2" />
                  <h3 className="font-bold text-lg mb-1">Fast Pris</h3>
                  <p className="text-xs text-muted-foreground">Tydliga kostnader</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <MessageCircle className="w-6 h-6 text-accent mb-2" />
                  <h3 className="font-bold text-lg mb-1">Tydlig kontakt</h3>
                  <p className="text-xs text-muted-foreground">Svar utifrån aktuell kapacitet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
