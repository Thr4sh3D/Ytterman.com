import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, MapPin, Shield, Users, FileText } from 'lucide-react';

const BasPHarnosand = () => {
  return (
    <>
      <SEO 
        title="BAS-P Härnösand - Byggarbetsmiljösamordnare | Ytterman"
        description="BAS-P i Härnösand med expertis inom kulturhistoriska byggnader. Arbetsmiljöplan och riskbedömning för byggprojekt i Härnösands kommun."
        keywords="BAS-P Härnösand, byggarbetsmiljösamordnare Härnösand, arbetsmiljöplan, riskbedömning"
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
                    BAS-P Härnösand
                  </h1>
                </div>
                <p className="text-xl text-slate-600 mb-8">
                  Byggarbetsmiljösamordnare under projektering i Härnösand. Specialiserad på 
                  kulturhistoriska byggnader och kustnaära konstruktioner.
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
                  BAS-P expertis i Härnösand
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <Shield className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Kulturhistoriska byggnader</h3>
                    <p className="text-slate-600">
                      Specialiserad på arbetsmiljöaspekter vid renovering av kulturhistoriska byggnader 
                      i samarbete med Länsstyrelsen.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <Users className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Kustmiljöer</h3>
                    <p className="text-slate-600">
                      Expertis inom arbetsmiljöutmaningar vid byggande i kustnaära miljöer 
                      med hänsyn till väder och vindförhållanden.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <FileText className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Moderna projekt</h3>
                    <p className="text-slate-600">
                      Arbetsmiljösamordning för moderna bostadsprojekt och offentliga byggnader 
                      i Härnösands kommun.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tjänster */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                  BAS-P tjänster i Härnösand
                </h2>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Vad ingår i BAS-P?</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4">Grundläggande tjänster:</h4>
                      <ul className="space-y-3">
                        {[
                          "Arbetsmiljöplan för projektet",
                          "Riskbedömning i projekteringsskedet",
                          "Säkerhetsspecifikationer",
                          "Samordning mellan projektörer",
                          "Dokumentation av arbetsmiljöarbetet"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4">Specialiserade tjänster:</h4>
                      <ul className="space-y-3">
                        {[
                          "Kulturhistoriska byggnader",
                          "Kustnaära konstruktioner",
                          "Vindkraftsanläggningar",
                          "Industriella projekt",
                          "Offentliga byggnader"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <div className="text-3xl font-bold text-accent mb-2">Från 12,000 kr</div>
                    <p className="text-slate-600">Fast pris baserat på projektets omfattning</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Säkra ditt projekt i Härnösand
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta mig för professionell BAS-P med lokal expertis i Härnösands kommun.
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