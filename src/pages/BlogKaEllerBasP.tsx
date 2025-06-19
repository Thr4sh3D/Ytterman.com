import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogKaEllerBasP = () => {
  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:tobias@ytterman.com';
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="KA eller BAS-P - Vad är skillnaden? | Tobias Ytterman"
        description="Förstå skillnaderna mellan kontrollansvarig (KA) och byggarbetsmiljösamordnare (BAS-P). Lär dig när du behöver vilken tjänst för ditt byggprojekt."
        keywords="kontrollansvarig, KA, BAS-P, BAS-U, skillnad, byggarbetsmiljö, samordnare"
        canonicalUrl="https://ytterman.com/blogg/ka-eller-bas-p"
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
                  KA eller BAS-P - Vad är skillnaden?
                </h1>
                <div className="text-muted-foreground">
                  Publicerad 10 januari 2024 • 4 min läsning
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Många som planerar ett byggprojekt undrar över skillnaderna mellan kontrollansvarig (KA) 
                  och byggarbetsmiljösamordnare (BAS-P/BAS-U). Här förklarar jag skillnaderna och när du behöver vad.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Kontrollansvarig (KA)</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Kontrollansvarig enligt Plan- och bygglagen (PBL) ansvarar för att byggarbetet följer:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Gällande byggbestämmelser</li>
                  <li>Bygglov och godkända handlingar</li>
                  <li>Tekniska egenskapskrav</li>
                  <li>Kvalitetskontroll av byggarbetet</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">BAS-P (Byggarbetsmiljösamordnare - Planering)</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  BAS-P enligt Arbetsmiljöverkets föreskrifter ansvarar för arbetsmiljöfrågor under planeringsfasen:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Samordning av arbetsmiljöarbetet</li>
                  <li>Upprättande av arbetsmiljöplan</li>
                  <li>Riskbedömningar</li>
                  <li>Säkerställa säker arbetsplats</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">BAS-U (Byggarbetsmiljösamordnare - Utförande)</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  BAS-U ansvarar för arbetsmiljösamordning under byggfasen:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Genomförande av arbetsmiljöplan</li>
                  <li>Samordning mellan olika entreprenörer</li>
                  <li>Säkerhetsronder och kontroller</li>
                  <li>Hantering av arbetsmiljörisker</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Huvudskillnaderna</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-secondary/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Kontrollansvarig (KA)</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Fokus på byggkvalitet</li>
                      <li>• Regelefterlevnad enligt PBL</li>
                      <li>• Teknisk kontroll</li>
                      <li>• Slutbesked från kommun</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-foreground mb-4">BAS-P/BAS-U</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Fokus på arbetsmiljö</li>
                      <li>• Säkerhet för arbetare</li>
                      <li>• Riskhantering</li>
                      <li>• Arbetsmiljöverket</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Kan samma person vara både KA och BAS?</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Ja! Många projekt drar nytta av att ha samma person som både kontrollansvarig och BAS-P/BAS-U. 
                  Detta ger bättre samordning och helhetssyn på projektet. Som erfaren inom båda rollerna kan jag 
                  erbjuda denna kombinerade tjänst.
                </p>

                <div className="bg-secondary/20 p-8 rounded-lg mt-12">
                  <h3 className="text-xl font-bold text-foreground mb-4">Behöver du både KA och BAS-tjänster?</h3>
                  <p className="text-muted-foreground mb-6">
                    Jag erbjuder både kontrollansvarig och BAS-tjänster för en smidig och effektiv byggprocess.
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

export default BlogKaEllerBasP;