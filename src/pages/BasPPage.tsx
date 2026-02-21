import { SEO } from "@/components/SEO";
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Mail, MapPin, Clock, Award, Shield, FileText, Users, HardHat } from "lucide-react";
import { Link } from "react-router-dom";

const BasPPage = () => {
  const basPFAQ = [
    {
      question: "Vad är BAS-P?",
      answer: "BAS-P (Byggarbetsmiljösamordnare under projektering) ansvarar för att samordna arbetsmiljöfrågor under projekteringsfasen och upprättar arbetsmiljöplan för byggprojektet."
    },
    {
      question: "När behövs en BAS-P?",
      answer: "BAS-P krävs när flera entreprenörer ska arbeta samtidigt på en byggarbetsplats, eller när projektet beräknas ta mer än 30 arbetsdagar eller 500 persondagar."
    },
    {
      question: "Vad ingår i BAS-P tjänsten?",
      answer: "Arbetsmiljöplan, riskbedömningar, samordning av säkerhetsåtgärder, och säkerställande av att alla arbetsmiljökrav följs under projekteringen."
    },
    {
      question: "Skillnaden mellan BAS-P och BAS-U?",
      answer: "BAS-P arbetar under projekteringsfasen medan BAS-U arbetar under utförandefasen. Ofta behövs båda rollerna för ett komplett byggprojekt."
    }
  ];

  const services = [
    {
      title: "Arbetsmiljöplan",
      description: "Upprättande av detaljerad arbetsmiljöplan för projektet",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Riskbedömning",
      description: "Identifiering och bedömning av arbetsmiljörisker",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Samordning",
      description: "Samordning mellan olika aktörer under projekteringen",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Säkerhetsplanering",
      description: "Planering av säkerhetsåtgärder för byggfasen",
      icon: <HardHat className="h-6 w-6" />
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "BAS-P tjänster - Byggarbetsmiljösamordnare under projektering",
    "description": "Professionella BAS-P tjänster i Västernorrland. Certifierad byggarbetsmiljösamordnare med över 20 års erfarenhet i byggbranschen.",
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
    "serviceType": "BAS-P (Byggarbetsmiljösamordnare under projektering)",
    "offers": {
      "@type": "Offer",
      "description": "BAS-P tjänster från 12,000 SEK",
      "priceRange": "Från 12,000 SEK"
    }
  };

  return (
    <>
      <SEO
        title="BAS-P i Västernorrland - Byggarbetsmiljösamordnare Projektering | Ytterman"
        description="Behöver du BAS-P? Certifierad byggarbetsmiljösamordnare under projektering med 20+ års erfarenhet i Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors."
        keywords="BAS-P, byggarbetsmiljösamordnare, arbetsmiljöplan, BAS-P Sundsvall, BAS-P Härnösand, BAS-P Västernorrland, arbetsmiljö byggprojekt"
        url="https://ytterman.com/bas-p"
        type="webpage"
      />
      
      <CanonicalUrl path="/bas-p" />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="min-h-screen">
        <Header />
        
        <ServiceHero
          badge="Certifierad BAS-P"
          title="BAS-P i Västernorrland"
          subtitle="Säker arbetsmiljö under projektering"
          description="Säkerställ en trygg arbetsmiljö redan från projekteringsfasen. Som certifierad BAS-P (Byggarbetsmiljösamordnare under projektering) hjälper jag dig planera för säkerhet och förebygga arbetsmiljörisker."
          features={[
            "Arbetsmiljöplan och riskbedömningar",
            "Samordning under projekteringsfasen",
            "Certifierad enligt AFS 1999:3",
            "Fast pris eller tydlig timdebitering",
            "Kan kombineras med BAS-U och KA"
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
            icon: HardHat,
            title: "Certifierad BAS-P",
            subtitle: "Byggarbetsmiljösamordnare",
            certifications: [
              "Certifierad enligt AFS 1999:3",
              "Över 20 års erfarenhet av arbetsmiljö",
              "Kan kombineras med BAS-U och Kontrollansvarig"
            ]
          }}
        />

        <div className="bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-50">
        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              BAS-P Tjänster
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
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
              BAS-P Processen
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Projektanalys</h3>
                  <p className="text-gray-600">Analys av projektets omfattning och identifiering av arbetsmiljörisker.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Arbetsmiljöplan</h3>
                  <p className="text-gray-600">Upprättande av detaljerad arbetsmiljöplan med säkerhetsåtgärder.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Samordning</h3>
                  <p className="text-gray-600">Samordning mellan projektörer, konstruktörer och andra aktörer.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dokumentation</h3>
                  <p className="text-gray-600">Komplett dokumentation för överlämning till BAS-U.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Vanliga frågor om BAS-P
            </h2>
            <FAQ items={basPFAQ} />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 earth-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Behöver du BAS-P för ditt projekt?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakta mig idag för en kostnadsfri konsultation och offert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link to="/kontakt">Skicka förfrågan</Link>
              </Button>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-green-600" asChild>
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

export default BasPPage;