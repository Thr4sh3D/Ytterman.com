import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold">BuildControl</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professionella kontrollansvarig-tjänster och BAS P/U-utredningar 
              för säkra och kvalitetssäkrade byggprojekt.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Tjänster</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/kontrollansvarig" className="text-gray-300 hover:text-primary transition-colors">
                  Kontrollansvarig
                </Link>
              </li>
              <li>
                <Link to="/bas-p" className="text-gray-300 hover:text-primary transition-colors">
                  BAS P Utredning
                </Link>
              </li>
              <li>
                <Link to="/bas-u" className="text-gray-300 hover:text-primary transition-colors">
                  BAS U Tjänster
                </Link>
              </li>
              <li>
                <Link to="/tjanster" className="text-gray-300 hover:text-primary transition-colors">
                  Alla tjänster
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Snabblänkar</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link to="/blogg" className="text-gray-300 hover:text-primary transition-colors">
                  Blogg
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-300 hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/analys" className="text-gray-300 hover:text-primary transition-colors">
                  Gratis analys
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+46 12 345 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">info@buildcontrol.se</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-gray-300">
                  Byggvägen 123<br />
                  123 45 Stockholm
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} BuildControl. Alla rättigheter förbehållna.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Integritetspolicy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Användarvillkor
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};