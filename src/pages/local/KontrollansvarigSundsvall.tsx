import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, MapPin, Star, Building, Home } from 'lucide-react';

const KontrollansvarigSundsvall = () => {
  return (
    <>
      <SEO 
        title="Kontrollansvarig Sundsvall - Certifierad Byggkontroll | Ytterman"
        description="Kontrollansvarig i Sundsvall med över 20 års erfarenhet. Specialiserad på Sundsvalls byggbestämmelser. Snabb service och lokala kontakter."
        keywords="kontrollansvarig Sundsvall, byggkontroll Sundsvall, KA Sundsvall, slutbevis Sundsvall, kontrollplan"
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
                    Kontrollansvarig Sundsvall
                  </h1>
                </div>
                <p className="text-xl text-slate-600 mb-8">
                  Certifierad kontrollansvarig med djup kunskap om Sundsvalls byggbestämmelser. 
                  Över 20 års erfarenhet av byggprojekt i Sundsvalls kommun.
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

          {/* Lokal expertis */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  Lokal expertis i Sundsvall
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Varför välja lokal kontrollansvarig?</h3>
                    <ul className="space-y-3">
                      {[
                        "Djup kunskap om Sundsvalls byggbestämmelser",
                        "Etablerade kontakter med byggnadsnämnden",
                        "Snabb responstid - samma dag-service",
                        "Känner till lokala förhållanden och klimat",
                        "Specialiserad på stenstadens arkitektur"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Specialiseringar i Sundsvall</h3>
                    <ul className="space-y-3">
                      {[
                        "Kommersiella byggprojekt i centrum",
                        "Bostadsprojekt och villabyggen",
                        "Industriella anläggningar",
                        "Renoveringar av äldre byggnader",
                        "Kulturhistoriska byggnader"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projekttyper */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Projekttyper i Sundsvall
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <Building className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Kommersiella projekt</h3>
                  <p className="text-slate-600 mb-4">
                    Specialiserad på kontrollansvarig för kommersiella byggnader i Sundsvalls centrum. 
                    Erfaren av lokala bestämmelser och krav.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Kontorsbyggnader",
                      "Butikslokaler", 
                      "Restauranger och hotell",
                      "Industribyggnader"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <Home className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Bostadsprojekt</h3>
                  <p className="text-slate-600 mb-4">
                    Omfattande erfarenhet av bostadsprojekt i Sundsvall, från enskilda villor 
                    till större flerbostadshus.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Villor och småhus",
                      "Flerbostadshus",
                      "Tillbyggnader",
                      "Renoveringar"
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
          </section>

          {/* Kontakt info */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Kontakta mig i Sundsvall
                </h2>
                <div className="bg-slate-50 p-8 rounded-xl">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                      <h3 className="font-bold text-slate-900 mb-2">Telefon</h3>
                      <p className="text-slate-600">076-111 84 47</p>
                      <p className="text-sm text-slate-500">Vardagar 07:00-18:00</p>
                    </div>
                    <div>
                      <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
                      <h3 className="font-bold text-slate-900 mb-2">E-post</h3>
                      <p className="text-slate-600">tobias@ytterman.com</p>
                      <p className="text-sm text-slate-500">Svar inom 24h</p>
                    </div>
                    <div>
                      <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                      <h3 className="font-bold text-slate-900 mb-2">Område</h3>
                      <p className="text-slate-600">Sundsvalls kommun</p>
                      <p className="text-sm text-slate-500">Hela kommunen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Starta ditt projekt i Sundsvall
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta mig för en kostnadsfri konsultation och få lokal expertis för ditt byggprojekt i Sundsvall.
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

export default KontrollansvarigSundsvall;