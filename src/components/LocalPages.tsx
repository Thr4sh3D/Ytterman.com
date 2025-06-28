import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LocalPages = () => {
  const localPages = [
    {
      city: 'Sundsvall',
      title: 'Kontrollansvarig Sundsvall',
      description: 'Lokal expertis för byggprojekt i Sundsvalls kommun',
      link: '/kontrollansvarig-sundsvall'
    },
    {
      city: 'Härnösand',
      title: 'BAS-P Härnösand',
      description: 'Arbetsmiljösamordning under projektering',
      link: '/bas-p-harnosand'
    },
    {
      city: 'Sollefteå',
      title: 'Byggkontroll Sollefteå',
      description: 'Komplett byggkontroll för alla projekttyper',
      link: '/byggkontroll-solleftea'
    },
    {
      city: 'Timrå',
      title: 'Kontrollansvarig Timrå',
      description: 'Professionell byggkontroll i Timrå kommun',
      link: '/kontrollansvarig-timra'
    },
    {
      city: 'Kramfors',
      title: 'BAS-U Kramfors',
      description: 'Arbetsmiljösamordning under utförande',
      link: '/bas-u-kramfors'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Lokala tjänster i Västernorrland
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Vi erbjuder specialiserade tjänster anpassade för varje kommuns 
            unika förutsättningar och byggbestämmelser.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localPages.map((page, index) => (
            <Link 
              key={index}
              to={page.link}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-xl font-bold text-slate-900">{page.city}</h3>
              </div>
              
              <h4 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-accent transition-colors">
                {page.title}
              </h4>
              
              <p className="text-slate-600 mb-4">
                {page.description}
              </p>
              
              <div className="flex items-center text-accent group-hover:text-accent/80">
                <span className="text-sm font-medium">Läs mer</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};