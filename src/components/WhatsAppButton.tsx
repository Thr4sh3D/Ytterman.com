import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = "46761118447";
  const message = "Hej! Jag är intresserad av era tjänster inom kontrollansvarig/BAS.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Kontakta oss via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};