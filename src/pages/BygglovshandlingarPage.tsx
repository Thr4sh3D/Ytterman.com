import { SEO } from "@/components/SEO";
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, MapPin, Clock, FileText, Building, Ruler, Zap, Image } from "lucide-react";
import { Link } from "react-router-dom";

const BygglovshandlingarPage = () => {
  const bygglovFAQ = [
    {
      question: "Vad ingår i bygglovshandlingar?",
      answer: "Kompletta bygglovshandlingar inkluderar planritningar, sektioner, fasadritningar, situationsplan, teknisk beskrivning och energiberäkningar. Vi tar fram alla handlingar som behövs för din bygglovsansökan."
    },
    {
      question: "Hur lång tid tar det att ta fram bygglovshandlingar?",
      answer: "Beroende på projektets omfattning tar det vanligtvis 2-4 veckor att ta fram kompletta bygglovshandlingar. Vid enklare projekt kan det gå snabbare, medan större och mer komplexa projekt kan ta längre tid."
    },
    {
      question: "Vad behöver jag förbereda?",
      answer: "Du behöver ha en tydlig bild av vad du vill bygga, befintliga ritningar om det finns, samt uppgifter om fastigheten. Vi hjälper dig sedan att samla in övrig nödvändig information och tar fram alla erforderliga handlingar."
    },
    {
      question: "Hjälper ni även med bygglovsansökan?",
      answer: "Ja, vi hjälper dig genom hela processen - från framtagande av handlingar till att skicka in ansökan till kommunen. Vi kan också svara på eventuella kompletteringar från byggnadsnämnden."
    },
    {
      question: "Vad kostar bygglovshandlingar?",
      answer: "Priset beror på projektets omfattning. För ett standardprojekt (t.ex. tillbyggnad på 30-50 kvm) är priset från 8,000 kr. Vi ger alltid en kostnadsfri offert efter att ha bedömt ditt projekt."
    }
  ];

  const services = [
    {
      title: "Planritningar",
      description: "Detaljerade planritningar i skala 1:100 med alla mått och detaljer",
      icon: <Ruler className="h-6 w-6" />
    },
    {
      title: "Fasadritningar",
      description: "Fasadritningar från alla sidor som visar byggnadens utseende",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Sektionsritningar",
      description: "Sektioner som visar hur byggnaden ser ut i genomskärning",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Situationsplan",
      description: "Situationsplan som visar byggnadens placering på tomten",
      icon: <Image className="h-6 w-6" />
    },
    {
      title: "Teknisk beskrivning",
      description: "Utförlig teknisk beskrivning av material och konstruktion",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Energiberäkning",
      description: "Energiberäkningar enligt gällande BBR-krav",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bygglovshandlingar",
    "description": "Professionella bygglovshandlingar för bygglov i Västernorrland. Planritningar, fasadritningar, teknisk beskrivning och energiberäkningar.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ytterman",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Viksjö",
        "addressRegion": "Västernorrland",
        "addressCountry": "SE"
      },
      "telephone": "+46761118447",
      "email": "tobias@ytterman.com"
    },
    "areaServed": [
      "Sundsvall", "Härnösand", "Sollefteå", "Timrå", "Kramfors"
    ],
    "serviceType": "Bygglovshandlingar",
    "offers": {
      "@type": "Offer",
      "description": "Bygglovshandlingar från 8,000 SEK",
      "priceRange": "Från 8,000 SEK"
    }
  };

  return (
    <>
      <SEO
        title="Bygglovshandlingar Västernorrland - Planritningar & Teknisk Beskrivning | Ytterman"
        description="Behöver du bygglovshandlingar? Vi tar fram kompletta handlingar för bygglov: planritningar, fasadritningar, sektioner och energiberäkningar. Från 8,000 kr."
        keywords="bygglovshandlingar, planritningar, bygglov, fasadritningar, teknisk beskrivning, situationsplan, Sundsvall, Härnösand, Västernorrland"
        url="https://ytterman.com/bygglovshandlingar"
        type="webpage"
      />
      
      <CanonicalUrl path="/bygglovshandlingar" />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="min-h-screen">
        <Header />
        
        <ServiceHero
          badge="Professionella Handlingar"
          title="Bygglovshandlingar i Västernorrland"
          subtitle="Kompletta handlingar för ditt bygglov"
          description="Vi tar fram alla handlingar som behövs för din bygglovsansökan. Med över 20 års erfarenhet hjälper vi dig genom hela processen - från idé till godkänt bygglov. Planritningar, fasadritningar, sektioner, teknisk beskrivning och energiberäkningar."
          features={[
            "Planritningar i skala 1:100 med alla mått",
            "Fasadritningar och sektioner",
            "Situationsplan och teknisk beskrivning",
            "Energiberäkningar enligt BBR",
            "Hjälp med bygglovsansökan"
          ]}
          ctaPrimary={{
            text: "Begär offert",
            href: "/kontakt"
          }}
          ctaSecondary={{
            text: "076-111 84 47",
            href: "tel:+46761118447",
            phone: true
          }}
          bannerContent={{
            icon: Building,
            title: "Bygglovshandlingar",
            subtitle: "Från ritningar till färdigt bygglov",
            certifications: [
              "Över 20 års erfarenhet av bygglovshandlingar",
              "Uppfyller alla krav från kommunen",
              "Snabb handläggning - klart inom 2-4 veckor"
            ]
          }}
        />

        <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Vad ingår i bygglovshandlingarna?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Så fungerar processen
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontakt och behovskartläggning</h3>
                  <p className="text-gray-600">Vi börjar med ett möte där du berättar om ditt projekt. Vi går igenom vad du vill bygga och vilka handlingar som behövs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Uppmätning och uppstartsmöte</h3>
                  <p className="text-gray-600">Vi gör en uppmätning på plats om det behövs, och samlar in all nödvändig information.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Framtagande av handlingar</h3>
                  <p className="text-gray-600">Vi tar fram alla nödvändiga ritningar och handlingar: planritningar, fasadritningar, sektioner, situationsplan, teknisk beskrivning och energiberäkningar.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Granskning och godkännande</h3>
                  <p className="text-gray-600">Du får se handlingarna och vi gör eventuella justeringar. När allt är godkänt hjälper vi dig att skicka in ansökan till kommunen.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Uppföljning och kompletteringar</h3>
                  <p className="text-gray-600">Vi följer upp med kommunen och svarar på eventuella kompletteringar tills du får ditt bygglov.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Därför ska du välja oss
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">20+ års erfarenhet</h3>
                <p className="text-gray-600">Vi har många års erfarenhet av att ta fram bygglovshandlingar och vet exakt vad kommunerna kräver.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Snabb handläggning</h3>
                <p className="text-gray-600">Vi tar fram handlingarna snabbt så att du kan lämna in din ansökan inom 2-4 veckor.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kompletta handlingar</h3>
                <p className="text-gray-600">Du får alla handlingar som behövs för ditt bygglov i ett paket - inga dolda kostnader.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Vanliga frågor om bygglovshandlingar
            </h2>
            <FAQ items={bygglovFAQ} />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 earth-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Behöver du bygglovshandlingar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakta mig idag för en kostnadsfri konsultation och offert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link to="/kontakt">Skicka förfrågan</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <a href="mailto:tobias@ytterman.com">
                  <Mail className="mr-2 h-4 w-4" />
                  tobias@ytterman.com
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Verksam i hela Västernorrland
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                Snabb handläggning
              </div>
            </div>
          </div>
        </section>

        </div> {/* Close bg-gradient div */}

        <Footer />
      </div>
    </>
  );
};

export default BygglovshandlingarPage;
