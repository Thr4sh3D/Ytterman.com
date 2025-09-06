import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Mail, Shield, FileText, Users, Building, Clock, Award, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const KontrollansvarigPage = () => {
  const scrollToContact = () => {
    window.location.href = '/kontakt?service=kontrollansvarig&source=ka-page';
  };

  const kaServices = [
    {
      title: "Kontrollplan",
      description: "Upprättande av detaljerad kontrollplan enligt PBL",
      icon: FileText
    },
    {
      title: "Teknisk kontroll",
      description: "Löpande kontroll under byggprocessen",
      icon: Shield
    },
    {
      title: "Slutbesiktning",
      description: "Slutkontroll och utfärdande av slutbevis",
      icon: Award
    },
    {
      title: "Dokumentation",
      description: "Komplett dokumentation för myndigheter",
      icon: Building
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Planering",
      description: "Granskning av ritningar och upprättande av kontrollplan"
    },
    {
      step: "2", 
      title: "Kontroll",
      description: "Löpande teknisk kontroll under byggprocessen"
    },
    {
      step: "3",
      title: "Besiktning",
      description: "Slutbesiktning och kontroll av färdigt byggverk"
    },
    {
      step: "4",
      title: "Slutbevis",
      description: "Utfärdande av slutbevis för ibruktagande"
    }
  ];

  const localAreas = [
    "Sundsvall", "Härnösand", "Sollefteå", "Timrå", "Kramfors", "Ånge"
  ];

  const faqData = [
    {
      question: "När krävs en kontrollansvarig enligt PBL?",
      answer: "En kontrollansvarig krävs för de flesta byggprojekt som kräver bygglov eller anmälan enligt Plan- och bygglagen. Detta inkluderar nybyggnation, större ombyggnader och tillbyggnader."
    },
    {
      question: "Vad kostar en kontrollansvarig i Västernorrland?",
      answer: "Kostnaden för kontrollansvarig varierar beroende på projektets omfattning och komplexitet. Våra priser börjar från 15,000 SEK. Vi ger alltid fast pris efter kostnadsfri konsultation."
    },
    {
      question: "Hur lång tid tar det att få en kontrollplan?",
      answer: "En kontrollplan tar vanligtvis 1-2 veckor att färdigställa efter att vi mottagit alla nödvändiga handlingar och ritningar från projektet."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kontrollansvarig (KA) Västernorrland - Certifierad Expert | Ytterman</title>
        <meta name="description" content="Certifierad kontrollansvarig i Västernorrland. Över 20 års erfarenhet av teknisk kontroll, kontrollplaner och slutbesiktningar. Verksam i Sundsvall, Härnösand, Sollefteå." />
        <meta name="keywords" content="kontrollansvarig Västernorrland, KA Sundsvall, kontrollplan Härnösand, teknisk kontroll Sollefteå, slutbevis Timrå, PBL kontroll Kramfors" />
        <link rel="canonical" href="https://ytterman.com/kontrollansvarig" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Kontrollansvarig (KA) Västernorrland - Certifierad Expert | Ytterman" />
        <meta property="og:description" content="Certifierad kontrollansvarig i Västernorrland. Över 20 års erfarenhet av teknisk kontroll och slutbesiktningar." />
        <meta property="og:url" content="https://ytterman.com/kontrollansvarig" />
        <meta property="og:type" content="website" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Kontrollansvarig (KA)",
            "description": "Certifierad kontrollansvarig för teknisk kontroll enligt PBL",
            "provider": {
              "@type": "Organization",
              "name": "Ytterman",
              "url": "https://ytterman.com"
            },
            "areaServed": {
              "@type": "State",
              "name": "Västernorrland"
            },
            "offers": {
              "@type": "Offer",
              "priceRange": "Från 15,000 SEK",
              "priceCurrency": "SEK"
            }
          })}
        </script>
      </Helmet>

      <AdvancedSEO 
        title="Kontrollansvarig (KA) Västernorrland - Certifierad Expert | Ytterman"
        description="Certifierad kontrollansvarig i Västernorrland. Över 20 års erfarenhet av teknisk kontroll, kontrollplaner och slutbesiktningar. Verksam i Sundsvall, Härnösand, Sollefteå."
        keywords="kontrollansvarig Västernorrland, KA Sundsvall, kontrollplan Härnösand, teknisk kontroll Sollefteå, slutbevis Timrå, PBL kontroll Kramfors"
        url="https://ytterman.com/kontrollansvarig"
        faq={faqData}
        organization={true}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main role="main">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Kontrollansvarig (KA) i Västernorrland
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Certifierad kontrollansvarig med över 20 års erfarenhet. 
                  Teknisk kontroll, kontrollplaner och slutbesiktningar enligt PBL.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={scrollToContact}
                    className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                    aria-label="Få kostnadsfri offert för kontrollansvarig"
                  >
                    <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                    Få kostnadsfri offert
                  </Button>
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Ring direkt till 076-111 84 47"
                  >
                    Ring direkt: 076-111 84 47
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Vad ingår i KA-tjänsten?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {kaServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="w-8 h-8 text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-slate-600">
                          {service.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Så fungerar KA-processen
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                  {processSteps.map((item, index) => (
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

          {/* Local Areas Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  Kontrollansvarig i hela Västernorrland
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Vi erbjuder KA-tjänster i alla kommuner i Västernorrlands län
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {localAreas.map((area, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-6 py-3 bg-slate-50 rounded-full text-slate-700 font-medium"
                    >
                      <MapPin className="w-4 h-4 mr-2 text-primary" aria-hidden="true" />
                      {area}
                    </span>
                  ))}
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
                Kontakta oss idag för en kostnadsfri konsultation. 
                Vi hjälper dig med kontrollplan, teknisk kontroll och slutbesiktning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                  aria-label="Få kostnadsfri offert"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Få kostnadsfri offert
                </Button>
                <a 
                  href="mailto:tobias@ytterman.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="Skicka e-post till tobias@ytterman.com"
                >
                  <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
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