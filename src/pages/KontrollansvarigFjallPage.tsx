import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Clock, Award, FileText, Mountain, Camera, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { BAS, BUSINESS_COPY, COMPANY, KA_CERT } from '@/config/company';

const KontrollansvarigFjallPage = () => {
  const fjallFAQ = [
    {
      question: "Kan du vara KA för mitt fjällhus i Åre eller Vemdalen?",
      answer: "Jag bedömer fjälluppdrag individuellt utifrån projektets läge, kontrollbehov och möjligheten att planera nödvändiga platsbesök. Skicka ort och underlag för besked om tillgänglighet."
    },
    {
      question: "Hur fungerar platsbesöken när byggplatsen är långt borta?",
      answer: "Behov, skeden och möjligheten till digital uppföljning bedöms från projektets kontrollplan och övriga underlag. Antal besök, resor, kostnader och tidplan bekräftas i offerten."
    },
    {
      question: "Vad menas med BAS-P/BAS-U och behöver jag det?",
      answer: "BAS-P och BAS-U är byggarbetsmiljösamordnare för projektering respektive utförande. Byggherrens ansvar, lämpliga personer och rollernas omfattning bedöms för projektet. KA och BAS kan kombineras när kompetens, tid, mandat och offert stödjer upplägget."
    },
    {
      question: "Hur ser prisbilden ut för ett fjälluppdrag?",
      answer: "Fjälluppdrag prissätts utifrån KA-uppdragets omfattning, projektets läge och planerade platsbesök. Grundpris, resor och eventuella resekostnader specificeras i offerten."
    },
    {
      question: "Vilka utmaningar är specifika för fjällbyggen?",
      answer: "Klimat, laster, mark, logistik och åtkomlighet behöver bedömas av projektets sakkunniga utifrån den faktiska platsen. KA följer den fastställda kontrollplanen men ersätter inte projektörernas tekniska ansvar."
    }
  ];

  const services = [
    {
      title: "Kontrollplan & tekniskt samråd",
      description: "Hjälper byggherren ta fram förslag till kontrollplan och medverkar vid tekniskt samråd för fjällhus och fritidshus.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Platsbesök i kritiska skeden",
      description: "Behov, skeden, resor och kostnader för platsbesök anges i offerten och anpassas till projektets kontrollplan.",
      icon: <Mountain className="h-6 w-6" />
    },
    {
      title: "Digital uppföljning",
      description: "Foto, video och åtgärdslistor kan användas som stöd när projektets förutsättningar och kontrollbehov medger det.",
      icon: <Camera className="h-6 w-6" />
    },
    {
      title: "KA + BAS-P/BAS-U",
      description: "KA och BAS-P/BAS-U kan kombineras när roller, mandat, kapacitet och omfattning framgår tydligt av offerten.",
      icon: <Package className="h-6 w-6" />
    }
  ];

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Kontrollansvarig', url: 'https://ytterman.com/kontrollansvarig' },
    { name: 'Kontrollansvarig i fjällvärlden', url: 'https://ytterman.com/kontrollansvarig-i-fjallen' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kontrollansvarig i fjällvärlden",
    "description": `${KA_CERT.title} och utbildad för uppdrag som ${BAS.rolesLabel} för fjällhus och fritidshus. Resor och platsbesök specificeras i offerten.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.brandName,
      "email": COMPANY.email
    },
    "areaServed": COMPANY.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name
    })),
    "serviceType": "Kontrollansvarig"
  };

  return (
    <>
      <AdvancedSEO
        title="Kontrollansvarig i fjällen | Ytterman"
        description={`${KA_CERT.title} och utbildad för ${BAS.rolesLabel} för fjällhus och fritidshus. Tillgänglighet, resor och platsbesök bekräftas i offerten.`}
        keywords="kontrollansvarig fjäll, kontrollansvarig Åre, kontrollansvarig Vemdalen, kontrollansvarig Funäsdalen, kontrollansvarig Hemavan, kontrollansvarig fritidshus, KA fjällhus, byggkontroll fjäll, BAS-P fjäll, Härjedalen, Västerbottensfjällen"
        url="https://ytterman.com/kontrollansvarig-i-fjallen"
        type="website"
        breadcrumbs={breadcrumbs}
        faq={fjallFAQ}
      />

      <CanonicalUrl path="/kontrollansvarig-i-fjallen" />

      <div className="min-h-screen">
        <Header />
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[
              { label: 'Kontrollansvarig', href: '/kontrollansvarig' },
              { label: 'Kontrollansvarig i fjällvärlden', href: '/kontrollansvarig-i-fjallen' }
            ]} />
          </div>
        </section>

        <main id="main-content">
        <ServiceHero
          badge="Förfrågan för fjällprojekt"
          title="Kontrollansvarig för fjällhus och fritidshus"
          subtitle="Certifierad KA och utbildad för BAS-P/BAS-U"
          description="Jag bedömer fjälluppdrag individuellt utifrån projektets läge, kontrollbehov och planerade platsbesök. Resor och eventuella resekostnader specificeras före uppdraget."
          features={[
            "Kontrollplan och tekniskt samråd för fjällhus och fritidshus",
            "Platsbesök och resor enligt offert och kontrollplan",
            "Digital uppföljning där projektets kontrollbehov medger det",
            "Möjlighet att kombinera KA med BAS-P/BAS-U",
            "Tillgänglighet och upplägg bekräftas i offerten"
          ]}
          ctaPrimary={{
            text: "Skicka skiss/handlingar",
            href: "/kontakt"
          }}
          ctaSecondary={{
            text: "Mejla direkt",
            href: COMPANY.emailHref,
            external: true
          }}
          bannerContent={{
            icon: Mountain,
            title: "Fjällprojekt",
            subtitle: "Tillgänglighet bedöms per förfrågan",
            certifications: [
              KA_CERT.authorizationLabel,
              `Utbildad för ${BAS.rolesLabel}`,
              "Digital + platsbaserad uppföljning"
            ]
          }}
        />

        <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">

          {/* Areas Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Exempel på fjällorter för förfrågan
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tillgängligheten bedöms per uppdrag. Projektets läge, kontrollplan, nödvändiga
                platsbesök och resor gås igenom innan offert lämnas.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-gray-900">Jämtland</h3>
                  </div>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>Åre</li>
                    <li>Duved</li>
                    <li>Vålådalen</li>
                    <li>Bydalen</li>
                    <li>Storlien</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-gray-900">Härjedalen</h3>
                  </div>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>Vemdalen</li>
                    <li>Funäsdalen</li>
                    <li>Tänndalen</li>
                    <li>Lofsdalen</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-gray-900">Västerbottensfjällen</h3>
                  </div>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>Hemavan / Tärnaby</li>
                    <li>Kittelfjäll</li>
                    <li>Saxnäs med omnejd</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Fjäll-KA Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kontrollplanering för fjällprojekt
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Klimat, laster, mark, logistik och åtkomlighet behöver bedömas av projektets
                sakkunniga utifrån den faktiska platsen. KA hjälper byggherren att anpassa förslaget
                till kontrollplan och planera sin uppföljning, men ersätter inte projektörernas
                tekniska ansvar.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-3 p-3 bg-blue-100 rounded-full w-fit">
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Logic Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Upplägg och prislogik
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fjälluppdrag bedöms individuellt. Uppdragets omfattning, platsbesök, resor,
                eventuella resekostnader och tidplan ska framgå av offerten:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Grundpaket KA</h3>
                    <p className="text-gray-600">Grundpriset omfattar de KA-moment som uttryckligen anges i offerten, exempelvis kontrollplan, medverkan vid tekniskt samråd, planerade besök och utlåtande inför slutbesked.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Resor och platsbesök</h3>
                    <p className="text-gray-600">Antal besök, berörda skeden, resor och eventuella resekostnader specificeras före uppdraget.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Bekräftat upplägg</h3>
                    <p className="text-gray-600">Uppdraget bekräftas först när kontrollbehov, tillgänglighet och praktiskt upplägg har gåtts igenom.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Vanliga frågor om KA i fjällen
              </h2>
              <FAQ items={fjallFAQ} />
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 earth-gradient text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Planerar du ett fjällhus?
              </h2>
              <p className="text-xl mb-4 opacity-90">
                Skicka dina skisser eller bygglovshandlingar via mejl så återkommer jag med nästa steg utifrån projektet och aktuell kapacitet.
              </p>
              <p className="text-base mb-8 opacity-80">
                Ju tidigare du kontaktar mig, desto lättare är det att samordna platsbesöken med ditt byggfönster.
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
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Tillgänglighet bekräftas
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  Resor specificeras i offerten
                </div>
                <div className="flex items-center">
                  <Award className="mr-2 h-4 w-4" />
                  Certifierad KA · utbildad för BAS-P/BAS-U
                </div>
              </div>
            </div>
          </section>

        </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default KontrollansvarigFjallPage;
