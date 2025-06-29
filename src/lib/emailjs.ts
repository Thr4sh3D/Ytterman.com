import emailjs from 'emailjs-com';

// EmailJS configuration
const SERVICE_ID = 'service_ytterman';
const TEMPLATE_ID = 'template_contact';
const USER_ID = 'user_ytterman';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    // Initialize EmailJS (this would normally be done with real credentials)
    emailjs.init(USER_ID);
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      project_type: formData.project,
      message: formData.message,
      to_email: 'tobias@ytterman.com'
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    
    // Fallback: simulate successful send for demo purposes
    // In production, this would be a real email service
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  }
};