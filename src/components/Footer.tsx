import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">BuildControl</h3>
            <p className="text-gray-300 mb-6">
              Professionell byggkontroll och teknisk konsultation för ditt projekt.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                +46 70 123 45 67
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                info@buildcontrol.se
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4" />
                Stockholm, Sverige
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/kontrollansvarig" className="hover:text-green-400 transition-colors">Kontrollansvarig</Link></li>
              <li><Link to="/bas-p" className="hover:text-green-400 transition-colors">BAS P</Link></li>
              <li><Link to="/bas-u" className="hover:text-green-400 transition-colors">BAS U</Link></li>
              <li><Link to="/tjanster" className="hover:text-green-400 transition-colors">Teknisk Konsultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/blogg" className="hover:text-green-400 transition-colors">Blogg</Link></li>
              <li><Link to="/kontakt" className="hover:text-green-400 transition-colors">Kontakt</Link></li>
              <li><Link to="/analys" className="hover:text-green-400 transition-colors">Webbplatsanalys</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <p className="text-gray-300 mb-4">
              Kontakta oss för en kostnadsfri konsultation om ditt byggprojekt.
            </p>
            <Link
              to="/kontakt"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
            >
              Få Offert
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BuildControl. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};