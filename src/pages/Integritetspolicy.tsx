import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { COMPANY } from '@/config/company';
import { openConsentSettings } from '@/lib/consent';

const Integritetspolicy = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-slate-900 mb-8">
                Integritetspolicy – {COMPANY.brandName}
              </h1>
              
              <div className="prose prose-lg max-w-none text-slate-700 space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Inledning</h2>
                  <p>
                    Denna integritetspolicy beskriver hur verksamheten under varumärket {COMPANY.brandName}
                    samlar in, använder och skyddar dina personuppgifter när du besöker vår webbplats 
                    eller använder våra tjänster.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Personuppgiftsansvarig</h2>
                  <div className="bg-stone-50 p-6 rounded-lg">
                    <p><strong>{COMPANY.brandName}</strong></p>
                    <p>E-post: {COMPANY.email}</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Vilka personuppgifter samlar vi in?</h2>
                  <p>Vi kan samla in följande typer av personuppgifter:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Kontaktuppgifter:</strong> Namn, e-postadress, telefonnummer</li>
                    <li><strong>Projektinformation:</strong> Tjänst, projekttyp, kommun, ungefärlig storlek, lovstatus, önskad start och ditt meddelande</li>
                    <li><strong>Teknisk information:</strong> Begränsad besöksdata när du har samtyckt till analys eller marknadsföring</li>
                    <li><strong>Kommunikation:</strong> Meddelanden och korrespondens med oss</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Hur använder vi dina personuppgifter?</h2>
                  <p>Vi använder dina personuppgifter för att:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Tillhandahålla tjänster som kontrollansvarig, överlåtelsebesiktning och BAS</li>
                    <li>Kommunicera med dig om ditt projekt</li>
                    <li>Skicka offerter och projektdokumentation</li>
                    <li>Hantera och bedöma din förfrågan</li>
                    <li>Förbättra vår webbplats och våra tjänster</li>
                    <li>Uppfylla juridiska förpliktelser</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Rättslig grund för behandling</h2>
                  <p>Vi behandlar dina personuppgifter baserat på:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Avtal och åtgärder inför avtal:</strong> För att hantera din förfrågan, bedöma uppdraget och lämna offert</li>
                    <li><strong>Berättigat intresse:</strong> För säker drift, missbruksskydd och utveckling av våra tjänster</li>
                    <li><strong>Samtycke:</strong> För valfri analys och marknadsföring när du aktivt har valt detta</li>
                    <li><strong>Juridisk förpliktelse:</strong> För att uppfylla krav enligt PBL och andra lagar</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Delning av personuppgifter</h2>
                  <p>
                    Personuppgifter lämnas bara till mottagare som behövs för att hantera förfrågan,
                    tillhandahålla en avtalad tjänst eller uppfylla lagkrav. Detta kan inkludera:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Byggnadsnämnder och myndigheter (enligt PBL)</li>
                    <li>Tekniska leverantörer för serverdrift, automatisering och e-post</li>
                    <li>Behörig partner när en partnerlevererad tjänst, exempelvis energideklaration, ska offereras eller utföras</li>
                    <li>Juridiska rådgivare vid behov</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Hantering av förfrågningar</h2>
                  <p>
                    Offertformuläret skickar uppgifterna säkert och skapar ett ärende som bedöms manuellt.
                    Automatiseringen fattar inte beslut om att acceptera ett uppdrag eller ingå avtal.
                  </p>
                  <p className="mt-4">
                    Vid en förfrågan om energideklaration kontrollerar vi att partnerns energiexpert har
                    giltig certifiering innan en utförare bekräftas för uppdraget.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Lagring av personuppgifter</h2>
                  <p>
                    Vi lagrar personuppgifter så länge de behövs för det aktuella ändamålet och därefter
                    så länge som krävs för avtal, rättsliga skyldigheter eller för att hantera rättsliga anspråk.
                    Lagringstiden bedöms utifrån uppgiftstyp och relation.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Dina rättigheter</h2>
                  <p>Enligt GDPR har du rätt att:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Få tillgång</strong> till dina personuppgifter</li>
                    <li><strong>Rätta</strong> felaktiga uppgifter</li>
                    <li><strong>Radera</strong> dina uppgifter under vissa omständigheter</li>
                    <li><strong>Begränsa</strong> behandlingen av dina uppgifter</li>
                    <li><strong>Invända</strong> mot behandling baserad på berättigat intresse</li>
                    <li><strong>Dataportabilitet</strong> - få ut dina uppgifter i strukturerat format</li>
                  </ul>
                  <p className="mt-4">
                    För att utöva dina rättigheter, kontakta oss på {COMPANY.email}.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Säkerhet</h2>
                  <p>
                    Vi arbetar med tekniska och organisatoriska skyddsåtgärder som anpassas efter
                    uppgifternas art, behandlingens omfattning och aktuell risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Cookies</h2>
                  <p>
                    Nödvändig lagring används för webbplatsens funktioner och för att komma ihåg ditt val.
                    Google Analytics och Google Ads laddas endast om motsvarande ändamål är konfigurerat
                    och du aktivt har samtyckt till analys respektive marknadsföring. Innan dess görs inga
                    anrop till Googles taggtjänst från vår mätkod.
                  </p>
                  <p className="mt-4">
                    Analysdata begränsas till tillåtna händelser, sidans sökväg och icke-personliga val såsom
                    projekttyp. Namn, e-postadress, telefonnummer och meddelandetext skickas inte som
                    analyshändelser. Kampanjparametrar och första landningssida följer i stället med den
                    projektförfrågan som du själv skickar, så att vi kan förstå förfrågans källa utan att
                    skicka uppgifterna vidare till annonssystem i onödan.
                  </p>
                  <p className="mt-4">
                    Du kan acceptera, avvisa, anpassa eller återkalla valfria cookies via
                    <button
                      type="button"
                      onClick={openConsentSettings}
                      className="ml-1 font-semibold text-primary underline"
                    >
                      Cookie-inställningar
                    </button>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Ändringar av integritetspolicyn</h2>
                  <p>
                    Vi kan uppdatera denna integritetspolicy från tid till annan. Väsentliga ändringar 
                    kommer att meddelas på vår webbplats eller via e-post. Vi rekommenderar att du 
                    regelbundet läser igenom denna policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Kontakt</h2>
                  <p>
                    Om du har frågor om denna integritetspolicy eller hur vi behandlar dina 
                    personuppgifter, kontakta oss:
                  </p>
                  <div className="bg-stone-50 p-6 rounded-lg mt-4">
                    <p><strong>{COMPANY.brandName}</strong></p>
                    <p>E-post: {COMPANY.email}</p>
                    <p className="mt-4">
                      Du har också rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY) 
                      om du anser att vi behandlar dina personuppgifter på ett felaktigt sätt.
                    </p>
                  </div>
                </section>

                <section className="border-t pt-8 mt-12">
                  <p className="text-sm text-slate-600">
                    <strong>Senast uppdaterad:</strong> 18 augusti 2026
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Integritetspolicy;
