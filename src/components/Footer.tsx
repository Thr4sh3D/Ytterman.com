import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 earth-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="text-xl font-bold">Ytterman</span>
            </div>
            <p className="text-gray-300 mb-6">
              Professionell kontrollansvarig och BAS-tjänster i Västernorrland. 
              Över 20 års erfarenhet av byggkontroll och arbetsmiljösamordning.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>076-111 84 47</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>tobias@ytterman.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Västernorrland</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Tjänster</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/kontrollansvarig" className="text-gray-300 hover:text-white transition-colors">
                  Kontrollansvarig
                </Link>
              </li>
              <li>
                <Link to="/bas-p" className="text-gray-300 hover:text-white transition-colors">
                  BAS-P (Projektering)
                </Link>
              </li>
              <li>
                <Link to="/bas-u" className="text-gray-300 hover:text-white transition-colors">
                  BAS-U (Utförande)
                </Link>
              </li>
              <li>
                <Link to="/villor-smahus" className="text-gray-300 hover:text-white transition-colors">
                  Villor & Småhus
                </Link>
              </li>
            </ul>
          </div>

          {/* Local Pages */}
          <div>
            <h3 className="text-lg font-bold mb-6">Lokala sidor</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/kontrollansvarig-sundsvall" className="text-gray-300 hover:text-white transition-colors">
                  Sundsvall
                </Link>
              </li>
              <li>
                <Link to="/bas-p-harnosand" className="text-gray-300 hover:text-white transition-colors">
                  Härnösand
                </Link>
              </li>
              <li>
                <Link to="/byggkontroll-solleftea" className="text-gray-300 hover:text-white transition-colors">
                  Sollefteå
                </Link>
              </li>
              <li>
                <Link to="/kontrollansvarig-timra" className="text-gray-300 hover:text-white transition-colors">
                  Timrå
                </Link>
              </li>
              <li>
                <Link to="/bas-u-kramfors" className="text-gray-300 hover:text-white transition-colors">
                  Kramfors
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 text-gray-300 mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Öppettider</span>
                </div>
                <div className="text-sm text-gray-400">
                  <p>Måndag - Fredag: 08:00 - 17:00</p>
                  <p>Helger: Efter överenskommelse</p>
                </div>
              </div>
              <div>
                <Link to="/blogg" className="text-gray-300 hover:text-white transition-colors">
                  Blogg & Tips
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Ytterman. Alla rättigheter förbehållna.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/integritetspolicy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Integritetspolicy
              </Link>
              <Link to="/villkor" className="text-gray-400 hover:text-white text-sm transition-colors">
                Villkor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};