import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, FileText, Shield, Clock, Award } from 'lucide-react';

const KontrollansvarigTjanst = () => {
  return (
    <>
      <SEO 
        title="Kontrollansvarig (KA) - Certifierad Byggkontroll | Ytterman"
        description="Professionell Kontrollansvarig i Västernorrland. Kontrollplan, besiktningar, slutbevis. Över 20 års erfarenhet. Fast pris och trygg byggprocess."
        keywords="kontrollansvarig, KA, byggkontroll, kontrollplan, slutbevis, besiktning, Västernorrland"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Kontrollansvarig (KA)
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Certifierad kontrollansvarig med över 20 års erfarenhet. Säkerställer att ditt byggprojekt 
                  följer alla bestämmelser från start till slutbevis.
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

          {/* Vad är en Kontrollansvarig */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  Vad är en Kontrollansvarig?
                </h2>
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p>
                    En Kontrollansvarig (KA) är en certifierad person som enligt Plan- och bygglagen (PBL) 
                    ansvarar för att säkerställa att byggprojekt genomförs enligt gällande bestämmelser och 
                    godkända handlingar.
                  </p>
                  <p>
                    Som kontrollansvarig är jag din garant för att byggprocessen följer alla regelverk och 
                    att projektet kan avslutas med ett giltigt slutbevis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tjänster */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Mina KA-tjänster
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: FileText,
                    title: "Kontrollplan",
                    description: "Upprättande av detaljerad kontrollplan anpassad för ditt specifika projekt"
                  },
                  {
                    icon: Shield,
                    title: "Teknisk kontroll",
                    description: "Löpande kontroller under byggprocessen för att säkerställa kvalitet och regelefterlevnad"
                  },
                  {
                    icon: CheckCircle,
                    title: "Slutbesiktning",
                    description: "Genomgång av hela projektet och utfärdande av slutbevis"
                  },
                  {
                    icon: Clock,
                    title: "Löpande uppföljning",
                    description: "Regelbunden kommunikation och dokumentation under hela byggprocessen"
                  },
                  {
                    icon: Award,
                    title: "Certifiering",
                    description: "Fullständig certifiering och dokumentation för myndigheterna"
                  },
                  {
                    icon: Phone,
                    title: "Konsultation",
                    description: "Rådgivning och support under hela projektets gång"
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <service.icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* När behöver du en KA */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  När behöver du en Kontrollansvarig?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Obligatoriskt för:</h3>
                    <ul className="space-y-3">
                      {[
                        "Nybyggnation av bostäder",
                        "Kommersiella byggnader",
                        "Större tillbyggnader",
                        "Projekt som kräver bygglov",
                        "Byggnader över viss storlek"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Rekommenderat för:</h3>
                    <ul className="space-y-3">
                      {[
                        "Komplexa renoveringsprojekt",
                        "Projekt med särskilda krav",
                        "När du vill ha extra trygghet",
                        "Första gången du bygger",
                        "Projekt med tight tidsplan"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Priser */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Transparenta priser
                </h2>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Kontrollansvarig</h3>
                  <div className="text-4xl font-bold text-accent mb-4">Från 15,000 kr</div>
                  <p className="text-slate-600 mb-6">
                    Fast pris baserat på projektets omfattning. Inkluderar kontrollplan, 
                    löpande kontroller och slutbevis.
                  </p>
                  <a 
                    href="#kontakt"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    Få offert
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Redo att starta ditt projekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta mig för en kostnadsfri konsultation och få en skräddarsydd lösning för ditt byggprojekt.
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

export default KontrollansvarigTjanst;