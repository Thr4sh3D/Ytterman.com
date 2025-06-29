import { Shield, FileText, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServicesProps {
  onServiceSelect: (serviceId: string) => void;
}

export const Services = ({ onServiceSelect }: ServicesProps) => {
  const services = [
    {
      icon: Shield,
      title: "Kontrollansvarig (KA)",
      description: "Certifierad kontrollansvarig enligt PBL för teknisk kontroll och slutbesiktning",
      features: ["Kontrollplan", "Teknisk kontroll", "Slutbesiktning", "Slutbevis"],
      price: "Från 15,000 SEK",
      link: "/kontrollansvarig",
      serviceId: "kontrollansvarig-service"
    },
    {
      icon: FileText,
      title: "BAS-P (Projektering)",
      description: "Byggarbetsmiljösamordnare under projekteringsfasen",
      features: ["Arbetsmiljöplan", "Riskbedömning", "Samordning", "Dokumentation"],
      price: "Från 12,000 SEK",
      link: "/bas-p",
      serviceId: "bas-p-service"
    },
    {
      icon: Users,
      title: "BAS-U (Utförande)",
      description: "Byggarbetsmiljösamordnare under byggfasen",
      features: ["Säkerhetsronder", "Samordning", "Uppföljning", "Rapportering"],
      price: "Från 18,000 SEK",
      link: "/bas-u",
      serviceId: "bas-u-service"
    }
  ];

  const stats = [
    { number: "20+", label: "År av erfarenhet" },
    { number: "500+", label: "Genomförda projekt" },
    { number: "100%", label: "Nöjda kunder" },
    { number: "24h", label: "Svarstid" }
  ];

  return (
    <>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Våra Tjänster
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Kompletta byggtjänster för ditt projekt. Från kontrollansvarig till 
              arbetsmiljösamordning - vi hjälper dig genom hela byggprocessen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 earth-gradient rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl font-bold text-primary mb-6">
                    {service.price}
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      onClick={() => window.location.href = service.link}
                      variant="outline"
                      className="w-full hover:bg-primary hover:text-white"
                    >
                      Läs mer
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button 
                      onClick={() => onServiceSelect(service.serviceId)}
                      className="w-full earth-gradient text-white hover:opacity-90"
                    >
                      Få offert
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};