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
import { CheckCircle, Mail, MapPin, Clock, Award, Shield, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { type CityData, getOtherCities } from '@/content/kontrollansvarigCityData';
import { COMPANY, KA_CERT, PRICING } from '@/config/company';

interface KontrollansvarigCityPageProps {
  cityData: CityData;
}

const KontrollansvarigCityPage = ({ cityData: city }: KontrollansvarigCityPageProps) => {
  const otherCities = getOtherCities(city.id);

  const services = [
    {
      title: "Kontrollplan",
      description: `Förslag till kontrollplan utifrån projektets underlag i ${city.name}`,
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Uppföljning",
      description: "Följer att kontrollerna enligt den fastställda kontrollplanen dokumenteras",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Utlåtande inför slutbesked",
      description: "Sammanställning av dokumentation och kontrollansvarigs utlåtande till byggherren",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Rådgivning",
      description: `Kontakt och stöd inom det avtalade KA-uppdraget i ${city.name}`,
      icon: <Award className="h-6 w-6" />
    }
  ];

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Kontrollansvarig', url: 'https://ytterman.com/kontrollansvarig' },
    { name: city.name, url: `https://ytterman.com/${city.slug}` }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Kontrollansvarig i ${city.name}`,
    "description": city.seo.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.brandName,
      "telephone": COMPANY.phone.e164,
      "email": COMPANY.email
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": COMPANY.region
    },
    "serviceType": "Kontrollansvarig",
    "offers": {
      "@type": "AggregateOffer",
      "description": `Paketpriser ${PRICING.year}, inklusive moms`,
      "priceCurrency": "SEK",
      "lowPrice": PRICING.ka.extension.bas,
      "highPrice": PRICING.ka.newVacationHome.plus,
      "offerCount": 6
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
              { label: 'Kontrollansvarig', href: '/kontrollansvarig' },
              { label: city.name, href: `/${city.slug}` }
            ]} />
          </div>
        </section>
        
        <ServiceHero
          badge="Certifierad Kontrollansvarig"
          title={city.heroTitle}
          subtitle={city.heroSubtitle}
          description={city.heroDescription}
          features={[
            `Förfrågningar från ${city.name} – ${city.travelTime}`,
            "Förslag till kontrollplan och uppföljning enligt PBL",
            "Dokumentation och utlåtande inför slutbesked",
            KA_CERT.authorizationLabel,
            "Omfattning och tidsplan bekräftas i offerten"
          ]}
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
            icon: Shield,
            title: "Certifierad KA",
            subtitle: `Kontrollansvarig i ${city.name}`,
            certifications: [
              "Medlem i SBR - Svenska Byggingenjörers Riksförbund",
              `${KA_CERT.issuer}, ${KA_CERT.certificateNumber}`,
              `Förfrågningar från ${city.name} och ${COMPANY.region}`
            ]
          }}
        />

        <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
          {/* Local content section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kontrollansvarig i {city.name} – lokal information
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {city.localContent.intro}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {city.localContent.whyLocal}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Projekttyper i {city.name}</h3>
                  <ul className="space-y-2">
                    {city.localContent.projectTypes.map((type, index) => (
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
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Kontrollansvarig Tjänster i {city.name}
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
                Så fungerar processen i {city.name}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontakt & Offert</h3>
                    <p className="text-gray-600">Vi går igenom ditt projekt i {city.name} och lämnar offert på ett definierat upplägg.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontrollplan</h3>
                    <p className="text-gray-600">Jag hjälper dig som byggherre att ta fram ett förslag till kontrollplan utifrån projektets underlag. Byggnadsnämnden fastställer kontrollplanen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontroll & Uppföljning</h3>
                    <p className="text-gray-600">Jag följer kontrollerna och gör de platsbesök som ingår i det avtalade uppdraget och beslutad kontrollplan.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Underlag inför slutbesked</h3>
                    <p className="text-gray-600">Jag sammanställer dokumentation och lämnar mitt utlåtande. Byggnadsnämnden beslutar om slutbesked.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Vanliga frågor om kontrollansvarig i {city.name}
              </h2>
              <FAQ items={city.faq} />
            </div>
          </section>

          {/* Cross-linking to other cities */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Kontrollansvarig i övriga kommuner
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Se informationssidor för fler orter. Tillgänglighet och resor bekräftas alltid per projekt:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {otherCities.map((otherCity) => (
                  <Link
                    key={otherCity.id}
                    to={`/${otherCity.slug}`}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <div>
                      <span className="font-semibold text-gray-900 group-hover:text-blue-600">
                        {otherCity.name}
                      </span>
                      <span className="block text-sm text-gray-500">{otherCity.travelTime}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                  </Link>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link to="/kontrollansvarig/" className="text-blue-600 hover:text-blue-800 font-medium underline">
                  Läs mer om våra kontrollansvarig tjänster →
                </Link>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 earth-gradient text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Behöver du en kontrollansvarig i {city.name}?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Skicka projektunderlaget så återkommer jag med nästa steg och offert för ett möjligt uppdrag i {city.name}.
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
                  {city.travelTime}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Tidplan bekräftas i offerten
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

export default KontrollansvarigCityPage;
