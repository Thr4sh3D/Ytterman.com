import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogVadGorEnKontrollansvarig = () => {
  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Vad gör en kontrollansvarig? | Guide till KA-rollen | Tobias Ytterman"
        description="En komplett guide till vad en kontrollansvarig gör enligt PBL. Lär dig om KA:s ansvar, uppgifter och när du behöver anlita en kontrollansvarig."
        keywords="kontrollansvarig, KA, PBL, bygglov, kontrollplan, tekniskt samråd, slutbesked"
        canonicalUrl="https://ytterman.com/blogg/vad-gor-en-kontrollansvarig"
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
                  Vad gör en kontrollansvarig?
                </h1>
                <div className="flex items-center space-x-4 text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>15 januari 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>5 min läsning</span>
                  </div>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  En kontrollansvarig (KA) spelar en avgörande roll i byggprocessen enligt Plan- och bygglagen (PBL). 
                  Här förklarar vi vad en KA gör och varför rollen är så viktig.
                </p>
              </header>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4">Vad är en kontrollansvarig?</h2>
                <p className="text-muted-foreground mb-6">
                  En kontrollansvarig är en certifierad person som ansvarar för att kontrollera att byggarbeten 
                  utförs enligt gällande byggregler och det beviljande bygglovet. KA:n fungerar som en oberoende 
                  tredje part som säkerställer kvalitet och regelefterlevnad.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">Huvuduppgifter för en kontrollansvarig</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">1. Kontrollplan</h3>
                <p className="text-muted-foreground mb-4">
                  KA:n upprättar en detaljerad kontrollplan som beskriver vilka kontroller som ska göras 
                  under byggprocessen, när de ska utföras och vem som ansvarar för dem.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">2. Tekniskt samråd</h3>
                <p className="text-muted-foreground mb-4">
                  Deltagande i tekniskt samråd med byggnadsnämnden för att gå igenom projektet och 
                  säkerställa att alla parter förstår kraven och förväntningarna.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">3. Kontroller under byggtiden</h3>
                <p className="text-muted-foreground mb-4">
                  Genomförande av regelbundna kontroller på byggarbetsplatsen för att verifiera att 
                  arbetet utförs enligt godkända ritningar och gällande byggregler.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">4. Slutbesked</h3>
                <p className="text-muted-foreground mb-6">
                  När bygget är klart utfärdar KA:n ett slutbesked som bekräftar att alla kontroller 
                  är genomförda och att bygget uppfyller alla krav.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-4">När behöver du en kontrollansvarig?</h2>
                <p className="text-muted-foreground mb-4">
                  En kontrollansvarig krävs för de flesta byggprojekt som kräver bygglov, inklusive:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Nybyggnation av bostäder och andra byggnader</li>
                  <li>Större tillbyggnader och ombyggnader</li>
                  <li>Industribyggnader och kommersiella projekt</li>
                  <li>Vissa typer av anläggningar och infrastrukturprojekt</li>
                </ul>

                <Card className="shadow-earth mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Behöver du hjälp med KA-tjänster?</h3>
                    <p className="text-muted-foreground mb-4">
                      Som certifierad kontrollansvarig i Västernorrland hjälper jag dig genom hela byggprocessen. 
                      Kontakta mig för en kostnadsfri konsultation.
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

                <h2 className="text-2xl font-bold text-foreground mb-4">Fördelar med en erfaren kontrollansvarig</h2>
                <p className="text-muted-foreground mb-4">
                  Att anlita en erfaren KA ger flera fördelar:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Säkerställer att projektet följer alla byggregler</li>
                  <li>Minskar risken för kostsamma fel och omarbetningar</li>
                  <li>Underlättar kommunikationen med byggnadsnämnden</li>
                  <li>Ger trygghet genom professionell kvalitetskontroll</li>
                </ul>

                <p className="text-muted-foreground">
                  Med över 20 års erfarenhet inom bygg och projektledning hjälper jag dig att navigera 
                  genom byggprocessen på ett smidigt och effektivt sätt.
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

export default BlogVadGorEnKontrollansvarig;