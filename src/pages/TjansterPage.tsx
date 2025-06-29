import { Header } from '@/components/Header';
import { Services } from '@/components/Services';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { useNavigate } from 'react-router-dom';

const TjansterPage = () => {
  const navigate = useNavigate();

  const handleServiceSelect = (serviceId: string) => {
    navigate(`/kontakt?tjanst=${serviceId}`);
  };

  return (
    <>
      <AdvancedSEO 
        title="Tjänster - Kontrollansvarig & BAS-tjänster | Ytterman"
        description="Professionella tjänster för byggprojekt: Kontrollansvarig (KA), BAS-P, BAS-U, bygglovshandlingar och ritningar. Certifierad expert i Västernorrland."
        keywords="kontrollansvarig tjänster, BAS-P tjänster, BAS-U tjänster, bygglovshandlingar, planritningar, byggkontroll Västernorrland"
        url="https://ytterman.com/tjanster"
      />
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Våra Tjänster
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professionella tjänster för en trygg och säker byggprocess. 
                Vi erbjuder allt från kontrollansvarig till BAS-tjänster och bygglovshandlingar.
              </p>
            </div>
          </div>
          
          <Services onServiceSelect={handleServiceSelect} />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default TjansterPage;