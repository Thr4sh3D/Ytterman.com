import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, MapPin, Building, TreePine, Factory } from 'lucide-react';

const ByggkontrollSolleftea = () => {
  const localServices = [
    "Kontrollansvarig för alla byggtyper",
    "BAS-P och BAS-U tjänster",
    "Specialkunskap om träbyggnation",
    "Erfarenhet av industriprojekt"
  ];

  const industryExpertise = [
    "Sågverksindustri och träförädling",
    "Logistik- och lageranläggningar",
    "Energiproduktion och kraftverk",
    "Jordbruks- och skogsbruksbyggnader"
  ];

  return (
    <>
      <SEO 
        title="Byggkontroll Sollefteå - Kontrollansvarig & BAS | Ytterman"
        description="Komplett byggkontroll i Sollefteå. Kontrollansvarig och BAS-tjänster med specialkunskap om träindustri och lokala förhållanden."
        keywords="byggkontroll Sollefteå, kontrollansvarig Sollefteå, BAS Sollefteå, träindustri byggkontroll"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-emerald-600 mr-3" />
                  <h1 className="text-5xl font-bold text-slate-900">
                    Byggkontroll Sollefteå
                  </h1>
                </div>
                <p className="text-xl text-slate-600 mb-8">
                  Komplett byggkontroll i Sollefteå med specialkunskap om träindustri och 
                  lokala byggförhållanden. Vi erbjuder kontrollansvarig och BAS-tjänster 
                  för alla typer av byggprojekt.
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

          {/* Services */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                  Våra tjänster i Sollefteå
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Byggkontrolltjänster</h3>
                    <div className="space-y-4">
                      {localServices.map((service, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-700 text-lg">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <TreePine className="w-12 h-12 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Träindustriexpertis</h3>
                    <p className="text-slate-600">
                      Sollefteå är hjärtat av svensk träindustri. Vi har specialkunskap 
                      om träbyggnation, industriprojekt och de unika krav som ställs 
                      på byggkontroll i denna miljö.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industry Expertise */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Branschexpertis
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {industryExpertise.map((expertise, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                      <Factory className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-lg">{expertise}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Local Knowledge */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  Lokalkännedom som gör skillnad
                </h2>
                <p className="text-xl text-slate-600 mb-12">
                  Sollefteå har unika förutsättningar med sin träindustri, älvmiljö och 
                  nordliga klimat. Vår lokalkännedom säkerställer att ditt projekt 
                  anpassas efter dessa specifika förhållanden.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Building className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Industriprojekt</h3>
                    <p className="text-slate-600">Specialkunskap om träindustrins krav</p>
                  </div>
                  <div className="text-center">
                    <TreePine className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Träbyggnation</h3>
                    <p className="text-slate-600">Expertis inom moderna träkonstruktioner</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Lokala förhållanden</h3>
                    <p className="text-slate-600">Anpassning till klimat och miljö</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Redo för ditt projekt i Sollefteå?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med 
                byggkontroll för ditt projekt i Sollefteå.
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

export default ByggkontrollSolleftea;