import { useCallback } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const useGoogleAdsTracking = () => {
  const trackFormSubmission = useCallback((formType: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with actual conversion ID
        event_category: 'form_submission',
        event_label: formType,
        value: 1
      });
    }
  }, []);

  const trackPhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/PHONE_CONVERSION_LABEL', // Replace with actual conversion ID
        event_category: 'phone_click',
        value: 1
      });
    }
  }, []);

  return {
    trackFormSubmission,
    trackPhoneClick
  };
};