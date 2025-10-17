import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie, Shield, BarChart3 } from 'lucide-react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface ConsentState {
  analytics_storage: 'granted' | 'denied';
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
  functionality_storage: 'granted' | 'denied';
  personalization_storage: 'granted' | 'denied';
  security_storage: 'granted' | 'denied';
}

const GoogleConsentMode = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Initialize Google Consent Mode v2
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function() {
        window.dataLayer.push(arguments);
      };

      // Set default consent state (denied by default for GDPR compliance)
      window.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        functionality_storage: 'granted',
        personalization_storage: 'denied',
        security_storage: 'granted',
        wait_for_update: 500,
      });

      // Check if user has already made a choice
      const consentChoice = localStorage.getItem('google-consent-choice');
      if (consentChoice) {
        const consent = JSON.parse(consentChoice);
        updateConsent(consent);
      } else {
        // Show banner if no choice has been made
        setShowBanner(true);
      }
    }
  }, []);

  const updateConsent = (consent: ConsentState) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', consent);
    }
  };

  const handleAcceptAll = () => {
    const consent: ConsentState = {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
      security_storage: 'granted',
    };

    updateConsent(consent);
    localStorage.setItem('google-consent-choice', JSON.stringify(consent));
    localStorage.setItem('google-consent-timestamp', new Date().toISOString());
    setShowBanner(false);
    setShowDetails(false);
  };

  const handleRejectAll = () => {
    const consent: ConsentState = {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'granted',
      personalization_storage: 'denied',
      security_storage: 'granted',
    };

    updateConsent(consent);
    localStorage.setItem('google-consent-choice', JSON.stringify(consent));
    localStorage.setItem('google-consent-timestamp', new Date().toISOString());
    setShowBanner(false);
    setShowDetails(false);
  };

  const handleCustomChoice = (customConsent: Partial<ConsentState>) => {
    const consent: ConsentState = {
      analytics_storage: customConsent.analytics_storage || 'denied',
      ad_storage: customConsent.ad_storage || 'denied',
      ad_user_data: customConsent.ad_user_data || 'denied',
      ad_personalization: customConsent.ad_personalization || 'denied',
      functionality_storage: 'granted',
      personalization_storage: customConsent.personalization_storage || 'denied',
      security_storage: 'granted',
    };

    updateConsent(consent);
    localStorage.setItem('google-consent-choice', JSON.stringify(consent));
    localStorage.setItem('google-consent-timestamp', new Date().toISOString());
    setShowBanner(false);
    setShowDetails(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-50" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
        <div className="container mx-auto px-4 py-6">
          {!showDetails ? (
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Vi använder cookies för att förbättra din upplevelse
                  </h3>
                  <p className="text-sm text-slate-600">
                    Vi använder cookies och liknande tekniker för att analysera trafik, 
                    personalisera innehåll och annonser, samt tillhandahålla sociala mediefunktioner. 
                    Du kan välja vilka cookies du accepterar.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button
                  onClick={() => setShowDetails(true)}
                  variant="outline"
                  className="text-sm"
                >
                  Anpassa inställningar
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="text-sm"
                >
                  Avvisa alla
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="earth-gradient text-white text-sm"
                >
                  Acceptera alla
                </Button>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Cookie-inställningar
                </h3>
                <Button
                  onClick={() => setShowDetails(false)}
                  variant="ghost"
                  size="sm"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <CookieCategory
                  icon={Shield}
                  title="Nödvändiga cookies"
                  description="Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt."
                  required={true}
                  enabled={true}
                />
                
                <CookieCategory
                  icon={BarChart3}
                  title="Analys och prestanda"
                  description="Hjälper oss att förstå hur besökare interagerar med webbplatsen."
                  required={false}
                  onToggle={(enabled) => {
                    // Handle analytics toggle
                  }}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                >
                  Avvisa alla
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="earth-gradient text-white"
                >
                  Acceptera alla
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

interface CookieCategoryProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  required: boolean;
  enabled?: boolean;
  onToggle?: (enabled: boolean) => void;
}

const CookieCategory = ({ 
  icon: Icon, 
  title, 
  description, 
  required, 
  enabled = false,
  onToggle 
}: CookieCategoryProps) => {
  return (
    <div className="bg-slate-50 p-4 rounded-lg">
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 text-primary mt-1" />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-slate-900">{title}</h4>
            {required ? (
              <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded">
                Krävs
              </span>
            ) : (
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={enabled}
                  onChange={(e) => onToggle?.(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            )}
          </div>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GoogleConsentMode;