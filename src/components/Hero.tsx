import { CheckCircle, MessageCircle, Shield, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroBanner } from './HeroBanner';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hej Tobias! Jag är intresserad av dina tjänster som kontrollansvarig och BAS-P/BAS-U. Kan vi boka ett förutsättningslöst samtal?');
    window.open(`https://wa.me/46761118447?text=${message}`, '_blank');
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
              Certifierad Kontrollansvarig och{' '}
              <span className="text-gradient">BAS U/P</span> – Västernorrland
            </h1>
            
            <div className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <p className="mb-4">
                Jag heter <strong>Tobias Ytterman</strong> och arbetar som certifierad kontrollansvarig enligt 
                plan- och bygglagen (PBL) samt som BAS U/P. Med utgångspunkt i Viksjö (Härnösand) tar jag 
                uppdrag i hela Västernorrland – bland annat i Sundsvall, Sollefteå, Timrå och Kramfors.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-earth mb-8">
              <h2 className="text-xl font-semibold mb-4">Kort om tjänster:</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Kontrollplaner enligt PBL</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Deltagande vid tekniskt samråd</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Arbetsplatsbesök och slutbesked</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>BAS-P (projektering) och BAS-U (utförande)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Rådgivning inför bygglov/bygganmälan</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="earth-gradient text-white hover:opacity-90 text-lg px-8 py-6"
              >
                📞 Kontakta mig för kostnadsfritt samtal
              </Button>
              <Button 
                onClick={openWhatsApp}
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-white text-lg px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Local Areas */}
            <div className="bg-accent/10 p-6 rounded-xl">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-accent" />
                <h3 className="font-semibold">📍 Tillgänglig i:</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <Link 
                  to="/ka-sundsvall" 
                  className="text-accent hover:text-accent/80 hover:underline font-medium"
                >
                  Sundsvall
                </Link>
                <Link 
                  to="/ka-harnosand" 
                  className="text-accent hover:text-accent/80 hover:underline font-medium"
                >
                  Härnösand
                </Link>
                <Link 
                  to="/ka-solleftea" 
                  className="text-accent hover:text-accent/80 hover:underline font-medium"
                >
                  Sollefteå
                </Link>
                <Link 
                  to="/ka-timra" 
                  className="text-accent hover:text-accent/80 hover:underline font-medium"
                >
                  Timrå
                </Link>
                <Link 
                  to="/ka-kramfors" 
                  className="text-accent hover:text-accent/80 hover:underline font-medium"
                >
                  Kramfors
                </Link>
                <div className="text-muted-foreground font-medium">
                  + hela Västernorrland
                </div>
              </div>
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
                  <h3 className="font-bold text-lg mb-1">Lokal Närvaro</h3>
                  <p className="text-xs text-muted-foreground">Viksjö, Härnösand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};