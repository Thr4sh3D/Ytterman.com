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
import { CheckCircle, Phone, Mail, MapPin, Clock, Award, Shield, FileText, Users, HardHat, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { BAS, COMPANY, SERVICES } from '@/config/company';

const BasUPage = () => {
  const basUFAQ = [
    {
      question: "Vad är BAS-U?",
      answer: "BAS-U är byggarbetsmiljösamordnare under utförandet. Rollen samordnar arbetsmiljöarbetet och följer upp arbetsmiljöplanen när en sådan krävs."
    },
    {
      question: "När behövs en BAS-U?",
      answer: "Byggherren ska se till att en lämplig BAS-U utses för utförandet av bygg- och anläggningsarbetet. Ansvarsfördelningen bedöms för det aktuella projektet."
    },
    {
      question: "Vad ingår i BAS-U tjänsten?",
      answer: "Arbetsmiljöuppföljning, samordning, riskhantering och dokumentation planeras efter projektets riskbild och framgår av uppdragsbeskrivningen."
    },
    {
      question: "Kan samma person vara både BAS-P och BAS-U?",
      answer: "Ja, om byggherren utser personen och personen är lämplig för båda uppdragen. Roller, skeden och överlämning behöver ändå vara tydligt dokumenterade."
    }
  ];

  const services = [
    {
      title: "Säkerhetsronder",
      description: "Ronder och uppföljning enligt projektets riskbild och uppdrag",
      icon: <Eye className="h-6 w-6" />
    },
    {
      title: "Samordning",
      description: "Samordning mellan olika entreprenörer och arbetslag",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Incidenthantering",
      description: "Samordning av rutiner för avvikelser och incidenter",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Dokumentation",
      description: "Löpande dokumentation av arbetsmiljöarbetet",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'BAS-U', url: 'https://ytterman.com/bas-u' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "BAS-U tjänster - Byggarbetsmiljösamordnare under utförande",
    "description": `${SERVICES.basU.shortDescription} ${BAS.description}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.brandName,
      "url": COMPANY.siteUrl,
      "email": COMPANY.email
    },
    "areaServed": COMPANY.areaServed,
    "serviceType": "BAS-U (Byggarbetsmiljösamordnare under utförande)"
  };

  return (
    <>
      <AdvancedSEO
        title="BAS-U i Västernorrland | Ytterman"
        description={`BAS-U i Västernorrland med ${COMPANY.experienceLabel.toLowerCase()}. Utbildning, kompetens och erfarenhet för arbetsmiljösamordning enligt ${BAS.regulation}.`}
        keywords="BAS-U, byggarbetsmiljösamordnare, säkerhetsronder, BAS-U Sundsvall, BAS-U Härnösand, BAS-U Västernorrland, arbetsmiljö byggarbetsplats"
        url="https://ytterman.com/bas-u"
        type="website"
        breadcrumbs={breadcrumbs}
        faq={basUFAQ}
      />
      
      <CanonicalUrl path="/bas-u" />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: 'BAS-U', href: '/bas-u' }]} />
          </div>
        </section>
        
        <ServiceHero
          badge="BAS-U – utbildad och erfaren"
          title="BAS-U i Västernorrland"
          subtitle="Säker arbetsmiljö under byggfasen"
          description="Som BAS-U samordnar jag arbetsmiljöarbetet under utförandet och följer upp att arbetsmiljöplanen och beslutade åtgärder används i projektet."
          features={[...SERVICES.basU.features, "Kan kombineras med BAS-P och KA"]}
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
            icon: Eye,
            title: "Utbildad för BAS-U",
            subtitle: "Byggarbetsmiljösamordnare",
            certifications: [
              `Aktuellt regelverk: ${BAS.regulation}`,
              "Ronder planeras utifrån projektets riskbild",
              "Kan kombineras med BAS-P och Kontrollansvarig"
            ]
          }}
        />

        <div className="bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50">
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
                  <p className="text-gray-600">Ronder och uppföljning planeras utifrån projektets riskbild och avtalade upplägg.</p>
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
                  <p className="text-gray-600">Sammanställning och överlämning enligt den avtalade uppdragsbeskrivningen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                BAS-U som håller ihop arbetsmiljöarbetet på byggarbetsplatsen
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                BAS-U samordnar aktörernas arbetsmiljöarbete under utförandet. Upplägget behöver
                anpassas till projektets aktörer, riskbild, arbetsmiljöplan och förändringar under
                byggskedet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Strukturerad samordning i praktiken</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-600">
                  <p>
                    Ronder och uppföljning av etablering, skyddsåtgärder, ordning och samordning
                    planeras utifrån riskerna och den avtalade uppdragsbeskrivningen.
                  </p>
                  <p>
                    Jag arbetar med tydlig dialog mot både byggherre och entreprenörer så att det är
                    klart vem som ansvarar för vad och vilka frågor som måste hanteras direkt på plats.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Kontinuitet från start till avslut</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-600">
                  <p>
                    Ett tydligt BAS-U-upplägg anger hur uppföljning, dokumentation och kommunikation
                    ska fungera under utförandet.
                  </p>
                  <p>
                    Om samma person har flera uppdrag ska rollerna hållas isär och varje uppdrags
                    omfattning dokumenteras tydligt.
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
              Vanliga frågor om BAS-U
            </h2>
            <FAQ items={basUFAQ} />
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Samordning utan att ta över arbetsgivaransvaret
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                BAS-U samordnar arbetsmiljöarbetet under utförandet utifrån bland annat{' '}
                {BAS.regulation}. Rollen ersätter inte arbetsgivarnas ansvar för egen personal,
                utrustning och arbetsmetoder. Mandat, aktiviteter, uppföljning och dokumentation
                ska anpassas till projektets faktiska riskbild.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 earth-gradient text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Behöver du BAS-U för ditt projekt?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Skicka projektets underlag så återkommer jag med nästa steg och offert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link to="/kontakt/">Skicka förfrågan</Link>
              </Button>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-orange-600" asChild>
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

export default BasUPage;
