import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const phoneNumber = '46761118447';
    const message = encodeURIComponent('Hej Tobias! Jag har sett din webbsida och skulle vilja veta mer om dina tjänster som kontrollansvarig och BAS.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};