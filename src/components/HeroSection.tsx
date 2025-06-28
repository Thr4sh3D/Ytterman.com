import { Button } from '@/components/ui/button';
import { Phone, Mail, CheckCircle } from 'lucide-react';

export const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 earth-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Kontrollansvarig & BAS i{' '}
              <span className="earth-gradient bg-clip-text text-transparent">
                Västernorrland
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Professionell byggkontroll och arbetsmiljösamordning med över 20 års erfarenhet. 
              Vi säkerställer att ditt byggprojekt uppfyller alla krav och bestämmelser.
            </p>
            
            <div className="space-y-3 mb-8">
              {[
                'Certifierad kontrollansvarig',
                'BAS-P och BAS-U tjänster',
                'Snabb handläggning',
                'Kostnadsfria konsultationer'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
              >
                Få kostnadsfri konsultation
              </Button>
              
              <a 
                href="tel:+46761118447"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                076-111 84 47
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Våra tjänsteområden
              </h3>
              
              <div className="space-y-4">
                {[
                  { city: 'Sundsvall', projects: 'Flertalet projekt' },
                  { city: 'Härnösand', projects: 'Flera projekt' },
                  { city: 'Sollefteå', projects: 'Flera projekt' },
                  { city: 'Timrå', projects: 'Flera projekt' },
                  { city: 'Kramfors', projects: 'Flera projekt' }
                ].map((area, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
                    <span className="font-medium text-slate-900">{area.city}</span>
                    <span className="text-sm text-slate-500">{area.projects}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Kontakta oss:</span>
                  <div className="flex space-x-3">
                    <a href="tel:+46761118447" className="text-accent hover:text-accent/80">
                      <Phone className="w-4 h-4" />
                    </a>
                    <a href="mailto:tobias@ytterman.com" className="text-accent hover:text-accent/80">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};