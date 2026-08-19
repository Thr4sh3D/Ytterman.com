import { ArrowRight, CheckCircle, FileText, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { type CityData, getOtherCities } from '@/content/kontrollansvarigCityData';
import { COMPANY, KA_CERT, PRICING, SERVICES, formatSek } from '@/config/company';

interface KontrollansvarigCityPageProps {
  cityData: CityData;
}

const serviceLinks = [
  SERVICES.kontrollansvarig,
  SERVICES.basP,
  SERVICES.basU,
  SERVICES.buildingPermitDocuments,
  SERVICES.energyDeclaration,
] as const;

const guideLinks = [
  { title: 'Vad gör en kontrollansvarig?', href: '/guider/kontrollansvarig/' },
  { title: 'När krävs kontrollansvarig?', href: '/guider/nar-kravs-kontrollansvarig/' },
  { title: 'Behörighet N och K', href: '/guider/kontrollansvarig-certifiering/' },
  { title: 'KA inför slutbesked', href: '/guider/slutbesked/' },
  { title: 'Skillnaden mellan BAS-P och BAS-U', href: '/guider/vad-ar-bas/' },
  { title: 'Vad påverkar KA-priset?', href: '/guider/kontrollansvarig-timpris/' },
] as const;

const KontrollansvarigCityPage = ({ cityData: city }: KontrollansvarigCityPageProps) => {
  const otherCities = getOtherCities(city.id);
  const contactPath = `/kontakt/?service=ka&municipality=${encodeURIComponent(city.name)}&utm_source=ytterman&utm_medium=internal&utm_campaign=ka-${city.id}`;
  const breadcrumbs = [
    { name: 'Hem', url: COMPANY.siteUrl },
    { name: 'Kontrollansvarig', url: `${COMPANY.siteUrl}/kontrollansvarig/` },
    { name: city.name, url: `${COMPANY.siteUrl}/${city.slug}/` },
  ];

  return (
    <>
      <AdvancedSEO
        title={city.seo.title}
        description={city.seo.description}
        keywords={city.seo.keywords}
        url={`${COMPANY.siteUrl}/${city.slug}/`}
        breadcrumbs={breadcrumbs}
        faq={city.faq}
      />
      <CanonicalUrl path={`/${city.slug}/`} />

      <div className="min-h-screen bg-slate-50">
        <Header />
        <main id="main-content">
          <section className="border-b bg-white py-4">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={[
                { label: 'Kontrollansvarig', href: '/kontrollansvarig/' },
                { label: city.name, href: `/${city.slug}/` },
              ]} />
            </div>
          </section>

          <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-primary py-16 text-white sm:py-20">
            <div className="container mx-auto max-w-5xl px-4">
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-blue-200">
                <MapPin className="h-4 w-4" /> Betjänar {city.name} – inget lokalkontor påstås
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{city.heroTitle}</h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-blue-100">{city.heroDescription}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-blue-50">
                  <Link to={contactPath}>Begär offert <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-slate-900">
                  <Link to="/priser/">Se paketpriser</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="bg-white py-16">
            <div className="container mx-auto max-w-5xl px-4">
              <p className="text-xl leading-relaxed text-slate-700">{city.intro}</p>
              <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6 text-sm leading-relaxed text-blue-950">
                Ytterman har verksamhetsområde i {COMPANY.region} och tar emot förfrågningar från {city.municipality}.
                Sidan innebär inte att Ytterman har kontor eller besöksadress i {city.name}. Tillgänglighet,
                resor och eventuella resekostnader bekräftas för varje projekt.
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto max-w-6xl px-4">
              <h2 className="text-3xl font-bold text-slate-900">Tjänster som kan efterfrågas i {city.name}</h2>
              <p className="mt-3 max-w-3xl text-slate-600">
                Varje uppdrag bedöms mot projektets omfattning, behörighet och aktuell kapacitet. Energideklaration samordnas av Ytterman och utförs av certifierad energiexpert hos behörig partner.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {serviceLinks.map((service) => (
                  <Link key={service.id} to={service.path} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-primary/40">
                    <h3 className="font-bold text-slate-900 group-hover:text-primary">{service.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.shortDescription}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">Läs om tjänsten <ArrowRight className="ml-1 h-4 w-4" /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y bg-white py-16">
            <div className="container mx-auto grid max-w-5xl gap-10 px-4 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">{city.focusTitle}</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{city.focusIntro}</p>
              </div>
              <ul className="space-y-3">
                {city.focusPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-lg bg-slate-50 p-4 text-slate-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto max-w-5xl px-4">
              <h2 className="text-center text-3xl font-bold text-slate-900">Process för KA-förfrågan i {city.name}</h2>
              <ol className="mx-auto mt-10 grid gap-5 sm:grid-cols-2">
                {city.process.map((step, index) => (
                  <li key={step.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-white">{index + 1}</span>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="bg-slate-900 py-14 text-white">
            <div className="container mx-auto grid max-w-5xl gap-8 px-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-amber-300">Pris och offert</p>
                <h2 className="mt-2 text-3xl font-bold">KA Bas från {formatSek(PRICING.ka.extension.bas)} inkl. moms</h2>
                <p className="mt-3 max-w-3xl text-slate-300">
                  Exakt pris beror på projekttyp och vald nivå. En normal kompletteringsvända ingår.
                  Slutlig offert lämnas efter bedömning av omfattning, underlag, platsbesök och resor.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100"><Link to="/priser/">Jämför Bas och Plus</Link></Button>
                <Button asChild size="lg" className="earth-gradient text-white hover:opacity-90"><Link to={contactPath}>Begär offert</Link></Button>
              </div>
            </div>
          </section>

          <section className="bg-white py-16">
            <div className="container mx-auto max-w-4xl px-4">
              <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">Vanliga frågor om KA i {city.name}</h2>
              <FAQ items={city.faq} />
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900"><FileText className="h-6 w-6 text-primary" /> Faktabaserade guider</h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {guideLinks.map((guide) => <Link key={guide.href} to={guide.href} className="rounded-lg border bg-white p-4 font-medium text-slate-800 hover:border-primary/40 hover:text-primary">{guide.title}</Link>)}
                  </div>
                </div>
                <div>
                  <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900"><ShieldCheck className="h-6 w-6 text-primary" /> Kontrollansvarig på fler orter</h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {otherCities.map((otherCity) => <Link key={otherCity.id} to={`/${otherCity.slug}/`} className="rounded-lg border bg-white p-4 font-medium text-slate-800 hover:border-primary/40 hover:text-primary">Kontrollansvarig i {otherCity.name}</Link>)}
                    <Link to="/guider/vasternorrland/" className="rounded-lg border bg-blue-50 p-4 font-medium text-blue-900 hover:border-primary/40">Kontrollansvarig i Västernorrland</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default KontrollansvarigCityPage;
