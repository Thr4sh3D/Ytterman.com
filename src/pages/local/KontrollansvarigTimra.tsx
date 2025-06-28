import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { Building, MapPin, Phone, Mail, CheckCircle, Clock, Award } from 'lucide-react';

const KontrollansvarigTimra = () => {
  return (
    <>
      <SEO 
        title="Kontrollansvarig Timrå - Certifierad KA & BAS | Ytterman"
        description="Behöver du kontrollansvarig i Timrå? Ytterman erbjuder certifierade KA-tjänster, BAS-P/BAS-U och bygglovshjälp. Lokal expertis i 20+ år. Ring 076-111 84 47."
        keywords="kontrollansvarig Timrå, KA Timrå, BAS Timrå, byggkontroll Timrå, bygglov Timrå, slutbevis Timrå"
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
                  <span className="text-lg font-semibold text-slate-600">Timrå, Västernorrland</span>
                </div>
                
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Kontrollansvarig i Timrå
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                  Behöver du en certifierad kontrollansvarig för ditt byggprojekt i Timrå? 
                  Ytterman erbjuder professionella KA-tjänster med djup lokal kunskap och 
                  över 20 års erfarenhet av byggprojekt i området.
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
                    <h3 className="font-semibold text-slate-900">Certifierad KA</h3>
                    <p className="text-sm text-slate-600">Enligt PBL och nya regler</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Timrå-expert</h3>
                    <p className="text-sm text-slate-600">Lokal kunskap sedan 20+ år</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Fast Pris</h3>
                    <p className="text-sm text-slate-600">Kostnadsfri konsultation</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services in Timrå */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  KA-tjänster i Timrå
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Komplett Kontrollansvarig-service
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Som kontrollansvarig i Timrå säkerställer vi att ditt byggprojekt 
                      följer alla byggbestämmelser och säkerhetsföreskrifter från start till mål.
                    </p>
                    
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Vad ingår i våra KA-tjänster:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Kontrollplan och kontrollprogram</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Teknisk kontroll under byggprocessen</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Slutbesiktning och slutbevis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Kommunikation med Timrå kommun</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Fullständig dokumentation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 p-8 rounded-xl">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">
                      Projekttyper i Timrå
                    </h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center">
                        <Building className="w-4 h-4 text-accent mr-3" />
                        <span className="text-slate-700 text-sm">Villabyggen och tillbyggnader</span>
                      </li>
                      <li className="flex items-center">
                        <Building className="w-4 h-4 text-accent mr-3" />
                        <span className="text-slate-700 text-sm">Flerfamiljshus och bostadsrätter</span>
                      </li>
                      <li className="flex items-center">
                        <Building className="w-4 h-4 text-accent mr-3" />
                        <span className="text-slate-700 text-sm">Kommersiella byggnader</span>
                      </li>
                      <li className="flex items-center">
                        <Building className="w-4 h-4 text-accent mr-3" />
                        <span className="text-slate-700 text-sm">Industribyggnader</span>
                      </li>
                      <li className="flex items-center">
                        <Building className="w-4 h-4 text-accent mr-3" />
                        <span className="text-slate-700 text-sm">Renoveringar och ombyggnader</span>
                      </li>
                    </ul>
                    
                    <div className="border-t border-slate-200 pt-6">
                      <p className="text-sm text-slate-600 mb-3">
                        <strong>Pris från:</strong> 15,000 SEK
                      </p>
                      <a 
                        href="tel:+46761118447"
                        className="w-full inline-flex items-center justify-center px-6 py-3 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Begär offert
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Varför Välja Ytterman i Timrå?
                </h2>
                
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        Lokal Förankring
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Känner Timrå kommuns processer</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Etablerade kontakter lokalt</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Snabb respons och närhet</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        Professionell Service
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Certifierad enligt senaste regler</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Fasta priser utan överraskningar</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Kan kombineras med BAS-tjänster</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Redo för ditt Byggprojekt i Timrå?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig 
                genom hela processen från bygglov till slutbevis.
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

export default KontrollansvarigTimra;