import { Button } from '@/components/ui/button';
import { Shield, Award, Clock, Users } from 'lucide-react';

export const About = () => {
  return (
    <section id="om-oss" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Om Ytterman
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Ytterman grundades med visionen att erbjuda professionella tjänster inom 
                  kontrollansvarig och byggarbetsmiljösamordning i Västernorrland. Med över 
                  20 års erfarenhet i byggbranschen har vi den expertis som krävs för att 
                  säkerställa en trygg och effektiv byggprocess.
                </p>
                <p className="mb-6">
                  Vi är certifierade enligt Plan- och bygglagen (PBL) och Arbetsmiljölagen (AML) 
                  och arbetar med allt från mindre privata projekt till större kommersiella byggnationer. 
                  Vår styrka ligger i vår lokala förankring och djupa förståelse för byggprocessen.
                </p>
              </div>
              <Button 
                onClick={() => {
                  const element = document.getElementById('kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="outline"
                className="mt-4"
              >
                Kontakta oss
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Certifierad",
                  description: "Certifierad kontrollansvarig enligt PBL och BAS enligt AML"
                },
                {
                  icon: Award,
                  title: "Expertis",
                  description: "Över 20 års erfarenhet i byggbranschen"
                },
                {
                  icon: Clock,
                  title: "Tillgänglighet",
                  description: "Snabb respons och flexibla lösningar"
                },
                {
                  icon: Users,
                  title: "Lokalt förankrad",
                  description: "Verksam i hela Västernorrland"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="w-12 h-12 earth-gradient rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};