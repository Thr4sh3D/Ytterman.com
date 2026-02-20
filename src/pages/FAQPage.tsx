import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ, faqData } from '@/components/FAQ';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

const FAQPage = () => {
  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Vanliga frågor', url: 'https://ytterman.com/faq' }
  ];

  // Kombinera alla FAQ-kategorier för schema
  const allFaqItems = [
    ...faqData.general,
    ...faqData.kontrollansvarig,
    ...faqData.bas,
    ...faqData.pricing,
    ...faqData.bygglov,
    ...faqData.certifiering,
    ...faqData.overlatelsebesiktning,
    ...faqData.lokalt
  ];

  return (
    <>
      <AdvancedSEO 
        title="FAQ Kontrollansvarig & BAS - 32+ Frågor & Svar | Västernorrland"
        description="Komplett FAQ om kontrollansvarig, BAS-P, BAS-U, bygglov, certifiering, priser och lokala tjänster i Sundsvall, Härnösand, Timrå. Expertråd från Tobias Ytterman. Svar på alla dina frågor!"
        keywords="FAQ kontrollansvarig, vanliga frågor BAS, kontrollansvarig bygglov, certifiering KA, pris kontrollansvarig, kontrollansvarig Sundsvall, BAS Härnösand, bygglov frågor, Västernorrland"
        url="https://ytterman.com/faq"
        type="website"
        organization={true}
        breadcrumbs={breadcrumbs}
        faq={allFaqItems}
      />
      
      <CanonicalUrl path="/faq" />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Breadcrumbs */}
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Vanliga frågor
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Här hittar du svar på de vanligaste frågorna om kontrollansvarig, BAS-P, BAS-U 
                  och andra byggtjänster. Hittar du inte svar på din fråga? Kontakta oss!
                </p>
                <Button 
                  onClick={() => window.location.href = '/kontakt'}
                  className="earth-gradient text-white hover:opacity-90"
                  size="lg"
                >
                  Ställ din fråga
                </Button>
              </div>
            </div>
          </section>

          {/* General FAQ */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Allmänna frågor
                </h2>
                <FAQ items={faqData.general} />
              </div>
            </div>
          </section>

          {/* Kontrollansvarig FAQ */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Frågor om kontrollansvarig
                </h2>
                <FAQ items={faqData.kontrollansvarig} />
              </div>
            </div>
          </section>

          {/* BAS FAQ */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Frågor om BAS-P och BAS-U
                </h2>
                <FAQ items={faqData.bas} />
              </div>
            </div>
          </section>

          {/* Pricing FAQ */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Frågor om priser och kostnader
                </h2>
                <FAQ items={faqData.pricing} />
              </div>
            </div>
          </section>

          {/* Bygglov FAQ */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Frågor om kontrollansvarig och bygglov
                </h2>
                <FAQ items={faqData.bygglov} />
              </div>
            </div>
          </section>

          {/* Certifiering FAQ */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Frågor om certifiering
                </h2>
                <FAQ items={faqData.certifiering} />
              </div>
            </div>
          </section>

          {/* Överlåtelsebesiktning FAQ */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Frågor om överlåtelsebesiktning
                </h2>
                <FAQ items={faqData.overlatelsebesiktning} />
              </div>
            </div>
          </section>

          {/* Lokala frågor FAQ */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Frågor om lokala tjänster i Västernorrland
                </h2>
                <FAQ items={faqData.lokalt} />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Fick du inte svar på din fråga?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss direkt så hjälper vi dig! Vi svarar på alla frågor om 
                kontrollansvarig, BAS och andra byggtjänster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/kontakt'}
                  size="lg"
                  className="earth-gradient text-white hover:opacity-90"
                >
                  Kontakta oss
                </Button>
                <Button 
                  onClick={() => window.location.href = 'tel:+46761118447'}
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                  Ring: 076-111 84 47
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default FAQPage;