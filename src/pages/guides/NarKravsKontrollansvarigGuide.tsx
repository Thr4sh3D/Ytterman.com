import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { GuideLayout } from '@/components/GuideLayout';
import { OFFICIAL_SOURCES } from '@/config/officialSources';

const NarKravsKontrollansvarigGuide = () => (
  <GuideLayout
    title="När krävs en kontrollansvarig?"
    description="Kort svar om huvudregeln, undantag och vem som avgör om ett byggprojekt behöver en kontrollansvarig."
    category="Kontrollansvarig"
    readTime="4 min"
    seoTitle="När krävs kontrollansvarig? Huvudregel och undantag | Ytterman"
    seoDescription="Kontrollansvarig krävs för många lov- och anmälningspliktiga åtgärder, men undantag finns. Byggnadsnämnden avgör det enskilda ärendet."
    keywords="när krävs kontrollansvarig, behövs KA, kontrollansvarig bygglov, undantag kontrollansvarig"
    canonicalPath="/guider/nar-kravs-kontrollansvarig"
    sources={[OFFICIAL_SOURCES.boverketControlManager]}
  >
    <div className="prose prose-stone max-w-none">
      <h2>Kort svar</h2>
      <p className="text-lg font-medium text-stone-700">
        En certifierad kontrollansvarig krävs för många åtgärder som behöver lov eller anmälan.
        Undantag finns för vissa enklare åtgärder. Det är byggnadsnämnden som avgör om KA behövs
        och vilken behörighet projektet kräver.
      </p>

      <div className="not-prose my-8 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-5">
        <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-700" aria-hidden="true" />
        <p className="text-amber-950">
          En generell webbsida kan inte ersätta kommunens bedömning. Kontrollera alltid beskedet för
          den aktuella fastigheten och åtgärden innan du beställer ett KA-uppdrag.
        </p>
      </div>

      <h2>Så får du ett säkert besked</h2>
      <ol>
        <li>Beskriv åtgärden och fastigheten för kommunens byggnadsnämnd.</li>
        <li>Fråga om lov eller anmälan behövs och om ärendet kräver kontrollansvarig.</li>
        <li>Be kommunen bekräfta vilken behörighetsnivå, N eller K, som är relevant.</li>
        <li>Ange föreslagen KA i ansökan eller anmälan enligt kommunens instruktion.</li>
      </ol>

      <h2>Underlag för en första KA-bedömning</h2>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        {[
          'Kommun och fastighetsbeteckning',
          'Typ av åtgärd och ungefärlig storlek',
          'Ritningar eller skisser som redan finns',
          'Kommunens besked och preliminär tidplan',
        ].map((item) => (
          <div key={item} className="flex items-start gap-2 rounded-lg border bg-white p-4 text-stone-700">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>

      <h2>Vad händer om KA krävs?</h2>
      <p>
        Den kontrollansvarige biträder byggherren med förslag till kontrollplan, följer upp att
        nödvändiga kontroller görs, genomför dokumenterade byggplatsbesök och lämnar sitt utlåtande
        som underlag inför slutbesked. Läs mer om <Link to="/guider/kontrollansvarig/">KA:s roll</Link>,{' '}
        <Link to="/guider/kontrollansvarig-certifiering/">skillnaden mellan behörighet N och K</Link>{' '}
        och <Link to="/priser/">priser och offertunderlag</Link>.
      </p>
    </div>
  </GuideLayout>
);

export default NarKravsKontrollansvarigGuide;
