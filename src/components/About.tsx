import { Award, Users, Clock, Shield } from 'lucide-react';

const stats = [
  { icon: Award, label: 'År i branschen', value: '15+' },
  { icon: Users, label: 'Genomförda projekt', value: '500+' },
  { icon: Clock, label: 'Nöjda kunder', value: '98%' },
  { icon: Shield, label: 'Certifieringar', value: '100%' }
];

export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Expertis du kan lita på
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Med över 15 års erfarenhet inom byggbranschen erbjuder vi professionella 
                tjänster inom kontrollansvar och BAS P/U-utredningar.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Certifierade experter
                  </h3>
                  <p className="text-gray-600">
                    Alla våra kontrollansvariga är certifierade enligt gällande regelverk 
                    och har gedigen erfarenhet från byggbranschen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Snabb hantering
                  </h3>
                  <p className="text-gray-600">
                    Vi förstår vikten av att hålla tidsscheman och arbetar effektivt 
                    för att leverera i tid, varje gång.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Personlig service
                  </h3>
                  <p className="text-gray-600">
                    Varje projekt är unikt och vi anpassar våra tjänster efter 
                    dina specifika behov och krav.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img
                src="/api/placeholder/500/400"
                alt="Professionellt byggteam"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-gray-600">Genomförda projekt</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};