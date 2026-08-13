import { Building, CheckCircle, FileText, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { BUSINESS_COPY, SERVICES } from '@/config/company';

const processSteps = [
  {
    title: 'Förfrågan till Ytterman',
    text: 'Ytterman tar emot grunduppgifter om byggnaden och samordnar kontakten med en behörig partner.',
  },
  {
    title: 'Behörighets- och underlagskontroll',
    text: 'Före uppdraget kontrolleras att den tilldelade energiexperten har giltig certifiering. Experten bedömer vilka handlingar och vilket platsbesök som behövs.',
  },
  {
    title: 'Expertens arbete',
    text: 'Den certifierade energiexperten analyserar byggnadens energiprestanda, upprättar deklarationen och registrerar uppgifterna enligt gällande krav.',
  },
  {
    title: 'Leverans',
    text: 'Ytterman samordnar leveransen till kunden. Pris, omfattning och leveranstid framgår av offerten för den aktuella byggnaden.',
  },
];

const EnergiGuide = () => (
  <GuideLayout
    title="Energideklaration – guide till ansvar och leverans"
    description="Vad en energideklaration innehåller och hur Ytterman samordnar tjänsten via behörig partner."
    category="Energi & miljö"
    readTime="6 min"
    seoTitle="Energideklaration – certifierad energiexpert via partner | Ytterman"
    seoDescription="Guide till energideklaration, energiprestanda, underlag och partnerleverans. Ytterman samordnar; certifierad energiexpert utför och registrerar."
    keywords="energideklaration, certifierad energiexpert, energiprestanda, energiklass, behörig partner"
    canonicalPath="/guider/energi"
  >
    <div className="prose prose-stone max-w-none">
      <p className="text-lg font-medium text-stone-700">{BUSINESS_COPY.energyPartner}</p>

      <div className="not-prose my-8 flex gap-3 rounded-xl border border-green-200 bg-green-50 p-6">
        <ShieldCheck className="mt-0.5 h-7 w-7 shrink-0 text-green-800" />
        <div>
          <h2 className="font-semibold text-green-950">Certifierad energiexpert utför deklarationen</h2>
          <p className="mt-2 text-green-900">
            Ytterman är kundens kontakt och samordnare. Själva deklarationen och registreringen
            görs av en certifierad energiexpert hos den behöriga partnern.
          </p>
        </div>
      </div>

      <h2>Vad visar en energideklaration?</h2>
      <p>
        Energideklarationen redovisar byggnadens energiprestanda och energiklass samt de uppgifter
        och eventuella åtgärdsförslag som gäller enligt det aktuella regelverket. Den färdiga
        deklarationen ska hämtas och kontrolleras i Boverkets register.
      </p>

      <h2>När kan den behövas?</h2>
      <p>
        Kravet beror bland annat på byggnadstyp, ägande, användning, upplåtelse och överlåtelse.
        Det finns också undantag. Låt den certifierade energiexperten bedöma den aktuella byggnaden
        och kontrollera alltid Boverkets nu gällande information.
      </p>

      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border bg-white p-5">
          <Building className="h-6 w-6 text-blue-800" />
          <h3 className="mt-3 font-semibold text-stone-900">Exempel att kontrollera</h3>
          <p className="mt-2 text-stone-700">
            Försäljning, upplåtelse med nyttjanderätt, vissa byggnader som används av allmänheten
            och när en tidigare deklaration inte längre är giltig.
          </p>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <FileText className="h-6 w-6 text-blue-800" />
          <h3 className="mt-3 font-semibold text-stone-900">Vanliga underlag</h3>
          <p className="mt-2 text-stone-700">
            Byggnadsuppgifter, energistatistik, ritningar och information om installationer.
            Energiexperten avgör exakt vilket underlag och vilken besiktning som krävs.
          </p>
        </div>
      </div>

      <h2>Så går Yttermans partnerleverans till</h2>
      <ol className="not-prose my-6 space-y-4">
        {processSteps.map((step, index) => (
          <li key={step.title} className="flex gap-4 rounded-xl border bg-white p-5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-900 font-semibold text-white">
              {index + 1}
            </span>
            <div>
              <h3 className="font-semibold text-stone-900">{step.title}</h3>
              <p className="mt-1 text-stone-700">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2>Skilj på tre olika underlag</h2>
      <ul className="not-prose my-6 space-y-3">
        {[
          'Energideklaration: upprättas och registreras av certifierad energiexpert.',
          'Energiberäkning: ett separat tekniskt underlag, exempelvis för ett byggprojekt.',
          'Överlåtelsebesiktning: en separat okulär undersökning av en fastighet inför överlåtelse.',
        ].map((item) => (
          <li key={item} className="flex gap-3 rounded-lg bg-slate-50 p-4 text-stone-800">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
            {item}
          </li>
        ))}
      </ul>

      <h2>Pris och leveranstid</h2>
      <p>
        {SERVICES.energyDeclaration.priceLabel}. Partnern bekräftar ansvarig energiexpert,
        underlag, eventuellt platsbesök, pris och leveranstid före uppdraget.
      </p>

      <p>
        <Link to="/energideklaration/">Läs om Yttermans energideklarationstjänst</Link> eller{' '}
        <a
          href="https://www.boverket.se/sv/energideklaration/hitta-energiexpert/"
          target="_blank"
          rel="noopener noreferrer"
        >
          kontrollera certifierade energiexperter hos Boverket
        </a>.
      </p>
    </div>
  </GuideLayout>
);

export default EnergiGuide;
