import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  items: FAQItem[];
  title?: string;
}

export const ServiceFAQ = ({ items, title = "Vanliga frågor" }: ServiceFAQProps) => {
  return (
    <section className="py-20 bg-slate-50" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="text-4xl font-bold text-slate-900 mb-12 text-center">
            {title}
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {items.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-slate-200 px-6"
              >
                <AccordionTrigger 
                  className="text-left text-slate-700 hover:text-slate-900 py-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-expanded="false"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};