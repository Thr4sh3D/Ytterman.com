import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { FileText, CheckCircle, AlertTriangle, ClipboardCheck, Building, Users } from 'lucide-react';

const KontrollplanGuide = () => {
  return (
    <GuideLayout
      title="Kontrollplan - Upprättande och Innehåll"
      description="Komplett guide om kontrollplan enligt PBL. Vad den ska innehålla, hur den upprättas och hur den används i byggprocessen."
      category="Kvalitetskontroll"
      readTime="10 min"
      seoTitle="Kontrollplan Bygglov - Guide till PBL Kontrollplan 2025"
      seoDescription="Detaljerad guide om kontrollplan i byggprojekt. Vad kontrollplanen ska innehålla, kontrollpunkter och hur den används. Från erfaren kontrollansvarig."
      keywords="kontrollplan, kontrollplan bygglov, kontrollpunkter, PBL kontrollplan, kontrollansvarig kontrollplan, byggkontroll"
      canonicalPath="/guider/kontrollplan"
    >
      <div className="prose prose-stone max-w-none">
        
        <p className="text-lg text-stone-700 mb-6 font-medium">
          Kontrollplan är ett centralt dokument i byggprocessen som beskriver vilka kontroller som ska utföras, när och av vem. 
          Denna guide förklarar vad en kontrollplan är, vad den ska innehålla och hur <Link to="/kontrollansvarig" className="text-blue-600 hover:text-blue-700 font-medium underline">kontrollansvarig</Link> använder den.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start">
            <FileText className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Vad är en kontrollplan?</h3>
              <p className="text-blue-700">
                En kontrollplan är enligt <strong>Plan- och bygglagen (PBL) 10 kap. 9 §</strong> en plan som beskriver vilka kontroller 
                som ska göras för att säkerställa att ett byggprojekt följer gällande byggregler och bygglov. Kontrollplanen upprättas av 
                kontrollansvarig (KA) och är obligatorisk för de allra flesta byggprojekt.
              </p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-8">
          <ClipboardCheck className="w-6 h-6 text-blue-600" />
          Varför behövs kontrollplan?
        </h2>

        <p className="mb-4">
          Kontrollplanen fyller flera viktiga syften:
        </p>

        <div className="bg-gradient-to-r from-slate-50 to-stone-50 p-6 rounded-lg mb-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
              <div>
                <strong className="text-stone-800">Systematisk kvalitetssäkring:</strong>
                <p className="text-stone-700 mt-1">
                  Säkerställer att alla viktiga moment i bygget kontrolleras på rätt sätt
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
              <div>
                <strong className="text-stone-800">Tydlig ansvarsfördelning:</strong>
                <p className="text-stone-700 mt-1">
                  Klargör vem som ansvarar för varje kontroll (KA, konstruktör, entreprenör osv.)
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
              <div>
                <strong className="text-stone-800">Dokumentation för byggnadsnämnden:</strong>
                <p className="text-stone-700 mt-1">
                  Visar att projektet har kontrollerats enligt kraven, vilket krävs för <Link to="/guider/slutbesked" className="text-blue-600 hover:text-blue-700 underline">slutbesked</Link>
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
              <div>
                <strong className="text-stone-800">Förebyggande av byggfel:</strong>
                <p className="text-stone-700 mt-1">
                  Genom att kontrollera i rätt tid kan fel upptäckas och åtgärdas innan de döljs
                </p>
              </div>
            </li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <FileText className="w-6 h-6 text-orange-600" />
          Vad ska kontrollplanen innehålla?
        </h2>

        <p className="mb-4">
          Enligt Boverkets allmänna råd ska kontrollplanen innehålla följande information:
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-6">
          1. Projektinformation
        </h3>

        <div className="bg-stone-100 p-6 rounded-lg mb-6">
          <ul className="space-y-2 text-stone-700">
            <li>• <strong>Projektnamn och adress:</strong> Tydlig identifiering av projektet</li>
            <li>• <strong>Bygglovsnummer:</strong> Referens till beviljat bygglov</li>
            <li>• <strong>Byggherre:</strong> Namn och kontaktuppgifter</li>
            <li>• <strong>Kontrollansvarig:</strong> Namn, certifieringsnummer och kontaktuppgifter</li>
            <li>• <strong>Entreprenör:</strong> Vem som ska utföra byggnadsarbetena</li>
            <li>• <strong>Konstruktör och övriga sakkunniga:</strong> Med kontaktuppgifter</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          2. Beskrivning av projektet
        </h3>

        <p className="mb-6">
          En kort beskrivning av vad som ska byggas, omfattning och eventuella särskilda förutsättningar (t.ex. byggande i befintlig miljö, 
          känslig plats, speciella materialkrav).
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          3. Kontrollpunkter - hjärtat i kontrollplanen
        </h3>

        <p className="mb-4">
          Kontrollpunkterna anger exakt vilka kontroller som ska utföras. För varje kontrollpunkt ska anges:
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-blue-200">
                <th className="text-left py-2 px-2 text-blue-800">Information</th>
                <th className="text-left py-2 px-2 text-blue-800">Beskrivning</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr className="border-b border-blue-100">
                <td className="py-3 px-2 font-semibold">Vad som ska kontrolleras</td>
                <td className="py-3 px-2">T.ex. "Grundläggning", "Bärande stomme", "Brandskydd"</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="py-3 px-2 font-semibold">När kontrollen ska ske</td>
                <td className="py-3 px-2">Tidpunkt eller skede, t.ex. "Innan gjutning" eller "Vid taklagsfäste"</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="py-3 px-2 font-semibold">Vem som utför kontrollen</td>
                <td className="py-3 px-2">KA, konstruktör, sakkunnig eller entreprenörens egenkontroll</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="py-3 px-2 font-semibold">Kontrollmetod</td>
                <td className="py-3 px-2">Hur kontrollen görs, t.ex. okulär besiktning, mätning, provning</td>
              </tr>
              <tr className="border-b border-blue-100">
                <td className="py-3 px-2 font-semibold">Dokumentation</td>
                <td className="py-3 px-2">Hur resultatet dokumenteras, t.ex. protokoll, foto, mätrapport</td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-semibold">Krav/regelverk</td>
                <td className="py-3 px-2">Vilka krav som kontrolleras, referens till BBR, bygglov etc.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Exempel på typiska kontrollpunkter i en villabyggnation
        </h3>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-stone-800 mb-4">Kontrollpunkter (urval):</h4>
          <ul className="space-y-3 text-stone-700 text-sm">
            <li>
              <strong>1. Utsättning:</strong> KA kontrollerar att byggnadens läge stämmer med bygglov (mätning på plats)
            </li>
            <li>
              <strong>2. Grundläggning:</strong> Konstruktör kontrollerar armering och dimensioner innan betonggjutning
            </li>
            <li>
              <strong>3. Dränering:</strong> KA kontrollerar dräneringsledningar och fall innan återfyllning
            </li>
            <li>
              <strong>4. Bärande stomme:</strong> Konstruktör kontrollerar bärande väggar, bjälklag och takstolar
            </li>
            <li>
              <strong>5. Brandskydd:</strong> KA/brandkonsult kontrollerar brandcellsgränser och genomföringar
            </li>
            <li>
              <strong>6. Fuktsäkerhet:</strong> Fuktsakkunnig kontrollerar dränerande skikt, tätskikt och membran
            </li>
            <li>
              <strong>7. Installationer:</strong> Behörig installatör kontrollerar VVS- och elinstallationer
            </li>
            <li>
              <strong>8. Ventilation:</strong> Ventilationskontrollant mäter luftflöden och kontrollerar funktion
            </li>
            <li>
              <strong>9. Energiprestanda:</strong> Energisakkunnig verifierar att U-värden och BB R-krav uppfylls
            </li>
            <li>
              <strong>10. Slutbesiktning:</strong> KA går igenom hela byggnaden och verifierar att allt är enligt bygglov
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          4. Tidsplan för kontroller
        </h3>

        <p className="mb-6">
          En översiktlig tidsplan som visar när de viktigaste kontrollerna planeras genomföras. Detta hjälper alla parter att planera 
          och säkerställa att kontrollanter är tillgängliga vid rätt tidpunkt.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          5. Rutiner för avvikelser
        </h3>

        <p className="mb-6">
          Beskrivning av hur avvikelser hanteras - vem som informeras, hur de dokumenteras och vem som är ansvarig för åtgärd.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Building className="w-6 h-6 text-amber-600" />
          Hur upprättas kontrollplan?
        </h2>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Steg 1: Förberedelse och projektanalys
        </h3>

        <p className="mb-4">
          Kontrollansvarig börjar med att grundligt sätta sig in i projektet:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-stone-700">
          <li>Granskar bygglovshandlingar, ritningar och tekniska beskrivningar</li>
          <li>Identifierar risker och kritiska moment</li>
          <li>Stämmer av med konstruktör och andra sakkunniga vilka kontroller de ska utföra</li>
          <li>Tar hänsyn till projektets storlek, komplexitet och särskilda förutsättningar</li>
        </ul>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Steg 2: Upprätta kontrollpunkter
        </h3>

        <div className="bg-amber-50 p-6 rounded-lg mb-6">
          <p className="text-stone-700 mb-3">KA definierar kontrollpunkter baserat på:</p>
          <ul className="space-y-2 text-stone-700">
            <li>• <strong>Bygglovskrav:</strong> Vad bygglov specifikt anger ska kontrolleras</li>
            <li>• <strong>BBR-krav (Boverkets byggregler):</strong> Tekniska egenskapskrav</li>
            <li>• <strong>PBL-krav:</strong> Allmänna krav på kontroll enligt Plan- och bygglagen</li>
            <li>• <strong>Erfarenhet:</strong> Vad är kritiska moment i denna typ av projekt?</li>
            <li>• <strong>Konstruktörens input:</strong> Vilka moment kräver konstruktionskontroll?</li>
            <li>• <strong>Entreprenörens metod:</strong> Vilka byggmetoder används som påverkar kontrollbehovet?</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Steg 3: Samråd med byggnadsnämnden
        </h3>

        <p className="mb-6">
          Kontrollplanen presenteras vid <Link to="/guider/tekniskt-samrad" className="text-blue-600 hover:text-blue-700 underline">tekniskt samråd</Link> där 
          byggnadsnämnden granskar och godkänner planen. Eventuella justeringar görs baserat på byggnadsnämndens synpunkter.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Steg 4: Löpande uppdatering
        </h3>

        <p className="mb-6">
          Kontrollplanen är ett <strong>levande dokument</strong>. Under byggprocessen kan den behöva uppdateras om:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-stone-700">
          <li>Byggmetoder ändras</li>
          <li>Nya risker identifieras</li>
          <li>Ändringar görs i projektet</li>
          <li>Byggnadsnämnden kräver ytterligare kontroller</li>
        </ul>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <CheckCircle className="w-6 h-6 text-green-600" />
          Hur används kontrollplanen under byggtiden?
        </h2>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-green-800 mb-3">Praktisk användning:</h3>
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Styrning av kontroller:</strong> KA och entreprenören följer planen för att veta när kontroller ska genomföras
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Dokumentation:</strong> Varje genomförd kontroll dokumenteras i enlighet med kontrollplanen
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Checklistning:</strong> Kontrollpunkterna bockas av allt eftersom de genomförs
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Underlag för slutbesked:</strong> Den kompletterade kontrollplanen är en del av slutredovisningen till byggnadsnämnden
              </div>
            </li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Users className="w-6 h-6 text-blue-600" />
          Olika typer av kontroller i kontrollplanen
        </h2>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          1. Kontrollansvarigs kontroller
        </h3>

        <p className="mb-4 text-stone-700">
          KA genomför okulära kontroller (besiktningar) på plats för att verifiera att bygget följer godkända ritningar och att 
          utförandet överensstämmer med bygglov.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          2. Konstruktörens kontroller
        </h3>

        <p className="mb-4 text-stone-700">
          Konstruktören (konstruktionskontrollanten) kontrollerar att bärande konstruktioner utförs enligt konstruktionshandlingarna. 
          Detta inkluderar armering, dimensioner, infästningar etc.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          3. Sakkunnigkontroller
        </h3>

        <p className="mb-4 text-stone-700">
          Specialistkontroller utförs av certifierade sakkunniga inom specifika områden:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-stone-700">
          <li><strong>Fuktsakkunnig:</strong> Kontrollerar fuktsäkerhet</li>
          <li><strong>Brandkonsult:</strong> Verifierar brandskydd</li>
          <li><strong>Energisakkunnig:</strong> Kontrollerar energiprestanda</li>
          <li><strong>Ventilationskontrollant:</strong> OVK (obligatorisk ventilationskontroll)</li>
          <li><strong>Radonmätare:</strong> Verifierar radonskydd där relevant</li>
        </ul>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          4. Entreprenörens egenkontroll
        </h3>

        <p className="mb-6 text-stone-700">
          Entreprenören är skyldig att genomföra egenkontroller av sitt eget arbete enligt sin kvalitetsplan. KA följer upp att 
          dessa egenkontroller faktiskt genomförs och dokumenteras.
        </p>

        <h2 className="text-2xl font-bold text-stone-800 mb-6 mt-10">
          Vanliga frågor om kontrollplan
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Är kontrollplan obligatorisk för alla byggprojekt?
            </h3>
            <p className="text-stone-700">
              Kontrollplan krävs för de allra flesta byggprojekt som kräver bygglov eller anmälan. Endast för mycket små projekt 
              (t.ex. friggebodar under 15 m²) kan kontrollplan undvaras. I praktiken: om du behöver 
              <Link to="/guider/kontrollansvarig-bygglov" className="text-blue-600 hover:text-blue-700 underline ml-1">kontrollansvarig</Link> behöver du också kontrollplan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              När ska kontrollplanen vara klar?
            </h3>
            <p className="text-stone-700">
              Kontrollplanen ska vara färdig innan tekniskt samråd och innan startbesked beviljas. Den är ett av de dokument som 
              byggnadsnämnden granskar vid det tekniska samrådet.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kan jag som byggherrre själv göra kontrollplan?
            </h3>
            <p className="text-stone-700">
              Nej, kontrollplanen ska upprättas av en certifierad kontrollansvarig som har rätt kompetens och erfarenhet. 
              Detta är ett krav i PBL och säkerställer att planen är professionellt gjord.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad händer om kontrollplanen inte följs?
            </h3>
            <p className="text-stone-700">
              Om kontrollansvarig inte följer kontrollplanen eller om kritiska kontroller uteblir kan detta leda till att slutbesked nekas, 
              krav på extra kontroller i efterhand, eller i värsta fall byggsanktionsavgift. KA har ett 
              <Link to="/guider/kontrollansvarig-ansvar" className="text-blue-600 hover:text-blue-700 underline ml-1">personligt ansvar</Link> för 
              att kontrollplanen följs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Hur många kontrollpunkter ska en kontrollplan innehålla?
            </h3>
            <p className="text-stone-700">
              Det varierar kraftigt beroende på projektets storlek och komplexitet. En enkel villatillbyggnad kan ha 10-15 kontrollpunkter, 
              medan en nybyggd villa kan ha 25-40 kontrollpunkter och ett flerbostadshus 50-100 kontrollpunkter. Viktigt är att alla 
              kritiska moment täcks - inte att ha så många som möjligt.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Professionell kontrollplan för ditt projekt
          </h2>
          <p className="text-lg mb-6 text-blue-50">
            Som erfaren kontrollansvarig upprättar jag skräddarsydda kontrollplaner anpassade för ditt specifika projekt. 
            Med över 20 års erfarenhet vet jag vilka kontroller som är kritiska och hur de bäst genomförs. 
            Kontakta mig för kontrollansvarig-tjänster i Västernorrland.
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
              Läs mer om kontrollansvarig
            </Link>
          </div>
        </div>

      </div>
    </GuideLayout>
  );
};

export default KontrollplanGuide;
