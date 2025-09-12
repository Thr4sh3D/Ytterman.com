import { Shield, FileText, Users, Building, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServicesProps {
  onServiceSelect?: (serviceId: string) => void;
}

export const Services = ({ onServiceSelect }: ServicesProps) => {
  const services = [
    {
      id: 'kontrollansvarig-service',
      title: 'Kontrollansvarig (KA)',
      description: 'Certifierad kontrollansvarig enligt PBL för teknisk kontroll och slutbesiktning',
      price: 'Från 15,000 SEK',
      features: [
        'Kontrollplan och teknisk kontroll',
        'Slutbesiktning och slutbevis',
        'Dokumentation enligt PBL',
        'Samordning med byggkontroll'
      ],
      icon: Shield,
      popular: true
    },
    {
      id: 'bas-p-service',
      title: 'BAS-P (Projektering)',
      description: 'Byggarbetsmiljösamordnare under projekteringsfasen',
      price: 'Från 12,000 SEK',
      features: [
        'Arbetsmiljöplan för projektet',
        'Riskbedömning och säkerhetsanalys',
        'Samordning mellan projektörer',
        'Dokumentation enligt AML'
      ],
      icon: FileText
    },
    {
      id: 'bas-u-service',
      title: 'BAS-U (Utförande)',
      description: 'Byggarbetsmiljösamordnare under byggfasen',
      price: 'Från 18,000 SEK',
      features: [
        'Säkerhetsronder på byggarbetsplats',
        'Samordning mellan entreprenörer',
        'Arbetsmiljöuppföljning',
        'Incidentrapportering'
      ],
      icon: Users
    },
    {
      id: 'bygglovshandlingar',
      title: 'Bygglovshandlingar',
      description: 'Kompletta bygglovshandlingar för ditt projekt',
      price: 'Från 8,000 SEK',
      features: [
        'Planritningar och sektioner',
        'Situationsplan',
        'Teknisk beskrivning',
        'Energiberäkningar'
      ],
      icon: Building
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    if (onServiceSelect) {
      onServiceSelect(serviceId);
    }
  };

  return (
    <section id="tjanster" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Våra Tjänster
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professionella byggtjänster för ditt projekt. Från kontrollansvarig till 
              arbetsmiljösamordning - vi hjälper dig genom hela byggprocessen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className={`relative bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        Populär
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                      <p className="text-primary font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleServiceClick(service.id)}
                    className="w-full earth-gradient text-white hover:opacity-90"
                  >
                    Välj denna tjänst
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};