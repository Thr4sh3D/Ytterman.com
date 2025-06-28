import { Award, Clock, MapPin, Users } from 'lucide-react';

export const AboutSection = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: '20+',
      label: 'År av erfarenhet',
      description: 'Över två decennier inom byggbranschen'
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: 'Flera',
      label: 'Genomförda projekt',
      description: 'Framgångsrikt avslutade byggprojekt'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: '5',
      label: 'Kommuner',
      description: 'Aktiva i hela Västernorrland'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: '24h',
      label: 'Svarstid',
      description: 'Snabb respons på förfrågningar'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Erfaren partner för ditt byggprojekt
            </h2>
            
            <p className="text-lg text-slate-600 mb-6">
              Som Tobias Ytterman har jag över 20 års erfarenhet inom byggbranschen 
              och är certifierad kontrollansvarig och BAS. Jag hjälper byggherrar 
              och entreprenörer i hela Västernorrland att genomföra säkra och 
              regelenliga byggprojekt.
            </p>
            
            <p className="text-lg text-slate-600 mb-8">
              Min djupa kunskap om lokala byggbestämmelser och etablerade kontakter 
              med kommunala myndigheter säkerställer en smidig process från start till mål.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 earth-gradient rounded-full"></div>
                <span className="text-slate-700">Certifierad kontrollansvarig enligt PBL</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 earth-gradient rounded-full"></div>
                <span className="text-slate-700">Auktoriserad BAS-P och BAS-U</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 earth-gradient rounded-full"></div>
                <span className="text-slate-700">Medlem i Kontrollansvariges Riksförbund</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 earth-gradient rounded-full"></div>
                <span className="text-slate-700">Kontinuerlig vidareutbildning</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="earth-gradient w-16 h-16 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-slate-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};