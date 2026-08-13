import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { GuideLayout } from '@/components/GuideLayout';
import { BAS, SERVICES } from '@/config/company';

const VadArBasGuide = () => (
  <GuideLayout
    title="Vad är BAS-P och BAS-U?"
    description="En kort förklaring av byggarbetsmiljösamordnarens två roller."
    category="Arbetsmiljö"
    readTime="4 min"
    seoTitle="Vad är BAS-P och BAS-U? Enkel förklaring | Ytterman"
    seoDescription="Kort guide till BAS-P under projektering och BAS-U under utförande, med ansvarsfördelning enligt AFS 2023:3."
    keywords="vad är BAS, BAS-P, BAS-U, byggarbetsmiljösamordnare, AFS 2023:3"
    canonicalPath="/guider/vad-ar-bas"
  >
    <div className="prose prose-stone max-w-none">
      <p className="text-lg font-medium text-stone-700">
        BAS betyder byggarbetsmiljösamordnare. BAS-P hör till planering och projektering; BAS-U hör
        till utförandet. Roller och mandat ska vara tydliga när projektet går från ritning till byggplats.
      </p>

      <div className="not-prose my-8 grid gap-5 md:grid-cols-2">
        {[SERVICES.basP, SERVICES.basU].map((service) => (
          <Link key={service.id} to={service.path} className="rounded-xl border bg-white p-6 hover:border-blue-400">
            <h2 className="text-xl font-semibold text-stone-900">{service.name}</h2>
            <p className="mt-2 text-stone-600">{service.shortDescription}</p>
            <ul className="mt-4 space-y-2">
              {service.features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-stone-700">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
                  {feature}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      <h2>Vem ansvarar för att rollerna finns?</h2>
      <p>
        Utgångspunkten är att byggherren ska se till att lämpliga personer utses för båda skedena.
        I vissa avtals- och konsumentsituationer kan ansvarsfördelningen påverkas. Den ska därför
        klargöras för just det aktuella projektet.
      </p>

      <h2>Kan samma person ha båda rollerna?</h2>
      <p>
        Ja, om personen är lämplig för uppdragen och har rätt utbildning, kompetens, erfarenhet,
        tid och mandat. Det är också möjligt att ha olika personer. Överlämningen mellan skedena är
        viktig oavsett upplägg.
      </p>

      <h2>Är BAS en certifiering?</h2>
      <p>
        Nej, BAS-P och BAS-U ska inte presenteras som en myndighetscertifiering. Kompetensen ska
        motsvara projektets art, storlek och risker. Tobias är {BAS.qualificationLabel.toLowerCase()}
        och arbetar utifrån {BAS.regulation}.
      </p>

      <h2>Är BAS samma sak som kontrollansvarig?</h2>
      <p>
        Nej. BAS avser arbetsmiljösamordning. En <Link to="/kontrollansvarig/">kontrollansvarig</Link>
        har separata uppgifter enligt PBL kring kontrollplan, uppföljning och utlåtande. Roller kan
        samordnas praktiskt men deras ansvar ska hållas isär.
      </p>

      <p>
        Fristående BAS-uppdrag prissätts efter projektets skeden och riskbild. Se{' '}
        <Link to="/priser/">paketpriser</Link> eller skicka underlag för en separat offert.
      </p>
    </div>
  </GuideLayout>
);

export default VadArBasGuide;
