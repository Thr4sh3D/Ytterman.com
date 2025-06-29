import { Shield, Award, CheckCircle } from 'lucide-react';

export const HeroBanner = () => {
  return (
    <div className="relative">
      {/* Main banner image/graphic */}
      <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 text-center">
        <div className="w-24 h-24 earth-gradient rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-12 h-12 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Certifierad Expert
        </h3>
        
        <p className="text-muted-foreground mb-6">
          Över 20 års erfarenhet inom bygg och kontroll
        </p>
        
        <div className="flex justify-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <Award className="w-4 h-4 text-accent" />
            <span>KA Certifierad</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>BAS-P/U</span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full"></div>
    </div>
  );
};