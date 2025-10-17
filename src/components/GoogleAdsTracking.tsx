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
    // Spåra initial sidvisning när komponenten laddas
    trackPageView();
  }, [trackPageView]);

  // Lägg till automatisk spårning för telefonklick
  useEffect(() => {
    const handlePhoneClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const phoneLink = target.closest('a[href^="tel:"]') as HTMLAnchorElement;
      
      if (phoneLink) {
        const phoneNumber = phoneLink.href.replace('tel:', '');
        
        // Skicka till GTM dataLayer
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'phone_click_auto',
            event_category: 'engagement',
            event_action: 'click',
            event_label: phoneNumber,
            phone_number: phoneNumber,
            click_element: phoneLink.textContent || phoneNumber,
            page_location: window.location.href,
            timestamp: new Date().toISOString()
          });
        }
      }
    };

    // Lägg till automatisk spårning för externa länkar
    const handleExternalLinkClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a') as HTMLAnchorElement;
      
      if (link && link.href && !link.href.includes(window.location.hostname)) {
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'external_link_click',
            event_category: 'engagement',
            event_action: 'click',
            event_label: link.href,
            link_url: link.href,
            link_text: link.textContent || link.href,
            page_location: window.location.href,
            timestamp: new Date().toISOString()
          });
        }
      }
    };

    // Lägg till automatisk spårning för scroll depth
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Spåra vid 25%, 50%, 75%, 90% scroll
      const milestones = [25, 50, 75, 90];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && maxScrollDepth < milestone) {
          maxScrollDepth = milestone;
          if (window.dataLayer) {
            window.dataLayer.push({
              event: 'scroll_depth',
              event_category: 'engagement',
              event_action: 'scroll',
              event_label: `${milestone}%`,
              scroll_depth: milestone,
              page_location: window.location.href,
              timestamp: new Date().toISOString()
            });
          }
        }
      });
    };

    // Lägg till event listeners
    document.addEventListener('click', handlePhoneClick);
    document.addEventListener('click', handleExternalLinkClick);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handlePhoneClick);
      document.removeEventListener('click', handleExternalLinkClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default GoogleAdsTracking;