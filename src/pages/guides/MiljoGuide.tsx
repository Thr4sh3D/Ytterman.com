import { CheckCircle, Leaf } from 'lucide-react';
import { GuideLayout } from '@/components/GuideLayout';

const workstreams = [
  {
    title: 'Mål och ansvar',
    text: 'Bestäm vilka miljömål som gäller, vem som äger respektive fråga och hur kraven ska följas upp i projektering, inköp och produktion.',
  },
  {
    title: 'Energi och klimat',
    text: 'Använd projektets energiberäkning, klimatunderlag och myndighetskrav. Blanda inte ihop energiberäkning, energideklaration och klimatdeklaration.',
  },
  {
    title: 'Material och produkter',
    text: 'Kravställ verifierbara produktegenskaper och dokumentera val, substitutioner och eventuella miljöbedömningar.',
  },
  {
    title: 'Återbruk och avfall',
    text: 'Inventera återanvändbara produkter och avfall tidigt. Planera demontering, sortering, lagring, transporter och spårbar dokumentation.',
  },
  {
    title: 'Fukt, innemiljö och beständighet',
    text: 'Miljöprestanda får inte skapas på bekostnad av fuktsäkerhet, funktion eller livslängd. Låt rätt projektörer hantera tekniska avvägningar.',
  },
  {
    title: 'Verifiering',
    text: 'Koppla varje påstående till mätbar indikator, ansvarig, metod och dokumenterat resultat. Undvik generella ord som hållbar eller klimatneutral utan underlag.',
  },
];

const MiljoGuide = () => (
  <GuideLayout
    title="Miljöarbete i byggprojekt"
    description="En grundläggande checklista för mål, ansvar, energi, material, återbruk och verifierbar dokumentation."
    category="Energi & miljö"
    readTime="6 min"
    seoTitle="Miljöarbete i byggprojekt – mål och verifiering | Ytterman"
    seoDescription="Guide till strukturerat miljöarbete i byggprojekt: energi, material, återbruk, avfall, innemiljö och spårbar verifiering."
    keywords="miljöarbete byggprojekt, hållbart byggande, energi, materialval, återbruk, byggavfall, miljödokumentation"
    canonicalPath="/guider/miljo"
  >
    <div className="prose prose-stone max-w-none">
      <p className="text-lg font-medium text-stone-700">
        Ett miljömål blir användbart först när det har en tydlig omfattning, ansvarig person,
        verifieringsmetod och dokumentation. Projektets avtal och aktuella regler styr vilka krav som
        gäller.
      </p>

      <h2>Sex arbetsströmmar</h2>
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        {workstreams.map((stream) => (
          <section key={stream.title} className="rounded-xl border bg-white p-5">
            <Leaf className="h-6 w-6 text-green-800" />
            <h3 className="mt-3 font-semibold text-stone-900">{stream.title}</h3>
            <p className="mt-2 text-stone-700">{stream.text}</p>
          </section>
        ))}
      </div>

      <h2>Om miljöcertifiering</h2>
      <p>
        BREEAM, LEED och andra certifieringssystem har egna manualer, versioner, roller och
        verifieringskrav. Välj system och ambitionsnivå tidigt och anlita behörig eller kvalificerad
        specialist när systemet kräver det. Den här guiden innebär inte att Ytterman erbjuder en
        viss certifierings- eller assessorroll.
      </p>

      <h2>Kontrollfrågor före beslut</h2>
      <ul className="not-prose my-6 space-y-3">
        {[
          'Vilket krav eller mål ska uppfyllas och vilken version gäller?',
          'Vem ansvarar för projektering, granskning, inköp och verifiering?',
          'Vilken data eller dokumentation visar att kravet är uppfyllt?',
          'Hur hanteras ändringar och produktbyten under byggtiden?',
          'Vilket underlag ska sparas för förvaltning, myndighet eller certifiering?',
        ].map((item) => (
          <li key={item} className="flex gap-3 rounded-lg bg-green-50 p-4 text-green-950">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </GuideLayout>
);

export default MiljoGuide;
