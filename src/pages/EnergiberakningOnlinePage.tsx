import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, FileQuestion, Mail } from 'lucide-react';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BUSINESS_COPY, SERVICES } from '@/config/company';

const service = SERVICES.energyCalculation;

const EnergiberakningOnlinePage = () => {
  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: service.name, url: `https://ytterman.com${service.path}` },
  ];

  return (
    <>
      <AdvancedSEO
        title="Energiberäkning online – intresseanmälan | Ytterman"
        description="Skicka en intresseanmälan för digital energiberäkning. Underlag, pris och leverans bekräftas innan en beställning görs."
        keywords="energiberäkning online, energiberäkning bygglov, energiberäkning intresseanmälan, Västernorrland"
        url={`https://ytterman.com${service.path}`}
        type="website"
        breadcrumbs={breadcrumbs}
      />
      <CanonicalUrl path={service.path} />

      <div className="min-h-screen bg-slate-50">
        <Header />
        <section className="border-b bg-white py-4">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: service.name, href: service.path }]} />
          </div>
        </section>

        <main>
          <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-16 text-white">
            <div className="container mx-auto max-w-4xl px-4 text-center">
              <span className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                Intresseanmälan
              </span>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">{service.name}</h1>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
                {service.shortDescription}
              </p>
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link to="/kontakt/?service=energiberakning-online">
                  <Mail className="mr-2 h-5 w-5" />
                  Anmäl intresse
                </Link>
              </Button>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto max-w-5xl px-4">
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <Calculator className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle>Så hanteras din förfrågan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-slate-700">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <FileQuestion className="mb-2 h-9 w-9 text-amber-700" />
                    <CardTitle>Ha gärna detta underlag redo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-slate-700">
                    <p>
                      Ritningar samt uppgifter om isolering, fönster, uppvärmning och
                      ventilation gör det lättare att bedöma omfattningen.
                    </p>
                    <p>
                      Vi bekräftar vilket underlag som krävs, priset och hur leveransen sker
                      innan du tar ställning till en beställning.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
                <h2 className="mb-2 text-xl font-semibold">Tydligt läge före beställning</h2>
                <p>{BUSINESS_COPY.digitalInterest}</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EnergiberakningOnlinePage;
