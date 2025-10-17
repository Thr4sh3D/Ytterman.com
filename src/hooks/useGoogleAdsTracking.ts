import { useEffect } from 'react';

// Google Ads tracking hook
export const useGoogleAdsTracking = () => {
  useEffect(() => {
    // Ladda Google Ads script om det inte redan finns
    if (!window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID';
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', 'AW-CONVERSION_ID');
    }
  }, []);

  const trackPhoneClick = (phoneNumber: string) => {
    console.log('Tracking phone click:', phoneNumber);
    
    // Google Analytics 4 event
    if (window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: phoneNumber,
        phone_number: phoneNumber,
        custom_parameter_1: 'phone_interaction'
      });
    }

    // Google Ads conversion tracking
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/PHONE_CONVERSION_LABEL',
        value: 1.0,
        currency: 'SEK',
        phone_number: phoneNumber
      });
    }

    // Skicka även till dataLayer för GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'phone_click',
        phone_number: phoneNumber,
        event_category: 'engagement',
        event_action: 'click',
        event_label: phoneNumber
      });
    }
  };

  const trackFormSubmission = (formType: string, formData?: any) => {
    console.log('Tracking form submission:', formType, formData);
    
    // Google Analytics 4 event
    if (window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: formType,
        form_type: formType,
        form_location: window.location.pathname
      });
    }

    // Google Ads conversion tracking
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/FORM_CONVERSION_LABEL',
        value: 5.0,
        currency: 'SEK',
        form_type: formType
      });
    }

    // Skicka även till dataLayer för GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'form_submit',
        form_type: formType,
        form_location: window.location.pathname,
        event_category: 'engagement',
        event_action: 'submit',
        event_label: formType
      });
    }
  };

  const trackPageView = (pagePath?: string) => {
    const path = pagePath || window.location.pathname;
    
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: document.title,
        page_location: window.location.href
      });
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: path,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  };

  return {
    trackPhoneClick,
    trackFormSubmission,
    trackPageView
  };
};

// TypeScript declarations för global gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}