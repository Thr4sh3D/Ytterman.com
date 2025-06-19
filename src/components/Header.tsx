import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:tobias@ytterman.com';
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 earth-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">TY</span>
            </div>
            <div>
              <div className="font-bold text-foreground">Ytterman</div>
              <div className="text-xs text-muted-foreground">Trygg Byggprocess</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Hem
            </Link>
            <Link 
              to="/blogg" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/blogg') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Blogg
            </Link>
            <div className="flex items-center space-x-2">
              <Button 
                onClick={callPhone}
                size="sm"
                className="earth-gradient text-white hover:opacity-90"
              >
                <Phone className="w-4 h-4 mr-2" />
                076-111 84 47
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hem
              </Link>
              <Link 
                to="/blogg" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/blogg') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blogg
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  onClick={callPhone}
                  size="sm"
                  className="earth-gradient text-white hover:opacity-90"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  076-111 84 47
                </Button>
                <Button 
                  onClick={sendEmail}
                  variant="outline"
                  size="sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  E-post
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};