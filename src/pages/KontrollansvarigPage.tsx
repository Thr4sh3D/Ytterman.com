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
import { CheckCircle, Mail, MapPin, Clock, Award, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS_COPY, COMPANY, KA_CERT, PRICE_LABELS, PRICING, formatSek } from '@/config/company';
import { cityData } from '@/content/kontrollansvarigCityData';

const KontrollansvarigPage = () => {
  const kontrollansvarigFAQ = [
    {
      question: "Vad gör en kontrollansvarig?",
      answer: BUSINESS_COPY.kaScope
    },
    {
      question: "När behövs en kontrollansvarig?",
      answer: "En certifierad kontrollansvarig krävs i många lov- och anmälningspliktiga projekt. Byggnadsnämnden bedömer behovet utifrån åtgärden och anger det i ärendet."
    },
    {
      question: "Vad kostar en kontrollansvarig?",
      answer: `För ${PRICING.year} kostar KA Bas för tillbyggnad ${formatSek(PRICING.ka.extension.bas)}, ombyggnation ${formatSek(PRICING.ka.renovation.bas)} och nyproduktion av fritidshus ${formatSek(PRICING.ka.newVacationHome.bas)} inklusive moms.`
    },
    {
      question: "Hur lång tid tar kontrollprocessen?",
      answer: "Tidsåtgången beror på projektets omfattning, byggtid, kontrollplan och underlag. Upplägg, kontaktvägar och tidplan bekräftas för det aktuella uppdraget."
    }
  ];

  const services = [
    {
      title: "Kontrollplan",
      description: "Biträde till byggherren med ett projektspecifikt förslag till kontrollplan",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Teknisk kontroll",
      description: "Uppföljning av kontrollplan, gällande villkor och att nödvändiga kontroller utförs",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Utlåtande inför slutbesked",
      description: "Sammanställning av dokumentation och kontrollansvarigs utlåtande till byggherren",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Rådgivning",
      description: "Avstämningar och information inom det avtalade KA-uppdraget",
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
    "name": "Kontrollansvarig enligt PBL",
    "description": `${KA_CERT.title} med ${KA_CERT.authorizationLabel.toLowerCase()} och ${COMPANY.experienceLabel.toLowerCase()} i byggbranschen.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.brandName,
      "email": COMPANY.email
    },
    "areaServed": COMPANY.areaServed,
    "serviceType": "Kontrollansvarig",
    "offers": {
      "@type": "Offer",
      "description": `Paketpriser ${PRICING.year}, inklusive moms`,
      "priceRange": PRICE_LABELS.schemaRange
    }
  };

  return (
    <>
      <AdvancedSEO
        title="Kontrollansvarig i Västernorrland - Certifierad & Erfaren | Ytterman"
        description={`${KA_CERT.title} med ${KA_CERT.authorizationLabel.toLowerCase()} och ${COMPANY.experienceLabel.toLowerCase()} i byggbranschen. Se paketpriser för ${PRICING.year} och begär offert.`}
        keywords="kontrollansvarig, kontrollansvarig Sundsvall, kontrollansvarig Härnösand, kontrollansvarig Timrå, kontrollansvarig Kramfors, kontrollansvarig Sollefteå, kontrollansvarig Västernorrland, byggkontroll, slutbesked, kontrollplan, PBL"
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

        <main id="main-content">
        <ServiceHero
          badge="Certifierad Kontrollansvarig"
          title="Kontrollansvarig i Västernorrland"
          subtitle="Trygg byggprocess med erfaren kontrollansvarig"
          description={BUSINESS_COPY.kaScope}
          features={[
            "Biträde med förslag till kontrollplan enligt PBL",
            "Dokumentation och utlåtande inför slutbesked",
            KA_CERT.authorizationLabel,
            `${PRICE_LABELS.kaBasFrom} inkl. moms för tillbyggnad Bas`,
            "Omfattning och tidsplan bekräftas i offerten"
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
            icon: Shield,
            title: "Certifierad kontrollansvarig",
            subtitle: "Kontrollansvarig enligt PBL",
            certifications: [
              "Medlem i SBR - Svenska Byggingenjörers Riksförbund",
              `${KA_CERT.issuer}, ${KA_CERT.certificateNumber}`,
              `Giltigt till ${KA_CERT.validUntil}`
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
                  <p className="text-gray-600">Vi går igenom projektets art, underlag, preliminära tidplan och möjlig omfattning innan offert lämnas.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontrollplan</h3>
                  <p className="text-gray-600">Jag biträder dig som byggherre med att upprätta ett projektspecifikt förslag till kontrollplan.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontroll & Uppföljning</h3>
                  <p className="text-gray-600">Jag följer upp kontrollplanen och dokumenterar mina byggplatsbesök. Respektive namngiven kontrollant utför sina kontroller.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Underlag inför slutbesked</h3>
                  <p className="text-gray-600">Jag sammanställer dokumentation och lämnar mitt utlåtande. Byggnadsnämnden beslutar om slutbesked.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Vad ingår inte i KA-uppdraget?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              KA tar inte över byggherrens ansvar, projektörernas tekniska ansvar eller
              entreprenörernas arbetsgivar- och utförandeansvar. Entreprenadrättslig slutbesiktning,
              byggledning och projektering ingår endast om de avtalas som separata uppdrag.
            </p>
          </div>
        </section>

        {/* Local City Pages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Kontrollansvarig i din kommun
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Följande sidor innehåller lokal information. De innebär inte garanterad tillgänglighet eller bestämda resevillkor:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.values(cityData).map((city) => (
                <Link
                  key={city.id}
                  to={`/${city.slug}/`}
                  className="flex items-center justify-between p-5 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div>
                    <span className="font-semibold text-gray-900 group-hover:text-blue-600">Kontrollansvarig {city.name}</span>
                    <span className="block text-sm text-gray-500">{city.travelTime}</span>
                  </div>
                  <MapPin className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                </Link>
              ))}
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
        </main>

        <Footer />
      </div>
    </>
  );
};

export default KontrollansvarigPage;
