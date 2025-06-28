import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, MapPin, Mountain, Factory, TreePine } from 'lucide-react';

const BasUKramfors = () => {
  const localServices = [
    "BAS-U för industriprojekt",
    "Säkerhetssamordning på byggarbetsplatser",
    "Specialkunskap om skogsindustri",
    "Erfarenhet av bergsmiljö och terräng"
  ];

  const industryFocus = [
    "Pappersbruk och massa industri",
    "Skogsmaskinsindustri",
    "Energiproduktion och kraftverk",
    "Infrastrukturprojekt i bergsterräng"
  ];

  return (
    <>
      <SEO 
        title="BAS-U Kramfors - Byggarbetsmiljösamordnare | Ytterman"
        description="BAS-U tjänster i Kramfors med specialkunskap om industri och skogsmiljö. Säker arbetsmiljösamordning för byggprojekt i Kramfors kommun."
        keywords="BAS-U Kramfors, byggarbetsmiljösamordnare Kramfors, säkerhetssamordning Kramfors, industri BAS"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-amber-600 mr-3" />
                  <h1 className="text-5xl font-bold text-slate-900">
                    BAS-U Kramfors
                  </h1>
                </div>
                <p className="text-xl text-slate-600 mb-8">
                  Byggarbetsmiljösamordnare under utförande i Kramfors med specialkunskap 
                  om industriprojekt och skogsmiljö. Vi säkerställer en trygg arbetsmiljö 
                  på alla typer av byggarbetsplatser.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Ring för offert: 076-111 84 47
                  </a>
                  <a 
                    href="mailto:tobias@ytterman.com"
                    className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors text-lg font-semibold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    tobias@ytterman.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Local Services */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                  BAS-U tjänster i Kramfors
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Våra specialområden</h3>
                    <div className="space-y-4">
                      {localServices.map((service, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-700 text-lg">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-xl">
                    <Mountain className="w-12 h-12 text-amber-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Kramfors unika miljö</h3>
                    <p className="text-slate-600 mb-4">
                      Kramfors bergiga terräng och starka industritradition skapar 
                      särskilda utmaningar för byggarbetsmiljö som kräver specialkunskap.
                    </p>
                    <div className="text-sm text-slate-500">
                      <p>• Bergsterräng: Säkerhet vid sprängning och schaktning</p>
                      <p>• Industrimiljö: Komplexa säkerhetskrav</p>
                      <p>• Skogsnärhet: Miljöhänsyn och logistik</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industry Focus */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Branschfokus
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {industryFocus.map((focus, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                      <Factory className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-lg">{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Safety Expertise */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  Säkerhetsexpertis för Kramfors
                </h2>
                <p className="text-xl text-slate-600 mb-12">
                  Kramfors industriella miljö och bergiga terräng kräver specialiserad 
                  säkerhetskunskap som vi har utvecklat genom många års erfarenhet.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Factory className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Industrisäkerhet</h3>
                    <p className="text-slate-600">Specialkunskap om industrimiljöer</p>
                  </div>
                  <div className="text-center">
                    <Mountain className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Bergssäkerhet</h3>
                    <p className="text-slate-600">Erfarenhet av arbete i bergsterräng</p>
                  </div>
                  <div className="text-center">
                    <TreePine className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Skogsmiljö</h3>
                    <p className="text-slate-600">Hänsyn till naturmiljö och logistik</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Behöver du BAS-U i Kramfors?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med 
                BAS-U tjänster för säker byggfas i Kramfors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  076-111 84 47
                </a>
                <a 
                  href="mailto:tobias@ytterman.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  tobias@ytterman.com
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BasUKramfors;