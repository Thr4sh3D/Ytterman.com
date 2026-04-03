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
import { CheckCircle, Mail, MapPin, Clock, Award, Shield, FileText, Mountain, Camera, Package } from "lucide-react";
import { Link } from "react-router-dom";

const KontrollansvarigFjallPage = () => {
  const fjallFAQ = [
    {
      question: "Kan du vara KA för mitt fjällhus i Åre eller Vemdalen?",
      answer: "Ja. Jag tar uppdrag i hela fjällkedjan inom ca 3–5,5 timmars bilresa från Viksjö/Härnösand: Åre, Duved, Storlien, Vemdalen, Funäsdalen, Tänndalen, Lofsdalen, Hemavan/Tärnaby, Kittelfjäll och Saxnäs med omnejd."
    },
    {
      question: "Hur fungerar platsbesöken när byggplatsen är långt borta?",
      answer: "Vi planerar platsbesök i förväg och paketerar dem till kritiska skeden (grundläggning, stomme, tätt hus). Mellan besöken sker uppföljning digitalt via foto, video och åtgärdslistor. Det håller nere kostnader och resor."
    },
    {
      question: "Vad menas med BAS-P/BAS-U och behöver jag det?",
      answer: "BAS-P och BAS-U är byggarbetsmiljösamordnare för projektering respektive utförande. Det krävs när flera entreprenörer jobbar på samma arbetsplats. Jag kan kombinera rollen som KA med BAS-P/BAS-U i ett och samma uppdrag, vilket är vanligt vid fjällhusprojekt med flera underentreprenörer."
    },
    {
      question: "Hur ser prisbilden ut för ett fjälluppdrag?",
      answer: "Fjälluppdrag prissätts som ett grundpaket för KA-uppdraget plus ett fast resepåslag per planerat platsbesök. Exakt pris beror på projektets storlek och antal besök. Skicka dina handlingar så får du ett tydligt prisförslag inom 24 timmar."
    },
    {
      question: "Vilka utmaningar är specifika för fjällbyggen?",
      answer: "Höga snölaster, korta byggfönster, logistik med material och hantverkare, sämre mobilnät och lokala entreprenörer som ofta arbetar på distans. En van fjäll-KA planerar för dessa faktorer redan i kontrollplanen."
    }
  ];

  const services = [
    {
      title: "Kontrollplan & tekniskt samråd",
      description: "Upprättar kontrollplan och håller tekniskt samråd anpassat för fjällhus och fritidshus – med hänsyn till snölast, klimat och lokala förutsättningar.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Platsbesök i kritiska skeden",
      description: "Paketerade besök vid grund, stomme och tätt hus. Vi planerar resorna i förväg för att hålla kostnader nere.",
      icon: <Mountain className="h-6 w-6" />
    },
    {
      title: "Digital uppföljning",
      description: "Foto, video och åtgärdslistor mellan platsbesöken. Du vet alltid vad som händer utan att vi behöver vara på plats varje vecka.",
      icon: <Camera className="h-6 w-6" />
    },
    {
      title: "KA + BAS-P/BAS-U",
      description: "Möjlighet att kombinera kontrollansvarig med byggarbetsmiljösamordnare i ett paketerat uppdrag – smidigare och kostnadseffektivare.",
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
    "description": "Certifierad kontrollansvarig och BAS-P/BAS-U för fjällhus och fritidshus i Åre, Härjedalen och Västerbottensfjällen. Digital uppföljning kombinerat med paketerade platsbesök.",
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
      "Åre", "Duved", "Vålådalen", "Bydalen", "Storlien",
      "Vemdalen", "Funäsdalen", "Tänndalen", "Lofsdalen",
      "Hemavan", "Tärnaby", "Kittelfjäll", "Saxnäs"
    ],
    "serviceType": "Kontrollansvarig"
  };

  return (
    <>
      <AdvancedSEO
        title="Kontrollansvarig i fjällvärlden – Åre, Härjedalen & Västerbottensfjällen | Ytterman"
        description="Certifierad kontrollansvarig (KA) och BAS-P/BAS-U för fjällhus och fritidshus. Täcker Åre, Vemdalen, Funäsdalen, Hemavan och hela fjällkedjan. Digital uppföljning + paketerade platsbesök."
        keywords="kontrollansvarig fjäll, kontrollansvarig Åre, kontrollansvarig Vemdalen, kontrollansvarig Funäsdalen, kontrollansvarig Hemavan, kontrollansvarig fritidshus, KA fjällhus, byggkontroll fjäll, BAS-P fjäll, Härjedalen, Västerbottensfjällen"
        url="https://ytterman.com/kontrollansvarig-i-fjallen"
        type="website"
        breadcrumbs={breadcrumbs}
        faq={fjallFAQ}
      />

      <CanonicalUrl path="/kontrollansvarig-i-fjallen" />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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

        <ServiceHero
          badge="Kontrollansvarig i fjällvärlden"
          title="Kontrollansvarig i fjällvärlden – Åre, Härjedalen & Västerbottensfjällen"
          subtitle="Certifierad KA och BAS-P/BAS-U med bas i Västernorrland"
          description="Jag är certifierad kontrollansvarig (KA) och BAS-P/BAS-U med bas i Viksjö/Härnösand. Jag tar uppdrag längs hela fjällkedjan inom cirka 3–5,5 timmars bilresa och är van vid fjällhus, fritidshus och mindre flerbostadshus i fjällmiljö."
          features={[
            "Kontrollplan och tekniskt samråd för fjällhus och fritidshus",
            "Paketerade platsbesök i grund, stomme och tätt hus",
            "Digital uppföljning med foto, video och åtgärdslistor",
            "Möjlighet att kombinera KA med BAS-P/BAS-U",
            "Svar på offertförfrågan inom 24 timmar"
          ]}
          ctaPrimary={{
            text: "Skicka skiss/handlingar",
            href: "/kontakt"
          }}
          ctaSecondary={{
            text: "Ring direkt",
            href: "tel:+46761118447",
            phone: true
          }}
          bannerContent={{
            icon: Mountain,
            title: "Fjäll-KA",
            subtitle: "Åre · Härjedalen · Västerbottensfjällen",
            certifications: [
              "Certifierad KA enligt PBL",
              "Certifierad BAS-P och BAS-U",
              "Digital + platsbaserad uppföljning"
            ]
          }}
        />

        <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">

          {/* Areas Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Områden jag täcker
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Jag verkar längs hela fjällkedjan inom <strong>cirka 3–5,5 timmars bilresa från Viksjö/Härnösand</strong>. Det innebär att jag kan vara på plats snabbt när det behövs, och planera resor kostnadseffektivt.
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
                Varför välja en fjäll-KA?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Att bygga i fjällen skiljer sig från ett vanligt villprojekt. Höga snölaster ställer krav på stommen redan på ritbordet. Kort byggfönster – ofta maj till oktober – gör att tidsplanen inte får halka. Lokala hantverkare är ofta rörliga och jobbar på flera ställen; logistiken kräver planering. En kontrollansvarig med erfarenhet av fjällprojekt vet hur man anpassar kontrollplanen, paketerar platsbesöken effektivt och håller koll digitalt när det inte går att vara på plats.
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
                Fjälluppdrag skiljer sig lite från ett lokalt KA-uppdrag, framför allt på grund av restid. Jag prissätter dem transparent och förutsägbart:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Grundpaket KA</h3>
                    <p className="text-gray-600">Fast pris för hela KA-uppdraget för en fjällvilla eller fritidshus – kontrollplan, tekniskt samråd, besök i kritiska skeden och slutbevis. Priset anpassas efter projektets storlek.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast resepåslag per resa</h3>
                    <p className="text-gray-600">Varje planerat platsbesök faktureras med ett fast resepåslag som täcker mil och restid. Du vet i förväg vad varje besök kostar – inga överraskningar.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Samordnade besök håller ner kostnaden</h3>
                    <p className="text-gray-600">Jag planerar alltid resor för att kunna samordna flera ärenden under samma resa. Det gör att kostnaden per besök hålls nere, utan att kontrollen försämras.</p>
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
                Skicka dina skisser eller bygglovshandlingar via mail – jag återkommer med prisförslag och upplägg inom 24 timmar.
              </p>
              <p className="text-base mb-8 opacity-80">
                Ju tidigare du kontaktar mig, desto lättare är det att samordna platsbesöken med ditt byggfönster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                  <Link to="/kontakt/">Skicka förfrågan</Link>
                </Button>
                <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600" asChild>
                  <a href="mailto:tobias@ytterman.com">
                    <Mail className="mr-2 h-4 w-4" />
                    tobias@ytterman.com
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Svar inom 24 timmar
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  3–5,5 h från Viksjö/Härnösand
                </div>
                <div className="flex items-center">
                  <Award className="mr-2 h-4 w-4" />
                  Certifierad KA &amp; BAS-P/BAS-U
                </div>
              </div>
            </div>
          </section>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default KontrollansvarigFjallPage;
