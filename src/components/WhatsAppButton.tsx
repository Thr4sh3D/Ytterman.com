import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const phoneNumber = '46761118447';
    const message = encodeURIComponent('Hej! Jag är intresserad av dina KA och BAS-tjänster.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={openWhatsApp}
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Kontakta via WhatsApp</span>
      </Button>
    </div>
  );
};