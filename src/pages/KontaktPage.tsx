import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { FAQ, faqData } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const KontaktPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Meddelande skickat!",
        description: "Vi återkommer inom 24 timmar.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Fel uppstod",
        description: "Försök igen eller ring oss direkt.",
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "076-111 84 47",
      link: "tel:+46761118447",
      description: "Ring för akuta frågor"
    },
    {
      icon: Mail,
      title: "E-post",
      value: "tobias@ytterman.com",
      link: "mailto:tobias@ytterman.com",
      description: "Skicka dina frågor"
    },
    {
      icon: MapPin,
      title: "Område",
      value: "Västernorrland",
      description: "Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors"
    },
    {
      icon: Clock,
      title: "Öppettider",
      value: "Mån-Fre 08:00-17:00",
      description: "Flexibla möten efter överenskommelse"
    }
  ];

  const services = [
    "Kontrollansvarig (KA) enligt PBL",
    "BAS-P - Byggarbetsmiljösamordnare Projektering", 
    "BAS-U - Byggarbetsmiljösamordnare Utförande",
    "Bygglovshandlingar och ritningar",
    "Konsultation och rådgivning"
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Kontakt", url: "https://ytterman.com/kontakt" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Kontakt - Kontrollansvarig & BAS i Västernorrland | Ytterman"
        description="Kontakta Ytterman för kontrollansvarig, BAS-P, BAS-U och byggkonsultation i Västernorrland. Ring 076-111 84 47 eller maila tobias@ytterman.com. Kostnadsfri konsultation."
        keywords="kontakt kontrollansvarig, BAS-P BAS-U Västernorrland, byggkonsult Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors, tobias ytterman"
        url="https://ytterman.com/kontakt"
        breadcrumbs={breadcrumbs}
        faq={faqData.general}
        organization={true}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Breadcrumbs */}
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Kontakta oss
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Behöver du hjälp med kontrollansvarig, BAS-P, BAS-U eller andra byggtjänster? 
                  Kontakta oss för en kostnadsfri konsultation och fast prisoffert.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Ring direkt: 076-111 84 47
                  </a>
                  <a 
                    href="mailto:tobias@ytterman.com"
                    className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    tobias@ytterman.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Info & Form */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Information */}
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">
                      Kontaktinformation
                    </h2>
                    
                    <div className="space-y-6 mb-12">
                      {contactInfo.map((info, index) => {
                        const IconComponent = info.icon;
                        return (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900 mb-1">
                                {info.title}
                              </h3>
                              {info.link ? (
                                <a 
                                  href={info.link}
                                  className="text-primary hover:underline font-semibold"
                                >
                                  {info.value}
                                </a>
                              ) : (
                                <p className="font-semibold text-slate-900">
                                  {info.value}
                                </p>
                              )}
                              <p className="text-slate-600 text-sm">
                                {info.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6">
                      <h3 className="font-bold text-slate-900 mb-4">
                        Våra tjänster
                      </h3>
                      <ul className="space-y-2">
                        {services.map((service, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-slate-700">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">
                      Skicka meddelande
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
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
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                            E-post *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="din@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                            Telefon
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="070-123 45 67"
                          />
                        </div>
                        <div>
                          <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-2">
                            Typ av projekt
                          </label>
                          <Input
                            id="project"
                            name="project"
                            type="text"
                            value={formData.project}
                            onChange={handleChange}
                            placeholder="T.ex. Nybyggnation villa"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                          Meddelande *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Beskriv ditt projekt och vilken hjälp du behöver..."
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full earth-gradient text-white hover:opacity-90 py-4 text-lg"
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
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQ items={faqData.general} />

          {/* Service Areas */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Våra verksamhetsområden
                </h2>
                <p className="text-xl text-slate-600 mb-12">
                  Vi verkar i hela Västernorrland och erbjuder våra tjänster i följande områden:
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { city: "Sundsvall", description: "Huvudkontor och primärt verksamhetsområde" },
                    { city: "Härnösand", description: "Regelbunden service och snabb respons" },
                    { city: "Sollefteå", description: "Omfattande erfarenhet av lokala projekt" },
                    { city: "Timrå", description: "Nära samarbete med lokala entreprenörer" },
                    { city: "Kramfors", description: "Etablerade kontakter och referenser" },
                    { city: "Övriga Västernorrland", description: "Flexibel service i hela regionen" }
                  ].map((area, index) => (
                    <div key={index} className="bg-slate-50 p-6 rounded-lg">
                      <h3 className="font-bold text-slate-900 mb-2">{area.city}</h3>
                      <p className="text-slate-600 text-sm">{area.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default KontaktPage;