import React, { useState } from 'react';
import { useGoogleAdsTracking } from '@/hooks/useGoogleAdsTracking';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

/**
 * Example contact form component with Google Ads conversion tracking
 * This shows how to integrate conversion tracking with form submissions
 */
export const ContactFormExample: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { trackFormSubmission, trackPhoneCall, trackEmailClick } = useGoogleAdsTracking();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would normally send the form data to your backend
      // For this example, we'll simulate a successful submission
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track the conversion after successful form submission
      trackFormSubmission('contact_form', 1000); // Optional value in SEK
      
      toast({
        title: "Meddelande skickat!",
        description: "Tack för ditt meddelande. Vi återkommer inom 24 timmar.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        serviceType: ''
      });
      
    } catch (error) {
      toast({
        title: "Fel",
        description: "Något gick fel. Försök igen senare.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = () => {
    // Track phone call conversion when user clicks phone number
    trackPhoneCall();
    window.location.href = 'tel:+46761118447';
  };

  const handleEmailClick = () => {
    // Track email click conversion when user clicks email
    trackEmailClick();
    window.location.href = 'mailto:tobias@ytterman.com';
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-stone-800">Kontakta oss</h2>
      
      {/* Contact info with tracking */}
      <div className="mb-6 p-4 bg-stone-50 rounded-lg">
        <p className="mb-2">
          <strong>Telefon:</strong>{' '}
          <button 
            onClick={handlePhoneClick}
            className="text-amber-600 hover:text-amber-700 underline"
          >
            076-111 84 47
          </button>
        </p>
        <p>
          <strong>E-post:</strong>{' '}
          <button 
            onClick={handleEmailClick}
            className="text-amber-600 hover:text-amber-700 underline"
          >
            tobias@ytterman.com
          </button>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
            Namn *
          </label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
            E-post *
          </label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
            Telefon
          </label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-stone-700 mb-1">
            Typ av tjänst
          </label>
          <select
            id="serviceType"
            value={formData.serviceType}
            onChange={(e) => setFormData(prev => ({ ...prev, serviceType: e.target.value }))}
            className="w-full p-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">Välj tjänst</option>
            <option value="kontrollansvarig">Kontrollansvarig</option>
            <option value="bas-p">BAS-P</option>
            <option value="bas-u">BAS-U</option>
            <option value="konsultation">Konsultation</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
            Meddelande *
          </label>
          <Textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="w-full"
            placeholder="Beskriv ditt projekt och dina behov..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white"
        >
          {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
        </Button>
      </form>
    </div>
  );
};