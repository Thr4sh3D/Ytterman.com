import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

export const LocalPages = () => {
  const locations = [
    {
      name: "Sundsvall",
      service: "Kontrollansvarig",
      description: "Lokal expertis för byggprojekt i Sundsvalls kommun",
      link: "/kontrollansvarig-sundsvall",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Härnösand",
      service: "BAS-P",
      description: "Byggarbetsmiljösamordning under projektering",
      link: "/bas-p-harnosand",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Sollefteå",
      service: "Byggkontroll",
      description: "Komplett byggkontroll med träindustriexpertis",
      link: "/byggkontroll-solleftea",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "Timrå",
      service: "Kontrollansvarig",
      description: "Specialkunskap om kustbyggnation och fritidshus",
      link: "/kontrollansvarig-timra",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      name: "Kramfors",
      service: "BAS-U",
      description: "Säkerhetssamordning med industri- och bergexpertis",
      link: "/bas-u-kramfors",
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Lokala tjänster i Västernorrland
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Vi erbjuder specialiserade tjänster anpassade för varje kommuns unika 
            förutsättningar och krav. Lokalkännedom som gör skillnad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Link 
              key={index}
              to={location.link}
              className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${location.color}`}></div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${location.color} rounded-full flex items-center justify-center`}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{location.name}</h3>
                    <span className="text-sm text-accent font-semibold">{location.service}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {location.description}
                </p>
                
                <div className="flex items-center text-accent group-hover:text-accent/80 font-semibold transition-colors">
                  Läs mer om {location.name}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 mb-6">
            Arbetar vi inte i din kommun än? Kontakta oss ändå - vi utökar ständigt vårt verksamhetsområde.
          </p>
          <a 
            href="tel:+46761118447"
            className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
          >
            Kontakta oss
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};