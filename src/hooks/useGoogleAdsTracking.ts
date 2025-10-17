import { useEffect } from 'react';

// GTM tracking hook
export const useGoogleAdsTracking = () => {
  useEffect(() => {
    // Initiera dataLayer om det inte redan finns
    window.dataLayer = window.dataLayer || [];
  }, []);

  const trackPhoneClick = (phoneNumber: string) => {
    console.log('Tracking phone click:', phoneNumber);
    
    // Skicka event till GTM dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'phone_click',
        event_category: 'engagement',
        event_action: 'click',
        event_label: phoneNumber,
        phone_number: phoneNumber,
        page_location: window.location.href,
        page_title: document.title,
        timestamp: new Date().toISOString()
      });
    }

    // Fallback för direkt gtag om det finns
    if (window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: phoneNumber,
        phone_number: phoneNumber
      });
    }
  };

  const trackFormSubmission = (formType: string, formData?: any) => {
    console.log('Tracking form submission:', formType, formData);
    
    // Skicka event till GTM dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'form_submit',
        event_category: 'engagement',
        event_action: 'submit',
        event_label: formType,
        form_type: formType,
        form_location: window.location.pathname,
        form_name: formData?.name || '',
        form_project: formData?.project || '',
        form_has_phone: formData?.has_phone || false,
        page_location: window.location.href,
        page_title: document.title,
        timestamp: new Date().toISOString()
      });
    }

    // Fallback för direkt gtag om det finns
    if (window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: formType,
        form_type: formType
      });
    }
  };

  const trackPageView = (pagePath?: string) => {
    const path = pagePath || window.location.pathname;
    
    // Skicka page view till GTM dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: path,
        page_title: document.title,
        page_location: window.location.href,
        timestamp: new Date().toISOString()
      });
    }

    // Fallback för direkt gtag om det finns
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  };

  const trackButtonClick = (buttonText: string, buttonLocation: string) => {
    console.log('Tracking button click:', buttonText, buttonLocation);
    
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        event_category: 'engagement',
        event_action: 'click',
        event_label: buttonText,
        button_text: buttonText,
        button_location: buttonLocation,
        page_location: window.location.href,
        page_title: document.title,
        timestamp: new Date().toISOString()
      });
    }
  };

  const trackServiceInterest = (serviceName: string, serviceType: string) => {
    console.log('Tracking service interest:', serviceName, serviceType);
    
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'service_interest',
        event_category: 'engagement',
        event_action: 'view',
        event_label: serviceName,
        service_name: serviceName,
        service_type: serviceType,
        page_location: window.location.href,
        page_title: document.title,
        timestamp: new Date().toISOString()
      });
    }
  };

  const trackDownload = (fileName: string, fileType: string) => {
    console.log('Tracking download:', fileName, fileType);
    
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'file_download',
        event_category: 'engagement',
        event_action: 'download',
        event_label: fileName,
        file_name: fileName,
        file_type: fileType,
        page_location: window.location.href,
        page_title: document.title,
        timestamp: new Date().toISOString()
      });
    }
  };

  return {
    trackPhoneClick,
    trackFormSubmission,
    trackPageView,
    trackButtonClick,
    trackServiceInterest,
    trackDownload
  };
};

// TypeScript declarations för global dataLayer och gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer: any[];
  }
}