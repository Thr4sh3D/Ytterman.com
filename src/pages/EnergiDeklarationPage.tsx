import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Mail, MapPin, Clock, Award, Shield, FileText, Zap, Home, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS_COPY, COMPANY, SERVICES } from '@/config/company';

const EnergiDeklarationPage = () => {
  const energiDeklarationFAQ = [
    {
      question: "Vad är en energideklaration?",
      answer: "En energideklaration visar byggnadens energiprestanda och ger information om energiförbrukning, energiklass och förslag på energibesparande åtgärder."
    },
    {
      question: "När behövs en energideklaration?",
      answer: "Kravet beror bland annat på byggnadstyp och hur byggnaden används eller överlåts. Ytterman samordnar kontakten med en behörig partner som bedömer förutsättningarna för den aktuella byggnaden."
    },
    {
      question: "Hur lång tid tar det att få en energideklaration?",
      answer: "Tidsplanen beror på byggnadens storlek, tillgängligt underlag och partnerns kapacitet. Leveranstid bekräftas innan uppdraget startar."
    },
    {
      question: "Vad kostar en energideklaration?",
      answer: "Kostnaden beror på byggnadens storlek, typ och tillgängligt underlag. Ytterman tar in uppgifterna och återkommer med upplägg och offert för partnerleveransen."
    }
  ];

  const services = [
    {
      title: "Energibesiktning",
      description: "Den certifierade energiexperten avgör vilket platsbesök och underlag som behövs",
      icon: <Home className="h-6 w-6" />
    },
    {
      title: "Energiberäkning",
      description: "Beräkning av byggnadens energiprestanda och energiklass",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      title: "Åtgärdsförslag",
      description: "Eventuella åtgärdsförslag tas fram av partnerns certifierade energiexpert",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Certifierad utförare",
      description: "Deklarationen utförs av certifierad energiexpert hos behörig partner",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Energideklaration', url: 'https://ytterman.com/energideklaration' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Energideklaration",
    "description": BUSINESS_COPY.energyPartner,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.brandName,
      "url": COMPANY.siteUrl,
      "email": COMPANY.email
    },
    "areaServed": COMPANY.areaServed,
    "serviceType": "Energideklaration",
    "serviceOutput": "Energideklaration utförd av certifierad energiexpert hos behörig partner"
  };

  return (
    <>
      <AdvancedSEO
        title="Energideklaration i Västernorrland | Ytterman"
        description={BUSINESS_COPY.energyPartner}
        keywords="energideklaration, energideklaration Sundsvall, energideklaration Härnösand, energideklaration Västernorrland, energiklass, energibesiktning"
        url="https://ytterman.com/energideklaration"
        type="website"
        breadcrumbs={breadcrumbs}
        faq={energiDeklarationFAQ}
      />
      
      <CanonicalUrl path="/energideklaration" />
      
      <div className="min-h-screen">
        <Header />
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: 'Energideklaration', href: '/energideklaration' }]} />
          </div>
        </section>

        <main id="main-content">
        <ServiceHero
          badge="Via certifierad energiexpert"
          title="Energideklaration i Västernorrland"
          subtitle="Ytterman samordnar – certifierad energiexpert utför"
          description={BUSINESS_COPY.energyPartner}
          features={[...SERVICES.energyDeclaration.features]}
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
            icon: Zap,
            title: "Behörig partnerleverans",
            subtitle: "Tydlig ansvarsfördelning",
            certifications: [
              "Certifierad energiexpert utför deklarationen",
              "Ytterman är kundens kontakt och samordnare",
              "Partnerns giltiga behörighet kontrolleras inför uppdraget"
            ]
          }}
        />

        <div className="bg-gradient-to-br from-slate-50 via-yellow-50/30 to-slate-50">
        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Det här ingår i partnerleveransen
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Förfrågan till Ytterman</h3>
                  <p className="text-gray-600">Ytterman samlar in grunduppgifter och stämmer av vilket underlag som finns.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Energibesiktning</h3>
                  <p className="text-gray-600">En certifierad energiexpert hos behörig partner genomför nödvändigt platsbesök.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Beräkning & Analys</h3>
                  <p className="text-gray-600">Partnerns energiexpert beräknar energiprestanda och identifierar förbättringsområden.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Energideklaration</h3>
                  <p className="text-gray-600">Den certifierade energiexperten upprättar deklarationen och Ytterman samordnar leveransen till kunden.</p>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Beslutsunderlag</h3>
                <p className="text-gray-600">Deklarationen visar energiprestanda och kan innehålla åtgärder som är värda att utreda vidare.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tydlig energiinformation</h3>
                <p className="text-gray-600">Energiprestanda och energiklass ger ägare, köpare och förvaltare ett jämförbart underlag.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 bg-amber-100 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kravbedömning</h3>
                <p className="text-gray-600">Partnerns certifierade energiexpert bedömer om och hur kraven gäller för den aktuella byggnaden.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                När är det rätt läge att beställa energideklaration?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Många fastighetsägare beställer energideklaration först när ett datum för försäljning
                eller uthyrning redan är satt. Då blir tidsmarginalerna onödigt små. Genom att boka i
                god tid får du bättre underlag, mer tid att samla handlingar och möjlighet att förstå
                vilka åtgärder som faktiskt kan förbättra fastighetens energiprestanda.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Inför försäljning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Se till att energiklass, energianvändning och eventuella förbättringsförslag är
                    klara innan bostaden eller lokalen går ut på marknaden.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Vid uthyrning eller ägarbyte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Få hjälp att uppfylla kraven med rätt dokumentation och en tydlig process från
                    platsbesök till färdig deklaration.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Som beslutsunderlag</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Använd energideklarationen för att prioritera investeringar i klimatskal,
                    ventilation, uppvärmning och driftkostnader på ett mer träffsäkert sätt.
                  </p>
                </CardContent>
              </Card>
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
              Kontakta Ytterman för samordning, underlagskontroll och offert för leverans via behörig partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link to="/kontakt/">Skicka förfrågan</Link>
              </Button>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-yellow-600" asChild>
                <a href={`mailto:${COMPANY.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  {COMPANY.email}
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Samordning i {COMPANY.region}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                Leveranstid bekräftas före start
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

export default EnergiDeklarationPage;
