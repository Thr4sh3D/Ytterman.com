import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { Shield, MapPin, Phone, Mail, CheckCircle, Clock, Award, Users } from 'lucide-react';

const BasPHarnosand = () => {
  return (
    <>
      <SEO 
        title="BAS-P Härnösand - Byggarbetsmiljösamordnare Projektering | Ytterman"
        description="Behöver du BAS-P i Härnösand? Ytterman erbjuder certifierad byggarbetsmiljösamordnare under projektering. Arbetsmiljöplan och riskbedömning. Ring 076-111 84 47."
        keywords="BAS-P Härnösand, byggarbetsmiljösamordnare Härnösand, arbetsmiljöplan Härnösand, BAS projektering Härnösand, kontrollansvarig Härnösand"
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
                  <span className="text-lg font-semibold text-slate-600">Härnösand, Västernorrland</span>
                </div>
                
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  BAS-P i Härnösand
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                  Behöver du en certifierad Byggarbetsmiljösamordnare under projektering (BAS-P) 
                  för ditt byggprojekt i Härnösand? Ytterman erbjuder professionella BAS-P tjänster 
                  med fokus på arbetsmiljöplanering och riskbedömning.
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
                    <h3 className="font-semibold text-slate-900">Certifierad BAS-P</h3>
                    <p className="text-sm text-slate-600">Enligt AFS 2021:3</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Lokal Kunskap</h3>
                    <p className="text-sm text-slate-600">Härnösands förutsättningar</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Erfaren</h3>
                    <p className="text-sm text-slate-600">20+ års arbetsmiljöarbete</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BAS-P Services */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  BAS-P Tjänster i Härnösand
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Vad är BAS-P?
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Byggarbetsmiljösamordnare under projektering (BAS-P) ansvarar för att 
                      samordna arbetsmiljöarbetet under planeringsfasen av byggprojekt. 
                      Vi säkerställer att säkerhetsaspekter beaktas redan från början.
                    </p>
                    
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Våra BAS-P tjänster inkluderar:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Arbetsmiljöplan för projektet</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Riskbedömning i projekteringsskedet</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Säkerhetsspecifikationer</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Samordning med projektörer</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Dokumentation enligt AFS</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 p-8 rounded-xl">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">
                      När behöver du BAS-P?
                    </h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">Flera entreprenörer på samma arbetsplats</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">Projekt med särskilda risker</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">Byggarbete >30 dagar med >20 personer</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">Projekt >500 persondagar</span>
                      </li>
                    </ul>
                    
                    <div className="border-t border-slate-200 pt-6">
                      <p className="text-sm text-slate-600 mb-3">
                        <strong>Pris från:</strong> 12,000 SEK
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

          {/* Local Expertise */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-12">
                  Lokal Expertis i Härnösand
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Klimatanpassning</h3>
                    <p className="text-slate-600 text-sm">Förstår Härnösands klimat och hur det påverkar arbetsmiljön</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Users className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Lokala Nätverk</h3>
                    <p className="text-slate-600 text-sm">Känner entreprenörer och leverantörer i Härnösand</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Award className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Kommunkunskap</h3>
                    <p className="text-slate-600 text-sm">Erfaren av Härnösands kommuns processer</p>
                  </div>
                </div>
                
                <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Varför Välja Ytterman för BAS-P i Härnösand?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Över 20 års erfarenhet av arbetsmiljöarbete</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Certifierad enligt senaste AFS-föreskrifterna</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Lokal närvaro och snabb respons</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Fasta priser utan dolda kostnader</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Kan kombineras med KA och BAS-U</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Kostnadsfri initial konsultation</span>
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
                Behöver du BAS-P för ditt Projekt i Härnösand?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig med 
                arbetsmiljöplanering och säkerställer att ditt projekt följer alla föreskrifter.
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

export default BasPHarnosand;