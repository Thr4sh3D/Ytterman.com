// Google Ads conversion tracking utility
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export interface ConversionConfig {
  conversionId?: string;
  conversionLabel?: string;
  value?: number;
  currency?: string;
}

/**
 * Track a conversion event in Google Ads
 * @param config - Optional conversion configuration
 */
export const trackConversion = (config: ConversionConfig = {}) => {
  // Check if gtag is available
  if (typeof window !== 'undefined' && window.gtag) {
    const {
      conversionId,
      conversionLabel,
      value,
      currency = 'SEK'
    } = config;

    // Base conversion event
    const conversionData: any = {
      send_to: conversionId ? `AW-17296101730/${conversionId}` : 'AW-17296101730'
    };

    // Add optional parameters only if value is specified
    if (value !== undefined && value > 0) {
      conversionData.value = value;
      conversionData.currency = currency;
    }

    if (conversionLabel) {
      conversionData.custom_parameters = {
        conversion_label: conversionLabel
      };
    }

    // Track the conversion
    window.gtag('event', 'conversion', conversionData);
    
    console.log('Google Ads conversion tracked:', conversionData);
  } else {
    console.warn('Google Ads gtag not available - conversion not tracked');
  }
};

/**
 * Track a contact form submission conversion (lead generation)
 * @param formType - Type of form submitted (e.g., 'contact', 'quote_request')
 */
export const trackContactFormConversion = (formType: string = 'contact') => {
  trackConversion({
    conversionLabel: `contact_form_${formType}`
    // Inget värde - vi spårar bara att formuläret skickades in
  });
};

/**
 * Track a phone call conversion
 */
export const trackPhoneCallConversion = () => {
  trackConversion({
    conversionLabel: 'phone_call'
  });
};

/**
 * Track an email click conversion
 */
export const trackEmailClickConversion = () => {
  trackConversion({
    conversionLabel: 'email_click'
  });
};