import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Phone, Mail, ArrowLeft, Shield, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogKaEllerBasP = () => {
  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:tobias@ytterman.com?subject=Fråga om KA och BAS-P&body=Hej Tobias,%0D%0A%0D%0AJag har läst din artikel om skillnaden mellan KA och BAS-P och undrar...%0D%0A%0D%0AMed vänliga hälsningar';
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="KA eller BAS-P – vad är skillnaden? | Tobias Ytterman"
        description="Lär dig skillnaden mellan kontrollansvarig (KA) och BAS-P. När behöver du vilken roll i ditt byggprojekt? Praktisk guide från erfaren KA och BAS."
        keywords="skillnad KA BAS-P, kontrollansvarig vs BAS-P, när behöver man BAS-P, PBL vs arbetsmiljölagen, byggarbetsmiljösamordnare"
        canonicalUrl="https://ytterman.com/blogg/ka-eller-bas-p"
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
                    <span>12 januari 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>4 min läsning</span>
                  </div>
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                    Skillnader
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  KA eller BAS-P – vad är skillnaden?
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Det är lätt att blanda ihop begreppen KA (Kontrollansvarig) och BAS-P (Byggarbetsmiljösamordnare för Planering). 
                  Båda behövs i många byggprojekt – men har helt olika roller.
                </p>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="shadow-earth">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="w-6 h-6 text-accent" />
                        <span>Kontrollansvarig (KA)</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-accent mb-2">Lagstiftning:</h4>
                          <p className="text-sm text-muted-foreground">Plan- och bygglagen (PBL)</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-accent mb-2">Fokus:</h4>
                          <p className="text-sm text-muted-foreground">Kontrollplan, bygglov och byggprocess</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-accent mb-2">Ansvar:</h4>
                          <p className="text-sm text-muted-foreground">Att bygget följer PBL och tekniska krav</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-earth">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="w-6 h-6 text-accent" />
                        <span>BAS-P</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-accent mb-2">Lagstiftning:</h4>
                          <p className="text-sm text-muted-foreground">Arbetsmiljölagen (AML)</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-accent mb-2">Fokus:</h4>
                          <p className="text-sm text-muted-foreground">Arbetsmiljösamordning vid planering</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-accent mb-2">Ansvar:</h4>
                          <p className="text-sm text-muted-foreground">Säker arbetsmiljö under byggprocessen</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-2xl font-bold mb-6">Detaljerade skillnader</h2>

                <div className="bg-card p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">🏗️ Kontrollansvarig (KA) enligt PBL</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Upprättar kontrollplan för byggprojektet</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Deltar vid tekniskt samråd med kommunen</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Kontrollerar att bygget följer bygglov och ritningar</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Gör regelbundna kontroller under byggprocessen</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Bistår vid slutbesked från kommunen</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">⚡ BAS-P (Byggarbetsmiljösamordnare för Planering)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Upprättar arbetsmiljöplan för projektet</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Identifierar arbetsmiljörisker redan i planeringsfasen</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Samordnar säkerhetsåtgärder mellan olika entreprenörer</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Säkerställer att arbetsmiljölagen följs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Förbereder för BAS-U under utförandefasen</span>
                    </li>
                  </ul>
                </div>

                <Card className="shadow-earth mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">🔍 Vad är BAS-U då?</h3>
                    <p className="text-muted-foreground mb-4">
                      Förutom BAS-P finns det även <strong>BAS-U (Byggarbetsmiljösamordnare för Utförande)</strong>. 
                      Denna roll ansvarar för arbetsmiljösamordning under själva byggfasen.
                    </p>
                    <p className="text-muted-foreground">
                      I vissa projekt behöver du även en BAS-U, särskilt när flera entreprenörer arbetar samtidigt 
                      på samma arbetsplats.
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-2xl font-bold mb-6">När behöver du vilken roll?</h2>

                <div className="bg-card p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">📋 Exempel på när du behöver både KA och BAS-P:</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Scenario:</strong> Du bygger ett nytt hus och använder flera olika entreprenörer 
                    (grund, stomme, tak, el, VVS, etc.).
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span><strong>KA behövs</strong> för att kontrollera att bygget följer PBL och bygglov</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span><strong>BAS-P behövs</strong> för att planera säker arbetsmiljö</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span><strong>BAS-U behövs</strong> för att samordna arbetsmiljön under bygget</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/20 p-4 rounded-lg mb-8">
                  <p className="text-sm font-medium">
                    💡 <strong>Viktigt:</strong> Rollen som KA får inte blandas ihop med byggledare, projektledare eller entreprenör. 
                    Det är helt separata funktioner med olika ansvar och certifieringskrav.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-6">Kan samma person vara både KA och BAS?</h2>
                
                <p className="text-muted-foreground mb-6">
                  Ja, det är vanligt att samma person är certifierad som både kontrollansvarig och BAS-P/BAS-U. 
                  Detta kan vara praktiskt och kostnadseffektivt för byggherren, eftersom:
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Du har en kontaktperson för båda områdena</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bättre samordning mellan PBL-krav och arbetsmiljökrav</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ofta mer kostnadseffektivt</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Enklare kommunikation och färre kontakter att hålla reda på</span>
                  </li>
                </ul>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-xl mt-12">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Behöver du både KA och BAS för ditt projekt?
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  Som certifierad kontrollansvarig och BAS-P/BAS-U kan jag hjälpa dig med båda rollerna. 
                  Kontakta mig för en kostnadsfri bedömning av ditt projekt.
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

export default BlogKaEllerBasP;