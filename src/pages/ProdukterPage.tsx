import { ArrowRight, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ProductAction } from '@/components/ProductAction';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BAS, BUSINESS_COPY, COMPANY, KA_CERT, SERVICES } from '@/config/company';

const planner = SERVICES.buildingStartPlanner;

const ProdukterPage = () => {
  const breadcrumbs = [
    { name: 'Hem', url: COMPANY.siteUrl },
    { name: 'Digitala verktyg', url: `${COMPANY.siteUrl}/produkter/` },
  ];

  return (
    <>
      <AdvancedSEO
        title="Digitala verktyg – intresseanmälan | Ytterman"
        description="Ytterman utvecklar praktiska digitala planeringsverktyg för byggprojekt. Se innehållet och anmäl intresse innan försäljning öppnas."
        keywords="digitala verktyg byggprojekt, byggstart planerare, intresseanmälan, Ytterman"
        url={`${COMPANY.siteUrl}/produkter/`}
        type="website"
        breadcrumbs={breadcrumbs}
      />
      <CanonicalUrl path="/produkter/" />

      <div className="min-h-screen bg-slate-50">
        <Header />
        <section className="border-b bg-white py-4">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: 'Digitala verktyg', href: '/produkter/' }]} />
          </div>
        </section>

        <main>
          <section className="border-b bg-white py-16">
            <div className="container mx-auto max-w-4xl px-4 text-center">
              <span className="mb-5 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">
                Under utveckling
              </span>
              <h1 className="mb-5 text-4xl font-bold text-slate-900 md:text-5xl">
                Digitala verktyg för bättre byggplanering
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-slate-600">
                Här visar vi verktyg som är under utveckling. Försäljning öppnas först när
                betalning, villkor och automatisk leverans är verifierade.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto max-w-4xl px-4">
              <Card className="overflow-hidden border-slate-200">
                <CardHeader className="bg-white">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <ClipboardList className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{planner.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-6 text-slate-600">{planner.shortDescription}</p>
                  <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                    {planner.features.map((feature) => (
                      <li key={feature} className="text-sm text-slate-700">• {feature}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="earth-gradient text-white hover:opacity-90">
                      <Link to={planner.path}>
                        Läs om verktyget
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <ProductAction productKey="buildingStartPlanner" />
                  </div>
                </CardContent>
              </Card>

              <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
                <h2 className="mb-2 text-xl font-semibold">Tydligt före köp</h2>
                <p>{BUSINESS_COPY.digitalInterest}</p>
              </div>

              <p className="mt-10 text-center text-slate-600">
                Verktygen utvecklas av {COMPANY.publicName}, {KA_CERT.title.toLowerCase()} och
                utbildad för uppdrag som {BAS.rolesLabel}, med {COMPANY.experienceLabel.toLowerCase()}.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProdukterPage;
