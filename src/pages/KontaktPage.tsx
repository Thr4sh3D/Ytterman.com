import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { FAQ, faqData } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ConversionTracking } from '@/components/ConversionTracking';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { ServiceAreas } from '@/components/ServiceAreas';
import { JsonLdSchema } from '@/components/JsonLdSchema';
import { Phone, Mail } from 'lucide-react';

const KontaktPage = () => {
  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Kontakt", url: "https://ytterman.com/kontakt" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Kontakta Ytterman - Kontrollansvarig & BAS Västernorrland"
        description="Behöver du kontrollansvarig eller BAS? Ring 076-111 84 47 eller mejla tobias@ytterman.com. Kostnadsfri konsultation. Svar inom 24h!"
        keywords="kontakt kontrollansvarig, BAS-P BAS-U Västernorrland, byggkonsult Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors, tobias ytterman"
        url="https://ytterman.com/kontakt"
        breadcrumbs={breadcrumbs}
        faq={faqData.general}
        organization={true}
      />
      
      <CanonicalUrl path="/kontakt" />
      <JsonLdSchema type="ProfessionalService" />
      <ConversionTracking />
      
      {/* Skip link för tangentbordsnavigering */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50 focus:ring-2 focus:ring-white"
      >
        Hoppa till huvudinnehåll
      </a>
      
      <div className="min-h-screen">
        <Header />
        
        <main id="main-content" role="main">
          {/* Breadcrumbs */}
          <section className="py-4 bg-white border-b" aria-label="Brödsmulor">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50" aria-labelledby="hero-heading">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 id="hero-heading" className="text-5xl font-bold text-slate-900 mb-6">
                  Kontakta oss
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Behöver du hjälp med kontrollansvarig, BAS-P, BAS-U eller andra byggtjänster? 
                  Kontakta oss för en kostnadsfri konsultation och fast prisoffert.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold focus:ring-4 focus:ring-primary/20 focus:outline-none"
                    aria-label="Ring direkt till Ytterman på telefonnummer 076-111 84 47"
                  >
                    <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                    Ring direkt: 076-111 84 47
                  </a>
                  <a 
                    href="mailto:tobias@ytterman.com"
                    className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold focus:ring-4 focus:ring-primary/20 focus:outline-none"
                    aria-label="Skicka e-post till Tobias Ytterman på tobias@ytterman.com"
                  >
                    <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                    tobias@ytterman.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Info & Form */}
          <section className="py-20 bg-white" aria-labelledby="contact-section-heading">
            <div className="container mx-auto px-4">
              <h2 id="contact-section-heading" className="sr-only">
                Kontaktinformation och kontaktformulär
              </h2>
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                  <ContactInfo />
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQ items={faqData.general} />

          {/* Service Areas */}
          <ServiceAreas />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default KontaktPage;