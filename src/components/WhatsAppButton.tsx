import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppButton = () => {
  const phoneNumber = "46761118447"; // Swedish format without +
  const message = "Hej! Jag är intresserad av era byggtjänster och skulle vilja veta mer.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => window.open(whatsappUrl, '_blank')}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        size="sm"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};