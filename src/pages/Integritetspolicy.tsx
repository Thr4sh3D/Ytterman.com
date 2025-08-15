import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';

const Integritetspolicy = () => {
  return (
    <>
      <Helmet>
        <title>Integritetspolicy - MTY Konsult | Ytterman</title>
        <meta name="description" content="Läs vår integritetspolicy för MTY Konsult. Vi värnar om din integritet och personuppgifter enligt GDPR." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ytterman.com/integritetspolicy" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-slate-900 mb-8">
                Integritetspolicy – MTY Konsult
              </h1>
              
              <div className="prose prose-lg max-w-none text-slate-700 space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Inledning</h2>
                  <p>
                    Denna integritetspolicy beskriver hur MTY Konsult (organisationsnummer: 8809134672) 
                    samlar in, använder och skyddar dina personuppgifter när du besöker vår webbplats 
                    eller använder våra tjänster.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Personuppgiftsansvarig</h2>
                  <div className="bg-stone-50 p-6 rounded-lg">
                    <p><strong>MTY Konsult</strong></p>
                    <p>Organisationsnummer: 8809134672</p>
                    <p>E-post: tobias@ytterman.com</p>
                    <p>Telefon: 076-111 84 47</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Vilka personuppgifter samlar vi in?</h2>
                  <p>Vi kan samla in följande typer av personuppgifter:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Kontaktuppgifter:</strong> Namn, e-postadress, telefonnummer</li>
                    <li><strong>Projektinformation:</strong> Uppgifter om ditt byggprojekt, adress, projekttyp</li>
                    <li><strong>Teknisk information:</strong> IP-adress, webbläsartyp, besökstid</li>
                    <li><strong>Kommunikation:</strong> Meddelanden och korrespondens med oss</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Hur använder vi dina personuppgifter?</h2>
                  <p>Vi använder dina personuppgifter för att:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Tillhandahålla våra tjänster som kontrollansvarig och BAS</li>
                    <li>Kommunicera med dig om ditt projekt</li>
                    <li>Skicka offerter och projektdokumentation</li>
                    <li>Förbättra vår webbplats och våra tjänster</li>
                    <li>Uppfylla juridiska förpliktelser</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Rättslig grund för behandling</h2>
                  <p>Vi behandlar dina personuppgifter baserat på:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Avtal:</strong> För att fullgöra våra tjänster enligt avtal</li>
                    <li><strong>Berättigat intresse:</strong> För att utveckla och förbättra våra tjänster</li>
                    <li><strong>Samtycke:</strong> När du frivilligt lämnar uppgifter via kontaktformulär</li>
                    <li><strong>Juridisk förpliktelse:</strong> För att uppfylla krav enligt PBL och andra lagar</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Delning av personuppgifter</h2>
                  <p>
                    Vi delar inte dina personuppgifter med tredje part utan ditt samtycke, förutom när 
                    det krävs enligt lag eller för att tillhandahålla våra tjänster. Detta kan inkludera:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Byggnadsnämnder och myndigheter (enligt PBL)</li>
                    <li>Tekniska leverantörer för webbplatsens drift</li>
                    <li>Juridiska rådgivare vid behov</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Lagring av personuppgifter</h2>
                  <p>
                    Vi lagrar dina personuppgifter endast så länge det är nödvändigt för att uppfylla 
                    de ändamål som beskrivs i denna policy. Projektrelaterade handlingar sparas enligt 
                    branschpraxis och juridiska krav, vanligtvis 10 år efter projektets slutförande.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Dina rättigheter</h2>
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
                    För att utöva dina rättigheter, kontakta oss på tobias@ytterman.com eller 076-111 84 47.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Säkerhet</h2>
                  <p>
                    Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina 
                    personuppgifter mot obehörig åtkomst, förlust eller missbruk. Detta inkluderar 
                    kryptering, säkra servrar och begränsad åtkomst till personuppgifter.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Cookies</h2>
                  <p>
                    Vår webbplats använder cookies för att förbättra användarupplevelsen och analysera 
                    trafik. Du kan hantera cookie-inställningar i din webbläsare. Vissa funktioner kan 
                    påverkas om du väljer att blockera cookies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Ändringar av integritetspolicyn</h2>
                  <p>
                    Vi kan uppdatera denna integritetspolicy från tid till annan. Väsentliga ändringar 
                    kommer att meddelas på vår webbplats eller via e-post. Vi rekommenderar att du 
                    regelbundet läser igenom denna policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Kontakt</h2>
                  <p>
                    Om du har frågor om denna integritetspolicy eller hur vi behandlar dina 
                    personuppgifter, kontakta oss:
                  </p>
                  <div className="bg-stone-50 p-6 rounded-lg mt-4">
                    <p><strong>MTY Konsult</strong></p>
                    <p>E-post: tobias@ytterman.com</p>
                    <p>Telefon: 076-111 84 47</p>
                    <p className="mt-4">
                      Du har också rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY) 
                      om du anser att vi behandlar dina personuppgifter på ett felaktigt sätt.
                    </p>
                  </div>
                </section>

                <section className="border-t pt-8 mt-12">
                  <p className="text-sm text-slate-600">
                    <strong>Senast uppdaterad:</strong> {new Date().toLocaleDateString('sv-SE')}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Integritetspolicy;