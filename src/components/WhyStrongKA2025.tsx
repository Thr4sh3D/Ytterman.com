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
      title: "Nya byggreglerna från juli 2025",
      description: "Från och med juli 2025 skärps kraven på teknisk kontroll och dokumentation enligt PBL. Din kontrollansvarig måste ha ännu starkare teknisk kompetens och kunna hantera mer detaljerad dokumentation."
    },
    {
      icon: Shield,
      title: "Ökat ansvar för byggherren",
      description: "Som byggherre får du större personligt ansvar för att byggprocessen följer alla regler. En erfaren KA skyddar dig mot kostsamma misstag och säkerställer att allt blir rätt från start."
    },
    {
      icon: FileCheck,
      title: "Hårdare krav på kontrollplaner",
      description: "Kontrollplaner måste nu vara ännu mer detaljerade och anpassade efter varje projekts unika risker. En generisk mall räcker inte längre – du behöver en KA som verkligen förstår ditt projekt."
    },
    {
      icon: TrendingUp,
      title: "Snabbare processer = större risk",
      description: "Myndigheterna förväntas hantera ärenden snabbare, vilket betyder mindre tid för korrigeringar. Får du avslag på grund av bristfällig kontrollplan kan det kosta dig månader i förseningar."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-600/10 px-4 py-2 rounded-full mb-6">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-amber-600">Nya regler från juli 2025</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Varför du behöver en{' '}
              <span className="text-gradient">stark kontrollansvarig 2025</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Byggreglerna skärps – och det ställer högre krav på både dig som byggherre och din kontrollansvarig. Här är vad som förändras och varför det spelar roll.
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
                Med 20+ års erfarenhet och kontinuerlig vidareutbildning är jag redo för de nya kraven. Jag hjälper dig navigera regelverket säkert – så att ditt projekt godkänns snabbt och går smidigt från start till mål.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="earth-gradient text-white hover:opacity-90 text-lg px-8 py-6"
              >
                Boka kostnadsfri konsultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};