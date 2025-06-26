import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ContactProps {
  selectedPackage: string;
}

export const Contact = ({ selectedPackage }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: selectedPackage,
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
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
      title: 'Telefon',
      value: '+46 76 111 84 47',
      action: () => window.open('tel:+46761118447')
    },
    {
      icon: Mail,
      title: 'E-post',
      value: 'info@ytterman.se',
      action: () => window.open('mailto:info@ytterman.se')
    },
    {
      icon: MapPin,
      title: 'Verksamhetsområde',
      value: 'Västernorrland',
      action: null
    },
    {
      icon: Clock,
      title: 'Öppettider',
      value: 'Mån-Fre 08:00-17:00',
      action: null
    }
  ];

  return (
    <section id="kontakt" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Kontakta Mig
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Redo att starta ditt byggprojekt? Kontakta mig för en kostnadsfri konsultation 
            och låt oss diskutera hur jag kan hjälpa dig.
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
                className="w-full earth-gradient text-white hover:opacity-90 py-3"
              >
                Skicka meddelande
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};