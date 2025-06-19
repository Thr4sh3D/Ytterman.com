import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Sidan hittades inte | Tobias Ytterman"
        description="Sidan du letar efter finns inte. Gå tillbaka till startsidan för kontrollansvarig och BAS-tjänster."
      />
      <Header />
      
      <main className="pt-24">
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-6xl font-bold text-foreground mb-6">404</h1>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Sidan hittades inte
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sidan du letar efter finns inte eller har flyttats. 
                Gå tillbaka till startsidan för att hitta det du söker.
              </p>
              
              <Button asChild className="earth-gradient text-white">
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Tillbaka till startsidan
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;