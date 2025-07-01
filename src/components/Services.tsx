import { Shield, FileCheck, Users, Clock, Award, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Shield,
    title: 'Kontrollansvarig',
    description: 'Certifierade kontrollansvariga för alla typer av byggprojekt enligt gällande regelverk.',
    features: ['PBL-certifiering', 'Teknisk kontroll', 'Dokumentation', 'Slutbesked'],
    link: '/kontrollansvarig'
  },
  {
    icon: FileCheck,
    title: 'BAS P Utredning',
    description: 'Professionella BAS P-utredningar för planering av säkerhet och hälsa.',
    features: ['Riskanalys', 'Säkerhetsplan', 'Arbetsmiljöplan', 'Koordinering'],
    link: '/bas-p'
  },
  {
    icon: Users,
    title: 'BAS U Tjänster',
    description: 'BAS U-koordinering under utförande av byggarbeten för säker arbetsmiljö.',
    features: ['Säkerhetskoordinering', 'Arbetsmiljöuppföljning', 'Incidentrapportering', 'Utbildning'],
    link: '/bas-u'
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Våra tjänster
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi erbjuder kompletta lösningar för byggkontroll och säkerhet
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={service.link}
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
              >
                Läs mer
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Behöver du hjälp med ditt byggprojekt?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Kontakta oss idag för en kostnadsfri konsultation och offert
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontakt"
                className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Kontakta oss
              </Link>
              <Link
                to="/analys"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-colors duration-200 font-semibold"
              >
                <Award className="w-5 h-5 mr-2" />
                Gratis analys
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};