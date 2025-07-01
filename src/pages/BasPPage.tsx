import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead, faqSchema } from '@/components/SEOComponents';
import { TechnicalSEO } from '@/components/TechnicalSEO';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Shield, AlertTriangle, ArrowRight, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function BasPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Vad är skillnaden mellan BAS-P och BAS-U?",
      answer: "BAS-P arbetar under planerings- och projekteringsfasen medan BAS-U arbetar under utförandefasen på byggarbetsplatsen. BAS-P fokuserar på förebyggande arbetsmiljöarbete."
    },
    {
      question: "När måste jag utse en BAS-P enligt AFS?",
      answer: "BAS-P krävs enligt AFS 1999:3 för alla byggprojekt där mer än ett företag är inblandat och där projektering sker. Detta gäller redan från planeringsstadiet."
    },
    {
      question: "Vad ingår i en arbetsmiljöplan från BAS-P?",
      answer: "Arbetsmiljöplanen innehåller riskbedömningar, säkerhetsrutiner, ansvarsfördelning, skyddsåtgärder och instruktioner för säker arbetsmiljö under byggskedet."
    },
    {
      question: "Kan BAS-P och kontrollansvarig vara samma person?",
      answer: "Ja, samma person kan ha båda rollerna om de har rätt certifieringar och kompetens. Vi erbjuder båda tjänsterna och kan kombinera dem effektivt."
    },
    {
      question: "Hur tidigt ska BAS-P kopplas in i projektet?",
      answer: "BAS-P bör kopplas in så tidigt som möjligt i projekteringsfasen för att kunna påverka arbetsmiljöaspekterna redan från början."
    }
  ];

  return (
    <>
      <SEOHead
        title="BAS-P Västernorrland - Byggarbetsmiljösamordnare Planering AFS"
        description="Certifierad BAS-P i Västernorrland enligt AFS 1999:3. Arbetsmiljöplan, riskbedömning, förebyggande åtgärder. Erfaren byggarbetsmiljösamordnare för planering."
        keywords="BAS-P Västernorrland, byggarbetsmiljösamordnare planering, AFS 1999:3, arbetsmiljöplan, riskbedömning, Sundsvall, Härnösand"
        url="https://buildcontrol.se/bas-p"
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
                Vanliga frågor om BAS-P
              </h2>
              <p className="text-lg text-gray-600">
                Få svar på dina frågor om byggarbetsmiljösamordnare för planering
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