import { createHash, randomUUID } from 'node:crypto';
import { getStore } from '@netlify/blobs';
import { z } from 'zod';
import {
  QUOTE_LIMITS,
  QUOTE_SERVICE_IDS,
  QUOTE_SERVICES,
  getQuoteService,
  quoteServiceRequiresConstructionDetails,
} from '../../src/config/quoteRequest.mjs';

const MAX_BODY_BYTES = 32_000;
const MIN_FORM_TIME_MS = 2_500;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1_000;
const RATE_LIMIT_MAX = 5;
type QuoteServiceId = keyof typeof QUOTE_SERVICES;
const SERVICE_IDS = [...QUOTE_SERVICE_IDS] as [QuoteServiceId, ...QuoteServiceId[]];

const attributionSchema = z.object({
  landingPage: z.string().trim().max(QUOTE_LIMITS.attribution),
  source: z.string().trim().max(QUOTE_LIMITS.attribution).optional(),
  utmSource: z.string().trim().max(QUOTE_LIMITS.attribution).optional(),
  utmMedium: z.string().trim().max(QUOTE_LIMITS.attribution).optional(),
  utmCampaign: z.string().trim().max(QUOTE_LIMITS.attribution).optional(),
  utmContent: z.string().trim().max(QUOTE_LIMITS.attribution).optional(),
  utmTerm: z.string().trim().max(QUOTE_LIMITS.attribution).optional(),
}).strict();

const quoteRequestSchema = z.object({
  service: z.enum(SERVICE_IDS),
  projectType: z.string().trim().min(1).max(120),
  municipality: z.string().trim().min(1).max(QUOTE_LIMITS.municipality),
  size: z.string().trim().max(60),
  permitStatus: z.string().trim().max(60),
  desiredStart: z.string().trim().max(20),
  contact: z.object({
    name: z.string().trim().min(2).max(QUOTE_LIMITS.name),
    email: z.string().trim().email().max(QUOTE_LIMITS.email),
    phone: z.string().trim().max(QUOTE_LIMITS.phone),
  }).strict(),
  message: z.string().trim().max(QUOTE_LIMITS.message),
  attribution: attributionSchema.nullable(),
  website: z.string().max(200),
  startedAt: z.number().int().positive(),
}).strict().superRefine((data, context) => {
  const requiresConstructionDetails = quoteServiceRequiresConstructionDetails(data.service);
  if (requiresConstructionDetails && data.projectType === 'not-applicable') {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['projectType'],
      message: 'Projekttyp krävs för vald tjänst.',
    });
  }
  if (!requiresConstructionDetails) {
    for (const field of ['projectType', 'size', 'permitStatus'] as const) {
      if (data[field] !== 'not-applicable') {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: [field],
          message: 'Fältet är inte relevant för överlåtelsebesiktning.',
        });
      }
    }
  }
});

const configuredOrigins = (process.env.QUOTE_ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedOrigins = new Set([
  'https://ytterman.com',
  ...configuredOrigins,
  ...(process.env.CONTEXT === 'dev' ? ['http://localhost:5173'] : []),
]);

const corsHeaders = (origin: string | null) => ({
  'Access-Control-Allow-Origin': origin && allowedOrigins.has(origin) ? origin : 'https://ytterman.com',
  'Access-Control-Allow-Headers': 'Content-Type, X-Ytterman-Form-Version',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400',
  'Cache-Control': 'no-store',
  'Content-Type': 'application/json; charset=utf-8',
  Vary: 'Origin',
});

const jsonResponse = (origin: string | null, status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: corsHeaders(origin) });

const clientAddress = (request: Request) => (
  request.headers.get('x-nf-client-connection-ip')
  || request.headers.get('cf-connecting-ip')
  || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  || 'unknown'
);

const rateLimitKey = (request: Request) => {
  const secretSalt = process.env.QUOTE_RATE_LIMIT_SALT?.trim() || process.env.SITE_ID || 'local-only';
  const addressHash = createHash('sha256')
    .update(`${secretSalt}:${clientAddress(request)}`)
    .digest('hex');
  return `quote/${addressHash}`;
};

const fallbackRateLimit = new Map<string, { count: number; resetAt: number }>();

