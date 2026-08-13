import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { ContactForm } from '@/components/ContactForm';
import { PricingPackages } from '@/components/PricingPackages';
import { PricingFAQ } from '@/components/PricingFAQ';
import { COMPANY, PRICE_LABELS, PRICING } from '@/config/company';
import { CheckCircle, FileCheck2, Info, Mail } from 'lucide-react';

const PriserPage = () => {
  const breadcrumbs = [
    { name: 'Hem', url: COMPANY.siteUrl },
    { name: 'Priser', url: `${COMPANY.siteUrl}/priser` },
  ];

  return (
    <>
      <AdvancedSEO
        title={`Priser kontrollansvarig ${PRICING.year} | Ytterman`}
        description={`Paketpriser ${PRICING.year} för kontrollansvarig: ${PRICE_LABELS.kaBasFrom.toLowerCase()} inklusive moms. Se KA Bas, KA Plus och paket med BAS-P/U.`}
        keywords="kontrollansvarig pris, kontrollansvarig kostnad, KA Bas, KA Plus, KA BAS paket, Västernorrland"
        url={`${COMPANY.siteUrl}/priser`}
        breadcrumbs={breadcrumbs}
        organization
      />

      <CanonicalUrl path="/priser" />

      <div className="min-h-screen">
        <Header />

        <main id="main-content">
          <section className="border-b bg-white py-4" aria-label="Brödsmulor">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={[{ label: 'Priser', href: '/priser' }]} />
            </div>
          </section>

          <section className="relative bg-gradient-to-br from-primary/10 via-white to-amber-50 py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl text-center">
                <p className="mb-3 font-semibold text-primary">Prislista {PRICING.year}</p>
                <h1 className="mb-6 text-4xl font-bold text-stone-900 md:text-5xl lg:text-6xl">
                  Tydliga paket för kontrollansvarig
                </h1>
                <p className="mb-8 text-xl leading-relaxed text-stone-600">
                  Priserna nedan är inklusive moms och gäller projekt av normal art. Du får en
                  projektspecifik offert när underlag, antal platsbesök och omfattning är genomgångna.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#kontakt"
                    className="earth-gradient inline-block rounded-lg px-8 py-4 font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
                  >
                    Begär offert
                  </a>
                  <a
                    href={COMPANY.emailHref}
                    className="inline-flex items-center rounded-lg border-2 border-primary bg-white px-8 py-4 font-semibold text-primary transition-colors hover:bg-stone-50"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Mejla underlaget
                  </a>
                </div>
              </div>
            </div>
          </section>

          <PricingPackages />

          <section className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-5xl">
                <div className="mb-10 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-stone-900">Så läser du prislistan</h2>
                  <p className="mx-auto max-w-3xl text-lg text-stone-600">
                    Paketpriset bygger på en tydligt avgränsad KA-leverans. Avvikelser från
                    normal omfattning dokumenteras och prissätts innan extra arbete påbörjas.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-6">
                    <CheckCircle className="mb-4 h-7 w-7 text-green-600" />
                    <h3 className="mb-2 text-xl font-bold text-stone-900">Moms ingår</h3>
                    <p className="text-stone-600">Alla publicerade paketpriser är inklusive moms.</p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-6">
                    <FileCheck2 className="mb-4 h-7 w-7 text-primary" />
                    <h3 className="mb-2 text-xl font-bold text-stone-900">En komplettering ingår</h3>
                    <p className="text-stone-600">{PRICING.supplementRule}</p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-6">
                    <Info className="mb-4 h-7 w-7 text-amber-600" />
                    <h3 className="mb-2 text-xl font-bold text-stone-900">Offerten styr omfattningen</h3>
                    <p className="text-stone-600">
                      Resor, extra platsbesök och tillägg dokumenteras i offerten för det aktuella projektet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <PricingFAQ />

          <section id="kontakt" className="bg-stone-50 py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl">
                <div className="mb-10 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-stone-900">Få pris för ditt projekt</h2>
                  <p className="text-lg text-stone-600">
                    Skicka de handlingar du har och beskriv projektet. Vi återkommer med vilka
                    uppgifter som behövs för att kunna lämna en tydlig offert.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-8 shadow-sm">
                  <ContactForm />
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

export default PriserPage;
