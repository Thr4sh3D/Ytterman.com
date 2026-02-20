import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
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
                    <div className="text-slate-600 leading-relaxed">
                      {typeof item.answer === 'string' ? (
                        <p>{item.answer}</p>
                      ) : (
                        item.answer
                      )}
                    </div>
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

// Re-export faqData from content file for backwards compatibility
export { faqData } from '@/content/faq';