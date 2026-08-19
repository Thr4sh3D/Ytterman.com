import { readLeadAttribution, type LeadAttribution } from '@/lib/leadAttribution';
import {
  quoteServiceRequiresConstructionDetails,
  type QuoteServiceId,
} from '@/config/quoteRequest.mjs';

export interface QuoteFormData {
  service: QuoteServiceId | '';
  projectType: string;
  municipality: string;
  size: string;
  permitStatus: string;
  desiredStart: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string;
  startedAt: number;
}

interface QuoteRequestPayload {
  service: QuoteServiceId;
  projectType: string;
  municipality: string;
  size: string;
  permitStatus: string;
  desiredStart: string;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  message: string;
  attribution: LeadAttribution | null;
  website: string;
  startedAt: number;
}

interface QuoteResponse {
  success: boolean;
  leadId?: string;
  error?: string;
}

const endpoint = () => import.meta.env.VITE_QUOTE_REQUEST_ENDPOINT?.trim() || '/api/quote-request';

export const submitQuoteRequest = async (formData: QuoteFormData): Promise<QuoteResponse> => {
  if (!formData.service) {
    return { success: false, error: 'Välj vilken tjänst förfrågan gäller.' };
  }

  const requiresConstructionDetails = quoteServiceRequiresConstructionDetails(formData.service);
  const payload: QuoteRequestPayload = {
    service: formData.service,
    projectType: requiresConstructionDetails ? formData.projectType.trim() : 'not-applicable',
    municipality: formData.municipality.trim(),
    size: requiresConstructionDetails ? formData.size : 'not-applicable',
    permitStatus: requiresConstructionDetails ? formData.permitStatus : 'not-applicable',
    desiredStart: formData.desiredStart,
    contact: {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
    },
    message: formData.message.trim(),
    attribution: readLeadAttribution(),
    website: formData.website,
    startedAt: formData.startedAt,
  };

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 12_000);

  try {
    const response = await fetch(endpoint(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Ytterman-Form-Version': '2',
      },
      credentials: 'omit',
      signal: controller.signal,
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => ({})) as Partial<QuoteResponse>;
    if (!response.ok || !result.success) {
      return {
        success: false,
        error: result.error || 'Förfrågan kunde inte skickas just nu.',
      };
    }

    return { success: true, leadId: result.leadId };
  } catch {
    return { success: false, error: 'Förfrågan kunde inte skickas just nu.' };
  } finally {
    window.clearTimeout(timeout);
  }
};
