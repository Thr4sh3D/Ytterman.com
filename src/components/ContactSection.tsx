import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulera API-anrop
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Meddelande skickat!",
        description: "Vi återkommer inom 24 timmar.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Fel uppstod",
        description: "Försök igen eller ring oss direkt.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Kontakta oss
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Redo att starta ditt byggprojekt? Kontakta oss för en kostnadsfri 
            konsultation och få professionell hjälp med kontrollansvarig och BAS-tjänster.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Skicka en förfrågan
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Namn *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Telefon
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  E-post *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Typ av projekt
                </label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Välj projekttyp" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kontrollansvarig">Kontrollansvarig</SelectItem>
                    <SelectItem value="bas-p">BAS-P (Projektering)</SelectItem>
                    <SelectItem value="bas-u">BAS-U (Utförande)</SelectItem>
                    <SelectItem value="kombinerat">Kombinerat paket</SelectItem>
                    <SelectItem value="konsultation">Konsultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Meddelande *
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                  rows={4}
                  className="w-full"
                  placeholder="Beskriv ditt projekt och vad du behöver hjälp med..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full earth-gradient text-white hover:opacity-90 py-3"
              >
                {isSubmitting ? 'Skickar...' : 'Skicka förfrågan'}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Kontaktinformation
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="earth-gradient w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Telefon</h4>
                    <a href="tel:+46761118447" className="text-slate-600 hover:text-accent transition-colors">
                      076-111 84 47
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Vardagar 07:00-18:00
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="earth-gradient w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">E-post</h4>
                    <a href="mailto:tobias@ytterman.com" className="text-slate-600 hover:text-accent transition-colors">
                      tobias@ytterman.com
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Svar inom 24 timmar
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="earth-gradient w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Verksamhetsområde</h4>
                    <p className="text-slate-600">Västernorrlands län</p>
                    <p className="text-sm text-slate-500 mt-1">
                      Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="earth-gradient w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Öppettider</h4>
                    <p className="text-slate-600">Måndag - Fredag: 07:00-18:00</p>
                    <p className="text-sm text-slate-500 mt-1">
                      Akuta ärenden: Ring direkt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3">
                Kostnadsfri konsultation
              </h4>
              <p className="text-slate-600 text-sm mb-4">
                Vi erbjuder alltid en kostnadsfri första konsultation där vi 
                går igenom ditt projekt och ger dig en tydlig bild av vad som krävs.
              </p>
              <a 
                href="tel:+46761118447"
                className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                Ring för konsultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};