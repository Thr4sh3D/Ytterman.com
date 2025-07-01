import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ytterman</h3>
              <p className="text-slate-300 mb-4">
                Certifierad kontrollansvarig och byggarbetsmiljösamordnare i Västernorrland. 
                Vi hjälper dig genom hela byggprocessen.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-primary">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-primary">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Tjänster</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/kontrollansvarig" className="text-slate-300 hover:text-white">
                    Kontrollansvarig
                  </Link>
                </li>
                <li>
                  <Link to="/bas-p" className="text-slate-300 hover:text-white">
                    BAS-P
                  </Link>
                </li>
                <li>
                  <Link to="/bas-u" className="text-slate-300 hover:text-white">
                    BAS-U
                  </Link>
                </li>
                <li>
                  <Link to="/tjanster" className="text-slate-300 hover:text-white">
                    Alla tjänster
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Länkar</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-slate-300 hover:text-white">
                    Hem
                  </Link>
                </li>
                <li>
                  <Link to="/blogg" className="text-slate-300 hover:text-white">
                    Blogg
                  </Link>
                </li>
                <li>
                  <Link to="/analys" className="text-slate-300 hover:text-white">
                    SEO-analys
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className="text-slate-300 hover:text-white">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Kontakt</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-0.5 text-slate-400" />
                  <a href="tel:+46761118447" className="text-slate-300 hover:text-white">
                    076-111 84 47
                  </a>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-0.5 text-slate-400" />
                  <a href="mailto:tobias@ytterman.com" className="text-slate-300 hover:text-white">
                    tobias@ytterman.com
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-slate-400" />
                  <span className="text-slate-300">
                    Västernorrland
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>© {currentYear} Ytterman. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};