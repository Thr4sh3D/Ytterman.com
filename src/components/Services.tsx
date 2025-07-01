import { Shield, FileCheck, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Shield,
    title: "Kontrollansvarig",
    description: "Professionell kontrollansvarig för ditt byggprojekt enligt PBL",
    link: "/kontrollansvarig",
    features: ["Teknisk kontroll", "Dokumentation", "Regelefterlevnad"]
  },
  {
    icon: FileCheck,
    title: "BAS P & BAS U",
    description: "Byggarbetsmiljösamordning för planering och utförande",
    link: "/bas-p",
    features: ["Riskbedömning", "Säkerhetsplan", "Arbetsmiljökoordination"]
  },
  {
    icon: Building,
    title: "Teknisk Konsultation",
    description: "Experthjälp inom byggnadsteknik och projektering",
    link: "/tjanster",
    features: ["Teknisk rådgivning", "Kvalitetssäkring", "Projektledning"]
  },
  {
    icon: Users,
    title: "Webbplatsanalys",
    description: "Analys och optimering av din webbplats",
    link: "/analys",
    features: ["SEO-analys", "Prestanda", "Användarupplevelse"]
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Våra Tjänster
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi erbjuder omfattande tjänster inom byggkontroll och teknisk konsultation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={service.link}
                className="text-green-600 font-semibold hover:text-green-700 transition-colors inline-flex items-center gap-2"
              >
                Läs mer →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};