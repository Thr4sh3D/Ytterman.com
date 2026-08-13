import { CheckCircle, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { BUSINESS_COPY } from '@/config/company';

const controlLayers = [
  {
    title: 'Projekteringskontroll',
    text: 'Projektörerna ansvarar för sina tekniska lösningar och för att projekteringen kontrolleras enligt gällande regler och projektets kvalitetsrutiner.',
  },
  {
    title: 'Kontrollplan enligt PBL',
    text: 'Kontrollplanen ska vara projektspecifik och ange vad som ska kontrolleras, mot vilket krav, hur kontrollen ska utföras och vem som ska göra den.',
  },
  {
    title: 'Entreprenörens egenkontroll',
    text: 'Entreprenören dokumenterar sitt utförande enligt avtal, arbetsberedningar och egna kvalitetssystem. Det ansvaret flyttas inte till KA.',
  },
  {
    title: 'Sakkunnigkontroll och besiktning',
    text: 'Vissa frågor kan kräva certifierad sakkunnig eller annan specialist. Entreprenadrättslig besiktning är ett separat uppdrag med annan grund än KA-rollen.',
  },
];

const KvalitetskontrollGuide = () => (
  <GuideLayout
    title="Kontroller och kvalitet i byggprojekt"
    description="Så skiljer du på projekteringskontroll, kontrollplan, egenkontroll, sakkunnigkontroll och besiktning."
    category="Kvalitetskontroll"
    readTime="6 min"
    seoTitle="Kvalitetskontroll i byggprojekt – roller och dokumentation | Ytterman"
    seoDescription="Guide till projekteringskontroll, kontrollplan enligt PBL, entreprenörens egenkontroll, sakkunnigkontroll och separat besiktning."
    keywords="kvalitetskontroll byggprojekt, kontrollplan, egenkontroll, sakkunnigkontroll, besiktning, kontrollansvarig"
    canonicalPath="/guider/kvalitetskontroll"
  >
    <div className="prose prose-stone max-w-none">
      <p className="text-lg font-medium text-stone-700">
        Ett byggprojekt innehåller flera typer av kontroll. De har olika syfte, ansvarig person och
        rättslig eller avtalsmässig grund. En tydlig kontrollmatris minskar risken för både luckor och
        dubbelarbete.
      </p>

      <h2>Fyra kontrollager att hålla isär</h2>
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        {controlLayers.map((layer) => (
          <section key={layer.title} className="rounded-xl border bg-white p-5">
            <Layers className="h-6 w-6 text-blue-800" />
            <h3 className="mt-3 font-semibold text-stone-900">{layer.title}</h3>
            <p className="mt-2 text-stone-700">{layer.text}</p>
          </section>
        ))}
      </div>

      <h2>Kontrollansvarigs roll</h2>
      <p>{BUSINESS_COPY.kaScope}</p>
      <p>
        KA utför inte automatiskt projektörernas beräkningar, entreprenörernas egenkontroller eller
        en entreprenadrättslig slutbesiktning. Vem som utför varje kontroll ska framgå av
        kontrollplanen eller det separata avtalet.
      </p>

      <h2>Dokumentation att planera</h2>
      <ul className="not-prose my-6 space-y-3">
        {[
          'Kontrollpunkt, krav, kontrollmetod och namngiven kontrollant.',
          'Datum, resultat och hänvisning till relevant ritning eller handling.',
          'Avvikelser, beslutade åtgärder, ansvarig och uppföljning.',
          'Intyg och sakkunnigutlåtanden som byggnadsnämnden har begärt.',
          'KA:s dokumentation från egna byggplatsbesök.',
          'Versionshantering så att rätt underlag används och lämnas vidare.',
        ].map((item) => (
          <li key={item} className="flex gap-3 rounded-lg bg-slate-50 p-4 text-stone-800">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
            {item}
          </li>
        ))}
      </ul>

      <h2>Frekvensen är projektspecifik</h2>
      <p>
        Det finns ingen generell veckoplan för alla projekt. Kontroller, avstämningar och
        byggplatsbesök ska kopplas till kritiska moment, produktionens skeden, riskbilden och
        byggnadsnämndens beslut.
      </p>

      <p>
        Läs mer om <Link to="/guider/kontrollplan/">kontrollplanens innehåll</Link> och{' '}
        <Link to="/guider/kontrollansvarig-ansvar/">KA-rollens avgränsning</Link>.
      </p>
    </div>
  </GuideLayout>
);

export default KvalitetskontrollGuide;
