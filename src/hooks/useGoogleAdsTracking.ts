import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useGoogleAdsTracking = () => {
  useEffect(() => {
    // Initialize gtag if not already done
    if (typeof window !== 'undefined' && !window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
    }
  }, []);

  const trackConversion = (conversionId: string, conversionLabel?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const conversionData: any = {
        send_to: conversionLabel ? `${conversionId}/${conversionLabel}` : conversionId,
      };
      
      if (value) {
        conversionData.value = value;
        conversionData.currency = 'SEK';
      }
      
      window.gtag('event', 'conversion', conversionData);
    }
  };

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  return {
    trackConversion,
    trackEvent,
  };
};