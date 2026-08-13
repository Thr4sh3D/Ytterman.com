import { AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { BAS, BUSINESS_COPY } from '@/config/company';

const mistakes = [
  {
    title: 'Att blanda ihop lov och startbesked',
    text: 'Ett lov är inte ett generellt klartecken att börja bygga. Läs beslutet och invänta nödvändigt startbesked för den del som ska påbörjas.',
  },
  {
    title: 'Att vänta med kontrollansvarig och kontrollplan',
    text: 'Kontrollera tidigt om nämnden kräver KA. Ett projektspecifikt förslag till kontrollplan behöver bygga på åtgärdens risker och tillräckligt tekniskt underlag.',
  },
  {
    title: 'Att lämna generella eller ofullständiga handlingar',
    text: 'Ritningar, beskrivningar och utredningar måste motsvara projektet och kommunens begäran. Projektörer ansvarar för sina tekniska lösningar och kontroller.',
  },
  {
    title: 'Att missa rollfördelningen för arbetsmiljö',
    text: `Byggherren ska utse lämplig BAS-P och BAS-U för projektets skeden. Roller, mandat, resurser och överlämning ska planeras utifrån bland annat ${BAS.regulation}.`,
  },
  {
    title: 'Att ändra utan att hantera följderna',
    text: 'Ändringar kan påverka lov, tekniska lösningar, riskbedömning, kontrollplan, kostnad och tidplan. Stäm av ändringen med berörda projektörer, KA och byggnadsnämnd innan arbetet går vidare.',
  },
  {
    title: 'Att sakna spårbar dokumentation',
    text: 'Kontrollpunkter ska utföras och dokumenteras av de personer som anges i kontrollplanen. Spara efterfrågade intyg, protokoll, foton och avvikelsehantering strukturerat.',
  },
  {
    title: 'Att blanda ihop KA-utlåtande och slutbesked',
    text: 'KA lämnar eget utlåtande som underlag. Byggherren lämnar efterfrågade handlingar och byggnadsnämnden beslutar om slutbesked.',
  },
];

const BygglovsguideVanligaMisstag = () => (
  <GuideLayout
    title="Bygglovsguide – vanliga misstag att förebygga"
    description="En praktisk checklista för beslut, roller, underlag, kontrollplan och dokumentation i byggprocessen."
    category="Bygglov"
    readTime="7 min"
    seoTitle="Bygglovsguide – vanliga misstag och rollfördelning | Ytterman"
    seoDescription="Undvik missförstånd om lov, startbesked, kontrollansvarig, BAS, kontrollplan, ändringar och slutbesked."
    keywords="bygglovsguide, vanliga misstag byggprojekt, startbesked, kontrollplan, kontrollansvarig, BAS-P, BAS-U, slutbesked"
    canonicalPath="/guider/bygglovsguide-vanliga-misstag-husbygge"
  >
    <div className="prose prose-stone max-w-none">
      <p className="text-lg font-medium text-stone-700">
        Kommunens beslut, fastighetens förutsättningar och projektets tekniska underlag styr processen.
        Checklistan är generell information och ersätter inte besked från byggnadsnämnden eller
        projektspecifik rådgivning.
      </p>

      <div className="not-prose my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-700" />
          <p className="text-amber-950">
            Börja inte en lov- eller anmälningspliktig åtgärd innan det nödvändiga startbeskedet
            gäller för arbetet. Kontrollera alltid beslutets omfattning och villkor.
          </p>
        </div>
      </div>

      <h2>Sju vanliga missförstånd</h2>
      <div className="not-prose my-6 space-y-4">
        {mistakes.map((mistake, index) => (
          <section key={mistake.title} className="rounded-xl border bg-white p-5">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 font-semibold text-red-800">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-stone-900">{mistake.title}</h3>
                <p className="mt-1 text-stone-700">{mistake.text}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <h2>Kontroll före byggstart</h2>
      <ul className="not-prose my-6 space-y-3">
        {[
          'Bekräfta vilka lov, anmälningar och beslut som krävs.',
          'Kontrollera om KA krävs och om certifikatets behörighet passar projektets art.',
          'Säkerställ att tekniska handlingar och projektörsansvar är tydliga.',
          'Utse BAS-P och BAS-U och dokumentera roller, mandat och överlämning.',
          'Lämna projektspecifikt förslag till kontrollplan och övriga begärda handlingar.',
          'Planera dokumentation, avvikelsehantering och underlag inför slutbesked.',
        ].map((item) => (
          <li key={item} className="flex gap-3 rounded-lg bg-green-50 p-4 text-green-950">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
            {item}
          </li>
        ))}
      </ul>

      <h2>Kontrollansvarigs avgränsning</h2>
      <p>{BUSINESS_COPY.kaScope}</p>
      <p>
        KA ersätter inte projektörernas tekniska ansvar, entreprenörernas utförandeansvar,
        byggherrens övergripande ansvar eller en separat entreprenadrättslig slutbesiktning.
      </p>

      <p>
        Läs vidare om <Link to="/guider/bygglov/">bygglovsprocessen</Link>,{' '}
        <Link to="/guider/kontrollplan/">kontrollplanen</Link> och{' '}
        <Link to="/guider/slutbesked/">slutbeskedet</Link>.
      </p>
    </div>
  </GuideLayout>
);

export default BygglovsguideVanligaMisstag;
