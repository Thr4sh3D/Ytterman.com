import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { LocalPages } from '@/components/LocalPages';

const Index = () => {
  return (
    <>
      <SEO 
        title="Ytterman - Kontrollansvarig & BAS i Västernorrland | Byggkontroll"
        description="Professionell kontrollansvarig och BAS-tjänster i Västernorrland. Över 20 års erfarenhet av byggkontroll, arbetsmiljösamordning och bygglovsprocesser."
        keywords="kontrollansvarig, BAS-P, BAS-U, byggkontroll, Västernorrland, Sundsvall, Härnösand, bygglov, arbetsmiljösamordnare"
      />
      
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <LocalPages />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;