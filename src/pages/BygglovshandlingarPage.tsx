import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, MapPin, Clock, FileText, Building, Ruler, Zap, Image } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY, SERVICES } from '@/config/company';

const documentService = SERVICES.buildingPermitDocuments;

const BygglovshandlingarPage = () => {
  const bygglovFAQ = [
    {
      question: "Vad ingår i bygglovshandlingar?",
      answer: "Vilka handlingar som behövs beror på åtgärden och byggnadsnämndens krav. Omfattningen bekräftas efter genomgång av projektet och kommunens besked."
    },
    {
      question: "Hur lång tid tar det att ta fram bygglovshandlingar?",
      answer: "Leveranstiden beror på projektets omfattning, befintligt underlag och kommunens krav. Den bekräftas efter genomgång av handlingarna."
    },
    {
      question: "Vad behöver jag förbereda?",
      answer: "Beskriv vad du vill bygga och skicka befintliga ritningar samt uppgifter om fastigheten om de finns. Efter genomgång får du besked om vilket ytterligare underlag Ytterman kan ta fram och vad som behöver komma från andra projektörer eller sakkunniga."
    },
    {
      question: "Hjälper ni även med bygglovsansökan?",
      answer: "Stöd med ansökan och kompletteringar kan avtalas. Exakt omfattning framgår av offerten."
    },
    {
      question: "Vad kostar bygglovshandlingar?",
      answer: `${documentService.priceLabel}. Omfattning och pris bekräftas efter att underlaget har granskats.`
    }
  ];

  const services = [
    {
      title: "Planritningar",
      description: "Planritningar med omfattning och skala anpassad till projektets och kommunens krav",
      icon: <Ruler className="h-6 w-6" />
    },
    {
      title: "Fasadritningar",
      description: "Fasadritningar för de vyer och uppgifter som ingår i uppdraget",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Sektionsritningar",
      description: "Sektioner när de behövs för åtgärden och ingår i offerten",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Situationsplan",
      description: "Situationsplan baserad på det kartunderlag som krävs för ärendet",
      icon: <Image className="h-6 w-6" />
    },
    {
      title: "Teknisk beskrivning",
      description: "Teknisk beskrivning i avtalad omfattning och med tydligt projektörsansvar",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Energiberäkning",
      description: "Energiberäkning enligt de krav och förutsättningar som gäller för projektet",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Bygglovshandlingar', url: 'https://ytterman.com/bygglovshandlingar' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bygglovshandlingar",
    "description": "Bygglovshandlingar med omfattning anpassad efter projektets underlag och byggnadsnämndens krav.",
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.brandName,
      "email": COMPANY.email
    },
    "areaServed": COMPANY.areaServed,
    "serviceType": documentService.name
  };

  return (
    <>
      <AdvancedSEO
        title="Bygglovshandlingar i Västernorrland | Ytterman"
        description="Bygglovshandlingar anpassade efter projektets och kommunens krav. Omfattning, pris och leveranstid bekräftas efter genomgång av underlaget."
        keywords="bygglovshandlingar, planritningar, bygglov, fasadritningar, teknisk beskrivning, situationsplan, Sundsvall, Härnösand, Västernorrland"
        url="https://ytterman.com/bygglovshandlingar"
        type="website"
        breadcrumbs={breadcrumbs}
        faq={bygglovFAQ}
      />
      
      <CanonicalUrl path="/bygglovshandlingar" />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: 'Bygglovshandlingar', href: '/bygglovshandlingar' }]} />
          </div>
        </section>
        
        <ServiceHero
          badge="Professionella Handlingar"
          title="Bygglovshandlingar i Västernorrland"
          subtitle="Handlingar utifrån projektets och kommunens krav"
          description="Efter genomgång av projektet identifierar vi vilka handlingar som kan ingå. Omfattning, pris och leveranstid bekräftas i offerten."
          features={[
            "Planritningar, fasadritningar och sektioner efter behov",
            "Situationsplan utifrån rätt kartunderlag",
            "Teknisk beskrivning i avtalad omfattning",
            "Energiberäkning när den ingår i offerten",
            "Stöd med ansökan kan avtalas separat"
          ]}
          ctaPrimary={{
            text: "Begär offert",
            href: "/kontakt"
          }}
          ctaSecondary={{
            text: "Mejla direkt",
            href: COMPANY.emailHref,
            external: true
          }}
          bannerContent={{
            icon: Building,
            title: "Bygglovshandlingar",
            subtitle: "Från ritningar till färdigt bygglov",
            certifications: [
              COMPANY.experienceLabel + " i byggbranschen",
              "Handlingar utifrån projektets och kommunens underlag",
              "Omfattning och leveranstid bekräftas före uppdrag"
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
                <p className="text-gray-600">Över 20 års erfarenhet i byggbranschen ger en praktisk grund för att förstå projektets handlingar och tekniska sammanhang.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tydlig leveransplan</h3>
                <p className="text-gray-600">Underlag, omfattning och leveranstid gås igenom innan uppdraget bekräftas.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Avtalad omfattning</h3>
                <p className="text-gray-600">Offerten beskriver vilka handlingar som ingår och vilka underlag eller kompletteringar som ligger utanför uppdraget.</p>
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
              Skicka projektets underlag så återkommer jag med nästa steg och offert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link to="/kontakt/">Skicka förfrågan</Link>
              </Button>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600" asChild>
                <a href={`mailto:${COMPANY.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  {COMPANY.email}
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Förfrågningar från {COMPANY.region}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                Tidplan bekräftas i offerten
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
