import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Header } from '@/components/Header';
import { LocalSEO } from '@/components/LocalSEO';
import { ServiceAreas } from '@/components/ServiceAreas';
import { LocalReviews } from '@/components/LocalReviews';
import { SEOHead, faqSchema } from '@/components/SEOComponents';

export default function Index() {
  // FAQ data för strukturerad data
  const faqs = [
    {
      question: "Vad är en kontrollansvarig?",
      answer: "En kontrollansvarig är en certifierad person som övervakar att byggarbeten utförs enligt gällande byggregler och säkerhetskrav."
    },
    {
      question: "När behöver jag BAS-P och BAS-U?",
      answer: "BAS-P krävs under projekteringsfasen och BAS-U under utförandefasen för byggprojekt där flera entreprenörer arbetar samtidigt."
    },
    {
      question: "Vilka områden täcker ni i Västernorrland?",
      answer: "Vi täcker hela Västernorrlands län inklusive Sundsvall, Härnösand, Kramfors, Sollefteå och omkringliggande kommuner."
    }
  ];

  // Lokal företagsinformation för strukturerad data
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BuildControl",
    "description": "Certifierad kontrollansvarig, BAS-P och BAS-U i Västernorrland med över 15 års erfarenhet.",
    "url": "https://buildcontrol.se",
    "telephone": "+46-XX-XXX-XX-XX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Byggkontrollsgatan 1",
      "addressLocality": "Sundsvall",
      "addressRegion": "Västernorrland",
      "postalCode": "851 70",
      "addressCountry": "SE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "62.3908",
      "longitude": "17.3069"
    },
    "areaServed": [
      "Sundsvall", "Härnösand", "Kramfors", "Sollefteå", "Örnsköldsvik", "Västernorrland"
    ],
    "serviceType": [
      "Kontrollansvarig enligt PBL",
      "BAS-P Byggarbetsmiljösamordnare",
      "BAS-U Byggarbetsmiljösamordnare"
    ]
  };

  const combinedStructuredData = [
    localBusinessData,
    faqSchema(faqs)
  ];

  return (
    <>
      <SEOHead
        title="BuildControl Västernorrland - Kontrollansvarig, BAS-P & BAS-U Sundsvall"
        description="Certifierad kontrollansvarig, BAS-P och BAS-U i Västernorrland. Vi täcker Sundsvall, Härnösand, Kramfors, Sollefteå. Över 15 års erfarenhet. Kontakta oss idag!"
        keywords="kontrollansvarig Västernorrland, BAS-P Sundsvall, BAS-U Härnösand, byggkontroll Kramfors, kontrollansvarig Sollefteå, PBL certifierad, AFS 1999:3"
        url="https://buildcontrol.se"
        structuredData={combinedStructuredData}
      />
      <LocalSEO />
      
      <Header />
      <Hero />
      <Services />
      <ServiceAreas />
      <About />
      <LocalReviews />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}