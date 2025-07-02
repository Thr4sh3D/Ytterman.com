import { useEffect } from 'react';

interface GoogleAdsTrackingProps {
  conversionId?: string;
  conversionLabel?: string;
}

export const GoogleAdsTracking = ({ 
  conversionId = "AW-17296101730", // Uppdaterat med ditt Google Ads Conversion ID
  conversionLabel = "XXXXXXXXX"  // Ersätt med din Conversion Label när du har den
}: GoogleAdsTrackingProps) => {
  useEffect(() => {
    // Ladda Google Ads script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`;
    document.head.appendChild(script);

    // Initiera gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments);
    }
    
    gtag('js', new Date());
    gtag('config', conversionId);

    // Gör gtag tillgänglig globalt
    (window as any).gtag = gtag;

    return () => {
      // Cleanup om komponenten unmountas
      document.head.removeChild(script);
    };
  }, [conversionId]);

  return null;
};

// Utility function för att spåra konverteringar
export const trackConversion = (
  conversionId: string,
  conversionLabel: string,
  value: number = 1.0,
  currency: string = 'SEK',
  transactionId?: string,
  customParameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': `${conversionId}/${conversionLabel}`,
      'value': value,
      'currency': currency,
      'transaction_id': transactionId || `${Date.now()}-${Math.random()}`,
      'custom_parameters': customParameters || {}
    });
  }
};