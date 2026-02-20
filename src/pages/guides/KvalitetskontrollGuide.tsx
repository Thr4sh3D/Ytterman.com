import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { CheckCircle, AlertTriangle, Target, FileText, Users, Calendar } from 'lucide-react';

const KvalitetskontrollGuide = () => {
  return (
    <GuideLayout
      title="Kvalitetskontroll under byggtiden"
      description="Hur du säkerställer kvalitet genom hela byggprocessen med rätt kontroller vid rätt tidpunkt."
      category="Kvalitetskontroll"
      readTime="12 min"
      seoTitle="Kvalitetskontroll Guide - Byggkvalitet & Kontrollpunkter | Ytterman"
      seoDescription="Komplett guide om kvalitetskontroll i byggprojekt. Kritiska kontrollpunkter, dokumentation och slutbesiktning. Expert råd från Tobias Ytterman."
      keywords="kvalitetskontroll, byggkvalitet, kontrollpunkter, slutbesiktning, byggdokumentation, kvalitetssäkring"
      canonicalPath="/guider/kvalitetskontroll"
    >
      <div className="prose prose-stone max-w-none">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Target className="w-6 h-6 text-amber-600" />
          Planering av kvalitetskontroller
        </h2>
        
        <p className="text-lg text-stone-700 mb-6">
          Framgångsrik kvalitetskontroll börjar redan i planeringsfasen. Genom att identifiera 
          kritiska kontrollpunkter tidigt tillsammans med en <Link to="/kontrollansvarig" className="text-amber-600 hover:text-amber-700 font-medium underline">certifierad kontrollansvarig</Link> kan du förebygga problem och säkerställa att projektet 
          håller hög kvalitet från start till mål.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
          <div className="flex items-start">
            <Target className="w-5 h-5 text-amber-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Kvalitet som grund</h3>
              <p className="text-amber-700">
                Kvalitetskontroll handlar inte bara om att hitta fel - det handlar om att skapa 
                system som förhindrar att fel uppstår från början.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">Grundprinciper för kvalitetsplanering:</h3>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Tidiga kontroller:</strong> Identifiera kontrollpunkter redan i projekteringsfasen</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Riskbaserad approach:</strong> Fokusera på områden med högst risk för kvalitetsbrister</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Tydliga kriterier:</strong> Definiera acceptanskriterier för varje kontrollpunkt</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Ansvarstydlighet:</strong> Klargör vem som ansvarar för varje kontroll</span>
          </li>
        </ul>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          Kritiska kontrollpunkter
        </h2>

        <p className="mb-6">
          Vissa moment i byggprocessen är extra kritiska och kräver noggrann kontroll. 
          Här är de viktigaste kontrollpunkterna som aldrig får missas:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Grundläggning & Stomme
            </h3>
            <ul className="space-y-2 text-red-700 text-sm">
              <li>• Grundens läge och nivåer</li>
              <li>• Armering före gjutning</li>
              <li>• Betongkvalitet och härdning</li>
              <li>• Stomkomplettering och infästningar</li>
              <li>• Dimensioner och toleranser</li>
              <li>• Fuktskydd och dränering</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Klimatskal & Installationer
            </h3>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• Täthet och värmeisolering</li>
              <li>• Fönster och dörrmontage</li>
              <li>• Takläggning och stuprör</li>
              <li>• VVS-installationer</li>
              <li>• Elinstallationer och säkerhet</li>
              <li>• Ventilationssystem</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-amber-800 mb-4">Kontrollschema för olika byggfaser</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-amber-800">Vecka 1-4: Grundarbeten</h4>
                <p className="text-amber-700 text-sm">Schaktning, grundläggning, dränering</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-amber-800">Vecka 5-12: Stomresning</h4>
                <p className="text-amber-700 text-sm">Betonggjutning, stomkomplettering, takstol</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-amber-800">Vecka 13-20: Klimatskal</h4>
                <p className="text-amber-700 text-sm">Isolering, fönster, yttertak, fasad</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-amber-800">Vecka 21-28: Installationer</h4>
                <p className="text-amber-700 text-sm">VVS, el, ventilation, inredning</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <FileText className="w-6 h-6 text-green-600" />
          Dokumentation och rapportering
        </h2>

        <p className="mb-6">
          Korrekt dokumentation är avgörande för kvalitetssäkring och framtida garantiärenden. 
          All kontrollverksamhet måste dokumenteras systematiskt.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">Viktiga dokument att föra:</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Kontrollprotokoll</h4>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>• Datum och tidpunkt för kontroll</li>
              <li>• Vad som kontrollerats</li>
              <li>• Kontrollresultat och bedömning</li>
              <li>• Eventuella avvikelser</li>
              <li>• Åtgärder som vidtagits</li>
              <li>• Ansvarig persons signatur</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Fotodokumentation</h4>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• Före och efter bilder</li>
              <li>• Dolda konstruktioner</li>
              <li>• Installationsarbeten</li>
              <li>• Avvikelser och åtgärder</li>
              <li>• Slutresultat</li>
              <li>• Datum och platsangivelse</li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-stone-800 mb-4">Digital dokumentation - moderna lösningar</h3>
          <p className="text-stone-700 mb-4">
            Jag använder moderna digitala verktyg för effektiv dokumentation:
          </p>
          <ul className="space-y-2 text-stone-700">
            <li>• Molnbaserade system för realtidsuppdateringar</li>
            <li>• Mobila appar för fältdokumentation</li>
            <li>• Automatisk GPS-taggning av foton</li>
            <li>• Integrering med projekthanteringssystem</li>
            <li>• Säker delning med alla projektparter</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Users className="w-6 h-6 text-blue-600" />
          Samarbete med entreprenörer
        </h2>

        <p className="mb-6">
          Framgångsrik kvalitetskontroll kräver nära samarbete med alla inblandade entreprenörer, inklusive <Link to="/bas-p" className="text-amber-600 hover:text-amber-700 font-medium underline">BAS-P</Link> och <Link to="/bas-u" className="text-amber-600 hover:text-amber-700 font-medium underline">BAS-U</Link> för säkerhetssaspekter.
          Kommunikation och tydliga förväntningar är nyckeln till framgång.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">Bästa praxis för samarbete:</h3>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Tydliga kvalitetskrav:</strong> Kommunicera förväntningar från projektstart</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Regelbundna möten:</strong> Veckovisa kvalitetsgenomgångar med alla parter</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Konstruktiv feedback:</strong> Fokusera på lösningar, inte bara problem</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Gemensam dokumentation:</strong> Alla parter ska ha tillgång till kontrollresultat</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-stone-800 mb-6">
          Slutbesiktning och garantier
        </h2>

        <p className="mb-6">
          Slutbesiktningen är projektets sista kvalitetskontroll och grunden för framtida garantihantering. 
          En noggrann slutbesiktning skyddar både byggherren och entreprenörerna.
        </p>

        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-purple-800 mb-4">Slutbesiktningens omfattning</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-purple-700 mb-2">Teknisk kontroll:</h4>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>• Funktionskontroll av alla system</li>
                <li>• Kontroll mot ritningar och beskrivningar</li>
                <li>• Säkerhetskontroller</li>
                <li>• Energiprestanda</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-purple-700 mb-2">Kvalitetsbedömning:</h4>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>• Ytskikt och finish</li>
                <li>• Färg och materialval</li>
                <li>• Detaljutförande</li>
                <li>• Städning och slutstädning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <h3 className="font-semibold text-green-800 mb-2">Garantihantering</h3>
            <p className="text-green-700 text-sm">
              Dokumentera alla garantier systematiskt. Skapa en garantimatris som visar vad som 
              omfattas av vilken garanti och när de löper ut.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Underhållsplan</h3>
            <p className="text-blue-700 text-sm">
              Upprätta en detaljerad underhållsplan som hjälper byggherren att bevara kvaliteten 
              över tid och upprätthålla garantierna.
            </p>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <h3 className="font-semibold text-purple-800 mb-3">Kvalitetskontroll med Tobias Ytterman</h3>
          <p className="text-purple-700 mb-3">
            Med över 20 års erfarenhet erbjuder jag omfattande kvalitetskontroll:
          </p>
          <ul className="space-y-2 text-purple-700">
            <li>• Systematisk kvalitetsplanering från projektstart</li>
            <li>• Regelbundna kontroller under hela byggprocessen</li>
            <li>• Modern digital dokumentation och rapportering</li>
            <li>• Professionell slutbesiktning och garantihantering</li>
            <li>• Långsiktigt stöd för underhåll och garantiärenden</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-purple-300">
            <Link to="/kontakt" className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors font-semibold">
              Diskutera ditt projekt →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200">
          <h3 className="text-xl font-semibold text-stone-800 mb-4">Relaterade guider</h3>
          <ul className="space-y-2 text-stone-700">
            <li>• <Link to="/guider/kontrollansvarig" className="text-amber-600 hover:text-amber-700 font-medium underline">Kontrollansvarigs roll och ansvar</Link></li>
            <li>• <Link to="/guider/bygglov" className="text-amber-600 hover:text-amber-700 font-medium underline">Bygglovsprocessen i Västernorrland</Link></li>
            <li>• <Link to="/guider/digitala-verktyg" className="text-amber-600 hover:text-amber-700 font-medium underline">Digitala verktyg för byggprojekt</Link></li>
          </ul>
        </div>
      </div>
    </GuideLayout>
  );
};

export default KvalitetskontrollGuide;