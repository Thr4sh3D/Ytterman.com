import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Hem', href: '/' },
    { name: 'Tjänster', href: '/tjanster' },
    { name: 'Kontrollansvarig', href: '/kontrollansvarig' },
    { name: 'BAS-P', href: '/bas-p' },
    { name: 'BAS-U', href: '/bas-u' },
    { name: 'Guide', href: '/blogg' },
    { name: 'Kontakt', href: '/kontakt' }
  ];

  const services = [
    'Kontrollansvarig (KA)',
    'BAS-P (Projektering)',
    'BAS-U (Utförande)',
    'Bygglovshandlingar',
    'Teknisk kontroll',
    'Slutbesiktning'
  ];

  const areas = [
    'Sundsvall',
    'Härnösand',
    'Sollefteå',
    'Timrå',
    'Kramfors',
    'Hela Västernorrland'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Ytterman</h3>
            <p className="text-slate-300 mb-6">
              Certifierad kontrollansvarig och BAS-samordnare med över 20 års erfarenhet 
              inom bygg och arbetsmiljö i Västernorrland.
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
                <span>Västernorrland</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>Svarar inom 24h</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Snabblänkar</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tjänster</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-slate-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Verksamhetsområde</h4>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area} className="text-slate-300">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ytterman. Alla rättigheter förbehållna.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/integritetspolicy" className="text-slate-400 hover:text-primary text-sm transition-colors">
                Integritetspolicy
              </a>
              <a href="/villkor" className="text-slate-400 hover:text-primary text-sm transition-colors">
                Villkor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};