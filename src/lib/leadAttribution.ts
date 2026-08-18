export interface LeadAttribution {
  landingPage: string;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

const STORAGE_KEY = 'ytterman-lead-attribution';
const trimValue = (value: string | null) => value?.trim().slice(0, 120) || undefined;

export const captureLeadAttribution = () => {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  let existing: LeadAttribution | null = null;
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    existing = stored ? JSON.parse(stored) as LeadAttribution : null;
  } catch {
    existing = null;
  }

  const attribution: LeadAttribution = {
    landingPage: existing?.landingPage || window.location.pathname,
    source: trimValue(params.get('source')),
    utmSource: trimValue(params.get('utm_source')),
    utmMedium: trimValue(params.get('utm_medium')),
    utmCampaign: trimValue(params.get('utm_campaign')),
    utmContent: trimValue(params.get('utm_content')),
    utmTerm: trimValue(params.get('utm_term')),
  };

  const hasCampaignData = Object.entries(attribution).some(([key, value]) => key !== 'landingPage' && value);
  if (!existing || hasCampaignData) {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...existing, ...attribution }));
  }
};

export const readLeadAttribution = (): LeadAttribution | null => {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.sessionStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) as LeadAttribution : null;
  } catch {
    return null;
  }
};
