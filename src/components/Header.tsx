import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 earth-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TY</span>
            </div>
            <div>
              <div className="font-bold text-foreground text-lg">Ytterman</div>
              <div className="text-xs text-muted-foreground">Trygg Byggprocess</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-accent transition-colors">
              Hem
            </Link>
            <Link to="/blogg" className="text-foreground hover:text-accent transition-colors">
              Blogg
            </Link>
            <div className="relative group">
              <span className="text-foreground hover:text-accent transition-colors cursor-pointer">
                Serviceområden
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link to="/ka-sundsvall" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary">
                    Sundsvall
                  </Link>
                  <Link to="/ka-harnosand" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary">
                    Härnösand
                  </Link>
                  <Link to="/ka-solleftea" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary">
                    Sollefteå
                  </Link>
                  <Link to="/ka-timra" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary">
                    Timrå
                  </Link>
                  <Link to="/ka-kramfors" className="block px-4 py-2 text-sm text-foreground hover:bg-secondary">
                    Kramfors
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={callPhone}
              className="earth-gradient text-white hover:opacity-90"
            >
              <Phone className="w-4 h-4 mr-2" />
              076-111 84 47
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-accent"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hem
              </Link>
              <Link 
                to="/blogg" 
                className="block text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogg
              </Link>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-muted-foreground">Serviceområden</div>
                <Link 
                  to="/ka-sundsvall" 
                  className="block pl-4 text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sundsvall
                </Link>
                <Link 
                  to="/ka-harnosand" 
                  className="block pl-4 text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Härnösand
                </Link>
                <Link 
                  to="/ka-solleftea" 
                  className="block pl-4 text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sollefteå
                </Link>
                <Link 
                  to="/ka-timra" 
                  className="block pl-4 text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Timrå
                </Link>
                <Link 
                  to="/ka-kramfors" 
                  className="block pl-4 text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kramfors
                </Link>
              </div>
              <Button 
                onClick={callPhone}
                className="w-full earth-gradient text-white hover:opacity-90"
              >
                <Phone className="w-4 h-4 mr-2" />
                Ring 076-111 84 47
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};