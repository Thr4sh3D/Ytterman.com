import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { GuideLayout } from '@/components/GuideLayout';
import { BAS, SERVICES } from '@/config/company';

const BasPGuideExtended = () => (
  <GuideLayout
    title="BAS-P – arbetsmiljösamordning under projektering"
    description="Praktisk guide till BAS-P:s uppgifter, gränser och överlämning till utförandet."
    category="Arbetsmiljö"
    readTime="6 min"
    seoTitle="BAS-P guide – projektering enligt AFS 2023:3 | Ytterman"
    seoDescription="BAS-P-guide om riskarbete, projekteringssamordning, arbetsmiljöplan och överlämning enligt AFS 2023:3."
    keywords="BAS-P, byggarbetsmiljösamordnare projektering, arbetsmiljöplan, riskbedömning, AFS 2023:3"
    canonicalPath="/guider/bas-p-guide"
  >
    <div className="prose prose-stone max-w-none">
      <p className="text-lg font-medium text-stone-700">
        BAS-P samordnar arbetsmiljöfrågorna medan projektet planeras och projekteras. Målet är att
        risker ska förebyggas i val av utformning, metod, logistik och tidplan innan utförandet börjar.
      </p>

      <h2>Uppgifter som kan ingå</h2>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        {SERVICES.basP.features.map((feature) => (
          <div key={feature} className="flex items-start gap-2 rounded-lg border bg-white p-4">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
            <span className="text-stone-700">{feature}</span>
          </div>
        ))}
      </div>

      <h2>Det här övertar inte BAS-P</h2>
      <ul>
        <li>Projektörernas ansvar för arbetsmiljörisker i de egna lösningarna.</li>
        <li>Byggherrens övergripande ansvar och skyldighet att ge rollen resurser och mandat.</li>
        <li>Entreprenörernas arbetsgivaransvar eller ansvar för säkra arbetsmetoder.</li>
        <li>Kontrollansvarigs separata uppgifter enligt PBL.</li>
      </ul>

      <div className="not-prose my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
          <p className="text-amber-950">
            Arbetsmiljöplan ska tas fram när reglerna kräver det. Projektets storlek eller antal
            företag får inte ensamt ersätta den projektspecifika bedömningen.
          </p>
        </div>
      </div>

      <h2>Överlämning till BAS-U</h2>
      <p>
        Risker, valda åtgärder, kvarstående frågor och arbetsmiljöplan lämnas över på ett strukturerat
        sätt. BAS-U behöver samtidigt få mandat, tid och aktuell information för utförandeskedet.
        Läs även <Link to="/guider/bas-u-guide/">guiden om BAS-U</Link>.
      </p>

      <h2>Kompetens och offert</h2>
      <p>
        {BAS.qualificationLabel}. Rollen utförs utifrån utbildning, kompetens och erfarenhet samt
        aktuellt regelverk {BAS.regulation}. Omfattning och pris bekräftas efter genomgång av projektet.
      </p>
    </div>
  </GuideLayout>
);

export default BasPGuideExtended;
