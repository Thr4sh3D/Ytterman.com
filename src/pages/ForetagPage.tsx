import { ArrowRight, Building2, FolderKanban, Layers3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { OfferPathways } from '@/components/OfferPathways';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/config/company';

const audiences = [
  { icon: Building2, title: 'Byggföretag', text: 'Förfrågan om KA, BAS-P/U eller ett samordnat upplägg i ett eller flera projekt.' },
  { icon: Layers3, title: 'Arkitekter', text: 'Tidigare avstämning av roller, kontrollbehov och underlag inför kundens nästa steg.' },
  { icon: FolderKanban, title: 'Fastighetsägare', text: 'Strukturerad bedömning av återkommande ombyggnader, underhållsprojekt eller en projektportfölj.' },
  { icon: Users, title: 'Bostadsrättsföreningar', text: 'En tydlig kontaktväg för styrelse, förvaltare och projektorganisation när fastigheten ska förändras.' },
] as const;

const projectRequestPath = '/kontakt/?service=ka-bas&utm_source=ytterman&utm_medium=internal&utm_campaign=b2b-project';
const portfolioRequestPath = '/kontakt/?service=other&utm_source=ytterman&utm_medium=internal&utm_campaign=b2b-portfolio';

const ForetagPage = () => {
  const breadcrumbs = [
    { name: 'Hem', url: COMPANY.siteUrl },
    { name: 'Företag och organisationer', url: `${COMPANY.siteUrl}/foretag/` },
  ];

  return (
    <>
      <AdvancedSEO
        title="KA och BAS för företag och fastighetsägare | Ytterman"
        description="Projekt- och portföljförfrågningar för byggföretag, arkitekter, fastighetsägare och bostadsrättsföreningar som behöver KA eller BAS-P/U."
        keywords="kontrollansvarig företag, BAS-P byggföretag, BAS-U fastighetsägare, KA bostadsrättsförening, projektportfölj bygg"
        url={`${COMPANY.siteUrl}/foretag/`}
        breadcrumbs={breadcrumbs}
        organization
      />
      <CanonicalUrl path="/foretag/" />

      <div className="min-h-screen bg-slate-50">
        <Header />
        <main id="main-content">
          <section className="border-b bg-white py-4">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={[{ label: 'Företag och organisationer', href: '/foretag/' }]} />
            </div>
          </section>

          <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary py-16 text-white sm:py-20">
            <div className="container mx-auto max-w-5xl px-4">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-amber-300">Projekt och portfölj</p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                En tydlig väg in för företag och fastighetsägare
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-200">
                Samla behovet i en projekt- eller portföljförfrågan. Ytterman bedömer roller,
                omfattning och aktuell kapacitet innan ett upplägg eller en offert lämnas.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  <Link to={projectRequestPath}>Projektförfrågan <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-slate-900">
                  <Link to={portfolioRequestPath}>Portföljförfrågan</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="mb-10 max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">För fyra typer av beställare</h2>
                <p className="mt-4 text-lg text-slate-600">
                  Förfrågan kan gälla ett enskilt uppdrag, kommande projekt eller flera liknande åtgärder.
                  Varje projekt accepteras först efter separat bedömning av omfattning och kapacitet.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {audiences.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y bg-white py-16">
            <div className="container mx-auto max-w-5xl px-4">
              <div className="grid gap-8 lg:grid-cols-2">
                <article className="rounded-2xl border border-primary/20 bg-primary/5 p-7">
                  <p className="text-sm font-bold uppercase tracking-wide text-primary">Ett avgränsat projekt</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Projektförfrågan</h2>
                  <p className="mt-3 text-slate-700">Beskriv projekttyp, ort, skede, tidplan, önskade roller och vilka handlingar som finns.</p>
                  <Button asChild className="mt-6 earth-gradient text-white hover:opacity-90">
                    <Link to={projectRequestPath}>Skicka projektförfrågan <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </article>
                <article className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
                  <p className="text-sm font-bold uppercase tracking-wide text-amber-800">Flera möjliga uppdrag</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Portföljförfrågan</h2>
                  <p className="mt-3 text-slate-700">Beskriv antal projekt, geografisk spridning, ungefärliga skeden och när behovet väntas uppstå.</p>
                  <Button asChild className="mt-6 bg-slate-900 text-white hover:bg-slate-800">
                    <Link to={portfolioRequestPath}>Inled portföljdialog <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </article>
              </div>
              <p className="mt-6 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
                En förfrågan är inte ett kapacitetslöfte. Slutlig omfattning, ansvar, pris och tidplan dokumenteras i offert eller avtal för respektive uppdrag.
              </p>
            </div>
          </section>

          <OfferPathways title="Tjänster och nästa steg" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ForetagPage;
