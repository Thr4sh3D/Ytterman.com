import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, MapPin, Waves, Building, Home } from 'lucide-react';

const KontrollansvarigTimra = () => {
  const localAdvantages = [
    "Djup kunskap om Timrå kommuns byggprocess",
    "Erfarenhet av kustmiljöns byggkrav",
    "Etablerade kontakter med lokala myndigheter",
    "Specialkunskap om bostadsprojekt vid kusten"
  ];

  const projectAreas = [
    "Timrå centrum - kommersiella projekt",
    "Kustområden - bostäder och fritidshus",
    "Industriområden - produktionsanläggningar",
    "Söråker - villaområden och småhus"
  ];

  return (
    <>
      <SEO 
        title="Kontrollansvarig Timrå - Kustexpertis | Ytterman"
        description="Kontrollansvarig i Timrå med specialkunskap om kustbyggnation. Lokal expertis för byggprojekt i Timrå kommun med hänsyn till kustmiljön."
        keywords="kontrollansvarig Timrå, KA Timrå, byggkontroll Timrå, kustbyggnation Timrå"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-cyan-600 mr-3" />
                  <h1 className="text-5xl font-bold text-slate-900">
                    Kontrollansvarig Timrå
                  </h1>
                </div>
                <p className="text-xl text-slate-600 mb-8">
                  Kontrollansvarig i Timrå med specialkunskap om kustbyggnation och 
                  lokala förhållanden. Vi säkerställer att ditt byggprojekt följer 
                  alla krav med hänsyn till kustmiljöns utmaningar.
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

          {/* Coastal Expertise */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                  Kustexpertis i Timrå
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Lokala fördelar</h3>
                    <div className="space-y-4">
                      {localAdvantages.map((advantage, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-700 text-lg">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-6 rounded-xl">
                    <Waves className="w-12 h-12 text-cyan-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Kustmiljöns utmaningar</h3>
                    <p className="text-slate-600 mb-4">
                      Byggande vid kusten kräver särskild hänsyn till saltpåverkan, 
                      vindlaster och fuktförhållanden. Vi har expertis inom dessa områden.
                    </p>
                    <div className="text-sm text-slate-500">
                      <p>• Saltpåverkan: Materialval och skydd</p>
                      <p>• Vindlaster: Förstärkta konstruktioner</p>
                      <p>• Fukt: Ventilation och tätskikt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Areas */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Projektområden i Timrå
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {projectAreas.map((area, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                      <Building className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-lg">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Special Considerations */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  Särskilda hänsyn i Timrå
                </h2>
                <p className="text-xl text-slate-600 mb-12">
                  Timrås läge vid Östersjökusten och närhet till Sundsvall skapar 
                  unika förutsättningar för byggprojekt som kräver specialkunskap.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Waves className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Kustmiljö</h3>
                    <p className="text-slate-600">Anpassning till salt och fukt</p>
                  </div>
                  <div className="text-center">
                    <Home className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Fritidshus</h3>
                    <p className="text-slate-600">Specialkunskap om sommarstugor</p>
                  </div>
                  <div className="text-center">
                    <Building className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Närhet till Sundsvall</h3>
                    <p className="text-slate-600">Regionala byggstandarder</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Redo för ditt projekt i Timrå?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med 
                kontrollansvarig för ditt byggprojekt i Timrå.
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

export default KontrollansvarigTimra;