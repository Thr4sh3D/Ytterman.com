import { useEffect } from 'react';

export const AccessibilityEnhancements = () => {
  useEffect(() => {
    // Förbättra fokushantering
    const enhanceFocusManagement = () => {
      // Lägg till fokusringar för tangentbordsnavigering
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    // Förbättra formulärtillgänglighet
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form');
      
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
          const label = form.querySelector(`label[for="${input.id}"]`);
          if (!label && input.getAttribute('placeholder')) {
            // Lägg till aria-label om ingen label finns
            input.setAttribute('aria-label', input.getAttribute('placeholder') || '');
          }
        });
      });
    };

    // Förbättra knappars tillgänglighet
    const enhanceButtonAccessibility = () => {
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      
      buttons.forEach(button => {
        if (!button.textContent?.trim()) {
          // Lägg till aria-label för knappar utan text
          const icon = button.querySelector('svg');
          if (icon) {
            button.setAttribute('aria-label', 'Knapp');
          }
        }
      });
    };

    // Lägg till skip-länk för tangentbordsanvändare
    const addSkipLink = () => {
      if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded z-50';
        skipLink.textContent = 'Hoppa till huvudinnehåll';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    };

    // Kör förbättringar
    enhanceFocusManagement();
    enhanceFormAccessibility();
    enhanceButtonAccessibility();
    addSkipLink();

    // Lägg till main-content ID om det inte finns
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
    }

  }, []);

  return null;
};