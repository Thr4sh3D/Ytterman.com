import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Phone, Mail, Award, Shield, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        title="Kontrollansvarig & BAS i Västernorrland | Tobias Ytterman"
        description="Jag heter Tobias Ytterman och har över 20 års erfarenhet inom bygg, räddningstjänst och projektledning. Certifierad kontrollansvarig och BAS-P/BAS-U i Västernorrland."
        keywords="kontrollansvarig västernorrland, KA sundsvall, BAS-P härnösand, bygglov sollefteå, kontrollplan timrå, kramfors"
        canonicalUrl="https://ytterman.com"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Kontrollansvarig & <span className="text-gradient">BAS i Västernorrland</span>
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
                  <span>Viksjö, Härnösand</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Mina tjänster</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-earth">
                  <CardHeader>
                    <CardTitle className="text-xl">Kontrollansvarig enligt PBL</CardTitle>
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
                    <CardTitle className="text-xl">BAS-P och BAS-U</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Arbetsmiljösamordning vid planering</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Arbetsmiljösamordning vid utförande</span>
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

        {/* Service Areas */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Serviceområden i Västernorrland</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Baserad i Viksjö (Härnösand) och arbetar i hela Västernorrland
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/ka-sundsvall" className="group">
                  <Card className="shadow-earth hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Sundsvall</h3>
                      <p className="text-sm text-muted-foreground">KA & BAS-tjänster</p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/ka-solleftea" className="group">
                  <Card className="shadow-earth hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Sollefteå</h3>
                      <p className="text-sm text-muted-foreground">KA & BAS-tjänster</p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/ka-timra" className="group">
                  <Card className="shadow-earth hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Timrå</h3>
                      <p className="text-sm text-muted-foreground">KA & BAS-tjänster</p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/ka-kramfors" className="group">
                  <Card className="shadow-earth hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Kramfors</h3>
                      <p className="text-sm text-muted-foreground">KA & BAS-tjänster</p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/ka-harnosand" className="group">
                  <Card className="shadow-earth hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Härnösand</h3>
                      <p className="text-sm text-muted-foreground">KA & BAS-tjänster</p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Card className="shadow-earth">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg mb-2">Hela Västernorrland</h3>
                    <p className="text-sm text-muted-foreground">Kontakta för andra orter</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Läs mer på bloggen</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tips, råd och guider om kontrollansvarig och BAS-tjänster
              </p>
              <Button asChild className="earth-gradient text-white">
                <Link to="/blogg">
                  Läs bloggen
                </Link>
              </Button>
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