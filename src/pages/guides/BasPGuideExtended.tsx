import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { Users, CheckCircle, FileText, Building, AlertTriangle, Briefcase } from 'lucide-react';

const BasPGuideExtended = () => {
  return (
    <GuideLayout
      title="BAS-P Guide - Projektering och Arbetsmiljösamordning"
      description="Komplett guide om BAS-P (Byggarbetsmiljösamordnare Projektering). Ansvar, krav och arbetsuppgifter enligt arbetsmiljölagen."
      category="Säkerhetssamordning"
      readTime="9 min"
      seoTitle="BAS-P Guide 2025 - Arbetsmiljösamordnare Projektering | Västernorrland"
      seoDescription="Allt om BAS-P (Byggarbetsmiljösamordnare Projektering). Ansvar, arbetsmiljöplan, krav och skillnad mot BAS-U. Expert guide från erfaren BAS-samordnare."
      keywords="BAS-P, arbetsmiljösamordnare projektering, arbetsmiljöplan, BAS-P krav, byggarbetsmiljö, projekteringsfas"
      canonicalPath="/guider/bas-p-guide"
    >
      <div className="prose prose-stone max-w-none">
        
        <p className="text-lg text-stone-700 mb-6 font-medium">
          BAS-P (Byggarbetsmiljösamordnare Projektering) är en central roll i byggprojekt som säkerställer att arbetsmiljöfrågor hanteras 
          redan i projekteringsfasen. Denna guide förklarar BAS-P:s ansvar, skillnaden mot <Link to="/bas-u" className="text-blue-600 hover:text-blue-700 underline">BAS-U</Link> och hur rollen fungerar i praktiken.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start">
            <Users className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Vad är BAS-P?</h3>
              <p className="text-blue-700">
                BAS-P är obligatorisk när <strong>mer än ett företag</strong> arbetar på byggarbetsplatsen i projekteringsskedet. 
                Rollen säkerställer att arbetsmiljöaspekter integreras i projekteringen för säkrare utförande.
              </p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-8">
          <FileText className="w-6 h-6 text-blue-600" />
          När krävs BAS-P?
        </h2>

        <p className="mb-4">
          Enligt Arbetsmiljöverkets föreskrifter (AFS 1999:3) ska BAS-P utses när:
        </p>

        <div className="bg-gradient-to-r from-slate-50 to-stone-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Flera företag arbetar samtidigt eller efter varandra</strong> på samma byggarbetsplats
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                Projektet omfattar <strong>projektering</strong> (planering, design, konstruktionsberäkningar)
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                Det finns <strong>arbetsmiljörisker</strong> som måste planeras för innan byggstart
              </div>
            </li>
          </ul>
        </div>

        <p className="mb-6">
          I praktiken betyder detta att BAS-P behövs för <strong>nästan alla byggprojekt utom de allra minsta</strong> där endast en entreprenör 
          arbetar och ingen projektering sker. För större projekt kombineras ofta BAS-P med <Link to="/kontrollansvarig" className="text-blue-600 hover:text-blue-700 underline">kontrollansvarig</Link> för att säkerställa både kvalitet och arbetsmiljö.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Projekt som alltid kräver BAS-P
        </h3>

        <ul className="list-disc list-inside space-y-2 mb-8 text-stone-700">
          <li>Nybyggnad av bostadshus, flerbostadshus eller kommersiella byggnader</li>
          <li>Större tillbyggnader med flera underentreprenörer</li>
          <li>Ombyggnader som kräver både projektering och utförande av flera aktörer</li>
          <li>Industribyggnationer och infrastrukturprojekt</li>
          <li>Projekt där både arkitekt, konstruktör och installationskonsulter är involverade</li>
        </ul>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Briefcase className="w-6 h-6 text-orange-600" />
          BAS-P:s huvudsakliga arbetsuppgifter
        </h2>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-6">
          1. Upprätta arbetsmiljöplan
        </h3>

        <p className="mb-4">
          BAS-P:s viktigaste uppgift är att upprätta en <strong>arbetsmiljöplan</strong> som:
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">→</span>
              <span><strong>Identifierar risker:</strong> Kartlägger faror under projektets utförande (fall, tunga lyft, el, farliga ämnen)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">→</span>
              <span><strong>Föreslår åtgärder:</strong> Beskriver hur riskerna ska hanteras praktiskt</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">→</span>
              <span><strong>Samordnar olika aktörer:</strong> Planerar hur flera entreprenörer kan arbeta säkert samtidigt</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">→</span>
              <span><strong>Ger underlag till BAS-U:</strong> Dokumenterar information som behövs för <Link to="/bas-u" className="text-blue-600 hover:text-blue-700 underline">arbetsmiljösamordning under utförandet</Link></span>
            </li>
          </ul>
        </div>

        <p className="mb-6">
          Arbetsmiljöplanen är ett levande dokument som uppdateras när projektet utvecklas och nya risker identifieras.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          2. Samordna projekterande parter
        </h3>

        <p className="mb-4">
          BAS-P samordnar arbetsmiljöfrågor mellan alla som projekterar:
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <Building className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Arkitekter:</strong> Säkerställer att byggnadsutformningen möjliggör säkert arbete
            </div>
          </li>
          <li className="flex items-start">
            <Building className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Konstruktörer:</strong> Verifierar att konstruktionen kan utföras säkert
            </div>
          </li>
          <li className="flex items-start">
            <Building className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Installationskonsulter (VVS, El, Ventilation):</strong> Planerar installationsarbete med arbetsmiljöhänsyn
            </div>
          </li>
          <li className="flex items-start">
            <Building className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Geotekniker:</strong> Säkerställer säker grundläggning och schaktning
            </div>
          </li>
        </ul>

        <p className="mb-6">
          Genom tidig samordning kan farliga konstruktionslösningar undvikas redan i projekteringen, vilket sparar både tid och pengar.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          3. Granska ritningar och beskrivningar
        </h3>

        <p className="mb-4">
          BAS-P granskar alla projekthandlingar ur arbetsmiljöperspektiv:
        </p>

        <div className="bg-amber-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-stone-800 mb-3">Exempel på granskningspunkter:</h4>
          <ul className="space-y-2 text-stone-700">
            <li>• Finns tillräckligt med utrymme för säker montering?</li>
            <li>• Kan material hanteras utan risk för tunga lyft eller farliga lyft?</li>
            <li>• Finns säkra infästningspunkter för fallskydd?</li>
            <li>• Kan arbete utföras utan risk för exponering av farliga ämnen?</li>
            <li>• Är takhöjder och passager dimensionerade för säker transport?</li>
            <li>• Finns plats för säker ställnings- och liftsmontering?</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          4. Delta i projekteringsmöten
        </h3>

        <p className="mb-6">
          BAS-P ska aktivt delta i projekteringsmöten för att tidigt identifiera arbetsmiljöproblem och säkerställa att 
          arbetsmiljöaspekter integreras i alla beslut. Detta inkluderar samordningsmöten, konstruktionsgenomgångar och designgranskningar.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          5. Upprätta förteckning över risker
        </h3>

        <p className="mb-4">
          BAS-P upprättar en <strong>förteckning över särskilda risker vid byggnads- eller anläggningsarbete</strong> som omfattar:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-stone-700">
          <li>Arbete med risk för nedstörtning (tak, ställningar, hål i bjälklag)</li>
          <li>Arbete med risk för begravning (schaktning, brunnar)</li>
          <li>Arbete med farliga ämnen eller hälsofarligt damm (asbest, kvartsdamm)</li>
          <li>Arbete i närhet av högspänningsledningar</li>
          <li>Arbete i vattenmiljö eller risk för drunkning</li>
          <li>Arbete med explosiva ämnen eller sprängning</li>
        </ul>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          Skillnad mellan BAS-P och BAS-U
        </h2>

        <p className="mb-4">
          BAS-P och <Link to="/guider/bas-u-guide" className="text-blue-600 hover:text-blue-700 underline">BAS-U</Link> är två olika roller 
          med olika ansvar beroende på projektfas:
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                BAS-P (Projektering)
              </h4>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li>• Arbetar under <strong>projekteringsfasen</strong></li>
                <li>• Upprättar arbetsmiljöplan</li>
                <li>• Granskar ritningar och tekniska lösningar</li>
                <li>• Samordnar projekterande parter</li>
                <li>• Identifierar risker innan byggstart</li>
                <li>• Skapar underlag för BAS-U</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                BAS-U (Utförande)
              </h4>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li>• Arbetar under <strong>utförandefasen</strong></li>
                <li>• Uppdaterar arbetsmiljöplanen</li>
                <li>• Samordnar entreprenörer på plats</li>
                <li>• Genomför säkerhetsronder</li>
                <li>• Hanterar arbetsmiljöproblem som uppstår</li>
                <li>• Ser till att åtgärder genomförs</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mb-6">
          I många projekt är det <strong>samma person</strong> som är både BAS-P och BAS-U, vilket skapar kontinuitet och effektiv samordning 
          genom hela projektet. Läs mer om <Link to="/guider/vad-ar-bas" className="text-blue-600 hover:text-blue-700 underline">skillnaden mellan BAS-P och BAS-U</Link>.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <CheckCircle className="w-6 h-6 text-green-600" />
          Krav och kompetens för BAS-P
        </h2>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Formella krav
        </h3>

        <p className="mb-4">
          För att arbeta som BAS-P krävs:
        </p>

        <div className="bg-stone-100 p-6 rounded-lg mb-6">
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
              <div>
                <strong className="text-stone-800">Lämplig utbildning:</strong>
                <p className="text-stone-700 mt-1">
                  Byggteknisk eller annan relevant utbildning, oftast eftergymnasial nivå
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
              <div>
                <strong className="text-stone-800">Erfarenhet från projektering:</strong>
                <p className="text-stone-700 mt-1">
                  Praktisk erfarenhet från byggprojektering och förståelse för byggprocessen
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
              <div>
                <strong className="text-stone-800">BAS-P/BAS-U kurs (40 timmar):</strong>
                <p className="text-stone-700 mt-1">
                  Specialiserad utbildning i arbetsmiljösamordning enligt AFS 1999:3
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
              <div>
                <strong className="text-stone-800">Kunskap om arbetsmiljölagstiftning:</strong>
                <p className="text-stone-700 mt-1">
                  Förståelse för Arbetsmiljölagen, AFS-föreskrifter och Arbetsmiljöverkets krav
                </p>
              </div>
            </li>
          </ol>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Personliga egenskaper
        </h3>

        <p className="mb-4">
          En bra BAS-P har:
        </p>

        <ul className="space-y-2 mb-8 text-stone-700">
          <li>✓ Förmåga att samordna och kommunicera med många olika aktörer</li>
          <li>✓ Teknisk förståelse för byggprocesser och konstruktion</li>
          <li>✓ Proaktiv förmåga att identifiera risker innan de blir problem</li>
          <li>✓ Auktoritet att driva igenom arbetsmiljöförbättringar</li>
          <li>✓ Pedagogisk förmåga att förklara arbetsmiljökrav för projektörer</li>
        </ul>

        <h2 className="text-2xl font-bold text-stone-800 mb-6 mt-10">
          Vanliga frågor om BAS-P
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kan samma person vara BAS-P och kontrollansvarig?
            </h3>
            <p className="text-stone-700">
              Ja, det är vanligt att samma person har båda rollerna, särskilt i mindre projekt. Båda rollerna kräver teknisk kompetens 
              och förståelse för byggprocessen. Läs mer om <Link to="/kontrollansvarig" className="text-blue-600 hover:text-blue-700 underline">kontrollansvarig</Link>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad kostar det att anlita BAS-P?
            </h3>
            <p className="text-stone-700">
              Timpriset för BAS-P ligger ofta mellan 1,000-1,400 kr/timme. För ett vanligt villaprojekt kan totalkostnaden 
              vara 20,000-40,000 kr beroende på omfattning.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              När ska BAS-P utses i projektet?
            </h3>
            <p className="text-stone-700">
              BAS-P ska utses <strong>så tidigt som möjligt</strong> i projekteringen, helst redan i förstudiefasen. 
              Ju tidigare BAS-P kommer in, desto lättare är det att integrera arbetsmiljöaspekter i designen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad händer om vi inte utser BAS-P när det krävs?
            </h3>
            <p className="text-stone-700">
              Det är ett brott mot Arbetsmiljölagen vilket kan leda till arbetsmiljösanktionsavgift, förelägganden från Arbetsmiljöverket 
              och i värsta fall stoppande av byggarbetsplatsen. Byggherren är ansvarig för att utse BAS-P.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Anlita erfaren BAS-P och BAS-U i Västernorrland
          </h2>
          <p className="text-lg mb-6 text-blue-50">
            Jag erbjuder både BAS-P och <Link to="/guider/bas-u-guide" className="text-white underline font-semibold">BAS-U-tjänster</Link> samt 
            kan kombinera med <Link to="/kontrollansvarig" className="text-white underline font-semibold">kontrollansvarig</Link> för smidig 
            samordning genom hela projektet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Kontakta mig för BAS-P
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

export default BasPGuideExtended;
