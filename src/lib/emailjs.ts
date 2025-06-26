import emailjs from 'emailjs-com';

// EmailJS konfiguration
const SERVICE_ID = 'service_ytterman';
const TEMPLATE_ID = 'template_contact';
const USER_ID = 'your_emailjs_user_id'; // Detta behöver du konfigurera

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
      USER_ID
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error: error.message };
  }
};