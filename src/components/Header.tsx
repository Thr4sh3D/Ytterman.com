import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Hem', href: '/' },
    { name: 'Tjänster', href: '/tjanster' },
    { name: 'Guider', href: '/guider' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Kontakt', href: '/kontakt' },
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
            <a href="/" className="text-2xl font-bold earth-gradient bg-clip-text text-transparent">
              Ytterman
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+46761118447"
              className="flex items-center space-x-2 text-slate-700 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">076-111 84 47</span>
            </a>
            <Button 
              onClick={scrollToContact}
              className="earth-gradient text-white hover:opacity-90"
            >
              Kontakta oss
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
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
                  href="tel:+46761118447"
                  className="flex items-center space-x-2 text-slate-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">076-111 84 47</span>
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