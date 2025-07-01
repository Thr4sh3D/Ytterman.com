import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Header } from '@/components/Header';
import { Helmet } from 'react-helmet-async';

export default function Index() {
  return (
    <>
      <Helmet>
        <title>BuildControl - Professionell byggkontroll & teknisk konsultation</title>
        <meta name="description" content="Professionell byggkontroll, kontrollansvarig, BAS-P och BAS-U tjänster i Västernorrland. Vi hjälper dig med ditt byggprojekt från start till mål." />
        <meta name="keywords" content="byggkontroll, kontrollansvarig, BAS-P, BAS-U, byggprojekt, Västernorrland, Sundsvall" />
      </Helmet>
      
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