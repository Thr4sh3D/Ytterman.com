import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { BUSINESS_COPY } from '@/config/company';

const KontrollansvarigAnsvarGuide = () => (
  <GuideLayout
    title="Kontrollansvarigs roll och ansvar"
    description="En praktisk avgränsning av KA-rollen enligt PBL – och vad som fortfarande är byggherrens, entreprenörens och byggnadsnämndens ansvar."
    category="Kontrollansvarig"
    readTime="6 min"
    seoTitle="Kontrollansvarigs roll enligt PBL – ansvar och avgränsning | Ytterman"
    seoDescription="Guide till kontrollansvarigs uppgifter: kontrollplan, uppföljning, avvikelser och utlåtande inför slutbesked."
    keywords="kontrollansvarig ansvar, KA roll, PBL kontrollplan, kontrollansvarigs utlåtande, slutbesked"
    canonicalPath="/guider/kontrollansvarig-ansvar"
  >
    <div className="prose prose-lg max-w-none">
      <p className="lead">{BUSINESS_COPY.kaScope}</p>

      <h2>Det här ingår i KA-rollen</h2>
      <ul className="not-prose my-6 space-y-3">
        {[
          'Medverka till ett förslag till kontrollplan och se till att nödvändiga kontroller identifieras.',
          'Närvara vid tekniskt samråd, byggnadsnämndens arbetsplatsbesök och andra tillfällen som hör till uppdraget.',
          'Följa att kontrollplanen samt relevanta villkor och bestämmelser beaktas i projektet.',
          'Informera byggherren och vid behov byggnadsnämnden om avvikelser som inte rättas.',
          'Lämna ett utlåtande till byggherren och byggnadsnämnden som underlag inför slutbesked.',
        ].map((item) => (
          <li key={item} className="flex gap-3 rounded-lg bg-green-50 p-4 text-green-950">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
            {item}
          </li>
        ))}
      </ul>

      <h2>Det här följer inte automatiskt med</h2>
      <ul className="not-prose my-6 space-y-3">
        {[
          'Att ta över byggherrens övergripande ansvar för att regler och beslut följs.',
          'Att vara projektör, byggledare eller ansvarig för entreprenörernas utförande.',
          'Att utföra en entreprenadrättslig slutbesiktning av avtalets uppfyllelse.',
          'Att utfärda eller besluta om slutbesked – det gör byggnadsnämnden.',
        ].map((item) => (
          <li key={item} className="flex gap-3 rounded-lg bg-red-50 p-4 text-red-950">
            <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
            {item}
          </li>
        ))}
      </ul>

      <h2>Tekniskt samråd</h2>
      <p>
        Byggnadsnämnden kallar normalt till och leder det tekniska samrådet. KA deltar,
        redovisar förslaget till kontrollplan och bidrar med underlag inom sitt uppdrag.
        Läs mer i vår <Link to="/guider/tekniskt-samrad/">guide om tekniskt samråd</Link>.
      </p>

      <h2>När en avvikelse upptäcks</h2>
      <p>
        KA dokumenterar avvikelsen och informerar byggherren. Om avvikelsen inte rättas
        ska byggnadsnämnden underrättas enligt reglerna för KA-uppdraget. Vem som får
        stoppa arbete eller besluta om en avtalsrättslig åtgärd beror på avtal och roll;
        det följer inte automatiskt av KA-uppdraget.
      </p>

      <div className="my-8 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-5 not-prose">
        <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-700" />
        <p className="text-amber-950">
          Den exakta ansvarsfördelningen kan påverkas av projektets avtal och beslut.
          Använd juridisk rådgivning för avtals- eller skadeståndsfrågor; denna guide är
          generell information om KA-rollen.
        </p>
      </div>

      <h2>Inför slutbesked</h2>
      <p>
        KA sammanställer sin uppföljning och lämnar ett utlåtande. Byggherren lämnar det
        efterfrågade underlaget och begär att byggnadsnämnden prövar slutbeskedet.
        <Link to="/guider/slutbesked/"> Läs mer om slutbeskedets roller och underlag.</Link>
      </p>
    </div>
  </GuideLayout>
);

export default KontrollansvarigAnsvarGuide;
