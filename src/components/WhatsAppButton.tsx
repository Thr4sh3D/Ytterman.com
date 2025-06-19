import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/46700000000?text=Hej! Jag är intresserad av dina tjänster som kontrollansvarig och BAS.', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whatsapp-pulse flex items-center justify-center"
      aria-label="Kontakta via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};