import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { BUSINESS_COPY } from '@/config/company';

interface ContactProps {
  selectedPackage?: string;
  prefilledMessage?: string;
}

export const Contact = (_props: ContactProps) => (
  <section id="kontakt" className="bg-secondary/30 py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-5 text-3xl font-bold text-foreground lg:text-4xl">
          Få rätt upplägg från början
        </h2>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Ett kort tvåstegsformulär samlar det som behövs för en första bedömning. Det minskar
          följdfrågorna och gör det lättare att lämna en tydlig offert. {BUSINESS_COPY.preferredContact}
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </section>
);
