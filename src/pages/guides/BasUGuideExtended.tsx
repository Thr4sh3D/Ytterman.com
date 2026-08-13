import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { GuideLayout } from '@/components/GuideLayout';
import { BAS, SERVICES } from '@/config/company';

const BasUGuideExtended = () => (
  <GuideLayout
    title="BAS-U – arbetsmiljösamordning under utförandet"
    description="Praktisk guide till BAS-U:s samordning, uppföljning och ansvar under byggskedet."
    category="Arbetsmiljö"
    readTime="6 min"
    seoTitle="BAS-U guide – utförande enligt AFS 2023:3 | Ytterman"
    seoDescription="BAS-U-guide om samordning, arbetsmiljöplan, riskuppföljning och ansvarsfördelning enligt AFS 2023:3."
    keywords="BAS-U, byggarbetsmiljösamordnare utförande, arbetsmiljöplan, byggarbetsplats, AFS 2023:3"
    canonicalPath="/guider/bas-u-guide"
  >
    <div className="prose prose-stone max-w-none">
      <p className="text-lg font-medium text-stone-700">
        BAS-U samordnar arbetsmiljöarbetet när bygg- eller anläggningsarbetet utförs. Aktiviteter,
        närvaro och uppföljning ska dimensioneras efter projektets skeden och verkliga riskbild.
      </p>

      <h2>Uppgifter som kan ingå</h2>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        {SERVICES.basU.features.map((feature) => (
          <div key={feature} className="flex items-start gap-2 rounded-lg border bg-white p-4">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
            <span className="text-stone-700">{feature}</span>
          </div>
        ))}
      </div>

      <h2>Inför byggstart</h2>
      <ul>
        <li>Bekräfta vem som är BAS-U samt rollens mandat, tid och resurser.</li>
        <li>Ta emot projekteringsunderlag, kvarstående risker och aktuell arbetsmiljöplan.</li>
        <li>Planera introduktion, samordning, riskuppföljning och avvikelsehantering.</li>
        <li>Gör ansvar och kommunikationsvägar tydliga för samtliga aktörer.</li>
      </ul>

      <div className="not-prose my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
          <p className="text-amber-950">
            BAS-U övertar inte arbetsgivarnas ansvar för den egna personalen, utrustningen eller
            arbetsmetoderna. Brister ska hanteras enligt projektets rutiner och rollens faktiska mandat.
          </p>
        </div>
      </div>

      <h2>Besök och dokumentation</h2>
      <p>
        Det finns ingen lämplig standardfrekvens som passar alla projekt. Platsbesök, möten,
        säkerhetsronder och dokumentation ska kopplas till risker och produktionens skeden och anges
        i uppdraget.
      </p>

      <h2>Kompetens och offert</h2>
      <p>
        {BAS.qualificationLabel}. Rollen utförs utifrån utbildning, kompetens och erfarenhet samt
        aktuellt regelverk {BAS.regulation}. Omfattning och pris bekräftas efter genomgång av projektet.
        Se även <Link to="/bas-u/">Yttermans BAS-U-tjänst</Link>.
      </p>
    </div>
  </GuideLayout>
);

export default BasUGuideExtended;
