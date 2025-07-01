import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Users, Building, ArrowRight } from 'lucide-react';

export default function KontrollansvarigPage() {
  return (
    <>
      <Helmet>
        <title>Kontrollansvarig (KA) | Byggkontroll & Teknisk Konsultation</title>
        <meta name="description" content="Certifierad kontrollansvarig enligt PBL för alla typer av byggprojekt. Vi hjälper dig med kontrollplan, tekniskt samråd och slutsamråd." />
        <meta name="keywords" content="kontrollansvarig, KA, PBL, kontrollplan, tekniskt samråd, slutsamråd" />
      </Helmet>
      
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontrollansvarig (KA)</h1>
            <p className="text-xl text-green-50 max-w-2xl">
              Certifierad kontrollansvarig enligt Plan- och bygglagen för alla typer av byggprojekt.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Vad gör en kontrollansvarig?
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  En kontrollansvarig (KA) är en certifierad expert som säkerställer att byggprojekt uppfyller alla krav enligt Plan- och bygglagen (PBL). KA är en oberoende part som hjälper byggherren att säkerställa kvalitet och säkerhet i byggprocessen.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Enligt PBL krävs en kontrollansvarig för de flesta byggprojekt som kräver bygglov eller anmälan. Kontrollansvarig ska vara certifierad av ett ackrediterat certifieringsorgan.
                </p>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Certifierad enligt PBL</h3>
                      <p className="text-gray-600">Alla våra kontrollansvariga är certifierade enligt Plan- och bygglagen.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Lång erfarenhet</h3>
                      <p className="text-gray-600">Vi har över 15 års erfarenhet av att vara kontrollansvariga för olika typer av projekt.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-green-600 absolute -top-4 -left-4 w-24 h-24 rounded-tl-3xl opacity-20"></div>
                <div className="bg-green-600 absolute -bottom-4 -right-4 w-24 h-24 rounded-br-3xl opacity-20"></div>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Kontrollansvarig på byggarbetsplats" 
                  className="rounded-xl shadow-xl relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Våra tjänster som kontrollansvarig
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Vi erbjuder kompletta tjänster som kontrollansvarig för alla typer av byggprojekt
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kontrollplan</h3>
                <p className="text-gray-700">
                  Vi upprättar en kontrollplan som beskriver vilka kontroller som ska utföras under byggprocessen för att säkerställa att byggnaden uppfyller alla krav.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tekniskt samråd</h3>
                <p className="text-gray-700">
                  Vi deltar i det tekniska samrådet med byggnadsnämnden och hjälper dig att förbereda all nödvändig dokumentation.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Platsbesök</h3>
                <p className="text-gray-700">
                  Vi genomför regelbundna platsbesök för att kontrollera att byggnationen följer kontrollplanen och gällande bestämmelser.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Behöver du en kontrollansvarig?
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig genom hela byggprocessen.
                  </p>
                  <Link 
                    to="/kontakt" 
                    className="inline-flex items-center justify-center bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Kontakta oss <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Kontrollansvarig" 
                    className="rounded-xl shadow-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}