import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { FAQ } from '@/components/FAQ';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { JsonLdSchema } from '@/components/JsonLdSchema';
import { PricingPackages } from '@/components/PricingPackages';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Award, Shield } from 'lucide-react';

const Index = () => {
  const homeFaq = [
    {
      question: "Vad kostar en kontrollansvarig?",
      answer: "Priset beror på projekttyp. KA Bas för en tillbyggnad kostar från 29 500 kr inkl. moms, ombyggnation från 32 500 kr och nybyggnad från 34 500 kr. Kontakta oss för en offert anpassad till ditt projekt."
    },
    {
      question: "Behöver jag en kontrollansvarig för mitt bygglov?",
      answer: "Ja, enligt Plan- och bygglagen (PBL) krävs en certifierad kontrollansvarig för de flesta bygglovspliktiga åtgärder. Undantag kan gälla för enklare åtgärder som attefallshus."
    },
    {
      question: "Vad är skillnaden mellan BAS-P och BAS-U?",
      answer: "BAS-P (Byggarbetsmiljösamordnare för Projektering) ansvarar för arbetsmiljöfrågor under projekteringsfasen. BAS-U (Utförande) ansvarar under själva byggskedet. Båda rollerna krävs enligt Arbetsmiljöverkets föreskrifter."
    },
    {
      question: "Vilka områden täcker Ytterman?",
      answer: "Vi verkar i hela Västernorrland — Härnösand, Sundsvall, Sollefteå, Kramfors och Örnsköldsvik. Vi kan även ta uppdrag i angränsande kommuner."
    },
    {
      question: "Hur snabbt kan jag få en kontrollansvarig?",
      answer: "Vanligtvis kan vi starta inom en vecka efter kontakt. Fyll i kontaktformuläret så återkommer vi inom 24 timmar med förslag på upplägg och pris."
    },
    {
      question: "Vad gör en besiktningsman vid en överlåtelsebesiktning?",
      answer: "En besiktningsman gör en okulär och teknisk genomgång av fastigheten inför en försäljning. Syftet är att identifiera byggtekniska brister, fuktskador och andra fel som kan påverka köpbeslutet."
    }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Kontrollansvarig & BAS-P/BAS-U Västernorrland | Ytterman"
        description="Certifierad kontrollansvarig och BAS med 20+ års erfarenhet. Trygg byggprocess med fast pris. Sundsvall, Härnösand, Sollefteå. Ring 076-111 84 47!"
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
                Kontrollansvarig i fjällvärlden
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Planerar du ett fjällhus eller fritidshus i Åre, Härjedalen eller Västerbottensfjällen? Jag är certifierad KA och BAS-P/BAS-U med bas i Västernorrland och tar uppdrag längs hela fjällkedjan – med paketerade platsbesök och digital uppföljning.
              </p>
              <Button
                asChild
                size="lg"
                className="earth-gradient text-white hover:opacity-90"
              >
                <a href="/kontrollansvarig-i-fjallen/">
                  Läs mer om fjäll-KA
                </a>
              </Button>
            </div>
          </section>
          <section className="py-16 bg-gradient-to-br from-slate-50 to-amber-50">
            <div className="container mx-auto px-4 text-center max-w-4xl">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 earth-gradient rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Officiellt Certifierad Kontrollansvarig
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Kontrollera mina officiella certifieringar som kontrollansvarig enligt Plan- och bygglagen samt BAS-P och BAS-U certifikat.
              </p>
              <Button 
                asChild
                size="lg"
                className="earth-gradient text-white hover:opacity-90"
              >
                <a href="#certifikat" aria-label="Scrolla till certifikat">
                  <Award className="w-5 h-5 mr-2" />
                  Visa certifikat
                </a>
              </Button>
            </div>
          </section>
          <section className="faq-section" aria-label="Vanliga frågor"><FAQ items={homeFaq} /></section>
          <Contact selectedPackage="" prefilledMessage="" />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;