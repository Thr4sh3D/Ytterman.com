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

interface OverlatelsebesiktningCityPageProps {
  cityData: OverlatelsebesiktningCityData;
}

const OverlatelsebesiktningCityPage = ({ cityData: city }: OverlatelsebesiktningCityPageProps) => {
  const otherCities = getOtherOverlatelsebesiktningCities(city.id);

  const services = [
    {
      title: "Teknisk besiktning",
      description: `Grundlig okulär kontroll av byggnadens konstruktion och skick i ${city.name}`,
      icon: <Search className="h-6 w-6" />
    },
    {
      title: "Installationskontroll",
      description: "Kontroll av synliga el-, VVS- och ventilationsinstallationer",
      icon: <ClipboardCheck className="h-6 w-6" />
    },
    {
      title: "Dokumentation",
      description: "Detaljerad fotografisk dokumentation av alla iakttagelser",
      icon: <Camera className="h-6 w-6" />
    },
    {
      title: "Besiktningsrapport",
      description: "Professionell rapport med fynd och rekommendationer inom 48 timmar",
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
      "name": "Ytterman",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city.structuredData.addressLocality,
        "addressRegion": "Västernorrland",
        "addressCountry": "SE"
      },
      "telephone": "+46761118447",
      "email": "tobias@ytterman.com",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": city.structuredData.latitude,
        "longitude": city.structuredData.longitude
      }
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "serviceType": "Överlåtelsebesiktning",
    "offers": {
      "@type": "Offer",
      "description": `Överlåtelsebesiktning i ${city.name} från 12,000 SEK`,
      "priceCurrency": "SEK",
      "priceRange": "Från 12,000 SEK"
    }
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
        
        <ServiceHero
          badge="Certifierad Besiktningsman"
          title={city.heroTitle}
          subtitle={city.heroSubtitle}
          description={city.heroDescription}
          features={[
            `Lokal närvaro – ${city.travelTime}`,
            "Okulär besiktning av alla synliga byggnadsdelar",
            "Detaljerad fotografisk dokumentation",
            "Professionell rapport inom 48 timmar",
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
            subtitle: `Överlåtelsebesiktning i ${city.name}`,
            certifications: [
              "Över 20 års erfarenhet i byggbranschen",
              "Detaljerade rapporter inom 48 timmar",
              `Verksam i ${city.name} och hela Västernorrland`
            ]
          }}
        />

        <div className="bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-50">
          {/* Local content section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Överlåtelsebesiktning i {city.name} – Lokal Expertis
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {city.localContent.intro}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {city.localContent.whyLocal}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Fastighetstyper i {city.name}</h3>
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
                    <p className="text-gray-600">Boka din besiktning online eller ring oss. Vi hittar en tid som passar dig i {city.name}.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Besiktning på plats</h3>
                    <p className="text-gray-600">Jag genomför en grundlig okulär besiktning av fastigheten (2–4 timmar beroende på storlek).</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapport inom 48 timmar</h3>
                    <p className="text-gray-600">Du får en detaljerad rapport med fotografisk dokumentation och prioriterade åtgärdsförslag.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Uppföljning</h3>
                    <p className="text-gray-600">Jag finns tillgänglig för frågor om rapporten och kan rekommendera vidare utredning vid behov.</p>
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
                Vi erbjuder överlåtelsebesiktning i hela Västernorrland. Läs mer om vår lokala närvaro:
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
                Kontakta mig idag för att boka din besiktning i {city.name}. Detaljerad rapport inom 48 timmar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {BOOKING_OVL_URL && (
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <a href={BOOKING_OVL_URL}>Boka online</a>
                  </Button>
                )}
                <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-amber-600" asChild>
                  <a href="mailto:tobias@ytterman.com">
                    <Mail className="mr-2 h-4 w-4" />
                    tobias@ytterman.com
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
                  Rapport inom 48 timmar
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

export default OverlatelsebesiktningCityPage;
