import { ChevronDown, HelpCircle } from 'lucide-react';
import { pricingFAQ } from '@/content/pricingPackages';

export const PricingFAQ = () => {
  return (
    <>
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
                <details
                  open={index === 0}
                  key={index}
                  className="group bg-slate-50 rounded-lg border-2 border-slate-200 overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <summary className="w-full cursor-pointer list-none px-6 py-5 text-left flex items-center justify-between hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary [&::-webkit-details-marker]:hidden">
                    <h3 className="font-bold text-lg text-slate-900 pr-4">
                      {item.question}
                    </h3>
                    <ChevronDown className="w-6 h-6 text-slate-500 shrink-0 group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-6 pb-5 pt-2">
                      <p className="text-slate-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
