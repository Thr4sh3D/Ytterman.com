import { Phone, Mail, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getVersion } from '@/functions';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await getVersion();
        setVersion(response.version);
      } catch (error) {
        console.error("Failed to fetch version:", error);
      }
    };

    fetchVersion();
  }, []);

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold earth-gradient bg-clip-text text-transparent mb-4">
              Ytterman
            </h3>
            <p className="text-gray-300 mb-6">
              Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare med över 20 års 
              erfarenhet. Vi hjälper dig genom hela byggprocessen i Västernorrland.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+46761118447" className="hover:text-primary transition-colors">
                  076-111 84 47
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:tobias@ytterman.com" className="hover:text-primary transition-colors">
                  tobias@ytterman.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Västernorrland, Sverige</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-2">
              <li>
                <a href="/kontrollansvarig" className="text-gray-300 hover:text-white transition-colors">
                  Kontrollansvarig
                </a>
              </li>
              <li>
                <a href="/bas-p" className="text-gray-300 hover:text-white transition-colors">
                  BAS-P
                </a>
              </li>
              <li>
                <a href="/bas-u" className="text-gray-300 hover:text-white transition-colors">
                  BAS-U
                </a>
              </li>
              <li>
                <a href="/tjanster" className="text-gray-300 hover:text-white transition-colors">
                  Bygglovshandlingar
                </a>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Verksamhetsområden</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Sundsvall</li>
              <li>Härnösand</li>
              <li>Sollefteå</li>
              <li>Timrå</li>
              <li>Kramfors</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ytterman. Alla rättigheter förbehållna.
            {version && <span className="ml-2">Version: {version}</span>}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/blogg" className="text-gray-400 hover:text-white transition-colors text-sm">
              Guider
            </a>
            <a href="/#kontakt" className="text-gray-400 hover:text-white transition-colors text-sm">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};