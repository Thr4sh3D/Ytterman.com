import { ArrowDown, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    "Över 20 års erfarenhet",
    "Certifierad KA & BAS",
    "Fast pris - inga överraskningar",
    "Verksam i Västernorrland"
  ];

  return (
    <section id="hem" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Kontrollansvarig & BAS
            <span className="block text-accent">i Västernorrland</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Trygg byggprocess med erfaren kontrollansvarig och byggarbetsmiljösamordnare. 
            Fast pris och personlig service för ditt projekt.
          </p>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 bg-white/80 rounded-lg p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium text-sm lg:text-base">{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="earth-gradient text-white hover:opacity-90 px-8 py-3 text-lg"
            >
              Få kostnadsfri konsultation
            </Button>
            <Button 
              onClick={() => window.open('tel:+46761118447')}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ring direkt
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <button 
              onClick={() => scrollToSection('tjanster')}
              className="animate-bounce p-2 rounded-full hover:bg-white/50 transition-colors"
            >
              <ArrowDown className="w-6 h-6 text-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};