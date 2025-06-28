import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { Building, MapPin, Phone, Mail, CheckCircle, Clock, Award } from 'lucide-react';

const KontrollansvarigSundsvall = () => {
  return (
    <>
      <SEO 
        title="Kontrollansvarig Sundsvall - Certifierad KA & BAS | Ytterman"
        description="Behöver du en kontrollansvarig i Sundsvall? Ytterman erbjuder certifierade KA-tjänster, BAS-P/BAS-U och bygglovshjälp. Över 20 års lokal erfarenhet. Ring 076-111 84 47."
        keywords="kontrollansvarig Sundsvall, KA Sundsvall, BAS-P Sundsvall, BAS-U Sundsvall, byggkontroll Sundsvall, bygglov Sundsvall, slutbevis Sundsvall"
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
                  <span className="text-lg font-semibold text-slate-600">Sundsvall, Västernorrland</span>
                </div>
                
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Kontrollansvarig i Sundsvall
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                  Behöver du en certifierad kontrollansvarig för ditt byggprojekt i Sundsvall? 
                  Ytterman erbjuder professionella KA-tjänster, BAS-P/BAS-U och bygglovshjälp 
                  med över 20 års lokal erfarenhet.
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
                    <p className="text-sm text-slate-600">Enligt nya regelverket 2025</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">20+ År i Sundsvall</h3>
                    <p className="text-sm text-slate-600">Lokal erfarenhet och kunskap</p>
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

          {/* Local Expertise */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Lokal Expertis i Sundsvall
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Djup Kunskap om Sundsvalls Byggprocess
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Med över 20 års erfarenhet av byggprojekt i Sundsvall känner vi 
                      Sundsvalls kommuns bygglovsprocess, lokala förutsättningar och 
                      specifika krav som gäller i området.
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Erfaren av Sundsvalls kommuns bygglovsprocess</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Känner lokala entreprenörer och leverantörer</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Förstår klimat- och markförhållanden</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Snabb kommunikation med byggnadsnämnden</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 p-8 rounded-xl">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">
                      Våra Tjänster i Sundsvall
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Building className="w-4 h-4 text-accent mr-3" />
                        <span className="text-slate-700">Kontrollansvarig (KA)</span>
                      </li>
                      <li className="flex items-center">
                        <Building className="w-4 h-4 text-accent mr-3" />
                        <span className="text-slate-700">BAS-P (Projektering)</span>
                      </li>
                      <li className="flex items-center">
                        <Building className="w-4 h-4 text-accent mr-3" />
                        <span className="text-slate-700">BAS-U (Utförande)</span>
                      </li>
                      <li className="flex items-center">
                        <Building className="w-4 h-4 text-accent mr-3" />
                        <span className="text-slate-700">Bygglovshandlingar</span>
                      </li>
                      <li className="flex items-center">
                        <Building className="w-4 h-4 text-accent mr-3" />
                        <span className="text-slate-700">Planritningar</span>
                      </li>
                      <li className="flex items-center">
                        <Building className="w-4 h-4 text-accent mr-3" />
                        <span className="text-slate-700">Kombinerade paket</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <p className="text-sm text-slate-600 mb-3">
                        <strong>Priser från:</strong> 15,000 SEK
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

          {/* Local Projects */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-12">
                  Projekttyper vi Hanterar i Sundsvall
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Building className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Villabyggen</h3>
                    <p className="text-slate-600 text-sm">Nybyggnation och tillbyggnader av villor i Sundsvalls olika områden</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Building className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Flerfamiljshus</h3>
                    <p className="text-slate-600 text-sm">Bostadsrättsföreningar och hyresrätter i Sundsvalls stadskärna</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Building className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Kommersiella Byggnader</h3>
                    <p className="text-slate-600 text-sm">Kontor, butiker och industribyggnader i Sundsvalls näringsområden</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Building className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Renoveringar</h3>
                    <p className="text-slate-600 text-sm">Omfattande renoveringar av äldre byggnader i Sundsvalls centrum</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Building className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Fritidshus</h3>
                    <p className="text-slate-600 text-sm">Sommarstugor och fritidshus i Sundsvalls skärgård och omland</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Building className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Specialbyggnader</h3>
                    <p className="text-slate-600 text-sm">Unika projekt med särskilda krav och utmaningar</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Redo att Starta ditt Byggprojekt i Sundsvall?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig genom 
                hela byggprocessen från bygglov till slutbevis.
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
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Verksam i hela Sundsvall och omkringliggande områden • Kostnadsfri konsultation • Fast pris
                </p>
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

export default KontrollansvarigSundsvall;