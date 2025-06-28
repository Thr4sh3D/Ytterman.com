import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const faqData = [
  {
    question: "Vad är en Kontrollansvarig (KA) och varför behöver jag en?",
    answer: "En Kontrollansvarig är en certifierad person som säkerställer att ditt byggprojekt följer alla byggbestämmelser och säkerhetsföreskrifter. Enligt Plan- och bygglagen (PBL) krävs en KA för de flesta byggprojekt för att få slutbevis och godkännande från kommunen."
  },
  {
    question: "Vad är skillnaden mellan BAS-P och BAS-U?",
    answer: "BAS-P (Byggarbetsmiljösamordnare under projektering) arbetar under planeringsfasen och skapar arbetsmiljöplaner. BAS-U (Byggarbetsmiljösamordnare under utförande) övervakar arbetsmiljön under byggfasen. Båda roller krävs enligt Arbetsmiljöverkets föreskrifter för byggprojekt."
  },
  {
    question: "Hur mycket kostar era tjänster?",
    answer: "Våra priser börjar från 15,000 SEK för grundläggande Kontrollansvarig-tjänster. Vi erbjuder fasta priser och kostnadsfria konsultationer för att ge dig en exakt offert baserat på ditt projekts omfattning."
  },
  {
    question: "Vilka områden täcker ni i Västernorrland?",
    answer: "Vi verkar i hela Västernorrland med fokus på Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors och omkringliggande områden. Kontakta oss för att bekräfta att vi kan hjälpa dig i ditt specifika område."
  },
  {
    question: "Hur lång tid tar det att få slutbevis?",
    answer: "Tiden för slutbevis varierar beroende på projektets komplexitet och kommunens handläggningstider. Vanligtvis tar det 2-4 veckor efter att alla kontroller är genomförda och dokumentationen är komplett."
  },
  {
    question: "Kan ni hjälpa med bygglovsansökan?",
    answer: "Ja, vi hjälper med hela bygglovsprocessen inklusive framtagning av ritningar, ansökningshandlingar och kommunikation med byggnadsnämnden. Vi har över 20 års erfarenhet av bygglovsprocesser i Västernorrland."
  },
  {
    question: "Vad händer om bygget inte följer föreskrifterna?",
    answer: "Som Kontrollansvarig identifierar vi avvikelser tidigt och arbetar med byggherren för att åtgärda dem. Detta förhindrar kostsamma ombyggnationer och säkerställer att projektet kan få slutbevis."
  },
  {
    question: "Behöver jag både KA och BAS för mitt projekt?",
    answer: "Det beror på projektets storlek och komplexitet. Många projekt kräver både KA och BAS-funktioner. Vi erbjuder kombinerade paket som är kostnadseffektiva och säkerställer att alla krav uppfylls."
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
      
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Vanliga Frågor
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Här hittar du svar på de vanligaste frågorna om Kontrollansvarig, BAS och byggprocessen
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4 border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left bg-slate-50 hover:bg-slate-100 transition-colors flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 py-4 bg-white border-t border-slate-200">
                    <p className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Har du fler frågor? Vi hjälper gärna till!
            </p>
            <a 
              href="tel:+46761118447"
              className="inline-flex items-center px-6 py-3 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Ring oss: 076-111 84 47
            </a>
          </div>
        </div>
      </section>
    </>
  );
};