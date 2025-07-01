import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead, faqSchema } from '@/components/SEOComponents';
import { TechnicalSEO } from '@/components/TechnicalSEO';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, ClipboardCheck, Eye, ArrowRight, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function BasUPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Vad är skillnaden mellan BAS-U och BAS-P?",
      answer: "BAS-U arbetar på byggarbetsplatsen under utförandefasen och samordnar arbetsmiljöarbetet mellan entreprenörer, medan BAS-P arbetar under planeringsfasen."
    },
    {
      question: "Hur ofta genomför BAS-U skyddsronder?",
      answer: "Skyddsronder genomförs regelbundet enligt arbetsmiljöplanen, vanligtvis veckovis eller vid behov beroende på projektets storlek och risknivå."
    },
    {
      question: "Vad händer om BAS-U upptäcker säkerhetsbrister?",
      answer: "BAS-U stoppar omedelbart farliga arbeten, dokumenterar bristerna och säkerställer att åtgärder vidtas innan arbetet kan fortsätta."
    },
    {
      question: "Kan BAS-U vara anställd av en av entreprenörerna?",
      answer: "Nej, BAS-U ska vara oberoende och får inte vara anställd av någon av de entreprenörer som arbetar på byggarbetsplatsen."
    },
    {
      question: "Vilka rapporter lämnar BAS-U till byggherren?",
      answer: "BAS-U lämnar regelbundna rapporter om arbetsmiljöläget, genomförda kontroller, upptäckta brister och vidtagna åtgärder."
    }
  ];

  return (
    <>
      <SEOHead
        title="BAS-U Västernorrland - Byggarbetsmiljösamordnare Utförande AFS"
        description="Certifierad BAS-U i Västernorrland enligt AFS 1999:3. Samordning på byggarbetsplats, säkerhetsrutiner, skyddsronder. Erfaren byggarbetsmiljösamordnare utförande."
        keywords="BAS-U Västernorrland, byggarbetsmiljösamordnare utförande, AFS 1999:3, skyddsronder, säkerhetsrutiner, Sundsvall, Härnösand"
        url="https://buildcontrol.se/bas-u"
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
                Vanliga frågor om BAS-U
              </h2>
              <p className="text-lg text-gray-600">
                Få svar på dina frågor om byggarbetsmiljösamordnare för utförande
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