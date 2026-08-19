import { ExternalLink, ShieldCheck } from 'lucide-react';
import { GuideLayout } from '@/components/GuideLayout';
import { COMPANY, KA_CERT } from '@/config/company';
import { OFFICIAL_SOURCES } from '@/config/officialSources';

const KontrollansvarigCertifieringGuide = () => (
  <GuideLayout
    title="Behörighet N och K för kontrollansvarig"
    description="Så kontrollerar du certifikat, behörighet, certifieringsorgan och giltighetstid för en KA."
    category="Kontrollansvarig"
    readTime="5 min"
    seoTitle="Kontrollansvarig certifiering – verifiera KA | Ytterman"
    seoDescription="Guide till hur du verifierar en kontrollansvarigs certifikat, behörighet och giltighetstid. Tobias Ytterman: Kiwa KA11926, behörighet N."
    keywords="kontrollansvarig certifiering, KA certifikat, Kiwa KA11926, behörighet N, certifierad kontrollansvarig"
    canonicalPath="/guider/kontrollansvarig-certifiering"
    sources={[OFFICIAL_SOURCES.boverketControlManager, OFFICIAL_SOURCES.boverketCertificationRules]}
  >
    <div className="prose prose-stone max-w-none">
      <p className="text-lg font-medium text-stone-700">
        När ett projekt kräver kontrollansvarig ska personen vara certifierad och ha en behörighet
        som motsvarar projektets art. Kontrollera alltid originaluppgifterna hos certifieringsorganet.
      </p>

      <h2>Fyra uppgifter att kontrollera</h2>
      <ol>
        <li><strong>Person:</strong> att namnet på certifikatet stämmer med den föreslagna KA:n.</li>
        <li><strong>Certifieringsorgan:</strong> vem som har utfärdat och förvaltar certifikatet.</li>
        <li><strong>Behörighet:</strong> vilken typ av projekt certifikatet omfattar.</li>
        <li><strong>Giltighet:</strong> att certifikatet gäller när uppdraget ska utföras.</li>
      </ol>

      <h2>Tobias Yttermans verifierade certifikat</h2>
      <div className="not-prose my-6 rounded-xl border border-green-200 bg-green-50 p-6">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-green-800" />
          <dl className="grid gap-2 text-stone-800 sm:grid-cols-[12rem_1fr]">
            <dt className="font-semibold">Titel</dt><dd>{KA_CERT.title}</dd>
            <dt className="font-semibold">Certifieringsorgan</dt><dd>{KA_CERT.issuer}</dd>
            <dt className="font-semibold">Certifikatsnummer</dt><dd>{KA_CERT.certificateNumber}</dd>
            <dt className="font-semibold">Behörighet</dt><dd>{KA_CERT.authorizationLabel}</dd>
            <dt className="font-semibold">Giltigt till</dt><dd>{KA_CERT.validUntil}</dd>
          </dl>
        </div>
        <a
          href={KA_CERT.verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-green-900 underline"
        >
          Kontrollera hos Kiwa <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <h2>Kort svar: skillnaden mellan N och K</h2>
      <p>
        Behörighet N gäller projekt av normal art. Behörighet K gäller projekt av komplicerad art.
        Boverkets föreskrift ger vägledande exempel, men projektets faktiska kontrollbehov kan göra
        att en annan behörighetsnivå krävs. Byggnadsnämnden prövar frågan i det enskilda ärendet.
      </p>
      <p>
        Tobias har behörighet N. Den ska inte beskrivas som obegränsad eller ”fullständig”, och
        projektets art behöver bedömas innan uppdraget bekräftas.
      </p>

      <h2>Certifiering är inte samma sak som BAS-kompetens</h2>
      <p>
        KA-certifikatet gäller kontrollansvarig enligt PBL. BAS-P och BAS-U är separata roller som
        ska beskrivas genom utbildning, kompetens och erfarenhet, inte läggas till som credential i
        KA-certifikatet.
      </p>

      <p>
        {COMPANY.experienceLabel} i byggbranschen och anslutning till {COMPANY.affiliation.name} är
        separata uppgifter om erfarenhet och branschanknytning. De ändrar inte certifikatets behörighetsgräns.
      </p>
    </div>
  </GuideLayout>
);

export default KontrollansvarigCertifieringGuide;
