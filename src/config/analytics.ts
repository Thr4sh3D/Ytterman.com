const clean = (value: string | undefined) => value?.trim() || undefined;

const gaId = clean(import.meta.env.VITE_GA_MEASUREMENT_ID);
const adsId = clean(import.meta.env.VITE_GOOGLE_ADS_ID);
const adsLeadLabel = clean(import.meta.env.VITE_GOOGLE_ADS_LEAD_LABEL);

export const ANALYTICS_CONFIG = Object.freeze({
  gaMeasurementId: gaId && /^G-[A-Z0-9]+$/i.test(gaId) ? gaId : undefined,
  googleAdsId: adsId && /^AW-\d+$/.test(adsId) ? adsId : undefined,
  googleAdsLeadLabel: adsLeadLabel && /^[A-Za-z0-9_-]+$/.test(adsLeadLabel) ? adsLeadLabel : undefined,
});
