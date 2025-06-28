import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Vad är en Kontrollansvarig (KA) och när behöver jag en?',
    answer: 'En Kontrollansvarig är en certifierad person som säkerställer att byggprojektet följer alla byggbestämmelser. Du behöver en KA för alla byggprojekt som kräver bygglov eller anmälan, samt för större renoveringar.',
    category: 'Kontrollansvarig'
  },
  {
    question: 'Vad är skillnaden mellan BAS-P och BAS-U?',
    answer: 'BAS-P (Byggarbetsmiljösamordnare under projektering) arbetar under planeringsfasen och tar fram arbetsmiljöplaner. BAS-U (Byggarbetsmiljösamordnare under utförande) övervakar arbetsmiljön under byggfasen.',
    category: 'BAS'
  },
  {
    question: 'Hur mycket kostar era tjänster?',
    answer: 'Våra priser börjar från 15,000 SEK för grundpaket. Priset beror på projektets storlek och komplexitet. Vi erbjuder alltid en kostnadsfri konsultation för att ge dig en exakt offert.',
    category: 'Priser'
  },
  {
    question: 'Vilka områden täcker ni i Västernorrland?',
    answer: 'Vi verkar i hela Västernorrland, inklusive Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors och omkringliggande områden. Kontakta oss för att bekräfta att vi kan hjälpa dig i ditt område.',
    category: 'Område'
  },
  {
    question: 'Hur lång tid tar det att få en kontrollplan?',
    answer: 'En kontrollplan tar vanligtvis 1-2 veckor att färdigställa efter att vi mottagit alla nödvändiga handlingar. För komplexa projekt kan det ta längre tid.',
    category: 'Process'
  },
  {
    question: 'Kan ni hjälpa med bygglovsansökan?',
    answer: 'Ja, vi hjälper till med hela bygglovsprocessen, inklusive framtagning av nödvändiga handlingar, ritningar och ansökan till kommunen.',
    category: 'Bygglov'
  },
  {
    question: 'Vad händer om projektet inte godkänns vid besiktning?',
    answer: 'Om brister upptäcks vid besiktning hjälper vi till att identifiera problemen och vägleder dig genom åtgärdsprocessen. Vi följer upp tills alla krav är uppfyllda.',
    category: 'Process'
  },
  {
    question: 'Behöver jag både KA och BAS för mitt projekt?',
    answer: 'Det beror på projektets storlek och typ. Mindre projekt kan bara behöva KA, medan större projekt ofta kräver både KA och BAS. Vi hjälper dig att bedöma vad som krävs för just ditt projekt.',
    category: 'Kombinerade tjänster'
  }
];

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <section id="faq" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Vanliga Frågor
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Här hittar du svar på de vanligaste frågorna om våra tjänster inom 
              byggkontroll och arbetsmiljösamordning.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Har du fler frågor? Vi hjälper gärna till!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+46761118447"
                className="inline-flex items-center justify-center px-6 py-3 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Ring oss: 076-111 84 47
              </a>
              <a 
                href="mailto:tobias@ytterman.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Skicka e-post
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};