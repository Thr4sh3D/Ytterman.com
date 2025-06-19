import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Sidan hittades inte | Tobias Ytterman"
        description="Sidan du letar efter finns inte. Gå tillbaka till startsidan för att hitta information om kontrollansvarig och BAS-tjänster."
      />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="text-8xl font-bold text-muted-foreground mb-8">404</div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Sidan hittades inte
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Sidan du letar efter finns inte eller har flyttats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="earth-gradient text-white">
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Tillbaka till startsidan
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Gå tillbaka
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;