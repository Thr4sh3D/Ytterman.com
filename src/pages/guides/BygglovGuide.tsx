import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, FileText } from 'lucide-react';
import { GuideLayout } from '@/components/GuideLayout';
import { BUSINESS_COPY, COMPANY, SERVICES } from '@/config/company';

const BygglovGuide = () => {
  const steps = [
    {
      title: 'Kontrollera fastighet och åtgärd',
      text: 'Be kommunen bekräfta om åtgärden kräver lov eller anmälan och vilka planbestämmelser, skyddsvärden och underlag som gäller.',
    },
    {
      title: 'Ta fram rätt handlingar',
      text: 'Ritningar, situationsplan, teknisk beskrivning och utredningar ska anpassas efter åtgärden och kommunens besked.',
    },
    {
      title: 'Lämna in ärendet',
      text: 'Byggherren eller dennes ombud lämnar ansökan eller anmälan. Byggnadsnämnden prövar ärendet och kan begära kompletteringar.',
    },
    {
      title: 'Planera inför startbesked',
      text: 'Om nämnden kräver kontrollansvarig föreslår byggherren en certifierad KA. Nämnden avgör om tekniskt samråd hålls och vilket underlag som krävs.',
    },
    {
      title: 'Genomför och dokumentera',
      text: 'Arbete som omfattas av startbesked får påbörjas först efter beslutet. Kontroller och intyg dokumenteras enligt den fastställda kontrollplanen.',
    },
    {
      title: 'Underlag inför slutbesked',
      text: BUSINESS_COPY.kaScope,
    },
  ];

  return (
    <GuideLayout
      title="Bygglovsprocessen steg för steg"
      description="En praktisk översikt över bygglov, tekniskt underlag, kontrollplan, startbesked och slutbesked."
      category="Bygglov"
      readTime="7 min"
      seoTitle="Bygglovsprocessen steg för steg | Ytterman"
      seoDescription="Guide till bygglovsprocessen: kommunens prövning, handlingar, kontrollansvarig, startbesked och slutbesked. Aktuella krav kontrolleras med kommunen."
      keywords="bygglov, bygglovsprocess, startbesked, slutbesked, kontrollplan, kontrollansvarig, Västernorrland"
      canonicalPath="/guider/bygglov"
    >
      <div className="prose prose-stone max-w-none">
        <p className="text-lg font-medium text-stone-700">
          Bygglov, startbesked och slutbesked är olika beslut. Ett beviljat lov innebär inte i sig
          att arbetet får starta. Följ alltid beslutet och den aktuella informationen från
          byggnadsnämnden för din fastighet.
        </p>

        <div className="not-prose my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
            <div>
              <h2 className="text-lg font-semibold text-amber-950">Undvik generella tidslöften</h2>
              <p className="mt-2 text-amber-900">
                Handläggningstid beror på ärendet, om ansökan är komplett, remisser och kommunens
                aktuella belastning. Be kommunen bekräfta tidplanen och lägg in marginal för kompletteringar.
              </p>
            </div>
          </div>
        </div>

        <h2>Processens sex delar</h2>
        <div className="not-prose my-8 space-y-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4 rounded-lg border bg-white p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-stone-900">{step.title}</h3>
                <p className="mt-1 text-stone-600">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>Vanliga underlag</h2>
        <p>
          Vilka handlingar som behövs varierar. Följande är exempel som kommunen kan efterfråga,
          men listan ersätter inte ett projektspecifikt besked:
        </p>
        <ul>
          <li>situationsplan samt plan-, fasad- och sektionsritningar,</li>
          <li>teknisk beskrivning och konstruktionsunderlag,</li>
          <li>förslag till kontrollplan när det ska finnas,</li>
          <li>energi-, brand-, geoteknik- eller andra utredningar när de behövs,</li>
          <li>intyg och verifieringar som byggnadsnämnden anger i beslutet.</li>
        </ul>

        <h2>Vad Ytterman kan offerera</h2>
        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          {[SERVICES.kontrollansvarig, SERVICES.buildingPermitDocuments].map((service) => (
            <Link key={service.id} to={service.path} className="rounded-lg border bg-white p-5 hover:border-blue-400">
              <div className="flex items-start gap-3">
                {service.id === SERVICES.kontrollansvarig.id ? (
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-700" />
                ) : (
                  <FileText className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                )}
                <div>
                  <h3 className="font-semibold text-stone-900">{service.name}</h3>
                  <p className="mt-1 text-sm text-stone-600">{service.shortDescription}</p>
                  <p className="mt-2 text-sm font-medium text-blue-700">{service.priceLabel}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p>
          Ytterman tar emot förfrågningar från {COMPANY.region}. Uppdragets omfattning,
          tillgänglighet, resor och leveranstid bekräftas efter underlagsgranskning.
        </p>

        <div className="not-prose mt-10 rounded-xl bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-bold">Be om en projektspecifik offert</h2>
          <p className="mt-3 max-w-2xl text-slate-200">
            Skicka fastighet, åtgärd, preliminär tidplan och befintliga handlingar. Då kan omfattning,
            ansvar och nästa steg bedömas utan generella antaganden.
          </p>
          <Link to="/kontakt/" className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-slate-900">
            Skicka förfrågan
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
};

export default BygglovGuide;
