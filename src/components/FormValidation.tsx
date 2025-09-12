import { useState } from 'react';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const useFormValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (data: FormData): boolean => {
    const newErrors: ValidationErrors = {};

    // Validera namn
    if (!data.name.trim()) {
      newErrors.name = 'Namn är obligatoriskt';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Namnet måste vara minst 2 tecken';
    }

    // Validera e-post
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = 'E-post är obligatoriskt';
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = 'Ange en giltig e-postadress';
    }

    // Validera telefon (valfritt men om angivet ska det vara giltigt)
    if (data.phone.trim()) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
      if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'Ange ett giltigt telefonnummer';
      }
    }

    // Validera meddelande
    if (!data.message.trim()) {
      newErrors.message = 'Meddelande är obligatoriskt';
    } else if (data.message.trim().length < 10) {
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

// Hjälpfunktion för att formatera telefonnummer
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.startsWith('46')) {
    // Svenskt nummer med landskod
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8, 10)} ${cleaned.slice(10, 12)}`.trim();
  } else if (cleaned.startsWith('0')) {
    // Svenskt nummer utan landskod
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8, 10)}`.trim();
  }
  
  return phone; // Returnera ursprungligt format om det inte matchar
};