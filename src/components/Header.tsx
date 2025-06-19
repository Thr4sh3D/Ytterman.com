import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:tobias@ytterman.com';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl text-foreground">
            Tobias Ytterman
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Hem
            </Link>
            <Link to="/blogg" className="text-muted-foreground hover:text-foreground transition-colors">
              Blogg
            </Link>
            <div className="flex items-center space-x-4">
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
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
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
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hem
              </Link>
              <Link 
                to="/blogg" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogg
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  onClick={() => {
                    callPhone();
                    setIsMenuOpen(false);
                  }}
                  size="sm"
                  className="earth-gradient text-white hover:opacity-90"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ring 076-111 84 47
                </Button>
                <Button
                  onClick={() => {
                    sendEmail();
                    setIsMenuOpen(false);
                  }}
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Skicka e-post
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};