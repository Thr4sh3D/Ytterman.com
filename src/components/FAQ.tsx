import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

export const FAQ = ({ items, title = "Vanliga frågor", className = "" }: FAQProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  if (items.length === 0) return null;

  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            {title}
          </h2>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  aria-expanded={openItems.includes(index)}
                >
                  <h3 className="font-semibold text-slate-900 pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Predefined FAQ data for different pages
export const faqData = {
  kontrollansvarig: [
    {
      question: "Vad gör en kontrollansvarig (KA)?",
      answer: "En kontrollansvarig ansvarar för teknisk kontroll under byggprocessen, upprättar kontrollplan, genomför slutbesiktning och utfärdar slutbevis enligt Plan- och bygglagen (PBL)."
    },
    {
      question: "När behövs en kontrollansvarig?",
      answer: "Kontrollansvarig krävs för de flesta byggprojekt enligt PBL, särskilt för nybyggnation, större ombyggnader och när bygglov krävs. Vi hjälper dig bedöma om ditt projekt kräver KA."
    },
    {
      question: "Vad kostar kontrollansvarig-tjänster?",
      answer: "Våra KA-tjänster börjar från 15,000 SEK beroende på projektets omfattning och komplexitet. Vi ger alltid fast pris efter en kostnadsfri konsultation."
    },
    {
      question: "Hur lång tid tar kontrollprocessen?",
      answer: "Tiden varierar beroende på projektets storlek, men en typisk kontrollprocess tar 2-4 veckor från kontrollplan till slutbevis. Vi arbetar effektivt för att inte försena ditt projekt."
    }
  ],
  basP: [
    {
      question: "Vad är BAS-P och när behövs det?",
      answer: "BAS-P (Byggarbetsmiljösamordnare under Projektering) krävs när flera entreprenörer ska arbeta på samma byggarbetsplats. BAS-P ansvarar för arbetsmiljösamordning under projekteringsfasen."
    },
    {
      question: "Vad ingår i BAS-P tjänsten?",
      answer: "BAS-P inkluderar upprättande av arbetsmiljöplan, riskbedömning, samordning mellan projektörer och säkerställande av att arbetsmiljöaspekter beaktas redan i projekteringsfasen."
    },
    {
      question: "Skillnad mellan BAS-P och BAS-U?",
      answer: "BAS-P arbetar under projekteringsfasen medan BAS-U arbetar under byggfasen. BAS-P fokuserar på planering och förebyggande medan BAS-U fokuserar på genomförande och uppföljning."
    }
  ],
  basU: [
    {
      question: "Vad gör BAS-U på byggarbetsplatsen?",
      answer: "BAS-U genomför regelbundna säkerhetsronder, samordnar arbetsmiljöarbetet mellan entreprenörer, följer upp arbetsmiljöplanen och rapporterar incidenter."
    },
    {
      question: "Hur ofta besöker BAS-U byggarbetsplatsen?",
      answer: "Besöksfrekvensen beror på projektets omfattning och riskbild, men vanligtvis 1-2 gånger per vecka under aktiva byggfaser. Vi anpassar schemat efter projektets behov."
    },
    {
      question: "Vad händer om arbetsmiljöbrister upptäcks?",
      answer: "BAS-U rapporterar brister direkt till ansvarig entreprenör och följer upp att åtgärder vidtas. Vid allvarliga brister kan arbetet stoppas tills säkerheten är återställd."
    }
  ],
  general: [
    {
      question: "Vilka områden täcker ni?",
      answer: "Vi verkar i hela Västernorrland med fokus på Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors. Vi hjälper även kunder i övriga delar av regionen."
    },
    {
      question: "Hur snabbt kan ni starta ett uppdrag?",
      answer: "Vi strävar efter att kunna starta inom 1-2 veckor efter bekräftad beställning. För akuta ärenden kan vi ofta ordna snabbare start."
    },
    {
      question: "Erbjuder ni kostnadsfri konsultation?",
      answer: "Ja, vi erbjuder alltid en kostnadsfri första konsultation där vi går igenom ditt projekt och ger råd om vilka tjänster som behövs."
    }
  ]
};