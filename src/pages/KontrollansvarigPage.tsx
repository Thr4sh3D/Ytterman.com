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
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Mail, MapPin, Clock, Award, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const KontrollansvarigPage = () => {
  const kontrollansvarigFAQ = [
    {
      question: "Vad gör en kontrollansvarig?",
      answer: "En kontrollansvarig säkerställer att byggprojektet följer gällande byggregler, kontrollerar att alla tekniska egenskapskrav uppfylls och utfärdar slutbevis när byggnaden är klar."
    },
    {
      question: "När behövs en kontrollansvarig?",
      answer: "En kontrollansvarig krävs för alla bygglov enligt Plan- och bygglagen (PBL). Detta gäller både nybyggnation, tillbyggnader och större renoveringar."
    },
    {
      question: "Vad kostar en kontrollansvarig?",
      answer: "Kostnaden varierar beroende på projektets storlek och komplexitet. Kontakta oss för en kostnadsfri offert anpassad efter ditt specifika projekt."
    },
    {
      question: "Hur lång tid tar kontrollprocessen?",
      answer: "Tidsåtgången beror på projektets omfattning. Vi arbetar effektivt för att minimera förseningar och håller dig informerad genom hela processen."
    }
  ];

  const services = [
    {
      title: "Kontrollplan",
      description: "Upprättande av detaljerad kontrollplan för ditt byggprojekt",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Teknisk kontroll",
      description: "Kontroll av tekniska egenskapskrav och byggnadstekniska lösningar",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Slutbesiktning",
      description: "Genomförande av slutbesiktning och utfärdande av slutbevis",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Rådgivning",
      description: "Kontinuerlig rådgivning genom hela byggprocessen",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Kontrollansvarig', url: 'https://ytterman.com/kontrollansvarig' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kontrollansvarig tjänster",
    "description": "Professionella kontrollansvarig tjänster i Västernorrland. Certifierad kontrollansvarig med över 20 års erfarenhet i byggbranschen.",
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
    "serviceType": "Kontrollansvarig",
    "offers": {
      "@type": "Offer",
      "description": "Kontrollansvarig tjänster från 19,999 SEK",
      "priceRange": "Från 19,999 SEK"
    }
  };

  return (
    <>
      <AdvancedSEO
        title="Kontrollansvarig i Västernorrland - Certifierad & Erfaren | Ytterman"
        description="Behöver du en kontrollansvarig? Certifierad kontrollansvarig med 20+ års erfarenhet i Sundsvall, Härnösand, Timrå, Kramfors och Sollefteå. Fast pris, trygg process."
        keywords="kontrollansvarig, kontrollansvarig Sundsvall, kontrollansvarig Härnösand, kontrollansvarig Timrå, kontrollansvarig Kramfors, kontrollansvarig Sollefteå, kontrollansvarig Västernorrland, byggkontroll, slutbevis, kontrollplan, PBL"
        url="https://ytterman.com/kontrollansvarig"
        type="website"
        breadcrumbs={breadcrumbs}
        faq={kontrollansvarigFAQ}
      />
      
      <CanonicalUrl path="/kontrollansvarig" />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: 'Kontrollansvarig', href: '/kontrollansvarig' }]} />
          </div>
        </section>
        
        <ServiceHero
          badge="Certifierad Kontrollansvarig"
          title="Kontrollansvarig i Västernorrland"
          subtitle="Trygg byggprocess med erfaren kontrollansvarig"
          description="Säkerställ att ditt byggprojekt följer alla regler och krav. Som certifierad kontrollansvarig (KA enligt PBL) med över 20 års erfarenhet i byggbranschen hjälper jag dig genom hela processen - från kontrollplan till slutbevis."
          features={[
            "Kontrollplan och teknisk kontroll enligt PBL",
            "Slutbesiktning och utfärdande av slutbevis",
            "Erfaren och certifierad kontrollansvarig",
            "Fast pris eller tydlig timdebitering",
            "Digital hantering och snabb återkoppling"
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
            icon: Shield,
            title: "Certifierad Expert",
            subtitle: "Kontrollansvarig enligt PBL",
            certifications: [
              "Medlem i SBR - Svenska Byggingenjörers Riksförbund",
              "Certifierad enligt nya regelverket 2025",
              "Digital hantering och snabb återkoppling"
            ]
          }}
        />

        {/* Rest of page content */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Kontrollansvarig Tjänster
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontakt & Offert</h3>
                  <p className="text-gray-600">Vi diskuterar ditt projekt och ger dig en kostnadsfri offert.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontrollplan</h3>
                  <p className="text-gray-600">Jag upprättar en detaljerad kontrollplan anpassad för ditt projekt.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontroll & Uppföljning</h3>
                  <p className="text-gray-600">Kontinuerlig kontroll och uppföljning under byggprocessen.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Slutbevis</h3>
                  <p className="text-gray-600">Slutbesiktning och utfärdande av slutbevis när allt är klart.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local City Pages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Kontrollansvarig i din kommun
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Vi erbjuder kontrollansvarig tjänster i hela Västernorrland. Läs mer om vår lokala närvaro i din kommun:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/kontrollansvarig-sundsvall" className="flex items-center justify-between p-5 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <div>
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600">Kontrollansvarig Sundsvall</span>
                  <span className="block text-sm text-gray-500">Hembas – direkt tillgänglig</span>
                </div>
                <MapPin className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
              </Link>
              <Link to="/kontrollansvarig-harnosand" className="flex items-center justify-between p-5 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <div>
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600">Kontrollansvarig Härnösand</span>
                  <span className="block text-sm text-gray-500">30 min från Sundsvall</span>
                </div>
                <MapPin className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
              </Link>
              <Link to="/kontrollansvarig-timra" className="flex items-center justify-between p-5 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <div>
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600">Kontrollansvarig Timrå</span>
                  <span className="block text-sm text-gray-500">20 min från Sundsvall</span>
                </div>
                <MapPin className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
              </Link>
              <Link to="/kontrollansvarig-kramfors" className="flex items-center justify-between p-5 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <div>
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600">Kontrollansvarig Kramfors</span>
                  <span className="block text-sm text-gray-500">40 min från Sundsvall</span>
                </div>
                <MapPin className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
              </Link>
              <Link to="/kontrollansvarig-solleftea" className="flex items-center justify-between p-5 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <div>
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600">Kontrollansvarig Sollefteå</span>
                  <span className="block text-sm text-gray-500">45 min från Sundsvall</span>
                </div>
                <MapPin className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Vanliga frågor om kontrollansvarig
            </h2>
            <FAQ items={kontrollansvarigFAQ} />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 earth-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Behöver du en kontrollansvarig?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakta mig idag för en kostnadsfri konsultation och offert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link to="/kontakt">Skicka förfrågan</Link>
              </Button>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600" asChild>
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

export default KontrollansvarigPage;