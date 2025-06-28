import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Home, ArrowLeft, Phone, Mail } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-9xl font-bold text-slate-200 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Sidan hittades inte
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Tyvärr kunde vi inte hitta sidan du letar efter. Den kan ha flyttats, 
              tagits bort eller så skrev du fel adress.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/"
                className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                <Home className="w-5 h-5 mr-2" />
                Tillbaka till startsidan
              </Link>
              <Link 
                to="/tjanster"
                className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors text-lg font-semibold"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Se våra tjänster
              </Link>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Behöver du hjälp?
              </h3>
              <p className="text-slate-600 mb-6">
                Kontakta oss direkt så hjälper vi dig hitta rätt information om 
                kontrollansvarig och BAS-tjänster i Västernorrland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  076-111 84 47
                </a>
                <a 
                  href="mailto:tobias@ytterman.com"
                  className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  tobias@ytterman.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;