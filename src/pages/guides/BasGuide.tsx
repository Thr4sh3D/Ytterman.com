import React from 'react';
import { GuideLayout } from '@/components/GuideLayout';
import { CheckCircle, AlertTriangle, Shield, Users, FileText } from 'lucide-react';

const BasGuide = () => {
  return (
    <GuideLayout
      title="BAS-P vs BAS-U: Skillnader och när de behövs"
      description="Förstå skillnaderna mellan BAS-P och BAS-U samt när respektive roll krävs i ditt projekt."
      category="Säkerhetssamordning"
      readTime="6 min"
      seoTitle="BAS-P och BAS-U Guide - Säkerhetssamordning | Ytterman"
      seoDescription="Komplett guide om BAS-P och BAS-U roller, skillnader och lagkrav. Expert råd från certifierad säkerhetssamordnare Tobias Ytterman."
      keywords="BAS-P, BAS-U, säkerhetssamordnare, arbetsmiljö, AFS 1999:3, byggarbetsmiljö"
    >
      <div className="prose prose-stone max-w-none">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Shield className="w-6 h-6 text-red-600" />
          Vad är BAS-P (Byggarbetsmiljösamordnare Projektering)?
        </h2>
        
        <p className="text-lg text-stone-700 mb-6">
          BAS-P är en säkerhetssamordnare som arbetar under projekteringsfasen för att säkerställa att 
          arbetsmiljöaspekter beaktas redan från början. Rollen är avgörande för att skapa säkra 
          förutsättningar för det kommande byggarbetet.
        </p>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Lagkrav enligt AFS 1999:3</h3>
              <p className="text-red-700">
                BAS-P krävs för alla byggprojekt där fler än en entreprenör kommer att arbeta samtidigt 
                eller i följd på samma arbetsplats.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">BAS-P:s huvudansvar:</h3>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Riskbedömning:</strong> Identifiera och bedöma arbetsmiljörisker i projekteringsskedet</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Säkerhetsplan:</strong> Upprätta plan för säkerhet, hälsa och miljö</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Koordinering:</strong> Samordna säkerhetsaspekter mellan olika projektörer</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Dokumentation:</strong> Sammanställa säkerhets- och hälsoplanen</span>
          </li>
        </ul>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Users className="w-6 h-6 text-blue-600" />
          Vad är BAS-U (Byggarbetsmiljösamordnare Utförande)?
        </h2>

        <p className="text-lg text-stone-700 mb-6">
          BAS-U arbetar under byggfasen och ansvarar för att säkerhetsplanerna följs i praktiken. 
          Denna roll är kritisk för att upprätthålla en säker arbetsmiljö på byggarbetsplatsen.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">BAS-U:s huvudansvar:</h3>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Säkerhetskoordinering:</strong> Samordna säkerhetsarbetet mellan olika entreprenörer</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Kontroll:</strong> Övervaka att säkerhetsföreskrifter följs på arbetsplatsen</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Utbildning:</strong> Säkerställa att alla arbetare får nödvändig säkerhetsinformation</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Incidenthantering:</strong> Hantera och rapportera säkerhetsincidenter</span>
          </li>
        </ul>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <FileText className="w-6 h-6 text-purple-600" />
          Skillnader mellan BAS-P och BAS-U
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              BAS-P (Projektering)
            </h3>
            <ul className="space-y-2 text-red-700 text-sm">
              <li>• Arbetar under projekteringsfasen</li>
              <li>• Fokus på planering och förebyggande</li>
              <li>• Skapar säkerhets- och hälsoplaner</li>
              <li>• Identifierar risker i förväg</li>
              <li>• Samordnar mellan projektörer</li>
              <li>• Dokumenterar säkerhetsaspekter</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              BAS-U (Utförande)
            </h3>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• Arbetar under byggfasen</li>
              <li>• Fokus på praktisk säkerhet</li>
              <li>• Implementerar säkerhetsplaner</li>
              <li>• Övervakar daglig säkerhet</li>
              <li>• Samordnar mellan entreprenörer</li>
              <li>• Hanterar akuta säkerhetsfrågor</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-stone-800 mb-6">
          När krävs BAS-P respektive BAS-U?
        </h2>

        <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-amber-800 mb-4">Lagkrav enligt AFS 1999:3</h3>
          <p className="text-amber-700 mb-4">
            Både BAS-P och BAS-U krävs när:
          </p>
          <ul className="space-y-2 text-amber-700">
            <li>• Fler än en entreprenör arbetar på samma arbetsplats</li>
            <li>• Entreprenörer arbetar i följd på samma projekt</li>
            <li>• Projektet innebär särskilda risker</li>
            <li>• Byggherren bedömer att samordning behövs</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">Praktiska exempel:</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">BAS krävs</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Nybyggnation av villa med flera entreprenörer</li>
              <li>• Större renoveringar</li>
              <li>• Kommersiella byggnader</li>
              <li>• Industrianläggningar</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">BAS krävs ej</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Enkel renovering med en entreprenör</li>
              <li>• Mindre reparationsarbeten</li>
              <li>• Eget arbete utan entreprenörer</li>
              <li>• Mycket små projekt</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-stone-800 mb-6">
          Samarbete mellan BAS-P och BAS-U
        </h2>

        <p className="mb-4">
          För att säkerställa en smidig övergång från projektering till utförande är samarbetet 
          mellan BAS-P och BAS-U avgörande:
        </p>

        <div className="bg-stone-50 p-6 rounded-lg mb-8">
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Överlämning:</strong> BAS-P överlämnar säkerhets- och hälsoplanen till BAS-U</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Kontinuitet:</strong> Säkerställa att planerade säkerhetsåtgärder implementeras</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Uppdatering:</strong> BAS-U uppdaterar planer baserat på faktiska förhållanden</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Kommunikation:</strong> Löpande dialog om säkerhetsaspekter</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-3">Tobias Ytterman - Certifierad BAS-P och BAS-U</h3>
          <p className="text-blue-700 mb-3">
            Med över 20 års erfarenhet och certifiering inom både BAS-P och BAS-U kan jag erbjuda:
          </p>
          <ul className="space-y-2 text-blue-700">
            <li>• Komplett säkerhetssamordning från projektering till färdigställande</li>
            <li>• Djup förståelse för lokala förhållanden i Västernorrland</li>
            <li>• Digital dokumentation och effektiv kommunikation</li>
            <li>• Konkurrenskraftiga priser för både enskilda uppdrag och helhetslösningar</li>
          </ul>
        </div>
      </div>
    </GuideLayout>
  );
};

export default BasGuide;