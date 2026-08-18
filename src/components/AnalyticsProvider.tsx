import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ANALYTICS_CONFIG } from '@/config/analytics';
import {
  CONSENT_CHANGED_EVENT,
  readConsent,
  type ConsentPreferences,
} from '@/lib/consent';
import { captureLeadAttribution } from '@/lib/leadAttribution';

type EventValue = string | number | boolean;
type EventParams = Record<string, EventValue | undefined>;

const GOOGLE_SCRIPT_ID = 'ytterman-google-tag';
const ALLOWED_EVENTS = new Set([
  'page_view',
  'generate_lead',
  'form_submit',
  'button_click',
  'service_interest',
  'file_download',
  'phone_click',
]);
const ALLOWED_PARAMETERS = new Set([
  'page_path',
  'form_type',
  'project_type',
  'has_phone',
  'button_id',
  'button_location',
  'service_type',
  'file_type',
  'value',
  'currency',
  'send_to',
]);
const PII_KEY = /(name|email|phone_number|message|address|person|user_id)/i;

const ensureGtag = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer.push(args));
};

const consentCommand = (preferences: ConsentPreferences) => ({
  analytics_storage: preferences.analytics ? 'granted' : 'denied',
  ad_storage: preferences.marketing ? 'granted' : 'denied',
  ad_user_data: preferences.marketing ? 'granted' : 'denied',
  ad_personalization: preferences.marketing ? 'granted' : 'denied',
  functionality_storage: 'granted',
  personalization_storage: 'denied',
  security_storage: 'granted',
});

const deleteGoogleCookies = () => {
  const domains = ['', window.location.hostname, '.ytterman.com'];
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]?.trim();
    if (!name || !/^(_ga|_gid|_gat|_gcl_)/.test(name)) return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}; SameSite=Lax`;
    });
  });
};

const removeGoogleTag = () => {
  document.getElementById(GOOGLE_SCRIPT_ID)?.remove();
  deleteGoogleCookies();
};

const loadGoogleTag = (preferences: ConsentPreferences) => {
  const primaryId = preferences.analytics
    ? ANALYTICS_CONFIG.gaMeasurementId || (preferences.marketing ? ANALYTICS_CONFIG.googleAdsId : undefined)
    : preferences.marketing ? ANALYTICS_CONFIG.googleAdsId : undefined;

  if (!primaryId) return;

  ensureGtag();
  window.gtag?.('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  });
  window.gtag?.('consent', 'update', consentCommand(preferences));
  window.gtag?.('js', new Date());

  if (preferences.analytics && ANALYTICS_CONFIG.gaMeasurementId) {
    window.gtag?.('config', ANALYTICS_CONFIG.gaMeasurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
  }
  if (preferences.marketing && ANALYTICS_CONFIG.googleAdsId) {
    window.gtag?.('config', ANALYTICS_CONFIG.googleAdsId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
  }

  if (!document.getElementById(GOOGLE_SCRIPT_ID)) {
    const script = document.createElement('script');
    script.id = GOOGLE_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryId)}`;
    document.head.appendChild(script);
  }
};

const applyConsent = (preferences: ConsentPreferences) => {
  if (!preferences.analytics && !preferences.marketing) {
    window.gtag?.('consent', 'update', consentCommand(preferences));
    removeGoogleTag();
    return;
  }

  loadGoogleTag(preferences);
  window.gtag?.('consent', 'update', consentCommand(preferences));
};

const sanitizeParams = (params: EventParams) => Object.fromEntries(
  Object.entries(params)
    .filter(([key, value]) => (
      ALLOWED_PARAMETERS.has(key)
      && !PII_KEY.test(key)
      && value !== undefined
    ))
    .map(([key, value]) => [key, typeof value === 'string' ? value.slice(0, 100) : value]),
);

export const trackAnalyticsEvent = (eventName: string, params: EventParams = {}) => {
  const consent = readConsent();
  if (!consent?.analytics || !ALLOWED_EVENTS.has(eventName) || !window.gtag) return;
  window.gtag('event', eventName, sanitizeParams(params));
};

export const trackLead = (params: Pick<EventParams, 'form_type' | 'project_type' | 'has_phone'>) => {
  const consent = readConsent();
  if (!consent) return;

  if (consent.analytics) {
    trackAnalyticsEvent('generate_lead', params);
  }

  const { googleAdsId, googleAdsLeadLabel } = ANALYTICS_CONFIG;
  if (consent.marketing && googleAdsId && googleAdsLeadLabel && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${googleAdsId}/${googleAdsLeadLabel}`,
    });
  }
};

export const AnalyticsProvider = () => {
  const location = useLocation();

  useEffect(() => {
    const storedConsent = readConsent();
    if (storedConsent) applyConsent(storedConsent);
    else removeGoogleTag();

    const handleConsentChange = (event: Event) => {
      const preferences = (event as CustomEvent<ConsentPreferences>).detail;
      applyConsent(preferences);
      if (preferences.analytics) {
        trackAnalyticsEvent('page_view', { page_path: window.location.pathname });
      }
    };

    window.addEventListener(CONSENT_CHANGED_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, handleConsentChange);
  }, []);

  useEffect(() => {
    captureLeadAttribution();
    trackAnalyticsEvent('page_view', { page_path: location.pathname });
  }, [location.pathname, location.search]);

  return null;
};
