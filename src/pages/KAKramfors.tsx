import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const KAKramfors = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Kontrollansvarig Kramfors | Tobias Ytterman"
        description="Kontrollansvarig (KA) och BAS-tjänster i Kramfors. Certifierad KA med över 20 års erfarenhet hjälper dig med ditt byggprojekt."
        keywords="kontrollansvarig kramfors, KA kramfors, BAS kramfors, bygglov kramfors"
        canonicalUrl="https://ytterman.com/ka-kramfors"
      />
      <Header />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Kontrollansvarig i Kramfors
          </h1>
          <p className="text-center text-muted-foreground">
            Denna sida är under utveckling. Kontakta mig för mer information om KA-tjänster i Kramfors.
          </p>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default KAKramfors;