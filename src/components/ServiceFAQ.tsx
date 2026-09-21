import { FAQ } from '@/components/FAQ';

interface ServiceFAQProps {
  items: { question: string; answer: string }[];
  title?: string;
}

export const ServiceFAQ = ({ items, title = 'Vanliga frågor' }: ServiceFAQProps) => (
  <FAQ items={items} title={title} />
);
