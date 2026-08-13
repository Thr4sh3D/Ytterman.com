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
import { CheckCircle, Mail, MapPin, Clock, Home, Search, Camera, ClipboardCheck, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BOOKING_OVL_URL } from "@/config/booking";
import { type OverlatelsebesiktningCityData, getOtherOverlatelsebesiktningCities } from '@/content/overlatelsebesiktningCityData';
import { COMPANY, SERVICES } from '@/config/company';

interface OverlatelsebesiktningCityPageProps {
  cityData: OverlatelsebesiktningCityData;
}

const OverlatelsebesiktningCityPage = ({ cityData: city }: OverlatelsebesiktningCityPageProps) => {
  const otherCities = getOtherOverlatelsebesiktningCities(city.id);

  const services = [
    {
      title: "Okulär besiktning",
      description: `Visuell undersökning av avtalade, synliga och åtkomliga delar i fastigheten i ${city.name}`,
      icon: <Search className="h-6 w-6" />
    },
    {
      title: "Iakttagelser och risker",
      description: "Synliga tecken kan noteras, men besiktningen ersätter inte fackmässig installationskontroll eller funktionsprovning",
      icon: <ClipboardCheck className="h-6 w-6" />
    },
    {
      title: "Dokumentation",
      description: "Fotografisk dokumentation i den omfattning som anges i uppdragsbekräftelsen",
      icon: <Camera className="h-6 w-6" />
    },
    {
      title: "Besiktningsrapport",
      description: "Rapport med innehåll och leveranstid enligt uppdragsbekräftelsen",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Överlåtelsebesiktning', url: 'https://ytterman.com/overlatelsebesiktning' },
    { name: city.name, url: `https://ytterman.com/${city.slug}` }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Överlåtelsebesiktning i ${city.name}`,
    "description": city.seo.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.brandName,
      "email": COMPANY.email
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": COMPANY.region
    },
    "serviceType": SERVICES.inspection.name
  };

  return (
    <>
      <AdvancedSEO
        title={city.seo.title}
        description={city.seo.description}
        keywords={city.seo.keywords}
        url={`https://ytterman.com/${city.slug}`}
        type="website"
        breadcrumbs={breadcrumbs}
        faq={city.faq}
      />
      
      <CanonicalUrl path={`/${city.slug}`} />
      
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
              { label: 'Överlåtelsebesiktning', href: '/overlatelsebesiktning' },
              { label: city.name, href: `/${city.slug}` }
            ]} />
          </div>
        </section>

        <main id="main-content">
        <ServiceHero
          badge="Överlåtelsebesiktning"
          title={city.heroTitle}
          subtitle={city.heroSubtitle}
          description={city.heroDescription}
          features={[
            `Förfrågningar från ${city.name} – ${city.travelTime}`,
            "Okulär besiktning av avtalade, synliga och åtkomliga delar",
            "Fotografisk dokumentation enligt uppdragsbekräftelsen",
            "Rapportens innehåll och leveranstid bekräftas vid bokning",
            "Rekommendation om fortsatt teknisk utredning vid behov"
          ]}
          ctaPrimary={BOOKING_OVL_URL ? {
            text: "Skicka förfrågan",
            href: BOOKING_OVL_URL
          } : undefined}
          ctaSecondary={{
            text: "Mejla direkt",
            href: COMPANY.emailHref,
            external: true
          }}
          bannerContent={{
            icon: Home,
            title: "Överlåtelsebesiktning",
            subtitle: `Överlåtelsebesiktning i ${city.name}`,
            certifications: [
              "Över 20 års erfarenhet i byggbranschen",
              "Tydligt avtalad omfattning och leveranstid",
              `Förfrågningar från ${city.name} och ${COMPANY.region}`
            ]
          }}
        />

        <div className="bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-50">
          {/* Local content section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Överlåtelsebesiktning i {city.name} – lokal information
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {city.localContent.intro}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {city.localContent.whyLocal}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vanliga fastighetstyper</h3>
                  <ul className="space-y-2">
                    {city.localContent.propertyTypes.map((type, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Områden i {city.municipality}</h3>
                  <div className="flex flex-wrap gap-2">
                    {city.localContent.neighborhoods.map((area, index) => (
                      <span key={index} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Vad ingår i besiktningen i {city.name}
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

          {/* Process Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Så fungerar besiktningen i {city.name}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Bokning</h3>
                    <p className="text-gray-600">Skicka en bokningsförfrågan. Tillgänglighet, underlag och villkor bekräftas för fastigheten i {city.name}.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Besiktning på plats</h3>
                    <p className="text-gray-600">Jag genomför den okulära besiktning som beskrivs i uppdragsbekräftelsen. Omfattning och tidsåtgång beror på fastigheten.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Besiktningsrapport</h3>
                    <p className="text-gray-600">Rapportens innehåll, dokumentation och leveranstid framgår av uppdragsbekräftelsen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Uppföljning</h3>
                    <p className="text-gray-600">Eventuell genomgång av rapporten och rekommendation om fortsatt teknisk utredning följer det avtalade upplägget.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Vanliga frågor om överlåtelsebesiktning i {city.name}
              </h2>
              <FAQ items={city.faq} />
            </div>
          </section>

          {/* Cross-linking to other cities */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Överlåtelsebesiktning i övriga kommuner
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Se informationssidor för fler orter. Tillgänglighet och resor bekräftas alltid vid bokning:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherCities.map((otherCity) => (
                  <Link
                    key={otherCity.id}
                    to={`/${otherCity.slug}`}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all group"
                  >
                    <div>
                      <span className="font-semibold text-gray-900 group-hover:text-amber-600">
                        {otherCity.name}
                      </span>
                      <span className="block text-sm text-gray-500">{otherCity.travelTime}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-amber-600" />
                  </Link>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link to="/overlatelsebesiktning/" className="text-amber-600 hover:text-amber-800 font-medium underline">
                  Läs mer om överlåtelsebesiktning →
                </Link>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 earth-gradient text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Behöver du överlåtelsebesiktning i {city.name}?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Kontakta mig för att boka en besiktning i {city.name}. Omfattning, pris och leveranstid bekräftas vid bokning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {BOOKING_OVL_URL && (
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <a href={BOOKING_OVL_URL}>Skicka förfrågan</a>
                  </Button>
                )}
                <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-amber-600" asChild>
                  <a href={`mailto:${COMPANY.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {COMPANY.email}
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-80">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  {city.travelTime}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Leveranstid bekräftas vid bokning
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

export default OverlatelsebesiktningCityPage;
