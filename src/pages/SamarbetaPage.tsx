import { ArrowRight, BadgeCheck, ClipboardCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/config/company';

const collaborationTracks = [
  {
    icon: ShieldCheck,
    title: 'Certifierad kontrollansvarig N eller K',
    text: 'För dig som har en giltig KA-certifiering och vill anmäla intresse för möjliga framtida uppdrag eller kapacitetsdialoger.',
    href: '/kontakt/?service=other&utm_source=ytterman&utm_medium=internal&utm_campaign=samarbete-ka',
    cta: 'Anmäl intresse som KA',
  },
  {
    icon: BadgeCheck,
    title: 'Certifierad energiexpert',
    text: 'För dig som har giltig behörighet som energiexpert och vill anmäla intresse för möjliga projektspecifika samarbeten.',
    href: '/kontakt/?service=other&utm_source=ytterman&utm_medium=internal&utm_campaign=samarbete-energi',
    cta: 'Anmäl intresse som energiexpert',
  },
] as const;

const SamarbetaPage = () => {
  const breadcrumbs = [
    { name: 'Hem', url: COMPANY.siteUrl },
    { name: 'Samarbeta', url: `${COMPANY.siteUrl}/samarbeta/` },
  ];

  return (
    <>
      <AdvancedSEO
        title="Intresseanmälan för KA och energiexperter | Ytterman"
        description="Certifierade kontrollansvariga N/K och certifierade energiexperter kan anmäla intresse för möjliga framtida samarbeten med Ytterman."
        keywords="samarbete kontrollansvarig, certifierad KA N K, certifierad energiexpert, byggkonsult samarbete"
        url={`${COMPANY.siteUrl}/samarbeta/`}
        breadcrumbs={breadcrumbs}
      />
      <CanonicalUrl path="/samarbeta/" />

      <div className="min-h-screen bg-slate-50">
        <Header />
        <main id="main-content">
          <section className="border-b bg-white py-4">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={[{ label: 'Samarbeta', href: '/samarbeta/' }]} />
            </div>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <div className="container mx-auto max-w-4xl px-4 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">Intresseanmälan</p>
              <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Vill du vara aktuell för framtida samarbeten?</h1>
              <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">
                Ytterman tar emot intresseanmälningar från certifierade kontrollansvariga och
                certifierade energiexperter. Varje möjlig matchning bedöms separat när ett konkret behov uppstår.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto max-w-5xl px-4">
              <div className="grid gap-6 lg:grid-cols-2">
                {collaborationTracks.map(({ icon: Icon, title, text, href, cta }) => (
                  <article key={title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                    <Icon className="h-10 w-10 text-primary" aria-hidden="true" />
                    <h2 className="mt-5 text-2xl font-bold text-slate-900">{title}</h2>
                    <p className="mt-3 flex-grow leading-relaxed text-slate-600">{text}</p>
                    <Button asChild className="mt-7 earth-gradient text-white hover:opacity-90">
                      <Link to={href}>{cta}<ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </article>
                ))}
              </div>

              <article className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-7">
                <div className="flex items-start gap-4">
                  <ClipboardCheck className="mt-1 h-7 w-7 shrink-0 text-blue-700" aria-hidden="true" />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Ha detta redo</h2>
                    <ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">
                      <li>• Namn, företag och kontaktuppgifter</li>
                      <li>• Certifieringsorgan och certifikatsnummer</li>
                      <li>• Behörighetsnivå och giltighetstid</li>
                      <li>• Geografiskt område och typ av uppdrag</li>
                    </ul>
                  </div>
                </div>
              </article>

              <p className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">
                Detta är en intresseanmälan, inte ett erbjudande om uppdrag eller medlemskap i ett etablerat nätverk.
                Certifiering, kompetens, försäkring, kapacitet och villkor verifieras innan ett eventuellt samarbete kan avtalas.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SamarbetaPage;
