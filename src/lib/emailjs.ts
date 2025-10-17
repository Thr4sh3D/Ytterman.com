import emailjs from '@emailjs/browser';

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
    // Template parameters för EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Ej angiven',
      project_type: formData.project || 'Ej specificerat',
      message: formData.message,
      to_email: 'tobias@ytterman.com',
      reply_to: formData.email
    };

    console.log('Skickar e-post med EmailJS...', templateParams);

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log('EmailJS response:', response);

    if (response.status === 200) {
      return { success: true, message: 'Meddelande skickat!' };
    } else {
      throw new Error(`EmailJS response status: ${response.status}`);
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { 
      success: false, 
      error: 'Kunde inte skicka meddelandet. Försök igen eller ring direkt på 076-111 84 47.' 
    };
  }
};