import { SEO } from "@/components/SEO";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Mail, MapPin, Clock, Award, Shield, FileText, Search, Camera, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";

const OverlatelsebesiktningPage = () => {
  const overlatelsebesiktningFAQ = [
    {
      question: "Vad är en överlåtelsebesiktning?",
      answer: "En överlåtelsebesiktning är en teknisk undersökning av en fastighet som genomförs inför försäljning för att identifiera eventuella fel och brister."
    },
    {
      question: "Varför behövs en överlåtelsebesiktning?",
      answer: "Besiktningen skyddar både köpare och säljare genom att dokumentera fastighetens skick och identifiera eventuella problem som kan påverka värdet."
    },
    {
      question: "Vad ingår i besiktningen?",
      answer: "Vi kontrollerar byggnadens konstruktion, installationer, fukt- och ventilationssystem, samt dokumenterar alla iakttagelser i en detaljerad rapport."
    },
    {
      question: "Hur lång tid tar en överlåtelsebesiktning?",
      answer: "Besiktningstiden varierar beroende på fastighetens storlek, men vanligtvis tar det 2-4 timmar. Rapporten levereras inom 24-48 timmar."
    }
  ];

  const services = [
    {
      title: "Teknisk besiktning",
      description: "Grundlig kontroll av byggnadens konstruktion och skick",
      icon: <Search className="h-6 w-6" />
    },
    {
      title: "Installationskontroll",
      description: "Kontroll av el-, VVS- och ventilationsinstallationer",
      icon: <ClipboardCheck className="h-6 w-6" />
    },
    {
      title: "Dokumentation",
      description: "Detaljerad fotografisk dokumentation av alla iakttagelser",
      icon: <Camera className="h-6 w-6" />
    },
    {
      title: "Besiktningsrapport",
      description: "Professionell rapport med alla fynd och rekommendationer",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Överlåtelsebesiktning",
    "description": "Professionella överlåtelsebesiktningar i Västernorrland. Certifierad besiktningsman med över 20 års erfarenhet.",
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
    "serviceType": "Överlåtelsebesiktning",
    "offers": {
      "@type": "Offer",
      "description": "Överlåtelsebesiktning från 12,000 SEK",
      "priceRange": "Från 12,000 SEK"
    }
  };

  return (
    <>
      <SEO
        title="Överlåtelsebesiktning i Västernorrland - Certifierad Besiktningsman | Ytterman"
        description="Behöver du överlåtelsebesiktning? Certifierad besiktningsman med 20+ års erfarenhet i Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors. Snabb rapport."
        keywords="överlåtelsebesiktning, besiktning, fastighetbesiktning, överlåtelsebesiktning Sundsvall, överlåtelsebesiktning Härnösand, besiktningsman Västernorrland"
        url="https://ytterman.com/overlatelsebesiktning"
        type="webpage"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50">
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
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Certifierad Besiktningsman
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Överlåtelsebesiktning i Västernorrland
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Säkerställ en trygg fastighetsaffär med professionell överlåtelsebesiktning. 
              Som certifierad besiktningsman med över 20 års erfarenhet ger jag dig en 
              detaljerad rapport om fastighetens skick.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link to="/kontakt">Boka besiktning</Link>
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
              Vad ingår i besiktningen
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
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

        {/* What We Check Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Vad kontrollerar vi
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Konstruktion</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Grund och källare</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Väggar och tak</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Fönster och dörrar</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Installationer</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Elinstallationer</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />VVS-system</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Ventilation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Miljö & Säkerhet</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Fuktmätning</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Brandskydd</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Radon</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Så går besiktningen till
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Bokning</h3>
                  <p className="text-gray-600">Vi bokar en tid som passar dig och går igenom vad som ska besiktigas.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Besiktning</h3>
                  <p className="text-gray-600">Grundlig genomgång av fastigheten med dokumentation av alla iakttagelser.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapport</h3>
                  <p className="text-gray-600">Detaljerad besiktningsrapport med bilder och rekommendationer levereras inom 48 timmar.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Uppföljning</h3>
                  <p className="text-gray-600">Vi går igenom rapporten med dig och svarar på eventuella frågor.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Vanliga frågor om överlåtelsebesiktning
            </h2>
            <FAQ items={overlatelsebesiktningFAQ} />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Behöver du överlåtelsebesiktning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakta mig idag för att boka din besiktning eller få en kostnadsfri offert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakt">Boka besiktning</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600" asChild>
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
                Snabb rapport
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
                  <li><Link to="/overlatelsebesiktning" className="hover:text-white transition-colors">Överlåtelsebesiktning</Link></li>
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

export default OverlatelsebesiktningPage;