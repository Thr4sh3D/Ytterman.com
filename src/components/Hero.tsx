import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Professionell <span className="text-green-600">Byggkontroll</span> för Ditt Projekt
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Vi erbjuder expertis inom byggkontroll, kontrollansvarig och teknisk konsultation. 
              Säkerställ kvalitet och regelefterlevnad i ditt byggprojekt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/kontakt" 
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                Få Offert <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/tjanster" 
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
              >
                Våra Tjänster
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Certifierad</h3>
                  <p className="text-gray-600 text-sm">Auktoriserad kontrollansvarig</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Kvalitet</h3>
                  <p className="text-gray-600 text-sm">Högsta standard</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRight className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Snabbt</h3>
                  <p className="text-gray-600 text-sm">Effektiv hantering</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/api/placeholder/600/400"
              alt="Byggkontroll och teknisk konsultation"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">100+ Projekt</h4>
                  <p className="text-gray-600 text-sm">Genomförda med framgång</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};