import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              Ytterman
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-slate-700 hover:text-primary transition-colors">
              Hem
            </a>
            <a href="/tjanster" className="text-slate-700 hover:text-primary transition-colors">
              Tjänster
            </a>
            <a href="/blogg" className="text-slate-700 hover:text-primary transition-colors">
              Guider
            </a>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-slate-700 hover:text-primary transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-slate-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">070-123 45 67</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@ytterman.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-slate-700 hover:text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="text-slate-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hem
              </a>
              <a 
                href="/tjanster" 
                className="text-slate-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tjänster
              </a>
              <a 
                href="/blogg" 
                className="text-slate-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Guider
              </a>
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="text-slate-700 hover:text-primary transition-colors text-left"
              >
                Kontakt
              </button>
              
              {/* Mobile contact info */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-2 text-slate-600 mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">070-123 45 67</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@ytterman.com</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};