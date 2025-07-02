import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "46701234567"; // Replace with actual WhatsApp number
    const message = "Hej! Jag är intresserad av era tjänster inom byggkontroll.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Kontakta oss via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};