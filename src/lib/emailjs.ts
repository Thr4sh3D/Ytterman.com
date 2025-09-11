import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_ytterman';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  project?: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    // Initialize EmailJS (this should be done once in your app)
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Ej angivet',
      project_type: formData.project || 'Ej angivet',
      message: formData.message,
      to_email: 'tobias@ytterman.com'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error('EmailJS response not OK');
    }
  } catch (error) {
    console.error('EmailJS error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};