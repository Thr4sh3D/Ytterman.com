import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { DollarSign, FileText, Clock, Calculator, TrendingUp, HelpCircle } from 'lucide-react';

const KontrollansvarigTimprisGuide = () => {
  return (
    <GuideLayout
      title="Priser och Timpris för Kontrollansvarig"
      description="Detaljerad prisinformation för kontrollansvariga. Timpris, fasta priser och vad som påverkar kostnaden för KA-tjänster."
      category="Kontrollansvarig"
      readTime="7 min"
      seoTitle="Kontrollansvarig Pris & Timpris 2025 - Vad Kostar KA? | Västernorrland"
      seoDescription="Komplett guide om priser för kontrollansvarig. Timpris, totalpriser för olika projekt och vad som påverkar kostnaden. Transparenta priser från erfaren KA."
      keywords="kontrollansvarig timpris, kontrollansvarig pris, vad kostar kontrollansvarig, KA kostnad, pris KA Västernorrland, kontrollansvarig offert"
      canonicalPath="/guider/kontrollansvarig-timpris"
    >
      <div className="prose prose-stone max-w-none">
        
        <p className="text-lg text-stone-700 mb-6 font-medium">
          Att anlita <Link to="/kontrollansvarig" className="text-blue-600 hover:text-blue-700 font-medium underline">kontrollansvarig (KA)</Link> är obligatoriskt för de flesta 
          byggprojekt, men priserna kan variera kraftigt. Denna guide ger dig transparent information om timpris, totalpriser och vad som påverkar kostnaden.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-8">
          <DollarSign className="w-6 h-6 text-blue-600" />
          Timpris för kontrollansvarig 2025
        </h2>

        <p className="mb-4">
          Timpriset för kontrollansvariga i Sverige varierar beroende på geografisk plats, erfarenhet och projektets komplexitet.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-stone-800 mb-4">Typiska timprisnivåer 2025:</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center border-b border-indigo-200 pb-3">
              <div>
                <strong className="text-stone-800">Större städer (Stockholm, Göteborg, Malmö)</strong>
                <p className="text-sm text-stone-600">Högre efterfrågan och levnadskostnader</p>
              </div>
              <span className="font-bold text-lg text-blue-700">1,400-1,800 kr/h</span>
            </li>
            <li className="flex justify-between items-center border-b border-indigo-200 pb-3">
              <div>
                <strong className="text-stone-800">Mellannorrland (Västernorrland, Jämtland)</strong>
                <p className="text-sm text-stone-600">Mindre konkurrens, regionala prisnivåer</p>
              </div>
              <span className="font-bold text-lg text-blue-700">1,100-1,400 kr/h</span>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <strong className="text-stone-800">Mindre orter och landsbygd</strong>
                <p className="text-sm text-stone-600">Lägre kostnadsstruktur</p>
              </div>
              <span className="font-bold text-lg text-blue-700">950-1,200 kr/h</span>
            </li>
          </ul>
        </div>

        <p className="mb-6">
          På <strong>Ytterman</strong> i <Link to="/guider/vasternorrland" className="text-blue-600 hover:text-blue-700 underline">Västernorrland</Link> arbetar vi med timpris på <strong>1,200-1,350 kr/h</strong> beroende på projektets omfattning och komplexitet. 
          För större uppdrag eller paketlösningar erbjuder vi förmånligare totalpriser. <Link to="/kontakt" className="text-blue-600 hover:text-blue-700 underline">Kontakta oss</Link> för en kostnadsfri offert.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Calculator className="w-6 h-6 text-orange-600" />
          Totalkostnader för vanliga projekt
        </h2>

        <p className="mb-4">
          Många föredrar fast pris istället för timpris. Här är typiska totalkostnader för kontrollansvarig i olika projekttyper:
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-6">
          Nybyggnad villa/småhus
        </h3>

        <div className="bg-slate-100 p-6 rounded-lg mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-stone-800 mb-2">Enklare villa (120-150 m²)</h4>
              <p className="text-stone-700 mb-3">Standardritningar, enkel konstruktion, inga särskilda krav</p>
              <p className="text-2xl font-bold text-orange-600">35,000-45,000 kr</p>
              <p className="text-sm text-stone-600 mt-1">Inkluderar: <Link to="/guider/kontrollplan" className="text-blue-600 hover:text-blue-700 underline">kontrollplan</Link>, <Link to="/guider/tekniskt-samrad" className="text-blue-600 hover:text-blue-700 underline">tekniskt samråd</Link>, 4-6 platsbesök, slutbesiktning</p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800 mb-2">Större/komplex villa (200+ m²)</h4>
              <p className="text-stone-700 mb-3">Avancerad arkitektur, särskilda materialkrav, komplexa installationer</p>
              <p className="text-2xl font-bold text-orange-600">55,000-80,000 kr</p>
              <p className="text-sm text-stone-600 mt-1">Inkluderar: utökad kontrollplan, fler platsbesök, extra dokumentation</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Tillbyggnad
        </h3>

        <div className="bg-stone-50 p-6 rounded-lg mb-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <div>
                <strong>Mindre tillbyggnad (15-30 m²)</strong>
                <p className="text-sm text-stone-600">T.ex. inglasad altan, garage</p>
              </div>
              <span className="font-bold text-lg text-blue-700">15,000-25,000 kr</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <div>
                <strong>Medelstor tillbyggnad (30-60 m²)</strong>
                <p className="text-sm text-stone-600">T.ex. ny flygel med badrum och sovrum</p>
              </div>
              <span className="font-bold text-lg text-blue-700">25,000-40,000 kr</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <strong>Större tillbyggnad (60+ m²)</strong>
                <p className="text-sm text-stone-600">Omfattande projekt med flera rum</p>
              </div>
              <span className="font-bold text-lg text-blue-700">40,000-60,000 kr</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Ombyggnad och renovering
        </h3>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span><strong>Mindre ombyggnad (byte av bjälklag, väggar)</strong></span>
              <span className="font-bold text-blue-700 whitespace-nowrap ml-4">18,000-30,000 kr</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Omfattande renovering (flera våningar, nya installationer)</strong></span>
              <span className="font-bold text-blue-700 whitespace-nowrap ml-4">35,000-50,000 kr</span>
            </li>
            <li className="flex justify-between">
              <span><strong>Ändrad användning (omvandling garage→bostad)</strong></span>
              <span className="font-bold text-blue-700 whitespace-nowrap ml-4">25,000-45,000 kr</span>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Flerbostadshus och större projekt
        </h3>

        <p className="mb-4">
          För flerbostadshus, kommersiella byggnader och industribyggnader beräknas priset ofta utifrån:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-stone-700">
          <li><strong>Byggnad svärde:</strong> Ofta 0,3-0,6% av totala byggkostnaden</li>
          <li><strong>Fast månadskostnad:</strong> 15,000-40,000 kr/månad under byggtid</li>
          <li><strong>Timpris plus schablonarvode:</strong> Grundavgift + timpris för överskridande tid</li>
        </ul>

        <p className="mb-6">
          Ett flerbostadshus kan kosta <strong>150,000-500,000 kr</strong> beroende på omfattning, byggtid och projektets komplexitet. 
          För stora projekt kombineras ofta kontrollansvarig med <Link to="/bas-p" className="text-blue-600 hover:text-blue-700 underline">BAS-P</Link> och <Link to="/bas-u" className="text-blue-600 hover:text-blue-700 underline">BAS-U</Link> i paketlösningar.
        </p>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <TrendingUp className="w-6 h-6 text-amber-600" />
          Vad påverkar priset för kontrollansvarig?
        </h2>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Faktorer som ökar kostnaden
        </h3>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg mb-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
              <div>
                <strong className="text-stone-800">Komplex konstruktion:</strong>
                <p className="text-stone-700 mt-1">
                  Speciallösningar, stora spännvidder, känsliga material eller avancerade installationer kräver mer noggrann kontroll
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
              <div>
                <strong className="text-stone-800">Geografiskt avstånd:</strong>
                <p className="text-stone-700 mt-1">
                  Om projektet ligger långt från KA:s kontor tillkommer resetid och milersättning (typiskt 50-70 kr/mil)
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
              <div>
                <strong className="text-stone-800">Lång byggtid:</strong>
                <p className="text-stone-700 mt-1">
                  Projekt som drar ut på tiden kräver fler uppföljningsbesök och kontroller än planerat
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
              <div>
                <strong className="text-stone-800">Många avvikelser:</strong>
                <p className="text-stone-700 mt-1">
                  Om fel upptäcks och måste följas upp innebär det extra arbete för kontrollansvarig
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
              <div>
                <strong className="text-stone-800">Särskilda krav från myndigheter:</strong>
                <p className="text-stone-700 mt-1">
                  Om byggnadsnämnden kräver extra kontroller eller dokumentation utöver standard
                </p>
              </div>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Faktorer som sänker kostnaden
        </h3>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold text-xl">✓</span>
            <div>
              <strong>Väl förberedda handlingar:</strong> Kompletta och korrekta ritningar minskar tiden för granskning
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold text-xl">✓</span>
            <div>
              <strong>Erfaren entreprenör:</strong> Duktiga byggare gör färre fel, vilket ger färre kontrollärenden
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold text-xl">✓</span>
            <div>
              <strong>Standardlösningar:</strong> Typritningar och beprövade metoder kräver mindre kontrollinsats
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold text-xl">✓</span>
            <div>
              <strong>Nära geografisk plats:</strong> Mindre resetid och resekostnader
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold text-xl">✓</span>
            <div>
              <strong>Bra tidplanering:</strong> Effektiv byggprocess där kontroller kan utföras enligt plan
            </div>
          </li>
        </ul>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Clock className="w-6 h-6 text-green-600" />
          Vad ingår i priset för kontrollansvarig?
        </h2>

        <p className="mb-4">
          När du får en offert för kontrollansvarig bör följande ingå i totalpriser:
        </p>

        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-stone-800 mb-4">Standard omfattning:</h3>
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start">
              <FileText className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>Granskning av handlingar och ritningar innan startbesked</span>
            </li>
            <li className="flex items-start">
              <FileText className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>Upprättande av <Link to="/guider/kontrollplan" className="text-blue-600 hover:text-blue-700 underline">kontrollplan</Link> enligt PBL</span>
            </li>
            <li className="flex items-start">
              <FileText className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>Kallelse och genomförande av <Link to="/guider/tekniskt-samrad" className="text-blue-600 hover:text-blue-700 underline">tekniskt samråd</Link></span>
            </li>
            <li className="flex items-start">
              <FileText className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>Platsbesök och kontroller enligt kontrollplanen (antal specificeras)</span>
            </li>
            <li className="flex items-start">
              <FileText className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>Löpande dokumentation och rapportering</span>
            </li>
            <li className="flex items-start">
              <FileText className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>Slutbesiktning och upprättande av kontrollansvarigs intyg</span>
            </li>
            <li className="flex items-start">
              <FileText className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span>Sammanställning av handlingar för <Link to="/guider/slutbesked" className="text-blue-600 hover:text-blue-700 underline">ansökan om slutbesked</Link></span>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">
          Vad ingår vanligen INTE
        </h3>

        <ul className="list-disc list-inside space-y-2 mb-8 text-stone-700">
          <li>Milersättning för långa resor (debiteras separat)</li>
          <li>Extra platsbesök utöver kontrollplanen (timpris tillkommer)</li>
          <li>Uppföljning av omfattande avvikelser (kan ge tilläggsarbete)</li>
          <li>Konstruktörskontroll eller energiberäkningar (separat konsult)</li>
          <li>Projektering eller ritningar (det är inte KA:s roll)</li>
        </ul>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <HelpCircle className="w-6 h-6 text-blue-600" />
          Vanliga frågor om pris för kontrollansvarig
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Är kontrollansvarigs tjänster momspliktiga?
            </h3>
            <p className="text-stone-700">
              Ja, KA-tjänster är momspliktig konsultverksamhet med 25% moms. Alla priser i denna guide avser exklusive moms om inte annat anges.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kan jag få ROT-avdrag på kontrollansvarigs tjänster?
            </h3>
            <p className="text-stone-700">
              Nej, kontrollansvarig är en administrativ tjänst och omfattas inte av ROT-avdraget. Endast arbete som direkt utförs på fastigheten 
              (bygg, VVS, el) berättigar till ROT.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              När ska jag betala för kontrollansvarigs tjänster?
            </h3>
            <p className="text-stone-700">
              Det varierar mellan KA. Vanliga modeller är: en första delbetalning vid tecknande (30-50%), löpande fakturering varje månad, 
              eller slutfaktura efter godkänt slutbesked. Detta avtalas i uppdraget.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Varför skiljer sig priserna så mycket mellan olika kontrollansvariga?
            </h3>
            <p className="text-stone-700">
              Erfarenhet, geografisk plats, omfattning av tjänsten och konkurrens påverkar priset. En billigare KA kan vara nyexaminerad 
              och sakna erfarenhet, medan en dyrare är mer erfaren och hanterar komplexa projekt. Läs om <Link to="/guider/kontrollansvarig-certifiering" className="text-blue-600 hover:text-blue-700 underline">certifieringskrav</Link> för 
              mer information.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Hur får jag bäst värde för pengarna?
            </h3>
            <p className="text-stone-700">
              Välj en erfaren och lokalkunnig kontrollansvarig som känner din kommun och byggnadsnämnd. Ha välförberedda handlingar, 
              använd en kompetent entreprenör och undvik onödiga ändringar under byggtid. Läs mer om <Link to="/guider/kontrollansvarig-ansvar" className="text-blue-600 hover:text-blue-700 underline">KA:s ansvar</Link>.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Få offert på kontrollansvarig i Västernorrland
          </h2>
          <p className="text-lg mb-6 text-orange-50">
            Transparenta priser, inga dolda kostnader. Jag erbjuder både fast pris och timpris beroende på ditt projekts behov. 
            Kostnadsfri konsultation där vi går igenom ditt projekt och ger en tydlig offert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
            >
              Begär offert kostnadsfritt
            </Link>
            <Link 
              to="/kontrollansvarig"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              Läs mer om tjänsten
            </Link>
          </div>
        </div>

      </div>
    </GuideLayout>
  );
};

export default KontrollansvarigTimprisGuide;
