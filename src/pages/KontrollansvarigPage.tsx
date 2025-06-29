import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Contact } from '@/components/Contact';
import { Shield, CheckCircle, FileText, Clock, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const KontrollansvarigPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('kontrollansvarig-service');
  const [prefilledMessage, setPrefilledMessage] = useState('Hej! Jag är intresserad av kontrollansvarig-tjänster för mitt byggprojekt. Kan du berätta mer och ge mig en offert?');

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Kontrollplan",
      description: "Upprättande av detaljerad kontrollplan enligt PBL",
      features: [
        "Analys av bygglovshandlingar",
        "Identifiering av kontrollpunkter",
        "Tidsplanering för kontroller",
        "Dokumentationskrav"
      ]
    },
    {
      title: "Teknisk kontroll",
      description: "Genomförande av teknisk kontroll under byggprocessen",
      features: [
        "Kontroll av konstruktioner",
        "Material- och produktkontroll",
        "Installationskontroll",
        "Dokumentation av kontroller"
      ]
    },
    {
      title: "Slutbesiktning",
      description: "Slutbesiktning och utfärdande av slutbevis",
      features: [
        "Slutbesiktning av byggnaden",
        "Kontroll av slutdokumentation",
        "Utfärdande av slutbevis",
        "Överlämnande till byggnadsnämnden"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Kontakt & Offert",
      description: "Du kontaktar oss och vi ger dig en kostnadsfri offert baserat på ditt projekt"
    },
    {
      step: "2",
      title: "Kontrollplan",
      description: "Vi upprättar en detaljerad kontrollplan som godkänns av byggnadsnämnden"
    },
    {
      step: "3",
      title: "Teknisk kontroll",
      description: "Vi genomför teknisk kontroll enligt kontrollplanen under byggprocessen"
    },
    {
      step: "4",
      title: "Slutbevis",
      description: "Vi utför slutbesiktning och utfärdar slutbevis när projektet är klart"
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Kontrollansvarig", url: "https://ytterman.com/kontrollansvarig" }
  ];

  const faqData = [
    {
      question: "Vad är en kontrollansvarig?",
      answer: "En kontrollansvarig (KA) är en certifierad person som enligt Plan- och bygglagen ansvarar för teknisk kontroll under byggprocessen."
    },
    {
      question: "När behövs en kontrollansvarig?",
      answer: "Kontrollansvarig krävs för de flesta byggprojekt som kräver bygglov, omfattas av anmälningsplikt eller är större än 50 kvm."
    },
    {
      question: "Vad kostar kontrollansvarig-tjänster?",
      answer: "Priserna varierar beroende på projektets omfattning, men startar från 15,000 kr för mindre projekt."
    }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Kontrollansvarig (KA) Västernorrland - Certifierad enligt PBL | Ytterman"
        description="Certifierad kontrollansvarig i Västernorrland. Kontrollplan, teknisk kontroll och slutbevis enligt PBL. Över 20 års erfarenhet. Kontakta oss för offert!"
        keywords="kontrollansvarig, KA, PBL, kontrollplan, teknisk kontroll, slutbevis, byggkontroll, Västernorrland, Sundsvall, Härnösand"
        url="https://ytterman.com/kontrollansvarig"
        breadcrumbs={breadcrumbs}
        faq={faqData}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 earth-gradient rounded-full flex items-center justify-center mx-auto mb-8">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Kontrollansvarig (KA)
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Certifierad kontrollansvarig enligt PBL för teknisk kontroll och slutbesiktning. 
                  Säker byggprocess från kontrollplan till slutbevis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={scrollToContact}
                    className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Få kostnadsfri offert
                  </Button>
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    076-111 84 47
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Våra KA-tjänster
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Kompletta kontrollansvarig-tjänster för ditt byggprojekt. 
                  Från kontrollplan till slutbevis.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Så fungerar processen
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  En tydlig process från första kontakt till slutbevis
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                  När behövs en kontrollansvarig?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      Kontrollansvarig krävs för:
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Byggprojekt som kräver bygglov",
                        "Anmälningspliktiga åtgärder",
                        "Byggnader större än 50 kvm",
                        "Ändringar av bärande konstruktioner",
                        "Kommersiella byggnader",
                        "Flerfamiljshus och större projekt"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      Våra fördelar:
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Över 20 års erfarenhet",
                        "Certifierad enligt PBL",
                        "Snabb handläggning",
                        "Personlig service",
                        "Lokal kunskap om Västernorrland",
                        "Konkurrenskraftiga priser"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Behöver du en kontrollansvarig?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta mig idag för en kostnadsfri konsultation. Jag hjälper dig 
                med kontrollplan, teknisk kontroll och slutbevis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Få kostnadsfri offert
                </Button>
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

          {/* Contact Section */}
          <Contact selectedPackage={selectedPackage} prefilledMessage={prefilledMessage} />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default KontrollansvarigPage;