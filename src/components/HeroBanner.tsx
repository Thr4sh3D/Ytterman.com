import { Building, Shield, Award } from 'lucide-react';

export const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4">
          <Building className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-4 right-4">
          <Shield className="w-8 h-8 text-accent" />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Award className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="w-20 h-20 earth-gradient rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-2xl">TY</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          Certifierad Kontrollansvarig
        </h3>
        <p className="text-muted-foreground mb-4">
          BAS-P & BAS-U enligt nya regelverket 2025
        </p>
        <div className="flex justify-center space-x-4 text-sm">
          <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">
            Västernorrland
          </span>
          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">
            20+ År
          </span>
        </div>
      </div>
    </div>
  );
};