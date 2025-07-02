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
    "name": "Ytterman",
    "description": "Professionella tjänster inom byggkontroll, miljö och hållbarhet med fokus på naturliga och jordnära lösningar.",
    "url": "https://ytterman.com",
    "telephone": "+46-XX-XXX-XX-XX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yttermangatan 1",
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
        title="Ytterman - Hållbara lösningar inom byggkontroll och miljö"
        description="Ytterman erbjuder professionella tjänster inom byggkontroll, miljö och hållbarhet. Kontrollansvarig, BAS-P och BAS-U med fokus på naturliga lösningar."
        keywords="ytterman, hållbara lösningar, byggkontroll, miljö, kontrollansvarig, BAS-P, BAS-U, naturliga lösningar"
        url="https://ytterman.com"
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