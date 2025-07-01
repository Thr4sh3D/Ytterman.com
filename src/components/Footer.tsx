import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              BuildControl
            </Link>
            <p className="text-gray-400 mb-6">
              Professionell byggkontroll och arbetsmiljösamordning för alla typer av byggprojekt.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tjänster</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/kontrollansvarig" className="text-gray-400 hover:text-white transition-colors">
                  Kontrollansvarig
                </Link>
              </li>
              <li>
                <Link to="/bas-p" className="text-gray-400 hover:text-white transition-colors">
                  BAS-P
                </Link>
              </li>
              <li>
                <Link to="/bas-u" className="text-gray-400 hover:text-white transition-colors">
                  BAS-U
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Länkar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link to="/tjanster" className="text-gray-400 hover:text-white transition-colors">
                  Tjänster
                </Link>
              </li>
              <li>
                <Link to="/blogg" className="text-gray-400 hover:text-white transition-colors">
                  Blogg
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">
                  Storgatan 45<br />
                  852 30 Sundsvall
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">060-123 45 67</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">info@byggkontroll.se</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} BuildControl. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};