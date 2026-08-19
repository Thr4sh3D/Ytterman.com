import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY } from '@/config/company';
import { cityData } from '@/content/kontrollansvarigCityData';

interface ServiceAreasProps {
  className?: string;
}

export const ServiceAreas = ({ className = '' }: ServiceAreasProps) => {
  const areas = [
    ...Object.values(cityData).map((city) => ({
      city: city.name,
      description: city.focusTitle,
      href: `/${city.slug}/`,
      linkLabel: `Kontrollansvarig i ${city.name}`,
    })),
    {
      city: 'Örnsköldsvik',
      description: 'Projektets art, underlag och behov av platsbesök bedöms före offert.',
      href: '/kontrollansvarig/',
      linkLabel: 'Se regionalt KA-upplägg',
    },
    {
      city: 'Ånge',
      description: 'Tillgänglighet, resor och uppdragets omfattning bekräftas för varje förfrågan.',
      href: '/kontrollansvarig/',
      linkLabel: 'Se regionalt KA-upplägg',
    },
  ];

  return (
    <section className={`py-20 bg-white ${className}`} aria-labelledby="service-areas-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="service-areas-heading" className="text-4xl font-bold text-slate-900 mb-6">
            Våra verksamhetsområden
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Ytterman tar emot förfrågningar från {COMPANY.region}. Välj en ort för lokal information
            om kontrollansvarig eller se det regionala upplägget för övriga delar av länet.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {areas.map((area) => (
              <article
                key={area.city}
                className="relative flex flex-col bg-slate-50 p-6 rounded-lg border border-slate-200 transition hover:border-primary/40 hover:shadow-md focus-within:ring-2 focus-within:ring-primary/20"
                role="listitem"
              >
                <Link
                  to={area.href}
                  aria-label={area.linkLabel}
                  className="absolute inset-0 z-0 rounded-lg focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary"
                />
                <div className="pointer-events-none relative z-10 flex h-full flex-col">
                  <h3 className="font-bold text-slate-900 mb-2">{area.city}</h3>
                  <p className="mb-4 flex-grow text-slate-600 text-sm">{area.description}</p>
                  <Link to={area.href} className="pointer-events-auto inline-flex items-center font-semibold text-primary hover:underline">
                    {area.linkLabel}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6 text-left sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Söker du överlåtelsebesiktning?</h3>
              <p className="mt-1 text-sm text-slate-700">
                Besiktning erbjuds regionalt utan separata, duplicerade ortssidor. Omfattning och tillgänglighet bekräftas före uppdrag.
              </p>
            </div>
            <Link to="/overlatelsebesiktning/" className="mt-4 inline-flex shrink-0 items-center font-semibold text-primary hover:underline sm:mt-0">
              Se överlåtelsebesiktning
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
