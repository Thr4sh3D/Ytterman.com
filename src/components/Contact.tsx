import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { sendEmail } from '@/integrations/core';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    package: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Package options from pricing
  const packages = [
    {
      id: 'kontrollansvarig',
      name: 'Kontrollansvarig',
      description: 'För mindre projekt (från 15 000 kr)',
      features: ['Kontrollplan', 'Kontrollbesiktningar', 'Slutbesiktning', 'Slutbevis']
    },
    {
      id: 'ka-bas-paket',
      name: 'KA + BAS Paket',
      description: 'Mest populära (från 25 000 kr)',
      features: ['Kontrollansvarig', 'BAS-P (Projektering)', 'BAS-U (Utförande)', 'Arbetsmiljöplan']
    },
    {
      id: 'brf-stora-projekt',
      name: 'BRF & Större Projekt',
      description: 'För komplexa projekt (Offert efter behov)',
      features: ['Skräddarsydd lösning', 'Projektledning', 'Flera kontrollansvariga', 'Utökad BAS-funktion']
    }
  ];

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
      // Find selected package details
      const selectedPackage = packages.find(pkg => pkg.id === formData.package);
      const packageInfo = selectedPackage ? `${selectedPackage.name} - ${selectedPackage.description}` : 'Ej angivet';

      // Create email content
      const emailBody = `
Nytt meddelande från webbplatsen:

Namn: ${formData.name}
E-post: ${formData.email}
Telefon: ${formData.phone || 'Ej angivet'}
Projekttyp: ${formData.project || 'Ej angivet'}
Intresserad av paket: ${packageInfo}

Meddelande:
${formData.message}

---
Skickat från kontaktformuläret på ytterman.com
      `.trim();

      await sendEmail({
        to: 'tobias@ytterman.com',
        subject: `Ny förfrågan från ${formData.name}${selectedPackage ? ` - ${selectedPackage.name}` : ''}`,
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
        package: '',
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

  const selectedPackageDetails = packages.find(pkg => pkg.id === formData.package);

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

              {/* Package Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  <Package className="w-4 h-4 inline mr-2" />
                  Intresserad av paket
                </label>
                <div className="space-y-3">
                  {packages.map((pkg) => (
                    <label key={pkg.id} className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="package"
                        value={pkg.id}
                        checked={formData.package === pkg.id}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-accent border-gray-300 focus:ring-accent"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{pkg.name}</div>
                        <div className="text-sm text-muted-foreground">{pkg.description}</div>
                      </div>
                    </label>
                  ))}
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="package"
                      value=""
                      checked={formData.package === ''}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-accent border-gray-300 focus:ring-accent"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-foreground">Osäker/Annan förfrågan</div>
                      <div className="text-sm text-muted-foreground">Jag hjälper dig hitta rätt lösning</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Package Details */}
              {selectedPackageDetails && (
                <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-medium text-foreground mb-2">
                    {selectedPackageDetails.name} inkluderar:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {selectedPackageDetails.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
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