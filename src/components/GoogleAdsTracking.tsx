import { useEffect } from 'react';
import { useGoogleAdsTracking } from '@/hooks/useGoogleAdsTracking';

interface GoogleAdsTrackingProps {
  conversionId?: string;
  phoneConversionLabel?: string;
  formConversionLabel?: string;
}

const GoogleAdsTracking = ({ 
  conversionId = 'AW-CONVERSION_ID',
  phoneConversionLabel = 'PHONE_CONVERSION_LABEL',
  formConversionLabel = 'FORM_CONVERSION_LABEL'
}: GoogleAdsTrackingProps) => {
  const { trackPageView } = useGoogleAdsTracking();

  useEffect(() => {
    // Ladda Google Ads script
    const loadGoogleAds = () => {
      if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${conversionId}"]`)) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`;
        document.head.appendChild(script);

        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          window.gtag = function() {
            window.dataLayer.push(arguments);
          };
          window.gtag('js', new Date());
          window.gtag('config', conversionId);
          
          // Spåra initial sidvisning
          trackPageView();
        };
      }
    };

    loadGoogleAds();
  }, [conversionId, trackPageView]);

  // Lägg till event listeners för automatisk spårning
  useEffect(() => {
    const handlePhoneClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const phoneLink = target.closest('a[href^="tel:"]') as HTMLAnchorElement;
      
      if (phoneLink) {
        const phoneNumber = phoneLink.href.replace('tel:', '');
        if (window.gtag) {
          window.gtag('event', 'phone_click', {
            event_category: 'engagement',
            event_label: phoneNumber,
            phone_number: phoneNumber
          });
        }
        
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'phone_click',
            phone_number: phoneNumber,
            event_category: 'engagement',
            event_action: 'click'
          });
        }
      }
    };

    // Lägg till click listener för telefonnummer
    document.addEventListener('click', handlePhoneClick);

    return () => {
      document.removeEventListener('click', handlePhoneClick);
    };
  }, []);

  return null; // Denna komponent renderar inget visuellt
};

export default GoogleAdsTracking;