import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { sendEmail } from '@/integrations/core';
import { GoogleMap } from './GoogleMap';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail({
        to: 'tobias@ytterman.com',
        subject: `Ny förfrågan från ${formData.name} - Kontrollansvarig & BAS`,
        body: `
Ny kontaktförfrågan från webbplatsen Trygg Byggprocess med Ytterman:

KONTAKTUPPGIFTER:
Namn: ${formData.name}
E-post: ${formData.email}
Telefon: ${formData.phone || 'Ej angiven'}

MEDDELANDE:
${formData.message}

---
Skickat från kontaktformuläret på ytterman.com
Datum: ${new Date().toLocaleString('sv-SE')}
        `,
        from_name: 'Ytterman Webbplats'
      });

      toast({
        title: "Meddelande skickat!",
        description: "Tack för ditt meddelande. Jag återkommer så snart som möjligt, oftast inom 24 timmar.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Fel vid skickning",
        description: "Det uppstod ett fel. Försök igen eller kontakta mig direkt på tobias@ytterman.com eller 076-111 84 47",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hej Tobias! Jag är intresserad av dina tjänster som kontrollansvarig och BAS-P/BAS-U. Kan vi boka ett förutsättningslöst samtal?');
    window.open(`https://wa.me/46761118447?text=${message}`, '_blank');
  };

  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  const sendDirectEmail = () => {
    window.location.href = 'mailto:tobias@ytterman.com?subject=Förfrågan om kontrollansvarig och BAS-tjänster&body=Hej Tobias,%0D%0A%0D%0AJag är intresserad av dina tjänster som kontrollansvarig och BAS-P/BAS-U.%0D%0A%0D%0AMed vänliga hälsningar';
  };

  return (
    <section id="kontakt" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Kontakta <span className="text-gradient">Mig</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Redo att starta ditt byggprojekt? Kontakta mig för en kostnadsfri första konsultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-earth">
              <CardHeader>
                <CardTitle className="text-2xl">Låt oss prata om ditt projekt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Jag erbjuder alltid en kostnadsfri första konsultation där vi går igenom ditt projekt 
                  och jag förklarar hur jag kan hjälpa dig. Kontakta mig på det sätt som passar dig bäst.
                </p>

                <div className="space-y-4">
                  <button 
                    onClick={callPhone}
                    className="flex items-center space-x-4 w-full p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="w-10 h-10 earth-gradient rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Ring mig direkt</div>
                      <div className="text-muted-foreground">076-111 84 47</div>
                    </div>
                  </button>

                  <button 
                    onClick={sendDirectEmail}
                    className="flex items-center space-x-4 w-full p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="w-10 h-10 earth-gradient rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">E-post</div>
                      <div className="text-muted-foreground">tobias@ytterman.com</div>
                    </div>
                  </button>

                  <div className="flex items-center space-x-4 p-3">
                    <div className="w-10 h-10 earth-gradient rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Verksamhetsområde</div>
                      <div className="text-muted-foreground">Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå och hela Västernorrland</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chatta på WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-earth">
            <CardHeader>
              <CardTitle className="text-2xl">Skicka ett meddelande</CardTitle>
            </CardHeader>
            <CardContent>
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
                    placeholder="Ditt fullständiga namn"
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
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefonnummer
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="070-123 45 67"
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
                    placeholder="Berätta om ditt projekt: typ av byggnad, omfattning, tidsplan, var projektet ligger, etc."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full earth-gradient text-white hover:opacity-90"
                  size="lg"
                >
                  {isSubmitting ? (
                    'Skickar...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Skicka meddelande
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Card className="shadow-earth">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Mitt Verksamhetsområde</CardTitle>
              <p className="text-muted-foreground text-center">
                Jag arbetar i hela Västernorrland med bas i Viksjö
              </p>
            </CardHeader>
            <CardContent>
              <GoogleMap />
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Huvudorter:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sundsvall</li>
                    <li>• Härnösand</li>
                    <li>• Sollefteå</li>
                    <li>• Kramfors</li>
                    <li>• Timrå</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Övriga områden:</h4>
                  <p className="text-sm text-muted-foreground">
                    Jag tar även uppdrag i andra delar av Västernorrland. 
                    Kontakta mig för att diskutera ditt projekt oavsett var det ligger.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};