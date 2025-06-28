import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CheckCircle, Phone, Mail, Shield, FileText, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KontrollansvarigPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  const faqData = [
    {
      question: "Vad är en Kontrollansvarig och när behöver jag en?",
      answer: "En Kontrollansvarig (KA) är en certifierad person som säkerställer att byggprojektet följer alla byggbestämmelser. Du behöver en KA för alla byggprojekt som kräver bygglov eller anmälan, samt för större renoveringar."
    },
    {
      question: "Hur mycket kostar en Kontrollansvarig?",
      answer: "Våra priser börjar från 15,000 SEK för grundpaket. Priset beror på projektets storlek och komplexitet. Vi erbjuder alltid en kostnadsfri konsultation för att ge dig en exakt offert."
    },
    {
      question: "Hur lång tid tar det att få en kontrollplan?",
      answer: "En kontrollplan tar vanligtvis 1-2 veckor att färdigställa efter att vi mottagit alla nödvändiga handlingar. För komplexa projekt kan det ta längre tid."
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" },
    { name: "Kontrollansvarig", url: "https://ytterman.com/kontrollansvarig" }
  ];

  const serviceData = {
    name: "Kontrollansvarig (KA)",
    description: "Certifierad kontrollansvarig för byggprojekt enligt Plan- och bygglagen",
    provider: "Ytterman",
    areaServed: ["Sundsvall", "Härnösand", "Sollefteå", "Timrå", "Kramfors"],
    priceRange: "Från 15,000 SEK"
  };

  return (
    <>
      <AdvancedSEO 
        title="Kontrollansvarig (KA) - Certifierad Byggkontroll | Ytterman"
        description="Certifierad Kontrollansvarig för byggprojekt i Västernorrland. Över 20 års erfarenhet av kontrollplaner, teknisk kontroll och slutbevis. Fast pris från 15,000 kr."
        keywords="kontrollansvarig, KA, byggkontroll, kontrollplan, teknisk kontroll, slutbevis, bygglov, PBL, Västernorrland, Sundsvall, Härnösand"
        url="https://ytterman.com/kontrollansvarig"
        breadcrumbs={breadcrumbs}
        faq={faqData}
        service={serviceData}
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
                  Certifierad kontrollansvarig med över 20 års erfarenhet. Vi säkerställer att ditt 
                  byggprojekt följer alla regelverk och får rätt dokumentation från start till mål.
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
                    className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    076-111 84 47
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Vad är KA */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                  Vad är en Kontrollansvarig?
                </h2>
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p className="text-xl mb-6">
                    En Kontrollansvarig (KA) är en certifierad person som enligt Plan- och bygglagen (PBL) 
                    ansvarar för att säkerställa att byggprojekt genomförs enligt gällande byggbestämmelser 
                    och säkerhetsföreskrifter.
                  </p>
                  <p className="mb-8">
                    Kontrollansvarig krävs för de flesta byggprojekt som kräver bygglov, och rollen är 
                    avgörande för att säkerställa kvalitet, säkerhet och regelefterlevnad genom hela byggprocessen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Uppgifter */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Kontrollansvarigs Uppgifter
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Upprätta kontrollplan för projektet",
                    "Genomföra teknisk kontroll under byggtiden",
                    "Kontrollera att bygget följer godkända ritningar",
                    "Säkerställa regelefterlevnad enligt PBL",
                    "Dokumentera alla kontroller och avvikelser",
                    "Kommunicera med byggnadsnämnden",
                    "Utfärda slutbevis när projektet är klart"
                  ].map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-lg">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projekttyper */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Projekttyper vi hanterar
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Shield,
                      title: "Nybyggnation",
                      description: "Bostäder, kommersiella byggnader och industrianläggningar"
                    },
                    {
                      icon: FileText,
                      title: "Tillbyggnader",
                      description: "Större tillbyggnader som kräver bygglov och kontroll"
                    },
                    {
                      icon: Clock,
                      title: "Ombyggnationer",
                      description: "Omfattande ombyggnationer och renoveringar"
                    },
                    {
                      icon: Award,
                      title: "Specialbyggnader",
                      description: "Byggnader med särskilda säkerhetskrav"
                    }
                  ].map((type, index) => {
                    const IconComponent = type.icon;
                    return (
                      <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                        <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                          {type.title}
                        </h3>
                        <p className="text-slate-600">
                          {type.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Så fungerar processen
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Kontakt & Offert",
                      description: "Vi diskuterar ditt projekt och ger en kostnadsfri offert"
                    },
                    {
                      step: "2", 
                      title: "Kontrollplan",
                      description: "Vi upprättar en detaljerad kontrollplan för projektet"
                    },
                    {
                      step: "3",
                      title: "Löpande Kontroll",
                      description: "Teknisk kontroll och dokumentation under byggtiden"
                    },
                    {
                      step: "4",
                      title: "Slutbesiktning",
                      description: "Slutkontroll och utfärdande av slutbevis"
                    }
                  ].map((item, index) => (
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
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Behöver du en Kontrollansvarig?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med 
                kontrollansvarig för ditt byggprojekt i Västernorrland.
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
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default KontrollansvarigPage;