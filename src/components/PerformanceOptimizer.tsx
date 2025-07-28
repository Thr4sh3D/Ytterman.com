import { useEffect } from 'react';

export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload kritiska resurser
    const preloadCriticalResources = () => {
      // Preload viktiga sidor
      const criticalPages = ['/tjanster', '/kontakt'];
      
      criticalPages.forEach(page => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        document.head.appendChild(link);
      });
    };

    // Optimera bilder med lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    // Service Worker för caching (om tillgängligt)
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        try {
          await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registrerad');
        } catch (error) {
          console.log('Service Worker registrering misslyckades:', error);
        }
      }
    };

    // Kör optimeringar
    preloadCriticalResources();
    optimizeImages();
    registerServiceWorker();

    // Cleanup för minneshantering
    return () => {
      // Cleanup kod om nödvändigt
    };
  }, []);

  return null; // Denna komponent renderar inget
};