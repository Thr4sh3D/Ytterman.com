import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { CheckCircle, AlertTriangle, FileText, Clock, MapPin } from 'lucide-react';

const BygglovGuide = () => {
  return (
    <GuideLayout
      title="Bygglovsprocessen i Västernorrland"
      description="Steg-för-steg guide genom bygglovsprocessen för kommunerna i Västernorrland."
      category="Bygglov"
      readTime="10 min"
      seoTitle="Bygglov Guide Västernorrland - Sundsvall, Härnösand | Ytterman"
      seoDescription="Komplett guide för bygglovsprocessen i Västernorrlands kommuner. Handläggningstider, krav och tips från expert Tobias Ytterman."
      keywords="bygglov, Västernorrland, Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå, bygglovsansökan"
      canonicalPath="/guider/bygglov"
    >
      <div className="prose prose-stone max-w-none">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <FileText className="w-6 h-6 text-green-600" />
          Förberedelser inför bygglovsansökan
        </h2>
        
        <p className="text-lg text-stone-700 mb-6">
          En välförberedd bygglovsansökan är nyckeln till en smidig process. Genom att ha alla 
          handlingar i ordning från början undviker du förseningar och kompletteringskrav.
        </p>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Professionell hjälp lönar sig</h3>
              <p className="text-green-700">
                Med över 20 års erfarenhet i byggbranschen som certifierad <Link to="/kontrollansvarig" className="text-green-800 hover:text-green-900 font-medium underline">kontrollansvarig</Link> (KA enligt PBL) hjälper jag dig navigera bygglovsprocessen effektivt 
                och undvika vanliga fallgropar som kan förlänga handläggningstiden.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-4">Grundläggande förberedelser:</h3>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Kontrollera detaljplan:</strong> Undersök vad som är tillåtet på din fastighet</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Grannskapskontroll:</strong> Informera grannar i god tid innan ansökan</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Mät upp fastigheten:</strong> Säkerställ korrekta mått och avstånd</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong>Kontakta VA-huvudman:</strong> Kontrollera möjligheter för vatten och avlopp</span>
          </li>
        </ul>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <FileText className="w-6 h-6 text-blue-600" />
          Nödvändiga handlingar
        </h2>

        <p className="mb-4">
          En komplett bygglovsansökan kräver flera olika handlingar. Här är en checklista 
          över vad som vanligtvis behövs:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-4">Grundläggande handlingar</h3>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• Ansökningsblankett (ifylld och undertecknad)</li>
              <li>• Situationsplan (skala 1:400 eller 1:1000)</li>
              <li>• Planritningar (skala 1:100)</li>
              <li>• Fasadritningar (skala 1:100)</li>
              <li>• Sektionsritningar (skala 1:100)</li>
              <li>• Teknisk beskrivning</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="font-semibold text-amber-800 mb-4">Kompletterande handlingar</h3>
            <ul className="space-y-2 text-amber-700 text-sm">
              <li>• Konstruktionsritningar (vid behov)</li>
              <li>• Energiberäkning</li>
              <li>• Geoteknisk utredning (vid behov)</li>
              <li>• Miljöutredning (vid behov)</li>
              <li>• Brandskyddsbeskrivning</li>
              <li>• Kontrollplan (upprättas av <Link to="/kontrollansvarig" className="text-amber-800 hover:text-amber-900 font-medium underline">kontrollansvarig</Link>)</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-amber-800 mb-3">Tips för bättre ritningar</h3>
          <ul className="space-y-2 text-amber-700">
            <li>• Använd tydliga mått och beskrivningar</li>
            <li>• Markera alla fönster och dörrar</li>
            <li>• Ange material och färger</li>
            <li>• Visa befintliga byggnader och anläggningar</li>
            <li>• Inkludera höjdangivelser</li>
          </ul>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <MapPin className="w-6 h-6 text-red-600" />
          Kommunala skillnader i Västernorrland
        </h2>

        <p className="mb-6">
          Varje kommun i Västernorrland har sina egna rutiner och krav. Här är en översikt 
          över de största kommunerna:
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-white border border-stone-200 p-6 rounded-lg">
            <h3 className="font-semibold text-stone-800 mb-3 flex items-center">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              Sundsvalls kommun
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-stone-700 mb-2">Särskilda krav:</h4>
                <ul className="text-sm text-stone-600 space-y-1">
                  <li>• Stenstadsområdet har särskilda bestämmelser</li>
                  <li>• Krav på kulturhistorisk hänsyn</li>
                  <li>• Detaljerade fasadritningar krävs ofta</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-stone-700 mb-2">Handläggningstid:</h4>
                <p className="text-sm text-stone-600">6-10 veckor för standardärenden</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-stone-200 p-6 rounded-lg">
            <h3 className="font-semibold text-stone-800 mb-3 flex items-center">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              Härnösands kommun
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-stone-700 mb-2">Särskilda krav:</h4>
                <ul className="text-sm text-stone-600 space-y-1">
                  <li>• Världsarvsområdet har strikta regler</li>
                  <li>• Krav på traditionella material</li>
                  <li>• Höjdbegränsningar i centrala delar</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-stone-700 mb-2">Handläggningstid:</h4>
                <p className="text-sm text-stone-600">8-12 veckor för standardärenden</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-stone-200 p-6 rounded-lg">
            <h3 className="font-semibold text-stone-800 mb-3 flex items-center">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              Sollefteå, Kramfors & Timrå
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-stone-700 mb-2">Särskilda krav:</h4>
                <ul className="text-sm text-stone-600 space-y-1">
                  <li>• Generellt mer flexibla regler</li>
                  <li>• Fokus på praktiska lösningar</li>
                  <li>• Mindre byråkrati för mindre projekt</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-stone-700 mb-2">Handläggningstid:</h4>
                <p className="text-sm text-stone-600">4-8 veckor för standardärenden</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Clock className="w-6 h-6 text-amber-600" />
          Handläggningstider
        </h2>

        <p className="mb-4">
          Handläggningstiderna varierar beroende på projektets komplexitet och kommunens arbetsbelastning:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-green-800 mb-2">Enkla projekt</h3>
            <p className="text-2xl font-bold text-green-600 mb-2">4-6 veckor</p>
            <p className="text-sm text-green-700">Mindre tillbyggnader, carport, förråd</p>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-amber-800 mb-2">Medelkomplexa</h3>
            <p className="text-2xl font-bold text-amber-600 mb-2">6-10 veckor</p>
            <p className="text-sm text-amber-700">Villor, större tillbyggnader</p>
          </div>
          
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
            <h3 className="font-semibold text-red-800 mb-2">Komplexa projekt</h3>
            <p className="text-2xl font-bold text-red-600 mb-2">10-16 veckor</p>
            <p className="text-sm text-red-700">Flerbostadshus, kommersiella byggnader</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-stone-800 mb-6">
          Vanliga fallgropar att undvika
        </h2>

        <div className="space-y-4 mb-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-semibold text-red-800 mb-2">Ofullständiga handlingar</h3>
            <p className="text-red-700 text-sm">
              Den vanligaste orsaken till förseningar. Kontrollera att alla ritningar är kompletta 
              och att tekniska beskrivningar är detaljerade.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-semibold text-red-800 mb-2">Bristande grannskapskontakt</h3>
            <p className="text-red-700 text-sm">
              Informera grannar i god tid. Invändningar från grannar kan förlänga processen avsevärt.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-semibold text-red-800 mb-2">Felaktiga mått och avstånd</h3>
            <p className="text-red-700 text-sm">
              Kontrollera alla mått noggrant. Fel avstånd till tomtgränser är en vanlig orsak 
              till avslag eller krav på ändringar.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-semibold text-red-800 mb-2">Ignorera lokala bestämmelser</h3>
            <p className="text-red-700 text-sm">
              Varje kommun har sina egna regler. Det som fungerar i en kommun kanske inte 
              godkänns i en annan.
            </p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-3">Låt mig hjälpa dig med bygglovet</h3>
          <p className="text-green-700 mb-3">
            Med djup kunskap om alla kommuner i Västernorrland kan jag hjälpa dig:
          </p>
          <ul className="space-y-2 text-green-700">
            <li>• Förbereda kompletta bygglovshandlingar</li>
            <li>• Navigera lokala bestämmelser och krav</li>
            <li>• Undvika vanliga fallgropar som försenar processen</li>
            <li>• Kommunicera effektivt med bygglovsmyndigheten</li>
            <li>• Hantera eventuella kompletteringskrav</li>
            <li>• Samordna med <Link to="/bas-p" className="text-green-800 hover:text-green-900 font-medium underline">BAS-P</Link> och <Link to="/bas-u" className="text-green-800 hover:text-green-900 font-medium underline">BAS-U</Link> för arbetsmiljö</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-green-300">
            <Link to="/kontakt" className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-semibold">
              Få hjälp med ditt bygglov →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200">
          <h3 className="text-xl font-semibold text-stone-800 mb-4">Relaterade guider</h3>
          <ul className="space-y-2 text-stone-700">
            <li>• <Link to="/guider/kontrollansvarig" className="text-amber-600 hover:text-amber-700 font-medium underline">Kontrollansvarig Guide - Allt du behöver veta</Link></li>
            <li>• <Link to="/guider/kvalitetskontroll" className="text-amber-600 hover:text-amber-700 font-medium underline">Kvalitetskontroll i byggprojekt</Link></li>
            <li>• <Link to="/guider/bas" className="text-amber-600 hover:text-amber-700 font-medium underline">BAS-P och BAS-U: Säkerhetssamordning</Link></li>
          </ul>
        </div>
      </div>
    </GuideLayout>
  );
};

export default BygglovGuide;