import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Button } from '@/components/ui/button';
import { Home, Search, Phone, ArrowLeft, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const popularPages = [
    { name: "Tjänster", url: "/tjanster", description: "Kontrollansvarig, BAS-P, BAS-U och bygglovshandlingar" },
    { name: "Kontrollansvarig Guide", url: "/guider/kontrollansvarig", description: "Allt om KA-rollen och teknisk kontroll" },
    { name: "BAS Guide", url: "/guider/bas", description: "Arbetsmiljösamordning under projektering och utförande" },
    { name: "Vanliga frågor", url: "/faq", description: "Svar på de mest frekventa frågorna" },
    { name: "Kontakt", url: "/kontakt", description: "Kom i kontakt med oss för kostnadsfri konsultation" },
    { name: "Guider", url: "/guider", description: "Expertguider och tips för byggprocessen" }
  ];

  const localAreas = [
    "Sundsvall", "Härnösand", "Sollefteå", "Timrå", "Kramfors", "Ånge"
  ];

  return (
    <>
      <Helmet>
        <title>Sidan hittades inte (404) - Kontrollansvarig & BAS | Ytterman</title>
        <meta name="description" content="Sidan du söker finns inte. Hitta våra tjänster inom kontrollansvarig, BAS-P, BAS-U och byggkonsultation i Västernorrland. Verksam i Sundsvall, Härnösand, Sollefteå." />
        <meta name="keywords" content="404, sida hittades inte, kontrollansvarig Västernorrland, BAS-P Sundsvall, BAS-U Härnösand, byggkontroll Sollefteå" />
        <link rel="canonical" href="https://ytterman.com/404" />
        <meta name="robots" content="noindex, follow" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Sidan hittades inte (404) | Ytterman" />
        <meta property="og:description" content="Sidan du söker finns inte. Hitta våra tjänster inom kontrollansvarig och BAS i Västernorrland." />
        <meta property="og:url" content="https://ytterman.com/404" />
        <meta property="og:type" content="website" />
        
        {/* Structured data for organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sidan hittades inte (404)",
            "description": "Sidan du söker finns inte. Hitta våra tjänster inom kontrollansvarig och BAS i Västernorrland.",
            "url": "https://ytterman.com/404",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Ytterman - Kontrollansvarig & BAS",
              "url": "https://ytterman.com"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow" role="main">
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-8xl font-bold text-slate-300 mb-6" aria-hidden="true">404</div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">
                  Sidan hittades inte
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Sidan du söker finns inte eller har flyttats. 
                  Använd navigationen nedan för att hitta det du letar efter.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button 
                    onClick={() => window.location.href = '/'}
                    className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                    aria-label="Gå till startsidan"
                  >
                    <Home className="w-5 h-5 mr-2" aria-hidden="true" />
                    Tillbaka till startsidan
                  </Button>
                  <Button 
                    onClick={() => window.history.back()}
                    variant="outline"
                    className="px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Gå tillbaka till föregående sida"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
                    Gå tillbaka
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  Populära sidor
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularPages.map((page, index) => (
                    <a
                      key={index}
                      href={page.url}
                      className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-label={`Gå till ${page.name}`}
                    >
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {page.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Våra tjänsteområden i Västernorrland
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Vi erbjuder kontrollansvarig och BAS-tjänster i hela Västernorrland
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {localAreas.map((area, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-4 py-2 bg-white rounded-full text-slate-700 shadow-sm"
                    >
                      <MapPin className="w-4 h-4 mr-2 text-primary" aria-hidden="true" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Behöver du hjälp?
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Om du inte hittar det du söker, kontakta oss direkt. 
                Vi hjälper gärna till med dina frågor om kontrollansvarig, 
                BAS-P, BAS-U eller andra byggtjänster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/kontakt'}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                  aria-label="Gå till kontaktsidan"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Kontakta oss
                </Button>
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Ring direkt till 076-111 84 47"
                >
                  Ring direkt: 076-111 84 47
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default NotFound;