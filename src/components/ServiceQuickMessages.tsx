import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceQuickMessagesProps {
  onServiceSelect: (serviceId: string) => void;
}

export const ServiceQuickMessages = ({ onServiceSelect }: ServiceQuickMessagesProps) => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Redo att starta ditt projekt?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig 
          att välja rätt tjänster för ditt byggprojekt.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToContact}
            className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Få kostnadsfri offert
          </Button>
          <a 
            href="mailto:tobias@ytterman.com"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold"
          >
            <Mail className="w-5 h-5 mr-2" />
            tobias@ytterman.com
          </a>
        </div>
      </div>
    </section>
  );
};