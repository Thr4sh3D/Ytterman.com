import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { BAS, COMPANY, KA_CERT } from '@/config/company';
import { VerifiedProof } from '@/components/VerifiedProof';
import { ReviewRequestCta } from '@/components/ReviewRequestCta';

const About = () => {
  return (
    <>
      <AdvancedSEO 
        title="Om Ytterman – kontrollansvarig och BAS i Västernorrland"
        description={`Lär känna ${COMPANY.publicName} – ${KA_CERT.title.toLowerCase()}, utbildad för ${BAS.rolesLabel} och med ${COMPANY.experienceLabel.toLowerCase()} i byggbranschen.`}
        keywords="om ytterman, tobias ytterman, kontrollansvarig västernorrland, BAS-P, BAS-U, byggkontroll erfarenhet"
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
                  {COMPANY.experienceLabel} i byggbranschen
                </p>
                
                <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    Tobias Ytterman
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Med {COMPANY.experienceLabel.toLowerCase()} inom byggbranschen erbjuder jag
                    uppdrag som kontrollansvarig och byggarbetsmiljösamordnare ({BAS.rolesLabel})
                    i {COMPANY.region}.
                  </p>
                  <p className="text-slate-600 mb-4">
                    Jag är {KA_CERT.title.toLowerCase()}, med {KA_CERT.authorizationLabel.toLowerCase()}.
                    Uppdraget avgränsas utifrån projektets art, kommunens beslut och de handlingar
                    som finns tillgängliga.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-amber-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-amber-900 mb-3">
                      Vårt uppdrag
                    </h3>
                    <p className="text-amber-800">
                      Att skapa tydlig rollfördelning, praktisk struktur och användbar dokumentation
                      inom det uppdrag som har avtalats.
                    </p>
                  </div>
                  
                  <div className="bg-stone-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-stone-900 mb-3">
                      Våra värderingar
                    </h3>
                    <p className="text-stone-800">
                      Transparens, tydliga avgränsningar och begriplig kommunikation. Prisform och
                      villkor ska framgå innan uppdraget startar.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    Så arbetar jag i byggprojekt
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Mitt arbetssätt bygger på att skapa struktur tidigt. Oavsett om uppdraget gäller
                    kontrollansvarig, BAS-P, BAS-U, energideklaration eller rådgivning börjar jag med
                    att förstå projektets förutsättningar, tidplan, aktörer och vilka beslut som måste
                    fattas för att processen ska flyta vidare utan onödiga hinder.
                  </p>
                  <p className="text-slate-600">
                    Jag lägger stor vikt vid tydlig kommunikation, praktiska rekommendationer och att
                    dokumentation ska vara användbar i verkligheten. För dig som kund betyder det
                    tydligare återkoppling, bättre överblick och en mer förutsägbar byggprocess från start till
                    avslut.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    Varför kunder anlitar Ytterman
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Kunder anlitar mig när de vill ha en erfaren kontaktperson som kan kombinera
                    regelkunskap med praktisk förståelse för hur byggprojekt faktiskt fungerar på plats.
                    Det gäller både privatpersoner som bygger nytt och företag som behöver stöd i större
                    eller mer samordningskrävande uppdrag.
                  </p>
                  <p className="text-slate-600">
                    Basen i erbjudandet är förfrågningar från {COMPANY.region}, lång erfarenhet och ett
                    fokus på tydliga besked. Tillgänglighet, resor, resurser och tidplan bekräftas
                    efter genomgång av det aktuella projektet.
                  </p>
                </div>
                
                <div className="text-center">
                  <a 
                    href="/kontakt/" 
                    className="inline-flex items-center px-6 py-3 earth-gradient text-white font-medium rounded-lg hover:opacity-90 transition-colors"
                  >
                    Kontakta oss
                  </a>
                </div>
                <VerifiedProof />
              </div>
            </div>
          </div>
          <ReviewRequestCta />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
