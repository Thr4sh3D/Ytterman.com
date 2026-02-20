import { SEO } from "@/components/SEO";
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Mail, MapPin, Clock, Award, Shield, FileText, Zap, Home, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const EnergiDeklarationPage = () => {
  const energiDeklarationFAQ = [
    {
      question: "Vad är en energideklaration?",
      answer: "En energideklaration visar byggnadens energiprestanda och ger information om energiförbrukning, energiklass och förslag på energibesparande åtgärder."
    },
    {
      question: "När behövs en energideklaration?",
      answer: "Energideklaration krävs vid försäljning, uthyrning eller vid större renoveringar av byggnader. Den ska också uppdateras regelbundet."
    },
    {
      question: "Hur lång tid tar det att få en energideklaration?",
      answer: "Normalt tar det 1-2 veckor från besiktning till färdig energideklaration, beroende på byggnadens storlek och komplexitet."
    },
    {
      question: "Vad kostar en energideklaration?",
      answer: "Kostnaden varierar beroende på byggnadens storlek och typ. Kontakta oss för en kostnadsfri offert anpassad efter din fastighet."
    }
  ];

  const services = [
    {
      title: "Energibesiktning",
      description: "Grundlig besiktning av byggnadens energisystem",
      icon: <Home className="h-6 w-6" />
    },
    {
      title: "Energiberäkning",
      description: "Beräkning av byggnadens energiprestanda och energiklass",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      title: "Åtgärdsförslag",
      description: "Konkreta förslag på energibesparande åtgärder",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Certifiering",
      description: "Utfärdande av officiell energideklaration",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Energideklaration",
    "description": "Professionella energideklarationer i Västernorrland. Certifierad energiexpert med över 20 års erfarenhet.",
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
    "serviceType": "Energideklaration",
    "offers": {
      "@type": "Offer",
      "description": "Energideklaration från 8,000 SEK",
      "priceRange": "Från 8,000 SEK"
    }
  };

  return (
    <>
      <SEO
        title="Energideklaration i Västernorrland - Certifierad Energiexpert | Ytterman"
        description="Behöver du energideklaration? Certifierad energiexpert med 20+ års erfarenhet i Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors. Snabb handläggning."
        keywords="energideklaration, energideklaration Sundsvall, energideklaration Härnösand, energideklaration Västernorrland, energiklass, energibesiktning"
        url="https://ytterman.com/energideklaration"
        type="webpage"
      />
      
      <CanonicalUrl path="/energideklaration" />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="min-h-screen">
        <Header />
        
        <ServiceHero
          badge="Certifierad Energiexpert"
          title="Energideklaration i Västernorrland"
          subtitle="Professionell energibesiktning och rådgivning"
          description="Få en professionell energideklaration för din fastighet. Som certifierad energiexpert hjälper jag dig med energibesiktning, energiberäkning och konkreta förslag för energibesparingar."
          features={[
            "Komplett energibesiktning av fastigheten",
            "Energiberäkning och energiklass",
            "Konkreta förslag på energibesparande åtgärder",
            "Official energideklaration enligt BBR",
            "Snabb handläggning - klart inom 1-2 veckor"
          ]}
          ctaPrimary={{
            text: "Begär offert",
            href: "/kontakt"
          }}
          ctaSecondary={{
            text: "Ring direkt",
            href: "tel:+46761118447",
            phone: true
          }}
          bannerContent={{
            icon: Zap,
            title: "Certifierad Energiexpert",
            subtitle: "Energideklaration",
            certifications: [
              "Certifierad energideklarationsexpert",
              "Över 20 års erfarenhet av energiberäkningar",
              "Snabb handläggning och tydlig rapport"
            ]
          }}
        />

        <div className="bg-gradient-to-br from-slate-50 via-yellow-50/30 to-slate-50">
        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Energideklaration Tjänster
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-fit">
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
              Så går energideklarationen till
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Bokning & Planering</h3>
                  <p className="text-gray-600">Vi bokar en tid för besiktning och går igenom vad som behövs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Energibesiktning</h3>
                  <p className="text-gray-600">Grundlig besiktning av byggnadens energisystem och konstruktion.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Beräkning & Analys</h3>
                  <p className="text-gray-600">Beräkning av energiprestanda och identifiering av förbättringsområden.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Energideklaration</h3>
                  <p className="text-gray-600">Färdig energideklaration med energiklass och åtgärdsförslag.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Fördelar med energideklaration
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sänk energikostnaderna</h3>
                <p className="text-gray-600">Få konkreta förslag på hur du kan minska din energiförbrukning och spara pengar.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Öka fastighetsvärdet</h3>
                <p className="text-gray-600">En bra energiklass kan öka din fastighets värde och attraktivitet på marknaden.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 bg-amber-100 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lagkrav</h3>
                <p className="text-gray-600">Uppfyll lagkraven för energideklaration vid försäljning eller uthyrning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Vanliga frågor om energideklaration
            </h2>
            <FAQ items={energiDeklarationFAQ} />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 earth-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Behöver du energideklaration?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakta mig idag för en kostnadsfri konsultation och offert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link to="/kontakt">Skicka förfrågan</Link>
              </Button>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-yellow-600" asChild>
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

export default EnergiDeklarationPage;