const consumeRateLimit = async (request: Request) => {
  const key = rateLimitKey(request);
  const now = Date.now();

  try {
    const store = getStore('quote-rate-limit');
    const raw = await store.get(key, { type: 'text' });
    const current = raw ? JSON.parse(raw) as { count?: number; resetAt?: number } : null;
    const active = current?.resetAt && current.resetAt > now;
    const next = {
      count: active ? (current.count || 0) + 1 : 1,
      resetAt: active ? current.resetAt as number : now + RATE_LIMIT_WINDOW_MS,
    };
    await store.set(key, JSON.stringify(next));
    return next.count <= RATE_LIMIT_MAX;
  } catch {
    const current = fallbackRateLimit.get(key);
    const next = current && current.resetAt > now
      ? { count: current.count + 1, resetAt: current.resetAt }
      : { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
    fallbackRateLimit.set(key, next);
    return next.count <= RATE_LIMIT_MAX;
  }
};

const safeFormsUrl = () => {
  const configured = process.env.QUOTE_FORM_DELIVERY_URL?.trim() || process.env.URL?.trim();
  if (!configured) return null;

  try {
    const url = new URL('/', configured);
    const isLocalDevelopment = process.env.CONTEXT === 'dev' && url.protocol === 'http:';
    return url.protocol === 'https:' || isLocalDevelopment ? url.toString() : null;
  } catch {
    return null;
  }
};

export default async (request: Request) => {
  const origin = request.headers.get('origin');

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: allowedOrigins.has(origin || '') ? 204 : 403, headers: corsHeaders(origin) });
  }

  if (request.method !== 'POST') {
    return jsonResponse(origin, 405, { success: false, error: 'Method not allowed' });
  }

  if (!origin || !allowedOrigins.has(origin)) {
    return jsonResponse(origin, 403, { success: false, error: 'Otillåten källa.' });
  }

  if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    return jsonResponse(origin, 415, { success: false, error: 'Felaktigt dataformat.' });
  }

  const declaredLength = Number.parseInt(request.headers.get('content-length') || '0', 10);
  if (declaredLength > MAX_BODY_BYTES) {
    return jsonResponse(origin, 413, { success: false, error: 'Förfrågan är för stor.' });
  }

  let rawBody = '';
  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse(origin, 400, { success: false, error: 'Förfrågan kunde inte läsas.' });
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return jsonResponse(origin, 413, { success: false, error: 'Förfrågan är för stor.' });
  }

  let input: unknown;
  try {
    input = JSON.parse(rawBody);
  } catch {
    return jsonResponse(origin, 400, { success: false, error: 'Felaktigt dataformat.' });
  }

  const parsed = quoteRequestSchema.safeParse(input);
  if (!parsed.success) {
    return jsonResponse(origin, 400, { success: false, error: 'Kontrollera formulärets uppgifter.' });
  }

  if (parsed.data.website) {
    return jsonResponse(origin, 202, { success: true });
  }

  const elapsed = Date.now() - Number(parsed.data.startedAt);
  if (elapsed < MIN_FORM_TIME_MS || elapsed > 24 * 60 * 60 * 1_000) {
    return jsonResponse(origin, 429, { success: false, error: 'Försök igen om en liten stund.' });
  }

  if (!(await consumeRateLimit(request))) {
    return jsonResponse(origin, 429, { success: false, error: 'För många försök. Vänta en stund och försök igen.' });
  }

  const service = getQuoteService(parsed.data.service);
  if (!service) {
    return jsonResponse(origin, 400, { success: false, error: 'Okänd tjänst.' });
  }

  const leadId = randomUUID();
  const receivedAt = new Date().toISOString();
  const formsUrl = safeFormsUrl();
  if (!formsUrl) {
    return jsonResponse(origin, 503, { success: false, error: 'Offerttjänsten är tillfälligt otillgänglig.' });
  }

  const attribution = parsed.data.attribution;
  const formBody = new URLSearchParams({
    'form-name': 'quote-request',
    subject: `Ny offert: ${service.label} – ${parsed.data.municipality}`,
    leadId,
    receivedAt,
    source: 'ytterman.com',
    service: parsed.data.service,
    serviceLabel: service.label,
    deliveryModel: service.deliveryModel,
    projectType: parsed.data.projectType,
    municipality: parsed.data.municipality,
    size: parsed.data.size,
    permitStatus: parsed.data.permitStatus,
    desiredStart: parsed.data.desiredStart,
    name: parsed.data.contact.name,
    email: parsed.data.contact.email,
    phone: parsed.data.contact.phone,
    message: parsed.data.message,
    routingQueue: service.queue,
    routingStatus: 'new',
    routingOwner: 'tobias',
    requiresPartnerVerification: String(service.requiresPartnerVerification),
    partnerVerificationStatus: service.requiresPartnerVerification ? 'required' : 'not-applicable',
    landingPage: attribution?.landingPage || '',
    utmSource: attribution?.utmSource || '',
    utmMedium: attribution?.utmMedium || '',
    utmCampaign: attribution?.utmCampaign || '',
    utmContent: attribution?.utmContent || '',
    utmTerm: attribution?.utmTerm || '',
    website: '',
  });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const formResponse = await fetch(formsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Ytterman-Event': 'quote.created',
      },
      signal: controller.signal,
      body: formBody.toString(),
    });

    if (!formResponse.ok) {
      return jsonResponse(origin, 502, { success: false, error: 'Förfrågan kunde inte levereras just nu.' });
    }
  } catch {
    return jsonResponse(origin, 502, { success: false, error: 'Förfrågan kunde inte levereras just nu.' });
  } finally {
    clearTimeout(timeout);
  }

  return jsonResponse(origin, 202, { success: true, leadId });
};

export const config = {
  path: '/api/quote-request',
  methods: ['POST', 'OPTIONS'],
};
