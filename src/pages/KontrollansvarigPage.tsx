import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CheckCircle, Phone, Mail, Shield, FileText, Clock, Award, Building, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KontrollansvarigPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  const faqData = [
    {
      question: "Vad är en kontrollansvarig och när behöver jag en?",
      answer: "Kontrollansvarig (KA) krävs enligt PBL för att utföra teknisk kontroll under byggprocessen. KA behövs för de flesta byggprojekt som kräver bygglov eller anmälan."
    },
    {
      question: "Vad kostar kontrollansvarig tjänster?",
      answer: "Våra KA-tjänster börjar från 15,000 SEK beroende på projektets omfattning och komplexitet. Vi erbjuder alltid en kostnadsfri konsultation för exakt prisuppgift."
    },
    {
      question: "När ska kontrollansvarig anlitas?",
      answer: "Kontrollansvarig ska anlitas tidigt i processen, helst redan vid bygglovsansökan. Detta säkerställer en smidig byggprocess och korrekt dokumentation."
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" },
    { name: "Kontrollansvarig", url: "https://ytterman.com/kontrollansvarig" }
  ];

  const serviceData = {
    name: "Kontrollansvarig enligt PBL",
    description: "Certifierad kontrollansvarig för teknisk kontroll och slutbesiktning",
    provider: "Ytterman",
    areaServed: ["Sundsvall", "Härnösand", "Sollefteå", "Timrå", "Kramfors"],
    priceRange: "Från 15,000 SEK"
  };

  return (
    <>
      <AdvancedSEO 
        title="Kontrollansvarig (KA) enligt PBL | Ytterman Västernorrland"
        description="Certifierad kontrollansvarig i Västernorrland. Teknisk kontroll, kontrollplan och slutbesiktning enligt PBL. Över 20 års erfarenhet. Från 15,000 kr."
        keywords="kontrollansvarig, KA, PBL, teknisk kontroll, slutbesiktning, kontrollplan, byggkontroll, Västernorrland, Sundsvall, Härnösand"
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
                  Kontrollansvarig enligt PBL
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Certifierad kontrollansvarig med över 20 års erfarenhet. Vi säkerställer 
                  att ditt byggprojekt följer alla krav enligt Plan- och bygglagen (PBL).
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

          {/* Vad är kontrollansvarig */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                  Vad är en kontrollansvarig?
                </h2>
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p className="text-xl mb-6">
                    Kontrollansvarig (KA) är en certifierad person som enligt Plan- och bygglagen (PBL) 
                    ansvarar för att utföra teknisk kontroll under byggprocessen.
                  </p>
                  <p className="mb-8">
                    Kontrollansvarig säkerställer att byggandet sker enligt gällande föreskrifter, 
                    godkända ritningar och bygglov. Rollen är avgörande för att få slutbevis och 
                    kunna ta byggnaden i bruk.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* KA:s uppgifter */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Kontrollansvarigs uppgifter
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Upprätta kontrollplan för projektet",
                    "Utföra teknisk kontroll under byggprocessen",
                    "Kontrollera att byggandet följer godkända ritningar",
                    "Säkerställa regelefterlevnad enligt PBL",
                    "Dokumentera alla kontrollmoment",
                    "Genomföra slutbesiktning",
                    "Utfärda intyg för slutbevis"
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

          {/* När behöver du KA */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  När behöver du kontrollansvarig?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Building,
                      title: "Nybyggnation",
                      description: "Alla nybyggnationer som kräver bygglov behöver kontrollansvarig"
                    },
                    {
                      icon: Users,
                      title: "Större ombyggnader",
                      description: "Omfattande ombyggnader och tillbyggnader enligt PBL"
                    },
                    {
                      icon: Shield,
                      title: "Komplexa projekt",
                      description: "Projekt med särskilda tekniska krav eller risker"
                    },
                    {
                      icon: Award,
                      title: "Slutbevis",
                      description: "För att få slutbevis och ta byggnaden i bruk"
                    }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                        <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                          {item.title}
                        </h3>
                        <p className="text-slate-600">
                          {item.description}
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
                  Kontrollprocessen
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Kontrollplan",
                      description: "Upprättande av detaljerad kontrollplan för projektet"
                    },
                    {
                      step: "2", 
                      title: "Löpande kontroll",
                      description: "Teknisk kontroll under hela byggprocessen"
                    },
                    {
                      step: "3",
                      title: "Dokumentation",
                      description: "Kontinuerlig dokumentation av alla kontrollmoment"
                    },
                    {
                      step: "4",
                      title: "Slutbesiktning",
                      description: "Slutbesiktning och intyg för slutbevis"
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
                Behöver du kontrollansvarig?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med 
                professionell teknisk kontroll enligt PBL.
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