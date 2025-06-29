import { Header } from '@/components/Header';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const KontaktPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  // Färdiga meddelandetexter för varje paket
  const packageMessages = {
    'kontrollansvarig': 'Hej! Jag är intresserad av paketet "Kontrollansvarig" och skulle vilja veta mer om hur du kan hjälpa mig med mitt byggprojekt. Kan vi boka en kostnadsfri konsultation?',
    'ka-bas-paket': 'Hej! Jag är intresserad av det populära "KA + BAS Paketet" och skulle vilja diskutera hur detta passar mitt projekt. Kan vi boka ett möte för att gå igenom detaljerna?',
    'brf-stora-projekt': 'Hej! Jag har ett större/komplext projekt och skulle vilja få en offert för "BRF & Större Projekt"-paketet. Kan vi boka en konsultation för att diskutera projektets omfattning?'
  };

  // Färdiga meddelandetexter för varje tjänst
  const serviceMessages = {
    'kontrollansvarig-service': 'Hej! Jag behöver en Kontrollansvarig (KA) för mitt byggprojekt. Kan du hjälpa mig med kontrollplan, besiktningar och slutbevis? Jag skulle vilja boka en kostnadsfri konsultation.',
    'bas-p-service': 'Hej! Jag behöver BAS-P (Byggarbetsmiljösamordnare under projektering) för mitt projekt. Kan du hjälpa mig med arbetsmiljöplan och riskbedömning? Låt oss boka ett möte.',
    'bas-u-service': 'Hej! Jag behöver BAS-U (Byggarbetsmiljösamordnare under utförande) för mitt byggprojekt. Kan du hjälpa mig med arbetsmiljösamordning under byggfasen? Jag skulle vilja diskutera detta vidare.',
    'kombinerade-paket-service': 'Hej! Jag är intresserad av ett kombinerat paket med KA + BAS-P/U för mitt projekt. Kan vi diskutera en kostnadseffektiv lösning för hela byggprocessen?',
    'bygglovshandlingar': 'Hej! Jag behöver hjälp med att ta fram bygglovshandlingar för mitt projekt. Kan du hjälpa mig med ansökan och alla nödvändiga dokument?',
    'planritning': 'Hej! Jag behöver professionella planritningar för mitt byggprojekt. Kan vi diskutera omfattning och tidsplan för ritningsarbetet?',
    'situationsplan': 'Hej! Jag behöver en situationsplan för mitt projekt. Kan du hjälpa mig med uppmätning och framtagning av situationsplanen?',
    'sektionsritningar': 'Hej! Jag behöver sektionsritningar för mitt byggprojekt. Kan vi boka ett möte för att diskutera de tekniska kraven och detaljerna?'
  };

  useEffect(() => {
    const packageParam = searchParams.get('paket');
    const serviceParam = searchParams.get('tjanst');
    
    if (packageParam && packageMessages[packageParam as keyof typeof packageMessages]) {
      setSelectedPackage(packageParam);
      setPrefilledMessage(packageMessages[packageParam as keyof typeof packageMessages]);
    } else if (serviceParam && serviceMessages[serviceParam as keyof typeof serviceMessages]) {
      setSelectedPackage(serviceParam);
      setPrefilledMessage(serviceMessages[serviceParam as keyof typeof serviceMessages]);
    }
  }, [searchParams]);

  return (
    <>
      <AdvancedSEO 
        title="Kontakta Ytterman - Få Offert på Kontrollansvarig & BAS-tjänster"
        description="Kontakta Ytterman för kostnadsfri konsultation och offert på kontrollansvarig och BAS-tjänster i Västernorrland. Snabb svarstid och professionell service."
        keywords="kontakta kontrollansvarig, offert BAS-tjänster, konsultation byggkontroll, Ytterman kontakt"
        url="https://ytterman.com/kontakt"
      />
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Kontakta Oss
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Redo att starta ditt byggprojekt? Fyll i formuläret nedan för en kostnadsfri 
                konsultation och personlig offert anpassad efter dina behov.
              </p>
            </div>
          </div>
          
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

export default KontaktPage;