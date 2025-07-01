import { ArrowRight, Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOContent, seoKeywords, seoContent } from './SEOContent';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const element = document.getElementById('priser');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SEOContent 
      keywords={seoKeywords.primary} 
      semanticKeywords={seoKeywords.semantic}
    >
      {/* ... keep existing code (section structure and styling) ... */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        {/* ... keep existing code (background decorations) ... */}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="text-left space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                    {seoContent.hero.title.split(' - ')[0]}
                    <span className="block text-primary mt-2">
                      {seoContent.hero.title.split(' - ')[1]}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                    {seoContent.hero.subtitle}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">Certifierad</p>
                      <p className="text-sm text-slate-600">KA, BAS-P & BAS-U</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">20+ År</p>
                      <p className="text-sm text-slate-600">Erfarenhet</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">Västernorrland</p>
                      <p className="text-sm text-slate-600">Hela regionen</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={scrollToContact}
                    className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {seoContent.hero.cta}
                  </Button>
                  
                  <Button 
                    onClick={scrollToPricing}
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold border-2 hover:bg-primary hover:text-white"
                  >
                    Se våra priser
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-slate-900">076-111 84 47</p>
                      <p className="text-sm text-slate-600">Ring direkt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-slate-900">tobias@ytterman.com</p>
                      <p className="text-sm text-slate-600">Snabb svarstid</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Hero Banner */}
              <div className="lg:pl-8">
                {/* ... keep existing code (HeroBanner component) ... */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SEOContent>
  );
};