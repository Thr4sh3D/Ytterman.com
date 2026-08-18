import emailjs from '@emailjs/browser';
import { COMPANY } from '@/config/company';
import { readLeadAttribution } from '@/lib/leadAttribution';

// EmailJS configuration med dina riktiga uppgifter
const SERVICE_ID = 'service_hkaan9a';
const TEMPLATE_ID = 'template_r43g9li';
const PUBLIC_KEY = 'HiImRG5AmvO4_ias5';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; message?: string; error?: string }> => {
  try {
    const attribution = readLeadAttribution();
    // Template parameters för EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Ej angiven',
      project_type: formData.project || 'Ej specificerat',
      message: formData.message,
      to_email: COMPANY.email,
      reply_to: formData.email,
      landing_page: attribution?.landingPage || 'Ej tillgänglig',
      lead_source: attribution?.source || attribution?.utmSource || 'Direkt/okänd',
      utm_source: attribution?.utmSource || '',
      utm_medium: attribution?.utmMedium || '',
      utm_campaign: attribution?.utmCampaign || '',
      utm_content: attribution?.utmContent || '',
      utm_term: attribution?.utmTerm || '',
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return { success: true, message: 'Meddelande skickat!' };
    } else {
      throw new Error(`EmailJS response status: ${response.status}`);
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { 
      success: false, 
      error: `Kunde inte skicka meddelandet. Försök igen eller mejla ${COMPANY.email}.`
    };
  }
};
