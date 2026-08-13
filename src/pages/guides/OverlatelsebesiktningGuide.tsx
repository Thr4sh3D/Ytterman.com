import { AlertTriangle, CheckCircle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { BOOKING_OVL_URL } from '@/config/booking';
import { COMPANY, SERVICES } from '@/config/company';

const processSteps = [
  'Fastigheten, parterna, syftet och önskad omfattning gås igenom före bokning.',
  'Uppdragsbekräftelsen anger vad som ska besiktigas, kända begränsningar, pris och leveranstid.',
  'Besiktningen genomförs okulärt i de avtalade delar som är synliga och åtkomliga vid tillfället.',
  'Iakttagelser, risker, begränsningar och eventuell rekommendation om fortsatt utredning dokumenteras enligt avtalet.',
];

const OverlatelsebesiktningGuide = () => (
  <GuideLayout
    title="Överlåtelsebesiktning – omfattning och begränsningar"
    description="Vad en okulär överlåtelsebesiktning kan omfatta och vad som behöver avtalas före uppdraget."
    category="Fastighetsbesiktning"
    readTime="6 min"
    seoTitle="Överlåtelsebesiktning – omfattning och rapport | Ytterman"
    seoDescription="Guide till okulär överlåtelsebesiktning, åtkomlighet, begränsningar, rapport och fortsatt teknisk utredning."
    keywords="överlåtelsebesiktning, okulär besiktning, besiktningsrapport, fastighetsbesiktning, fortsatt teknisk utredning"
    canonicalPath="/guider/overlatelsebesiktning"
  >
    <div className="prose prose-stone max-w-none">
      <p className="text-lg font-medium text-stone-700">
        En överlåtelsebesiktning är ett avtalat uppdrag. Omfattningen kan skilja sig mellan
        fastigheter och uppdragsgivare, så uppdragsbekräftelsen är viktigare än en generell lista på
        webbplatsen.
      </p>

      <div className="not-prose my-8 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <AlertTriangle className="mt-0.5 h-7 w-7 shrink-0 text-amber-800" />
        <p className="text-amber-950">
          En okulär besiktning är inte en garanti för att fastigheten saknar fel. Dolda, täckta,
          låsta eller på annat sätt oåtkomliga delar kan inte bedömas utan ett separat avtal om
          fortsatt teknisk utredning.
        </p>
      </div>

      <h2>Vad som normalt bedöms</h2>
      <p>
        Besiktningsmannen undersöker synliga och åtkomliga byggnadsdelar inom den avtalade
        omfattningen. Synliga tecken på exempelvis fukt, rörelser, slitage eller brister kan
        dokumenteras, men varje iakttagelse måste förstås tillsammans med rapportens avgränsningar.
      </p>

      <h2>Vad som inte ingår utan separat avtal</h2>
      <ul className="not-prose my-6 space-y-3">
        {[
          'Håltagning, rivning, demontering eller annan förstörande undersökning.',
          'Provtagning, laboratorieanalys eller mätning som inte uttryckligen har avtalats.',
          'Funktionsprovning eller fackmässig kontroll av el, VVS, ventilation eller andra installationer.',
          'Fastighetsvärdering, juridisk rådgivning eller garanti om framtida funktion.',
          'Bedömning av delar som inte är synliga eller åtkomliga vid besiktningstillfället.',
        ].map((item) => (
          <li key={item} className="flex gap-3 rounded-lg bg-slate-50 p-4 text-stone-800">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
            {item}
          </li>
        ))}
      </ul>

      <h2>Processen</h2>
      <ol className="not-prose my-6 space-y-4">
        {processSteps.map((step, index) => (
          <li key={step} className="flex gap-4 rounded-xl border bg-white p-5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-700 font-semibold text-white">
              {index + 1}
            </span>
            <span className="text-stone-700">{step}</span>
          </li>
        ))}
      </ol>

      <h2>Förbered fastigheten</h2>
      <p>
        Se till att avtalade utrymmen och inspektionsluckor är åtkomliga, att relevanta nycklar
        finns och att tillgängliga ritningar, tidigare besiktningsprotokoll och uppgifter om kända
        skador kan lämnas före eller vid besiktningen.
      </p>

      <h2>Rapport och fortsatt utredning</h2>
      <p>
        Rapportens struktur och leveranstid framgår av uppdragsbekräftelsen. Om en iakttagelse inte
        kan bedömas okulärt kan rapporten rekommendera en fortsatt utredning av lämplig fackperson.
      </p>

      <div className="not-prose my-8 rounded-xl bg-amber-950 p-7 text-white">
        <Search className="h-7 w-7" />
        <h2 className="mt-3 text-2xl font-bold">Skicka en förfrågan</h2>
        <p className="mt-2 text-amber-100">
          {SERVICES.inspection.priceLabel}. Tillgänglighet, omfattning, resor, pris och leveranstid
          bekräftas för den aktuella fastigheten.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a className="rounded-lg bg-white px-5 py-3 font-semibold text-amber-950" href={BOOKING_OVL_URL}>
            Skicka förfrågan
          </a>
          <Link className="rounded-lg border border-white px-5 py-3 font-semibold text-white" to="/overlatelsebesiktning/">
            Läs om tjänsten
          </Link>
          <a className="rounded-lg border border-white px-5 py-3 font-semibold text-white" href={COMPANY.phone.href}>
            {COMPANY.phone.display}
          </a>
        </div>
      </div>
    </div>
  </GuideLayout>
);

export default OverlatelsebesiktningGuide;
