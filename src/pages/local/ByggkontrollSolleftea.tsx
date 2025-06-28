import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { Building, MapPin, Phone, Mail, CheckCircle, Clock, Award } from 'lucide-react';

const ByggkontrollSolleftea = () => {
  return (
    <>
      <SEO 
        title="Byggkontroll Sollefteå - Kontrollansvarig & BAS | Ytterman"
        description="Professionell byggkontroll i Sollefteå. Ytterman erbjuder kontrollansvarig, BAS-P/BAS-U och bygglovshjälp. Över 20 års erfarenhet. Ring 076-111 84 47."
        keywords="byggkontroll Sollefteå, kontrollansvarig Sollefteå, BAS Sollefteå, bygglov Sollefteå, slutbevis Sollefteå, KA Sollefteå"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-accent mr-3" />
                  <span className="text-lg font-semibold text-slate-600">Sollefteå, Västernorrland</span>
                </div>
                
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Byggkontroll i Sollefteå
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                  Behöver du professionell byggkontroll för ditt projekt i Sollefteå? 
                  Ytterman erbjuder certifierade tjänster inom kontrollansvarig, BAS och 
                  bygglovsprocessen med djup lokal kunskap.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    076-111 84 47
                  </a>
                  <a 
                    href="mailto:tobias@ytterman.com"
                    className="inline-flex items-center px-8 py-4 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-lg font-semibold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Skicka e-post
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Award className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Certifierad</h3>
                    <p className="text-sm text-slate-600">KA & BAS enligt nya regler</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Lokal Expertis</h3>
                    <p className="text-sm text-slate-600">Sollefteås förutsättningar</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Komplett Service</h3>
                    <p className="text-sm text-slate-600">Från bygglov till slutbevis</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Byggkontrolltjänster i Sollefteå
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-slate-50 p-6 rounded-xl text-center">
                    <Building className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Kontrollansvarig</h3>
                    <p className="text-slate-600 text-sm mb-4">Certifierad KA för alla byggprojekt</p>
                    <p className="text-accent font-semibold">Från 15,000 SEK</p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-xl text-center">
                    <Building className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">BAS-P</h3>
                    <p className="text-slate-600 text-sm mb-4">Arbetsmiljösamordnare projektering</p>
                    <p className="text-accent font-semibold">Från 12,000 SEK</p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-xl text-center">
                    <Building className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">BAS-U</h3>
                    <p className="text-slate-600 text-sm mb-4">Arbetsmiljösamordnare utförande</p>
                    <p className="text-accent font-semibold">Från 18,000 SEK</p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-xl text-center">
                    <Building className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Kombinerat</h3>
                    <p className="text-slate-600 text-sm mb-4">KA + BAS paket</p>
                    <p className="text-accent font-semibold">Från 25,000 SEK</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Local Expertise */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Varför Välja Ytterman i Sollefteå?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Lokal Kunskap & Erfarenhet
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Känner Sollefteå kommuns bygglovsprocess</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Förstår lokala klimat- och markförhållanden</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Etablerade kontakter med lokala entreprenörer</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Snabb respons och närhet till projektet</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Certifiering & Kvalitet
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Certifierad enligt nya regelverket 2025</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Medlem i SBR (Sveriges Byggindustrier)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Över 20 års branschexpertis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Kontinuerlig vidareutbildning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Starta ditt Byggprojekt i Sollefteå
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med 
                byggkontroll från start till mål.
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
                  className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold"
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