import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Phone, Mail, MapPin, Award, Shield } from 'lucide-react';

const KAKramfors = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:tobias@ytterman.com?subject=Förfrågan om kontrollansvarig i Kramfors&body=Hej Tobias,%0D%0A%0D%0AJag är intresserad av dina tjänster som kontrollansvarig i Kramfors.%0D%0A%0D%0AMed vänliga hälsningar';
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="BAS-U & Kontrollansvarig Kramfors – Certifierad KA | Tobias Ytterman"
        description="Kontrollansvarig och BAS-U/BAS-P i Kramfors. Certifierad KA med över 20 års erfarenhet. Hjälper med bygglov, kontrollplaner och arbetsmiljöansvar. Utgår från Viksjö, arbetar regelbundet i Kramfors."
        keywords="kontrollansvarig kramfors, KA kramfors, BAS-U kramfors, bygglov kramfors, kontrollplan kramfors, certifierad ka kramfors, byggarbetsmiljösamordnare kramfors"
        canonicalUrl="https://ytterman.com/ka-kramfors"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                BAS-U & Kontrollansvarig <span className="text-gradient">Kramfors</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Certifierad KA med komplett tjänsteutbud för ditt byggprojekt
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Certifierad KA enligt PBL</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>BAS-P & BAS-U</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Regelbundna uppdrag Kramfors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Kontrollansvarig och BAS i Kramfors – Komplett tjänsteutbud
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    Som certifierad kontrollansvarig enligt PBL och BAS-U/BAS-P erbjuder jag 
                    ett komplett tjänsteutbud för byggprojekt i Kramfors. Jag utgår från Viksjö 
                    i Härnösand och tar regelbundet uppdrag i Kramfors kommun.
                  </p>

                  <p className="text-muted-foreground mb-8">
                    Med över 20 års bred erfarenhet från byggbranschen, från snickare till 
                    projektledare, förstår jag byggprocessen från grunden. Detta ger mig 
                    unika förutsättningar att hjälpa dig genom hela projektet.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span>Kontrollplaner enligt PBL</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span>Arbetsmiljöplaner (BAS-P)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span>Koordinering under utförande (BAS-U)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span>Kommunikation med Kramfors kommun</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span>Slutkontroll och slutbesked</span>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <Card className="shadow-earth">
                    <CardHeader>
                      <CardTitle className="text-xl">Fördelar med min tjänst i Kramfors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Komplett paket – KA + BAS från samma person</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Praktisk erfarenhet från byggarbete</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Känner Kramfors kommuns processer</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Kostnadseffektiv lösning</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>En kontaktperson genom hela projektet</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-earth">
                    <CardHeader>
                      <CardTitle className="text-xl">Projekttyper i Kramfors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium mb-2">Bostäder:</div>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Villor och småhus</li>
                            <li>• Tillbyggnader</li>
                            <li>• Fritidshus</li>
                            <li>• Attefallshus</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-medium mb-2">Övrigt:</div>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Industribyggnader</li>
                            <li>• Lantbruksbyggnader</li>
                            <li>• Verkstäder</li>
                            <li>• Kommersiella lokaler</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Kontakta mig för ditt byggprojekt i Kramfors
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Behöver du kontrollansvarig eller BAS för ditt projekt i Kramfors? 
                Kontakta mig för en kostnadsfri konsultation och fast prisuppgift.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="shadow-earth">
                  <CardContent className="p-6">
                    <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Ring direkt</h3>
                    <p className="text-muted-foreground mb-4">Snabb kontakt</p>
                    <Button 
                      onClick={callPhone}
                      className="w-full earth-gradient text-white hover:opacity-90"
                    >
                      076-111 84 47
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-earth">
                  <CardContent className="p-6">
                    <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
                    <h3 className="font-bold mb-2">E-post</h3>
                    <p className="text-muted-foreground mb-4">Beskriv ditt projekt</p>
                    <Button 
                      onClick={sendEmail}
                      variant="outline"
                      className="w-full border-accent text-accent hover:bg-accent hover:text-white"
                    >
                      tobias@ytterman.com
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <p className="text-sm text-muted-foreground">
                Jag svarar oftast inom 24 timmar och erbjuder alltid en kostnadsfri första konsultation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default KAKramfors;