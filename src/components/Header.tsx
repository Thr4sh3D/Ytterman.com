import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: 'hem', label: 'Hem' },
    { id: 'tjanster', label: 'Tjänster' },
    { id: 'priser', label: 'Priser' },
    { id: 'om-mig', label: 'Om mig' },
    { id: 'recensioner', label: 'Recensioner' },
    { id: 'blogg', label: 'Kunskap' },
    { id: 'faq', label: 'FAQ' },
    { id: 'kontakt', label: 'Kontakt' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 earth-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TY</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Ytterman</h1>
              <p className="text-xs text-slate-600">Trygg Byggprocess</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm">
              <a 
                href="tel:+46761118447" 
                className="flex items-center space-x-1 text-slate-600 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>076-111 84 47</span>
              </a>
              <a 
                href="mailto:tobias@ytterman.com" 
                className="flex items-center space-x-1 text-slate-600 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">tobias@ytterman.com</span>
              </a>
            </div>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="earth-gradient text-white hover:opacity-90"
            >
              Kostnadsfri konsultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-slate-700 hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex flex-col space-y-2 text-sm">
                  <a 
                    href="tel:+46761118447" 
                    className="flex items-center space-x-2 text-slate-600"
                  >
                    <Phone className="w-4 h-4" />
                    <span>076-111 84 47</span>
                  </a>
                  <a 
                    href="mailto:tobias@ytterman.com" 
                    className="flex items-center space-x-2 text-slate-600"
                  >
                    <Mail className="w-4 h-4" />
                    <span>tobias@ytterman.com</span>
                  </a>
                </div>
                <Button 
                  onClick={() => scrollToSection('kontakt')}
                  className="w-full mt-4 earth-gradient text-white hover:opacity-90"
                >
                  Kostnadsfri konsultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};