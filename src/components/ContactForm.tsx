import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/lib/emailjs';
import { useGoogleAdsTracking } from '@/hooks/useGoogleAdsTracking';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();
  const { trackFormSubmission, trackPhoneClick } = useGoogleAdsTracking();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhoneClick = (phoneNumber: string) => {
    trackPhoneClick(phoneNumber);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Fyll i alla obligatoriska fält",
        description: "Namn, e-post och meddelande är obligatoriska.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        
        // Spåra framgångsrik formulärinskickning
        trackFormSubmission('contact_form', {
          name: formData.name,
          project: formData.project,
          has_phone: !!formData.phone
        });
        
        toast({
          title: "Meddelande skickat!",
          description: "Tack för ditt meddelande. Vi återkommer inom 24 timmar.",
        });
        
        // Rensa formuläret
        setFormData({
          name: '',
          email: '',
          phone: '',
          project: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Okänt fel');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      toast({
        title: "Kunde inte skicka meddelandet",
        description: "Försök igen eller ring oss direkt på 076-111 84 47.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Kontaktformulär */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-slate-800">Kontakta oss</CardTitle>
            <CardDescription>
              Berätta om ditt projekt så återkommer vi med en kostnadsfri offert inom 24 timmar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Namn *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Ditt fullständiga namn"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  E-post *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="din@email.se"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Telefonnummer
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="070-123 45 67"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-1">
                  Typ av projekt
                </label>
                <Select value={formData.project} onValueChange={(value) => handleInputChange('project', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Välj projekttyp" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kontrollansvarig">Kontrollansvarig (KA)</SelectItem>
                    <SelectItem value="bas-p">BAS-P (Projektering)</SelectItem>
                    <SelectItem value="bas-u">BAS-U (Utförande)</SelectItem>
                    <SelectItem value="energideklaration">Energideklaration</SelectItem>
                    <SelectItem value="overlatelsebesiktning">Överlåtelsebesiktning</SelectItem>
                    <SelectItem value="annat">Annat</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Meddelande *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Beskriv ditt projekt och vad du behöver hjälp med..."
                  required
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Skickar...
                  </div>
                ) : (
                  'Skicka meddelande'
                )}
              </Button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span>Meddelande skickat! Vi återkommer inom 24 timmar.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>Kunde inte skicka meddelandet. Försök igen eller ring direkt.</span>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Kontaktinformation */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-800">Kontaktinformation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-slate-800">Telefon</p>
                  <a 
                    href="tel:+46761118447" 
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                    onClick={() => handlePhoneClick('+46761118447')}
                  >
                    076-111 84 47
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-slate-800">E-post</p>
                  <a 
                    href="mailto:tobias@ytterman.com" 
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    tobias@ytterman.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-slate-800">Verksamhetsområde</p>
                  <p className="text-slate-600">Västernorrland</p>
                  <p className="text-sm text-slate-500">Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-slate-800">Svarstid</p>
                  <p className="text-slate-600">Inom 24 timmar</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-slate-800 mb-2">Snabb kontakt</h3>
              <p className="text-slate-600 mb-4">
                Behöver du svar direkt? Ring oss så svarar vi inom kontorstid.
              </p>
              <Button 
                asChild 
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <a 
                  href="tel:+46761118447"
                  onClick={() => handlePhoneClick('+46761118447')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ring nu: 076-111 84 47
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;