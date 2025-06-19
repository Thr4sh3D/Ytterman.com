import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const phoneNumber = '46761118447';
    const message = 'Hej! Jag är intresserad av dina KA/BAS-tjänster.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};