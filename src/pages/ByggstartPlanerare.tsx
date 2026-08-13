import { Link } from 'react-router-dom';
import {
  BarChart3,
  CalendarDays,
  CheckCircle,
  CheckSquare,
  ClipboardList,
  DollarSign,
  FileText,
  Mail,
  Users,
} from 'lucide-react';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BAS, BUSINESS_COPY, KA_CERT, SERVICES } from '@/config/company';

const service = SERVICES.buildingStartPlanner;

const PRODUCT_SECTIONS = [
  { icon: ClipboardList, title: 'Projektinfo', description: 'Projekt, byggherre, omfattning och tidsramar.' },
  { icon: FileText, title: 'Lov och handlingar', description: 'Tillstånd, startbesked och dokumentlista.' },
  { icon: Users, title: 'Aktörer', description: 'Kontaktregister, roller och ansvar.' },
  { icon: DollarSign, title: 'Budget', description: 'Kostnadsposter, budget och utfall.' },
  { icon: CalendarDays, title: 'Tidsplan', description: 'Milstolpar, datum och status.' },
  { icon: CheckSquare, title: 'Kontrollpunkter', description: 'Praktisk checklista inför byggstart.' },
  { icon: BarChart3, title: 'Översikt', description: 'Samlad status för projektets planering.' },
];

const productFaq = [
  {
    question: 'Vad är Byggstart-planeraren?',
    answer: 'Ett digitalt planeringshjälpmedel för att samla projektuppgifter, handlingar, aktörer, budget, tidsplan och kontrollpunkter.',
  },
  {
    question: 'Kan jag beställa den nu?',
    answer: 'För närvarande tar vi emot intresseanmälningar. Pris, villkor, betalning och leverans bekräftas innan någon beställning görs.',
  },
  {
    question: 'Ersätter verktyget professionella roller?',
    answer: `Nej. Verktyget ersätter inte ${KA_CERT.title.toLowerCase()}, uppdrag som ${BAS.rolesLabel}, energiberäkning eller annan projektspecifik rådgivning.`,
  },
];

const ByggstartPlanerare = () => {
  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Digitala verktyg', url: 'https://ytterman.com/produkter/' },
    { name: service.name, url: `https://ytterman.com${service.path}` },
  ];

  return (
    <>
      <AdvancedSEO
        title="Byggstart-planerare – intresseanmälan | Ytterman"
        description="Anmäl intresse för ett digitalt planeringsverktyg för byggstart. Pris, villkor och leverans bekräftas före beställning."
        keywords="byggstart planerare, byggprojekt verktyg, digitalt planeringsstöd, bygglov, Ytterman"
        url={`https://ytterman.com${service.path}`}
        type="website"
        breadcrumbs={breadcrumbs}
        faq={productFaq}
      />
      <CanonicalUrl path={service.path} />

      <div className="min-h-screen bg-slate-50">
        <Header />
        <section className="border-b bg-white py-4">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { label: 'Digitala verktyg', href: '/produkter/' },
                { label: service.name, href: service.path },
              ]}
            />
          </div>
        </section>

        <main>
          <section className="bg-white py-16">
            <div className="container mx-auto max-w-4xl px-4 text-center">
              <span className="mb-5 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">
                Intresseanmälan
              </span>
              <h1 className="mb-5 text-4xl font-bold text-slate-900 md:text-5xl">{service.name}</h1>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-600">
                {service.shortDescription} Verktyget är tänkt att ge struktur inför
                byggstart, utan att ersätta projektspecifik expertbedömning.
              </p>
              <Button asChild size="lg" className="earth-gradient text-white hover:opacity-90">
                <Link to="/kontakt/?produkt=byggstart-planerare">
                  <Mail className="mr-2 h-5 w-5" />
                  Anmäl intresse
                </Link>
              </Button>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto max-w-5xl px-4">
              <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Planerat innehåll</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PRODUCT_SECTIONS.map(({ icon: Icon, title, description }) => (
                  <Card key={title}>
                    <CardContent className="flex gap-3 p-5">
                      <Icon className="h-6 w-6 shrink-0 text-primary" />
                      <div>
                        <h3 className="font-semibold text-slate-900">{title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
                <h2 className="mb-2 text-xl font-semibold">Ingen försäljning är öppnad ännu</h2>
                <p>{BUSINESS_COPY.digitalInterest}</p>
              </div>
            </div>
          </section>

          <section className="border-t bg-white py-16">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Vanliga frågor</h2>
              <div className="space-y-4">
                {productFaq.map((item) => (
                  <Card key={item.question}>
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-slate-900">{item.question}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="mt-8 flex gap-2 rounded-lg bg-blue-50 p-4 text-sm text-blue-900">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                Din intresseanmälan är inte en beställning och innebär ingen betalningsskyldighet.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ByggstartPlanerare;
