import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Certification } from '@/components/Certification';
import { Contact } from '@/components/Contact';
import { FAQ } from '@/components/FAQ';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';

const Index = () => {
  const homeFaq = [
    {
      question: "Vilka tjänster erbjuder Ytterman?",
      answer: "Vi erbjuder Kontrollansvarig (KA), BAS-P, BAS-U, energiberäkning online, bygglovshandlingar, energideklaration och överlåtelsebesiktning i Västernorrland."
    },
    {
      question: "Var är ni verksamma?",
      answer: "Vi är verksamma i hela Västernorrland med fokus på Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors."
    },
    {
      question: "Hur lång tid tar det att få en offert?",
      answer: "Du får vanligtvis en offert inom 24 timmar efter att du kontaktat oss."
    },
    {
      question: "Vad kostar era tjänster?",
      answer: "Priserna varierar beroende på projektets omfattning. Kontrollansvarig från 15,000 kr, BAS-P från 12,000 kr, BAS-U från 18,000 kr, energiberäkning online 2,999 kr. Kontakta oss för en kostnadsfri konsultation och fast prisoffert."
    }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Ytterman - Kontrollansvarig & BAS-P/BAS-U i Västernorrland | Sundsvall, Härnösand"
        description="Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare (BAS-P/BAS-U) i Västernorrland. Över 20 års erfarenhet. Tjänster: KA, BAS, energiberäkning online, bygglov. Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors."
        keywords="kontrollansvarig, BAS-P, BAS-U, byggarbetsmiljösamordnare, byggkontroll, energiberäkning online, Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors, Västernorrland, bygglov, Tobias Ytterman"
        url="https://ytterman.com"
        type="website"
        organization={true}
        faq={homeFaq}
      />
      
      <CanonicalUrl path="/" />
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Certification />
          <FAQ items={homeFaq} />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;