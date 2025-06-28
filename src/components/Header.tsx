import { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBranchOpen, setIsBranchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsBranchOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-slate-100">
          <div className="flex items-center space-x-6">
            <a href="tel:+46761118447" className="flex items-center text-slate-600 hover:text-accent transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              076-111 84 47
            </a>
            <a href="mailto:tobias@ytterman.com" className="flex items-center text-slate-600 hover:text-accent transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              tobias@ytterman.com
            </a>
          </div>
          <div className="text-slate-600">
            Certifierad Kontrollansvarig & BAS i Västernorrland
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-slate-900" onClick={closeMenu}>
            Ytterman
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 hover:text-accent transition-colors">
              Hem
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-slate-700 hover:text-accent transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Tjänster
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link to="/tjanster" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors">
                    Alla tjänster
                  </Link>
                  <div className="border-t border-slate-100 my-2"></div>
                  <Link to="/kontrollansvarig" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors">
                    Kontrollansvarig (KA)
                  </Link>
                  <Link to="/bas-p" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors">
                    BAS-P (Projektering)
                  </Link>
                  <Link to="/bas-u" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors">
                    BAS-U (Utförande)
                  </Link>
                </div>
              )}
            </div>

            {/* Branch Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-slate-700 hover:text-accent transition-colors"
                onMouseEnter={() => setIsBranchOpen(true)}
                onMouseLeave={() => setIsBranchOpen(false)}
              >
                Branscher
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isBranchOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50"
                  onMouseEnter={() => setIsBranchOpen(true)}
                  onMouseLeave={() => setIsBranchOpen(false)}
                >
                  <Link to="/villor-smahus" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors">
                    Villor & Småhus
                  </Link>
                  <Link to="/tjanster" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors">
                    Flerfamiljshus & BRF
                  </Link>
                  <Link to="/tjanster" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors">
                    Kommersiella byggnader
                  </Link>
                </div>
              )}
            </div>

            <Link to="/blogg" className="text-slate-700 hover:text-accent transition-colors">
              Blogg
            </Link>
            
            <a href="#kontakt" className="text-slate-700 hover:text-accent transition-colors">
              Kontakt
            </a>
            
            <a 
              href="tel:+46761118447" 
              className="px-6 py-2 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Ring nu
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-slate-700 hover:text-accent transition-colors" onClick={closeMenu}>
                Hem
              </Link>
              
              <div className="border-l-2 border-accent pl-4">
                <div className="font-semibold text-slate-900 mb-2">Tjänster</div>
                <Link to="/tjanster" className="block text-slate-700 hover:text-accent transition-colors mb-2" onClick={closeMenu}>
                  Alla tjänster
                </Link>
                <Link to="/kontrollansvarig" className="block text-slate-700 hover:text-accent transition-colors mb-2" onClick={closeMenu}>
                  Kontrollansvarig (KA)
                </Link>
                <Link to="/bas-p" className="block text-slate-700 hover:text-accent transition-colors mb-2" onClick={closeMenu}>
                  BAS-P (Projektering)
                </Link>
                <Link to="/bas-u" className="block text-slate-700 hover:text-accent transition-colors" onClick={closeMenu}>
                  BAS-U (Utförande)
                </Link>
              </div>

              <div className="border-l-2 border-accent pl-4">
                <div className="font-semibold text-slate-900 mb-2">Branscher</div>
                <Link to="/villor-smahus" className="block text-slate-700 hover:text-accent transition-colors mb-2" onClick={closeMenu}>
                  Villor & Småhus
                </Link>
                <Link to="/tjanster" className="block text-slate-700 hover:text-accent transition-colors mb-2" onClick={closeMenu}>
                  Flerfamiljshus & BRF
                </Link>
                <Link to="/tjanster" className="block text-slate-700 hover:text-accent transition-colors" onClick={closeMenu}>
                  Kommersiella byggnader
                </Link>
              </div>
              
              <Link to="/blogg" className="text-slate-700 hover:text-accent transition-colors" onClick={closeMenu}>
                Blogg
              </Link>
              
              <a href="#kontakt" className="text-slate-700 hover:text-accent transition-colors" onClick={closeMenu}>
                Kontakt
              </a>
              
              <a 
                href="tel:+46761118447" 
                className="inline-flex items-center justify-center px-6 py-3 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                onClick={closeMenu}
              >
                <Phone className="w-4 h-4 mr-2" />
                076-111 84 47
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};