import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { CheckCircle, AlertTriangle, FileText, Users } from 'lucide-react';

const KontrollansvarigGuide = () => {
  return (
    <GuideLayout
      title="Kontrollansvarigs roll i byggprocessen"
      description="En komplett guide om vad en kontrollansvarig gör och varför det är viktigt för ditt byggprojekt."
      category="Kontrollansvarig"
      readTime="8 min"
      seoTitle="Kontrollansvarig Guide - Allt du behöver veta 2025 | Ytterman"
      seoDescription="Komplett guide om kontrollansvarigs roll, ansvar och när du behöver en. Expert råd från certifierad kontrollansvarig Tobias Ytterman i Västernorrland."
      keywords="kontrollansvarig, byggkontroll, PBL, plan- och bygglagen, bygglov, teknisk kontroll, slutbevis, kontrollplan, Västernorrland"
      canonicalPath="/guider/kontrollansvarig"
    >
      <div className="prose prose-stone max-w-none">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <FileText className="w-6 h-6 text-amber-600" />
          Vad är en kontrollansvarig?
        </h2>
        
        <p className="text-lg text-stone-700 mb-6">
          En <Link to="/kontrollansvarig" className="text-amber-600 hover:text-amber-700 font-medium underline">kontrollansvarig</Link> är en certifierad expert som säkerställer att byggprojekt följer gällande lagar, 
          föreskrifter och <Link to="/guider/bygglov" className="text-amber-600 hover:text-amber-700 font-medium underline">bygglov</Link>. Rollen är lagstadgad enligt Plan- och bygglagen (PBL) och är avgörande 
          för att ditt projekt ska genomföras säkert och regelrätt.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Viktigt att veta</h3>
              <p className="text-amber-700">
                Alla byggprojekt som kräver bygglov eller anmälan måste ha en kontrollansvarig. 
                Detta är inte frivilligt utan ett lagkrav som måste följas.
              </p>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <CheckCircle className="w-6 h-6 text-green-600" />
          Lagkrav och certifiering
        </h2>

        <p className="mb-4">
          För att arbeta som kontrollansvarig krävs certifiering enligt Boverkets föreskrifter. 
          Certifieringen är inte något man bara "får" - det är en process som säkerställer att 
          kontrollansvariga har rätt kompetens och erfarenhet för att ta ansvar för byggprojekt.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Hur blir man certifierad kontrollansvarig?
        </h3>

        <p className="mb-4">
          Vägen till certifiering som kontrollansvarig följer en tydlig process:
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-6">
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
              <div>
                <strong className="text-stone-800">Grundläggande utbildning:</strong>
                <p className="text-stone-700 mt-1">
                  Teknisk högskoleutbildning inom byggnadsteknik, konstruktionsteknik eller motsvarande. 
                  Minst 120 högskolepoäng med relevant inriktning krävs för att kunna söka certifiering.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
              <div>
                <strong className="text-stone-800">Praktisk erfarenhet:</strong>
                <p className="text-stone-700 mt-1">
                  Minst 3 års dokumenterad arbetslivserfarenhet från byggprojekt. Detta inkluderar erfarenhet 
                  från projektering, byggledning eller liknande roller där man arbetat med tekniska lösningar 
                  och kvalitetssäkring.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
              <div>
                <strong className="text-stone-800">Certifieringskurs:</strong>
                <p className="text-stone-700 mt-1">
                  Genomföra en godkänd certifieringskurs som täcker Plan- och bygglagen (PBL), 
                  Boverkets byggregler (BBR) och kontrollansvarigs roll och ansvar. Kursen avslutas 
                  med ett certifieringsprov.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
              <div>
                <strong className="text-stone-800">Ansökan och granskning:</strong>
                <p className="text-stone-700 mt-1">
                  Ansökan skickas till certifieringsorgan (t.ex. SBUF Certification, RISE eller SP) 
                  som granskar utbildning, erfarenhet och provresultat. Vid godkännande utfärdas 
                  certifikat som kontrollansvarig.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Certifieringsorgan och förnyelse
        </h3>

        <p className="mb-4">
          I Sverige finns flera ackrediterade certifieringsorgan som utfärdar certifikat för kontrollansvariga:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border-2 border-stone-200 p-5 rounded-lg">
            <h4 className="font-semibold text-stone-800 mb-2">Godkända certifieringsorgan</h4>
            <ul className="space-y-2 text-stone-700">
              <li>• SBUF Certification AB</li>
              <li>• RISE Research Institutes of Sweden</li>
              <li>• SP Sveriges Tekniska Forskningsinstitut</li>
              <li>• Andra ackrediterade organ enligt Boverket</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 border-2 border-amber-200 p-5 rounded-lg">
            <h4 className="font-semibold text-amber-800 mb-2">Förnyelse av certifiering</h4>
            <ul className="space-y-2 text-amber-700">
              <li>• Certifikatet gäller i 5 år</li>
              <li>• Kontinuerlig kompetensutveckling krävs</li>
              <li>• Återcertifiering med uppdaterad kurs och prov</li>
              <li>• Dokumenterad verksamhet som KA under perioden</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Vad omfattar certifieringen?
        </h3>

        <p className="mb-4">
          En certifierad kontrollansvarig måste ha kompetens inom flera områden:
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Teknisk kompetens:</strong> Djup kunskap om byggtekniska lösningar, konstruktioner, 
            fuktsäkerhet, energihushållning och tillgänglighet</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Regelkunskap:</strong> Aktuell kunskap om Plan- och bygglagen (PBL), Boverkets byggregler (BBR), 
            EKS (Boverkets föreskrifter om tillämpning av europeiska konstruktionsstandarder) och andra relevanta föreskrifter</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Praktisk erfarenhet:</strong> Dokumenterad erfarenhet från olika typer av byggprojekt 
            och kunskap om byggprocessen från projektering till färdigställande</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Kontrollmetodik:</strong> Kunskap om hur man upprättar kontrollplaner, genomför 
            tekniska kontroller och dokumenterar byggprocessen</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Kontinuerlig utbildning:</strong> Regelbunden kompetensutveckling för att hålla sig 
            uppdaterad om nya regler, tekniker och metoder</span>
          </li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Hur verifierar man en kontrollansvarigs certifiering?</h4>
              <p className="text-blue-700 mb-2">
                Som byggherre har du rätt att begära att se kontrollansvarigs certifikat. Ett giltigt certifikat 
                ska innehålla:
              </p>
              <ul className="text-blue-700 space-y-1 ml-4">
                <li>• Namn och personnummer</li>
                <li>• Certifieringsorgan</li>
                <li>• Utfärdandedatum och giltighetstid</li>
                <li>• Områden som certifieringen omfattar</li>
              </ul>
              <p className="text-blue-700 mt-2">
                Du kan också kontakta certifieringsorganet för att verifiera att certifikatet är giltigt.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4 mt-8">
          Min kompetens och certifiering
        </h3>

        <p className="mb-4">
          Som certifierad kontrollansvarig med över 20 års erfarenhet från byggbranschen 
          har jag arbetat med allt från småhus till komplexa flerbostadshus och kommersiella byggnader. 
          Min certifiering omfattar:
        </p>

        <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
          <ul className="space-y-2 text-green-800">
            <li>• Certifierad kontrollansvarig enligt Boverkets föreskrifter</li>
            <li>• Specialkompetens inom energi- och fuktsäkerhetsfrågor</li>
            <li>• Medlem i Sveriges Byggindustrier (BI)</li>
            <li>• Kontinuerlig fortbildning inom nybyggnation och renovering</li>
            <li>• Lokal kännedom om Västernorrlands byggförutsättningar</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Users className="w-6 h-6 text-blue-600" />
          Kontrollansvarigs ansvar
        </h2>

        <p className="mb-4">
          Som kontrollansvarig har jag ett omfattande ansvar som sträcker sig genom hela byggprocessen:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">Under projektering</h3>
            <ul className="space-y-2 text-blue-700">
              <li>• Granska ritningar och tekniska lösningar</li>
              <li>• Kontrollera överensstämmelse med bygglov</li>
              <li>• Säkerställa att BBR följs</li>
              <li>• Koordinera med projektörer</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Under byggandet</h3>
            <ul className="space-y-2 text-green-700">
              <li>• Utföra tekniska kontroller på plats</li>
              <li>• Kontrollera att bygget följer godkända ritningar</li>
              <li>• Dokumentera avvikelser och åtgärder</li>
              <li>• Samarbeta med byggledning</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-stone-800 mb-6">
          När behövs en kontrollansvarig?
        </h2>

        <p className="mb-4">
          En kontrollansvarig krävs för följande typer av projekt. Ofta behövs även <Link to="/bas-p" className="text-amber-600 hover:text-amber-700 font-medium underline">BAS-P</Link> och <Link to="/bas-u" className="text-amber-600 hover:text-amber-700 font-medium underline">BAS-U</Link> för säkerhetssamordning:
        </p>

        <div className="bg-stone-50 p-6 rounded-lg mb-8">
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Nybyggnation:</strong> Alla nya byggnader som kräver bygglov</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Större ombyggnader:</strong> Omfattande renoveringar och tillbyggnader</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Anmälningspliktiga arbeten:</strong> Vissa mindre projekt som ändå kräver kontroll</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Komplicerade projekt:</strong> Tekniskt avancerade eller riskfyllda byggen</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-stone-800 mb-6">
          Kostnader och tidsåtgång
        </h2>

        <p className="mb-4">
          Kostnaden för en kontrollansvarig varierar beroende på projektets omfattning och komplexitet. Se även vår <Link to="/priser" className="text-amber-600 hover:text-amber-700 font-medium underline">kompletta prislista</Link> för alla tjänster:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-stone-200 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-stone-800 mb-2">Mindre projekt</h3>
            <p className="text-2xl font-bold text-amber-600 mb-2">19,999-35,000 kr</p>
            <p className="text-sm text-stone-600">Enklare tillbyggnader och renoveringar</p>
          </div>
          
          <div className="bg-white border border-stone-200 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-stone-800 mb-2">Medelstora projekt</h3>
            <p className="text-2xl font-bold text-amber-600 mb-2">35,000-80,000 kr</p>
            <p className="text-sm text-stone-600">Villor och mindre flerbostadshus</p>
          </div>
          
          <div className="bg-white border border-stone-200 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-stone-800 mb-2">Större projekt</h3>
            <p className="text-2xl font-bold text-amber-600 mb-2">80,000+ kr</p>
            <p className="text-sm text-stone-600">Komplexa byggnader och anläggningar</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-3">Varför välja Tobias Ytterman som kontrollansvarig?</h3>
          <ul className="space-y-2 text-green-700">
            <li>• Över 20 års erfarenhet inom byggbranschen</li>
            <li>• Certifierad enligt Boverkets krav</li>
            <li>• Specialiserad på projekt i Västernorrland</li>
            <li>• Digital hantering för effektiv kommunikation</li>
            <li>• Konkurrenskraftiga priser med fast eller timpris</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-green-300">
            <Link to="/kontakt" className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-semibold">
              Kontakta mig för offert →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200">
          <h3 className="text-xl font-semibold text-stone-800 mb-4">Relaterade guider</h3>
          <ul className="space-y-2 text-stone-700">
            <li>• <Link to="/guider/bas" className="text-amber-600 hover:text-amber-700 font-medium underline">BAS-P och BAS-U Guide - Säkerhetssamordning</Link></li>
            <li>• <Link to="/guider/bygglov" className="text-amber-600 hover:text-amber-700 font-medium underline">Bygglovsprocessen i Västernorrland</Link></li>
            <li>• <Link to="/guider/kvalitetskontroll" className="text-amber-600 hover:text-amber-700 font-medium underline">Kvalitetskontroll i byggprojekt</Link></li>
          </ul>
        </div>
      </div>
    </GuideLayout>
  );
};

export default KontrollansvarigGuide;