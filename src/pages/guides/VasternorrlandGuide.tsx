import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { MapPin, Building, Users, Phone, Mail, CheckCircle, AlertTriangle } from 'lucide-react';

const VasternorrlandGuide = () => {
  return (
    <GuideLayout
      title="Kontrollansvarig i Västernorrland"
      description="Komplett guide för byggprojekt i Västernorrlands kommuner. Specifik information om bygglov, kontrollansvarig och lokala regler för Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå och Örnsköldsvik."
      category="Region"
      readTime="11 min"
      seoTitle="Kontrollansvarig Västernorrland - Guide till Bygglov & Regler 2025"
      seoDescription="Allt om kontrollansvarig och bygglov i Västernorrlands kommuner. Specifik information för Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå och Örnsköldsvik."
      keywords="kontrollansvarig västernorrland, kontrollansvarig sundsvall, kontrollansvarig härnösand, kontrollansvarig sollefteå, kontrollansvarig kramfors, kontrollansvarig timrå, kontrollansvarig örnsköldsvik, bygglov västernorrland"
      canonicalPath="/guider/vasternorrland"
    >
      <div className="prose prose-stone max-w-none">
        
        <p className="text-lg text-stone-700 mb-6 font-medium">
          Västernorrland är ett expansivt län med varierande bygglovskrav och lokala regleringar mellan kommunerna. 
          Denna guide ger dig specifik information om <Link to="/kontrollansvarig" className="text-blue-600 hover:text-blue-700 underline">kontrollansvarig</Link> och 
          byggprocessen i var och en av Västernorrlands sex kommuner.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Regionala skillnader i Västernorrland</h3>
              <p className="text-blue-700">
                Varje kommun i Västernorrland har sina egna byggnadsnämnder med olika rutiner, handläggningstider och tolkningar av PBL. 
                Som <strong>kontrollansvarig i Västernorrland</strong> har jag erfarenhet av att arbeta med alla kommuner i regionen och 
                känner till lokala särdrag som kan påverka ditt projekt.
              </p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Building className="w-6 h-6 text-blue-600" />
          Sundsvalls kommun
        </h2>

        <p className="mb-4 text-stone-700">
          Sundsvall är Västernorrlands största kommun med cirka 100,000 invånare. Byggnadsnämnden är väl organiserad och hanterar 
          ett stort antal bygglovs- och kontrollansvarigärenden varje år.
        </p>

        <div className="bg-slate-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-stone-800 mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            Särskilt för Sundsvall:
          </h3>
          <ul className="space-y-3 text-stone-700">
            <li>
              <strong>Stenstaden:</strong> Speciella krav gäller i det skyddade centrumområdet. Vid ombyggnader och tillbyggnader krävs 
              ofta förhandsbesked och anpassning till kulturhistoriskt värdefull bebyggelse. Kontrollansvarig med erfarenhet av Stenstaden 
              är en fördel för projekt här.
            </li>
            <li>
              <strong>Expansiva villaområden:</strong> Områden som Sidsjön, Norra Kajen och Skönsberg växer kraftigt. Här är kontroll 
              av grundläggning och fuktsäkerhet extra viktig på grund av närhet till vatten och lerjordar.
            </li>
            <li>
              <strong>Digitala tjänster:</strong> Sundsvall har välutvecklat e-tjänstesystem. Ansökningar om <Link to="/guider/kontrollansvarig-bygglov" className="text-blue-600 hover:text-blue-700 underline">bygglov</Link> och 
              kommunikation med KA sker smidigt digitalt.
            </li>
            <li>
              <strong>Handläggningstid:</strong> Normalt 4-6 veckor för bygglov. Vid komplexa ärenden eller sommartid kan det ta längre tid.
            </li>
          </ul>

          <div className="mt-4 pt-4 border-t border-slate-200">
            <h4 className="font-semibold text-stone-800 mb-2 flex items-center">
              <Phone className="w-4 h-4 text-blue-600 mr-2" />
              Kontakt Sundsvalls byggnadsnämnd:
            </h4>
            <p className="text-stone-700">
              <strong>Telefon:</strong> 060-19 10 00 (växel)<br />
              <strong>E-post:</strong> sundsvall.kommun@sundsvall.se<br />
              <strong>Hemsida:</strong> sundsvall.se/bygga-bo-och-miljo<br />
              <strong>Besöksadress:</strong> Norrmalmsgatan 4, Sundsvall
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <p className="text-amber-700">
                <strong>Viktigt för Sundsvall:</strong> Kommunen är noggrann med <Link to="/guider/tekniskt-samrad" className="text-amber-800 hover:text-amber-900 underline">tekniskt samråd</Link> vid 
                större projekt. Se till att KA är utsedd och kontrollplan godkänd innan du börjar bygga.
              </p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Building className="w-6 h-6 text-purple-600" />
          Härnösands kommun
        </h2>

        <p className="mb-4 text-stone-700">
          Härnösand är Västernorrlands residensstad med cirka 25,000 invånare. Staden är känd för sin vackra bebyggelse och 
          kulturhistoriskt värdefulla miljöer.
        </p>

        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-stone-800 mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
            Särskilt för Härnösand:
          </h3>
          <ul className="space-y-3 text-stone-700">
            <li>
              <strong>Kulturmiljöer:</strong> Delar av Härnösand är kulturhistoriskt skyddade. Domkyrkoområdet och äldre träbebyggelse 
              kräver särskild hänsyn. Många projekt kräver förhandsbesked och samråd med kulturmiljövårdare redan i planeringsstadiet.
            </li>
            <li>
              <strong>Småskalig byggnadsnämnd:</strong> Härnösand har en mindre byggnadsnämnd vilket innebär personlig service men ibland 
              längre handläggningstider än i Sundsvall. Räkna med 5-8 veckor för bygglov.
            </li>
            <li>
              <strong>Fjärrvärmeanslutning:</strong> Vid nybyggnation i centrala Härnösand krävs ofta anslutning till fjärrvärme. Detta påverkar 
              <Link to="/guider/kontrollplan" className="text-blue-600 hover:text-blue-700 underline"> kontrollplanen</Link> och certifieringskrav för installationer.
            </li>
            <li>
              <strong>Kustläge:</strong> Många byggnationer ligger nära havet. Korrosionsskydd, vindlaster och fuktsäkerhet är extra viktiga 
              kontrollpunkter för kontrollansvarig i Härnösand.
            </li>
          </ul>

          <div className="mt-4 pt-4 border-t border-purple-200">
            <h4 className="font-semibold text-stone-800 mb-2 flex items-center">
              <Phone className="w-4 h-4 text-purple-600 mr-2" />
              Kontakt Härnösands byggnadsnämnd:
            </h4>
            <p className="text-stone-700">
              <strong>Telefon:</strong> 0611-34 00 00 (växel)<br />
              <strong>E-post:</strong> harnosand.kommun@harnosand.se<br />
              <strong>Hemsida:</strong> harnosand.se/bygga-bo-miljo<br />
              <strong>Besöksadress:</strong> Residensgatan 11, Härnösand
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Building className="w-6 h-6 text-green-600" />
          Sollefteå kommun
        </h2>

        <p className="mb-4 text-stone-700">
          Sollefteå är en inland kommun med cirka 19,000 invånare. Kommunen präglas av skogslandskap och fritidsbebyggelse 
          längs Ångermanälven och i fjällnära områden.
        </p>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-stone-800 mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            Särskilt för Sollefteå:
          </h3>
          <ul className="space-y-3 text-stone-700">
            <li>
              <strong>Fritidshus och fjällnära byggande:</strong> En stor andel av byggprojekten i Sollefteå är fritidsfastigheter. 
              Regler för avlopp, dagvatten och värmeisolering (kallare klimat) är särskilt viktiga. KA med erfarenhet av fritidshus 
              är värdefullt.
            </li>
            <li>
              <strong>Trafikverkets vindkraftsregler:</strong> Delar av kommunen påverkas av vindkraftsutbyggnad. Kontrollera med 
              byggnadsnämnden om ditt projekt ligger inom influensområde för vindkraftverk - särskilda krav kan gälla.
            </li>
            <li>
              <strong>Snö- och vindlaster:</strong> Sollefteå har högre snölaster än kustkommunerna. Kontrollansvarig måste verifiera 
              att konstruktören har räknat med rätt lastzoner enligt Eurokod (snölast zon 3).
            </li>
            <li>
              <strong>Handläggningstid:</strong> 4-6 veckor för standardbygglov. Fritidshus går ofta snabbare om de är standardlösningar.
            </li>
          </ul>

          <div className="mt-4 pt-4 border-t border-green-200">
            <h4 className="font-semibold text-stone-800 mb-2 flex items-center">
              <Phone className="w-4 h-4 text-green-600 mr-2" />
              Kontakt Sollefteå byggnadsnämnd:
            </h4>
            <p className="text-stone-700">
              <strong>Telefon:</strong> 0620-681 00 (växel)<br />
              <strong>E-post:</strong> solleftea.kommun@solleftea.se<br />
              <strong>Hemsida:</strong> solleftea.se/bygga-bo<br />
              <strong>Besöksadress:</strong> Storgatan 11, Sollefteå
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Building className="w-6 h-6 text-red-600" />
          Kramfors kommun
        </h2>

        <p className="mb-4 text-stone-700">
          Kramfors har cirka 18,000 invånare och är centralort i Ångermanland. Kommunen inkluderar både Höga Kusten-området och inlandsbygder.
        </p>

        <div className="bg-red-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-stone-800 mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 text-red-600 mr-2" />
            Särskilt för Kramfors:
          </h3>
          <ul className="space-y-3 text-stone-700">
            <li>
              <strong>Höga Kusten:</strong> Delar av Kramfors ligger i världsarvet Höga Kusten. Byggande här omfattas av särskilda 
              restriktioner för att bevara landskapet. Byggnadsnämnden är restriktiv med nya byggnader - förhandsbesked är oftast 
              nödvändigt.
            </li>
            <li>
              <strong>Berggrund och slänter:</strong> Mycket av Kramfors har kuperad terräng och berggrund nära markytan. 
              <strong> Grundläggningskontroll</strong> är en kritisk kontrollpunkt där KA måste verifiera att bergförankring eller 
              sprängning har utförts korrekt.
            </li>
            <li>
              <strong>Kustnära utmaningar:</strong> Precis som Härnösand har kustläge betydelse för vindlast, fuktbelastning och 
              korrosion. Dokumentation av korrosionsskydd ingår i KA:s slutkontroll.
            </li>
            <li>
              <strong>Handläggningstid:</strong> 5-8 veckor för bygglov, längre vid projekt i Höga Kusten-området där samråd med 
              länsstyrelsen kan krävas.
            </li>
          </ul>

          <div className="mt-4 pt-4 border-t border-red-200">
            <h4 className="font-semibold text-stone-800 mb-2 flex items-center">
              <Phone className="w-4 h-4 text-red-600 mr-2" />
              Kontakt Kramfors byggnadsnämnd:
            </h4>
            <p className="text-stone-700">
              <strong>Telefon:</strong> 0612-800 00 (växel)<br />
              <strong>E-post:</strong> kramfors.kommun@kramfors.se<br />
              <strong>Hemsida:</strong> kramfors.se/bygga-och-bo<br />
              <strong>Besöksadress:</strong> Torggatan 3, Kramfors
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Building className="w-6 h-6 text-orange-600" />
          Timrå kommun
        </h2>

        <p className="mb-4 text-stone-700">
          Timrå är en expansiv pendlingskommun till Sundsvall med cirka 18,000 invånare. Kommunen präglas av industrihistoria och 
          kraftig nybyggnation av småhus.
        </p>

        <div className="bg-orange-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-stone-800 mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
            Särskilt för Timrå:
          </h3>
          <ul className="space-y-3 text-stone-700">
            <li>
              <strong>Nybyggnation och expansion:</strong> Timrå växer snabbt med många nya villaområden (Sörberge, Vivstad, Fagervik). 
              Byggnadsnämnden har god vana att hantera nybyggnation och standardiserade <Link to="/guider/bas-p-guide" className="text-blue-600 hover:text-blue-700 underline">BAS-P</Link> och 
              <Link to="/guider/bas-u-guide" className="text-blue-600 hover:text-blue-700 underline"> BAS-U</Link> processer.
            </li>
            <li>
              <strong>Markförhållanden:</strong> Många områden i Timrå har lös lera. <strong>Geoteknisk grundundersökning</strong> är 
              ofta obligatorisk och KA måste verifiera att grundläggningen utförts enligt geotekniskt PM.
            </li>
            <li>
              <strong>Kommunalt VA:</strong> I exploateringsområden är anslutning till kommunalt vatten och avlopp obligatoriskt. 
              Detta förenklar KA:s kontroller jämfört med enskilt avlopp.
            </li>
            <li>
              <strong>Snabb handläggning:</strong> Timrå är effektiva - många standardbygglov klar på 3-5 veckor. En fördel för byggherrar 
              som vill komma igång snabbt.
            </li>
          </ul>

          <div className="mt-4 pt-4 border-t border-orange-200">
            <h4 className="font-semibold text-stone-800 mb-2 flex items-center">
              <Phone className="w-4 h-4 text-orange-600 mr-2" />
              Kontakt Timrå byggnadsnämnd:
            </h4>
            <p className="text-stone-700">
              <strong>Telefon:</strong> 060-16 30 00 (växel)<br />
              <strong>E-post:</strong> timra.kommun@timra.se<br />
              <strong>Hemsida:</strong> timra.se/bygga-och-bo<br />
              <strong>Besöksadress:</strong> Storgatan 18, Timrå
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Building className="w-6 h-6 text-teal-600" />
          Örnsköldsviks kommun
        </h2>

        <p className="mb-4 text-stone-700">
          Örnsköldsvik är Västernorrlands näst största kommun med cirka 57,000 invånare. Kommunen sträcker sig från kusten till 
          fjällnära områden och har varierade byggförhållanden.
        </p>

        <div className="bg-teal-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-stone-800 mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 text-teal-600 mr-2" />
            Särskilt för Örnsköldsvik:
          </h3>
          <ul className="space-y-3 text-stone-700">
            <li>
              <strong>Stor geografisk spridning:</strong> Örnsköldsvik omfattar allt från kustnära centrumbebyggelse till fjällnära 
              fritidshusområden. Detta innebär stor variation i byggkrav - snölaster, grundläggning och tillgänglighet varierar kraftigt.
            </li>
            <li>
              <strong>Industribyggnation:</strong> Örnsköldsvik har stor industri (MODO Hockey Arena, industritomter). Vid industri- och 
              kommersiella projekt är<Link to="/guider/kontrollansvarig-certifiering" className="text-blue-600 hover:text-blue-700 underline"> certifierad kontrollansvarig</Link> ofta 
              obligatorisk med erfarenhet av brandskydd och tillgänglighet.
            </li>
            <li>
              <strong>Högskoleområdet:</strong> Runt Mittuniversitetet och Domsjö pågår expansion. Studentbostäder och flerfamiljshus 
              kräver mer omfattande <Link to="/guider/vad-ar-bas" className="text-blue-600 hover:text-blue-700 underline">BAS-samordning</Link> och brandsäkerhetskontroller.
            </li>
            <li>
              <strong>Digital hantering:</strong> Örnsköldsvik ligger långt fram med e-tjänster för bygglov och kontakt med KA. God digital 
              kommunikation underlättar byggprocessen.
            </li>
            <li>
              <strong>Handläggningstider:</strong> 4-6 veckor för villor, upp till 8-10 veckor för större projekt och industribyggnation.
            </li>
          </ul>

          <div className="mt-4 pt-4 border-t border-teal-200">
            <h4 className="font-semibold text-stone-800 mb-2 flex items-center">
              <Phone className="w-4 h-4 text-teal-600 mr-2" />
              Kontakt Örnsköldsviks byggnadsnämnd:
            </h4>
            <p className="text-stone-700">
              <strong>Telefon:</strong> 0660-880 00 (växel)<br />
              <strong>E-post:</strong> ornskoldsvik.kommun@ornskoldsvik.se<br />
              <strong>Hemsida:</strong> ornskoldsvik.se/bygga-bo-miljo<br />
              <strong>Besöksadress:</strong> Lasarettsvägen 4, Örnsköldsvik
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Users className="w-6 h-6 text-blue-600" />
          Varför använda lokal kontrollansvarig i Västernorrland?
        </h2>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-stone-800 mb-4">Fördelar med lokal erfarenhet:</h3>
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Känner lokala byggnadsnämnder:</strong> Jag har arbetat med alla sex kommuner i Västernorrland och känner 
                till respektive byggnadsnämnds rutiner och förväntningar.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Förståelse för regionala förhållanden:</strong> Snölaster, vindlaster, markförhållanden och klimat varierar 
                inom Västernorrland - jag vet vilka kontrollpunkter som är kritiska i varje kommun.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Snabb respons och platsbesök:</strong> Som lokal kontrollansvarig kan jag snabbt besöka byggplatsen för 
                kontroller när det passar projektet, inte bara när det passar mitt schema.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Nätverk med lokala entreprenörer:</strong> Jag samarbetar regelbundet med byggnadsföretag, hantverkare och 
                konsulter i regionen - detta underlättar kommunikation och problemlösning.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Viktigt för alla kommuner i Västernorrland</h3>
              <p className="text-amber-700 mb-3">
                Oavsett kommun gäller samma grundregel: <strong>Anlita kontrollansvarig tidigt</strong>. Innan du ansöker om bygglov är 
                rätt tid att kontakta KA för rådgivning. Detta sparar både tid och pengar genom hela byggprocessen.
              </p>
              <p className="text-amber-700">
                Läs mer om <Link to="/guider/kontrollansvarig-ansvar" className="text-amber-800 hover:text-amber-900 underline">kontrollansvarigs ansvar</Link> och 
                <Link to="/guider/kontrollansvarig-timpris" className="text-amber-800 hover:text-amber-900 underline"> vad det kostar</Link>.
              </p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6 mt-10">
          <Users className="w-6 h-6 text-blue-600" />
          Vanliga frågor om byggande i Västernorrland
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Kan samma kontrollansvarig arbeta i flera kommuner i Västernorrland?
            </h3>
            <p className="text-stone-700">
              Ja, absolut. En kontrollansvarig med lämplig <Link to="/guider/kontrollansvarig-certifiering" className="text-blue-600 hover:text-blue-700 underline">certifiering</Link> kan 
              arbeta i alla Sveriges kommuner. Fördelen med en lokal KA är erfarenhet av de specifika kommunernas rutiner och krav.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vilken kommun i Västernorrland har snabbast handläggningstider?
            </h3>
            <p className="text-stone-700">
              Generellt är Timrå och Sundsvall snabbast med 3-5 veckor för standardbygglov. Kramfors och Härnösand kan ta 5-8 veckor, 
              särskilt vid kulturmiljö- eller världsarvsfrågor. Sollefteå och Örnsköldsvik ligger däremellan på 4-6 veckor.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Vad kostar kontrollansvarig i Västernorrland?
            </h3>
            <p className="text-stone-700">
              Timpriserna är relativt likartade i alla kommuner, vanligen <strong>800-1,200 kr/timme</strong> beroende på projektets komplexitet. 
              För en normalvilla räkna med totalt 40,000-80,000 kr för KA. Läs mer i vår detaljerade guide om 
              <Link to="/guider/kontrollansvarig-timpris" className="text-blue-600 hover:text-blue-700 underline"> kontrollansvarigs priser</Link>.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              Behöver fritidshus i Västernorrland också kontrollansvarig?
            </h3>
            <p className="text-stone-700">
              Ja, om fritidshuset kräver bygglov behövs kontrollansvarig. Detta gäller nybyggnation, större tillbyggnader och många 
              ombyggnader. Attefallshus behöver däremot inte KA förutsatt att de uppfyller attefallsreglerna.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Erfaren kontrollansvarig i hela Västernorrland
          </h2>
          <p className="text-lg mb-6 text-blue-50">
            Med lång erfarenhet som <Link to="/kontrollansvarig" className="text-white underline font-semibold">kontrollansvarig</Link> i 
            Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå och Örnsköldsvik hjälper jag dig genom hela byggprocessen - från 
            första planering till <Link to="/guider/slutbesked" className="text-white underline font-semibold">slutbesked</Link>. 
            Jag känner de lokala byggnadsnämnderna väl och ser till att ditt projekt följer alla regler och krav. Kontakta mig 
            för professionell hjälp med ditt byggprojekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Kontakta mig idag
            </Link>
            <Link 
              to="/bas-samordning"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              Läs mer om BAS-samordning
            </Link>
          </div>
        </div>

      </div>
    </GuideLayout>
  );
};

export default VasternorrlandGuide;
