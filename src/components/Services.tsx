import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Kontrollansvarig (KA)",
      description: "Certifierad kontrollansvarig enligt PBL. Vi hjälper dig med kontrollplan, tekniska samråd och slutbesked.",
      features: [
        "Upprättande av kontrollplan",
        "Tekniska samråd med kommunen",
        "Platsbesök och dokumentation",
        "Slutsamråd och slutbesked"
      ],
      link: "/kontrollansvarig",
      id: "kontrollansvarig-service"
    },
    {
      title: "BAS-P",
      description: "Byggarbetsmiljösamordnare under projekteringsfasen. Vi säkerställer en säker arbetsmiljö från start.",
      features: [
        "Arbetsmiljöplan",
        "Riskbedömning",
        "Samordning av projektörer",
        "Förberedelse för byggfasen"
      ],
      link: "/bas-p",
      id: "bas-p-service"
    },
    {
      title: "BAS-U",
      description: "Byggarbetsmiljösamordnare under utförandefasen. Vi övervakar och säkerställer arbetsmiljön på byggarbetsplatsen.",
      features: [
        "Säkerhetsronder",
        "Samordning av entreprenörer",
        "Uppföljning av arbetsmiljöplan",
        "Dokumentation och rapportering"
      ],
      link: "/bas-u",
      id: "bas-u-service"
    }
  ];

  return (
    <section id="tjanster" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Våra tjänster
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Vi erbjuder professionella tjänster inom kontrollansvarig och byggarbetsmiljösamordning 
              för att säkerställa en trygg och effektiv byggprocess.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-50 rounded-xl p-8 hover:shadow-md transition-shadow border border-slate-100"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  onClick={() => navigate(service.link)}
                  className="w-full"
                >
                  Läs mer
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate('/tjanster')}
              className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
            >
              Se alla våra tjänster
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};