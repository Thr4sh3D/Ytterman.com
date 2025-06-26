import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { sendEmail } from '@/integrations/core';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const emailBody = `
Nytt meddelande från webbplatsen:

Namn: ${formData.name}
E-post: ${formData.email}
Telefon: ${formData.phone || 'Ej angivet'}
Projekttyp: ${formData.project || 'Ej angivet'}

Meddelande:
${formData.message}

---
Skickat från kontaktformuläret på ytterman.com
      `.trim();

      await sendEmail({
        to: 'tobias@ytterman.com',
        subject: `Ny förfrågan från ${formData.name}`,
        body: emailBody
      });
      
      toast({
        title: "Meddelande skickat!",
        description: "Tack för ditt meddelande. Jag återkommer inom 24 timmar.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Något gick fel",
        description: "Försök igen eller ring mig direkt på 076-111 84 47.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/46761118447?text=Hej! Jag är intresserad av dina tjänster som kontrollansvarig och BAS.', '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "076-111 84 47",
      action: () => window.open('tel:+46761118447')
    },
    {
      icon: Mail,
      title: "E-post",
      value: "tobias@ytterman.com",
      action: () => window.open('mailto:tobias@ytterman.com')
    },
    {
      icon: MapPin,
      title: "Verksam i",
      value: "Västernorrland",
      action: null
    },
    {
      icon: Clock,
      title: "Svarstid",
      value: "Inom 24 timmar",
      action: null
    }
  ];

  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Kontakta Mig
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Redo att starta ditt projekt? Kontakta mig för en kostnadsfri konsultation. 
            Jag svarar snabbt och hjälper dig gärna med alla frågor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Skicka ett meddelande
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Namn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Ditt namn"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="din@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="070-123 45 67"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                    Typ av projekt
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Välj projekttyp</option>
                    <option value="nybyggnation">Nybyggnation</option>
                    <option value="ombyggnad">Ombyggnad</option>
                    <option value="tillbyggnad">Tillbyggnad</option>
                    <option value="brf">BRF-projekt</option>
                    <option value="kommersiellt">Kommersiellt projekt</option>
                    <option value="annat">Annat</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Meddelande *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Berätta om ditt projekt och vad du behöver hjälp med..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full earth-gradient text-white hover:opacity-90 py-3"
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

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-secondary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Kontaktinformation
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-4 ${
                      info.action ? 'cursor-pointer hover:text-accent transition-colors' : ''
                    }`}
                    onClick={info.action || undefined}
                  >
                    <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                Föredrar du WhatsApp?
              </h3>
              <p className="text-muted-foreground mb-6">
                Skicka ett snabbt meddelande via WhatsApp för direkt kontakt.
              </p>
              <Button 
                onClick={openWhatsApp}
                className="earth-gradient text-white hover:opacity-90"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Öppna WhatsApp
              </Button>
            </div>

            <div className="bg-accent/10 rounded-2xl p-8 text-center">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                Snabb Återkoppling
              </h3>
              <p className="text-muted-foreground">
                Jag svarar vanligtvis inom 24 timmar på alla förfrågningar. 
                För akuta ärenden, ring mig direkt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};