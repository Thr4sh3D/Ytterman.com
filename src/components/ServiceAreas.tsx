import { COMPANY } from '@/config/company';

interface ServiceAreasProps {
  className?: string;
}

export const ServiceAreas = ({ className = '' }: ServiceAreasProps) => {
  const areas = COMPANY.localPageAreas.map((city) => ({
    city,
    description: 'Lokal informationssida – tillgänglighet och resor bekräftas per projekt',
  }));

  return (
    <section className={`py-20 bg-white ${className}`} aria-labelledby="service-areas-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="service-areas-heading" className="text-4xl font-bold text-slate-900 mb-6">
            Våra verksamhetsområden
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Ytterman tar emot förfrågningar från {COMPANY.region}. Ortslistan innebär inte
            garanterad tillgänglighet eller bestämda resevillkor.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {areas.map((area, index) => (
              <div 
                key={index} 
                className="bg-slate-50 p-6 rounded-lg focus-within:ring-2 focus-within:ring-primary/20"
                role="listitem"
              >
                <h3 className="font-bold text-slate-900 mb-2">{area.city}</h3>
                <p className="text-slate-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
