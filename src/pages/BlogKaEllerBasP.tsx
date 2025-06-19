import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogKaEllerBasP = () => {
  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="KA eller BAS-P - Vad är skillnaden? | Tobias Ytterman"
        description="Förstå skillnaderna mellan kontrollansvarig (KA) och byggarbetsmiljösamordnare (BAS-P). Guide till när du behöver vilken tjänst."
        keywords="kontrollansvarig, BAS-P, BAS-U, skillnad, byggarbetsmiljö"
        canonicalUrl="https://ytterman.com/blogg/ka-eller-bas-p"
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
                KA eller BAS-P - Vad är skillnaden?
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8">
                  Många blandar ihop rollerna kontrollansvarig (KA) och byggarbetsmiljösamordnare (BAS). 
                  Här förklarar jag skillnaderna och när du behöver vilken tjänst.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Kontrollansvarig (KA)</h2>
                <p className="mb-4">
                  Kontrollansvarig arbetar enligt Plan- och bygglagen (PBL) och fokuserar på att säkerställa 
                  att byggnaden uppfyller alla tekniska krav och byggföreskrifter.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">KA:s huvuduppgifter:</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Upprätta kontrollplan</li>
                  <li>Delta vid tekniskt samråd</li>
                  <li>Utföra kontroller enligt kontrollplanen</li>
                  <li>Intyga att byggnaden uppfyller kraven</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Byggarbetsmiljösamordnare (BAS)</h2>
                <p className="mb-4">
                  BAS arbetar enligt Arbetsmiljöverkets föreskrifter (AFS) och fokuserar på arbetsmiljö 
                  och säkerhet på byggarbetsplatsen.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">BAS-P (Planering):</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Samordnar arbetsmiljöfrågor under planeringsfasen</li>
                  <li>Upprättar arbetsmiljöplan</li>
                  <li>Identifierar risker i projekteringsskedet</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">BAS-U (Utförande):</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Samordnar arbetsmiljöfrågor under byggskedet</li>
                  <li>Övervakar att arbetsmiljöplanen följs</li>
                  <li>Säkerställer säker arbetsmiljö på byggplatsen</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">När behöver du vad?</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Du behöver KA när:</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Projektet kräver bygglov eller bygganmälan</li>
                  <li>Kommunen kräver kontrollansvarig</li>
                  <li>Du vill säkerställa teknisk kvalitet</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Du behöver BAS när:</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Flera entreprenörer arbetar samtidigt</li>
                  <li>Projektet innebär särskilda risker</li>
                  <li>Arbetsmiljöverket kräver BAS</li>
                </ul>

                <div className="bg-accent/10 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-3">Behöver du både KA och BAS?</h3>
                  <p className="mb-4">
                    Många projekt kräver både kontrollansvarig och BAS. Som certifierad inom båda områdena 
                    kan jag hjälpa dig med alla aspekter av ditt byggprojekt.
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

export default BlogKaEllerBasP;