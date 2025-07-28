interface ServiceAreasProps {
  className?: string;
}

export const ServiceAreas = ({ className = '' }: ServiceAreasProps) => {
  const areas = [
    { city: "Sundsvall", description: "Huvudkontor och primärt verksamhetsområde" },
    { city: "Härnösand", description: "Regelbunden service och snabb respons" },
    { city: "Sollefteå", description: "Omfattande erfarenhet av lokala projekt" },
    { city: "Timrå", description: "Nära samarbete med lokala entreprenörer" },
    { city: "Kramfors", description: "Etablerade kontakter och referenser" },
    { city: "Övriga Västernorrland", description: "Flexibel service i hela regionen" }
  ];

  return (
    <section className={`py-20 bg-white ${className}`} aria-labelledby="service-areas-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="service-areas-heading" className="text-4xl font-bold text-slate-900 mb-6">
            Våra verksamhetsområden
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Vi verkar i hela Västernorrland och erbjuder våra tjänster i följande områden:
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