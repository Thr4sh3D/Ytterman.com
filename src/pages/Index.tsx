import { useState, Suspense } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { LazyServices, LazyPricing, LazyAbout, LazyContact, LazyServiceQuickMessages } from '@/components/LazyComponents';
import { Helmet } from 'react-helmet-async';

// Loading component för lazy-loaded komponenter
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20" role="status" aria-label="Laddar innehåll">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" aria-hidden="true"></div>
    <span className="sr-only">Laddar...</span>
  </div>
);

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  // FAQ data för SEO
  const faqData = [
    {
      question: "Vad är en kontrollansvarig och när behöver jag en?",
      answer: "En kontrollansvarig (KA) krävs enligt Plan- och bygglagen (PBL) för att utföra teknisk kontroll under byggprocessen. KA behövs för de flesta byggprojekt som kräver bygglov eller anmälan."
    },
    {
      question: "Vad kostar kontrollansvarig och BAS-tjänster?",
      answer: "Våra priser börjar från 12,000 SEK för BAS-P, 15,000 SEK för kontrollansvarig och 18,000 SEK för BAS-U. Priset beror på projektets omfattning och komplexitet."
    },
    {
      question: "Vilka områden täcker Ytterman?",
      answer: "Vi verkar i hela Västernorrland med fokus på Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors. Vi hjälper även kunder i övriga delar av regionen."
    },
    {
      question: "Hur lång tid tar det att få kontrollplan och BAS-dokumentation?",
      answer: "En kontrollplan tar vanligtvis 1-2 veckor att färdigställa efter att vi mottagit alla nödvändiga handlingar. BAS-dokumentation kan ofta levereras inom samma tidsram."
    }
  ];

  // Reviews data för SEO
  const reviews = [
    {
      author: "Anna Andersson",
      rating: 5,
      reviewBody: "Professionell och pålitlig kontrollansvarig. Tobias hjälpte oss genom hela byggprocessen med tydlig kommunikation och snabb hantering.",
      datePublished: "2024-01-15"
    },
    {
      author: "Erik Johansson", 
      rating: 5,
      reviewBody: "Excellent BAS-U tjänster för vårt projekt i Sundsvall. Mycket kunnig och alltid tillgänglig när vi behövde hjälp med arbetsmiljöfrågor.",
      datePublished: "2024-01-10"
    },
    {
      author: "Maria Lindström",
      rating: 5,
      reviewBody: "Snabb och effektiv hantering av vårt bygglov och kontrollansvarig-uppdrag. Rekommenderar starkt Ytterman för alla byggprojekt!",
      datePublished: "2024-01-05"
    }
  ];

  const packageMessages = {
    'kontrollansvarig': 'Hej! Jag är intresserad av paketet "Kontrollansvarig" och skulle vilja veta mer om hur du kan hjälpa mig med mitt byggprojekt. Kan vi boka en kostnadsfri konsultation?',
    'ka-bas-paket': 'Hej! Jag är intresserad av det populära "KA + BAS Paketet" och skulle vilja diskutera hur detta passar mitt projekt. Kan vi boka ett möte för att gå igenom detaljerna?',
    'brf-stora-projekt': 'Hej! Jag har ett större/komplext projekt och skulle vilja få en offert för "BRF & Större Projekt"-paketet. Kan vi boka en konsultation för att diskutera projektets omfattning?'
  };

  const serviceMessages = {
    'kontrollansvarig-service': 'Hej! Jag behöver en Kontrollansvarig (KA) för mitt byggprojekt. Kan du hjälpa mig med kontrollplan, besiktningar och slutbevis? Jag skulle vilja boka en kostnadsfri konsultation.',
    'bas-p-service': 'Hej! Jag behöver BAS-P (Byggarbetsmiljösamordnare under projektering) för mitt projekt. Kan du hjälpa mig med arbetsmiljöplan och riskbedömning? Låt oss boka ett möte.',
    'bas-u-service': 'Hej! Jag behöver BAS-U (Byggarbetsmiljösamordnare under utförande) för mitt byggprojekt. Kan du hjälpa mig med arbetsmiljösamordning under byggfasen? Jag skulle vilja diskutera detta vidare.',
    'energideklaration-service': 'Hej! Jag behöver en energideklaration för min fastighet. Kan du hjälpa mig med energibesiktning, energiberäkning och åtgärdsförslag? Jag skulle vilja boka en tid för besiktning.',
    'overlatelsebesiktning-service': 'Hej! Jag behöver en överlåtelsebesiktning inför försäljning av min fastighet. Kan du hjälpa mig med teknisk besiktning och besiktningsrapport? Låt oss boka en tid.',
    'kombinerade-paket-service': 'Hej! Jag är intresserad av ett kombinerat paket med KA + BAS-P/U för mitt projekt. Kan vi diskutera en kostnadseffektiv lösning för hela byggprocessen?',
    'bygglovshandlingar': 'Hej! Jag behöver hjälp med att ta fram bygglovshandlingar för mitt projekt. Kan du hjälpa mig med ansökan och alla nödvändiga dokument?',
    'planritning': 'Hej! Jag behöver professionella planritningar för mitt byggprojekt. Kan vi diskutera omfattning och tidsplan för ritningsarbetet?',
    'situationsplan': 'Hej! Jag behöver en situationsplan för mitt projekt. Kan du hjälpa mig med uppmätning och framtagning av situationsplanen?',
    'sektionsritningar': 'Hej! Jag behöver sektionsritningar för mitt byggprojekt. Kan vi boka ett möte för att diskutera de tekniska kraven och detaljerna?'
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

  const handleServiceSelect = (serviceId: string) => {
    setSelectedPackage(serviceId);
    setPrefilledMessage(serviceMessages[serviceId as keyof typeof serviceMessages] || '');
    
    // Scroll to contact section when service is selected
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://ytterman.com/" />
        
        {/* Additional meta tags for better indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Hreflang for Swedish content */}
        <link rel="alternate" hrefLang="sv" href="https://ytterman.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://ytterman.com/" />
        
        {/* Internal linking hints */}
        <link rel="preload" href="/tjanster" as="document" />
        <link rel="preload" href="/kontakt" as="document" />
        <link rel="preload" href="/faq" as="document" />
      </Helmet>
      
      <AdvancedSEO 
        title="Ytterman - Kontrollansvarig & BAS i Västernorrland | Certifierad Expert"
        description="Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare (BAS-P/BAS-U) i Västernorrland. Över 20 års erfarenhet. Trygg byggprocess med fast pris. Verksam i Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors."
        keywords="kontrollansvarig Västernorrland, BAS-P Sundsvall, BAS-U Härnösand, byggkontroll Sollefteå, kontrollansvarig Timrå, BAS Kramfors, bygglov Västernorrland, arbetsmiljösamordnare, PBL kontroll, slutbevis"
        url="https://ytterman.com"
        organization={true}
        faq={faqData}
        reviews={reviews}
      />
      
      <div className="min-h-screen">
        <Header />
        <main role="main">
          <Hero />
          
          {/* Internal linking section for better SEO */}
          <section className="py-8 bg-stone-50" aria-label="Snabbnavigation">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <nav className="flex flex-wrap justify-center gap-4 text-sm" aria-label="Snabblänkar">
                  <a 
                    href="/tjanster" 
                    className="text-stone-600 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 rounded"
                    aria-label="Gå till våra tjänster"
                  >
                    Våra tjänster
                  </a>
                  <span className="text-stone-400" aria-hidden="true">•</span>
                  <a 
                    href="/faq" 
                    className="text-stone-600 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 rounded"
                    aria-label="Läs vanliga frågor"
                  >
                    Vanliga frågor
                  </a>
                  <span className="text-stone-400" aria-hidden="true">•</span>
                  <a 
                    href="/guider" 
                    className="text-stone-600 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 rounded"
                    aria-label="Läs guider och tips"
                  >
                    Guider & Tips
                  </a>
                  <span className="text-stone-400" aria-hidden="true">•</span>
                  <a 
                    href="/kontakt" 
                    className="text-stone-600 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 rounded"
                    aria-label="Kontakta oss"
                  >
                    Kontakta oss
                  </a>
                </nav>
              </div>
            </div>
          </section>
          
          <Suspense fallback={<LoadingSpinner />}>
            <LazyServices onServiceSelect={handleServiceSelect} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <LazyPricing onPackageSelect={handlePackageSelect} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <LazyAbout />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <LazyContact 
              selectedPackage={selectedPackage} 
              prefilledMessage={prefilledMessage}
            />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <LazyServiceQuickMessages onServiceSelect={handleServiceSelect} />
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;