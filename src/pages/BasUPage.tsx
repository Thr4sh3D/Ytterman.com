import { SEO } from "@/components/SEO";
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Mail, MapPin, Clock, Award, Shield, FileText, Users, HardHat, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const BasUPage = () => {
  const basUFAQ = [
    {
      question: "Vad är BAS-U?",
      answer: "BAS-U (Byggarbetsmiljösamordnare under utförande) ansvarar för att samordna arbetsmiljöfrågor under byggfasen och säkerställer att arbetsmiljöplanen följs."
    },
    {
      question: "När behövs en BAS-U?",
      answer: "BAS-U krävs när flera entreprenörer arbetar samtidigt på byggarbetsplatsen, eller när projektet beräknas ta mer än 30 arbetsdagar eller 500 persondagar."
    },
    {
      question: "Vad ingår i BAS-U tjänsten?",
      answer: "Arbetsmiljöuppföljning, säkerhetsronder, samordning av entreprenörer, incidentrapportering och säkerställande av att alla säkerhetsrutiner följs."
    },
    {
      question: "Kan samma person vara både BAS-P och BAS-U?",
      answer: "Ja, samma person kan vara både BAS-P och BAS-U, vilket ger kontinuitet och djup förståelse för projektets arbetsmiljöaspekter."
    }
  ];

  const services = [
    {
      title: "Säkerhetsronder",
      description: "Regelbundna säkerhetsronder och kontroller på byggarbetsplatsen",
      icon: <Eye className="h-6 w-6" />
    },
    {
      title: "Samordning",
      description: "Samordning mellan olika entreprenörer och arbetslag",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Incidenthantering",
      description: "Hantering och rapportering av arbetsmiljöincidenter",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Dokumentation",
      description: "Löpande dokumentation av arbetsmiljöarbetet",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "BAS-U tjänster - Byggarbetsmiljösamordnare under utförande",
    "description": "Professionella BAS-U tjänster i Västernorrland. Certifierad byggarbetsmiljösamordnare med över 20 års erfarenhet.",
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
    "serviceType": "BAS-U (Byggarbetsmiljösamordnare under utförande)",
    "offers": {
      "@type": "Offer",
      "description": "BAS-U tjänster från 15,000 SEK",
      "priceRange": "Från 15,000 SEK"
    }
  };

  return (
    <>
      <SEO
        title="BAS-U i Västernorrland - Byggarbetsmiljösamordnare Utförande | Ytterman"
        description="Behöver du BAS-U? Certifierad byggarbetsmiljösamordnare under utförande med 20+ års erfarenhet i Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors."
        keywords="BAS-U, byggarbetsmiljösamordnare, säkerhetsronder, BAS-U Sundsvall, BAS-U Härnösand, BAS-U Västernorrland, arbetsmiljö byggarbetsplats"
        url="https://ytterman.com/bas-u"
        type="webpage"
      />
      
      <CanonicalUrl path="/bas-u" />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="min-h-screen">
        <Header />
        
        <ServiceHero
          badge="Certifierad BAS-U"
          title="BAS-U i Västernorrland"
          subtitle="Säker arbetsmiljö under byggfasen"
          description="Säkerställ en trygg arbetsmiljö under hela byggfasen. Som certifierad BAS-U (Byggarbetsmiljösamordnare under utförande) övervakar jag säkerheten på byggarbetsplatsen och samordnar alla entreprenörer."
          features={[
            "Säkerhetsronder och arbetsmiljökontroll",
            "Samordning mellan entreprenörer",
            "Certifierad enligt AFS 1999:3",
            "Fast pris eller tydlig timdebitering",
            "Kan kombineras med BAS-P och KA"
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
            icon: Eye,
            title: "Certifierad BAS-U",
            subtitle: "Byggarbetsmiljösamordnare",
            certifications: [
              "Certifierad enligt AFS 1999:3",
              "Regelbundna säkerhetsronder på plats",
              "Kan kombineras med BAS-P och Kontrollansvarig"
            ]
          }}
        />

        <div className="bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50">
        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              BAS-U Tjänster
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit">
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
              BAS-U Processen
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Uppstart</h3>
                  <p className="text-gray-600">Genomgång av arbetsmiljöplan och etablering av säkerhetsrutiner.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Löpande kontroll</h3>
                  <p className="text-gray-600">Regelbundna säkerhetsronder och kontroller på byggarbetsplatsen.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Samordning</h3>
                  <p className="text-gray-600">Kontinuerlig samordning mellan entreprenörer och arbetslag.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Avslut</h3>
                  <p className="text-gray-600">Slutrapport och dokumentation av arbetsmiljöarbetet.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Vanliga frågor om BAS-U
            </h2>
            <FAQ items={basUFAQ} />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 earth-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Behöver du BAS-U för ditt projekt?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakta mig idag för en kostnadsfri konsultation och offert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link to="/kontakt">Skicka förfrågan</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600" asChild>
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

export default BasUPage;