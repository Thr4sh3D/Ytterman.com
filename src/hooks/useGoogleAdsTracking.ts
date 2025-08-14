import { useCallback } from 'react';
import { 
  trackConversion, 
  trackContactFormConversion, 
  trackPhoneCallConversion, 
  trackEmailClickConversion,
  ConversionConfig 
} from '@/utils/googleAdsTracking';

/**
 * Hook for Google Ads conversion tracking
 */
export const useGoogleAdsTracking = () => {
  const trackFormSubmission = useCallback((formType: string = 'contact', value?: number) => {
    trackContactFormConversion(formType, value);
  }, []);

  const trackPhoneCall = useCallback(() => {
    trackPhoneCallConversion();
  }, []);

  const trackEmailClick = useCallback(() => {
    trackEmailClickConversion();
  }, []);

  const trackCustomConversion = useCallback((config: ConversionConfig) => {
    trackConversion(config);
  }, []);

  return {
    trackFormSubmission,
    trackPhoneCall,
    trackEmailClick,
    trackCustomConversion
  };
};