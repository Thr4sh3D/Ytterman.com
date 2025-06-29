import { Shield, Award, CheckCircle, Building } from 'lucide-react';

export const HeroBanner = () => {
  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-lg">
      <div className="text-center">
        <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-4">
          <Building className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Certifierad & Erfaren
        </h3>
        
        <p className="text-muted-foreground mb-6">
          Över 20 års erfarenhet inom bygg och arbetsmiljö
        </p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-accent" />
            <span>KA Certifierad</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-accent" />
            <span>BAS-P/U</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>SBR Medlem</span>
          </div>
          <div className="flex items-center space-x-2">
            <Building className="w-4 h-4 text-accent" />
            <span>Västernorrland</span>
          </div>
        </div>
      </div>
    </div>
  );
};