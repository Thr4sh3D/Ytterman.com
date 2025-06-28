import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, MapPin, Building, Users, Award } from 'lucide-react';

const KontrollansvarigSundsvall = () => {
  const localBenefits = [
    "Djup kunskap om Sundsvalls byggnadsnämnd",
    "Etablerade kontakter med lokala myndigheter",
    "Förståelse för lokala byggbestämmelser",
    "Snabb handläggning tack vare lokalkännedom"
  ];

  const projectTypes = [
    "Bostadsprojekt i Sundsvalls centrum",
    "Industribyggnader i Tunadal",
    "Kommersiella projekt vid Birsta",
    "Villabyggen i Södermalm och Norra Kajen"
  ];

  return (
    <>
      <SEO 
        title="Kontrollansvarig Sundsvall - Lokal Expertis | Ytterman"
        description="Kontrollansvarig i Sundsvall med djup lokalkännedom. Över 20 års erfarenhet av byggprojekt i Sundsvalls kommun. Snabb och trygg service."
        keywords="kontrollansvarig Sundsvall, KA Sundsvall, byggkontroll Sundsvall, bygglov Sundsvall"
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
                  Lokal expertis för byggprojekt i Sundsvall. Med djup kunskap om kommunens 
                  processer och etablerade kontakter säkerställer vi en smidig byggprocess 
                  från start till mål.
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
                  Varför välja lokal expertis i Sundsvall?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Lokala fördelar</h3>
                    <div className="space-y-4">
                      {localBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-700 text-lg">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Sundsvalls kommun</h3>
                    <p className="text-slate-600 mb-4">
                      Som en av Sveriges största kommuner har Sundsvall specifika krav och 
                      processer för byggprojekt. Vår lokalkännedom gör skillnad.
                    </p>
                    <div className="text-sm text-slate-500">
                      <p>• Byggnadsnämnd: Sundsvalls kommun</p>
                      <p>• Handläggningstid: Optimerad genom lokalkännedom</p>
                      <p>• Specialområden: Centrum, industri, bostäder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Types */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Projekttyper i Sundsvall
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {projectTypes.map((type, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                      <Building className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-lg">{type}</span>
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
                Redo för ditt projekt i Sundsvall?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med 
                kontrollansvarig för ditt byggprojekt i Sundsvall.
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

export default KontrollansvarigSundsvall;