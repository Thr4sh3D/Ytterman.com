import { Link } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';
import { GuideLayout } from '@/components/GuideLayout';
import { BUSINESS_COPY, COMPANY, KA_CERT, SERVICES } from '@/config/company';

const KontrollansvarigGuide = () => (
  <GuideLayout
    title="Kontrollansvarigs roll i byggprocessen"
    description="Guide till kontrollplan, uppföljning, arbetsplatsbesök och utlåtande inför slutbesked."
    category="Kontrollansvarig"
    readTime="6 min"
    seoTitle="Kontrollansvarig – roll och ansvar enligt PBL | Ytterman"
    seoDescription="Guide till kontrollansvarigs uppgifter och rollfördelningen mellan KA, byggherre och byggnadsnämnd."
    keywords="kontrollansvarig, KA, PBL, kontrollplan, tekniskt samråd, arbetsplatsbesök, slutbesked"
    canonicalPath="/guider/kontrollansvarig"
  >
    <div className="prose prose-stone max-w-none">
      <p className="text-lg font-medium text-stone-700">{BUSINESS_COPY.kaScope}</p>

      <h2>När behövs en kontrollansvarig?</h2>
      <p>
        Byggnadsnämnden avgör om projektet kräver KA. Kravet är vanligt i lov- och
        anmälningspliktiga projekt, men undantag finns. Följ kommunens besked för det enskilda ärendet
        och kontrollera att den föreslagna personen har rätt behörighet.
      </p>

      <h2>Moment som kan ingå</h2>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        {SERVICES.kontrollansvarig.features.map((feature) => (
          <div key={feature} className="flex items-start gap-2 rounded-lg border bg-white p-4">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
            <span className="text-stone-700">{feature}</span>
          </div>
        ))}
      </div>

      <h2>Det här är inte automatiskt KA:s uppgift</h2>
      <div className="not-prose my-6 space-y-3">
        {[
          'Att projektera eller ta över projektörernas tekniska ansvar.',
          'Att leda entreprenaden eller ta över entreprenörernas egenkontroller.',
          'Att utföra entreprenadrättslig slutbesiktning av kontraktets uppfyllelse.',
          'Att utfärda start- eller slutbesked – det gör byggnadsnämnden.',
        ].map((item) => (
          <div key={item} className="flex items-start gap-2 rounded-lg bg-red-50 p-4 text-red-950">
            <XCircle className="mt-0.5 h-5 w-5 shrink-0" />
            {item}
          </div>
        ))}
      </div>

      <h2>En tydlig process</h2>
      <ol>
        <li>Byggherren beskriver projektet och byggnadsnämndens krav.</li>
        <li>KA bedömer behörighet, omfattning, kontrollbehov och offert.</li>
        <li>Ett förslag till kontrollplan tas fram och nämnden fastställer planen i startbeskedet.</li>
        <li>KA följer kontrollerna och gör avtalade arbetsplatsbesök.</li>
        <li>KA dokumenterar avvikelser och lämnar utlåtande som underlag inför slutbesked.</li>
      </ol>

      <h2>Yttermans behörighet</h2>
      <p>
        {KA_CERT.issuer}, certifikat <strong>{KA_CERT.certificateNumber}</strong>,{' '}
        {KA_CERT.authorizationLabel.toLowerCase()}, giltigt till {KA_CERT.validUntil}.{' '}
        <Link to="/guider/kontrollansvarig-certifiering/">Se verifieringsguiden</Link>.
      </p>
      <p>
        {COMPANY.experienceLabel} i byggbranschen. Tillgänglighet, resor, platsbesök och tidplan
        bekräftas i offerten för det aktuella projektet.
      </p>
    </div>
  </GuideLayout>
);

export default KontrollansvarigGuide;
