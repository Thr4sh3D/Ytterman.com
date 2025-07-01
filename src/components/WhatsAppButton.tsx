import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = '46701234567'; // Replace with your actual WhatsApp number
  const message = 'Hej! Jag är intresserad av era tjänster.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Kontakta oss via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};