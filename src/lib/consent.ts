export interface ConsentPreferences {
  version: 1;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
}

export const CONSENT_STORAGE_KEY = 'ytterman-consent-v1';
export const CONSENT_CHANGED_EVENT = 'ytterman:consent-changed';
export const OPEN_CONSENT_SETTINGS_EVENT = 'ytterman:open-consent-settings';

export const readConsent = (): ConsentPreferences | null => {
  if (typeof window === 'undefined') return null;

  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!value) return null;
    const parsed = JSON.parse(value) as Partial<ConsentPreferences>;
    if (
      parsed.version !== 1
      || typeof parsed.analytics !== 'boolean'
      || typeof parsed.marketing !== 'boolean'
      || typeof parsed.decidedAt !== 'string'
    ) return null;
    return parsed as ConsentPreferences;
  } catch {
    return null;
  }
};

export const saveConsent = (choices: Pick<ConsentPreferences, 'analytics' | 'marketing'>) => {
  const preferences: ConsentPreferences = {
    version: 1,
    analytics: choices.analytics,
    marketing: choices.marketing,
    decidedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
  window.dispatchEvent(new CustomEvent<ConsentPreferences>(CONSENT_CHANGED_EVENT, { detail: preferences }));
  return preferences;
};

export const openConsentSettings = () => {
  window.dispatchEvent(new Event(OPEN_CONSENT_SETTINGS_EVENT));
};
