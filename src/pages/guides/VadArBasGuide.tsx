import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { Users, HelpCircle, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const VadArBasGuide = () => {
  return (
    <GuideLayout
      title="Vad är BAS? - Skillnad mellan BAS-P och BAS-U"
      description="Enkel förklaring av vad BAS (Byggarbetsmiljösamordnare) är, skillnaden mellan BAS-P och BAS-U och när du behöver BAS-samordning."
      category="Säkerhetssamordning"
      readTime="7 min"
      seoTitle="Vad är BAS? - Förklaring av BAS-P och BAS-U 2025 | Västernorrland"
      seoDescription="Enkel guide som förklarar vad BAS (Byggarbetsmiljösamordnare) är, skillnaden mellan BAS-P och BAS-U och när du behöver anlita BAS. Från erfaren samordnare."
      keywords="vad är BAS, byggarbetsmiljösamordnare, BAS-P BAS-U skillnad, när behövs BAS, arbetsmiljösamordning"
      canonicalPath="/guider/vad-ar-bas"
    >
      <div className="prose prose-stone max-w-none">
        
        <p className="text-lg text-stone-700 mb-6 font-medium">
          BAS är en förkortning för <strong>Byggarbetsmiljösamordnare</strong> - en person som ser till att arbetsmiljön på byggarbetsplatsen 
          är säker. Denna guide förklarar enkelt vad BAS är, varför rollen finns och skillnaden mellan BAS-P och BAS-U.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-8">
          <Users className="w-6 h-6 text-blue-600" />
          Vad betyder BAS?
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="font-semibold text-blue-800 mb-3">BAS står för:</h3>
          <p className="text-2xl font-bold text-blue-700 mb-2">Byggarbetsmiljösamordnare</p>
          <p className="text-blue-700">
            En person som ansvarar för att samordna arbetsmiljöfrågor när flera företag arbetar på samma byggarbetsplats. 
            BAS ser till att alla arbetar säkert och att risker hanteras på rätt sätt.
          </p>
        </div>

        <p className="mb-6">
          Kravet på BAS infördes för att minska antalet olyckor och arbetsskador inom byggbranschen. När flera entreprenörer arbetar 
          samtidigt eller efter varandra på samma plats kan risker uppstå som ingen enskild entreprenör har full kontroll över. 
          BAS roll är att samordna dessa arbetsmiljöfrågor.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <FileText className="w-6 h-6 text-orange-600" />
          Två typer av BAS: BAS-P och BAS-U
        </h2>

        <p className="mb-4">
          Det finns två olika BAS-roller beroende på vilken fas i byggprocessen de arbetar i:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
              <Users className="w-6 h-6" />
              BAS-P
            </h3>
            <p className="text-lg font-semibold text-blue-700 mb-3">Byggarbetsmiljösamordnare Projektering</p>
            <p className="text-stone-700 mb-4">
              Arbetar i <strong>planeringsfasen</strong> innan bygget startar. BAS-P ser till att arbetsmiljöfrågor beaktas redan när bygget planeras och ritas.
            </p>
            <Link to="/guider/bas-p-guide" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
              Läs mer om BAS-P <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border-2 border-orange-200">
            <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2">
              <Users className="w-6 h-6" />
              BAS-U
            </h3>
            <p className="text-lg font-semibold text-orange-700 mb-3">Byggarbetsmiljösamordnare Utförande</p>
            <p className="text-stone-700 mb-4">
              Arbetar när <strong>bygget pågår</strong>. BAS-U är på plats regelbundet, samordnar entreprenörer och ser till att arbetsmiljön är säker varje dag.
            </p>
            <Link to="/guider/bas-u-guide" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold">
              Läs mer om BAS-U <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Kan samma person vara både BAS-P och BAS-U?
        </h3>

        <p className="mb-6">
          Ja! I många projekt, särskilt mindre byggprojekt, är det <strong>samma person</strong> som är både BAS-P och BAS-U. 
          Detta ger bra kontinuitet eftersom personen känner till projektet från början och följer det hela vägen till färdigställande.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <CheckCircle className="w-6 h-6 text-green-600" />
          När behöver du anlita BAS?
        </h2>

        <p className="mb-4">
          Enligt <strong>Arbetsmiljöverkets föreskrifter (AFS 1999:3)</strong> ska BAS anlitas när:
        </p>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
              <div>
                <strong className="text-stone-800">Mer än ett företag arbetar på byggarbetsplatsen</strong>
                <p className="text-stone-700 mt-1">
                  Om flera entreprenörer (t.ex. byggfirma, rörläggare, elektriker) arbetar samtidigt eller efter varandra krävs BAS
                </p>
              </div>
            </li>
          </ul>
        </div>

        <p className="mb-6">
          I praktiken innebär detta att <strong>nästan alla byggprojekt</strong> kräver BAS, förutom de allra minsta där endast 
          en enda entreprenör arbetar helt ensam från start till slut (vilket är ovanligt).
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Exempel på projekt som kräver BAS
        </h3>

        <div className="bg-slate-100 p-6 rounded-lg mb-6">
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold text-lg">✓</span>
              <div>
                <strong>Nybyggnad av villa:</strong> Markentreprenör, stombyggare, takläggare, VVS, elektriker, målare = flera företag
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold text-lg">✓</span>
              <div>
                <strong>Tillbyggnad:</strong> Om både bygghantverkare och installatörer anlitas
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold text-lg">✓</span>
              <div>
                <strong>Renovering:</strong> När flera olika yrkesgrupper arbetar i befintlig byggnad
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold text-lg">✓</span>
              <div>
                <strong>Flerbostadshus:</strong> Alltid flera underentreprenörer involverade
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold text-lg">✓</span>
              <div>
                <strong>Kommersiella byggnader:</strong> Butiker, kontor, industrilokaler med många aktörer
              </div>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          När behövs INTE BAS?
        </h3>

        <p className="mb-4">
          BAS krävs inte när:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-stone-700">
          <li>Endast <strong>ett enda företag</strong> utför <strong>allt arbete</strong> från början till slut</li>
          <li>Du som privatperson bygger helt själv utan att anlita någon entreprenör</li>
          <li>Mycket små projekt där det inte finns några samordningsbehov</li>
        </ul>

        <p className="mb-6 bg-amber-50 border-l-4 border-amber-400 p-4">
          <strong>OBS:</strong> Även om endast ett företag arbetar kan arbetsgivaren behöva utse någon för arbetsmiljösamordning 
          internt om flera arbetsgrupper samverkar. Kontakta alltid en expert om du är osäker.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <FileText className="w-6 h-6 text-amber-600" />
          Vad gör BAS i praktiken?
        </h2>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          BAS-P:s arbetsuppgifter (Projektering)
        </h3>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">1.</span>
              <div>
                <strong>Upprättar arbetsmiljöplan:</strong> Ett dokument som beskriver risker och hur de ska hanteras
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">2.</span>
              <div>
                <strong>Granskar ritningar:</strong> Ser till att byggnaden kan byggas på ett säkert sätt
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">3.</span>
              <div>
                <strong>Samordnar projektörer:</strong> Arkitekter, konstruktörer och konsulter samarbetar om arbetsmiljö
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">4.</span>
              <div>
                <strong>Identifierar risker tidigt:</strong> Innan bygget börjar, så problem kan undvikas
              </div>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          BAS-U:s arbetsuppgifter (Utförande)
        </h3>

        <div className="bg-orange-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">1.</span>
              <div>
                <strong>Uppdaterar arbetsmiljöplanen:</strong> Anpassar planen efter hur bygget faktiskt genomförs
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">2.</span>
              <div>
                <strong>Samordnar entreprenörer:</strong> Ser till att alla arbetar säkert och inte skapar risker för varandra
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">3.</span>
              <div>
                <strong>Genomför säkerhetsronder:</strong> Kontrollerar regelbundet att arbetsmiljön är säker
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">4.</span>
              <div>
                <strong>Leder arbetsmiljömöten:</strong> Startmöten och veckomöten där säkerhet diskuteras
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">5.</span>
              <div>
                <strong>Hanterar avvikelser:</strong> När något är fel påtalar BAS-U detta och följer upp åtgärder
              </div>
            </li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <HelpCircle className="w-6 h-6 text-blue-600" />
          Vanliga frågor om BAS
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Är BAS samma sak som kontrollansvarig?
            </h3>
            <p className="text-stone-700">
              Nej, det är två olika roller. <Link to="/kontrollansvarig" className="text-blue-600 hover:text-blue-700 underline">Kontrollansvarig (KA)</Link> kontrollerar 
              att bygget följer Plan- och bygglagen (PBL) och bygglovet, medan BAS säkerställer arbetsmiljön enligt Arbetsmiljölagen (AML). 
              Dock är det vanligt att samma person har båda uppdragen i ett projekt.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vem anlitar BAS?
            </h3>
            <p className="text-stone-700">
              Det är <strong>byggherren</strong> (den som beställer bygget) som är skyldig att anlita både BAS-P och BAS-U. 
              Om du bygger din egen villa är du byggherren och måste således anlita BAS om flera företag arbetar.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad kostar BAS?
            </h3>
            <p className="text-stone-700">
              Kostnaden varierar beroende på projektets storlek och komplexitet:
            </p>
            <ul className="mt-2 space-y-1 text-stone-700">
              <li>• <strong>Villabygge:</strong> Typiskt 30,000-60,000 kr totalt för hela projektet</li>
              <li>• <strong>Mindre tillbyggnad:</strong> 15,000-30,000 kr</li>
              <li>• <strong>Timpris:</strong> Vanligen 1,000-1,400 kr/timme</li>
            </ul>
            <p className="text-stone-700 mt-2">
              Läs mer om <Link to="/guider/kontrollansvarig-timpris" className="text-blue-600 hover:text-blue-700 underline">priser för BAS och kontrollansvarig</Link>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad händer om vi inte anlitar BAS när det krävs?
            </h3>
            <p className="text-stone-700">
              Att inte anlita BAS när det krävs är ett brott mot Arbetsmiljölagen. Konsekvenserna kan vara:
            </p>
            <ul className="mt-2 space-y-1 text-stone-700">
              <li>• Arbetsmiljösanktionsavgift (böter) från Arbetsmiljöverket</li>
              <li>• Föreläggande att omedelbart anlita BAS</li>
              <li>• Risk att byggarbetsplatsen stoppas</li>
              <li>• Personligt ansvar för byggherren vid olyckor</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Behöver byggnaden nämnden godkänna BAS?
            </h3>
            <p className="text-stone-700">
              Nej, BAS är kopplat till Arbetsmiljölagen och Arbetsmiljöverket, inte till byggnadsnämnden. Däremot kan byggnadsnämnden 
              vid <Link to="/guider/tekniskt-samrad" className="text-blue-600 hover:text-blue-700 underline">tekniskt samråd</Link> fråga 
              vem som är BAS-U för projektet.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kan jag själv vara BAS för mitt eget projekt?
            </h3>
            <p className="text-stone-700">
              Tekniskt sett ja, om du har rätt utbildning (BAS-kurs på 40 timmar) och kompetens. Men i praktiken är det <strong>inte rekommenderat</strong> 
              eftersom du som byggherrre har många andra uppgifter och det kan vara svårt att vara objektiv om arbetsmiljöfrågor i ditt eget projekt.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-stone-800 mb-6 mt-10">
          Sammanfattning: BAS i korthet
        </h2>

        <div className="bg-gradient-to-r from-slate-100 to-stone-100 p-8 rounded-lg mb-8">
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>BAS</strong> = Byggarbetsmiljösamordnare som säkerställer säker arbetsmiljö</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>BAS-P</strong> arbetar i planeringsfasen, <strong>BAS-U</strong> arbetar när bygget pågår</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>BAS krävs när <strong>flera företag</strong> arbetar på samma byggarbetsplats</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Byggherren</strong> är ansvarig för att anlita BAS</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>Samma person kan vara både BAS-P, BAS-U och kontrollansvarig</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>Att inte anlita BAS när det krävs kan leda till kraftiga böter</span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Behöver du BAS för ditt projekt i Västernorrland?
          </h2>
          <p className="text-lg mb-6 text-blue-50">
            Jag erbjuder både <Link to="/guider/bas-p-guide" className="text-white underline font-semibold">BAS-P</Link> och 
            <Link to="/guider/bas-u-guide" className="text-white underline font-semibold ml-1">BAS-U</Link>, 
            samt kan kombinera med <Link to="/kontrollansvarig" className="text-white underline font-semibold ml-1">kontrollansvarig</Link> för 
            effektiv samordning genom hela byggprocessen. Kostnadsfri konsultation där vi går igenom ditt projekts behov.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Kontakta mig för BAS
            </Link>
            <Link 
              to="/bas-samordning"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              Läs mer om BAS-tjänster
            </Link>
          </div>
        </div>

      </div>
    </GuideLayout>
  );
};

export default VadArBasGuide;
