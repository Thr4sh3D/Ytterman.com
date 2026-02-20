import { SEO } from "@/components/SEO";
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { FAQ } from "@/components/FAQ";
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-primary">
                Ytterman
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Hem</Link>
                <Link to="/tjanster" className="text-gray-600 hover:text-primary transition-colors">Tjänster</Link>
                <Link to="/kontakt" className="text-gray-600 hover:text-primary transition-colors">Kontakt</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              Certifierad BAS-U
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              BAS-U i Västernorrland
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Säkerställ en trygg arbetsmiljö under hela byggfasen. Som certifierad BAS-U 
              (Byggarbetsmiljösamordnare under utförande) övervakar jag säkerheten på 
              byggarbetsplatsen och samordnar alla entreprenörer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="earth-gradient text-white hover:opacity-90" asChild>
                <Link to="/kontakt">Begär offert</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+46761118447">
                  <Phone className="mr-2 h-4 w-4" />
                  Ring direkt
                </a>
              </Button>
            </div>
          </div>
        </section>

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
              <Button size="lg" variant="secondary" asChild>
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

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Ytterman</h3>
                <p className="text-gray-400 text-sm">
                  Certifierad kontrollansvarig och BAS med över 20 års erfarenhet i Västernorrland.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Tjänster</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link to="/kontrollansvarig" className="hover:text-white transition-colors">Kontrollansvarig</Link></li>
                  <li><Link to="/bas-p" className="hover:text-white transition-colors">BAS-P</Link></li>
                  <li><Link to="/bas-u" className="hover:text-white transition-colors">BAS-U</Link></li>
                  <li><Link to="/energideklaration" className="hover:text-white transition-colors">Energideklaration</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Områden</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Sundsvall</li>
                  <li>Härnösand</li>
                  <li>Sollefteå</li>
                  <li>Timrå</li>
                  <li>Kramfors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Kontakt</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>Telefon: 076-111 84 47</p>
                  <p>E-post: tobias@ytterman.com</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2024 Ytterman. Alla rättigheter förbehållna.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BasUPage;