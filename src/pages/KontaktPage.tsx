import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';
import { LocalBusinessCard } from '@/components/LocalBusinessCard';
import { LocalBusinessInfo } from '@/components/LocalBusinessInfo';
import { SEOHead } from '@/components/SEOComponents';
import { LocalSEO } from '@/components/LocalSEO';

export default function KontaktPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt - BuildControl Västernorrland",
    "description": "Kontakta BuildControl för kontrollansvarig, BAS-P och BAS-U tjänster i Västernorrland. Vi finns i Sundsvall och täcker hela regionen.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "BuildControl",
      "telephone": "+46-XX-XXX-XX-XX",
      "email": "info@buildcontrol.se",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Byggkontrollsgatan 1",
        "addressLocality": "Sundsvall",
        "addressRegion": "Västernorrland",
        "postalCode": "851 70",
        "addressCountry": "SE"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Kontakt BuildControl - Kontrollansvarig Sundsvall Västernorrland"
        description="Kontakta BuildControl för kontrollansvarig, BAS-P och BAS-U i Västernorrland. Kontor i Sundsvall. Ring +46-XX-XXX-XX-XX eller maila info@buildcontrol.se"
        keywords="kontakt kontrollansvarig Sundsvall, BuildControl Västernorrland, BAS-P BAS-U kontakt, byggkontroll telefon Härnösand"
        url="https://buildcontrol.se/kontakt"
        structuredData={localBusinessSchema}
      />
      <LocalSEO />
      
      <Header />
      
      <main>
        {/* Hero section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kontakta oss i Västernorrland
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Vi finns i Sundsvall och täcker hela Västernorrlands län. 
                Kontakta oss för kontrollansvarig, BAS-P och BAS-U tjänster.
              </p>
            </div>
          </div>
        </section>

        {/* Kontaktinformation */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <LocalBusinessCard />
              </div>
              <div>
                <LocalBusinessInfo />
              </div>
            </div>
          </div>
        </section>

        {/* Kontaktformulär */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <Contact />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}