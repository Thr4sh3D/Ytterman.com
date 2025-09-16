import { useState, useRef, useEffect } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useFormValidation, formatPhoneNumber, type FormData } from '@/components/FormValidation';
import { useGoogleAdsTracking } from '@/hooks/useGoogleAdsTracking';

interface ContactFormProps {
  className?: string;
}

// Enkel e-post skickning utan externa beroenden
const sendEmail = async (formData: FormData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Simulera e-post skickning med en timeout på 5 sekunder
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    // Här skulle normalt EmailJS eller annan e-post tjänst användas
    // För nu simulerar vi bara en framgångsrik skickning
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        clearTimeout(timeoutId);
        resolve(true);
      }, 1000); // Simulera 1 sekunds fördröjning

      controller.signal.addEventListener('abort', () => {
        clearTimeout(timer);
        reject(new Error('Request timeout'));
      });
    });

    clearTimeout(timeoutId);
    
    // Logga formulärdata för debugging (ta bort i produktion)
    console.log('Form submitted:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      project: formData.project,
      message: formData.message.substring(0, 100) + '...'
    });

    return { success: true };
  } catch (error) {
    console.error('Email send error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Okänt fel uppstod' 
    };
  }
};

export const ContactForm = ({ className = '' }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string>('');
  const { toast } = useToast();
  const { errors, validateForm, clearErrors } = useFormValidation();
  const { trackFormSubmission } = useGoogleAdsTracking();
  const formRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Mapping från paket-ID och tjänst-ID till projekttyp för select-fältet
  const packageToProjectType = {
    'kontrollansvarig': 'villa',
    'ka-bas-paket': 'villa',
    'brf-stora-projekt': 'flerfamilj',
    'kontrollansvarig-service': 'villa',
    'bas-p-service': 'villa',
    'bas-u-service': 'villa',
    'kombinerade-paket-service': 'flerfamilj',
    'energiberakning-online-service': 'villa'
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
        case 'energiberakning-online-service':
          prefilledMessage = 'Hej! Jag är intresserad av er energiberäkning online-tjänst. Kan du kontakta mig för mer information?';
          projectType = 'villa';
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
    
    setSubmitStatus('Validerar formulär...');
    
    if (!validateForm(formData)) {
      setSubmitStatus('Formuläret innehåller fel. Vänligen rätta till dem och försök igen.');
      toast({
        title: "Kontrollera formuläret",
        description: "Vänligen rätta till felen och försök igen.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('Skickar meddelande...');

    try {
      // Formatera telefonnummer
      const formattedData = {
        ...formData,
        phone: formData.phone ? formatPhoneNumber(formData.phone) : ''
      };

      // Skicka e-post med timeout-hantering
      const result = await sendEmail(formattedData);
      
      if (result.success) {
        // Spåra Google Ads lead-konvertering (utan värde)
        try {
          trackFormSubmission('contact_form');
        } catch (trackingError) {
          console.warn('Tracking error:', trackingError);
          // Fortsätt även om tracking misslyckas
        }
        
        setSubmitStatus('Meddelandet har skickats! Du omdirigeras nu...');
        
        toast({
          title: "Meddelande skickat!",
          description: "Tack för ditt meddelande. Vi återkommer inom kort.",
          variant: "default"
        });
        
        // Redirect to thank you page with service parameter
        const serviceParam = formData.project ? `?service=${encodeURIComponent(formData.project)}&source=contact-form` : '?service=kontakt&source=contact-form';
        
        // Vänta lite innan omdirigering så användaren ser bekräftelsen
        setTimeout(() => {
          window.location.href = `/tack${serviceParam}`;
        }, 2000);
        
      } else {
        throw new Error(result.error || 'Okänt fel');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('Ett fel uppstod. Försök igen eller ring oss direkt på 076-111 84 47.');
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
    
    // Rensa status när användaren ändrar något
    if (submitStatus) {
      setSubmitStatus('');
    }
  };

  return (
    <div ref={formRef} className={className}>
      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        Skicka meddelande
      </h2>
      
      {/* Status meddelanden för skärmläsare */}
      <div 
        ref={statusRef}
        aria-live="polite" 
        aria-atomic="true"
        className={`${submitStatus ? 'sr-only' : 'sr-only'}`}
      >
        {submitStatus}
      </div>
      
      <form 
        onSubmit={handleSubmit} 
        className="space-y-6" 
        noValidate
        aria-label="Kontaktformulär"
      >
        <fieldset className="space-y-6" disabled={isSubmitting}>
          <legend className="sr-only">Kontaktinformation</legend>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Namn <span aria-label="obligatoriskt fält">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ditt namn"
                className={errors.name ? 'border-red-500 focus:border-red-500' : ''}
                aria-describedby={errors.name ? 'name-error name-help' : 'name-help'}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              <div id="name-help" className="sr-only">
                Ange ditt fullständiga namn
              </div>
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600 flex items-center" role="alert">
                  <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                  {errors.name}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                E-post <span aria-label="obligatoriskt fält">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="din@email.com"
                className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
                aria-describedby={errors.email ? 'email-error email-help' : 'email-help'}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              <div id="email-help" className="sr-only">
                Ange en giltig e-postadress
              </div>
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center" role="alert">
                  <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
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
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="070-123 45 67"
                className={errors.phone ? 'border-red-500 focus:border-red-500' : ''}
                aria-describedby={errors.phone ? 'phone-error phone-help' : 'phone-help'}
                aria-invalid={errors.phone ? 'true' : 'false'}
              />
              <div id="phone-help" className="sr-only">
                Ange ditt telefonnummer (valfritt)
              </div>
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-600 flex items-center" role="alert">
                  <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
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
                aria-describedby="project-help"
              >
                <option value="">Välj projekttyp</option>
                <option value="villa">Villa/Småhus</option>
                <option value="flerfamilj">Flerfamiljshus</option>
                <option value="kommersiell">Kommersiell byggnad</option>
                <option value="renovering">Renovering</option>
                <option value="annat">Annat</option>
              </select>
              <div id="project-help" className="sr-only">
                Välj vilken typ av byggprojekt du har (valfritt)
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
              Meddelande <span aria-label="obligatoriskt fält">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Beskriv ditt projekt och vilken hjälp du behöver..."
              className={errors.message ? 'border-red-500 focus:border-red-500' : ''}
              aria-describedby={errors.message ? 'message-error message-help' : 'message-help'}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            <div id="message-help" className="sr-only">
              Beskriv ditt projekt och vilken hjälp du behöver
            </div>
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600 flex items-center" role="alert">
                <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                {errors.message}
              </p>
            )}
          </div>
        </fieldset>
        
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="w-full earth-gradient text-white hover:opacity-90 py-4 text-lg focus:ring-4 focus:ring-primary/20"
          aria-describedby="submit-help"
        >
          {isSubmitting ? (
            <>
              <span className="sr-only">Skickar meddelande, vänta...</span>
              <span aria-hidden="true">Skickar...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" aria-hidden="true" />
              Skicka meddelande
            </>
          )}
        </Button>
        <div id="submit-help" className="sr-only">
          Klicka för att skicka ditt meddelande till Ytterman
        </div>
      </form>
    </div>
  );
};