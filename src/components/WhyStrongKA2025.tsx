import { AlertTriangle, Shield, FileCheck, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhyStrongKA2025 = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const reasons = [
    {
      icon: AlertTriangle,
      title: "Projektspecifik kontrollplan",
      description: "Kontrollplanen ska utgå från åtgärden, projektets risker och byggnadsnämndens beslut. En generell mall behöver alltid anpassas."
    },
    {
      icon: Shield,
      title: "Byggherren har huvudansvaret",
      description: "Kontrollansvarig stödjer kontrollprocessen men tar inte över byggherrens eller entreprenörernas ansvar. Tydlig rollfördelning minskar missförstånd."
    },
    {
      icon: FileCheck,
      title: "Spårbar dokumentation",
      description: "Kontroller, avvikelser och åtgärder behöver dokumenteras så att kontrollansvarig kan lämna ett sakligt utlåtande inför slutbesked."
    },
    {
      icon: TrendingUp,
      title: "Rätt underlag i rätt skede",
      description: "Kompletta handlingar gör det lättare att hålla projektets kontrollmoment samordnade och minskar risken för sena kompletteringar."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-600/10 px-4 py-2 rounded-full mb-6">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-amber-600">Tydlig kontroll enligt PBL</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Därför behövs en{' '}
              <span className="text-gradient">tydligt avgränsad KA-roll</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Bra kontroll bygger på rätt roller, projektspecifik planering och spårbar dokumentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 earth-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-accent/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Vad betyder det här för dig?
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Med över 20 års erfarenhet hjälper jag dig strukturera KA-uppdraget. Byggnadsnämnden fattar besluten om start- och slutbesked.
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
      </div>
    </section>
  );
};
