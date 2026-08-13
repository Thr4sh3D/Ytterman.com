import { CheckCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { PRICING, formatSek } from '@/config/company';

const priceRows = Object.values(PRICING.ka);

const KontrollansvarigTimprisGuide = () => (
  <GuideLayout
    title={`Pris för kontrollansvarig ${PRICING.year}`}
    description="Yttermans paketpriser inklusive moms och vad du bör kontrollera när du jämför offerter."
    category="Kontrollansvarig"
    readTime="5 min"
    seoTitle={`Kontrollansvarig pris ${PRICING.year} – paket och villkor | Ytterman`}
    seoDescription={`Paketpriser ${PRICING.year} för kontrollansvarig: tillbyggnad, ombyggnation, fritidshus och paket med BAS-P/U. Alla belopp inklusive moms.`}
    keywords="kontrollansvarig pris, KA kostnad, fast pris kontrollansvarig, pris KA Västernorrland"
    canonicalPath="/guider/kontrollansvarig-timpris"
  >
    <div className="prose prose-lg max-w-none">
      <p className="lead">
        Ett KA-pris går bara att jämföra rättvist när omfattning, antal planerade besök,
        dokumentation och kompletteringsvillkor är tydliga. Ytterman publicerar därför
        paketpriser för definierade projekttyper.
      </p>

      <h2>Paketpriser {PRICING.year}</h2>
      <div className="my-8 overflow-hidden rounded-xl border border-slate-200 not-prose">
        <div className="grid grid-cols-3 bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
          <span>Projekttyp</span>
          <span>Bas</span>
          <span>Plus</span>
        </div>
        {priceRows.map((row) => (
          <div key={row.label} className="grid grid-cols-3 border-t border-slate-200 bg-white px-5 py-4 text-sm">
            <div>
              <p className="font-semibold text-slate-900">{row.label}</p>
              <p className="mt-1 text-xs text-slate-500">{row.description}</p>
            </div>
            <span className="font-semibold text-slate-800">{formatSek(row.bas)}</span>
            <span className="font-semibold text-slate-800">{formatSek(row.plus)}</span>
          </div>
        ))}
      </div>
      <p>Alla belopp ovan är inklusive moms.</p>

      <h2>Paket med KA och BAS-P/U</h2>
      <p>
        Ett kombinerat uppdrag ligger från {formatSek(PRICING.kaBasPackage.from)} till{' '}
        {formatSek(PRICING.kaBasPackage.to)} inklusive moms. Slutligt pris beror på vilka
        BAS-roller som ingår och projektets riskbild, byggtid och samordningsbehov.
      </p>

      <h2>Kompletteringar</h2>
      <div className="my-6 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-5 not-prose">
        <Info className="mt-0.5 h-6 w-6 shrink-0 text-amber-700" />
        <p className="text-amber-950">{PRICING.supplementRule}</p>
      </div>

      <h2>Kontrollera detta i offerten</h2>
      <ul className="not-prose my-6 space-y-3">
        {[
          'Vilka dokument och möten som ingår.',
          'Antal och syfte för planerade arbetsplatsbesök.',
          'Vilken dokumentation och vilket utlåtande KA ska lämna.',
          'Hur resor och eventuella resekostnader hanteras.',
          'Vad som räknas som en komplettering eller ändring.',
          'Vilka moment som ligger utanför KA-uppdraget.',
        ].map((item) => (
          <li key={item} className="flex gap-3 rounded-lg bg-slate-50 p-3 text-slate-700">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
            {item}
          </li>
        ))}
      </ul>

      <h2>KA och slutbesked</h2>
      <p>
        KA följer kontrollplanen och lämnar ett utlåtande som underlag. Byggherren begär
        slutbesked och byggnadsnämnden beslutar om det. En entreprenadrättslig
        slutbesiktning ingår inte automatiskt i KA-uppdraget.
      </p>

      <p>
        <Link to="/priser/">Se prissidan</Link> för paketens fullständiga innehåll och
        aktuell offertväg.
      </p>
    </div>
  </GuideLayout>
);

export default KontrollansvarigTimprisGuide;
