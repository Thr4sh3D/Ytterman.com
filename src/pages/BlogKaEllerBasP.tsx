import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogKaEllerBasP = () => {
  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="KA eller BAS-P - Vad är skillnaden? | Guide | Tobias Ytterman"
        description="Förstå skillnaderna mellan kontrollansvarig (KA) och byggarbetsmiljösamordnare (BAS-P). Lär dig när du behöver vilken tjänst för ditt byggprojekt."
        keywords="kontrollansvarig, BAS-P, BAS-U, arbetsmiljösamordnare, byggprojekt, PBL, AML"
        canonicalUrl="https://ytterman.com/blogg/ka-eller-bas-p"
      />
      <Header />
      
      <main className="pt-24">
        <article className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blogg" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till bloggen
              </Link>
              
              <header className="mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  KA eller BAS-P - Vad är skillnaden?
                </h1>
                <div className="flex items-center space-x-4 text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>10 januari 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>4 min läsning</span>
                  </div>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Många byggherrar är osäkra på skillnaderna mellan kontrollansvarig (KA) och 
                  byggarbetsmiljösamordnare (BAS-P). Här förklarar vi de olika rollerna och när du behöver vad.
                </p>
              </header>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4">Kontrollansvarig (KA)</h2>
                <p className="text-muted-foreground mb-4">
                  En kontrollansvarig arbetar enligt Plan- och bygglagen (PBL) och ansvarar för att 
                  kontrollera att byggarbeten utförs enligt gällande byggregler och det beviljade bygglovet.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">KA:s huvuduppgifter:</h3>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Upprätta kontrollplan enligt PBL</li>
                  <li>Delta i tekniskt samråd med byggnadsnämnden</li>
                  <li>Genomföra kontroller under byggtiden</li>
                  <li>Utfärda slutbesked när bygget är klart</li>
                  <li>Säkerställa att bygget följer godkända ritningar och byggregler</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4">Byggarbetsmiljösamordnare (BAS)</h2>
                <p className="text-muted-foreground mb-4">
                  BAS arbetar enligt Arbetsmiljölagen (AML) och fokuserar på arbetsmiljö och säkerhet 
                  på byggarbetsplatsen. Det finns två typer av BAS:
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">BAS-P (Planering):</h3>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Samordnar arbetsmiljöarbetet under planeringsfasen</li>
                  <li>Upprättar arbetsmiljöplan</li>
                  <li>Identifierar risker och planerar säkerhetsåtgärder</li>
                  <li>Samordnar mellan olika aktörer i projektet</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">BAS-U (Utförande):</h3>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Samordnar arbetsmiljöarbetet under byggtiden</li>
                  <li>Övervakar att säkerhetsåtgärder följs</li>
                  <li>Genomför arbetsmiljöinspektioner</li>
                  <li>Hanterar arbetsmiljöfrågor på plats</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-4">Huvudskillnader</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="shadow-earth">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Kontrollansvarig (KA)</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Fokus: Byggkvalitet och regelefterlevnad</li>
                        <li>• Lagstiftning: Plan- och bygglagen (PBL)</li>
                        <li>• Ansvar: Teknisk kontroll av bygget</li>
                        <li>• Resultat: Slutbesked för bygget</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-earth">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">BAS-P/BAS-U</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Fokus: Arbetsmiljö och säkerhet</li>
                        <li>• Lagstiftning: Arbetsmiljölagen (AML)</li>
                        <li>• Ansvar: Säker arbetsmiljö</li>
                        <li>• Resultat: Säker byggarbetsplats</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-4">När behöver du vad?</h2>
                <p className="text-muted-foreground mb-4">
                  Många projekt kräver både KA och BAS, men det beror på projektets storlek och komplexitet:
                </p>

                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li><strong>Små projekt:</strong> Ofta räcker det med KA</li>
                  <li><strong>Medelstora projekt:</strong> Vanligtvis behövs både KA och BAS-P</li>
                  <li><strong>Stora projekt:</strong> Kräver KA, BAS-P och BAS-U</li>
                  <li><strong>Komplexa projekt:</strong> Kan kräva flera specialister inom varje område</li>
                </ul>

                <Card className="shadow-earth mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Behöver du hjälp att välja rätt tjänst?</h3>
                    <p className="text-muted-foreground mb-4">
                      Som certifierad både inom KA och BAS kan jag hjälpa dig att bedöma vilka tjänster 
                      ditt projekt behöver. Kontakta mig för en kostnadsfri rådgivning.
                    </p>
                    <Button 
                      onClick={callPhone}
                      className="earth-gradient text-white hover:opacity-90"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Ring 076-111 84 47
                    </Button>
                  </CardContent>
                </Card>

                <h2 className="text-2xl font-bold text-foreground mb-4">Kan samma person vara både KA och BAS?</h2>
                <p className="text-muted-foreground mb-6">
                  Ja, det är möjligt och ofta praktiskt att samma person har kompetens inom både KA och BAS. 
                  Detta ger flera fördelar som bättre samordning, enklare kommunikation och kostnadseffektivitet.
                </p>

                <p className="text-muted-foreground">
                  Med min bakgrund inom både kontrollansvarig och BAS-tjänster kan jag erbjuda en helhetslösning 
                  för ditt byggprojekt, vilket säkerställer både kvalitet och säkerhet genom hela processen.
                </p>
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