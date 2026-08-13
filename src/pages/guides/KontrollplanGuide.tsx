import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { GuideLayout } from '@/components/GuideLayout';
import { BUSINESS_COPY } from '@/config/company';

const KontrollplanGuide = () => {
  const contents = [
    'vilka kontroller som ska göras och vad de ska avse,',
    'vem som ansvarar för respektive kontroll,',
    'vilket krav, underlag eller beslut kontrollen knyter an till,',
    'hur resultat, intyg och eventuella avvikelser dokumenteras,',
    'vilka anmälningar eller arbetsplatsbesök byggnadsnämnden har beslutat om.',
  ];

  return (
    <GuideLayout
      title="Kontrollplan enligt PBL"
      description="Guide till kontrollplanens innehåll, ansvar och användning från startbesked till slutbesked."
      category="Kontrollansvarig"
      readTime="6 min"
      seoTitle="Kontrollplan enligt PBL – innehåll och ansvar | Ytterman"
      seoDescription="Guide till förslag, fastställelse, kontroller och dokumentation i en kontrollplan enligt PBL."
      keywords="kontrollplan, PBL, kontrollpunkter, kontrollansvarig, startbesked, slutbesked"
      canonicalPath="/guider/kontrollplan"
    >
      <div className="prose prose-stone max-w-none">
        <p className="text-lg font-medium text-stone-700">
          Kontrollplanen beskriver de kontroller som behövs för projektet. Den ska vara anpassad till
          åtgärdens art och risker och fastställs av byggnadsnämnden i startbeskedet.
        </p>

        <h2>Vem ansvarar för vad?</h2>
        <ul>
          <li><strong>Byggherren</strong> ansvarar för att regler och beslut följs och att kontrollerna blir utförda.</li>
          <li><strong>Kontrollansvarig</strong> hjälper till att ta fram förslaget när projektet har KA och följer att kontrollerna utförs.</li>
          <li><strong>Kontrollanten</strong> utför den kontroll som står angiven och dokumenterar resultatet.</li>
          <li><strong>Byggnadsnämnden</strong> fastställer kontrollplanen och fattar beslut om start- och slutbesked.</li>
        </ul>

        <h2>Vad kan planen innehålla?</h2>
        <div className="not-prose my-6 space-y-3">
          {contents.map((item) => (
            <div key={item} className="flex items-start gap-2 rounded-lg border bg-white p-4">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
              <span className="text-stone-700">{item}</span>
            </div>
          ))}
        </div>
        <p>
          Exakta kontrollpunkter kan inte kopieras från en generell mall utan behöver väljas från
          projektets handlingar, tekniska lösningar, risker och byggnadsnämndens krav.
        </p>

        <h2>Vem utför kontrollerna?</h2>
        <p>
          Det kan vara entreprenören, en projektör, en certifierad sakkunnig eller en annan namngiven
          kontrollant. KA följer kontrollsystemet men övertar inte automatiskt deras tekniska ansvar
          och utför inte alla kontroller själv.
        </p>

        <h2>Ändringar och avvikelser</h2>
        <p>
          Om projektet ändras eller en kontroll visar en avvikelse ska den dokumenteras och hanteras
          innan berört arbete fortsätter. Ändringen kan behöva stämmas av med projektör,
          kontrollansvarig och byggnadsnämnd beroende på vad den påverkar.
        </p>

        <h2>Inför slutbesked</h2>
        <p>
          Den signerade kontrollplanen, intyg och övriga handlingar som nämnden har krävt används i
          slutredovisningen. {BUSINESS_COPY.kaScope}
        </p>

        <p>
          Läs vidare om <Link to="/guider/tekniskt-samrad/">tekniskt samråd</Link> och{' '}
          <Link to="/guider/slutbesked/">slutbeskedets rollfördelning</Link>.
        </p>
      </div>
    </GuideLayout>
  );
};

export default KontrollplanGuide;
