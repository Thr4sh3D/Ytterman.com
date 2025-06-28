import { CheckCircle, Clock, Users, Shield, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  features: string[];
  process: string[];
  timeframe: string;
  price: string;
  icon: any;
}

const serviceDetails: ServiceDetail[] = [
  {
    id: 'kontrollansvarig',
    title: 'Kontrollansvarig (KA)',
    description: 'Som Kontrollansvarig säkerställer jag att ditt byggprojekt följer alla byggbestämmelser och säkerhetskrav från start till mål.',
    features: [
      'Framtagning av kontrollplan',
      'Löpande kontroller under byggprocessen',
      'Besiktningar och dokumentation',
      'Slutbevis och överlämning',
      'Kontakt med myndigheter',
      'Rådgivning om byggbestämmelser'
    ],
    process: [
      'Första konsultation och projektgenomgång',
      'Framtagning av kontrollplan',
      'Startbesiktning och dokumentation',
      'Löpande kontroller under byggfasen',
      'Slutbesiktning och slutbevis',
      'Överlämning av alla handlingar'
    ],
    timeframe: '2-4 veckor för kontrollplan, löpande under hela projektet',
    price: 'Från 15,000 SEK',
    icon: Shield
  },
  {
    id: 'bas-p',
    title: 'BAS-P (Byggarbetsmiljösamordnare under projektering)',
    description: 'BAS-P ansvarar för arbetsmiljösamordning under projekteringsfasen och säkerställer att arbetsmiljöaspekter beaktas redan från början.',
    features: [
      'Arbetsmiljöplan för projekteringsfasen',
      'Riskbedömning och riskanalys',
      'Samordning mellan projektörer',
      'Säkerhetsdokumentation',
      'Rådgivning om arbetsmiljölagar',
      'Förberedelse för BAS-U fas'
    ],
    process: [
      'Projektstart och riskidentifiering',
      'Framtagning av arbetsmiljöplan',
      'Samordning med projektteam',
      'Löpande uppföljning och uppdatering',
      'Överlämning till BAS-U',
      'Slutdokumentation'
    ],
    timeframe: '1-2 veckor för arbetsmiljöplan, löpande under projektering',
    price: 'Från 12,000 SEK',
    icon: FileText
  },
  {
    id: 'bas-u',
    title: 'BAS-U (Byggarbetsmiljösamordnare under utförande)',
    description: 'BAS-U övervakar och samordnar arbetsmiljöarbetet under byggfasen för att säkerställa en säker arbetsmiljö.',
    features: [
      'Arbetsmiljöplan för utförandefasen',
      'Säkerhetsronder och inspektioner',
      'Samordning mellan entreprenörer',
      'Incidentrapportering',
      'Utbildning och information',
      'Löpande riskbedömningar'
    ],
    process: [
      'Mottagning från BAS-P och projektstart',
      'Uppdatering av arbetsmiljöplan',
      'Regelbundna säkerhetsronder',
      'Samordningsmöten med entreprenörer',
      'Incidenthantering och uppföljning',
      'Slutrapportering'
    ],
    timeframe: 'Löpande under hela byggfasen',
    price: 'Från 18,000 SEK',
    icon: Users
  },
  {
    id: 'kombinerat',
    title: 'Kombinerade Paket (KA + BAS)',
    description: 'Kostnadseffektiva paket som kombinerar flera tjänster för en smidig och trygg byggprocess från start till mål.',
    features: [
      'Alla KA-tjänster inkluderade',
      'Både BAS-P och BAS-U',
      'Smidig övergång mellan faser',
      'En kontaktperson genom hela projektet',
      'Koordinerad dokumentation',
      'Rabatterat pris jämfört med separata tjänster'
    ],
    process: [
      'Helhetsbedömning av projektet',
      'Integrerad planering av alla faser',
      'Samordnad dokumentation',
      'Löpande kommunikation',
      'Effektiv resursanvändning',
      'Komplett överlämning'
    ],
    timeframe: 'Hela projektets livscykel',
    price: 'Från 25,000 SEK (spara upp till 20%)',
    icon: CheckCircle
  }
];

export const DetailedServices = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="detaljerade-tjanster" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Våra Tjänster i Detalj
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Få en djupare förståelse för våra tjänster och hur vi kan hjälpa 
            ditt byggprojekt att lyckas.
          </p>
        </div>

        <div className="space-y-16">
          {serviceDetails.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-lg text-slate-600 mb-6">
                  {service.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Vad ingår:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Process:
                    </h4>
                    <ol className="space-y-2">
                      {service.process.map((step, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mt-0.5 flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-slate-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-4 bg-slate-50 rounded-lg mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm text-slate-600">
                        <strong>Tidsram:</strong> {service.timeframe}
                      </span>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {service.price}
                  </div>
                </div>

                <Button 
                  onClick={scrollToContact}
                  className="earth-gradient text-white hover:opacity-90"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Få kostnadsfri konsultation
                </Button>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <service.icon className="w-32 h-32 text-primary/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};