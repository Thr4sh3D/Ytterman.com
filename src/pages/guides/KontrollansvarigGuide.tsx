import React from 'react';
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
          En kontrollansvarig är en certifierad expert som säkerställer att byggprojekt följer gällande lagar, 
          föreskrifter och bygglov. Rollen är lagstadgad enligt Plan- och bygglagen (PBL) och är avgörande 
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
          Kontrollansvariga måste vara certifierade enligt Boverkets föreskrifter. Certifieringen omfattar:
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Teknisk kompetens:</strong> Djup kunskap om byggtekniska lösningar och konstruktioner</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Regelkunskap:</strong> Aktuell kunskap om PBL, BBR och andra relevanta föreskrifter</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Praktisk erfarenhet:</strong> Dokumenterad erfarenhet från byggprojekt</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Kontinuerlig utbildning:</strong> Regelbunden kompetensutveckling för att hålla sig uppdaterad</span>
          </li>
        </ul>

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
          En kontrollansvarig krävs för följande typer av projekt:
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
          Kostnaden för en kontrollansvarig varierar beroende på projektets omfattning och komplexitet:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-stone-200 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-stone-800 mb-2">Mindre projekt</h3>
            <p className="text-2xl font-bold text-amber-600 mb-2">15,000-30,000 kr</p>
            <p className="text-sm text-stone-600">Enklare tillbyggnader och renoveringar</p>
          </div>
          
          <div className="bg-white border border-stone-200 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-stone-800 mb-2">Medelstora projekt</h3>
            <p className="text-2xl font-bold text-amber-600 mb-2">30,000-80,000 kr</p>
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
        </div>
      </div>
    </GuideLayout>
  );
};

export default KontrollansvarigGuide;