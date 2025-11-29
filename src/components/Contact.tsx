import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/lib/emailjs';

interface ContactProps {
  selectedPackage: string;
  prefilledMessage: string;
}

export const Contact = ({ selectedPackage, prefilledMessage }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Mapping från paket-ID och tjänst-ID till projekttyp för select-fältet
  const packageToProjectType = {
    // Paket från Pricing
    'kontrollansvarig': 'villa',
    'ka-bas-paket': 'villa',
    'brf-stora-projekt': 'flerfamilj',
    // Tjänster från Services
    'kontrollansvarig-service': 'villa',
    'bas-p-service': 'villa',
    'bas-u-service': 'villa',
    'kombinerade-paket-service': 'flerfamilj'
  };

  // Update form when selectedPackage or prefilledMessage changes
  useEffect(() => {
    if (selectedPackage && prefilledMessage) {
      setFormData(prev => ({
        ...prev,
        project: packageToProjectType[selectedPackage as keyof typeof packageToProjectType] || '',
        message: prefilledMessage
      }));
    }
  }, [selectedPackage, prefilledMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await sendContactEmail(formData);
      
      if (response.success) {
        toast({
          title: "Meddelande skickat!",
          description: "Tack för ditt meddelande. Jag återkommer inom 24 timmar.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          project: '',
          message: ''
        });
      } else {
        throw new Error(response.error || 'Okänt fel');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Fel vid skickning",
        description: "Ett fel uppstod. Försök igen eller ring direkt på 076-111 84 47.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
    <section id="kontakt" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Kontakta mig tidigt – det lönar sig
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Många hör av sig för sent i processen och får onödiga problem. Ju tidigare du tar kontakt, desto smidigare blir hela projektet. <strong>Boka en kostnadsfri konsultation redan idag</strong> – så ser vi till att du får rätt start från början.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Kontaktinformation
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 bg-white rounded-lg ${
                    info.action ? 'cursor-pointer hover:shadow-md transition-shadow' : ''
                  }`}
                  onClick={info.action || undefined}
                >
                  <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{info.title}</div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg">
              <h4 className="font-semibold text-foreground mb-4">Kostnadsfri konsultation</h4>
              <p className="text-muted-foreground">
                Jag erbjuder alltid en kostnadsfri första konsultation där vi går igenom 
                ditt projekt och diskuterar vilka tjänster som behövs. Ring eller skicka 
                ett meddelande så bokar vi ett möte.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Skicka meddelande
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
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
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
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
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
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="">Välj projekttyp</option>
                  <option value="villa">Villa/Småhus</option>
                  <option value="flerfamilj">Flerfamiljshus</option>
                  <option value="kommersiell">Kommersiell byggnad</option>
                  <option value="renovering">Renovering</option>
                  <option value="annat">Annat</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Meddelande *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Berätta om ditt projekt..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full earth-gradient text-white hover:opacity-90 py-3"
              >
                {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};