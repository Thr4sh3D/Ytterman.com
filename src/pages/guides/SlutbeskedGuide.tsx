import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { CheckCircle, FileCheck, AlertTriangle, Clock, Building, Users } from 'lucide-react';

const SlutbeskedGuide = () => {
  return (
    <GuideLayout
      title="Slutbesked - Process och Krav"
      description="Komplett guide om slutbesked enligt PBL. Vad det är, hur du ansöker, vilka handlingar som krävs och vad som händer efteråt."
      category="Bygglov"
      readTime="8 min"
      seoTitle="Slutbesked Bygglov - Guide till Process & Krav 2025"
      seoDescription="Allt om slutbesked i byggprocessen. Hur du ansöker, vilka dokument som krävs och vad som händer efter slutbesked. Guide från erfaren kontrollansvarig."
      keywords="slutbesked, slutbevis, slutbesked bygglov, ansöka slutbesked, kontrollansvarig intyg, PBL slutbesked"
      canonicalPath="/guider/slutbesked"
    >
      <div className="prose prose-stone max-w-none">
        
        <p className="text-lg text-stone-700 mb-6 font-medium">
          Slutbesked är det formella godkännandet från byggnadsnämnden som betyder att ditt byggprojekt är klart och får tas i bruk. 
          Denna guide förklarar vad slutbesked är, hur du ansöker och vilka handlingar som krävs.
        </p>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Vad är slutbesked?</h3>
              <p className="text-green-700">
                Slutbesked är enligt <strong>Plan- och bygglagen (PBL) 10 kap. 4 §</strong> byggnadsnämndens godkännande att en byggnad 
                eller anläggning som har uppförts eller ändrats får tas i bruk. Utan slutbesked är det <strong>olagligt</strong> att använda byggnaden.
              </p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-8">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          Varför är slutbesked så viktigt?
        </h2>

        <p className="mb-4">
          Slutbesked är inte bara en formalitet - det har stora praktiska och juridiska konsekvenser:
        </p>

        <div className="bg-red-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-red-800 mb-3">Konsekvenser utan slutbesked:</h3>
          <ul className="space-y-3 text-red-700">
            <li className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-lg">✗</span>
              <div>
                <strong>Olagligt att bo/använda:</strong> Byggnaden får inte tas i bruk förrän slutbesked beviljats
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-lg">✗</span>
              <div>
                <strong>Försäkringsproblem:</strong> Många hemförsäkringar gäller inte utan slutbesked
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-lg">✗</span>
              <div>
                <strong>Kreditrisker:</strong> Banker kan neka eller dra in lån för byggnader utan slutbesked
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-lg">✗</span>
              <div>
                <strong>Svårigheter vid försäljning:</strong> En bostad utan slutbesked är praktiskt taget osäljbar
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-lg">✗</span>
              <div>
                <strong>Byggsanktionsavgift:</strong> Risk för kraftiga böter om du använder byggnaden ändå
              </div>
            </li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Clock className="w-6 h-6 text-blue-600" />
          När kan du ansöka om slutbesked?
        </h2>

        <p className="mb-4">
          Slutbesked kan ansökas när:
        </p>

        <div className="bg-gradient-to-r from-slate-50 to-stone-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Byggnationen är helt färdigställd</strong> - alla arbeten är avslutade och byggnaden är klar att användas
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Alla kontroller är genomförda</strong> - enligt <Link to="/guider/kontrollplan" className="text-blue-600 hover:text-blue-700 underline">kontrollplanen</Link>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Slutbesiktning är utförd</strong> - av <Link to="/kontrollansvarig" className="text-blue-600 hover:text-blue-700 underline">kontrollansvarig</Link>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Alla nödvändiga handlingar är sammanställda</strong> - och klara att skickas till byggnadsnämnden
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Viktigt att veta</h3>
              <p className="text-amber-700">
                Du kan <strong>inte</strong> ansöka om slutbesked förrän allt är färdigt. Att ansöka om slutbesked innan bygget är klart 
                kommer att leda till att ansökan avslås, vilket försenar processen ytterligare.
              </p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <FileCheck className="w-6 h-6 text-orange-600" />
          Vilka handlingar krävs för slutbesked?
        </h2>

        <p className="mb-4">
          För att bevilja slutbesked kräver byggnadsnämnden följande dokumentation:
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-6">
          1. Kontrollansvarigs intyg (Slutintyg)
        </h3>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-stone-700 mb-3">
            Detta är det viktigaste dokumentet. Kontrollansvarig intygar att:
          </p>
          <ul className="space-y-2 text-stone-700">
            <li>• Byggnationen har genomförts enligt beviljat bygglov</li>
            <li>• Alla kontroller enligt kontrollplanen har utförts med godkänt resultat</li>
            <li>• Byggnaden uppfyller Boverkets byggregler (BBR)</li>
            <li>• Inga kända avvikelser eller brister finns</li>
            <li>• Byggnaden är färdig att tas i bruk</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          2. Komplett kontrollplan med dokumentation
        </h3>

        <p className="mb-4 text-stone-700">
          Den ursprungliga kontrollplanen med alla genomförda kontroller dokumenterade och avbockade. För varje kontrollpunkt ska finnas:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-stone-700">
          <li>Protokoll eller rapport från kontrollen</li>
          <li>Datum när kontrollen genomfördes</li>
          <li>Vem som utförde kontrollen</li>
          <li>Resultat och eventuella åtgärder</li>
          <li>Fotodokumentation där relevant</li>
        </ul>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          3. Sakkunnigutlåtanden och certifikat
        </h3>

        <div className="bg-stone-100 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-stone-800 mb-3">Beroende på projekt kan följande utlåtanden krävas:</h4>
          <ul className="space-y-2 text-stone-700">
            <li>• <strong>Konstruktörsintyg:</strong> Från konstruktör att bärande konstruktion är utförd enligt beräkningar</li>
            <li>• <strong>Fuktsäkerhetsutlåtande:</strong> Från fuktsakkunnig att fuktsäkerheten är godkänd</li>
            <li>• <strong>OVK-protokoll:</strong> Obligatorisk ventilationskontroll genomförd och godkänd</li>
            <li>• <strong>Energideklaration:</strong> Färdig energideklaration för byggnaden</li>
            <li>• <strong>Radonmätning:</strong> Där det krävs, verifiering av acceptabla radonhalter</li>
            <li>• <strong>Brandskyddsdokumentation:</strong> Från brandkonsult vid komplexa projekt</li>
            <li>• <strong>Elcertifikat:</strong> Från behörig elinstallatör</li>
            <li>• <strong>VVS-certifikat:</strong> Från auktoriserad VVS-installatör</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          4. Relationsritningar (om krävs)
        </h3>

        <p className="mb-6 text-stone-700">
          Om byggnaden avviker från godkända ritningar (även mindre ändringar) kan byggnadsnämnden kräva uppdaterade ritningar som visar 
          hur byggnaden faktiskt blev utförd (så kallade relationsritningar eller as-built-ritningar).
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          5. Anl äggarinstruktion och driftsinstruktioner
        </h3>

        <p className="mb-6 text-stone-700">
          Dokumentation från entreprenörer och leverantörer om hur byggnadens system ska skötas och underhållas. Detta är särskilt viktigt 
          för ventilation, värmesystem och andra tekniska installationer.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Building className="w-6 h-6 text-amber-600" />
          Processen för att få slutbesked
        </h2>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Steg 1: Slutbesiktning
        </h3>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
          <p className="text-stone-700 mb-3">
            Kontrollansvarig genomför en grundlig slutbesiktning där hela byggnaden inspekteras:
          </p>
          <ul className="space-y-2 text-stone-700">
            <li>• Kontroll att allt är enligt godkända ritningar och bygglov</li>
            <li>• Verifiering av att alla kontrollpunkter är avklarade</li>
            <li>• Kontroll av finish och slutförande</li>
            <li>• Granskning av bestyrkanden och certifikat från underentreprenörer</li>
            <li>• Eventuella slutjusteringar noteras och åtgärdas</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Steg 2: Sammanställning av handlingar
        </h3>

        <p className="mb-6 text-stone-700">
          KA sammanställer alla nödvändiga handlingar i en slutredovisning. Detta inkluderar kontrollplan, protokoll, certifikat och intyg. 
          Dokumentationen organiseras överskådligt så att byggnadsnämnden enkelt kan granska.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Steg 3: Ansökan om slutbesked
        </h3>

        <p className="mb-4 text-stone-700">
          Byggherren (vanligtvis via KA) skickar in ansökan om slutbesked till byggnadsnämnden. Ansökan innehåller:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-stone-700">
          <li>Ansökningsformulär för slutbesked</li>
          <li>Slutredovisning med alla handlingar</li>
          <li>Kontrollansvarigs intyg</li>
          <li>Avgift för slutbesked (varierar mellan kommuner, ofta 3,000-8,000 kr)</li>
        </ul>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Steg 4: Byggnadsnämndens granskning
        </h3>

        <p className="mb-4 text-stone-700">
          Byggnadsinspektören granskar de inkomna handlingarna. Ibland genomförs också en platsbesiktning där byggnadsinspektören besöker 
          byggnaden för att verifiera att allt stämmer.
        </p>

        <div className="bg-green-50 p-6 rounded-lg mb-6 mt-6">
          <h4 className="font-semibold text-green-800 mb-3">Om allt är korrekt:</h4>
          <p className="text-green-700 mb-3">
            Byggnadsnämnden utfärdar <strong>slutbesked</strong> inom 2-4 veckor. Slutbeskedet skickas till byggherren och innebär att 
            byggnaden nu får tas i bruk.
          </p>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-amber-800 mb-3">Om det finns brister:</h4>
          <p className="text-amber-700 mb-3">
            Byggnadsnämnden kan begära kompletteringar eller åtgärder innan slutbesked kan ges. Detta kan inkludera ytterligare kontroller, 
            korrigeringar av avvikelser eller kompletterande dokumentation.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Steg 5: Slutbesked beviljat - vad händer nu?
        </h3>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-stone-800 mb-3">Efter beviljat slutbesked:</h4>
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Byggnaden får tas i bruk:</strong> Nu är det lagligt att flytta in och använda byggnaden
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Försäkring aktiveras:</strong> Hemförsäkring gäller fullt ut
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Taxeringsvärde fastställs:</strong> Fastigheten taxeras med den nya byggnaden
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Garantier börjar gälla:</strong> Entreprenörernas garantitid räknas från slutbesked
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Kontrollansvarigs uppdrag avslutas:</strong> KA:s ansvar är formellt uppfyllt
              </div>
            </li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Users className="w-6 h-6 text-blue-600" />
          Vanliga frågor om slutbesked
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Hur lång tid tar det att få slutbesked?
            </h3>
            <p className="text-stone-700">
              Från att komplett ansökan skickas in till att slutbesked beviljas tar det vanligen <strong>2-4 veckor</strong>. 
              I vissa kommuner kan det gå snabbare, medan det i andra eller vid komplexa projekt kan ta upp till 6-8 veckor.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kan jag få tillfälligt slutbesked?
            </h3>
            <p className="text-stone-700">
              Nej, det finns inget "tillfälligt slutbesked" i PBL. Om mindre arbeten återstår (som trädgårdsplantering eller utvändig målning) 
              kan byggnadsnämnden ibland bevilja slutbesked med villkor att dessa arbeten slutförs inom viss tid.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad kostar slutbesked?
            </h3>
            <p className="text-stone-700">
              Byggnadsnämndens avgift för slutbesked varierar mellan kommuner men ligger vanligen på <strong>3,000-8,000 kr</strong>. 
              Denna avgift täcker byggnadsnämndens granskning och administration. Utöver detta tillkommer KA:s tid för slutbesiktning 
              och sammanställning av sluthandlingar. Läs mer om <Link to="/guider/kontrollansvarig-timpris" className="text-blue-600 hover:text-blue-700 underline">priser för kontrollansvarig</Link>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad händer om jag inte ansöker om slutbesked?
            </h3>
            <p className="text-stone-700">
              Att inte ansöka om slutbesked är en allvarlig försummelse. Byggnaden får inte användas lagligt, försäkringar fungerar inte ordentligt, 
              och vid försäljning kommer problemet att upptäckas. Byggnadsnämnden kan också utdöma byggsanktionsavgift. Slutbesked måste alltid sökas!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kan byggnadsnämnden neka slutbesked?
            </h3>
            <p className="text-stone-700">
              Ja, om byggnationen inte överensstämmer med bygglov, om kontroller saknas eller om byggnaden inte uppfyller byggreglerna kan 
              byggnadsnämnden neka slutbesked. Då måste bristerna åtgärdas innan ny ansökan kan göras.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Måste jag behålla slutbeskedet?
            </h3>
            <p className="text-stone-700">
              Ja! Slutbeskedet är en viktig handling som bör förvaras tillsammans med andra fastighetshandlingar. Det behövs vid 
              framtida försäljning, lånearrangemang och om frågor uppstår kring byggnaden. Be också om en kopia från byggnadsnämnden som backup.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Smidig process till slutbesked i Västernorrland
          </h2>
          <p className="text-lg mb-6 text-green-50">
            Som erfaren <Link to="/kontrollansvarig" className="text-white underline font-semibold">kontrollansvarig</Link> hjälper jag dig genom 
            hela processen från <Link to="/guider/tekniskt-samrad" className="text-white underline font-semibold">tekniskt samråd</Link> till slutbesked. 
            Jag ser till att all dokumentation är korrekt och komplett så att slutbeskedet beviljas utan fördröjningar. Kontakta mig för 
            professionell hantering av ditt byggprojekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold"
            >
              Kontakta mig
            </Link>
            <Link 
              to="/guider/kontrollansvarig-bygglov"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-green-800 transition-colors font-semibold"
            >
              Läs mer om bygglovsprocessen
            </Link>
          </div>
        </div>

      </div>
    </GuideLayout>
  );
};

export default SlutbeskedGuide;
