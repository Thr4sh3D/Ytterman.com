import { useState, useRef, useEffect } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useFormValidation, formatPhoneNumber, type FormData } from '@/components/FormValidation';
import { trackConversion } from '@/components/ConversionTracking';

interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className = '' }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { errors, validateForm, clearErrors } = useFormValidation();
  const formRef = useRef<HTMLDivElement>(null);

  // Mapping från paket-ID och tjänst-ID till projekttyp för select-fältet
  const packageToProjectType = {
    'kontrollansvarig': 'villa',
    'ka-bas-paket': 'villa',
    'brf-stora-projekt': 'flerfamilj',
    'kontrollansvarig-service': 'villa',
    'bas-p-service': 'villa',
    'bas-u-service': 'villa',
    'kombinerade-paket-service': 'flerfamilj'
  };

  // Läs URL-parametrar och fyll i formuläret automatiskt
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    
    if (service) {
      let prefilledMessage = '';
      let projectType = '';
      
      // Skapa meddelande baserat på vald tjänst
      switch (service) {
        case 'kontrollansvarig':
          prefilledMessage = 'Hej! Jag är intresserad av tjänsten Kontrollansvarig (KA) enligt PBL. Kan du kontakta mig för mer information och prisuppgift?';
          projectType = 'villa';
          break;
        case 'ka-bas-paket':
          prefilledMessage = 'Hej! Jag är intresserad av KA + BAS-paketet för mitt byggprojekt. Kan du kontakta mig för mer information och prisuppgift?';
          projectType = 'villa';
          break;
        case 'brf-stora-projekt':
          prefilledMessage = 'Hej! Jag är intresserad av era tjänster för BRF och stora projekt. Kan du kontakta mig för mer information och prisuppgift?';
          projectType = 'flerfamilj';
          break;
        case 'kontrollansvarig-service':
          prefilledMessage = 'Hej! Jag är intresserad av tjänsten Kontrollansvarig (KA). Kan du kontakta mig för mer information?';
          projectType = 'villa';
          break;
        case 'bas-p-service':
          prefilledMessage = 'Hej! Jag är intresserad av BAS-P tjänsten. Kan du kontakta mig för mer information?';
          projectType = 'villa';
          break;
        case 'bas-u-service':
          prefilledMessage = 'Hej! Jag är intresserad av BAS-U tjänsten. Kan du kontakta mig för mer information?';
          projectType = 'villa';
          break;
        case 'kombinerade-paket-service':
          prefilledMessage = 'Hej! Jag är intresserad av era kombinerade paket. Kan du kontakta mig för mer information?';
          projectType = 'flerfamilj';
          break;
        default:
          prefilledMessage = `Hej! Jag är intresserad av era tjänster inom ${service}. Kan du kontakta mig för mer information?`;
          projectType = packageToProjectType[service as keyof typeof packageToProjectType] || '';
      }
      
      setFormData(prev => ({
        ...prev,
        project: projectType,
        message: prefilledMessage
      }));

      // Scrolla till formuläret efter en kort fördröjning
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(formData)) {
      toast({
        title: "Kontrollera formuläret",
        description: "Vänligen rätta till felen och försök igen.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Formatera telefonnummer
      const formattedData = {
        ...formData,
        phone: formData.phone ? formatPhoneNumber(formData.phone) : ''
      };

      // Simulate form submission - ersätt med riktig EmailJS integration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Spåra Google Ads konvertering
      trackConversion(
        'AW-XXXXXXXXX', // Ersätt med din Google Ads Conversion ID
        'contact-form-submission', // Ersätt med din Conversion Label
        100, // Värde på konverteringen (valfritt)
        'SEK'
      );
      
      // Redirect to thank you page with service parameter
      const serviceParam = formData.project ? `?service=${encodeURIComponent(formData.project)}&source=contact-form` : '?service=kontakt&source=contact-form';
      window.location.href = `/tack${serviceParam}`;
      
    } catch (error) {
      toast({
        title: "Fel uppstod",
        description: "Försök igen eller ring oss direkt på 076-111 84 47.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Rensa fel för detta fält när användaren börjar skriva
    if (errors[name as keyof typeof errors]) {
      clearErrors();
    }
  };

  return (
    <div ref={formRef} className={className}>
      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        Skicka meddelande
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Namn *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ditt namn"
              className={errors.name ? 'border-red-500' : ''}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              E-post *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="din@email.com"
              className={errors.email ? 'border-red-500' : ''}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email}
              </p>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Telefon
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="070-123 45 67"
              className={errors.phone ? 'border-red-500' : ''}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-2">
              Typ av projekt
            </label>
            <select
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label="Välj typ av projekt"
            >
              <option value="">Välj projekttyp</option>
              <option value="villa">Villa/Småhus</option>
              <option value="flerfamilj">Flerfamiljshus</option>
              <option value="kommersiell">Kommersiell byggnad</option>
              <option value="renovering">Renovering</option>
              <option value="annat">Annat</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Meddelande *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Beskriv ditt projekt och vilken hjälp du behöver..."
            className={errors.message ? 'border-red-500' : ''}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message}
            </p>
          )}
        </div>
        
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="w-full earth-gradient text-white hover:opacity-90 py-4 text-lg"
          aria-label={isSubmitting ? "Skickar meddelande..." : "Skicka meddelande"}
        >
          {isSubmitting ? (
            "Skickar..."
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Skicka meddelande
            </>
          )}
        </Button>
      </form>
    </div>
  );
};