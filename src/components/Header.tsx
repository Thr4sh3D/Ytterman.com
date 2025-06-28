import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-8 h-8 earth-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Ytterman</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/tjanster" className="text-slate-700 hover:text-accent transition-colors">
              Tjänster
            </Link>
            <div className="relative group">
              <button className="text-slate-700 hover:text-accent transition-colors">
                Lokala sidor
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link to="/kontrollansvarig-sundsvall" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded">
                    Kontrollansvarig Sundsvall
                  </Link>
                  <Link to="/bas-p-harnosand" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded">
                    BAS-P Härnösand
                  </Link>
                  <Link to="/byggkontroll-solleftea" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded">
                    Byggkontroll Sollefteå
                  </Link>
                  <Link to="/kontrollansvarig-timra" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded">
                    Kontrollansvarig Timrå
                  </Link>
                  <Link to="/bas-u-kramfors" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded">
                    BAS-U Kramfors
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/villor-smahus" className="text-slate-700 hover:text-accent transition-colors">
              Villor & Småhus
            </Link>
            <Link to="/blogg" className="text-slate-700 hover:text-accent transition-colors">
              Blogg
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+46761118447" className="flex items-center space-x-2 text-slate-700 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>076-111 84 47</span>
            </a>
            <a href="mailto:tobias@ytterman.com" className="flex items-center space-x-2 text-slate-700 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>tobias@ytterman.com</span>
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/tjanster" className="text-slate-700 hover:text-accent transition-colors" onClick={closeMenu}>
                Tjänster
              </Link>
              <div className="pl-4 space-y-2">
                <Link to="/kontrollansvarig-sundsvall" className="block text-slate-600 hover:text-accent transition-colors" onClick={closeMenu}>
                  Kontrollansvarig Sundsvall
                </Link>
                <Link to="/bas-p-harnosand" className="block text-slate-600 hover:text-accent transition-colors" onClick={closeMenu}>
                  BAS-P Härnösand
                </Link>
                <Link to="/byggkontroll-solleftea" className="block text-slate-600 hover:text-accent transition-colors" onClick={closeMenu}>
                  Byggkontroll Sollefteå
                </Link>
                <Link to="/kontrollansvarig-timra" className="block text-slate-600 hover:text-accent transition-colors" onClick={closeMenu}>
                  Kontrollansvarig Timrå
                </Link>
                <Link to="/bas-u-kramfors" className="block text-slate-600 hover:text-accent transition-colors" onClick={closeMenu}>
                  BAS-U Kramfors
                </Link>
              </div>
              <Link to="/villor-smahus" className="text-slate-700 hover:text-accent transition-colors" onClick={closeMenu}>
                Villor & Småhus
              </Link>
              <Link to="/blogg" className="text-slate-700 hover:text-accent transition-colors" onClick={closeMenu}>
                Blogg
              </Link>
              <div className="pt-4 border-t space-y-2">
                <a href="tel:+46761118447" className="flex items-center space-x-2 text-slate-700 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>076-111 84 47</span>
                </a>
                <a href="mailto:tobias@ytterman.com" className="flex items-center space-x-2 text-slate-700 hover:text-accent transition-colors">
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