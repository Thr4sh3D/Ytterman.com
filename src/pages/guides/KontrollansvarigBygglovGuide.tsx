import { AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { BUSINESS_COPY, COMPANY, KA_CERT, PRICE_LABELS, PRICING } from '@/config/company';

const processSteps = [
  {
    title: 'Kontrollera projektets behov',
    text: 'Huvudregeln är att kontroll som omfattas av en kontrollplan ska ha en eller flera kontrollansvariga. Det finns undantag för vissa mindre åtgärder. Byggnadsnämnden avgör vad som gäller i ärendet.',
  },
  {
    title: 'Föreslå rätt person',
    text: 'Byggherren föreslår en certifierad kontrollansvarig med lämplig behörighet och självständig ställning i förhållande till den som utför åtgärden. Nämnden hanterar rollen i ärendet.',
  },
  {
    title: 'Ta fram underlag',
    text: 'KA biträder byggherren med att upprätta ett projektspecifikt förslag till kontrollplan. Projektörer och sakkunniga ansvarar för sina tekniska handlingar och kontroller.',
  },
  {
    title: 'Tekniskt samråd och startbesked',
    text: 'Byggnadsnämnden kallar till tekniskt samråd när förutsättningarna i PBL är uppfyllda. Nämnden går igenom underlagen och prövar sedan om startbesked kan ges.',
  },
  {
    title: 'Uppföljning under byggtiden',
    text: 'KA följer upp kontrollplanen och gällande villkor, närvarar vid de tillfällen som hör till uppdraget, hanterar avvikelser enligt sin roll och dokumenterar sina byggplatsbesök.',
  },
  {
    title: 'Underlag inför slutbesked',
    text: 'KA lämnar eget utlåtande till byggherren och byggnadsnämnden. Byggherren lämnar efterfrågade handlingar och byggnadsnämnden prövar och beslutar om slutbesked.',
  },
];

const KontrollansvarigBygglovGuide = () => (
  <GuideLayout
    title="Kontrollansvarig i bygglovsprocessen"
    description="Rollfördelningen från första underlag till byggnadsnämndens beslut om slutbesked."
    category="Kontrollansvarig"
    readTime="7 min"
    seoTitle="Kontrollansvarig och bygglov – roll och process | Ytterman"
    seoDescription="Guide till när kontrollansvarig kan krävas, förslag till kontrollplan, tekniskt samråd, uppföljning och underlag inför slutbesked."
    keywords="kontrollansvarig bygglov, KA bygglov, kontrollplan, tekniskt samråd, startbesked, slutbesked"
    canonicalPath="/guider/kontrollansvarig-bygglov"
  >
    <div className="prose prose-stone max-w-none">
      <p className="text-lg font-medium text-stone-700">{BUSINESS_COPY.kaScope}</p>

      <div className="not-prose my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-700" />
          <p className="text-amber-950">
            Bygglov och startbesked är olika beslut. Ett beviljat lov innebär inte i sig att arbetet
            får starta. Följ alltid byggnadsnämndens beslut för det aktuella ärendet.
          </p>
        </div>
      </div>

      <h2>Processen och ansvarsfördelningen</h2>
      <div className="not-prose my-6 space-y-4">
        {processSteps.map((step, index) => (
          <div key={step.title} className="flex gap-4 rounded-xl border bg-white p-5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-900 font-semibold text-white">
              {index + 1}
            </span>
            <div>
              <h3 className="font-semibold text-stone-900">{step.title}</h3>
              <p className="mt-1 text-stone-700">{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Vad KA-rollen inte ersätter</h2>
      <ul className="not-prose my-6 space-y-3">
        {[
          'Byggherrens övergripande ansvar för att regler, lov och beslut följs.',
          'Projektörernas ansvar för konstruktion, brandskydd, energi och andra tekniska lösningar.',
          'Entreprenörernas ansvar för arbetsutförande, arbetsgivarskyldigheter och egenkontroller.',
          'Byggnadsnämndens myndighetsbeslut om startbesked och slutbesked.',
          'Entreprenadrättslig slutbesiktning, om den inte avtalas som ett separat uppdrag.',
        ].map((item) => (
          <li key={item} className="flex gap-3 rounded-lg bg-slate-50 p-4 text-stone-800">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
            {item}
          </li>
        ))}
      </ul>

      <h2>Yttermans KA-certifikat</h2>
      <p>
        {COMPANY.publicName} är {KA_CERT.title.toLowerCase()}, certifierad av {KA_CERT.issuer} med
        certifikat <strong>{KA_CERT.certificateNumber}</strong>, {KA_CERT.authorizationLabel.toLowerCase()},
        giltigt till {KA_CERT.validUntil}. Projektets art och uppdragets omfattning bedöms innan offert.
      </p>

      <h2>Pris och offert</h2>
      <p>
        {PRICE_LABELS.kaBasFrom} inklusive moms gäller KA Bas för tillbyggnad enligt prislistan för{' '}
        {PRICING.year}. Ombyggnation och nyproduktion av fritidshus har egna paketpriser.
        Antal byggplatsbesök, resor, kompletteringar och avgränsningar ska framgå av offerten.
      </p>

      <h2>Fördjupa dig</h2>
      <ul>
        <li><Link to="/guider/kontrollplan/">Kontrollplanens innehåll och ansvar</Link></li>
        <li><Link to="/guider/tekniskt-samrad/">Tekniskt samråd</Link></li>
        <li><Link to="/guider/slutbesked/">Underlag och roller inför slutbesked</Link></li>
        <li>
          <a
            href="https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollansvariga-och-deras-uppgifter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Boverkets vägledning om kontrollansvariga
          </a>
        </li>
      </ul>
    </div>
  </GuideLayout>
);

export default KontrollansvarigBygglovGuide;
