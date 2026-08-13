import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { GuideLayout } from '@/components/GuideLayout';
import { BUSINESS_COPY } from '@/config/company';

const TeknisktSamradGuide = () => {
  const checklist = [
    'Byggnadsnämndens kallelse och lista över begärda handlingar',
    'Förslag till kontrollplan när projektet ska ha en sådan',
    'Tekniska handlingar och utredningar som nämnden har efterfrågat',
    'Projektorganisation, ansvar och planerad byggstart',
    'Underlag om arbetsmiljöorganisation när det är relevant för mötet',
  ];

  return (
    <GuideLayout
      title="Tekniskt samråd – syfte, deltagare och underlag"
      description="Guide till byggnadsnämndens tekniska samråd och kontrollansvarigs roll i mötet."
      category="Bygglov"
      readTime="5 min"
      seoTitle="Tekniskt samråd – guide inför startbesked | Ytterman"
      seoDescription="Praktisk guide till tekniskt samråd: vem som kallar, vilka som deltar, vilka handlingar som behövs och vad som händer inför startbesked."
      keywords="tekniskt samråd, byggnadsnämnden, kontrollplan, kontrollansvarig, startbesked, PBL"
      canonicalPath="/guider/tekniskt-samrad"
    >
      <div className="prose prose-stone max-w-none">
        <p className="text-lg font-medium text-stone-700">
          Byggnadsnämnden avgör om tekniskt samråd behövs och kallar till mötet. Kallelsen och
          projektets beslut styr deltagare, underlag, tid och form.
        </p>

        <h2>Vad behandlas?</h2>
        <p>
          Samrådet används för att gå igenom arbetets planering, byggherrens organisation, förslaget
          till kontrollplan och de tekniska handlingar som behövs inför nämndens prövning av
          startbesked. Det är inte KA som godkänner mötet eller utfärdar beslutet.
        </p>

        <h2>Vem deltar?</h2>
        <ul>
          <li>Byggherren och de personer byggnadsnämnden har kallat.</li>
          <li>Byggnadsnämndens representant.</li>
          <li>Kontrollansvarig när projektet har KA.</li>
          <li>Projektörer, entreprenörer eller sakkunniga när nämnden eller projektet behöver deras underlag.</li>
        </ul>

        <h2>Kontrollansvarigs roll</h2>
        <p>
          KA förbereder och presenterar sitt förslag till kontrollplan, beskriver planerad uppföljning
          och svarar på frågor inom sitt uppdrag. Byggnadsnämnden leder sin handläggning och
          dokumenterar samrådet enligt sin process. {BUSINESS_COPY.kaScope}
        </p>

        <h2>Checklista före mötet</h2>
        <div className="not-prose my-6 space-y-3">
          {checklist.map((item) => (
            <div key={item} className="flex items-start gap-2 rounded-lg border bg-white p-4">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
              <span className="text-stone-700">{item}</span>
            </div>
          ))}
        </div>

        <h2>Efter samrådet</h2>
        <p>
          Nämnden kan begära kompletteringar eller fatta beslut om startbesked när förutsättningarna
          är uppfyllda. Byggstart får inte ske enbart för att samrådet har hållits; följ det formella
          startbeskedet och dess villkor.
        </p>

        <h2>Tid och avgift</h2>
        <p>
          Mötets längd, kommunens avgift och handläggningstid varierar. Kontrollera aktuella uppgifter
          med byggnadsnämnden. KA:s förberedelser och medverkan ska framgå av offerten och uppdraget.
        </p>

        <p>
          Läs också om <Link to="/guider/kontrollplan/">kontrollplanen</Link> och{' '}
          <Link to="/guider/slutbesked/">rollerna inför slutbesked</Link>.
        </p>
      </div>
    </GuideLayout>
  );
};

export default TeknisktSamradGuide;
