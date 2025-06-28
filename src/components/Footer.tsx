import { Building2, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold">Ytterman</span>
            </div>
            <p className="text-gray-300 mb-6">
              Professionell byggkontroll och BAS-tjänster i Västernorrland. 
              Över 20 års erfarenhet av säkra och regelrätta byggprojekt.
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
            <h3 className="text-lg font-semibold mb-4">Tjänster</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/kontrollansvarig" className="text-gray-300 hover:text-white transition-colors">
                  Kontrollansvarig (KA)
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

          {/* Local Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Lokala områden</h3>
            <ul className="space-y-2">
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

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resurser</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blogg" className="text-gray-300 hover:text-white transition-colors">
                  Blogg & Tips
                </Link>
              </li>
              <li>
                <Link to="/tjanster" className="text-gray-300 hover:text-white transition-colors">
                  Alla tjänster
                </Link>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-gray-400">Öppettider</h4>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Clock className="w-4 h-4" />
                <span>Mån-Fre: 08:00-17:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Ytterman. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};