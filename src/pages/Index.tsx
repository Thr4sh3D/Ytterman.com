import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Header } from '@/components/Header';
import { SEOHead, organizationSchema, localBusinessSchema, reviewSchema, faqSchema } from '@/components/SEOComponents';
import { TechnicalSEO } from '@/components/TechnicalSEO';

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

  // Recensioner för strukturerad data
  const reviews = [
    { author: "Anna Andersson", rating: 5, text: "Professionell och noggrann service. Fick hjälp med både BAS P och U-utredningar för min fastighet." },
    { author: "Erik Johansson", rating: 5, text: "Snabb och korrekt hantering av alla våra kontrollansvarig-uppdrag. Rekommenderar starkt." },
    { author: "Maria Lindström", rating: 5, text: "Excellent support throughout our construction project. Professional expertise and timely delivery." }
  ];

  const combinedStructuredData = [
    organizationSchema,
    localBusinessSchema,
    faqSchema(faqs),
    reviewSchema(reviews)
  ];

  return (
    <>
      <SEOHead
        title="BuildControl - Professionell byggkontroll & teknisk konsultation"
        description="Professionell byggkontroll, kontrollansvarig, BAS-P och BAS-U tjänster i Västernorrland. Vi hjälper dig med ditt byggprojekt från start till mål."
        keywords="byggkontroll, kontrollansvarig, BAS-P, BAS-U, byggprojekt, Västernorrland, Sundsvall, byggregler, säkerhet, certifierad"
        url="https://buildcontrol.se"
        structuredData={combinedStructuredData}
      />
      <TechnicalSEO />
      
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}