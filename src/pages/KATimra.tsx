import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Phone, Mail, MapPin, Award, Shield } from 'lucide-react';

const KATimra = () => {
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
    window.location.href = 'mailto:tobias@ytterman.com?subject=Förfrågan om kontrollansvarig i Timrå&body=Hej Tobias,%0D%0A%0D%0AJag är intresserad av dina tjänster som kontrollansvarig i Timrå.%0D%0A%0D%0AMed vänliga hälsningar';
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Kontrollansvarig Timrå – För bygglov och PBL | Tobias Ytterman"
        description="Kontrollansvarig i Timrå med över 20 års erfarenhet. Hjälper med bygglov, kontrollplaner och BAS-U/BAS-P enligt PBL. Certifierad KA med fast pris och snabb service. Kostnadsfri konsultation."
        keywords="kontrollansvarig timrå, KA timrå, BAS-U timrå, bygglov timrå, kontrollplan timrå, certifierad ka timrå, byggarbetsmiljösamordnare timrå, PBL timrå"
        canonicalUrl="https://ytterman.com/ka-timra"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Kontrollansvarig <span className="text-gradient">Timrå</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                För bygglov och PBL – Certifierad KA och BAS-U/BAS-P
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
                  <span>Arbetar regelbundet i Timrå</span>
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
                    Kontrollansvarig i Timrå – Din partner för bygglov och PBL
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    Som certifierad kontrollansvarig enligt PBL erbjuder jag professionella 
                    tjänster för byggprojekt i Timrå. Jag utgår från Viksjö i Härnösand och 
                    arbetar regelbundet i Timrå kommun med olika typer av byggprojekt.
                  </p>

                  <p className="text-muted-foreground mb-8">
                    Med över 20 års erfarenhet från byggbranschen hjälper jag dig att säkerställa 
                    att ditt byggprojekt följer alla krav enligt PBL och arbetsmiljölagstiftningen. 
                    Jag känner till Timrå kommuns processer och krav väl.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span>Kontrollplaner enligt PBL</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span>Bygglovsprocess och kommunikation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span>BAS-U och BAS-P för arbetsmiljö</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span>Tekniska samråd med Timrå kommun</span>
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
                      <CardTitle className="text-xl">Varför välja mig som KA i Timrå?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Certifierad enligt branschstandard</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Erfarenhet från Timrå kommuns processer</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Komplett paket – KA + BAS</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Fast pris och tydliga kostnader</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>Digital hantering och snabb kommunikation</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-earth">
                    <CardHeader>
                      <CardTitle className="text-xl">Vanliga projekt i Timrå</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium mb-2">Bostäder:</div>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Villor och småhus</li>
                            <li>• Tillbyggnader</li>
                            <li>• Attefallshus</li>
                            <li>• Renoveringar</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-medium mb-2">Kommersiellt:</div>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Industribyggnader</li>
                            <li>• Kontorslokaler</li>
                            <li>• Lager och verkstäder</li>
                            <li>• Butikslokaler</li>
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
                Kontakta mig för ditt byggprojekt i Timrå
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Behöver du kontrollansvarig för bygglov eller BAS för ditt projekt i Timrå? 
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

export default KATimra;