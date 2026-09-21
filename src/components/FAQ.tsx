import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

// Native disclosure keeps every answer in prerendered HTML and works without JavaScript.
export const FAQ = ({ items, title = "Vanliga frågor", className = "" }: FAQProps) => {
  if (items.length === 0) return null;

  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">{title}</h2>
          <div className="space-y-4">
            {items.map((item, index) => (
              <details key={index} className="group bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <summary className="w-full cursor-pointer list-none px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary [&::-webkit-details-marker]:hidden">
                  <h3 className="font-semibold text-slate-900 pr-4">{item.question}</h3>
                  <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                  {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { faqData } from '@/content/faq';
