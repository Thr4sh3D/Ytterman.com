import { Award, Clock, MapPin, Users } from 'lucide-react';

export const About = () => {
  const stats = [
    {
      icon: Clock,
      value: '20+',
      label: 'År av erfarenhet'
    },
    {
      icon: Award,
      value: '500+',
      label: 'Genomförda projekt'
    },
    {
      icon: Users,
      value: '100%',
      label: 'Nöjda kunder'
    },
    {
      icon: MapPin,
      value: '5',
      label: 'Städer i Västernorrland'
    }
  ];

  return (
    <section id="om-oss" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Om Ytterman
              </h2>
              <p className="text-xl text-slate-600 mb-6">
                Med över 20 års erfarenhet inom byggbranschen erbjuder vi professionella 
                tjänster som kontrollansvarig och byggarbetsmiljösamordnare i Västernorrland.
              </p>
              <p className="text-slate-600 mb-8">
                Tobias Ytterman är certifierad enligt Plan- och bygglagen (PBL) och har gedigen 
                erfarenhet av att säkerställa att byggprojekt genomförs enligt gällande regelverk 
                och med högsta kvalitet. Vi tror på transparens, pålitlighet och tydlig kommunikation 
                i alla våra uppdrag.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Våra värderingar
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Transparens</h4>
                  <p className="text-slate-600">
                    Fast pris utan dolda kostnader. Du vet alltid vad du betalar för.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Kvalitet</h4>
                  <p className="text-slate-600">
                    Alla våra tjänster utförs enligt högsta standard och gällande regelverk.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Tillgänglighet</h4>
                  <p className="text-slate-600">
                    Vi finns alltid tillgängliga för våra kunder under hela projektets gång.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};