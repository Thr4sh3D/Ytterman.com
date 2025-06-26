import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/46761118447?text=Hej! Jag är intresserad av dina tjänster som kontrollansvarig och BAS.', '_blank');
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Kontakta via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};