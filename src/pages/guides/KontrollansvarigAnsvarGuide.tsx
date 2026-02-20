import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { Shield, Scale, AlertTriangle, FileText, CheckCircle, Briefcase } from 'lucide-react';

const KontrollansvarigAnsvarGuide = () => {
  return (
    <GuideLayout
      title="Kontrollansvarigs Ansvar och Skyldigheter"
      description="Detaljerad guide om kontrollansvarigs juridiska ansvar, skyldigheter enligt PBL och vad som händer vid fel."
      category="Kontrollansvarig"
      readTime="10 min"
      seoTitle="Kontrollansvarig Ansvar - Skyldigheter & Juridik 2025 | PBL"
      seoDescription="Fullständig genomgång av kontrollansvarigs ansvar enligt Plan- och bygglagen. Juridiskt ansvar, skyldigheter, försäkring och konsekvenser vid fel."
      keywords="kontrollansvarig ansvar, juridiskt ansvar KA, PBL ansvar, kontrollansvarig skyldigheter, ansvarsfrågor bygglov, kontrollansvarig fel"
      canonicalPath="/guider/kontrollansvarig-ansvar"
    >
      <div className="prose prose-stone max-w-none">
        
        <p className="text-lg text-stone-700 mb-6 font-medium">
          Som <Link to="/kontrollansvarig" className="text-blue-600 hover:text-blue-700 font-medium underline">kontrollansvarig (KA)</Link> har du ett omfattande ansvar 
          för att säkerställa att byggprojekt genomförs enligt gällande regler. Denna guide förklarar ditt juridiska ansvar, skyldigheter och vad som händer vid fel.
        </p>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Viktigt om ansvar</h3>
              <p className="text-red-700">
                Kontrollansvarigs ansvar är <strong>personligt</strong> och kan inte delegeras. Du är ansvarig även om andra aktörer 
                (byggherren, entreprenören) gör fel. Detta gör rollen både krävande och viktig.
              </p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-8">
          <Scale className="w-6 h-6 text-blue-600" />
          Juridiskt ansvar enligt Plan- och bygglagen
        </h2>

        <p className="mb-4">
          Kontrollansvarigs ansvar regleras främst i <strong>Plan- och bygglagen (PBL)</strong> kapitel 10. 
          Här definieras de grundläggande skyldigheterna och ansvarsområdena.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-6">
          Huvudsakliga ansvarsområden
        </h3>

        <div className="bg-gradient-to-r from-slate-50 to-stone-50 p-6 rounded-lg mb-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</span>
              <div>
                <strong className="text-stone-800">Kontrollera att bygget följer bygglov och byggregler</strong>
                <p className="text-stone-700 mt-1">
                  Du ansvarar för att kontinuerligt kontrollera att byggandet sker enligt de godkända ritningarna och att 
                  alla krav i Boverkets byggregler (BBR) följs. Detta inkluderar konstruktion, brand, fukt, energi och tillgänglighet.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</span>
              <div>
                <strong className="text-stone-800">Upprätta och följa kontrollplan</strong>
                <p className="text-stone-700 mt-1">
                  Du ska ta fram en <Link to="/guider/kontrollplan" className="text-blue-600 hover:text-blue-700 underline">kontrollplan</Link> som 
                  anger vilka kontroller som ska göras, när de ska utföras och av vem. Du ansvarar för att planen följs.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</span>
              <div>
                <strong className="text-stone-800">Leda tekniskt samråd</strong>
                <p className="text-stone-700 mt-1">
                  Du är ansvarig för att kalla till och leda <Link to="/guider/tekniskt-samrad" className="text-blue-600 hover:text-blue-700 underline">tekniskt samråd</Link> där 
                  byggnadsnämnden och alla relevanta parter går igenom projektet innan byggstart.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">4</span>
              <div>
                <strong className="text-stone-800">Dokumentera och rapportera</strong>
                <p className="text-stone-700 mt-1">
                  All kontroll ska dokumenteras noggrant. Vid avvikelser har du ansvar att omedelbart rapportera till byggherren 
                  och vid allvarliga fel även till byggnadsnämnden.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">5</span>
              <div>
                <strong className="text-stone-800">Utfärda intyg för slutbesked</strong>
                <p className="text-stone-700 mt-1">
                  Du ansvarar för att genomföra slutbesiktning och utfärda kontrollansvarigs intyg som krävs för att 
                  få <Link to="/guider/slutbesked" className="text-blue-600 hover:text-blue-700 underline">slutbesked</Link> från byggnadsnämnden.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Oberoende och jävsfrihet
        </h3>

        <p className="mb-4">
          En central del av kontrollansvarigs ansvar är att vara <strong>oberoende</strong>. Enligt PBL 10 kap. 9 § får du inte:
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              Vara anställd hos byggherren eller entreprenören som utför arbetet
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              Ha ekonomiskt intresse i projektet som kan påverka din opartiskhet
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              Utföra både projektering och kontrollansvarigs uppgifter i samma projekt
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              Ha nära släktskap eller annan relation som kan ifrågasätta din oberoende
            </div>
          </li>
        </ul>

        <p className="mb-6">
          Brott mot oberoendekravet kan leda till att startbesked och slutbesked inte beviljas, samt att du kan förlora din <Link to="/guider/kontrollansvarig-certifiering" className="text-blue-600 hover:text-blue-700 underline">certifiering</Link>.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Shield className="w-6 h-6 text-orange-600" />
          Civilrättsligt och straffrättsligt ansvar
        </h2>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Skadeståndsansvar (civilrätt)
        </h3>

        <p className="mb-4">
          Som kontrollansvarig kan du bli skadeståndsansvarig om ditt fel eller din försummelse orsakar skada. Detta beror på:
        </p>

        <div className="bg-amber-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3 text-stone-700">
            <li>
              <strong>Vårdslöshet:</strong> Om du inte utför dina kontroller med den omsorg som kan förväntas av en professionell KA
            </li>
            <li>
              <strong>Felaktig bedömning:</strong> Om du godkänner arbete som inte uppfyller kraven och detta leder till skada
            </li>
            <li>
              <strong>Bristande kontroll:</strong> Om du missar viktiga kontrollpunkter som leder till byggfel
            </li>
            <li>
              <strong>Felaktig dokumentation:</strong> Om du intygar något som inte stämmer vilket leder till ekonomisk skada
            </li>
          </ul>
        </div>

        <p className="mb-6">
          Skadestånd kan omfatta direkta kostnader för att åtgärda fel, följdskador (t.ex. vattenskada från otät konstruktion) 
          och i värsta fall även ideell skada.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Straffrättsligt ansvar
        </h3>

        <p className="mb-4">
          I allvarliga fall kan kontrollansvarig bli föremål för straffrättslig påföljd:
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
          <h4 className="font-semibold text-red-800 mb-3">Exempel på straffbara handlingar:</h4>
          <ul className="space-y-2 text-red-700">
            <li>• <strong>Osann försäkran:</strong> Att medvetet intyga något som inte stämmer</li>
            <li>• <strong>Tjänstefel:</strong> Grov vårdslöshet i tjänsteutövningen</li>
            <li>• <strong>Arbetsmiljöbrott:</strong> Om bristande kontroll leder till olycka med skada på person</li>
            <li>• <strong>Urkundsförfalskning:</strong> Att manipulera kontrolldokumentation</li>
          </ul>
        </div>

        <p className="mb-6">
          Straffskalorna varierar från böter till fängelse i upp till två år beroende på allvarlighetsgrad och uppsåt.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Briefcase className="w-6 h-6 text-purple-600" />
          Försäkring och ansvarsskydd
        </h2>

        <p className="mb-4">
          På grund av det omfattande ansvaret är det <strong>absolut nödvändigt</strong> att ha korrekt försäkring som kontrollansvarig.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-6">
          Ansvarsförsäkring för kontrollansvariga
        </h3>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-stone-800 mb-3">Rekommenderad försäkring:</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-stone-800">Konsultansvarsförsäkring:</strong>
                <p className="text-stone-700 mt-1">
                  Täcker skadeståndskrav som uppstår från ditt arbete som KA. Rekommenderat försäkringsbelopp: minst 5-10 miljoner kr
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-stone-800">Rättsskyddsförsäkring:</strong>
                <p className="text-stone-700 mt-1">
                  Täcker juridiska kostnader om du blir involverad i tvist eller rättsprocess relaterad till din KA-verksamhet
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-stone-800">Retroaktivt skydd:</strong>
                <p className="text-stone-700 mt-1">
                  Eftersom skador kan upptäckas år efter projektet avslutats bör försäkringen ha retroaktivt skydd
                </p>
              </div>
            </li>
          </ul>
        </div>

        <p className="mb-6">
          Kostnaden för ansvarsförsäkring varierar men ligger typiskt på 15,000-40,000 kr/år beroende på omfattning, 
          försäkringsbelopp och din erfarenhet.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <FileText className="w-6 h-6 text-green-600" />
          Vad händer vid fel och avvikelser?
        </h2>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Upptäckt av avvikelse under byggtid
        </h3>

        <p className="mb-4">
          När du som kontrollansvarig upptäcker att något inte överensstämmer med bygglov eller byggregler:
        </p>

        <ol className="list-decimal list-inside space-y-3 mb-6 text-stone-700 pl-4">
          <li>
            <strong>Dokumentera avvikelsen omedelbart</strong> - Ta foton, mät, beskriv exakt vad som är fel
          </li>
          <li>
            <strong>Informera byggherren skriftligen</strong> - Entreprenören ska stoppas från att fortsätta innan felet åtgärdas
          </li>
          <li>
            <strong>Bedöm allvarlighetsgraden</strong> - Kan felet åtgärdas eller behövs ändrat bygglov?
          </li>
          <li>
            <strong>Rapportera till byggnadsnämnden vid allvarliga fel</strong> - Vissa avvikelser måste rapporteras omedelbart
          </li>
          <li>
            <strong>Följ upp åtgärd</strong> - Kontrollera att felet korrigeras korrekt innan bygget fortsätter
          </li>
        </ol>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Din skyldighet</h3>
              <p className="text-blue-700">
                Om du inte agerar på en avvikelse kan <strong>du</strong> bli ansvarig för följdskadorna, även om det var entreprenören 
                som utförde det felaktiga arbetet. Ditt ansvar är att stoppa och korrigera. Behöver du stöd med ditt uppdrag som KA? <Link to="/kontakt" className="text-blue-600 hover:text-blue-700 underline">Kontakta oss</Link> för rådgivning.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          När fel upptäcks efter slutbesked
        </h3>

        <p className="mb-4">
          Om byggfel upptäcks efter att du utfärdat kontrollansvarigs intyg och slutbesked beviljats:
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="text-red-600 mr-3 font-bold">→</span>
            <div>
              <strong>Ansvarsutredning:</strong> Byggnadsnämnden kan utreda om du har granskat korrekt
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-3 font-bold">→</span>
            <div>
              <strong>Skadeståndsansvar:</strong> Du kan bli skadeståndsskyldig om felet beror på bristande kontroll
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-3 font-bold">→</span>
            <div>
              <strong>Certifieringsåterkallelse:</strong> Allvarliga fel kan leda till att din certifiering dras in
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-3 font-bold">→</span>
            <div>
              <strong>Offentlig kritik:</strong> Byggnadsnämndens beslut är offentliga handlingar vilket kan skada ditt rykte
            </div>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-stone-800 mb-6 mt-10">
          Hur minimera risker som kontrollansvarig
        </h2>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-stone-800 mb-4">Bästa praxis för riskhantering:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Noggrann kontrollplan:</strong> En välgjord kontrollplan är ditt viktigaste verktyg
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Dokumentera allt skriftligt:</strong> All kommunikation, alla kontroller, alla avvikelser
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Var på plats vid kritiska skeden:</strong> Vissa kontroller kan inte göras i efterhand
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Säg nej till projekt utanför din kompetens:</strong> Tacka nej om projektet är för komplext
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Fortsatt utbildning:</strong> Håll dig uppdaterad om regelverksändringar och ny teknik
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Korrekt försäkring:</strong> Ha alltid giltig ansvarsförsäkring med tillräcklig täckning
              </div>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-stone-800 mb-6 mt-10">
          Vanliga frågor om kontrollansvarigs ansvar
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kan byggherren bli ansvarig istället för mig som KA?
            </h3>
            <p className="text-stone-700">
              Byggherren har huvudansvar som beställare, men ditt ansvar som kontrollansvarig är personligt och kan inte överföras. 
              Både du och byggherren kan bli ansvariga för samma fel.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad händer om entreprenören vägrar åtgärda ett fel jag påtalat?
            </h3>
            <p className="text-stone-700">
              Du ska dokumentera att du påtalat felet skriftligt. Om entreprenören vägrar måste du informera byggherren och 
              i allvarliga fall byggnadsnämnden. Du får <strong>inte</strong> godkänna arbetet i din kontroll.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Hur länge kan jag bli ansvarig efter ett projekt?
            </h3>
            <p className="text-stone-700">
              Skadeståndsanspråk kan i värsta fall riktas mot dig upp till <strong>10 år</strong> efter att slutbesked beviljats. 
              Detta beror på preskriptionsregler. Därför är retroaktiv försäkring viktig. Läs mer om <Link to="/guider/kontrollansvarig-timpris" className="text-blue-600 hover:text-blue-700 underline">timpris och kostnad för kontrollansvarig</Link>.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Erfaren kontrollansvarig som tar ansvar
          </h2>
          <p className="text-lg mb-6 text-blue-50">
            Med över 20 års erfarenhet och fullständig ansvarsförsäkring säkerställer jag att ditt projekt genomförs korrekt från start till <Link to="/guider/slutbesked" className="text-white underline font-semibold">slutbesked</Link>. 
            Läs mer om hur jag hanterar <Link to="/guider/kontrollansvarig-bygglov" className="text-white underline font-semibold">bygglovsprocessen</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Kontakta mig för uppdrag
            </Link>
            <Link 
              to="/kontrollansvarig"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              Om Tobias Ytterman
            </Link>
          </div>
        </div>

      </div>
    </GuideLayout>
  );
};

export default KontrollansvarigAnsvarGuide;
