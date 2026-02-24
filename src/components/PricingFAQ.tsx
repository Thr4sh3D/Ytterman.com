import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { pricingFAQ } from '@/content/pricingPackages';

export const PricingFAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Generate FAQPage Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pricingFAQ.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 earth-gradient rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-7 h-7 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Vanliga frågor om priser
              </h2>
              <p className="text-lg text-slate-600">
                Svar på vanliga frågor om våra paket och prissättning
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {pricingFAQ.map((item, index) => (
                <div 
                  key={index}
                  className="bg-slate-50 rounded-lg border-2 border-slate-200 overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-100 transition-colors"
                    aria-expanded={openItems.includes(index)}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="font-bold text-lg text-slate-900 pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-6 h-6 text-primary" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-slate-500" />
                      )}
                    </div>
                  </button>
                  {openItems.includes(index) && (
                    <div 
                      id={`faq-answer-${index}`}
                      className="px-6 pb-5 pt-2"
                    >
                      <p className="text-slate-700 leading-relaxed">
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
    </>
  );
};
