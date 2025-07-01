import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // This is a placeholder for actual email sending
      // In a real implementation, you would use a service like EmailJS
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      toast({
        title: "Meddelande skickat!",
        description: "Tack för ditt meddelande. Vi återkommer så snart som möjligt.",
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Ett fel uppstod",
        description: "Det gick inte att skicka meddelandet. Försök igen senare.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Kontakta oss
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Har du frågor eller vill diskutera ditt projekt? Kontakta oss för en 
              kostnadsfri konsultation. Vi återkommer så snart som möjligt.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Namn
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ditt namn"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    E-post
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Din e-postadress"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ditt telefonnummer"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Meddelande
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Beskriv ditt projekt eller din fråga"
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="earth-gradient text-white hover:opacity-90 w-full py-6"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Skickar...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Skicka meddelande
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Kontaktuppgifter
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Telefon</p>
                    <a 
                      href="tel:+46761118447" 
                      className="text-slate-700 hover:text-primary"
                    >
                      076-111 84 47
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">E-post</p>
                    <a 
                      href="mailto:tobias@ytterman.com" 
                      className="text-slate-700 hover:text-primary"
                    >
                      tobias@ytterman.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Verksamhetsområde</p>
                    <p className="text-slate-700">
                      Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors och övriga Västernorrland
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-4">
                  Öppettider
                </h4>
                <div className="space-y-2 text-slate-700">
                  <p>Måndag - Fredag: 08:00 - 17:00</p>
                  <p>Lördag - Söndag: Stängt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};