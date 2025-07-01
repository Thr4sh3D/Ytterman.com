import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Award, label: "År av Erfarenhet", value: "15+" },
  { icon: Users, label: "Nöjda Kunder", value: "200+" },
  { icon: Clock, label: "Genomförda Projekt", value: "500+" },
  { icon: CheckCircle, label: "Framgångsgrad", value: "99%" }
];

export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Expertis Du Kan Lita På
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Med över 15 års erfarenhet inom byggbranschen erbjuder vi professionell 
              byggkontroll och teknisk konsultation. Vi hjälper dig att säkerställa 
              kvalitet och regelefterlevnad i ditt byggprojekt.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Certifierad Kompetens</h3>
                  <p className="text-gray-600">Auktoriserad kontrollansvarig med gedigen utbildning och certifiering</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personlig Service</h3>
                  <p className="text-gray-600">Vi arbetar nära våra kunder för att leverera skräddarsydda lösningar</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kvalitetsgaranti</h3>
                  <p className="text-gray-600">Vi står bakom vårt arbete med full kvalitetsgaranti</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/api/placeholder/500/400"
              alt="Professionell byggkontroll"
              className="rounded-2xl shadow-2xl"
            />
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
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