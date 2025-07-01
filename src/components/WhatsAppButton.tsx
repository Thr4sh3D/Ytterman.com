import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = '46761118447'; // Swedish format without the leading 0
  const message = 'Hej! Jag är intresserad av dina tjänster och skulle vilja veta mer.';
  
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Kontakta oss via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};