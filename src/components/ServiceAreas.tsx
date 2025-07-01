import { MapPin, CheckCircle } from 'lucide-react';

interface ServiceArea {
  name: string;
  population: string;
  distance: string;
  services: string[];
  description: string;
}

export const ServiceAreas = () => {
  const serviceAreas: ServiceArea[] = [
    {
      name: 'Sundsvall',
      population: '~58,000 invånare',
      distance: '0 km från vårt kontor',
      services: ['Kontrollansvarig', 'BAS-P', 'BAS-U', 'Teknisk konsultation'],
      description: 'Vårt huvudkontor ligger i Sundsvall. Vi erbjuder alla våra tjänster med snabb responstid.'
    },
    {
      name: 'Härnösand',
      population: '~18,000 invånare',
      distance: '45 km från Sundsvall',
      services: ['Kontrollansvarig', 'BAS-P', 'BAS-U'],
      description: 'Regelbundna uppdrag i Härnösand med etablerade kontakter inom byggbranschen.'
    },
    {
      name: 'Kramfors',
      population: '~18,000 invånare',
      distance: '65 km från Sundsvall',
      services: ['Kontrollansvarig', 'BAS-P', 'BAS-U'],
      description: 'Täcker Kramfors kommun med omnejd. Erfarna av lokala byggbestämmelser.'
    },
    {
      name: 'Sollefteå',
      population: '~20,000 invånare',
      distance: '85 km från Sundsvall',
      services: ['Kontrollansvarig', 'BAS-P', 'BAS-U'],
      description: 'Serviceområde som inkluderar Sollefteå och närliggande orter.'
    },
    {
      name: 'Örnsköldsvik',
      population: '~32,000 invånare',
      distance: '110 km från Sundsvall',
      services: ['Kontrollansvarig', 'BAS-P', 'BAS-U'],
      description: 'Utökat serviceområde för större byggprojekt i Örnsköldsvik.'
    },
    {
      name: 'Timrå',
      population: '~18,000 invånare',
      distance: '15 km från Sundsvall',
      services: ['Kontrollansvarig', 'BAS-P', 'BAS-U', 'Teknisk konsultation'],
      description: 'Närliggande kommun med snabb service och lokalkännedom.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Våra serviceområden i Västernorrland
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vi erbjuder professionell byggkontroll och BAS-tjänster i hela Västernorrlands län. 
            Med vårt kontor i Sundsvall når vi snabbt alla större orter i regionen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area) => (
            <div key={area.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{area.name}</h3>
                  <p className="text-sm text-gray-500">{area.population}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">{area.distance}</p>
                <p className="text-sm text-gray-700">{area.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Tillgängliga tjänster:</h4>
                <div className="space-y-1">
                  {area.services.map((service) => (
                    <div key={service} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Arbetar du utanför dessa områden?
            </h3>
            <p className="text-gray-600 mb-4">
              Vi kan även ta uppdrag i andra delar av Västernorrland och angränsande län. 
              Kontakta oss för att diskutera ditt projekt.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Kontakta oss
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};