// Booking configuration for Cal.com integrations
// Can be overridden by environment variables in the future

export const BOOKING_CONFIG = {
  // Överlåtelsebesiktning (Property Inspection)
  OVL_URL: 'https://cal.com/mty-konsult',
  
  // Future booking URLs can be added here
  // CONSULTATION_URL: 'https://cal.com/mty-konsult/konsultation',
} as const;

// Helper function to add UTM parameters if URL doesn't already have query string
export const addUTMParameters = (
  url: string,
  campaign: string,
  source: string = 'ytterman.com',
  medium: string = 'cta'
): string => {
  if (!url) return url;
  
  // If URL already has query parameters, return as is
  if (url.includes('?')) return url;
  
  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
  });
  
  return `${url}?${params.toString()}`;
};

// Convenience exports with UTM parameters
export const BOOKING_OVL_URL = addUTMParameters(
  BOOKING_CONFIG.OVL_URL,
  'overlatelsebesiktning'
);
