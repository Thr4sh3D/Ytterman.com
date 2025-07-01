import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead, faqSchema } from '@/components/SEOComponents';
import { TechnicalSEO } from '@/components/TechnicalSEO';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Users, Building, ArrowRight, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function KontrollansvarigPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Vad gör en kontrollansvarig (KA)?",
      answer: "En kontrollansvarig övervakar att byggarbeten utförs enligt gällande byggregler, säkerhetskrav och godkända ritningar. KA är oberoende och rapporterar till byggherren."
    },
    {
      question: "När krävs en kontrollansvarig enligt PBL?",
      answer: "Kontrollansvarig krävs för de flesta byggprojekt som kräver bygglov eller anmälan enligt Plan- och bygglagen (PBL). Detta gäller både nybyggnation och större ombyggnader."
    },
    {
      question: "Hur väljer jag rätt kontrollansvarig för mitt projekt?",
      answer: "Välj en certifierad kontrollansvarig med relevant erfarenhet för din typ av projekt. Vi har över 15 års erfarenhet och är certifierade enligt PBL."
    },
    {
      question: "Vad kostar en kontrollansvarig i Västernorrland?",
      answer: "Kostnaden varierar beroende på projektets storlek och komplexitet. Vi erbjuder konkurrenskraftiga priser och kostnadsfria offerter."
    },
    {
      question: "Kan samma person vara både kontrollansvarig och BAS?",
      answer: "Ja, samma person kan vara både kontrollansvarig och BAS (P eller U) om de har rätt certifieringar och kompetens för båda rollerna."
    }
  ];

  return (
    <>
      <SEOHead
        title="Kontrollansvarig (KA) Västernorrland - Certifierad enligt PBL"
        description="Certifierad kontrollansvarig i Västernorrland med över 15 års erfarenhet. Kontrollplan, tekniskt samråd, slutsamråd. Konkurrenskraftiga priser och snabb service."
        keywords="kontrollansvarig Västernorrland, KA Sundsvall, PBL certifierad, kontrollplan, tekniskt samråd, slutsamråd, byggkontroll Härnösand"
        url="https://buildcontrol.se/kontrollansvarig"
        structuredData={faqSchema(faqs)}
      />
      <TechnicalSEO />
      
      <Header />
      
      <main>
        {/* ... keep existing code (hero section) ... */}
        
        <section className="py-16 bg-white">
          {/* ... keep existing code (main content section) ... */}
        </section>
        
        <section className="py-16 bg-gray-50">
          {/* ... keep existing code (services section) ... */}
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vanliga frågor om kontrollansvarig
              </h2>
              <p className="text-lg text-gray-600">
                Få svar på dina frågor om kontrollansvarig och våra tjänster
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="w-full text-left bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <HelpCircle className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                    </div>
                    {openFaq === index && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          {/* ... keep existing code (CTA section) ... */}
        </section>
      </main>
      
      <Footer />
    </>
  );
}