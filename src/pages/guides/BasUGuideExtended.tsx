import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { Users, HardHat, AlertCircle, CheckCircle, Shield, FileCheck } from 'lucide-react';

const BasUGuideExtended = () => {
  return (
    <GuideLayout
      title="BAS-U Guide - Utförande och Byggsäkerhet"
      description="Fullständig guide om BAS-U (Byggarbetsmiljösamordnare Utförande). Ansvar, säkerhetsronder och arbetsmiljösamordning på byggarbetsplatsen."
      category="Säkerhetssamordning"
      readTime="9 min"
      seoTitle="BAS-U Guide 2025 - Arbetsmiljösamordnare Utförande | Västernorrland"
      seoDescription="Komplett guide om BAS-U (Byggarbetsmiljösamordnare Utförande). Ansvar, säkerhetsronder, samordning och hur BAS-U arbetar på byggarbetsplatsen."
      keywords="BAS-U, arbetsmiljösamordnare utförande, säkerhetsronder, byggarbetsmiljö, BAS-U ansvar, samordning byggplats"
      canonicalPath="/guider/bas-u-guide"
    >
      <div className="prose prose-stone max-w-none">
        
        <p className="text-lg text-stone-700 mb-6 font-medium">
          BAS-U (Byggarbetsmiljösamordnare Utförande) är den person som säkerställer arbetsmiljön på byggarbetsplatsen under byggtiden. 
          Denna guide förklarar BAS-U:s roll, arbetsuppgifter och hur arbetsmiljösamordningen fungerar i praktiken. För information om projekteringsfasen, se vår guide om <Link to="/bas-p" className="text-blue-600 hover:text-blue-700 underline">BAS-P</Link>.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
          <div className="flex items-start">
            <HardHat className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-orange-800 mb-2">Vad är BAS-U?</h3>
              <p className="text-orange-700">
                BAS-U (Byggarbetsmiljösamordnare Utförande) är obligatorisk när <strong>mer än ett företag</strong> arbetar på 
                byggarbetsplatsen samtidigt eller i direkt följd. BAS-U:s uppgift är att samordna arbetsmiljöfrågor mellan alla entreprenörer.
              </p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-8">
          <Shield className="w-6 h-6 text-blue-600" />
          När krävs BAS-U?
        </h2>

        <p className="mb-4">
          Enligt Arbetsmiljöverkets föreskrifter (AFS 1999:3) ska BAS-U utses när:
        </p>

        <div className="bg-gradient-to-r from-slate-50 to-stone-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Flera entreprenörer arbetar på samma plats</strong> - antingen samtidigt eller efter varandra
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Byggarbete pågår</strong> - från det att första entreprenören börjar till sista entreprenören avslutar
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Arbetsmiljörisker finns</strong> - som kräver samordning mellan olika företag för att hanteras säkert
              </div>
            </li>
          </ul>
        </div>

        <p className="mb-6">
          I praktiken innebär detta att <strong>nästan alla byggprojekt</strong> kräver BAS-U, förutom de allra minsta där endast 
          en enda entreprenör arbetar helt ensam från start till slut. BAS-U arbetar ofta i samverkan med <Link to="/kontrollansvarig" className="text-blue-600 hover:text-blue-700 underline">kontrollansvarig</Link> för bestä resultat.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Typiska projekt som kräver BAS-U
        </h3>

        <ul className="list-disc list-inside space-y-2 mb-8 text-stone-700">
          <li>Villabyggen där flera underentreprenörer anlitas (mark, stomme, tak, VVS, el, måleri)</li>
          <li>Tillbyggnader med både bygg- och installationsentreprenörer</li>
          <li>Renoveringar där flera hantverkare arbetar samtidigt</li>
          <li>Flerbostadshus och kommersiella byggnader med många underentreprenörer</li>
          <li>ROT-projekt i befintliga byggnader med flera yrkesgrupper</li>
        </ul>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Users className="w-6 h-6 text-orange-600" />
          BAS-U:s arbetsuppgifter
        </h2>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-6">
          1. Uppdatera och följa arbetsmiljöplanen
        </h3>

        <p className="mb-4">
          BAS-U tar över arbetsmiljöplanen från <Link to="/guider/bas-p-guide" className="text-blue-600 hover:text-blue-700 underline">BAS-P</Link> och 
          uppdaterar den kontinuerligt:
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">→</span>
              <span><strong>Anpassa till faktiska förhållanden:</strong> Verkligheten på plats kan skilja sig från projekteringen</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">→</span>
              <span><strong>Lägga till nya risker:</strong> Som upptäcks under byggtiden</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">→</span>
              <span><strong>Dokumentera vidtagna åtgärder:</strong> Hur risker hanteras i praktiken</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">→</span>
              <span><strong>Informera alla entreprenörer:</strong> Säkerställa att alla känner till arbetsmiljöplanen</span>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          2. Samordna entreprenörer på byggarbetsplatsen
        </h3>

        <p className="mb-4">
          BAS-U:s huvudsakliga uppgift är att samordna alla företag som arbetar på platsen:
        </p>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-stone-800 mb-3">Samordningsområden:</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
              <div>
                <strong className="text-stone-800">Tidplanering:</strong>
                <p className="text-stone-700 mt-1">
                  Koordinera när olika entreprenörer arbetar så de inte skapar risker för varandra
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
              <div>
                <strong className="text-stone-800">Gemensamma skyddsåtgärder:</strong>
                <p className="text-stone-700 mt-1">
                  Se till att staket, ställningar, skyddsräcken och andra säkerhetsanordningar finns på plats
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
              <div>
                <strong className="text-stone-800">Information och instruktion:</strong>
                <p className="text-stone-700 mt-1">
                  Informera alla om risker och säkerhetsrutiner vid etablering, veckomöten och APT-möten
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
              <div>
                <strong className="text-stone-800">Avvikelserapportering:</strong>
                <p className="text-stone-700 mt-1">
                  Hantera och dokumentera arbetsmiljöavvikelser och se till att de åtgärdas
                </p>
              </div>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          3. Genomföra säkerhetsronder
        </h3>

        <p className="mb-4">
          BAS-U genomför regelbundna <strong>säkerhetsronder</strong> (också kallade skyddsronder) på byggarbetsplatsen:
        </p>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-green-800 mb-3">Vid säkerhetsronder kontrolleras:</h4>
          <ul className="space-y-2 text-stone-700">
            <li>• <strong>Fallskydd:</strong> Räcken, skyddsnät, ställningar och personlig skyddsutrustning</li>
            <li>• <strong>Ordning och reda:</strong> Fria arbets- och transportvägar, inga snubbelrisker</li>
            <li>• <strong>Maskinsäkerhet:</strong> Maskiner är hela, har skydd och används korrekt</li>
            <li>• <strong>Elsäkerhet:</strong> Kablar, kopplingar och elektriska verktyg i gott skick</li>
            <li>• <strong>Kemiska produkter:</strong> Korrekt förvaring och märkning av farliga ämnen</li>
            <li>• <strong>Brandskydd:</strong> Släckningsutrustning tillgänglig, brandfarliga arbeten övervakas</li>
            <li>• <strong>Personlig skyddsutrustning:</strong> Hjälm, skor, glasögon, hörselskydd används</li>
            <li>• <strong>Första hjälpen:</strong> Väskor tillgängliga och innehåll kontrollerat</li>
            <li>• <strong>Upplysning och skyltning:</strong> Säkerhetsskyltar väl synliga</li>
          </ul>
        </div>

        <p className="mb-6">
          Säkerhetsronder dokumenteras skriftligt och avvikelser måste följas upp och åtgärdas. Frekvensen beror på projektets storlek 
          och risk, men <strong>minst varannan vecka</strong> är vanligt.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          4. Ordna startmöte och veckomöten
        </h3>

        <p className="mb-4">
          BAS-U leder viktiga möten under byggprocessen:
        </p>

        <div className="bg-stone-100 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-stone-800 mb-3">Startmöte (etableringsmöte)</h4>
          <p className="text-stone-700 mb-3">
            När en ny entreprenör kommer till platsen kallar BAS-U till startmöte där:
          </p>
          <ul className="space-y-2 text-stone-700">
            <li>• Byggarbetsplatsens regler och rutiner går igenom</li>
            <li>• Arbetsmiljöplanen presenteras</li>
            <li>• Särskilda risker för den aktuella entreprenören identifieras</li>
            <li>• Kontaktuppgifter och ansvarsfördelning klargörs</li>
            <li>• Skyddsrutiner och utrymningsplan genomgås</li>
          </ul>
        </div>

        <div className="bg-slate-100 p-6 rounded-lg mb-6 mt-4">
          <h4 className="font-semibold text-stone-800 mb-3">Veckomöten (APT-möten)</h4>
          <p className="text-stone-700 mb-3">
            Regelbundna möten där BAS-U och alla entreprenörer diskuterar:
          </p>
          <ul className="space-y-2 text-stone-700">
            <li>• Kommande arbeten och företags schemaläggning</li>
            <li>• Aktuella arbetsmiljörisker och hur de ska hanteras</li>
            <li>• Resultat från senaste säkerhetsronden</li>
            <li>• Tillbud, olyckor eller avvikelser som inträffat</li>
            <li>• Uppföljning av tidigare beslut och åtgärder</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          5. Hantera arbetsmiljöavvikelser och tillbud
        </h3>

        <p className="mb-4">
          När BAS-U upptäcker arbetsmiljöproblem eller tillbud inträffar:
        </p>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
          <h4 className="font-semibold text-red-800 mb-3">BAS-U:s ansvar vid avvikelser:</h4>
          <ol className="list-decimal list-inside space-y-2 text-red-700">
            <li>Dokumentera avvikelsen omedelbart (foto, beskrivning, plats)</li>
            <li>Informera berörd entreprenör och uppdragsgivare (byggherren)</li>
            <li>Vid allvarlig fara - stoppa arbetet tills åtgärd vidtagits</li>
            <li>Följa upp att åtgärder genomförs korrekt</li>
            <li>Rapportera allvarliga tillbud till Arbetsmiljöverket vid behov</li>
          </ol>
        </div>

        <p className="mb-6">
          BAS-U har <strong>inte</strong> rätt att ge order till entreprenörernas personal, men måste informera arbetsledare och byggherren 
          om brister som måste åtgärdas.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <FileCheck className="w-6 h-6 text-amber-600" />
          Skillnad mellan BAS-P och BAS-U
        </h2>

        <p className="mb-4">
          BAS-U arbetar i <strong>utförandefasen</strong> medan <Link to="/guider/bas-p-guide" className="text-blue-600 hover:text-blue-700 underline">BAS-P</Link> arbetar 
          i <strong>projekteringsfasen</strong>. Här är huvudskillnaderna:
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                BAS-P (Projektering)
              </h4>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li>• Planerar arbetsmiljön</li>
                <li>• Granskar ritningar</li>
                <li>• Identifierar risker i förväg</li>
                <li>• Samordnar projektörer</li>
                <li>• Skapar underlag</li>
                <li>• Avslutas vid byggstart</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                <HardHat className="w-5 h-5" />
                BAS-U (Utförande)
              </h4>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li>• Implementerar arbetsmiljön</li>
                <li>• Är på plats regelbundet</li>
                <li>• Hanterar risker i verkliga tiden</li>
                <li>• Samordnar entreprenörer</li>
                <li>• Genomför säkerhetsronder</li>
                <li>• Verksam hela byggtiden</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mb-6">
          I många projekt är det samma person som är både BAS-P och BAS-U, vilket ger bra kontinuitet. 
          Läs mer om <Link to="/guider/vad-ar-bas" className="text-blue-600 hover:text-blue-700 underline">skillnaden mellan BAS-P och BAS-U</Link>.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <CheckCircle className="w-6 h-6 text-green-600" />
          Krav och kompetens för BAS-U
        </h2>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Formella krav för BAS-U
        </h3>

        <div className="bg-stone-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Byggfarenhet:</strong> Erfarenhet från byggbranschen och förståelse för hur byggen genomförs
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>BAS-U utbildning (40 timmar):</strong> Specialiserad kurs i arbetsmiljösamordning enligt AFS 1999:3
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Kunskap om arbetsmiljöregler:</strong> Arbetsmiljölagen, AFS-föreskrifter och branschregler
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Tid för uppdraget:</strong> BAS-U måste ha tillräckligt med tid för att vara på plats regelbundet
              </div>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Personliga egenskaper för framgångsrik BAS-U
        </h3>

        <ul className="space-y-2 mb-8 text-stone-700">
          <li>✓ <strong>Auktoritet och tydlighet:</strong> Förmåga att ställa krav och få gehör</li>
          <li>✓ <strong>Kommunikativ och pedagogisk:</strong> Förklara arbetsmiljökrav för olika yrkesgrupper</li>
          <li>✓ <strong>Observant:</strong> Upptäcka risker och osäkra moment</li>
          <li>✓ <strong>Samarbetsförmåga:</strong> Jobba med många olika entreprenörer och personaliteter</li>
          <li>✓ <strong>Dokumentationsvana:</strong> Noggrann med rapporter och uppföljning</li>
          <li>✓ <strong>Praktiskt lagd:</strong> Förstå hur arbete faktiskt utförs på plats</li>
        </ul>

        <h2 className="text-2xl font-bold text-stone-800 mb-6 mt-10">
          Vanliga frågor om BAS-U
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Hur ofta ska BAS-U vara på byggarbetsplatsen?
            </h3>
            <p className="text-stone-700">
              Det beror på projektets storlek och risk. För villabyggen brukar BAS-U vara på plats 1-2 gånger per vecka. 
              För större projekt med många entreprenörer kan BAS-U behöva vara där dagligen eller flera gånger per vecka.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kan byggledaren också vara BAS-U?
            </h3>
            <p className="text-stone-700">
              Ja, det är vanligt att byggledare eller platschef också är BAS-U, särskilt i mindre projekt. Viktigt är dock att BAS-U 
              kan agera oberoende och ha tid att utföra arbetsmiljösamordningen förutom byggledningen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad händer om BAS-U upptäcker allvarlig fara?
            </h3>
            <p className="text-stone-700">
              BAS-U ska omedelbart informera berörd entreprenör och byggherren. Vid <strong>omedelbar och allvarlig fara</strong> 
              ska arbetet stoppas tills åtgärd vidtagits. Byggherren har det yttersta ansvaret för att åtgärda brister.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad kostar det att anlita BAS-U?
            </h3>
            <p className="text-stone-700">
              Timpris för BAS-U ligger ofta mellan 1,000-1,400 kr/timme. För ett typiskt villabygge med 6-8 månaders byggtid 
              kan totalkostnaden ligga på 30,000-50,000 kr beroende på hur ofta BAS-U behöver vara på plats.
              Se mer information om <Link to="/guider/kontrollansvarig-timpris" className="text-blue-600 hover:text-blue-700 underline">priser för kontrollansvarig och BAS</Link>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kan BAS-U också vara kontrollansvarig?
            </h3>
            <p className="text-stone-700">
              Ja, det är vanligt att samma person har både uppdragen. Detta ger effektiv samordning mellan Plan- och bygglagen (PBL) 
              och Arbetsmiljölagen (AML). Läs mer om <Link to="/kontrollansvarig" className="text-blue-600 hover:text-blue-700 underline">kontrollansvarig</Link>.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Erfaren BAS-U i Västernorrland
          </h2>
          <p className="text-lg mb-6 text-orange-50">
            Jag erbjuder både <Link to="/guider/bas-p-guide" className="text-white underline font-semibold">BAS-P</Link> och BAS-U-tjänster, 
            samt kan kombinera med <Link to="/kontrollansvarig" className="text-white underline font-semibold">kontrollansvarig</Link> för 
            smidig samordning genom hela ditt byggprojekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
            >
              Kontakta mig för BAS-U
            </Link>
            <Link 
              to="/bas-samordning"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              Läs mer om BAS-tjänster
            </Link>
          </div>
        </div>

      </div>
    </GuideLayout>
  );
};

export default BasUGuideExtended;
