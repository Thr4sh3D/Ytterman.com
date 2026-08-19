export const QUOTE_SERVICES = Object.freeze({
  ka: {
    label: 'Kontrollansvarig (KA)',
    deliveryModel: 'ytterman',
    queue: 'quote-review',
    requiresPartnerVerification: false,
  },
  'bas-p': {
    label: 'BAS-P (projektering)',
    deliveryModel: 'ytterman',
    queue: 'quote-review',
    requiresPartnerVerification: false,
  },
  'bas-u': {
    label: 'BAS-U (utförande)',
    deliveryModel: 'ytterman',
    queue: 'quote-review',
    requiresPartnerVerification: false,
  },
  'ka-bas': {
    label: 'Paket KA + BAS-P/U',
    deliveryModel: 'ytterman',
    queue: 'quote-review',
    requiresPartnerVerification: false,
  },
  energideklaration: {
    label: 'Energideklaration',
    deliveryModel: 'partner',
    queue: 'energy-partner-verification',
    requiresPartnerVerification: true,
  },
  overlatelsebesiktning: {
    label: 'Överlåtelsebesiktning',
    deliveryModel: 'ytterman',
    queue: 'quote-review',
    requiresPartnerVerification: false,
  },
  bygglovshandlingar: {
    label: 'Bygglovshandlingar',
    deliveryModel: 'ytterman',
    queue: 'quote-review',
    requiresPartnerVerification: false,
  },
  other: {
    label: 'Annat',
    deliveryModel: 'mixed',
    queue: 'manual-triage',
    requiresPartnerVerification: false,
  },
});

export const QUOTE_SERVICE_IDS = Object.freeze(Object.keys(QUOTE_SERVICES));

export const PROJECT_TYPE_OPTIONS = Object.freeze([
  ['tillbyggnad', 'Tillbyggnad'],
  ['ombyggnad', 'Ombyggnad eller renovering'],
  ['nybyggnad-fritidshus', 'Nyproduktion av fritidshus'],
  ['nybyggnad-villa', 'Nyproduktion av villa'],
  ['flerbostadshus', 'Flerbostadshus eller BRF'],
  ['kommersiellt', 'Kommersiell fastighet'],
  ['other', 'Annat eller osäkert'],
]);

export const SIZE_OPTIONS = Object.freeze([
  ['unknown', 'Vet inte ännu'],
  ['under-50', 'Under 50 m²'],
  ['50-149', '50–149 m²'],
  ['150-299', '150–299 m²'],
  ['300-plus', '300 m² eller större'],
]);

export const PERMIT_STATUS_OPTIONS = Object.freeze([
  ['not-started', 'Inte påbörjat'],
  ['planning', 'Planerar eller tar fram handlingar'],
  ['submitted', 'Ansökan eller anmälan inskickad'],
  ['approved', 'Lov eller startbesked finns'],
  ['not-required', 'Lov bedöms inte behövas'],
  ['unknown', 'Vet inte'],
]);

export const QUOTE_LIMITS = Object.freeze({
  name: 120,
  email: 254,
  phone: 40,
  municipality: 120,
  message: 4_000,
  attribution: 120,
});

export const getQuoteService = (serviceId) => QUOTE_SERVICES[serviceId] || null;
