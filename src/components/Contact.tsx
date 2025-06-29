import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ContactProps {
  selectedPackage?: string;
  prefilledMessage?: string;
}

export const Contact = ({ selectedPackage, prefilledMessage }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: prefilledMessage || ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Meddelande skickat!",
        description: "Vi återkommer till dig inom 24 timmar.",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          project: '',
          message: ''
        });
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Fel vid skickning",
        description: "Något gick fel. Försök igen eller ring oss direkt.",
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

  if (isSubmitted) {
    return (
      <section id="kontakt" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  Tack för ditt meddelande!
                </h3>
                <p className="text-green-700">
                  Vi har mottagit din förfrågan och återkommer till dig inom 24 timmar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="kontakt" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Kontakta oss
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Redo att starta ditt byggprojekt? Fyll i formuläret nedan för en kostnadsfri 
            konsultation och personlig offert anpassad efter dina behov.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">
                Få kostnadsfri konsultation
              </CardTitle>
              <CardDescription>
                {selectedPackage 
                  ? `Du har valt: ${selectedPackage.replace('-', ' ').toUpperCase()}`
                  : 'Berätta om ditt projekt så återkommer vi med en skräddarsydd offert'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Namn *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ditt fullständiga namn"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-post *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="din@email.se"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
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
                    <Label htmlFor="project">Typ av projekt</Label>
                    <Input
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      placeholder="T.ex. Villabygge, Tillbyggnad"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Meddelande *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Beskriv ditt projekt och vilken hjälp du behöver..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full earth-gradient text-white hover:opacity-90"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Skickar...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Skicka meddelande
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">
                  Kontakta oss direkt
                </CardTitle>
                <CardDescription>
                  Föredrar du att ringa eller maila direkt? Här är våra kontaktuppgifter.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-slate-900">Telefon</div>
                    <a href="tel:+46761118447" className="text-primary hover:underline">
                      076-111 84 47
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-slate-900">E-post</div>
                    <a href="mailto:tobias@ytterman.com" className="text-primary hover:underline">
                      tobias@ytterman.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-slate-900">Verksamhetsområde</div>
                    <div className="text-slate-600">Västernorrland, Sverige</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-slate-900">Svarstid</div>
                    <div className="text-slate-600">Inom 24 timmar</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">
                  Verksamhetsområden
                </CardTitle>
                <CardDescription>
                  Vi verkar i hela Västernorrland med fokus på följande kommuner.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Sundsvall
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Härnösand
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Sollefteå
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Timrå
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Kramfors
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Övriga Västernorrland
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Snabb respons garanterad
                </h3>
                <p className="text-sm text-slate-600">
                  Vi svarar på alla förfrågningar inom 24 timmar. För akuta ärenden, 
                  ring oss direkt på 076-111 84 47.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};