import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogVadGorEnKontrollansvarig = () => {
  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:tobias@ytterman.com';
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Vad gör en kontrollansvarig? | Tobias Ytterman"
        description="En komplett guide till vad en kontrollansvarig gör enligt PBL. Lär dig om KA:s ansvar, uppgifter och när du behöver anlita en kontrollansvarig."
        keywords="kontrollansvarig, KA, PBL, bygglov, kontrollplan, ansvar, uppgifter"
        canonicalUrl="https://ytterman.com/blogg/vad-gor-en-kontrollansvarig"
      />
      <Header />
      
      <main className="pt-24">
        <article className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blogg" 
                className="inline-flex items-center text-accent hover:text-accent/80 mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till bloggen
              </Link>

              <header className="mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Vad gör en kontrollansvarig?
                </h1>
                <div className="text-muted-foreground">
                  Publicerad 15 januari 2024 • 5 min läsning
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  En kontrollansvarig (KA) enligt Plan- och bygglagen (PBL) har en central roll i byggprocessen. 
                  Här förklarar jag vad en kontrollansvarig gör och varför denna roll är så viktig.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Vad är en kontrollansvarig?</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  En kontrollansvarig är en person som enligt PBL ska se till att byggarbetet utförs enligt 
                  gällande bestämmelser, bygglov och godkända handlingar. KA:n fungerar som en oberoende 
                  granskare som säkerställer kvalitet och regelefterlevnad.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Huvuduppgifter för en kontrollansvarig</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">1. Kontrollplan</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      KA:n upprättar en kontrollplan som beskriver vilka kontroller som ska göras under 
                      byggprocessen och när de ska utföras.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2. Tekniskt samråd</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Deltagande vid tekniskt samråd med byggnadsnämnden för att gå igenom projektet 
                      och kontrollplanen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3. Kontroller under byggtiden</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Genomförande av kontroller enligt kontrollplanen, inklusive besök på arbetsplatsen 
                      och granskning av handlingar.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">4. Slutbesked</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Slutkontroll och medverkan vid ansökan om slutbesked från byggnadsnämnden.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">När behöver du en kontrollansvarig?</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  En kontrollansvarig krävs för de flesta byggprojekt som kräver bygglov, särskilt:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Nybyggnation av bostadshus</li>
                  <li>Större tillbyggnader</li>
                  <li>Kommersiella byggnader</li>
                  <li>Industribyggnader</li>
                  <li>Vissa anmälningspliktiga arbeten</li>
                </ul>

                <div className="bg-secondary/20 p-8 rounded-lg mt-12">
                  <h3 className="text-xl font-bold text-foreground mb-4">Behöver du hjälp med ditt byggprojekt?</h3>
                  <p className="text-muted-foreground mb-6">
                    Som erfaren kontrollansvarig hjälper jag dig genom hela processen från kontrollplan till slutbesked.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={callPhone}
                      className="earth-gradient text-white hover:opacity-90"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Ring 076-111 84 47
                    </Button>
                    <Button 
                      onClick={sendEmail}
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-white"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Skicka e-post
                    </Button>
                  </div>
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