import { useEffect } from 'react';

interface GoogleTagManagerProps {
  gtmId: string;
}

const GoogleTagManager = ({ gtmId }: GoogleTagManagerProps) => {
  useEffect(() => {
    // Ladda GTM script om det inte redan finns
    if (!document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${gtmId}"]`)) {
      // GTM Script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(script);

      // Initiera dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });

      // GTM noscript fallback
      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
      iframe.height = '0';
      iframe.width = '0';
      iframe.style.display = 'none';
      iframe.style.visibility = 'hidden';
      noscript.appendChild(iframe);
      document.body.insertBefore(noscript, document.body.firstChild);
    }
  }, [gtmId]);

  return null;
};

export default GoogleTagManager;