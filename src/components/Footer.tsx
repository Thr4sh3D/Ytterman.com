import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ytterman</h3>
            <p className="text-slate-300 mb-4">
              Certifierad kontrollansvarig och BAS i Västernorrland. 
              Din partner för trygg och regelrätt byggprocess.
            </p>
            <div className="flex items-center space-x-2 text-slate-300">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Västernorrland</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="/kontrollansvarig" className="hover:text-white transition-colors">Kontrollansvarig</a></li>
              <li><a href="/bas-p" className="hover:text-white transition-colors">BAS-P</a></li>
              <li><a href="/bas-u" className="hover:text-white transition-colors">BAS-U</a></li>
              <li><a href="/tjanster" className="hover:text-white transition-colors">Alla tjänster</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="/" className="hover:text-white transition-colors">Hem</a></li>
              <li><a href="/blogg" className="hover:text-white transition-colors">Guider</a></li>
              <li><a href="/kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#priser" className="hover:text-white transition-colors">Priser</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">070-123 45 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@ytterman.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Mån-Fre 08:00-17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Ytterman. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};