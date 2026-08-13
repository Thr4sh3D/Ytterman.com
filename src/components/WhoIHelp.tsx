import { Home, Building2, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhoIHelp = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const audiences = [
    {
      icon: Home,
      title: "Privatpersoner som bygger villa",
      problem: "Du bygger ditt drömhus men känner dig osäker på regelverket. Du vill inte göra några misstag som kan kosta tid och pengar.",
      solution: "Jag kan ta rollen som kontrollansvarig när projektet ryms inom min behörighet och biträder då dig som byggherre inom det avtalade KA-uppdraget."
    },
    {
      icon: Building2,
      title: "BRF:er och bostadsrättsföreningar",
      description: "Ni planerar renovering eller tillbyggnad av er fastighet och behöver säkerställa att allt sker enligt PBL och arbetsmiljölagen.",
      solution: "KA och BAS-P/BAS-U kan kombineras när kompetens, mandat, kapacitet och rollfördelning är lämpliga och uttryckligen anges i offerten."
    },
    {
      icon: Users,
      title: "Fastighetsägare och byggföretag",
      description: "Ni behöver en pålitlig KA som kan hantera flera projekt samtidigt och som förstår kommersiella krav på tidseffektivitet.",
      solution: "Jag bedömer varje förfrågan mot behörighet N, uppdragets omfattning och aktuell kapacitet. Arbetssätt och dokumentation anpassas till det avtalade uppdraget."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Vem jag hjälper – och{' '}
              <span className="text-gradient">hur jag hjälper dig</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Varje förfrågan bedöms utifrån projektets art, roller, underlag och aktuell kapacitet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {audiences.map((audience, index) => {
              const IconComponent = audience.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent flex flex-col"
                >
                  <div className="w-16 h-16 earth-gradient rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {audience.title}
                  </h3>
                  
                  <div className="space-y-4 flex-grow">
                    <div>
                      <p className="text-sm font-semibold text-amber-600 mb-2">
                        Din utmaning:
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        {audience.problem || audience.description}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-2">
                        Hur jag hjälper:
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        {audience.solution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <button
                      onClick={scrollToContact}
                      className="flex items-center text-accent hover:text-accent/80 font-semibold transition-colors group"
                    >
                      <span>Kontakta mig</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Passar jag för ditt projekt?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Hör gärna av dig även om projektet inte passar perfekt i kategorierna ovan. Skicka grunduppgifterna så bedömer jag om uppdraget är en bra match.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="earth-gradient text-white hover:opacity-90 text-lg px-8 py-6"
            >
              Beskriv projektet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
