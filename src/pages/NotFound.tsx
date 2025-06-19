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
        description="Sidan du letar efter finns inte. Gå tillbaka till startsidan för KA och BAS-tjänster i Västernorrland."
      />
      <Header />
      
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10 min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-6xl lg:text-8xl font-bold text-accent mb-6">
                404
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Sidan hittades inte
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Sidan du letar efter finns inte eller har flyttats. 
                Gå tillbaka till startsidan för att hitta information om KA och BAS-tjänster.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="earth-gradient text-white hover:opacity-90"
                >
                  <Link to="/">
                    <Home className="w-5 h-5 mr-2" />
                    Gå till startsidan
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                  onClick={() => window.history.back()}
                >
                  <button>
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Gå tillbaka
                  </button>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;