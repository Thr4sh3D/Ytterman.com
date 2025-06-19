import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const phoneNumber = '46761118447';
    const message = 'Hej! Jag är intresserad av dina tjänster som kontrollansvarig/BAS.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Kontakta via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};