import { useState } from 'react';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const useFormValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateForm = (formData: FormData): boolean => {
    const newErrors: ValidationErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Namn är obligatoriskt';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Namnet måste vara minst 2 tecken';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'E-post är obligatoriskt';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ange en giltig e-postadress';
    }

    // Phone validation (optional)
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Ange ett giltigt telefonnummer';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Meddelande är obligatoriskt';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Meddelandet måste vara minst 10 tecken';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearErrors = () => {
    setErrors({});
  };

  return {
    errors,
    validateForm,
    clearErrors
  };
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // If it starts with 0, replace with +46
  if (cleaned.startsWith('0')) {
    return '+46' + cleaned.substring(1);
  }
  
  // If it doesn't start with +, assume it's Swedish and add +46
  if (!cleaned.startsWith('+')) {
    return '+46' + cleaned;
  }
  
  return cleaned;
};