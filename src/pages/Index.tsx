import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { FAQ } from '@/components/FAQ';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { JsonLdSchema } from '@/components/JsonLdSchema';
import { PricingPackages } from '@/components/PricingPackages';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { BAS, BUSINESS_COPY, COMPANY, KA_CERT, PRICE_LABELS } from '@/config/company';

const Index = () => {
  const homeFaq = [
    {
      question: "Vad kostar en kontrollansvarig?",
      answer: `Priset beror på projekttyp. ${PRICE_LABELS.kaBasFrom} inkl. moms gäller KA Bas för tillbyggnad. Ombyggnation och nyproduktion av fritidshus har egna paketpriser. Kontakta oss för en projektspecifik offert.`
    },
    {
      question: "Behöver jag en kontrollansvarig för mitt bygglov?",
      answer: "Huvudregeln är att kontroll som omfattas av en kontrollplan ska ha en certifierad kontrollansvarig, men det finns undantag för vissa mindre åtgärder. Byggnadsnämnden avgör vad som gäller i ärendet."
    },
    {
      question: "Vad är skillnaden mellan BAS-P och BAS-U?",
      answer: `BAS-P samordnar arbetsmiljöfrågorna under planering och projektering. BAS-U samordnar dem under utförandet. Byggherren ska utse lämpliga personer för rollerna och ge dem rätt förutsättningar enligt bland annat ${BAS.regulation}.`
    },
    {
      question: "Vilka områden täcker Ytterman?",
      answer: `Ytterman tar emot förfrågningar från ${COMPANY.region}. Tillgänglighet, platsbesök, resor och eventuella resekostnader bekräftas för varje projekt.`
    },
    {
      question: "Hur snabbt kan jag få en kontrollansvarig?",
      answer: BUSINESS_COPY.defaultResponse
    },
    {
      question: "Vad gör en besiktningsman vid en överlåtelsebesiktning?",
      answer: "En överlåtelsebesiktning är en avtalad, normalt okulär undersökning av synliga och åtkomliga delar. Exakt omfattning, begränsningar och rapportinnehåll framgår av uppdragsbekräftelsen."
    }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Kontrollansvarig & BAS i Västernorrland | Ytterman"
        description={`${KA_CERT.title} och utbildad för uppdrag som ${BAS.rolesLabel}. ${COMPANY.experienceLabel}, tydliga paket och verksamhet i ${COMPANY.region}.`}
        keywords="kontrollansvarig, BAS-P, BAS-U, byggarbetsmiljösamordnare, byggkontroll, energiberäkning online, Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors, Västernorrland, bygglov, Tobias Ytterman"
        url="https://ytterman.com/"
        type="website"
        organization={true}
        faq={homeFaq}
      />
      <JsonLdSchema type="ProfessionalService" />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Kontrollansvarig Västernorrland",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".hero-section", ".faq-section"]
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="hero-section" aria-label="Huvudinnehåll"><Hero /></section>
          <Services onServiceSelect={() => {}} />
          <PricingPackages />
          <About />
          <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4 text-center max-w-4xl">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Bygger du fritidshus i fjällen?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Jag tar emot förfrågningar för fjällprojekt och bedömer upplägget utifrån läge,
                kontrollbehov och planerade platsbesök. Du får resor och kostnader specificerade i offerten.
              </p>
              <Button
                asChild
                size="lg"
                className="earth-gradient text-white hover:opacity-90"
              >
                <a href="/kontrollansvarig-i-fjallen/">
                  Se upplägget för fjällprojekt
                </a>
              </Button>
            </div>
          </section>
          <section className="faq-section" aria-label="Vanliga frågor"><FAQ items={homeFaq} /></section>
          <Contact selectedPackage="" prefilledMessage="" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
