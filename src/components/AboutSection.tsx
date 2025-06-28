import { Award, Users, Clock, Shield } from 'lucide-react';

export const AboutSection = () => {
  const stats = [
    {
      icon: Award,
      number: "20+",
      label: "År i branschen",
      description: "Gedigen erfarenhet av byggkontroll"
    },
    {
      icon: Users,
      number: "500+",
      label: "Genomförda projekt",
      description: "Nöjda kunder i hela Västernorrland"
    },
    {
      icon: Clock,
      number: "100%",
      label: "I tid",
      description: "Alla projekt levererade enligt plan"
    },
    {
      icon: Shield,
      number: "Certifierad",
      label: "Kompetens",
      description: "Auktoriserad KA och BAS-samordnare"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Varför välja Ytterman?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Med över 20 års erfarenhet inom byggbranschen erbjuder vi trygg och 
              professionell service för alla typer av byggprojekt i Västernorrland.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-accent mb-2">
                    {stat.label}
                  </div>
                  <p className="text-slate-600">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Din partner för säkra byggprojekt
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Som certifierad kontrollansvarig och BAS-samordnare hjälper vi dig att 
                  navigera genom byggprocessens alla krav och regelverk. Vår lokalkännedom 
                  i Västernorrland kombinerat med gedigen branschexpertis gör oss till den 
                  naturliga partnern för ditt byggprojekt.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-slate-700">Personlig service och nära kontakt</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-slate-700">Djup kunskap om lokala förhållanden</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-slate-700">Snabb handläggning och flexibilitet</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-slate-700">Transparenta priser och tydliga avtal</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 earth-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-3xl">T</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Tobias Ytterman</h4>
                  <p className="text-accent font-semibold mb-4">Certifierad Kontrollansvarig & BAS</p>
                  <p className="text-slate-600 italic">
                    "Mitt mål är att göra byggprocessen så smidig och trygg som möjligt 
                    för alla inblandade. Med rätt kunskap och erfarenhet kan vi undvika 
                    problem och säkerställa kvalitet från start till mål."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};