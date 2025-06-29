import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Contact } from '@/components/Contact';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const KontaktPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [prefilledMessage, setPrefilledMessage] = useState('');

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Kontakt", url: "https://ytterman.com/kontakt" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Kontakt - Kontrollansvarig & BAS-samordnare | Ytterman"
        description="Kontakta Ytterman för kontrollansvarig och BAS-tjänster i Västernorrland. Ring 076-111 84 47 eller maila tobias@ytterman.com. Kostnadsfri konsultation."
        keywords="kontakt, kontrollansvarig, BAS-P, BAS-U, Västernorrland, Sundsvall, Härnösand, byggkontroll, arbetsmiljösamordnare"
        url="https://ytterman.com/kontakt"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Kontakta Oss
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Redo att starta ditt byggprojekt? Kontakta mig för en kostnadsfri 
                  konsultation och låt oss diskutera hur jag kan hjälpa dig.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Contact Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    icon: Phone,
                    title: "Telefon",
                    value: "076-111 84 47",
                    description: "Ring för direkt kontakt",
                    action: () => window.open('tel:+46761118447')
                  },
                  {
                    icon: Mail,
                    title: "E-post",
                    value: "tobias@ytterman.com",
                    description: "Skicka ett meddelande",
                    action: () => window.open('mailto:tobias@ytterman.com')
                  },
                  {
                    icon: MapPin,
                    title: "Verksamhetsområde",
                    value: "Västernorrland",
                    description: "Sundsvall, Härnösand, Sollefteå m.fl.",
                    action: null
                  },
                  {
                    icon: Clock,
                    title: "Svarstid",
                    value: "Inom 24 timmar",
                    description: "Snabb återkoppling garanterad",
                    action: null
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className={`text-center p-6 bg-slate-50 rounded-xl transition-all duration-200 ${
                        item.action ? 'cursor-pointer hover:shadow-lg hover:scale-105' : ''
                      }`}
                      onClick={item.action || undefined}
                    >
                      <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-primary font-semibold mb-2">
                        {item.value}
                      </p>
                      <p className="text-sm text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <Contact selectedPackage={selectedPackage} prefilledMessage={prefilledMessage} />

          {/* Service Areas Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  Verksamhetsområde
                </h2>
                <p className="text-xl text-slate-600 mb-12">
                  Vi verkar i hela Västernorrland och hjälper kunder i följande kommuner:
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Sundsvall",
                    "Härnösand",
                    "Sollefteå",
                    "Timrå",
                    "Kramfors",
                    "Ånge",
                    "Örnsköldsvik",
                    "Ragunda",
                    "Bräcke"
                  ].map((city, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-slate-900">{city}</h3>
                    </div>
                  ))}
                </div>
                
                <p className="text-slate-600 mt-8">
                  Kontakta oss även om din kommun inte finns med i listan - 
                  vi tar gärna uppdrag i hela Västernorrland!
                </p>
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

export default KontaktPage;