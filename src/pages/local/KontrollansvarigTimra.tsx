import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, MapPin, Building, Home, Factory } from 'lucide-react';

const KontrollansvarigTimra = () => {
  return (
    <>
      <SEO 
        title="Kontrollansvarig Timrå - Byggkontroll & BAS | Ytterman"
        description="Kontrollansvarig i Timrå med fokus på modern bostadsutveckling och industriella projekt. Professionell byggkontroll i Timrå kommun."
        keywords="kontrollansvarig Timrå, byggkontroll Timrå, BAS Timrå, bostadsutveckling"
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
                  <h1 className="text-5xl font-bold text-slate-900">
                    Kontrollansvarig Timrå
                  </h1>
                </div>
                <p className="text-xl text-slate-600 mb-8">
                  Kontrollansvarig i Timrå kommun med fokus på modern bostadsutveckling, 
                  industriella projekt och infrastruktur.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Ring direkt: 076-111 84 47
                  </a>
                  <a 
                    href="mailto:tobias@ytterman.com"
                    className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors text-lg font-semibold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Skicka e-post
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Specialiseringar */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                  Expertis i Timrå kommun
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <Home className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Modern bostadsutveckling</h3>
                    <p className="text-slate-600 mb-4">
                      Specialiserad på kontrollansvarig för moderna bostadsprojekt 
                      och hållbara byggmetoder i Timrå.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Energieffektiva villor",
                        "Moderna flerbostadshus",
                        "Passivhus och lågenergihus",
                        "Hållbara byggmaterial"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-slate-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl">
                    <Factory className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Industriella projekt</h3>
                    <p className="text-slate-600 mb-4">
                      Kontrollansvarig för industribyggnader och produktionsanläggningar 
                      i Timrås industriområden.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Produktionsanläggningar",
                        "Lager och distribution",
                        "Kontorskomplex",
                        "Tekniska installationer"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-slate-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl">
                    <Building className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Infrastrukturprojekt</h3>
                    <p className="text-slate-600 mb-4">
                      Expertis inom kontrollansvarig för infrastruktur och 
                      offentliga byggnader i Timrå kommun.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Offentliga byggnader",
                        "Idrottsanläggningar",
                        "Skolor och förskolor",
                        "Vårdcentraler"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-slate-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tjänster och priser */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                  Tjänster i Timrå
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Kontrollansvarig</h3>
                    <p className="text-slate-600 mb-6">
                      Komplett kontrollansvarig-tjänst för alla typer av byggprojekt i Timrå kommun.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Kontrollplan och teknisk kontroll",
                        "Besiktningar under byggprocessen",
                        "Slutbesiktning och slutbevis",
                        "Rådgivning och support",
                        "Snabb projektgenomförande"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-bold text-accent">Från 15,000 kr</div>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">BAS-P & BAS-U</h3>
                    <p className="text-slate-600 mb-6">
                      Byggarbetsmiljösamordning för säkra och effektiva byggprojekt i Timrå.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Arbetsmiljöplan och riskbedömning",
                        "Säkerhetssamordning på arbetsplatsen",
                        "Regelbundna säkerhetsronder",
                        "Avvikelsehantering",
                        "Dokumentation och uppföljning"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-bold text-accent">Från 12,000 kr</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Starta ditt projekt i Timrå
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta mig för professionell kontrollansvarig och BAS-tjänster i Timrå kommun.
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