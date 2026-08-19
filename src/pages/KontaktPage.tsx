import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { FAQ, faqData } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { ServiceAreas } from '@/components/ServiceAreas';
import { Mail } from 'lucide-react';
import { BUSINESS_COPY, COMPANY } from '@/config/company';

const KontaktPage = () => {
  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Kontakt", url: "https://ytterman.com/kontakt" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Kontakta Ytterman – KA och överlåtelsebesiktning"
        description="Skicka förfrågan om kontrollansvarig eller överlåtelsebesiktning i Västernorrland. BAS-P/BAS-U och andra byggtjänster finns som kompletterande stöd."
        keywords="kontakt kontrollansvarig, överlåtelsebesiktning Västernorrland, besiktningsman, BAS-P BAS-U, Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors, Tobias Ytterman"
        url="https://ytterman.com/kontakt"
        breadcrumbs={breadcrumbs}
        faq={faqData.general}
        organization={true}
      />
      
      <CanonicalUrl path="/kontakt" />
      
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
                  Behöver du kontrollansvarig eller en överlåtelsebesiktning? Skicka några
                  grunduppgifter om byggprojektet eller fastigheten så återkommer vi med nästa steg.
                  BAS-P, BAS-U och andra byggtjänster finns som kompletterande stöd.
                  {' '}{BUSINESS_COPY.preferredContact}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#kontaktformular"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold focus:ring-4 focus:ring-primary/20 focus:outline-none"
                    aria-label="Gå till Yttermans kontaktformulär"
                  >
                    <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                    Öppna formuläret
                  </a>
                  <a 
                    href={COMPANY.emailHref}
                    className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold focus:ring-4 focus:ring-primary/20 focus:outline-none"
                    aria-label={`Skicka e-post till ${COMPANY.publicName} på ${COMPANY.email}`}
                  >
                    <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Info & Form */}
          <section id="kontaktformular" className="py-20 bg-white" aria-labelledby="contact-section-heading">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto mb-12">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="rounded-xl border border-slate-200 p-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Inför första kontakten</h2>
                    <p className="text-slate-600">
                      För KA: ange projekttyp, kommun och aktuellt skede. För besiktning: ange kommun,
                      byggnadstyp, ungefärligt byggår och önskad tid. Det räcker för en första bedömning.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-3">När i processen du bör höra av dig</h2>
                    <p className="text-slate-600">
                      Kontakta Ytterman tidigt inför tekniskt samråd och byggstart, eller så snart du vet
                      när en fastighetsbesiktning behöver genomföras. Tillgänglighet bekräftas per uppdrag.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Vad du kan förvänta dig</h2>
                    <p className="text-slate-600">
                      Du får en första bedömning, återkoppling om nästa steg och besked om
                      hur uppdraget kan läggas upp utifrån projektets omfattning, plats och tidsram.
                    </p>
                  </div>
                </div>
              </div>

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
      </div>
    </>
  );
};

export default KontaktPage;
