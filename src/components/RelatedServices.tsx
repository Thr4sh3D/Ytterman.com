import { ArrowRight, Shield, Users, FileText, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Service {
  title: string;
  description: string;
  url: string;
  icon: any;
  price: string;
}

interface RelatedServicesProps {
  currentService?: string;
  className?: string;
}

export const RelatedServices = ({ currentService, className = "" }: RelatedServicesProps) => {
  const allServices: Service[] = [
    {
      title: "Kontrollansvarig (KA)",
      description: "Teknisk kontroll och slutbesiktning enligt PBL",
      url: "/kontrollansvarig",
      icon: Shield,
      price: "Från 15,000 SEK"
    },
    {
      title: "BAS-P (Projektering)",
      description: "Arbetsmiljösamordning under projekteringsfasen",
      url: "/bas-p",
      icon: FileText,
      price: "Från 12,000 SEK"
    },
    {
      title: "BAS-U (Utförande)",
      description: "Arbetsmiljösamordning under byggfasen",
      url: "/bas-u",
      icon: Users,
      price: "Från 18,000 SEK"
    },
    {
      title: "Alla Tjänster",
      description: "Se alla våra byggtjänster och priser",
      url: "/tjanster",
      icon: Building,
      price: "Översikt"
    }
  ];

  // Filter out current service
  const relatedServices = allServices.filter(service => 
    !currentService || !service.url.includes(currentService)
  );

  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Relaterade tjänster
          </h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
            Upptäck våra andra byggtjänster som kan komplettera ditt projekt. 
            Vi erbjuder kompletta lösningar för hela byggprocessen.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.slice(0, 3).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                      <p className="text-primary font-semibold text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  
                  <Button 
                    onClick={() => window.location.href = service.url}
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-white"
                  >
                    Läs mer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => window.location.href = '/kontakt'}
              className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
            >
              Få kostnadsfri konsultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};