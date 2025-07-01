import { Shield, FileText, Users, Building, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOContent, seoKeywords, seoContent } from './SEOContent';

interface ServicesProps {
  onServiceSelect: (serviceId: string) => void;
}

export const Services = ({ onServiceSelect }: ServicesProps) => {
  const services = [
    {
      id: 'kontrollansvarig-service',
      icon: Shield,
      title: seoContent.services.ka.title,
      description: seoContent.services.ka.description,
      features: [
        'Kontrollplan enligt PBL krav',
        'Teknisk kontroll under byggprocess',
        'Slutbesiktning och dokumentation', 
        'Slutbevis för färdigställande',
        'Samordning med byggkontroll'
      ],
      price: 'Från 15,000 SEK',
      popular: false
    },
    {
      id: 'bas-p-service',
      icon: FileText,
      title: seoContent.services.basP.title,
      description: seoContent.services.basP.description,
      features: [
        'Arbetsmiljöplan för projektet',
        'Riskbedömning och säkerhetsanalys',
        'Samordning mellan projektörer',
        'Dokumentation enligt AML',
        'Förebyggande arbetsmiljöarbete'
      ],
      price: 'Från 12,000 SEK',
      popular: false
    },
    {
      id: 'bas-u-service',
      icon: Users,
      title: seoContent.services.basU.title,
      description: seoContent.services.basU.description,
      features: [
        'Säkerhetsronder på byggarbetsplats',
        'Samordning mellan entreprenörer',
        'Arbetsmiljöuppföljning',
        'Incidentrapportering och åtgärder',
        'Kontinuerlig säkerhetsövervakning'
      ],
      price: 'Från 18,000 SEK',
      popular: true
    },
    {
      id: 'kombinerade-paket-service',
      icon: Building,
      title: 'Kombinerade Paket KA + BAS',
      description: 'Kostnadseffektiv lösning med kontrollansvarig och arbetsmiljösamordning i ett paket för hela byggprocessen.',
      features: [
        'KA + BAS-P kombination',
        'KA + BAS-U kombination', 
        'Fullständigt KA + BAS-P + BAS-U',
        'Rabatterade paketpriser',
        'En kontaktperson för allt'
      ],
      price: 'Paketrabatt upp till 20%',
      popular: true
    }
  ];

  return (
    <SEOContent 
      keywords={seoKeywords.secondary}
      semanticKeywords={seoKeywords.semantic}
    >
      <section id="tjanster" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Våra Tjänster
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {seoContent.services.intro}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={service.id}
                    className={`relative bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ${
                      service.popular ? 'ring-2 ring-primary/20 bg-gradient-to-br from-slate-50 to-primary/5' : ''
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-6">
                        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Populär
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 earth-gradient rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                        <p className="text-primary font-semibold">{service.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={() => onServiceSelect(service.id)}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Få offert för denna tjänst
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                );
              })}
            </div>

            {/* Additional Services */}
            <div className="mt-16 bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Ytterligare Tjänster
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    id: 'bygglovshandlingar',
                    title: 'Bygglovshandlingar',
                    description: 'Kompletta handlingar för bygglovsansökan'
                  },
                  {
                    id: 'planritning', 
                    title: 'Planritningar',
                    description: 'Professionella ritningar för ditt projekt'
                  },
                  {
                    id: 'situationsplan',
                    title: 'Situationsplan',
                    description: 'Uppmätning och situationsplanering'
                  },
                  {
                    id: 'sektionsritningar',
                    title: 'Sektionsritningar', 
                    description: 'Detaljerade sektioner och fasader'
                  }
                ].map((service) => (
                  <div key={service.id} className="text-center">
                    <h4 className="font-semibold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-sm text-slate-600 mb-4">{service.description}</p>
                    <Button 
                      onClick={() => onServiceSelect(service.id)}
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-white"
                    >
                      Läs mer
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SEOContent>
  );
};