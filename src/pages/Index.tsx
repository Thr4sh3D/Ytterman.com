import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Phone, Mail, MapPin, Building, Shield, Users, Award } from 'lucide-react';

const Index = () => {
  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:tobias@ytterman.com';
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Tobias Ytterman - Kontrollansvarig & BAS-tjänster i Västernorrland"
        description="Professionella KA och BAS-tjänster i Västernorrland. Över 20 års erfarenhet inom bygg, räddningstjänst och projektledning. Kontakta Tobias Ytterman idag."
        keywords="kontrollansvarig, BAS-P, BAS-U, bygglov, kontrollplan, västernorrland, sundsvall, härnösand"
        canonicalUrl="https://ytterman.com"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Kontrollansvarig & <span className="text-gradient">BAS-tjänster</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Jag heter Tobias Ytterman och har över 20 års erfarenhet inom bygg, räddningstjänst och projektledning. 
                Jag har arbetat som snickare, arbetsledare, BAS‑U/BAS‑P och kontrollansvarig i allt från småhus till 
                vindkraftsprojekt och industribyggnation.
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

              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Baserad i Viksjö, Härnösand - Täcker hela Västernorrland</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Mina tjänster</h2>
              
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
                        <span>Kontrollplaner enligt PBL</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Deltagande vid tekniskt samråd</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Arbetsplatsbesök och slutbesked</span>
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
                        <span>BAS-P (Planering)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>BAS-U (Utförande)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Rådgivning inför bygglov/bygganmälan</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Över 20 års erfarenhet</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Bred erfarenhet</h3>
                  <p className="text-muted-foreground">Från småhus till vindkraftsprojekt och industribyggnation</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Certifierad</h3>
                  <p className="text-muted-foreground">Kvalificerad inom både KA och BAS-tjänster</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Lokal kännedom</h3>
                  <p className="text-muted-foreground">Baserad i Västernorrland med djup regional kunskap</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Kontakta mig idag</h2>
              <p className="text-muted-foreground mb-8">
                Behöver du hjälp med ditt byggprojekt? Kontakta mig för en kostnadsfri konsultation.
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

export default Index;