import { CheckCircle, ArrowRight, Shield, Users, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesSection = () => {
  const services = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Kontrollansvarig',
      description: 'Professionell kontrollansvarig för alla typer av byggprojekt',
      features: [
        'Kontrollplan och dokumentation',
        'Kontroller under byggprocessen',
        'Kommunikation med myndigheter',
        'Slutbesiktning och slutbevis'
      ],
      link: '/kontrollansvarig',
      price: 'Från 15,000 kr'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'BAS-P (Projektering)',
      description: 'Byggarbetsmiljösamordnare under projekteringsfasen',
      features: [
        'Arbetsmiljöplan',
        'Riskbedömningar',
        'Samordning av säkerhetsaspekter',
        'Dokumentation av åtgärder'
      ],
      link: '/bas-p',
      price: 'Från 8,000 kr'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'BAS-U (Utförande)',
      description: 'Byggarbetsmiljösamordnare under utförandefasen',
      features: [
        'Säkerhetsronder på arbetsplatsen',
        'Övervakning av arbetsmiljöplan',
        'Hantering av avvikelser',
        'Samordning mellan entreprenörer'
      ],
      link: '/bas-u',
      price: 'Från 12,000 kr'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Våra Tjänster
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Kompletta lösningar för byggkontroll och arbetsmiljösamordning. 
            Vi erbjuder professionella tjänster för alla typer av byggprojekt.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-slate-100">
              <div className="earth-gradient w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-slate-900">
                    {service.price}
                  </span>
                </div>
                
                <Link 
                  to={service.link}
                  className="inline-flex items-center w-full justify-center px-6 py-3 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  Läs mer
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};