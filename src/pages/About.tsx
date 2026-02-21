import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';

const About = () => {
  return (
    <>
      <AdvancedSEO 
        title="Om Ytterman - Kontrollansvarig & BAS-expert i Västernorrland"
        description="Lär känna Tobias Ytterman - certifierad kontrollansvarig och BAS-expert med över 20 års erfarenhet i byggbranschen. Trygg byggprocess i Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors."
        keywords="om ytterman, tobias ytterman, kontrollansvarig västernorrland, BAS expert, byggkontroll erfarenhet"
        url="https://ytterman.com/om"
      />
      
      <CanonicalUrl path="/om" />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                Om Ytterman
              </h1>
              
              <div className="prose prose-lg mx-auto">
                <p className="text-xl text-slate-600 mb-8 text-center">
                  Trygg byggprocess med över 20 års erfarenhet
                </p>
                
                <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    Tobias Ytterman
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Med över 20 års erfarenhet inom byggbranschen erbjuder jag professionella 
                    tjänster som kontrollansvarig och byggarbetsmiljösamordnare (BAS-P/BAS-U) 
                    i Västernorrland.
                  </p>
                  <p className="text-slate-600 mb-4">
                    Jag är certifierad enligt Plan- och bygglagen (PBL) och har gedigen 
                    erfarenhet av att säkerställa att byggprojekt genomförs enligt gällande 
                    regelverk och med högsta kvalitet.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-amber-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-amber-900 mb-3">
                      Vårt uppdrag
                    </h3>
                    <p className="text-amber-800">
                      Att säkerställa trygg och regelrätt byggprocess för alla våra kunder 
                      genom professionell kontroll och samordning.
                    </p>
                  </div>
                  
                  <div className="bg-stone-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-stone-900 mb-3">
                      Våra värderingar
                    </h3>
                    <p className="text-stone-800">
                      Transparens, pålitlighet och kvalitet i varje projekt. Vi tror på 
                      tydlig kommunikation och fast prismodell.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="/kontakt" 
                    className="inline-flex items-center px-6 py-3 earth-gradient text-white font-medium rounded-lg hover:opacity-90 transition-colors"
                  >
                    Kontakta oss
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;