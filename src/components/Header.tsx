import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 earth-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TY</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Ytterman</h1>
              <p className="text-xs text-slate-600">Trygg Byggprocess</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hem')}
              className="text-slate-700 hover:text-accent transition-colors"
            >
              Hem
            </button>
            <button 
              onClick={() => scrollToSection('tjanster')}
              className="text-slate-700 hover:text-accent transition-colors"
            >
              Tjänster
            </button>
            <Link 
              to="/tjanster"
              className="text-slate-700 hover:text-accent transition-colors"
            >
              Alla Tjänster
            </Link>
            <button 
              onClick={() => scrollToSection('priser')}
              className="text-slate-700 hover:text-accent transition-colors"
            >
              Priser
            </button>
            <Link 
              to="/blogg"
              className="text-slate-700 hover:text-accent transition-colors"
            >
              Blogg
            </Link>
            <button 
              onClick={() => scrollToSection('om-mig')}
              className="text-slate-700 hover:text-accent transition-colors"
            >
              Om mig
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-slate-700 hover:text-accent transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+46761118447" 
              className="flex items-center space-x-2 text-slate-700 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">076-111 84 47</span>
            </a>
            <a 
              href="mailto:tobias@ytterman.com" 
              className="flex items-center space-x-2 text-slate-700 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">E-post</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-700 hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hem')}
                className="text-left text-slate-700 hover:text-accent transition-colors"
              >
                Hem
              </button>
              <button 
                onClick={() => scrollToSection('tjanster')}
                className="text-left text-slate-700 hover:text-accent transition-colors"
              >
                Tjänster
              </button>
              <Link 
                to="/tjanster"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-slate-700 hover:text-accent transition-colors"
              >
                Alla Tjänster
              </Link>
              <button 
                onClick={() => scrollToSection('priser')}
                className="text-left text-slate-700 hover:text-accent transition-colors"
              >
                Priser
              </button>
              <Link 
                to="/blogg"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-slate-700 hover:text-accent transition-colors"
              >
                Blogg
              </Link>
              <button 
                onClick={() => scrollToSection('om-mig')}
                className="text-left text-slate-700 hover:text-accent transition-colors"
              >
                Om mig
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="text-left text-slate-700 hover:text-accent transition-colors"
              >
                Kontakt
              </button>
              
              {/* Mobile Contact */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <a 
                  href="tel:+46761118447" 
                  className="flex items-center space-x-2 text-slate-700 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>076-111 84 47</span>
                </a>
                <a 
                  href="mailto:tobias@ytterman.com" 
                  className="flex items-center space-x-2 text-slate-700 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>tobias@ytterman.com</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};