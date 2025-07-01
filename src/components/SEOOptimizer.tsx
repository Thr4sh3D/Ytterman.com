import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SEOOptimizer = () => {
  const location = useLocation();

  useEffect(() => {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'font';
    preloadLink.type = 'font/woff2';
    preloadLink.crossOrigin = 'anonymous';
    preloadLink.href = '/fonts/inter-var.woff2';
    document.head.appendChild(preloadLink);

    // Add structured data for current page
    const addStructuredData = () => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      
      const baseData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ytterman",
        "url": "https://ytterman.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ytterman.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };

      script.textContent = JSON.stringify(baseData);
      document.head.appendChild(script);
    };

    addStructuredData();

    return () => {
      imageObserver.disconnect();
    };
  }, [location]);

  return null;
};