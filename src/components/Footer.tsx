import { Phone, Mail, MapPin, Building, Clock, Award } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 earth-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TY</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Ytterman</h3>
                <p className="text-sm text-gray-400">Trygg Byggprocess</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare med över 20 års 
              erfarenhet. Verksam i hela Västernorrland med fokus på trygg och regelrätt byggprocess.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+46761118447" className="hover:text-accent transition-colors">
                  076-111 84 47
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:tobias@ytterman.com" className="hover:text-accent transition-colors">
                  tobias@ytterman.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Viksjö, Västernorrland</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent" />
                <span>Måndag-Fredag 08:00-17:00</span>
              </div>
            </div>

            {/* Verksamhetsområden */}
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">Verksamhetsområden</h4>
              <p className="text-gray-300 text-sm">
                Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors och övriga Västernorrland
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hem')}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Hem
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tjanster')}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Tjänster
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('priser')}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Priser
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('om-mig')}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Om mig
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('kontakt')}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Services & Certifications */}
          <div>
            <h4 className="text-lg font-bold mb-4">Tjänster & Certifieringar</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-accent" />
                <span>Kontrollansvarig (KA)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-accent" />
                <span>BAS-P (Projektering)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-accent" />
                <span>BAS-U (Utförande)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-accent" />
                <span>Kombinerade paket</span>
              </li>
              <li className="flex items-center space-x-2 mt-4">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm">Certifierad enligt nya regelverket 2025</span>
              </li>
              <li className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm">Medlem i SBR</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ytterman. Alla rättigheter förbehållna.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
                Org.nr: [Organisationsnummer]
              </span>
              <span className="text-gray-400 text-sm">
                F-skatt: Godkänd
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};