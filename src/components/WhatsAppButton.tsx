import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hej Tobias! Jag är intresserad av dina tjänster som kontrollansvarig och BAS-P/BAS-U. Kan vi boka ett förutsättningslöst samtal?');
    window.open(`https://wa.me/46761118447?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whatsapp-pulse flex items-center justify-center"
      aria-label="Kontakta via WhatsApp"
      title="Chatta med Tobias på WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};