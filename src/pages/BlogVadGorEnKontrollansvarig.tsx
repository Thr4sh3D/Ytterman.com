import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, CheckCircle, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogVadGorEnKontrollansvarig = () => {
  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:tobias@ytterman.com?subject=Fråga om kontrollansvarig&body=Hej Tobias,%0D%0A%0D%0AJag har läst din artikel om kontrollansvarig och undrar...%0D%0A%0D%0AMed vänliga hälsningar';
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Vad gör en kontrollansvarig (KA) – och när behöver du en? | Tobias Ytterman"
        description="Lär dig vad en kontrollansvarig gör enligt PBL och när du behöver anlita en KA för ditt byggprojekt. Praktisk guide från erfaren kontrollansvarig."
        keywords="vad gör kontrollansvarig, KA uppgifter, när behöver man kontrollansvarig, PBL kontrollansvarig, bygglov kontrollansvarig"
        canonicalUrl="https://ytterman.com/blogg/vad-gor-en-kontrollansvarig"
      />
      <Header />
      
      <main className="pt-24">
        {/* Breadcrumb */}
        <section className="py-8 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blogg" 
                className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Tillbaka till bloggen</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Article Header */}
              <header className="mb-12">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>15 januari 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>5 min läsning</span>
                  </div>
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                    Grundläggande
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Vad gör en kontrollansvarig (KA) – och när behöver du en?
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Om du planerar att bygga nytt, bygga till eller göra en ombyggnad kan du behöva anlita en kontrollansvarig (KA). Men vad innebär rollen egentligen – och när är det ett krav?
                </p>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="bg-accent/10 p-6 rounded-xl mb-8">
                  <h2 className="text-2xl font-bold mb-4">Vad är en kontrollansvarig?</h2>
                  <p className="text-muted-foreground">
                    En kontrollansvarig (KA) är en certifierad person som enligt plan- och bygglagen (PBL) 
                    ansvarar för att kontrollera att ett byggprojekt följer gällande lagar, regler och 
                    den upprättade kontrollplanen.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-6">Huvuduppgifter för en kontrollansvarig</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Upprättar kontrollplan</h3>
                      <p className="text-muted-foreground">
                        KA ser till att bygget följer lagar, regler och kontrollplaner enligt Plan- och bygglagen (PBL). 
                        Kontrollplanen beskriver vilka kontroller som ska göras under byggprocessen.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Deltar vid tekniskt samråd</h3>
                      <p className="text-muted-foreground">
                        KA deltar vid tekniskt samråd med kommunen för att gå igenom projektet och 
                        säkerställa att alla krav är uppfyllda innan byggstart.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Gör arbetsplatsbesök</h3>
                      <p className="text-muted-foreground">
                        Under byggprocessen gör KA regelbundna besök på arbetsplatsen för att kontrollera 
                        att arbetet utförs enligt kontrollplanen och gällande bestämmelser.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Bistår vid slutbesked</h3>
                      <p className="text-muted-foreground">
                        När bygget är klart hjälper KA till med slutkontroll och dokumentation 
                        som behövs för att få slutbesked från kommunen.
                      </p>
                    </div>
                  </div>
                </div>

                <Card className="shadow-earth mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">När krävs en kontrollansvarig?</h3>
                    <p className="text-muted-foreground mb-4">
                      En kontrollansvarig krävs vid de flesta bygglovspliktiga åtgärder, till exempel:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Nybyggnad av bostadshus</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Större tillbyggnader</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Vissa installationer och ombyggnader</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Kommersiella byggnader</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Vissa attefallshus (vid tekniskt komplicerade lösningar)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="bg-card p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">💡 Viktigt att komma ihåg</h3>
                  <p className="text-muted-foreground mb-4">
                    Som byggherre är det <strong>ditt ansvar</strong> att anlita en certifierad kontrollansvarig. 
                    Det räcker inte att entreprenören har en KA – du som byggherre måste ha en egen.
                  </p>
                  <div className="bg-accent/20 p-4 rounded-lg">
                    <p className="text-sm font-medium">
                      📌 <strong>Tips:</strong> Kontakta KA tidigt i processen – det kan spara både tid och pengar. 
                      En erfaren KA kan hjälpa dig undvika vanliga misstag redan från början.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Skillnad mellan KA och andra roller</h2>
                
                <p className="text-muted-foreground mb-6">
                  Det är viktigt att förstå att en kontrollansvarig inte är samma sak som:
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Byggledare</strong> – ansvarar för den praktiska genomförandet av bygget</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Projektledare</strong> – koordinerar hela byggprojektet</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>BAS-P/BAS-U</strong> – ansvarar för arbetsmiljösamordning (kan dock vara samma person)</span>
                  </li>
                </ul>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-xl mt-12">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Behöver du hjälp med kontrollansvarig?
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  Som certifierad kontrollansvarig i Västernorrland hjälper jag dig genom hela byggprocessen. 
                  Kontakta mig för en kostnadsfri konsultation om ditt projekt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={callPhone}
                    className="earth-gradient text-white hover:opacity-90"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Ring 076-111 84 47
                  </Button>
                  <Button 
                    onClick={sendEmail}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Skicka e-post
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogVadGorEnKontrollansvarig;