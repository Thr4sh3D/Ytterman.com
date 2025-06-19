import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Phone, Mail, MapPin, Building, Shield } from 'lucide-react';

const KAHarnosand = () => {
  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:tobias@ytterman.com';
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Kontrollansvarig Härnösand | KA & BAS-tjänster | Tobias Ytterman"
        description="Lokala kontrollansvarig och BAS-tjänster i Härnösand. Baserad i Viksjö med djup kunskap om Härnösands kommun. Kontakta Tobias Ytterman idag."
        keywords="kontrollansvarig härnösand, KA härnösand, BAS-P härnösand, bygglov härnösand, viksjö"
        canonicalUrl="https://ytterman.com/ka-harnosand"
      />
      <Header />
      
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin className="w-6 h-6 text-accent" />
                <span className="text-accent font-semibold">Härnösand</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Kontrollansvarig & BAS-tjänster i <span className="text-gradient">Härnösand</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Lokala KA och BAS-tjänster i Härnösand. Baserad i Viksjö med djup kunskap om kommunens 
                byggbestämmelser och processer. Din lokala expert för byggprojekt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={callPhone}
                  size="lg"
                  className="earth-gradient text-white hover:opacity-90"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ring 076-111 84 47
                </Button>
                <Button 
                  onClick={sendEmail}
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Skicka e-post
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Tjänster i Härnösand</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-earth">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Building className="w-6 h-6 text-accent" />
                      <span>Kontrollansvarig enligt PBL</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Kontrollplaner för Härnösands kommun</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Tekniskt samråd med byggnadsnämnden</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Kontroller och slutbesked</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-earth">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-6 h-6 text-accent" />
                      <span>BAS-P och BAS-U</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Arbetsmiljösamordning planering</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Arbetsmiljösamordning utförande</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Säkerhetsronder och riskbedömningar</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Lokal förankring i Härnösand</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Baserad i Viksjö</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Som boende i Viksjö har jag djup lokal kunskap om Härnösands kommun, dess 
                    byggbestämmelser och byggnadsnämndens processer.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Snabb service</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kort avstånd till ditt projekt innebär snabba besök, flexibel service och 
                    kostnadseffektiva lösningar för ditt byggprojekt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Din lokala KA-expert i Härnösand</h2>
              <p className="text-muted-foreground mb-8">
                Som din lokala kontrollansvarig i Härnösand erbjuder jag personlig service och 
                djup kunskap om kommunens krav och processer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={callPhone}
                  size="lg"
                  className="earth-gradient text-white hover:opacity-90"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ring 076-111 84 47
                </Button>
                <Button 
                  onClick={sendEmail}
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  tobias@ytterman.com
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default KAHarnosand;