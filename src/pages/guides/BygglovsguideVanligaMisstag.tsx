import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { AlertTriangle, CheckCircle, FileText, Shield, Users, ClipboardCheck, ListChecks } from 'lucide-react';

const BygglovsguideVanligaMisstag = () => {
  return (
    <GuideLayout
      title="Bygglovsguide och vanliga misstag vid husbygge"
      description="Omfattande guide om bygglovsprocessen och de 12 vanligaste misstagen vid nybyggnad och tillbyggnad. Lär dig om kontrollplan, tekniskt samråd, KA och BAS-krav."
      category="Bygglov"
      readTime="12 min"
      seoTitle="Bygglovsguide 2025 - 12 Vanliga Misstag & Hur Du Undviker Dem | Ytterman"
      seoDescription="Komplett bygglovsguide för husbygge i Västernorrland. Lär dig processen, kontrollplan, tekniskt samråd, KA-krav och undvik de 12 vanligaste misstagen. Expert råd från Tobias Ytterman."
      keywords="bygglovsguide, vanliga misstag husbygge, kontrollansvarig bygglov, kontrollplan, tekniskt samråd, slutbesked, BAS-P, BAS-U, nybyggnad, tillbyggnad, Västernorrland, Sundsvall, Timrå, Härnösand"
      canonicalPath="/guider/bygglovsguide-vanliga-misstag-husbygge"
    >
      <div className="prose prose-stone max-w-none">
        
        <p className="text-lg text-stone-700 mb-6 font-medium">
          Att bygga eller bygga till sitt hus är en stor investering. Tyvärr görs det varje år tusentals misstag i bygglovsprocessen 
          som leder till förseningar, merkostnader och i värsta fall rivningskrav. Denna guide ger dig en praktisk översikt av 
          bygglovsprocessen och visar de 12 vanligaste misstagen – och hur du undviker dem.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-8">
          <FileText className="w-6 h-6 text-blue-600" />
          Så funkar bygglov i praktiken
        </h2>

        <p className="mb-4">
          Bygglovsprocessen i Sverige regleras av Plan- och bygglagen (PBL). Processen ser ut så här:
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
              <div>
                <strong className="text-stone-800">Planering & handlingar</strong>
                <p className="text-stone-700 mt-1">Du tar fram ritningar, situationsplan och ansökningshandlingar. Vanligt att anlita arkitekt och konstruktör i detta skede.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
              <div>
                <strong className="text-stone-800">Ansökan om bygglov</strong>
                <p className="text-stone-700 mt-1">Ansökan lämnas in till kommunens byggnadsnämnd. Handläggningstid 4-10 veckor beroende på kommun och projektets komplexitet.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
              <div>
                <strong className="text-stone-800">Bygglov beviljas</strong>
                <p className="text-stone-700 mt-1">Om ansökan är godkänd får du ett bygglovsbeslut. Nu ska <Link to="/kontrollansvarig" className="text-blue-600 hover:text-blue-700 underline">kontrollansvarig (KA)</Link> utses om det inte redan är gjort.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
              <div>
                <strong className="text-stone-800">Tekniskt samråd</strong>
                <p className="text-stone-700 mt-1">KA kallar till <Link to="/guider/tekniskt-samrad" className="text-blue-600 hover:text-blue-700 underline">tekniskt samråd</Link> där byggnadsnämnden, entreprenör och andra parter går igenom projektet.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
              <div>
                <strong className="text-stone-800">Startbesked</strong>
                <p className="text-stone-700 mt-1">När alla handlingar är godkända beviljar byggnadsnämnden startbesked. Nu får du börja bygga.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">6</span>
              <div>
                <strong className="text-stone-800">Byggnation med kontroller</strong>
                <p className="text-stone-700 mt-1">Bygget genomförs med kontinuerliga kontroller enligt <Link to="/guider/kontrollplan" className="text-blue-600 hover:text-blue-700 underline">kontrollplanen</Link>.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4">7</span>
              <div>
                <strong className="text-stone-800">Slutbesked</strong>
                <p className="text-stone-700 mt-1">Efter slutbesiktning ansöker KA om <Link to="/guider/slutbesked" className="text-blue-600 hover:text-blue-700 underline">slutbesked</Link>. När det beviljas får byggnaden tas i bruk.</p>
              </div>
            </li>
          </ol>
        </div>

        <p className="mb-6 text-stone-700">
          Hela processen tar vanligen <strong>6-12 månader</strong> från första planeringsmöte till färdig byggnad, beroende på projektets storlek.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <ClipboardCheck className="w-6 h-6 text-orange-600" />
          Underlag du bör ha innan du lämnar in
        </h2>

        <p className="mb-4">
          En komplett ansökan går snabbare genom byggnadsnämnden. Se till att ha följande underlag klart:
        </p>

        <div className="bg-gradient-to-r from-slate-50 to-stone-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Situationsplan:</strong> Visar var på tomten byggnaden ska placeras, avstånd till grannar och fastighetsgränser
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Planritningar:</strong> Alla våningsplan med mått, rumsbeteckningar och funktion
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Fasadritningar:</strong> Alla fyra sidor av byggnaden med material och färgangivelser
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Sektionsritning:</strong> Vertikalt snitt genom byggnaden som visar höjder och konstruktion
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Konstruktionshandlingar:</strong> Bestyrkt av konstruktör (bärande konstruktion, takstolar, bjälklag)
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Ventilationsritning:</strong> Hur ventilationssystemet är uppbyggt (FTX, frånluft eller självdrag)
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Energiberäkning:</strong> Visar att byggnaden uppfyller energikraven i BBR (Boverkets byggregler)
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Kontrollansvarig anmälan:</strong> Information om vem som ska vara KA för projektet
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Tips från erfaren kontrollansvarig</h3>
              <p className="text-amber-700">
                Lämna inte in ofullständiga handlingar i hopp om att "komplettera senare". Byggnadsnämnden kommer ändå begära 
                komplettering, vilket förlänger handläggningstiden med flera veckor. Ta fram allt från början.
              </p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Users className="w-6 h-6 text-amber-600" />
          Tekniskt samråd – vad kommunen faktiskt vill se
        </h2>

        <p className="mb-4">
          Tekniskt samråd är ett obligatoriskt möte där byggnadsnämnden, kontrollansvarig, konstruktör och entreprenör samlas 
          för att säkerställa att alla förstår projektet innan bygget startar.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Byggnadsnämnden fokuserar på:
        </h3>

        <ul className="space-y-2 mb-6 text-stone-700 list-disc list-inside">
          <li><strong>Kontrollplanen:</strong> Är den täckande nog? Finns alla kritiska kontrollpunkter med?</li>
          <li><strong>Kompetens:</strong> Har kontrollansvarig rätt certifiering? Är konstruktören behörig?</li>
          <li><strong>Konstruktionsritningar:</strong> Är de bestyrkta och kompletta?</li>
          <li><strong>Brandskydd:</strong> Uppfylls alla brandskyddskrav enligt BBR?</li>
          <li><strong>Fuktsäkerhet:</strong> Finns en fuktplan? Hur ska fukt hanteras under byggtiden?</li>
          <li><strong>Radon och ventilation:</strong> Hur säkerställs säker inomhusmiljö?</li>
        </ul>

        <p className="mb-6">
          Om något saknas eller är oklart kan byggnadsnämnden neka startbesked tills bristerna är åtgärdade. Det är därför 
          KA:s roll att se till att allt är på plats <em>innan</em> samrådet.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Shield className="w-6 h-6 text-blue-600" />
          Kontrollplan och kontrollansvarig – vanliga missförstånd
        </h2>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Missförstånd 1: "Jag kan vara min egen KA"
        </h3>

        <p className="mb-4">
          <strong>Fakta:</strong> Nej. Kontrollansvarig måste vara en <strong>oberoende tredje part</strong> med rätt certifiering 
          från SP, Kiwa eller annan ackrediterad organisation. Du kan alltså inte vara KA för ditt eget projekt, även om du 
          har utbildningen.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-6">
          Missförstånd 2: "Kontrollplanen är bara en formalitet"
        </h3>

        <p className="mb-4">
          <strong>Fakta:</strong> Kontrollplanen är ett <strong>juridiskt bindande dokument</strong> som definierar vilka kontroller 
          som ska göras, när och av vem. Om kontrollansvarig inte följer kontrollplanen kan denne bli skadeståndsansvarig vid fel. 
          Byggnadsnämnden kräver också att alla kontroller i planen är dokumenterade innan slutbesked beviljas.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-6">
          Missförstånd 3: "KA behövs bara för stora projekt"
        </h3>

        <p className="mb-6">
          <strong>Fakta:</strong> Kontrollansvarig krävs för nästan alla projekt som kräver bygglov – även enklare tillbyggnader 
          och ombyggnader. Endast attefallshus och vissa mindre åtgärder undantas från KA-krav.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Users className="w-6 h-6 text-orange-600" />
          BAS-P/BAS-U och arbetsmiljö – när det blir krav
        </h2>

        <p className="mb-4">
          Förutom kontrollansvarig kan du också behöva anlita <strong>byggarbetsmiljösamordnare</strong> (BAS). Detta regleras 
          av Arbetsmiljöverkets föreskrifter (AFS 1999:3).
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-stone-800 mb-3">När behövs BAS?</h3>
          <p className="text-stone-700 mb-3">
            BAS krävs när <strong>fler än ett företag</strong> arbetar på byggarbetsplatsen samtidigt eller efter varandra. 
            Det innebär i praktiken nästan alla byggprojekt där du anlitar flera entreprenörer.
          </p>
          
          <h4 className="font-semibold text-stone-800 mb-2 mt-4">BAS-P (Projektering)</h4>
          <p className="text-stone-700 mb-3">
            <Link to="/bas-p" className="text-blue-600 hover:text-blue-700 underline">BAS-P</Link> arbetar under planeringsfasen 
            och upprättar en arbetsmiljöplan som beskriver risker och hur de ska hanteras.
          </p>

          <h4 className="font-semibold text-stone-800 mb-2">BAS-U (Utförande)</h4>
          <p className="text-stone-700">
            <Link to="/bas-u" className="text-blue-600 hover:text-blue-700 underline">BAS-U</Link> arbetar under byggtiden och 
            samordnar arbetsmiljöfrågor mellan olika entreprenörer på plats.
          </p>
        </div>

        <p className="mb-6">
          <strong>Praktiskt tips:</strong> I mindre projekt är det vanligt att samma person är både kontrollansvarig, BAS-P och BAS-U. 
          Detta ger smidig samordning och lägre totalkostnad.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          12 vanliga misstag vid husbygge
        </h2>

        <p className="mb-6">
          Här är de 12 vanligaste misstagen jag sett under mina 20+ år i byggbranschen som certifierad kontrollansvarig (KA enligt PBL) i Västernorrland – och hur du undviker dem:
        </p>

        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-red-800 mb-2">1. Börja bygga innan startbesked</h3>
            <p className="text-red-700 mb-2">
              Detta är det allvarligaste misstaget. Att bygga utan startbesked är olagligt och kan leda till byggsanktionsavgift 
              på upp till 1 miljon kronor samt krav på rivning.
            </p>
            <p className="text-stone-700 font-semibold">Lösning: Vänta tills du har skriftligt startbesked från byggnadsnämnden.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-red-800 mb-2">2. Utse kontrollansvarig för sent</h3>
            <p className="text-red-700 mb-2">
              Många anlitar KA först när byggnadsnämnden kräver det vid tekniskt samråd. Då har ofta planering gått för långt 
              och KA måste göra om delar av kontrollplanen.
            </p>
            <p className="text-stone-700 font-semibold">Lösning: Anlita KA redan vid planeringsstart, helst innan bygglovsansökan.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-red-800 mb-2">3. Glömma att anmäla ändringar under byggprocessen</h3>
            <p className="text-red-700 mb-2">
              "Vi flyttade bara på ett fönster" eller "Vi la till en extra dörr" – små ändringar från godkänt bygglov måste 
              alltid anmälas och godkännas av byggnadsnämnden.
            </p>
            <p className="text-stone-700 font-semibold">Lösning: Kontakta KA omedelbart om ni vill ändra något från ritningarna.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-red-800 mb-2">4. Sakna dokumentation vid kritiska skeden</h3>
            <p className="text-red-700 mb-2">
              KA ska kontrollera grundläggning innan betong gjuts, stomkonstruktion innan hela stommen täcks, etc. Att täcka 
              saker innan kontroll är gjord skapar stora problem.
            </p>
            <p className="text-stone-700 font-semibold">Lösning: Följ kontrollplanen exakt. Ring KA innan varje kritiskt skede täcks eller göms.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-red-800 mb-2">5. Bygga för nära gräns</h3>
            <p className="text-red-700 mb-2">
              Minsta tillåtna avstånd till gräns är vanligen 4,5 meter. Många mäter fel eller utgår från garagets placering 
              istället för tomtgränsen.
            </p>
            <p className="text-stone-700 font-semibold">Lösning: Anlita lantmätare för inmätning innan bygget startar. En felmätning kan kosta hundratusentals kronor.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-red-800 mb-2">6. Hoppa över fuktspärr och tätskikt</h3>
            <p className="text-red-700 mb-2">
              "Vi glömde fuktspärren under plattan" eller "Tätskiktet i badrummet kändes onödigt" – detta leder nästan alltid 
              till fuktskador inom några år.
            </p>
            <p className="text-stone-700 font-semibold">Lösning: Följ svenska fuktsäkerhetsregler till punkt och pricka. KA kontrollerar detta.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-red-800 mb-2">7. Använda icke-bestyrkta konstruktionsritningar</h3>
            <p className="text-red-700 mb-2">
              Konstruktionsritningar måste vara bestyrkta av en behörig konstruktör. Ritningar från "en kompis som är duktig på CAD" 
              godkänns inte.
            </p>
            <p className="text-stone-700 font-semibold">Lösning: Anlita en certifierad konstruktör som kan bestyrka handlingarna.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-red-800 mb-2">8. Underskatta energikraven</h3>
            <p className="text-red-700 mb-2">
              Svenska energikrav (BBR) är strikta. Att bygga utan att verifiera U-värden, köldbryggor och installationseffekt 
              leder till underkänt vid slutbesked.
            </p>
            <p className="text-stone-700 font-semibold">Lösning: Gör korrekt energiberäkning redan vid bygglovsansökan.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-red-800 mb-2">9. Sakna BAS när flera entreprenörer arbetar</h3>
            <p className="text-red-700 mb-2">
              Att inte anlita BAS när det krävs är brott mot Arbetsmiljölagen. Vid olycka på byggplatsen kan byggherren bli 
              personligt ansvarig.
            </p>
            <p className="text-stone-700 font-semibold">Lösning: Utse BAS-P och BAS-U om fler än ett företag arbetar på projektet.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-red-800 mb-2">10. Ignorera grannars yttranden</h3>
            <p className="text-red-700 mb-2">
              Om grannar har lämnat negativa yttranden om ditt bygglov måste dessa bemötas. Många tror att "jag har ju fått 
              bygglov så grannarna har inget att säga till om" – men grannar kan överklaga beslutet.
            </p>
            <p className="text-stone-700 font-semibold">Lösning: Prata med grannarna tidigt i processen. Kompromissa om möjligt.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-red-800 mb-2">11. Dålig tidplanering – räkna med längre byggtid än planerat</h3>
            <p className="text-red-700 mb-2">
              De flesta projekt tar 30-50% längre tid än planerat på grund av väder, materialförseningar och oväntade problem. 
              Att tro att "vi är klara inom 4 månader" är orealistiskt för de flesta villabyggen.
            </p>
            <p className="text-stone-700 font-semibold">Lösning: Lägg på 30% tidsbuffert i alla planer. Informera KA och BAS om förseningar direkt.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-red-800 mb-2">12. Glömma att ansöka om slutbesked</h3>
            <p className="text-red-700 mb-2">
              "Vi är ju klara och har flyttat in, så byggnadsnämnden är väl nöjd?" – Nej! Utan slutbesked är det olagligt att 
              bo i byggnaden och försäkringar gäller inte fullt ut.
            </p>
            <p className="text-stone-700 font-semibold">Lösning: Kontakta KA för slutbesiktning direkt när alla arbeten är klara.</p>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <ListChecks className="w-6 h-6 text-green-600" />
          Checklista före spadtag
        </h2>

        <p className="mb-4">
          Bocka av dessa punkter innan du börjar bygga:
        </p>

        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>✅ Bygglov beviljat och överklagetiden (3 veckor) har gått ut</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>✅ Kontrollansvarig utsedd och kontrollplan upprättad</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>✅ BAS-P och BAS-U utsedda (om fler än ett företag arbetar)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>✅ Tekniskt samråd genomfört och godkänt av byggnadsnämnden</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>✅ Startbesked beviljat skriftligen av byggnadsnämnden</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>✅ Alla konstruktionsritningar bestyrkta av behörig konstruktör</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>✅ Tomtgränser markerade (ev. med hjälp av lantmätare)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>✅ Grannarna informerade och eventuel avtal om tomtintrång tecknade</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>✅ Entreprenörer kontrakterade med tydliga avtal</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>✅ Försäkringar på plats (byggherreförsäkring och ansvarsförsäkring)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>✅ KA och BAS har fått kopior av alla relevanta handlingar</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>✅ Tidsplan upprättad med kontrollpunkter markerade</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-stone-800 mb-6 mt-10">
          Vanliga frågor
        </h2>

        <div className="space-y-6 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad kostar det att anlita kontrollansvarig och BAS?
            </h3>
            <p className="text-stone-700">
              Kostnaden varierar beroende på projektets storlek. För ett normalt villabygge kostar kontrollansvarig vanligen 
              40,000-80,000 kr totalt. BAS-P och BAS-U kostar tillsammans cirka 30,000-60,000 kr. Många kontrollansvariga erbjuder 
              paketlösningar där alla tre rollerna ingår. Timpris ligger på 1,000-1,400 kr/timme i Västernorrland.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Hur lång tid tar det från bygglovsansökan till startbesked?
            </h3>
            <p className="text-stone-700">
              Räkna med totalt <strong>8-16 veckor</strong> från ansökan till startbesked. Bygglovshandläggning tar 4-10 veckor, 
              därefter krävs tid för att upprätta kontrollplan, planera tekniskt samråd och få startbesked. I Sundsvall och Timrå 
              går det ofta snabbare än i mindre kommuner som Kramfors eller Sollefteå.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kan jag bygga attefallshus utan kontrollansvarig?
            </h3>
            <p className="text-stone-700">
              Ja, för attefallshus (25-30 kvm bostadskomplement eller 15 kvm attefallstillbyggnad) krävs varken bygglov eller 
              kontrollansvarig, bara anmälan till byggnadsnämnden. Men – även attefallshus måste följa Boverkets byggregler (BBR). 
              Många väljer att anlita rådgivning från kontrollansvarig ändå för att undvika fel.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad händer om jag har byggt fel och kontrollansvarig upptäcker det?
            </h3>
            <p className="text-stone-700">
              KA kommer att dokumentera avvikelsen och kräva att den åtgärdas innan bygget fortsätter. Om felet är allvarligt 
              (t.ex. felaktig grundläggning eller bristande brandskydd) måste det åtgärdas omedelbart. Vid mycket allvarliga fel 
              kan KA rapportera till byggnadsnämnden som kan stoppa bygget. Det är därför viktigt att arbeta nära KA och följa 
              kontrollplanen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kan samma person vara kontrollansvarig, BAS-P och BAS-U?
            </h3>
            <p className="text-stone-700">
              Ja, det är både vanligt och rekommenderat, särskilt för mindre projekt. En person med alla tre certifieringar kan 
              ge effektiv samordning och lägre totalkostnad. Viktigt är dock att personen har tid och kompetens för alla uppdragen. 
              I Västernorrland erbjuder jag ofta denna typ av paketlösningar för smidig hantering av hela byggprocessen.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Vill du ha hjälp som kontrollansvarig och BAS i Västernorrland?
          </h2>
          <p className="text-lg mb-6 text-blue-50">
            Med över 20 års erfarenhet i byggbranschen som certifierad kontrollansvarig (KA enligt PBL) i Sundsvall, Timrå, Härnösand, Kramfors, Sollefteå och Örnsköldsvik 
            hjälper jag dig undvika de vanligaste misstagen vid husbygge. Jag erbjuder både kontrollansvarig, BAS-P och BAS-U samt 
            paketlösningar för smidig samordning genom hela byggprocessen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Kontakta mig för kostnadsfri konsultation
            </Link>
            <Link 
              to="/kontrollansvarig"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              Läs mer om tjänsterna
            </Link>
          </div>
        </div>

      </div>
    </GuideLayout>
  );
};

export default BygglovsguideVanligaMisstag;
