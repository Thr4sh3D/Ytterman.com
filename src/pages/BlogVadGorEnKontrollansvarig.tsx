import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogVadGorEnKontrollansvarig = () => {
  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Vad gör en kontrollansvarig? | Tobias Ytterman"
        description="En guide till kontrollansvarigs roll och ansvar enligt PBL. Läs mer om vad en KA gör och när du behöver en."
        keywords="kontrollansvarig, KA, PBL, bygglov, kontrollplan"
        canonicalUrl="https://ytterman.com/blogg/vad-gor-en-kontrollansvarig"
      />
      <Header />
      
      <main className="pt-24">
        <article className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/blogg" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till blogg
              </Link>
              
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Vad gör en kontrollansvarig?
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8">
                  En kontrollansvarig (KA) enligt Plan- och bygglagen (PBL) har en viktig roll i byggprocessen. 
                  Här förklarar jag vad en KA gör och när du behöver anlita en.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Kontrollansvarigs huvuduppgifter</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">1. Kontrollplan</h3>
                <p className="mb-4">
                  KA upprättar en kontrollplan som beskriver vilka kontroller som ska göras under byggprocessen. 
                  Planen ska säkerställa att byggnaden uppfyller alla krav i PBL och byggföreskrifterna.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">2. Tekniskt samråd</h3>
                <p className="mb-4">
                  KA deltar vid tekniskt samråd med byggnadsnämnden för att gå igenom projektet och 
                  säkerställa att alla tekniska lösningar är godkända.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">3. Kontroller under byggtiden</h3>
                <p className="mb-4">
                  Under byggprocessen utför KA de kontroller som anges i kontrollplanen. 
                  Detta inkluderar besök på arbetsplatsen och granskning av utförandet.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">4. Slutbesked</h3>
                <p className="mb-4">
                  När bygget är klart intygar KA att alla kontroller är utförda och att byggnaden 
                  uppfyller kraven. Detta är en förutsättning för slutbesked från kommunen.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">När behöver du en kontrollansvarig?</h2>
                <p className="mb-4">
                  En kontrollansvarig krävs för de flesta byggprojekt som kräver bygglov eller bygganmälan. 
                  Detta inkluderar:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Nybyggnation av bostäder och lokaler</li>
                  <li>Större om- och tillbyggnader</li>
                  <li>Industribyggnader</li>
                  <li>Infrastrukturprojekt</li>
                </ul>

                <div className="bg-accent/10 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-3">Behöver du hjälp med kontrollansvarig?</h3>
                  <p className="mb-4">
                    Som certifierad kontrollansvarig hjälper jag dig genom hela byggprocessen. 
                    Kontakta mig för en kostnadsfri konsultation.
                  </p>
                  <Button 
                    onClick={callPhone}
                    className="earth-gradient text-white hover:opacity-90"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Ring 076-111 84 47
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