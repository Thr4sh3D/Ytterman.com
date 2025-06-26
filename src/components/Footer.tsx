import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Hem', id: 'hem' },
    { label: 'Tjänster', id: 'tjanster' },
    { label: 'Priser', id: 'priser' },
    { label: 'Om mig', id: 'om-mig' },
    { label: 'Kontakt', id: 'kontakt' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefon',
      value: '076-111 84 47',
      action: () => window.open('tel:+46761118447')
    },
    {
      icon: Mail,
      label: 'E-post',
      value: 'tobias@ytterman.com',
      action: () => window.open('mailto:tobias@ytterman.com')
    },
    {
      icon: MapPin,
      label: 'Verksam i',
      value: 'Västernorrland',
      action: null
    },
    {
      icon: Clock,
      label: 'Svarstid',
      value: 'Inom 24 timmar',
      action: null
    }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
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
              Kontrollansvarig och BAS i Västernorrland. 
              Trygg byggprocess med över 20 års erfarenhet.
            </p>
            <p className="text-sm text-gray-400">
              Certifierad enligt gällande regelverk
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Snabblänkar</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Kontaktinfo</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <div 
                    className={`flex items-center space-x-3 ${
                      info.action ? 'cursor-pointer hover:text-accent transition-colors' : ''
                    }`}
                    onClick={info.action || undefined}
                  >
                    <info.icon className="w-4 h-4 text-accent" />
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-gray-300">{info.value}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Tjänster</h3>
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
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ytterman. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};