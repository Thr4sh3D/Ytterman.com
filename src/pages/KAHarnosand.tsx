import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const KAHarnosand = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Kontrollansvarig Härnösand | Tobias Ytterman"
        description="Kontrollansvarig (KA) och BAS-tjänster i Härnösand. Certifierad KA med över 20 års erfarenhet hjälper dig med ditt byggprojekt."
        keywords="kontrollansvarig härnösand, KA härnösand, BAS härnösand, bygglov härnösand"
        canonicalUrl="https://ytterman.com/ka-harnosand"
      />
      <Header />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Kontrollansvarig i Härnösand
          </h1>
          <p className="text-center text-muted-foreground">
            Denna sida är under utveckling. Kontakta mig för mer information om KA-tjänster i Härnösand.
          </p>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default KAHarnosand;