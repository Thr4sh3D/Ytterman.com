import { OptimizedImage } from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Phone, Mail, CheckCircle } from 'lucide-react';

export const About = () => {
  return (
    <section id="om" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <OptimizedImage
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751537468357-profile_pic_color_square.png"
                alt="Tobias Ytterman - Certifierad Kontrollansvarig och BAS i Västernorrland"
                className="rounded-xl shadow-lg w-full h-auto"
                width={540}
                height={540}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-slate-900">Certifierad Expert</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Om Tobias Ytterman
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Med över 20 års erfarenhet inom byggbranschen erbjuder jag professionella tjänster som 
                Kontrollansvarig (KA) och Byggarbetsmiljösamordnare (BAS-P/BAS-U) i Västernorrland.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Jag är certifierad enligt Plan- och bygglagen (PBL) och har omfattande erfarenhet av 
                både små och stora byggprojekt. Min specialitet är att säkerställa att ditt projekt 
                följer alla regler och krav, samtidigt som jag håller processen smidig och effektiv.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Certifierad Kontrollansvarig</h3>
                    <p className="text-slate-600">Fullständig behörighet för teknisk kontroll enligt PBL</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Certifierad BAS-P & BAS-U</h3>
                    <p className="text-slate-600">Arbetsmiljösamordnare för både projektering och utförande</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Lokal Expertis</h3>
                    <p className="text-slate-600">Specialiserad på byggprojekt i Västernorrland</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  076-111 84 47
                </a>
                <a 
                  href="mailto:tobias@ytterman.com"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  tobias@ytterman.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};