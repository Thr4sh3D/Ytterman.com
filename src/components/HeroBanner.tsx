import { ArrowRight, Shield, Award, CheckCircle } from 'lucide-react';
import { BAS, COMPANY, KA_CERT, PRICE_LABELS } from '@/config/company';

export const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 earth-gradient rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-lg text-foreground">Verifierad kompetens</p>
              <p className="text-sm text-muted-foreground">{BAS.qualificationLabel}</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center space-x-1 text-accent mb-1">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">{COMPANY.experienceYears}+ år</span>
            </div>
            <p className="text-xs text-muted-foreground">Erfarenhet</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
            <span className="text-sm text-foreground">Ansluten till {COMPANY.affiliation.name}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
            <span className="text-sm text-foreground">Kiwa {KA_CERT.certificateNumber} · {KA_CERT.authorizationLabel}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
            <span className="text-sm text-foreground">Digital hantering och projektspecifik tidplan</span>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Berätta om projektet</p>
              <a href="/kontakt/?source=hero-card" className="flex items-center space-x-2 hover:text-accent">
                <span className="font-semibold text-foreground">Skicka projektförfrågan</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </a>
            </div>
            
            <div className="text-right">
              <p className="text-xs text-muted-foreground mb-1">KA Bas</p>
              <p className="font-semibold text-sm text-foreground">{PRICE_LABELS.kaBasFrom}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
