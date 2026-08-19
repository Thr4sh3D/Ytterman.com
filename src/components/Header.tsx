import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/config/company';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Hem', href: '/' },
    { name: 'Tjänster', href: '/tjanster/' },
    { name: 'Produkter', href: '/produkter/' },
    { name: 'Företag', href: '/foretag/' },
    { name: 'Guider', href: '/guider/' },
    { name: 'FAQ', href: '/faq/' },
    { name: 'Kontakt', href: '/kontakt/' },
  ];

  const scrollToContact = () => {
    if (window.location.pathname === '/') {
      const element = document.getElementById('kontakt');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#kontakt';
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gradient">
              Ytterman
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" aria-label="Huvudnavigation">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={COMPANY.emailHref}
              className="flex items-center space-x-2 text-slate-700 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">{COMPANY.email}</span>
            </a>
            <Button 
              onClick={scrollToContact}
              className="earth-gradient text-white hover:opacity-90"
            >
              Kontakta oss
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-slate-700 transition-colors hover:text-primary"
              aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4" aria-label="Mobilnavigation">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <a 
                  href={COMPANY.emailHref}
                  className="flex items-center space-x-2 text-slate-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">{COMPANY.email}</span>
                </a>
                <Button 
                  onClick={scrollToContact}
                  className="earth-gradient text-white hover:opacity-90 w-full"
                >
                  Kontakta oss
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
