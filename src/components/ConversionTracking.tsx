import { useEffect } from 'react';

interface ConversionTrackingProps {
  eventType: 'form_submit' | 'phone_click' | 'email_click' | 'quote_request';
  service?: string;
  value?: number;
  customData?: Record<string, any>;
}

export const ConversionTracking = ({ 
  eventType, 
  service = 'general',
  value = 1.0,
  customData = {}
}: ConversionTrackingProps) => {
  useEffect(() => {
    // Google Ads konvertering
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL', // Ersätt med dina värden
        'value': value,
        'currency': 'SEK',
        'transaction_id': `${Date.now()}-${eventType}-${service}`,
        'custom_parameters': {
          'event_type': eventType,
          'service_type': service,
          ...customData
        }
      });

      // Google Analytics 4 event
      (window as any).gtag('event', 'generate_lead', {
        'event_category': 'Contact',
        'event_label': `${eventType}_${service}`,
        'value': value,
        'custom_parameters': customData
      });
    }

    // Facebook Pixel (om du använder det)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: service,
        content_category: eventType,
        value: value,
        currency: 'SEK'
      });
    }
  }, [eventType, service, value, customData]);

  return null;
};

// Hook för enkel användning
export const useConversionTracking = () => {
  const trackConversion = (
    eventType: ConversionTrackingProps['eventType'],
    service?: string,
    value?: number,
    customData?: Record<string, any>
  ) => {
    // Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
        'value': value || 1.0,
        'currency': 'SEK',
        'transaction_id': `${Date.now()}-${eventType}-${service || 'general'}`,
        'custom_parameters': {
          'event_type': eventType,
          'service_type': service || 'general',
          ...customData
        }
      });
    }
  };

  return { trackConversion };
};