import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-earth">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 earth-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TY</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Ytterman</h1>
              <p className="text-xs text-muted-foreground">Trygg Byggprocess</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hem')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Hem
            </button>
            <button 
              onClick={() => scrollToSection('tjanster')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Tjänster
            </button>
            <button 
              onClick={() => scrollToSection('priser')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Priser
            </button>
            <button 
              onClick={() => scrollToSection('om-mig')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Om mig
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+46761118447"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Ring för rådgivning</span>
            </a>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="earth-gradient text-white hover:opacity-90"
            >
              Kontakta mig
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hem')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Hem
              </button>
              <button 
                onClick={() => scrollToSection('tjanster')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Tjänster
              </button>
              <button 
                onClick={() => scrollToSection('priser')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Priser
              </button>
              <button 
                onClick={() => scrollToSection('om-mig')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Om mig
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Kontakt
              </button>
              <a 
                href="tel:+46761118447"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Ring för rådgivning</span>
              </a>
              <Button 
                onClick={() => scrollToSection('kontakt')}
                className="earth-gradient text-white hover:opacity-90 w-full mt-4"
              >
                Kontakta mig
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};