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
import { CheckCircle, Phone, Mail, MapPin, Clock, Award, Shield, FileText, Users, HardHat } from "lucide-react";
import { Link } from "react-router-dom";
import { BAS, COMPANY, SERVICES } from '@/config/company';

const BasPPage = () => {
  const basPFAQ = [
    {
      question: "Vad är BAS-P?",
      answer: "BAS-P är byggarbetsmiljösamordnare under planering och projektering. Rollen samordnar arbetsmiljöfrågorna och medverkar till arbetsmiljöplan när en sådan krävs."
    },
    {
      question: "När behövs en BAS-P?",
      answer: "Byggherren ska se till att en lämplig BAS-P utses för planering och projektering av bygg- och anläggningsarbetet. Ansvarsfördelningen bedöms för det aktuella projektet."
    },
    {
      question: "Vad ingår i BAS-P tjänsten?",
      answer: "Samordning av arbetsmiljöfrågor, uppföljning av projektörernas riskarbete och arbetsmiljöplan när reglerna kräver det. Exakt omfattning framgår av uppdragsbeskrivningen."
    },
    {
      question: "Skillnaden mellan BAS-P och BAS-U?",
      answer: "BAS-P arbetar under planering och projektering, medan BAS-U arbetar under utförandet. Byggherren utser rollerna för respektive skede; samma lämpliga person kan ha båda uppdragen."
    }
  ];

  const services = [
    {
      title: "Arbetsmiljöplan",
      description: "Samordning av arbetsmiljöplanen när reglerna kräver en sådan",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Riskbedömning",
      description: "Samordning och uppföljning av projektörernas riskarbete",
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

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'BAS-P', url: 'https://ytterman.com/bas-p' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "BAS-P tjänster - Byggarbetsmiljösamordnare under projektering",
    "description": `${SERVICES.basP.shortDescription} ${BAS.description}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.brandName,
      "url": COMPANY.siteUrl,
      "telephone": COMPANY.phone.e164,
      "email": COMPANY.email
    },
    "areaServed": COMPANY.areaServed,
    "serviceType": "BAS-P (Byggarbetsmiljösamordnare under projektering)"
  };

  return (
    <>
      <AdvancedSEO
        title="BAS-P i Västernorrland | Ytterman"
        description={`BAS-P i Västernorrland med ${COMPANY.experienceLabel.toLowerCase()}. Utbildning, kompetens och erfarenhet för arbetsmiljösamordning enligt ${BAS.regulation}.`}
        keywords="BAS-P, byggarbetsmiljösamordnare, arbetsmiljöplan, BAS-P Sundsvall, BAS-P Härnösand, BAS-P Västernorrland, arbetsmiljö byggprojekt"
        url="https://ytterman.com/bas-p"
        type="website"
        breadcrumbs={breadcrumbs}
        faq={basPFAQ}
      />
      
      <CanonicalUrl path="/bas-p" />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: 'BAS-P', href: '/bas-p' }]} />
          </div>
        </section>
        
        <ServiceHero
          badge="BAS-P – utbildad och erfaren"
          title="BAS-P i Västernorrland"
          subtitle="Säker arbetsmiljö under projektering"
          description="Som BAS-P hjälper jag byggherren att samordna arbetsmiljöfrågorna under projekteringen och förebygga risker inför byggskedet."
          features={[...SERVICES.basP.features, "Kan kombineras med BAS-U och KA"]}
          ctaPrimary={{
            text: "Begär offert",
            href: "/kontakt"
          }}
          ctaSecondary={{
            text: "Ring direkt",
            href: COMPANY.phone.href,
            phone: true
          }}
          bannerContent={{
            icon: HardHat,
            title: "Utbildad för BAS-P",
            subtitle: "Byggarbetsmiljösamordnare",
            certifications: [
              `Aktuellt regelverk: ${BAS.regulation}`,
              COMPANY.experienceLabel,
              "Kan kombineras med BAS-U och Kontrollansvarig"
            ]
          }}
        />

        <div className="bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-50">
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
                  <p className="text-gray-600">Genomgång av projektets upplägg, aktörer och arbetsmiljörisker i projekteringen.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Arbetsmiljöplan</h3>
                  <p className="text-gray-600">Samordning av arbetsmiljöplan och åtgärder när reglerna kräver en plan.</p>
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
                  <p className="text-gray-600">Dokumenterad överlämning av kvarstående risker, åtgärder och aktuell arbetsmiljöplan till BAS-U.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Därför gör en tydlig BAS-P-insats skillnad tidigt i projektet
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                En väl genomförd BAS-P-process minskar risken för sena omtag när produktionen ska
                starta. När arbetsmiljörisker identifieras redan under projekteringen blir det lättare
                att fatta rätt beslut om ansvar, metodval, logistik och skyddsåtgärder innan de blir
                dyra att ändra.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Stöd för byggherren</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-600">
                  <p>
                    Som byggherre behöver du kunna visa att arbetsmiljöfrågorna hanteras strukturerat.
                    Jag hjälper till att samla risker, krav och ansvar i ett upplägg som fungerar i
                    praktiken för projektörer, entreprenörer och övriga aktörer.
                  </p>
                  <p>
                    När en arbetsmiljöplan krävs ska den tillsammans med kvarstående risker och valda
                    åtgärder kunna användas när projektet lämnas över till BAS-U.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Bättre flyt mellan projektering och byggstart</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-600">
                  <p>
                    När risker för fall, transporter, samordning och tillträde behandlas i
                    projekteringen får utförandet ett tydligare underlag för planering och åtgärder.
                  </p>
                  <p>
                    För många projekt är det också en fördel att samordna BAS-P med andra roller som
                    kontrollansvarig eller BAS-U för att få en mer sammanhållen process.
                  </p>
                </CardContent>
              </Card>
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

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-green-100 bg-green-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Tydlig överlämning till utförandet
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                BAS-P samordnar arbetsmiljöfrågorna under planering och projektering utifrån bland
                annat {BAS.regulation}. Inför utförandet behöver kvarstående risker, valda åtgärder
                och aktuell arbetsmiljöplan lämnas över till BAS-U. Projektörer, arbetsgivare och
                byggherre behåller sina respektive ansvar.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 earth-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Behöver du BAS-P för ditt projekt?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Skicka projektets underlag så återkommer jag med nästa steg och offert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link to="/kontakt/">Skicka förfrågan</Link>
              </Button>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-green-600" asChild>
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

        <Footer />
      </div>
    </>
  );
};

export default BasPPage;
