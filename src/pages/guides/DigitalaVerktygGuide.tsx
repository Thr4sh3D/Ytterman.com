import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { CheckCircle, Smartphone, Cloud, MessageSquare, Zap, Shield } from 'lucide-react';

const DigitalaVerktygGuide = () => {
  return (
    <GuideLayout
      title="Digitala verktyg för byggprojekt"
      description="Moderna digitala lösningar som effektiviserar byggprocessen och förbättrar kommunikationen."
      category="Digitalisering"
      readTime="7 min"
      seoTitle="Digitala Verktyg Byggprojekt - Effektivisering & Kommunikation | Ytterman"
      seoDescription="Guide till moderna digitala verktyg för byggprojekt. Projekthantering, dokumentation och kommunikation. Expert råd från Tobias Ytterman."
      keywords="digitala verktyg, byggprojekt, projekthantering, digital dokumentation, byggappar, kommunikation"
      canonicalPath="/guider/digitala-verktyg"
    >
      <div className="prose prose-stone max-w-none">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Zap className="w-6 h-6 text-orange-600" />
          Projekthanteringsverktyg
        </h2>
        
        <p className="text-lg text-stone-700 mb-6">
          Moderna projekthanteringsverktyg revolutionerar hur vi arbetar med byggprojekt. 
          Genom att digitalisera planering, uppföljning och kommunikation kan <Link to="/kontrollansvarig" className="text-orange-600 hover:text-orange-700 font-medium underline">kontrollansvariga</Link> och <Link to="/bas-p" className="text-orange-600 hover:text-orange-700 font-medium underline">BAS</Link> dramatiskt 
          förbättra effektiviteten och minska risken för missförstånd.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
          <div className="flex items-start">
            <Zap className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-orange-800 mb-2">Digital transformation</h3>
              <p className="text-orange-700">
                Byggbranschen genomgår en digital revolution. De som anpassar sig tidigt får 
                betydande konkurrensfördelar genom ökad effektivitet och bättre kvalitet.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">Fördelar med digitala projektverktyg:</h3>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Realtidsöversikt:</strong> Alla projektparter ser samma information samtidigt</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Automatiserad rapportering:</strong> Minska manuellt administrativt arbete</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Bättre planering:</strong> Visualisera tidsplaner och resursbehov</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Riskhantering:</strong> Identifiera och hantera risker proaktivt</span>
          </li>
        </ul>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Populära projektverktyg
            </h3>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• <strong>Microsoft Project:</strong> Avancerad projektplanering</li>
              <li>• <strong>Trello/Asana:</strong> Enkel uppgiftshantering</li>
              <li>• <strong>Monday.com:</strong> Visuell projektöversikt</li>
              <li>• <strong>Buildertrend:</strong> Specialiserat för byggbranschen</li>
              <li>• <strong>PlanGrid:</strong> Ritningshantering och fältarbete</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Nyckelfunktioner
            </h3>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>• Gantt-scheman för tidsplanering</li>
              <li>• Resursallokering och kapacitetsplanering</li>
              <li>• Kostnadsspårning och budgetöversikt</li>
              <li>• Riskregister och problemhantering</li>
              <li>• Integrationer med andra system</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Cloud className="w-6 h-6 text-blue-600" />
          Digital dokumentation
        </h2>

        <p className="mb-6">
          Digital dokumentation revolutionerar hur vi hanterar ritningar, specifikationer och 
          kontrollprotokoll. Molnbaserade lösningar ger alla projektparter, inklusive <Link to="/kontrollansvarig" className="text-orange-600 hover:text-orange-700 font-medium underline">kontrollansvarig</Link> och entreprenörer, tillgång till 
          aktuell information var de än befinner sig.
        </p>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-blue-800 mb-4">Fördelar med molnbaserad dokumentation</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-700 mb-2">Tillgänglighet:</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Åtkomst från alla enheter</li>
                <li>• Automatisk synkronisering</li>
                <li>• Offline-funktionalitet</li>
                <li>• 24/7 tillgänglighet</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-700 mb-2">Säkerhet:</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Automatiska säkerhetskopior</li>
                <li>• Versionshantering</li>
                <li>• Behörighetskontroll</li>
                <li>• Revisionsspår</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">Viktiga dokumenttyper att digitalisera:</h3>

        <div className="space-y-4 mb-8">
          <div className="bg-stone-50 p-4 rounded-lg">
            <h4 className="font-semibold text-stone-800 mb-2">Ritningar och CAD-filer</h4>
            <p className="text-stone-700 text-sm">
              Centraliserad ritningshantering med versionshistorik och kommentarsfunktioner. 
              Möjlighet att jämföra olika versioner och spåra ändringar.
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-lg">
            <h4 className="font-semibold text-stone-800 mb-2">Kontrollprotokoll och inspektioner</h4>
            <p className="text-stone-700 text-sm">
              Digitala formulär som kan fyllas i på plats med mobila enheter. 
              Automatisk GPS-taggning och fotodokumentation.
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-lg">
            <h4 className="font-semibold text-stone-800 mb-2">Certifikat och garantier</h4>
            <p className="text-stone-700 text-sm">
              Strukturerad lagring av alla certifikat, garantier och tekniska datablad. 
              Påminnelser om utgångsdatum och underhållsintervaller.
            </p>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <MessageSquare className="w-6 h-6 text-green-600" />
          Kommunikationsplattformar
        </h2>

        <p className="mb-6">
          Effektiv kommunikation är avgörande för framgångsrika byggprojekt. Moderna 
          kommunikationsplattformar samlar all projektrelaterad kommunikation på ett ställe.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-4">Realtidskommunikation</h3>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>• <strong>Slack/Microsoft Teams:</strong> Chattbaserad kommunikation</li>
              <li>• <strong>WhatsApp Business:</strong> Snabb kommunikation i fält</li>
              <li>• <strong>Zoom/Teams:</strong> Videomöten och skärmdelning</li>
              <li>• <strong>Voxer:</strong> Walkie-talkie funktionalitet</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="font-semibold text-amber-800 mb-4">Strukturerad kommunikation</h3>
            <ul className="space-y-2 text-amber-700 text-sm">
              <li>• Projektspecifika kanaler och grupper</li>
              <li>• Automatiska notifieringar och påminnelser</li>
              <li>• Integrering med projekthanteringsverktyg</li>
              <li>• Sökbara meddelandehistorik</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Smartphone className="w-6 h-6 text-red-600" />
          Mobila inspektionsappar
        </h2>

        <p className="mb-6">
          Mobila appar för fältarbete revolutionerar hur inspektioner och kontroller genomförs. 
          Istället för papper och penna kan all dokumentation göras direkt i mobilen eller surfplattan.
        </p>

        <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-red-800 mb-4">Fördelar med mobila inspektionsappar</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium text-red-700 mb-2">Effektivitet:</h4>
              <ul className="text-sm text-red-600 space-y-1">
                <li>• Snabbare dokumentation</li>
                <li>• Automatisk datasynkronisering</li>
                <li>• Mindre administrativt arbete</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-red-700 mb-2">Kvalitet:</h4>
              <ul className="text-sm text-red-600 space-y-1">
                <li>• Standardiserade formulär</li>
                <li>• Obligatoriska fält</li>
                <li>• Fotodokumentation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-red-700 mb-2">Spårbarhet:</h4>
              <ul className="text-sm text-red-600 space-y-1">
                <li>• GPS-koordinater</li>
                <li>• Tidsstämplar</li>
                <li>• Digital signatur</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">Populära inspektionsappar:</h3>

        <div className="space-y-4 mb-8">
          <div className="bg-white border border-stone-200 p-4 rounded-lg">
            <h4 className="font-semibold text-stone-800 mb-2">iAuditor (SafetyCulture)</h4>
            <p className="text-stone-700 text-sm mb-2">
              Omfattande inspektionsapp med tusentals färdiga mallar för olika branscher.
            </p>
            <ul className="text-xs text-stone-600 space-y-1">
              <li>• Anpassningsbara checklistor</li>
              <li>• Automatisk rapportgenerering</li>
              <li>• Integrationer med andra system</li>
            </ul>
          </div>

          <div className="bg-white border border-stone-200 p-4 rounded-lg">
            <h4 className="font-semibold text-stone-800 mb-2">HammerTech</h4>
            <p className="text-stone-700 text-sm mb-2">
              Specialiserad på säkerhet och kvalitetskontroll inom byggbranschen.
            </p>
            <ul className="text-xs text-stone-600 space-y-1">
              <li>• Säkerhetsronder och inspektioner</li>
              <li>• Incidentrapportering</li>
              <li>• Utbildningsspårning</li>
            </ul>
          </div>

          <div className="bg-white border border-stone-200 p-4 rounded-lg">
            <h4 className="font-semibold text-stone-800 mb-2">Fieldwire</h4>
            <p className="text-stone-700 text-sm mb-2">
              Fokuserar på ritningshantering och fältkoordinering.
            </p>
            <ul className="text-xs text-stone-600 space-y-1">
              <li>• Ritningsmarkering och kommentarer</li>
              <li>• Uppgiftshantering</li>
              <li>• Realtidssamarbete</li>
            </ul>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Shield className="w-6 h-6 text-amber-600" />
          Integrering med befintliga system
        </h2>

        <p className="mb-6">
          För att få maximal nytta av digitala verktyg är det viktigt att de integreras med 
          befintliga system. Detta skapar en smidig arbetsflöde utan dubbelarbete.
        </p>

        <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-amber-800 mb-4">Viktiga integrationspunkter</h3>
          
          <ul className="space-y-3 text-amber-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Ekonomisystem:</strong> Automatisk överföring av kostnader och faktureringsunderlag</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>CAD-system:</strong> Synkronisering av ritningar och tekniska ändringar</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Tidrapportering:</strong> Automatisk registrering av arbetstid och aktiviteter</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Dokumenthantering:</strong> Central lagring och versionshantering</span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-amber-800 mb-3">Tips för framgångsrik digitalisering</h3>
          <ul className="space-y-2 text-amber-700">
            <li>• Börja småskaligt med ett verktyg i taget</li>
            <li>• Utbilda alla användare ordentligt</li>
            <li>• Skapa tydliga rutiner och riktlinjer</li>
            <li>• Mät och följ upp effekterna</li>
            <li>• Var tålmodig - förändring tar tid</li>
          </ul>
        </div>

        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-semibold text-orange-800 mb-3">Digital expertis med Tobias Ytterman</h3>
          <p className="text-orange-700 mb-3">
            Som erfaren projektledare hjälper jag dig att välja och implementera rätt digitala verktyg:
          </p>
          <ul className="space-y-2 text-orange-700">
            <li>• Behovsanalys och verktygsvalet</li>
            <li>• Implementation och utbildning</li>
            <li>• Integration med befintliga system</li>
            <li>• Löpande support och optimering</li>
            <li>• Mätning av effekter och ROI</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-orange-300">
            <Link to="/kontakt" className="inline-block bg-orange-700 text-white px-6 py-3 rounded-lg hover:bg-orange-800 transition-colors font-semibold">
              Digitaliseringskonsultation →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200">
          <h3 className="text-xl font-semibold text-stone-800 mb-4">Relaterade guider</h3>
          <ul className="space-y-2 text-stone-700">
            <li>• <Link to="/guider/kontrollansvarig" className="text-amber-600 hover:text-amber-700 font-medium underline">Kontrollansvarigs roll i moderna byggprojekt</Link></li>
            <li>• <Link to="/guider/kvalitetskontroll" className="text-amber-600 hover:text-amber-700 font-medium underline">Kvalitetskontroll med digitala verktyg</Link></li>
            <li>• <Link to="/guider/bas" className="text-amber-600 hover:text-amber-700 font-medium underline">BAS-P och BAS-U - Säkerhetssamordning</Link></li>
          </ul>
        </div>
      </div>
    </GuideLayout>
  );
};

export default DigitalaVerktygGuide;