import { Building2, Shield, Award } from 'lucide-react';

export const HeroBanner = () => {
  return (
    <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
      {/* Beautiful gradient background */}
      <div className="w-full h-full bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 relative">
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-orange-900/20"></div>
        
        {/* Construction themed decorative elements */}
        <div className="absolute top-6 right-6 opacity-20">
          <Building2 className="w-16 h-16 text-amber-800" />
        </div>
        <div className="absolute top-12 left-8 opacity-15">
          <Shield className="w-12 h-12 text-orange-800" />
        </div>
        <div className="absolute bottom-8 right-12 opacity-15">
          <Award className="w-14 h-14 text-amber-700" />
        </div>
        
        {/* Main content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-amber-900 px-6">
            <h3 className="text-3xl lg:text-4xl font-bold mb-3 drop-shadow-sm">
              Trygg Byggprocess
            </h3>
            <p className="text-lg lg:text-xl font-medium opacity-90">
              Professionell kontrollansvarig & BAS
            </p>
          </div>
        </div>
        
        {/* Bottom overlay with credentials */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
            <div className="flex items-center justify-between text-sm font-medium text-amber-900">
              <span>20+ års erfarenhet</span>
              <span className="hidden sm:inline">•</span>
              <span>Certifierad & Erfaren</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Västernorrland</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};