import emailjs from 'emailjs-com';

// EmailJS configuration
const SERVICE_ID = 'service_ytterman';
const TEMPLATE_ID = 'template_contact';
const USER_ID = 'user_ytterman_key';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    // Template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      project_type: formData.project,
      message: formData.message,
      to_email: 'tobias@ytterman.com',
      reply_to: formData.email
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );

    if (response.status === 200) {
      return { success: true, message: 'Meddelande skickat!' };
    } else {
      throw new Error('EmailJS response not OK');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { 
      success: false, 
      error: 'Kunde inte skicka meddelandet. Försök igen eller ring direkt.' 
    };
  }
};