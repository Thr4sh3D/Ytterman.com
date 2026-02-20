import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { CheckCircle, Leaf, Recycle, Zap, Award, TreePine } from 'lucide-react';

const MiljoGuide = () => {
  return (
    <GuideLayout
      title="Miljötänk i byggprocessen"
      description="Hur du integrerar hållbarhet och miljöhänsyn i ditt byggprojekt från start till mål."
      category="Miljö & Hållbarhet"
      readTime="9 min"
      seoTitle="Miljötänk Byggprocess - Hållbart Byggande & Certifiering | Ytterman"
      seoDescription="Guide till hållbart byggande och miljötänk. BREEAM, LEED, energieffektivisering och miljöcertifiering. Expert råd från Tobias Ytterman."
      keywords="hållbart byggande, miljötänk, BREEAM, LEED, energieffektivisering, miljöcertifiering, grön byggnad"
      canonicalPath="/guider/miljo"
    >
      <div className="prose prose-stone max-w-none">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Award className="w-6 h-6 text-emerald-600" />
          Miljöcertifieringar (BREEAM, LEED)
        </h2>
        
        <p className="text-lg text-stone-700 mb-6">
          Miljöcertifieringar som BREEAM och LEED har blivit allt viktigare för att dokumentera 
          och säkerställa hållbara byggprojekt. Dessa system ger tydliga riktlinjer och mätbara 
          mål för miljöprestanda.
        </p>

        <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 mb-8">
          <div className="flex items-start">
            <Leaf className="w-5 h-5 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-emerald-800 mb-2">Framtidens standard</h3>
              <p className="text-emerald-700">
                Miljöcertifierade byggnader har högre värde, lägre driftskostnader och bidrar 
                till en hållbar framtid. Investeringen lönar sig både ekonomiskt och miljömässigt.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              BREEAM (Building Research Establishment Environmental Assessment Method)
            </h3>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>• <strong>Ursprung:</strong> Utvecklat i Storbritannien</li>
              <li>• <strong>Fokus:</strong> Hållbarhet under hela livscykeln</li>
              <li>• <strong>Kategorier:</strong> Energi, hälsa, transport, vatten, material</li>
              <li>• <strong>Betyg:</strong> Pass, Good, Very Good, Excellent, Outstanding</li>
              <li>• <strong>Styrka:</strong> Stark i Europa och Skandinavien</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              LEED (Leadership in Energy and Environmental Design)
            </h3>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• <strong>Ursprung:</strong> Utvecklat i USA</li>
              <li>• <strong>Fokus:</strong> Energieffektivitet och miljöprestanda</li>
              <li>• <strong>Kategorier:</strong> Hållbar mark, vatten, energi, material, inomhusmiljö</li>
              <li>• <strong>Betyg:</strong> Certified, Silver, Gold, Platinum</li>
              <li>• <strong>Styrka:</strong> Globalt erkänt, särskilt i Nordamerika</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-amber-800 mb-4">Certifieringsprocessen</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">1</div>
              <div>
                <h4 className="font-medium text-amber-800">Registrering och målsättning</h4>
                <p className="text-amber-700 text-sm">Bestäm certifieringsnivå och registrera projektet</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">2</div>
              <div>
                <h4 className="font-medium text-amber-800">Design och planering</h4>
                <p className="text-amber-700 text-sm">Integrera hållbarhetskrav i projekteringen</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">3</div>
              <div>
                <h4 className="font-medium text-amber-800">Byggfas och dokumentation</h4>
                <p className="text-amber-700 text-sm">Säkerställ att alla krav följs under byggtiden</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">4</div>
              <div>
                <h4 className="font-medium text-amber-800">Bedömning och certifiering</h4>
                <p className="text-amber-700 text-sm">Oberoende granskning och utfärdande av certifikat</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Recycle className="w-6 h-6 text-blue-600" />
          Materialval och återvinning
        </h2>

        <p className="mb-6">
          Val av byggmaterial har stor påverkan på miljön. Genom att välja rätt material och 
          planera för återvinning kan vi dramatiskt minska byggprojektets miljöavtryck.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">Hållbara materialval:</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Förnyelsebara material</h4>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>• <strong>Trä:</strong> Från certifierade skogar (FSC/PEFC)</li>
              <li>• <strong>Bambu:</strong> Snabbväxande och starkt</li>
              <li>• <strong>Kork:</strong> Förnyelsebar isolering</li>
              <li>• <strong>Linoleum:</strong> Naturligt golvmaterial</li>
              <li>• <strong>Hampa:</strong> Isolering och byggmaterial</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Återvunna material</h4>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• <strong>Återvunnen betong:</strong> Som ballast och fyllning</li>
              <li>• <strong>Återvunnet stål:</strong> Armering och konstruktion</li>
              <li>• <strong>Återvunnet glas:</strong> Isolering och dekoration</li>
              <li>• <strong>Återvunnet plast:</strong> Rör och isolering</li>
              <li>• <strong>Återvunnet trä:</strong> Inredning och konstruktion</li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-stone-800 mb-4">Livscykelanalys (LCA) av material</h3>
          <p className="text-stone-700 mb-4">
            En livscykelanalys bedömer materialets totala miljöpåverkan från utvinning till avfall:
          </p>
          <ul className="space-y-2 text-stone-700">
            <li>• <strong>Utvinning:</strong> Energi och resurser för att utvinna råmaterial</li>
            <li>• <strong>Produktion:</strong> Tillverkning och bearbetning</li>
            <li>• <strong>Transport:</strong> Miljöpåverkan från transporter</li>
            <li>• <strong>Användning:</strong> Underhåll och energiförbrukning under livslängden</li>
            <li>• <strong>Avfallshantering:</strong> Återvinning eller slutförvaring</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Zap className="w-6 h-6 text-yellow-600" />
          Energieffektivisering
        </h2>

        <p className="mb-6">
          Energieffektivisering är ofta den mest kostnadseffektiva miljöåtgärden. Genom smart 
          design och teknikval kan energiförbrukningen minskas drastiskt. Läs mer i vår <Link to="/guider/energi" className="text-emerald-600 hover:text-emerald-700 font-medium underline">energideklaration guide</Link>.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-center">
            <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <h3 className="font-semibold text-yellow-800 mb-2">Passivhus</h3>
            <p className="text-2xl font-bold text-yellow-600 mb-2">90%</p>
            <p className="text-sm text-yellow-700">mindre energiförbrukning än konventionella hus</p>
          </div>
          
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-center">
            <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-green-800 mb-2">Nära-nollenergi</h3>
            <p className="text-2xl font-bold text-green-600 mb-2">75%</p>
            <p className="text-sm text-green-700">mindre energi än byggnormen kräver</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
            <Leaf className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-blue-800 mb-2">Plusenergi</h3>
            <p className="text-2xl font-bold text-blue-600 mb-2">+20%</p>
            <p className="text-sm text-blue-700">mer energi än byggnaden förbrukar</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">Nyckelfaktorer för energieffektivitet:</h3>

        <div className="space-y-4 mb-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Byggnadsskal</h4>
            <p className="text-blue-700 text-sm">
              Excellent isolering, täthet och värmebryggor. Fönster med låg U-värde och 
              solavskärmning. Kontrollerad ventilation med värmeåtervinning.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <h4 className="font-semibold text-green-800 mb-2">Värmesystem</h4>
            <p className="text-green-700 text-sm">
              Värmepumpar, fjärrvärme från förnyelsebara källor, solvärme och 
              geotermisk energi. Smart styrning och zonindelning.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
            <h4 className="font-semibold text-amber-800 mb-2">Förnyelsebar energi</h4>
            <p className="text-amber-700 text-sm">
              Solceller, solvärmepaneler, småskalig vindkraft och energilagring. 
              Integration med smarta elnät.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Recycle className="w-6 h-6 text-orange-600" />
          Avfallshantering på byggarbetsplatsen
        </h2>

        <p className="mb-6">
          Byggbranschen genererar stora mängder avfall. Genom systematisk avfallshantering 
          och återvinning kan miljöpåverkan minskas betydligt samtidigt som kostnaderna reduceras.
        </p>

        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-orange-800 mb-4">Avfallshierarkin</h3>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</div>
              <div>
                <h4 className="font-medium text-orange-800">Förebygga</h4>
                <p className="text-orange-700 text-sm">Planera för att minimera avfall från början</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</div>
              <div>
                <h4 className="font-medium text-orange-800">Återanvända</h4>
                <p className="text-orange-700 text-sm">Använd material och komponenter igen</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</div>
              <div>
                <h4 className="font-medium text-orange-800">Återvinna</h4>
                <p className="text-orange-700 text-sm">Materialåtervinning till nya produkter</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</div>
              <div>
                <h4 className="font-medium text-orange-800">Energiåtervinning</h4>
                <p className="text-orange-700 text-sm">Förbränning med energiutvinning</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">Praktisk avfallshantering:</h3>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Avfallsplan:</strong> Upprätta detaljerad plan redan i projekteringsfasen</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Källsortering:</strong> Separera olika materialtyper direkt på arbetsplatsen</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Återvinningsstationer:</strong> Etablera tydligt märkta insamlingspunkter</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Utbildning:</strong> Säkerställ att alla arbetare förstår rutinerna</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-stone-800 mb-6">
          Långsiktig hållbarhet
        </h2>

        <p className="mb-6">
          Hållbarhet handlar inte bara om byggfasen utan om hela byggnadens livscykel. 
          Planering för långsiktig hållbarhet ger både miljö- och ekonomiska fördelar.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-emerald-50 p-6 rounded-lg">
            <h3 className="font-semibold text-emerald-800 mb-4">Flexibilitet och anpassningsbarhet</h3>
            <ul className="space-y-2 text-emerald-700 text-sm">
              <li>• Modulära system som kan ändras</li>
              <li>• Överdimensionerade installationer</li>
              <li>• Flexibla planlösningar</li>
              <li>• Framtidssäkra tekniska lösningar</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-4">Underhåll och drift</h3>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• Lättunderhållna material och system</li>
              <li>• Energieffektiv drift</li>
              <li>• Förebyggande underhållsprogram</li>
              <li>• Digital övervakning och styrning</li>
            </ul>
          </div>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg">
          <h3 className="font-semibold text-emerald-800 mb-3">Hållbart byggande med Tobias Ytterman</h3>
          <p className="text-emerald-700 mb-3">
            Som erfaren <Link to="/kontrollansvarig" className="text-emerald-800 hover:text-emerald-900 font-medium underline">kontrollansvarig</Link> hjälper jag dig att integrera hållbarhet i hela byggprocessen:
          </p>
          <ul className="space-y-2 text-emerald-700">
            <li>• Rådgivning om miljöcertifieringar (BREEAM/LEED)</li>
            <li>• Hållbara materialval och leverantörsbedömning</li>
            <li>• Energieffektiviseringsstrategier</li>
            <li>• Systematisk avfallshantering och återvinning</li>
            <li>• Långsiktig hållbarhetsplanering</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-emerald-300">
            <Link to="/kontakt" className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors font-semibold">
              Diskutera hållbart byggande →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200">
          <h3 className="text-xl font-semibold text-stone-800 mb-4">Relaterade guider</h3>
          <ul className="space-y-2 text-stone-700">
            <li>• <Link to="/guider/energi" className="text-amber-600 hover:text-amber-700 font-medium underline">Energideklaration och energieffektivisering</Link></li>
            <li>• <Link to="/guider/kvalitetskontroll" className="text-amber-600 hover:text-amber-700 font-medium underline">Kvalitetskontroll i byggprojekt</Link></li>
            <li>• <Link to="/guider/digitala-verktyg" className="text-amber-600 hover:text-amber-700 font-medium underline">Digitala verktyg för modern byggnation</Link></li>
          </ul>
        </div>
      </div>
    </GuideLayout>
  );
};

export default MiljoGuide;