import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppButton = () => {
  const phoneNumber = "46761118447"; // Swedish format without +
  const message = "Hej! Jag är intresserad av era tjänster och skulle vilja veta mer.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-4"
      >
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kontakta oss via WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};