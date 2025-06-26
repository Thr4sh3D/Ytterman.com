import emailjs from 'emailjs-com';

// EmailJS konfiguration - klistra in dina värden från EmailJS dashboard
const SERVICE_ID = 'KLISTRA_IN_DITT_SERVICE_ID_HÄR'; // Ditt Service ID från EmailJS
const TEMPLATE_ID = 'KLISTRA_IN_DITT_TEMPLATE_ID_HÄR'; // Ditt Template ID från EmailJS  
const PUBLIC_KEY = 'KLISTRA_IN_DIN_PUBLIC_KEY_HÄR'; // Din Public Key från EmailJS

export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
}) => {
  try {
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
      PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error: error.message };
  }
};