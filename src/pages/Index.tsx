import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEOEnhancements } from '@/components/SEOEnhancements';

const Index = () => {
  return (
    <>
      <SEOEnhancements />
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;