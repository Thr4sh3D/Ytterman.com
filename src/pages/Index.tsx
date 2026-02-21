import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { FAQ } from '@/components/FAQ';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { JsonLdSchema } from '@/components/JsonLdSchema';
import { Button } from '@/components/ui/button';
import { Award, Shield } from 'lucide-react';

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
      answer: "Priserna varierar beroende på projektets omfattning. Kontrollansvarig från 19,999 kr, BAS-P från 15,000 kr, BAS-U från 20,000 kr, energiberäkning online 2,999 kr. Kontakta oss för en kostnadsfri konsultation och fast prisoffert."
    }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Kontrollansvarig & BAS-P/BAS-U Västernorrland | Ytterman"
        description="Certifierad kontrollansvarig och BAS med 20+ års erfarenhet. Trygg byggprocess med fast pris. Sundsvall, Härnösand, Sollefteå. Ring 076-111 84 47!"
        keywords="kontrollansvarig, BAS-P, BAS-U, byggarbetsmiljösamordnare, byggkontroll, energiberäkning online, Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors, Västernorrland, bygglov, Tobias Ytterman"
        url="https://ytterman.com"
        type="website"
        organization={true}
        faq={homeFaq}
      />
      
      <CanonicalUrl path="/" />
      <JsonLdSchema type="ProfessionalService" />
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
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