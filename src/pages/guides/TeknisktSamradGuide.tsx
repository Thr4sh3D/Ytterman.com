import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { Users, FileText, MessageSquare, CheckCircle, Clock, Building } from 'lucide-react';

const TeknisktSamradGuide = () => {
  return (
    <GuideLayout
      title="Tekniskt Samråd i Byggprocessen"
      description="Komplett guide om tekniskt samråd enligt PBL. Vad det är, när det ska hållas, vem som deltar och hur det går till."
      category="Bygglov"
      readTime="8 min"
      seoTitle="Tekniskt Samråd - Guide till PBL Samråd 2025 | Västernorrland"
      seoDescription="Allt om tekniskt samråd i byggprocessen. Vad som behandlas, vilka som deltar och hur samrådsmötet genomförs. Expert guide från erfaren kontrollansvarig."
      keywords="tekniskt samråd, samråd bygglov, PBL samråd, samrådsmöte, byggnadsnämnden samråd, tekniskt möte bygg"
      canonicalPath="/guider/tekniskt-samrad"
    >
      <div className="prose prose-stone max-w-none">
        
        <p className="text-lg text-stone-700 mb-6 font-medium">
          Tekniskt samråd är ett obligatoriskt möte i byggprocessen där byggnadsnämnden, <Link to="/kontrollansvarig" className="text-blue-600 hover:text-blue-700 font-medium underline">kontrollansvarig</Link> och 
          andra viktiga aktörer går igenom projektet innan byggstart. Denna guide förklarar vad tekniskt samråd är, vad som behandlas och hur det går till.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start">
            <MessageSquare className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Vad är tekniskt samråd?</h3>
              <p className="text-blue-700">
                Tekniskt samråd är ett möte enligt <strong>Plan- och bygglagen (PBL) 10 kap. 11 §</strong> där alla inblandade i ett byggprojekt 
                träffas för att säkerställa att alla förstår projektet och att alla krav är uppfyllda innan byggnationen påbörjas.
              </p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-8">
          <FileText className="w-6 h-6 text-blue-600" />
          När ska tekniskt samråd hållas?
        </h2>

        <p className="mb-4">
          Tekniskt samråd ska hållas:
        </p>

        <div className="bg-gradient-to-r from-slate-50 to-stone-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Efter att bygglov har beviljats</strong> - men innan startbesked söks
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>När kontrollansvarig har utsetts</strong> - KA kallar till och leder mötet
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Innan byggnation påbörjas</strong> - samrådet är en förutsättning för startbesked
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>När alla nödvändiga handlingar är klara</strong> - konstruktionsritningar, kontrollplan mm.
              </div>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Tidslinje i byggprocessen
        </h3>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
              <div>
                <strong className="text-stone-800">Bygglovsansökan</strong>
                <p className="text-stone-700 mt-1">Ansökan lämnas in till byggnadsnämnden</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
              <div>
                <strong className="text-stone-800">Bygglov beviljas</strong>
                <p className="text-stone-700 mt-1">Byggnadsnämnden godkänner projektet</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
              <div>
                <strong className="text-stone-800">Tekniskt samråd hålls</strong>
                <p className="text-stone-700 mt-1">Detta möte - som vi beskriver i denna guide</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
              <div>
                <strong className="text-stone-800">Startbesked söks och beviljas</strong>
                <p className="text-stone-700 mt-1">Efter godkänt samråd kan byggnation påbörjas</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
              <div>
                <strong className="text-stone-800">Byggnation</strong>
                <p className="text-stone-700 mt-1">Projektet genomförs med kontroller enligt kontrollplan</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">6</span>
              <div>
                <strong className="text-stone-800">Slutbesked</strong>
                <p className="text-stone-700 mt-1">Byggnaden får tas i bruk</p>
              </div>
            </li>
          </ol>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Users className="w-6 h-6 text-orange-600" />
          Vilka deltar i tekniskt samråd?
        </h2>

        <p className="mb-4">
          Tekniskt samråd samlar alla centrala aktörer i byggprocessen:
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-6">
          Obligatoriska deltagare
        </h3>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg mb-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <Building className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" />
              <div>
                <strong className="text-stone-800">Kontrollansvarig (KA):</strong>
                <p className="text-stone-700 mt-1">
                  Kallar till och leder mötet. Presenterar <Link to="/guider/kontrollplan" className="text-blue-600 hover:text-blue-700 underline">kontrollplanen</Link> och 
                  går igenom projektets förutsättningar.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Building className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" />
              <div>
                <strong className="text-stone-800">Byggnadsinspektör (representant från byggnadsnämnden):</strong>
                <p className="text-stone-700 mt-1">
                  Granskar handlingarna, ställer frågor och godkänner att projektet kan gå vidare till startbesked.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Building className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" />
              <div>
                <strong className="text-stone-800">Byggherren (beställaren):</strong>
                <p className="text-stone-700 mt-1">
                  Den som låter bygga och har det yttersta ansvaret för att projektet följer PBL.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Andra vanliga deltagare
        </h3>

        <ul className="space-y-3 mb-6 text-stone-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">→</span>
            <div>
              <strong>Konstruktör:</strong> För att svara på frågor om konstruktionslösningar
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">→</span>
            <div>
              <strong>Arkitekt:</strong> Vid komplexa eller särskilda byggnadslösningar
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">→</span>
            <div>
              <strong>Huvudentreprenör/byggledare:</strong> Den som ska genomföra byggnationen
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">→</span>
            <div>
              <strong>BAS-U:</strong> Om annan person än KA, för att koordinera arbetsmiljöfrågor. Läs mer om <Link to="/guider/bas-u-guide" className="text-blue-600 hover:text-blue-700 underline">BAS-U</Link>.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">→</span>
            <div>
              <strong>Energi-/fuktsakkunnig:</strong> Vid behov för att diskutera tekniska lösningar
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">→</span>
            <div>
              <strong>Geotekniker:</strong> Vid projekt med komplicerad grundläggning
            </div>
          </li>
        </ul>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <MessageSquare className="w-6 h-6 text-purple-600" />
          Vad behandlas vid tekniskt samråd?
        </h2>

        <p className="mb-4">
          Tekniskt samråd är ett genomgångsmöte där följande punkter behandlas systematiskt:
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-6">
          1. Genomgång av kontrollplanen
        </h3>

        <div className="bg-stone-100 p-6 rounded-lg mb-6">
          <p className="text-stone-700 mb-3">
            Kontrollansvarig presenterar kontrollplanen som beskriver:
          </p>
          <ul className="space-y-2 text-stone-700">
            <li>• Vilka kontroller som ska genomföras under byggtiden</li>
            <li>• När varje kontroll ska utföras</li>
            <li>• Vem som ansvarar för varje kontroll (KA, konstruktör, entreprenör osv.)</li>
            <li>• Kritiska skeden som kräver särskild uppmärksamhet</li>
            <li>• Dokumentationskrav</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          2. Granskning av konstruktionshandlingar
        </h3>

        <p className="mb-4">
          Byggnadsnämndens representant granskar att:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-stone-700">
          <li>Konstruktionsritningar är kompletta och godkända av kvalificerad konstruktör</li>
          <li>Konstruktörens bestyrkanden finns (ansvarsförsäkran)</li>
          <li>Brandskyddsdokumentation är på plats och godkänd</li>
          <li>Fuktsäkerhetsprojektering är gjord där det krävs</li>
          <li>Energiberäkningar överensstämmer med bygglovets krav</li>
          <li>Geoteknisk utredning finns vid behov</li>
        </ul>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          3. Diskussion om byggmetod och tidplan
        </h3>

        <p className="mb-6">
          Entreprenören eller byggledaren beskriver hur bygget praktiskt ska genomföras, vilket hjälper byggnadsnämnden och KA att förstå 
          vilka kritiska punkter som behöver extra uppmärksamhet.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          4. Arbetsmiljöplan och BAS-samordning
        </h3>

        <p className="mb-6">
          Om projekt kräver <Link to="/guider/vad-ar-bas" className="text-blue-600 hover:text-blue-700 underline">BAS (Byggarbetsmiljösamordnare)</Link> presenteras 
          arbetsmiljöplanen och hur arbetsmiljön ska samordnas mellan olika entreprenörer.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          5. Ansvarsfördelning
        </h3>

        <p className="mb-6">
          Man klarar ut vem som ansvarar för vad i projektet - byggherren, KA, entreprenören, konstruktören osv. Detta förebygger missförstånd senare.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          6. Frågor och förtydliganden
        </h3>

        <p className="mb-6">
          Byggnadsinspektören ställer frågor om detaljer som behöver förtydligas, och alla deltagare kan lyfta frågeställningar som behöver lösas innan bygget startar.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Clock className="w-6 h-6 text-green-600" />
          Hur går tekniskt samråd till?
        </h2>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Före mötet
        </h3>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <ol className="list-decimal list-inside space-y-3 text-stone-700">
            <li>
              <strong>KA kallar till mötet:</strong> Skickar kallelse med datum, tid och plats till alla deltagare (vanligen 1-2 veckor i förväg)
            </li>
            <li>
              <strong>Handlingar skickas ut:</strong> Alla relevanta dokument (kontrollplan, konstruktionsritningar, bestyrkanden) skickas till deltagarna i förväg
            </li>
            <li>
              <strong>Byggnadsnämnden förbereder:</strong> Byggnadsinspektören granskar handlingarna i förväg och förbereder eventuella frågor
            </li>
          </ol>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Under mötet
        </h3>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-stone-700 mb-4">Mötet pågår vanligen <strong>1-2 timmar</strong> och följer denna struktur:</p>
          <ol className="list-decimal list-inside space-y-3 text-stone-700">
            <li><strong>Presentation av deltagare</strong> - alla presenterar sin roll i projektet</li>
            <li><strong>Genomgång av projektet</strong> - arkitektonisk utformning och omfattning</li>
            <li><strong>Presentation av kontrollplan</strong> - KA går igenom planerade kontroller</li>
            <li><strong>Granskning av konstruktionshandlingar</strong> - byggnadsinspektören går igenom alla dokument</li>
            <li><strong>Diskussion och frågor</strong> - Öppen diskussion om oklarheter eller problem</li>
            <li><strong>Sammanfattning</strong> - KA sammanfattar vad som kommit fram och eventuella åtgärder</li>
            <li><strong>Beslut om startbesked</strong> - byggnadsinspektören bedömer om allt är på plats för startbesked</li>
          </ol>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Efter mötet
        </h3>

        <div className="bg-amber-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Protokoll upprättas:</strong> KA skriver ett protokoll från mötet som skickas till alla deltagare
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Eventuella kompletteringar görs:</strong> Om byggnadsnämnden kräver ytterligare handlingar eller förtydliganden
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Ansökan om startbesked:</strong> När alla krav är uppfyllda ansöker byggherren (via KA) om startbesked
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Startbesked beviljas:</strong> Byggnadsnämnden utfärdar startbesked och byggnationen kan påbörjas
              </div>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-stone-800 mb-6 mt-10">
          Vanliga frågor om tekniskt samråd
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Måste tekniskt samråd alltid hållas fysiskt?
            </h3>
            <p className="text-stone-700">
              Nej, särskilt efter pandemin accepterar de flesta byggnadsnämnder digitala möten via Teams, Zoom eller liknande. 
              Viktigt är att alla kan delta aktivt och att handlingar kan visas och diskuteras.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad händer om byggnadsnämnden inte godkänner vid tekniskt samråd?
            </h3>
            <p className="text-stone-700">
              Om handlingar är ofullständiga eller det finns brister kan byggnadsnämnden begära kompletteringar innan startbesked kan ges. 
              I så fall måste bristerna åtgärdas och möjligen ett nytt samrådsmöte hållas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kostar tekniskt samråd något?
            </h3>
            <p className="text-stone-700">
              Byggnadsnämnden tar vanligen ut en avgift för sin tid vid tekniskt samråd, ofta 1,500-3,000 kr beroende på kommun och projektets storlek. 
              KA:s tid för att förbereda och genomföra samrådet ingår normalt i <Link to="/guider/kontrollansvarig-timpris" className="text-blue-600 hover:text-blue-700 underline">KA-uppdraget</Link>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Hur lång tid tar det från tekniskt samråd till startbesked?
            </h3>
            <p className="text-stone-700">
              Om allt är i sin ordning kan startbesked beviljas inom <strong>1-2 veckor</strong> efter tekniskt samråd. Om kompletteringar krävs 
              kan det ta längre tid.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kan man börja bygga direkt efter tekniskt samråd?
            </h3>
            <p className="text-stone-700">
              <strong>Nej!</strong> Du måste vänta på formellt startbesked från byggnadsnämnden. Att börja bygga innan startbesked beviljats 
              är olagligt och kan leda till byggsanktionsavgift och krav på rivning. Läs mer om <Link to="/guider/kontrollansvarig-bygglov" className="text-blue-600 hover:text-blue-700 underline">bygglovsprocessen</Link>.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Behöver du hjälp med tekniskt samråd?
          </h2>
          <p className="text-lg mb-6 text-blue-50">
            Som erfaren <Link to="/kontrollansvarig" className="text-white underline font-semibold">kontrollansvarig</Link> hanterar jag hela processen 
            från upprättande av kontrollplan, kallelse till tekniskt samråd, genomförande av mötet och ansökan om startbesked. Kontakta mig för 
            smidig hantering av ditt byggprojekt i Västernorrland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Kontakta mig
            </Link>
            <Link 
              to="/kontrollansvarig"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              Läs mer om tjänsten
            </Link>
          </div>
        </div>

      </div>
    </GuideLayout>
  );
};

export default TeknisktSamradGuide;
