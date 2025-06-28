import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, MapPin, Shield, Users, FileText } from 'lucide-react';

const BasPHarnosand = () => {
  const localAdvantages = [
    "Kännedom om Härnösands specifika byggmiljö",
    "Etablerade kontakter med lokala entreprenörer",
    "Förståelse för kustklimatet och dess påverkan",
    "Erfarenhet av kulturhistoriska byggnader"
  ];

  const projectExamples = [
    "Bostadsprojekt vid Härnösands hamn",
    "Renovering av kulturhistoriska byggnader",
    "Nybyggnation i Härnösands centrum",
    "Industriella projekt vid E4:an"
  ];

  return (
    <>
      <SEO 
        title="BAS-P Härnösand - Byggarbetsmiljösamordnare | Ytterman"
        description="BAS-P tjänster i Härnösand med lokal expertis. Arbetsmiljösamordning under projektering för säkra byggprojekt i Härnösands kommun."
        keywords="BAS-P Härnösand, byggarbetsmiljösamordnare Härnösand, arbetsmiljöplan Härnösand"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-green-600 mr-3" />
                  <h1 className="text-5xl font-bold text-slate-900">
                    BAS-P Härnösand
                  </h1>
                </div>
                <p className="text-xl text-slate-600 mb-8">
                  Byggarbetsmiljösamordnare under projektering i Härnösand. Med djup 
                  lokalkännedom säkerställer vi att säkerhetsaspekter beaktas redan 
                  från planeringsfasen av ditt byggprojekt.
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

          {/* Local Expertise */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                  Lokala fördelar i Härnösand
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Vår lokalkännedom</h3>
                    <div className="space-y-4">
                      {localAdvantages.map((advantage, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-700 text-lg">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Härnösands särskilda förutsättningar</h3>
                    <p className="text-slate-600 mb-4">
                      Härnösand har unika byggförutsättningar med sitt kustläge och 
                      kulturhistoriska värden som kräver specialkunskap.
                    </p>
                    <div className="text-sm text-slate-500">
                      <p>• Kustmiljö: Särskilda krav på material och konstruktion</p>
                      <p>• Kulturmiljö: Hänsyn till historiska värden</p>
                      <p>• Vindförhållanden: Anpassning till kustens väderförhållanden</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Examples */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Projektexempel i Härnösand
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {projectExamples.map((example, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                      <Shield className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-lg">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Behöver du BAS-P i Härnösand?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med 
                BAS-P tjänster för säker projektering i Härnösand.
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

export default BasPHarnosand;