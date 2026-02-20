import { SEO } from "@/components/SEO";
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Mail, MapPin, Clock, Award, Shield, FileText, Search, Camera, ClipboardCheck, CalendarCheck, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { BOOKING_OVL_URL } from "@/config/booking";

const OverlatelsebesiktningPage = () => {
  const overlatelsebesiktningFAQ = [
    {
      question: "Vad är en överlåtelsebesiktning?",
      answer: "En överlåtelsebesiktning är en okulär (visuell) undersökning av en fastighet som genomförs inför försäljning. Besiktningsmannen bedömer fastighetens synliga skick och identifierar eventuella fel och brister som kan observeras utan ingrepp i byggnaden."
    },
    {
      question: "Vad ingår i besiktningen?",
      answer: "Besiktningen omfattar visuell kontroll av konstruktion, fasad, tak, grund, väggar, golv, fönster, dörrar samt synliga delar av el-, VVS- och ventilationsinstallationer. Fotografisk dokumentation görs och du får en detaljerad rapport med prioriterade åtgärdsförslag inom 48 timmar."
    },
    {
      question: "Vad ingår inte i besiktningen?",
      answer: "Besiktningen inkluderar inte håltagningar, rivningar, demonteringar, provtagningar eller funktionsprovning av installationer. Ej åtkomliga utrymmen (t.ex. låsta rum, isolerade vindar, snötäckta tak) kan inte besiktigas. Vid indikation på problem rekommenderas fortsatt utredning av fackman."
    },
    {
      question: "Hur lång tid tar en överlåtelsebesiktning?",
      answer: "Besiktningstiden varierar beroende på fastighetens storlek, men vanligtvis tar det 2-4 timmar på plats. Rapporten levereras digitalt inom 48 timmar efter besiktningen."
    },
    {
      question: "Hur förbereder jag fastigheten?",
      answer: "Se till att vind, krypgrund, källare, elcentral och inspektionsluckor är åtkomliga. Rensa bort snö från tak, flytta möbler från väggar i fuktkänsliga områden, och se till att nycklar till alla utrymmen finns tillgängliga. Se vår fullständiga checklista ovan."
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
    "description": "Professionella överlåtelsebesiktningar i Västernorrland. Över 20 års erfarenhet i byggbranschen.",
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
        title="Överlåtelsebesiktning Västernorrland - Boka Online | Ytterman"
        description="Behöver du överlåtelsebesiktning? 20+ års erfarenhet i byggbranschen. Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors. Boka online eller kontakta oss."
        keywords="överlåtelsebesiktning, besiktning, fastighetbesiktning, överlåtelsebesiktning Sundsvall, överlåtelsebesiktning Härnösand, Västernorrland"
        url="https://ytterman.com/overlatelsebesiktning"
        type="webpage"
      />
      
      <CanonicalUrl path="/overlatelsebesiktning" />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-50">
        <ServiceHero
          badge="Certifierad Besiktningsman"
          title="Överlåtelsebesiktning i Västernorrland"
          subtitle="Säkerställ en trygg fastighetsaffär"
          description="Med över 20 års erfarenhet i byggbranschen genomför jag professionella överlåtelsebesiktningar. Du får en detaljerad rapport om fastighetens skick inom 48 timmar, vilket ger dig som köpare eller säljare trygghet i affären."
          features={[
            "Okulär besiktning av alla synliga byggnadsdelar",
            "Detaljerad fotografisk dokumentation",
            "Professionell rapport inom 48 timmar",
            "Kontroll av konstruktion, fasad, tak och installationer",
            "Prioriterade åtgärdsförslag och rekommendationer"
          ]}
          ctaPrimary={BOOKING_OVL_URL ? {
            text: "Boka online",
            href: BOOKING_OVL_URL
          } : undefined}
          ctaSecondary={{
            text: "076-111 84 47",
            href: "tel:+46761118447",
            phone: true
          }}
          bannerContent={{
            icon: Home,
            title: "Certifierad Besiktningsman",
            subtitle: "20+ års erfarenhet i byggbranschen",
            certifications: [
              "Över 20 års erfarenhet i byggbranschen",
              "Detaljerade rapporter inom 48 timmar",
              "Täcker Sundsvall, Härnösand, Sollefteå m.fl."
            ]
          }}
        />

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
                    <div className="mx-auto mb-4 p-3 bg-amber-100 rounded-full w-fit">
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

        {/* Scope and Limitations Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Omfattning och avgränsningar
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-amber-200">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Överlåtelsebesiktningen genomförs som en <strong>okulär (visuell) besiktning</strong>, vilket innebär att jag bedömer byggnadens skick utifrån det som är synligt och åtkomligt vid besiktningstillfället. Inga ingrepp görs i byggnaden – det inkluderar håltagningar, rivningar, demonteringar, provtagningar eller mätningar som kräver installation av utrustning.
                </p>
                <p className="mb-4">
                  Byggnadsdelar och utrymmen som inte är åtkomliga kan inte bedömas. Det kan gälla låsta utrymmen, täckta ytor, kraftigt möblerade områden, isolerade vindar, igensatta luckor, snötäckta tak eller ej öppningsbara inspektionsluckor. El-, VVS- och ventilationsinstallationer, skorstenar, tätskikt i våtrum och dräneringssystem bedöms endast i den mån synliga tecken kan observeras – besiktningen ersätter inte fackmässig kontroll av installationer eller funktionsprovning.
                </p>
                <p className="mb-0">
                  Vid indikation på risk, fel eller brister rekommenderas fortsatt teknisk utredning av relevant fackman, exempelvis fuktmätning, kamerainspektion av avlopp, el-kontroll eller VVS-genomgång. Besiktningen ger en professionell bedömning av fastighetens synliga skick och identifierar områden som kan kräva vidare åtgärd eller utredning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Preparation Checklist Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Förbered fastigheten inför besiktningen
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              För att besiktningen ska kunna genomföras effektivt och ge bästa möjliga resultat, vänligen se till att följande är uppfyllt:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Åtkomst */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="w-5 h-5 text-amber-600" />
                    Åtkomst till utrymmen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Vind, krypgrund och källare ska vara åtkomliga och säkra att besiktiga</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Inspektionsluckor och gluggar ska vara framtagna och kunna öppnas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Elcentral, värmepanna och teknikutrymmen ska vara lättillgängliga</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Nycklar till låsta utrymmen (förråd, garage, uthus) ska finnas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Synbarhet */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Search className="w-5 h-5 text-amber-600" />
                    Synbarhet och framkomlighet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Ytor vid våtrum och kök ska vara fria från föremål där det är rimligt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Tak och fasad ska vara åtkomliga – snö och is bör vara bortrensade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Möbler bör flyttas från väggar i fuktriskkänsliga utrymmen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Elström ska vara påkopplad för kontroll av belysning och uttag</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Praktiskt */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ClipboardCheck className="w-5 h-5 text-amber-600" />
                    Praktiska förberedelser
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Husdjur ska vara omhändertagna eller inhägnade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Larmsystem ska vara avaktiverat eller kod tillhandahållen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Kontaktperson ska vara närvarande eller nåbar</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Begränsningar */}
              <Card className="border-amber-200 bg-amber-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="w-5 h-5 text-amber-600" />
                    Viktigt att veta
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold mt-0.5">⚠</span>
                      <span>Utrymmen som inte går att öppna, nå eller som är kraftigt möblerade kan inte besiktigas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold mt-0.5">⚠</span>
                      <span>Snötäckta tak, övertäckta markytor eller låsta utrymmen innebär begränsningar</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Check Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Installationer (synliga delar)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Elinstallationer</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />VVS-system</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Ventilation</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3 italic">Endast visuell kontroll, inte funktionsprovning</p>
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
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Bokning</h3>
                  <p className="text-gray-600">Boka online eller kontakta oss för att boka en tid som passar dig.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Besiktning</h3>
                  <p className="text-gray-600">Grundlig genomgång av fastigheten med dokumentation av alla iakttagelser.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapport</h3>
                  <p className="text-gray-600">Detaljerad besiktningsrapport med bilder och rekommendationer levereras inom 48 timmar.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 earth-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Redo att boka överlåtelsebesiktning?
            </h2>
            <p className="text-xl mb-4 opacity-90">
              Boka direkt online eller kontakta oss för mer information.
            </p>
            <p className="text-sm mb-8 opacity-75">
              Okulär besiktning av synliga och åtkomliga byggnadsdelar. Inga ingrepp eller provtagningar görs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {BOOKING_OVL_URL && (
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                  <a 
                    href={BOOKING_OVL_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <CalendarCheck className="mr-2 h-4 w-4" />
                    Boka online
                  </a>
                </Button>
              )}
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-600" asChild>
                <a href="mailto:tobias@ytterman.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Kontakta oss
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-600" asChild>
                <Link to="/kontakt">
                  Kontaktformulär
                </Link>
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

        <Footer />
      </div>
    </>
  );
};

export default OverlatelsebesiktningPage;