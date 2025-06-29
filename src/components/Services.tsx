import { CheckCircle, FileText, Shield, Users, Building, PenTool, Map, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServicesProps {
  onServiceSelect: (serviceId: string) => void;
}

export const Services = ({ onServiceSelect }: ServicesProps) => {
  const mainServices = [
    {
      id: 'kontrollansvarig-service',
      icon: Shield,
      title: 'Kontrollansvarig (KA)',
      description: 'Teknisk kontroll enligt PBL för säker byggprocess',
      features: [
        'Kontrollplan och kontrollprogram',
        'Teknisk kontroll under byggandet',
        'Besiktningar och dokumentation',
        'Slutbevis och överlämning'
      ],
      price: 'Från 15,000 SEK'
    },
    {
      id: 'bas-p-service',
      icon: FileText,
      title: 'BAS-P (Projektering)',
      description: 'Arbetsmiljösamordning under projekteringsfasen',
      features: [
        'Arbetsmiljöplan',
        'Riskbedömning och åtgärder',
        'Samordning med projektörer',
        'Dokumentation för BAS-U'
      ],
      price: 'Från 12,000 SEK'
    },
    {
      id: 'bas-u-service',
      icon: Users,
      title: 'BAS-U (Utförande)',
      description: 'Arbetsmiljösamordning under byggfasen',
      features: [
        'Arbetsmiljösamordning på plats',
        'Säkerhetsronder och kontroller',
        'Incidentrapportering',
        'Slutdokumentation'
      ],
      price: 'Från 18,000 SEK'
    },
    {
      id: 'kombinerade-paket-service',
      icon: Building,
      title: 'Kombinerade paket',
      description: 'Kostnadseffektiva lösningar för hela byggprocessen',
      features: [
        'KA + BAS-P kombination',
        'KA + BAS-U kombination',
        'Fullständigt KA + BAS-P + BAS-U',
        'Anpassade lösningar'
      ],
      price: 'Kontakta för offert'
    }
  ];

  const additionalServices = [
    {
      id: 'bygglovshandlingar',
      icon: FileText,
      title: 'Bygglovshandlingar',
      description: 'Kompletta handlingar för bygglovsansökan'
    },
    {
      id: 'planritning',
      icon: PenTool,
      title: 'Planritningar',
      description: 'Professionella planritningar för ditt projekt'
    },
    {
      id: 'situationsplan',
      icon: Map,
      title: 'Situationsplan',
      description: 'Uppmätning och situationsplaner'
    },
    {
      id: 'sektionsritningar',
      icon: Layers,
      title: 'Sektionsritningar',
      description: 'Detaljerade sektionsritningar'
    }
  ];

  return (
    <section id="tjanster" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Våra tjänster
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professionella tjänster för en trygg och säker byggprocess. 
            Vi erbjuder allt från kontrollansvarig till BAS-tjänster.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service) => (
            <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                    <div className="text-sm font-semibold text-primary mt-1">{service.price}</div>
                  </div>
                </div>
                <CardDescription className="text-slate-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => onServiceSelect(service.id)}
                  className="w-full earth-gradient text-white hover:opacity-90"
                >
                  Välj denna tjänst
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="border-t border-slate-200 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ytterligare tjänster
            </h3>
            <p className="text-lg text-slate-600">
              Kompletterande tjänster för ditt byggprojekt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <Card key={service.id} className="text-center hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => onServiceSelect(service.id)}
                    variant="outline" 
                    className="w-full"
                  >
                    Läs mer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};