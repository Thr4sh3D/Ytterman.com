import { CheckCircle, FileCheck2, Landmark, UserRound } from 'lucide-react';
import { GuideLayout } from '@/components/GuideLayout';
import { BUSINESS_COPY } from '@/config/company';

const SlutbeskedGuide = () => (
  <GuideLayout
    title="Slutbesked i byggprocessen"
    description="Så skiljer du på byggherrens, kontrollansvarigs och byggnadsnämndens ansvar när ett projekt ska avslutas."
    category="Bygglov"
    readTime="6 min"
    seoTitle="Slutbesked vid bygglov – roller, underlag och beslut | Ytterman"
    seoDescription="Guide till slutbesked: byggherren begär prövning, kontrollansvarig lämnar sitt utlåtande och byggnadsnämnden fattar beslut."
    keywords="slutbesked, kontrollansvarigs utlåtande, byggnadsnämnden, kontrollplan, byggherre, PBL"
    canonicalPath="/guider/slutbesked"
  >
    <div className="prose prose-lg max-w-none">
      <p className="lead">{BUSINESS_COPY.kaScope}</p>

      <div className="my-8 rounded-xl border border-blue-200 bg-blue-50 p-6 not-prose">
        <h2 className="mb-4 text-2xl font-bold text-blue-950">Tre roller – tre olika ansvar</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4">
            <UserRound className="mb-2 h-7 w-7 text-blue-700" />
            <h3 className="font-semibold text-slate-900">Byggherren</h3>
            <p className="mt-2 text-sm text-slate-700">
              Ansvarar för projektet, samlar efterfrågade handlingar och begär att
              byggnadsnämnden prövar frågan om slutbesked.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4">
            <FileCheck2 className="mb-2 h-7 w-7 text-blue-700" />
            <h3 className="font-semibold text-slate-900">Kontrollansvarig</h3>
            <p className="mt-2 text-sm text-slate-700">
              Följer kontrollplanen och lämnar ett utlåtande om hur den och projektets
              krav har följts.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4">
            <Landmark className="mb-2 h-7 w-7 text-blue-700" />
            <h3 className="font-semibold text-slate-900">Byggnadsnämnden</h3>
            <p className="mt-2 text-sm text-slate-700">
              Bedömer underlaget och beslutar om slutbesked eller om ytterligare
              kompletteringar krävs.
            </p>
          </div>
        </div>
      </div>

      <h2>Vilka handlingar behövs?</h2>
      <p>
        Kraven varierar mellan projekt. Utgå från startbeskedet, den fastställda
        kontrollplanen och byggnadsnämndens besked. Underlaget kan bland annat omfatta:
      </p>
      <ul>
        <li>signerad kontrollplan och dokumentation från utförda kontroller,</li>
        <li>kontrollansvarigs utlåtande när projektet har en KA,</li>
        <li>intyg, protokoll och sakkunnigutlåtanden som nämnden har begärt,</li>
        <li>relationshandlingar eller andra projektspecifika dokument.</li>
      </ul>

      <h2>KA är inte automatiskt entreprenadbesiktningsman</h2>
      <p>
        Kontrollansvarigs uppdrag enligt PBL är skilt från en entreprenadrättslig
        slutbesiktning. Om beställaren vill ha en oberoende kontroll av om entreprenaden
        uppfyller avtalet behöver den tjänsten avtalas separat med rätt kompetens.
      </p>

      <h2>Praktisk ordning inför avslut</h2>
      <ol>
        <li>Gå igenom startbeskedet och kontrollplanen i god tid före färdigställandet.</li>
        <li>Samla in de intyg och protokoll som respektive ansvarig ska lämna.</li>
        <li>Låt KA slutföra sin uppföljning och lämna sitt utlåtande.</li>
        <li>Byggherren lämnar underlaget till byggnadsnämnden och begär slutbesked.</li>
        <li>Invänta nämndens beslut och följ eventuella villkor om ibruktagande.</li>
      </ol>

      <div className="my-8 flex gap-3 rounded-lg border border-green-200 bg-green-50 p-5 not-prose">
        <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-green-700" />
        <p className="text-green-950">
          Börja dokumentera tidigt. Ett komplett, spårbart underlag minskar risken för
          sena kompletteringar, men det är alltid byggnadsnämnden som avgör om slutbesked
          kan ges.
        </p>
      </div>
    </div>
  </GuideLayout>
);

export default SlutbeskedGuide;
