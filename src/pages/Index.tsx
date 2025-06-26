import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  // Färdiga meddelandetexter för varje paket
  const packageMessages = {
    'kontrollansvarig': 'Hej! Jag är intresserad av paketet "Kontrollansvarig" och skulle vilja veta mer om hur du kan hjälpa mig med mitt byggprojekt. Kan vi boka en kostnadsfri konsultation?',
    'ka-bas-paket': 'Hej! Jag är intresserad av det populära "KA + BAS Paketet" och skulle vilja diskutera hur detta passar mitt projekt. Kan vi boka ett möte för att gå igenom detaljerna?',
    'brf-stora-projekt': 'Hej! Jag har ett större/komplext projekt och skulle vilja få en offert för "BRF & Större Projekt"-paketet. Kan vi boka en konsultation för att diskutera projektets omfattning?'
  };

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    setPrefilledMessage(packageMessages[packageId as keyof typeof packageMessages] || '');
    
    // Scroll to contact section when package is selected
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Ytterman - Kontrollansvarig & BAS i Västernorrland</title>
        <meta name="description" content="Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare (BAS-P/BAS-U) i Västernorrland. Över 20 års erfarenhet. Trygg byggprocess med fast pris." />
        <meta name="keywords" content="kontrollansvarig, BAS-P, BAS-U, byggkontroll, Västernorrland, Sundsvall, Härnösand, bygglov" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Pricing onPackageSelect={handlePackageSelect} />
          <About />
          <Contact 
            selectedPackage={selectedPackage} 
            prefilledMessage={prefilledMessage}
          />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;