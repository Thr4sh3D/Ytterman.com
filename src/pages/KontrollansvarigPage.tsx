import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { ServiceFAQ } from '@/components/ServiceFAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CheckCircle, Phone, Mail, Shield, FileText, Users, Building, Clock, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';

const KontrollansvarigPage = () => {
  const scrollToContact = () => {
    window.location.href = '/kontakt?service=kontrollansvarig&source=ka-page';
  };

  const kaServices = [
    {
      title: "Kontrollplan",
      description: "Upprättande av detaljerad kontrollplan enligt PBL",
      features: [
        "Anpassad efter projektets omfattning",
        "Enligt gällande byggregler",
        "Tydliga kontrollpunkter",
        "Dokumentation för myndigheter"
      ],
      icon: FileText
    },
    {
      title: "Teknisk kontroll",
      description: "Löpande kontroll under byggprocessen",
      features: [
        "Regelbundna platsbesök",
        "Kontroll av utförande",
        "Dokumentation av avvikelser",
        "Samordning med entreprenörer"
      ],
      icon: Shield
    },
    {
      title: "Slutbesiktning",
      description: "Slutkontroll och utfärdande av slutbevis",
      features: [
        "Komplett genomgång av projektet",
        "Kontroll mot godkända ritningar",
        "Slutbevis för byggnadsnämnden",
        "Garantihandlingar"
      ],
      icon: Award
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Första kontakt",
      description: "Vi diskuterar ditt projekt och behov",
      duration: "30 min"
    },
    {
      step: "2", 
      title: "Offert och avtal",
      description: "Fast pris och tydliga villkor",
      duration: "1-2 dagar"
    },
    {
      step: "3",
      title: "Kontrollplan",
      description: "Upprättande av projektspecifik kontrollplan",
      duration: "1-2 veckor"
    },
    {
      step: "4",
      title: "Löpande kontroll",
      description: "Regelbundna kontroller under byggfasen",
      duration: "Hela projektet"
    },
    {
      step: "5",
      title: "Slutbesiktning",
      description: "Slutkontroll och utfärdande av slutbevis",
      duration: "1-2 dagar"
    }
  ];

  const kaFaq = [
    {
      question: "Vad är en kontrollansvarig och varför behöver jag en?",
      answer: "En kontrollansvarig (KA) är en certifierad expert som säkerställer att byggarbeten utförs enligt gällande byggregler. Enligt Plan- och bygglagen krävs KA för de flesta byggprojekt för att garantera kvalitet och regelefterlevnad."
    },
    {
      question: "När ska jag anlita en kontrollansvarig?",
      answer: "Kontakta en kontrollansvarig redan i planeringsfasen, innan byggstart. Detta ger möjlighet att granska ritningar, planera kontrollpunkter och säkerställa att alla tillstånd finns på plats."
    },
    {
      question: "Vad kostar det att anlita en kontrollansvarig?",
      answer: "Kostnaden varierar beroende på projektets storlek och komplexitet. Vi erbjuder fast pris från 15,000 SEK för mindre projekt. Kontakta oss för en kostnadsfri offert anpassad efter ditt projekt."
    },
    {
      question: "Vilka certifieringar har Tobias Ytterman?",
      answer: "Tobias är certifierad kontrollansvarig med över 20 års erfarenhet inom byggbranschen. Han håller sina certifieringar uppdaterade genom kontinuerlig utbildning och följer alla branschstandarder."
    },
    {
      question: "Hur ofta besöker kontrollansvarig byggarbetsplatsen?",
      answer: "Besöksfrekvensen anpassas efter projektets behov och fas. Under kritiska skeden kan besök ske dagligen, medan andra perioder kan kräva veckovisa besök. En besöksplan upprättas alltid i samråd med kunden."
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" },
    { name: "Kontrollansvarig", url: "https://ytterman.com/kontrollansvarig" }
  ];

  const serviceAreas = [
    "Sundsvall", "Härnösand", "Sollefteå", "Kramfors", "Timrå", "Ånge"
  ];

  return (
    <>
      <Helmet>
        <title>Kontrollansvarig (KA) Västernorrland - Certifierad Expert | Ytterman</title>
        <meta name="description" content="Certifierad kontrollansvarig i Västernorrland. Över 20 års erfarenhet. Kontrollplan, teknisk kontroll och slutbesiktning. Fast pris från 15,000 SEK. Sundsvall, Härnösand, Sollefteå." />
        <meta name="keywords" content="kontrollansvarig Västernorrland, KA Sundsvall, kontrollansvarig Härnösand, byggkontroll Sollefteå, kontrollplan, slutbesiktning, PBL kontroll, certifierad KA" />
        <link rel="canonical" href="https://ytterman.com/kontrollansvarig" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Kontrollansvarig (KA) Västernorrland - Certifierad Expert | Ytterman" />
        <meta property="og:description" content="Certifierad kontrollansvarig i Västernorrland. Över 20 års erfarenhet. Kontrollplan, teknisk kontroll och slutbesiktning." />
        <meta property="og:url" content="https://ytterman.com/kontrollansvarig" />
        <meta property="og:type" content="service" />
        
        {/* Structured data for service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Kontrollansvarig (KA)",
            "description": "Certifierad kontrollansvarig för byggprojekt enligt Plan- och bygglagen",
            "provider": {
              "@type": "Organization",
              "name": "Ytterman",
              "url": "https://ytterman.com"
            },
            "areaServed": serviceAreas.map(area => ({
              "@type": "City",
              "name": area,
              "containedInPlace": {
                "@type": "State",
                "name": "Västernorrland"
              }
            })),
            "offers": {
              "@type": "Offer",
              "price": "15000",
              "priceCurrency": "SEK",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "15000",
                "priceCurrency": "SEK"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 earth-gradient rounded-full flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                </div>
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Kontrollansvarig (KA)
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Certifierad kontrollansvarig med över 20 års erfarenhet. 
                  Vi säkerställer att ditt byggprojekt följer alla regler och krav enligt PBL.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  <Badge variant="secondary" className="text-sm">
                    <Award className="w-4 h-4 mr-1" aria-hidden="true" />
                    Certifierad KA
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                    20+ års erfarenhet
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                    Västernorrland
                  </Badge>
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                  aria-label="Få kostnadsfri offert för kontrollansvarig"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Få kostnadsfri offert
                </Button>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Vad ingår i KA-tjänsten?
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {kaServices.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                            <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
                          </div>
                          <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600 mb-6">{service.description}</p>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                <span className="text-slate-700 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Så fungerar processen
                </h2>
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Våra tjänsteområden
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Vi erbjuder kontrollansvarig-tjänster i hela Västernorrland
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {serviceAreas.map((area, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                      <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                      {area}
                    </Badge>
                  ))}
                </div>
                <p className="text-slate-600">
                  För projekt utanför dessa områden, kontakta oss för att diskutera möjligheterna.
                </p>
              </div>
            </div>
          </section>

          <ServiceFAQ items={kaFaq} />

          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Redo att starta ditt projekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss idag för en kostnadsfri konsultation. 
                Vi hjälper dig med kontrollansvarig-tjänster för ditt byggprojekt.
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
                  href="mailto:tobias@ytterman.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold"
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