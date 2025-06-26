import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ytterman</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare med över 20 års 
              erfarenhet. Trygg byggprocess med personlig service i Västernorrland.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>+46 76 111 84 47</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>info@ytterman.se</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Västernorrland</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Snabblänkar</h4>
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

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Kontrollansvarig (KA)</li>
              <li>BAS-P (Projektering)</li>
              <li>BAS-U (Utförande)</li>
              <li>Bygglovsprocess</li>
              <li>Konsultation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Ytterman. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};