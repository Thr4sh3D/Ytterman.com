import { SEO } from "@/components/SEO";
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { FAQ } from "@/components/FAQ";
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
    "description": "Professionella BAS-P tjänster i Västernorrland. Certifierad byggarbetsmiljösamordnare med över 20 års erfarenhet.",
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-50">
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
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Certifierad BAS-P
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              BAS-P i Västernorrland
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Säkerställ en trygg arbetsmiljö redan från projekteringsfasen. Som certifierad BAS-P 
              (Byggarbetsmiljösamordnare under projektering) hjälper jag dig planera för säkerhet 
              och förebygga arbetsmiljörisker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Behöver du BAS-P för ditt projekt?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakta mig idag för en kostnadsfri konsultation och offert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakt">Skicka förfrågan</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600" asChild>
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

export default BasPPage;