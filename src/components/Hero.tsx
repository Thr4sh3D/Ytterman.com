import { OptimizedImage } from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, CheckCircle } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full mb-6">
                <span className="text-sm font-medium">Certifierad enligt PBL</span>
              </div>
              
              <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Kontrollansvarig & BAS i Västernorrland
              </h1>
              
              <p className="text-xl text-slate-600 mb-8">
                Professionell hjälp med kontrollansvarig (KA) och byggarbetsmiljösamordnare (BAS-P/BAS-U) 
                för ditt byggprojekt. Över 20 års erfarenhet och fast pris.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={scrollToContact}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Få kostnadsfri offert
                </Button>
                <Button 
                  onClick={() => window.location.href = '/tjanster'}
                  variant="outline"
                  className="px-8 py-4 text-lg"
                >
                  Se alla tjänster
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Fast pris</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Snabb hantering</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Över 20 års erfarenhet</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Hela Västernorrland</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <OptimizedImage
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751537468357-profile_pic_color_square.png"
                  alt="Tobias Ytterman - Certifierad Kontrollansvarig och BAS i Västernorrland"
                  className="rounded-xl shadow-lg w-full h-auto"
                  width={540}
                  height={540}
                  priority={true}
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-slate-900">Certifierad Expert</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-100/50 via-transparent to-green-100/50 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-green-100/50 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};