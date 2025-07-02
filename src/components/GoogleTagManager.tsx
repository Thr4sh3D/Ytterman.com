import { useEffect } from 'react';

export const GoogleTagManager = () => {
  useEffect(() => {
    // Skapa första script-elementet (async src)
    const scriptSrc = document.createElement('script');
    scriptSrc.async = true;
    scriptSrc.src = "https://www.googletagmanager.com/gtag/js?id=AW-17296101730";
    
    // Skapa andra script-elementet (inline script)
    const scriptInline = document.createElement('script');
    scriptInline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17296101730');
    `;
    
    // Lägg till scripten direkt efter head-elementet
    const head = document.getElementsByTagName('head')[0];
    head.insertBefore(scriptSrc, head.firstChild);
    head.insertBefore(scriptInline, head.firstChild.nextSibling);
    
    return () => {
      // Rensa upp om komponenten unmountas
      try {
        head.removeChild(scriptSrc);
        head.removeChild(scriptInline);
      } catch (e) {
        console.error('Error removing Google tag scripts:', e);
      }
    };
  }, []);

  return null;
};