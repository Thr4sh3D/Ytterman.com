import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { Users, MapPin, Phone, Mail, CheckCircle, Clock, Award, Shield } from 'lucide-react';

const BasUKramfors = () => {
  return (
    <>
      <SEO 
        title="BAS-U Kramfors - Byggarbetsmiljösamordnare Utförande | Ytterman"
        description="Behöver du BAS-U i Kramfors? Ytterman erbjuder certifierad byggarbetsmiljösamordnare under utförande. Säkerhetsronder och arbetsmiljöuppföljning. Ring 076-111 84 47."
        keywords="BAS-U Kramfors, byggarbetsmiljösamordnare Kramfors, arbetsmiljö Kramfors, säkerhetsronder Kramfors, BAS utförande Kramfors"
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
                  <span className="text-lg font-semibold text-slate-600">Kramfors, Västernorrland</span>
                </div>
                
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  BAS-U i Kramfors
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                  Behöver du en certifierad Byggarbetsmiljösamordnare under utförande (BAS-U) 
                  för ditt byggprojekt i Kramfors? Ytterman säkerställer säker arbetsmiljö 
                  och regelefterlevnad på din byggarbetsplats.
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
                    <Shield className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Certifierad BAS-U</h3>
                    <p className="text-sm text-slate-600">Enligt AFS 2021:3</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Kramfors-expert</h3>
                    <p className="text-sm text-slate-600">Lokal arbetsmiljökunskap</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Säker Arbetsplats</h3>
                    <p className="text-sm text-slate-600">Noll olyckor som mål</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BAS-U Services */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  BAS-U Tjänster i Kramfors
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Vad gör en BAS-U?
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Byggarbetsmiljösamordnare under utförande (BAS-U) ansvarar för att 
                      samordna arbetsmiljöarbetet på byggarbetsplatsen och säkerställa 
                      att alla entreprenörer följer säkerhetsföreskrifterna.
                    </p>
                    
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Våra BAS-U tjänster inkluderar:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Regelbundna säkerhetsronder</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Samordning mellan entreprenörer</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Arbetsmiljöuppföljning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Avvikelsehantering</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Säkerhetsutbildning</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 p-8 rounded-xl">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">
                      När behöver du BAS-U?
                    </h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">Flera entreprenörer arbetar samtidigt</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">Byggarbete med särskilda risker</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">Projekt >30 dagar med >20 personer</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">Byggarbete >500 persondagar</span>
                      </li>
                    </ul>
                    
                    <div className="border-t border-slate-200 pt-6">
                      <p className="text-sm text-slate-600 mb-3">
                        <strong>Pris från:</strong> 18,000 SEK
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

          {/* Safety Focus */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Säkerhet i Fokus - Kramfors
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Förebyggande</h3>
                    <p className="text-slate-600 text-sm">Identifierar risker innan olyckor sker</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Samordning</h3>
                    <p className="text-slate-600 text-sm">Säkerställer kommunikation mellan alla parter</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Kvalitet</h3>
                    <p className="text-slate-600 text-sm">Höga säkerhetsstandarder genom hela projektet</p>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                    Varför Välja Ytterman för BAS-U i Kramfors?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Över 20 års erfarenhet av arbetsmiljöarbete</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Känner lokala entreprenörer i Kramfors</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Snabb respons vid akuta situationer</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Certifierad enligt senaste AFS-föreskrifterna</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Kan kombineras med KA och BAS-P</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Fasta priser utan dolda kostnader</span>
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
                Säker Byggarbetsplats i Kramfors
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation om BAS-U tjänster. 
                Vi hjälper dig skapa en säker och effektiv byggarbetsplats.
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

export default BasUKramfors;