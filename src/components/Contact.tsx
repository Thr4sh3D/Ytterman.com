import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendEmail } from '@/integrations/core';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail({
        to: 'tobias@ytterman.com',
        subject: `Ny förfrågan från ${formData.name}`,
        body: `
Ny kontaktförfrågan från webbplatsen:

Namn: ${formData.name}
E-post: ${formData.email}

Meddelande:
${formData.message}

---
Skickat från kontaktformuläret på ytterman.com
        `,
        from_name: 'Ytterman Webbplats'
      });

      toast({
        title: "Meddelande skickat!",
        description: "Tack för ditt meddelande. Jag återkommer så snart som möjligt.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Fel vid skickning",
        description: "Det uppstod ett fel. Försök igen eller kontakta mig direkt på tobias@ytterman.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/46761118447?text=Hej! Jag är intresserad av dina tjänster som kontrollansvarig och BAS.', '_blank');
  };

  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Kontakta Mig
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Har du frågor eller vill diskutera ditt projekt? Hör av dig så återkommer jag snabbt.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Kontaktuppgifter
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 earth-gradient rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Ring mig</div>
                  <div className="text-muted-foreground">076-111 84 47</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 earth-gradient rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">E-post</div>
                  <div className="text-muted-foreground">tobias@ytterman.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 earth-gradient rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Verksam i</div>
                  <div className="text-muted-foreground">Hela Västernorrland</div>
                </div>
              </div>
            </div>

            <Button 
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chatta på WhatsApp
            </Button>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Skicka Meddelande
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-post *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="din@email.se"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Meddelande *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Berätta om ditt projekt: typ av byggnad, omfattning, tidsplan, etc."
                  rows={6}
                  className="w-full"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full earth-gradient text-white hover:opacity-90"
              >
                {isSubmitting ? 'Skickar...' : 'Skicka Meddelande'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};