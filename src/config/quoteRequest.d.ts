export type QuoteServiceId =
  | 'ka'
  | 'bas-p'
  | 'bas-u'
  | 'ka-bas'
  | 'energideklaration'
  | 'overlatelsebesiktning'
  | 'bygglovshandlingar'
  | 'other';

export type QuoteDeliveryModel = 'ytterman' | 'partner' | 'mixed';

export interface QuoteServiceDefinition {
  label: string;
  deliveryModel: QuoteDeliveryModel;
  queue: 'quote-review' | 'energy-partner-verification' | 'manual-triage';
  requiresPartnerVerification: boolean;
}

export const QUOTE_SERVICES: Readonly<Record<QuoteServiceId, QuoteServiceDefinition>>;
export const QUOTE_SERVICE_IDS: readonly QuoteServiceId[];
export const PROJECT_TYPE_OPTIONS: readonly (readonly [string, string])[];
export const SIZE_OPTIONS: readonly (readonly [string, string])[];
export const PERMIT_STATUS_OPTIONS: readonly (readonly [string, string])[];
export const QUOTE_LIMITS: Readonly<Record<'name' | 'email' | 'phone' | 'municipality' | 'message' | 'attribution', number>>;
export const getQuoteService: (serviceId: string) => QuoteServiceDefinition | null;
