import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY } from '@/config/company';
import { cityData } from '@/content/kontrollansvarigCityData';

const OmradenPage = () => {
  const breadcrumbs = [
    { name: 'Hem', url: COMPANY.siteUrl },
    { name: 'Områden', url: `${COMPANY.siteUrl}/omraden/` },
  ];

  return (
    <>
      <AdvancedSEO
        title={`Byggtjänster i ${COMPANY.region} – områden | Ytterman`}
        description={`Ytterman tar emot förfrågningar om kontrollansvarig, BAS-P/BAS-U och andra byggtjänster i ${COMPANY.region}. Tillgänglighet och resor bekräftas per projekt.`}
        keywords="kontrollansvarig Västernorrland, BAS-P Västernorrland, BAS-U Västernorrland, byggtjänster"
        url={`${COMPANY.siteUrl}/omraden/`}
        type="website"
        breadcrumbs={breadcrumbs}
      />
      <CanonicalUrl path="/omraden/" />

      <div className="min-h-screen bg-slate-50">
        <Header />
        <section className="border-b bg-white py-4">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: 'Områden', href: '/omraden/' }]} />
          </div>
        </section>

        <main>
          <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-16 text-white">
            <div className="container mx-auto max-w-4xl px-4 text-center">
              <MapPin className="mx-auto mb-5 h-12 w-12 text-blue-200" />
              <h1 className="mb-5 text-4xl font-bold md:text-5xl">Uppdrag i {COMPANY.region}</h1>
              <p className="mx-auto max-w-2xl text-xl text-blue-100">
                Skicka projektets ort och omfattning. Tillgänglighet, nödvändiga platsbesök,
                resor och eventuella resekostnader bekräftas i offerten.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto max-w-5xl px-4">
              <h2 className="mb-3 text-center text-3xl font-bold text-slate-900">Lokala informationssidor</h2>
              <p className="mx-auto mb-10 max-w-3xl text-center text-slate-600">
                Fem prioriterade KA-sidor har eget process- och offertstöd. Övriga orter betjänas
                fortfarande efter projektbedömning men får ingen tunn, duplicerad landningssida.
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {Object.values(cityData).map((city) => (
                    <Card key={city.id}>
                      <CardHeader>
                        <CardTitle>{city.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                          <Link className="flex items-center text-sm font-medium text-primary" to={`/${city.slug}/`}>
                            Kontrollansvarig <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        <Link className="flex items-center text-sm font-medium text-primary" to="/guider/vasternorrland/">
                          Regional projektguide <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6 text-blue-950">
                <h2 className="mb-2 text-xl font-semibold">Överlåtelsebesiktning samlas på en tjänstesida</h2>
                <p>
                  Tidigare ortssidor med samma innehåll har konsoliderats. Läs omfattning,
                  begränsningar och offertväg på sidan för <Link to="/overlatelsebesiktning/" className="font-semibold underline">överlåtelsebesiktning</Link>.
                </p>
              </div>

              <div className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
                <h2 className="mb-2 text-xl font-semibold">Resor bekräftas alltid i offerten</h2>
                <p>
                  Projektets läge, planerade besök och eventuella resekostnader anges innan
                  uppdraget startar. Kontakta oss även om orten inte har en egen sida.
                </p>
              </div>

              <div className="mt-10 text-center">
                <Button asChild size="lg" className="earth-gradient text-white hover:opacity-90">
                  <Link to="/kontakt/">Beskriv ditt projekt</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OmradenPage;
