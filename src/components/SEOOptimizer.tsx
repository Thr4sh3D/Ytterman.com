import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SEOOptimizer = () => {
  const location = useLocation();

  useEffect(() => {
    // Uppdatera canonical URL
    const updateCanonicalUrl = () => {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `https://ytterman.com${location.pathname}`);
    };

    // Lägg till strukturerad data för lokalt företag
    const addLocalBusinessSchema = () => {
      if (!document.querySelector('#local-business-schema')) {
        const script = document.createElement('script');
        script.id = 'local-business-schema';
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Ytterman - Kontrollansvarig & BAS",
          "description": "Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare i Västernorrland",
          "url": "https://ytterman.com",
          "telephone": "+46761118447",
          "email": "tobias@ytterman.com",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Västernorrland",
            "addressCountry": "SE"
          },
          "areaServed": [
            "Sundsvall", "Härnösand", "Sollefteå", "Timrå", "Kramfors", "Västernorrland"
          ],
          "serviceType": [
            "Kontrollansvarig", "BAS-P", "BAS-U", "Byggkontroll", "Arbetsmiljösamordning"
          ],
          "priceRange": "12000-25000 SEK",
          "openingHours": "Mo-Fr 08:00-17:00"
        });
        document.head.appendChild(script);
      }
    };

    // Optimera meta-taggar baserat på sida
    const optimizeMetaTags = () => {
      const path = location.pathname;
      let title = '';
      let description = '';

      switch (path) {
        case '/':
          title = 'Ytterman - Kontrollansvarig & BAS i Västernorrland | Certifierad Expert';
          description = 'Certifierad Kontrollansvarig och BAS-P/BAS-U i Västernorrland. 20+ års erfarenhet. Fast pris. Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors.';
          break;
        case '/tjanster':
          title = 'Tjänster - Kontrollansvarig, BAS-P, BAS-U | Ytterman Västernorrland';
          description = 'Kompletta byggtjänster: Kontrollansvarig, BAS-P, BAS-U, bygglovshandlingar. Fast pris, trygg process. Sundsvall, Härnösand, Sollefteå.';
          break;
        case '/kontakt':
          title = 'Kontakt - Kontrollansvarig & BAS Västernorrland | Ring 076-111 84 47';
          description = 'Kontakta Ytterman för kontrollansvarig och BAS-tjänster. Ring 076-111 84 47 eller maila tobias@ytterman.com. Kostnadsfri konsultation.';
          break;
      }

      if (title) {
        document.title = title;
        
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
          metaDescription = document.createElement('meta');
          metaDescription.setAttribute('name', 'description');
          document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);
      }
    };

    updateCanonicalUrl();
    addLocalBusinessSchema();
    optimizeMetaTags();

  }, [location]);

  return null;
};