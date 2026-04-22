import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { ExternalSiteLink } from '@/components/ExternalSiteLink';

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
                  <p className="text-slate-600 mb-4">
                    Tobias driver även{' '}
                    <ExternalSiteLink
                      href="https://www.tysafety.se"
                      ariaLabel="TY Safety – extern länk"
                      className="text-primary"
                    >
                      TY Safety
                    </ExternalSiteLink>{' '}
                    – certifierad utbildare inom HLR, Första Hjälpen, Brandskydd, Heta Arbeten® och Arbetsmiljö i Västernorrland. Aktiv Gruppledare vid Räddningstjänsten och tidigare Stridssjukvårdare i Försvarsmakten.
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
                    snabbare återkoppling, bättre överblick och en tryggare byggprocess från start till
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
                    Basen i erbjudandet är lokal förankring i Västernorrland, lång erfarenhet och ett
                    fokus på att leverera tydliga besked. Det gör det lättare att planera rätt resurser,
                    minska risken för förseningar och skapa en process som känns trygg för alla parter.
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
