import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-green-600">
            BuildControl
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/tjanster" className="text-gray-700 hover:text-green-600 transition-colors">
              Tjänster
            </Link>
            <Link to="/kontrollansvarig" className="text-gray-700 hover:text-green-600 transition-colors">
              Kontrollansvarig
            </Link>
            <Link to="/bas-p" className="text-gray-700 hover:text-green-600 transition-colors">
              BAS P
            </Link>
            <Link to="/bas-u" className="text-gray-700 hover:text-green-600 transition-colors">
              BAS U
            </Link>
            <Link to="/blogg" className="text-gray-700 hover:text-green-600 transition-colors">
              Blogg
            </Link>
            <Link to="/kontakt" className="text-gray-700 hover:text-green-600 transition-colors">
              Kontakt
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/tjanster" className="text-gray-700 hover:text-green-600 transition-colors">
                Tjänster
              </Link>
              <Link to="/kontrollansvarig" className="text-gray-700 hover:text-green-600 transition-colors">
                Kontrollansvarig
              </Link>
              <Link to="/bas-p" className="text-gray-700 hover:text-green-600 transition-colors">
                BAS P
              </Link>
              <Link to="/bas-u" className="text-gray-700 hover:text-green-600 transition-colors">
                BAS U
              </Link>
              <Link to="/blogg" className="text-gray-700 hover:text-green-600 transition-colors">
                Blogg
              </Link>
              <Link to="/kontakt" className="text-gray-700 hover:text-green-600 transition-colors">
                Kontakt
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};