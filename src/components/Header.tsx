import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useMobile();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Hem', path: '/' },
    { name: 'Tjänster', path: '/tjanster' },
    { name: 'Blogg', path: '/blogg' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

  const serviceItems = [
    { name: 'Kontrollansvarig', path: '/kontrollansvarig' },
    { name: 'BAS-P', path: '/bas-p' },
    { name: 'BAS-U', path: '/bas-u' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-900">
            Ytterman
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors ${
                  isActive(item.path) 
                    ? 'text-primary' 
                    : 'text-slate-700 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-lg font-medium text-slate-700 hover:text-primary">
                Tjänster
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
          
          {/* Contact Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => {
                window.location.href = '/kontakt';
              }}
              className="earth-gradient text-white hover:opacity-90"
            >
              Kontakta oss
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-slate-900"
            aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium transition-colors ${
                    isActive(item.path) 
                      ? 'text-primary' 
                      : 'text-slate-700 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-2 border-t border-slate-200">
                <p className="text-sm font-semibold text-slate-500 mb-2">Tjänster</p>
                {serviceItems.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block py-2 text-lg font-medium text-slate-700 hover:text-primary"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <Button 
                onClick={() => {
                  window.location.href = '/kontakt';
                }}
                className="earth-gradient text-white hover:opacity-90 w-full mt-4"
              >
                Kontakta oss
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};