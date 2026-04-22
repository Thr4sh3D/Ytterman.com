const SITE_ORIGIN = 'https://ytterman.com';

// Booking/contact configuration
// Can be overridden by environment variables in the future

export const BOOKING_CONFIG = {
  // Överlåtelsebesiktning (Property Inspection)
  OVL_URL: '/kontakt/?project=overlatelsebesiktning',
  
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

  const parsedUrl = new URL(url, SITE_ORIGIN);

  if (!parsedUrl.searchParams.has('utm_source')) {
    parsedUrl.searchParams.set('utm_source', source);
  }

  if (!parsedUrl.searchParams.has('utm_medium')) {
    parsedUrl.searchParams.set('utm_medium', medium);
  }

  if (!parsedUrl.searchParams.has('utm_campaign')) {
    parsedUrl.searchParams.set('utm_campaign', campaign);
  }

  if (/^https?:\/\//i.test(url)) {
    return parsedUrl.toString();
  }

  return `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`;
};

// Convenience exports with UTM parameters
export const BOOKING_OVL_URL = addUTMParameters(
  BOOKING_CONFIG.OVL_URL,
  'overlatelsebesiktning'
);
