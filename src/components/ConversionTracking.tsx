import { useEffect } from 'react';

interface ConversionTrackingProps {
  conversionId?: string;
  conversionLabel?: string;
  value?: number;
  currency?: string;
}

export const ConversionTracking = ({ 
  conversionId = 'AW-XXXXXXXXX', // Ersätt med din Google Ads Conversion ID
  conversionLabel = 'contact-form', // Ersätt med din Conversion Label
  value = 0,
  currency = 'SEK'
}: ConversionTrackingProps) => {
  
  useEffect(() => {
    // Ladda Google Ads konverteringsskript om det inte redan finns
    if (!window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`;
      document.head.appendChild(script);

      // Initiera gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', conversionId);
    }
  }, [conversionId]);

  return null; // Denna komponent renderar inget visuellt
};

// Funktion för att spåra konvertering
export const trackConversion = (
  conversionId: string = 'AW-XXXXXXXXX', // Ersätt med din Google Ads Conversion ID
  conversionLabel: string = 'contact-form', // Ersätt med din Conversion Label
  value: number = 0,
  currency: string = 'SEK'
) => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': `${conversionId}/${conversionLabel}`,
      'value': value,
      'currency': currency,
      'transaction_id': Date.now().toString() // Unik ID för varje konvertering
    });
    
    console.log('Google Ads konvertering spårad:', {
      conversionId,
      conversionLabel,
      value,
      currency
    });
  } else {
    console.warn('Google Ads gtag inte tillgängligt för konverteringsspårning');
  }
};

// TypeScript deklarationer för gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}