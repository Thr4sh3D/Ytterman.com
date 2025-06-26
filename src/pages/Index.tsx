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

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
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
          <Contact selectedPackage={selectedPackage} />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;