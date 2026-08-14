import { Award, BadgeCheck, CheckCircle2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Certifications } from '@/components/Certifications';
import { Button } from '@/components/ui/button';
import profileImage512 from '@/assets/images/tobias-ytterman-profile-512.webp';
import profileImage900 from '@/assets/images/tobias-ytterman-profile-900.webp';
import { cacheBusterToken } from '@/lib/buildInfo';
import { BAS, COMPANY, KA_CERT } from '@/config/company';

const strengths = [
  {
    title: 'Praktisk byggförståelse',
    description: 'Över 20 års erfarenhet ger en stabil grund för att se risker, underlag och nästa steg i sitt sammanhang.',
  },
  {
    title: 'Tydlig kommunikation',
    description: 'Du får veta vilka handlingar som behövs, vem som ansvarar för vad och vad som händer härnäst.',
  },
  {
    title: 'Samlat stöd när det passar',
    description: 'KA och BAS-P/U kan kombineras i ett tydligt uppdrag när projektets roller och omfattning medger det.',
  },
];

export const About = () => {
  const profileImage512Src = `${profileImage512}?v=${cacheBusterToken}`;
  const profileImage900Src = `${profileImage900}?v=${cacheBusterToken}`;

  return (
    <section id="om-oss" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="relative mx-auto max-w-md lg:mx-0">
            <OptimizedImage
              src={profileImage900Src}
              srcSet={`${profileImage512Src} 512w, ${profileImage900Src} 900w`}
              alt={`${COMPANY.publicName} – certifierad kontrollansvarig och utbildad för BAS-P/BAS-U`}
              className="h-auto w-full rounded-2xl shadow-xl"
              width={900}
              height={1352}
              sizes="(min-width: 1024px) 26rem, 100vw"
            />
            <div className="absolute -bottom-5 left-4 right-4 rounded-xl bg-slate-900 p-4 text-white shadow-xl sm:left-8 sm:right-8">
              <p className="font-bold">{COMPANY.publicName}</p>
              <p className="mt-1 text-sm text-slate-300">{KA_CERT.title} · {BAS.qualificationLabel}</p>
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">Erfarenhet som skapar struktur</p>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              En erfaren kontakt genom ett komplext byggprojekt
            </h2>
            <p className="mb-7 text-lg leading-relaxed text-slate-600">
              Du ska inte behöva hålla reda på varje roll, handling och kontrollpunkt själv.
              Jag hjälper dig skapa ett tydligt upplägg för uppdraget och hålla ihop uppföljningen
              från första underlag till utlåtandet inför slutbesked.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-3">
              {[
                { icon: Award, label: COMPANY.experienceLabel },
                { icon: BadgeCheck, label: `Kiwa ${KA_CERT.certificateNumber}` },
                { icon: Users, label: `Medlem i ${COMPANY.membership.shortName}` },
                { icon: CheckCircle2, label: KA_CERT.authorizationLabel },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-800">
                  <Icon className="h-5 w-5 shrink-0 text-accent" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="mb-8 space-y-4">
              {strengths.map((strength) => (
                <div key={strength.title} className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-slate-900">{strength.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{strength.description}</p>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white">
              <Link to="/om/">Lär känna Ytterman</Link>
            </Button>
          </div>
        </div>

        <div id="certifikat" className="mx-auto mt-16 max-w-6xl rounded-2xl bg-slate-50 p-6 sm:p-8" style={{ scrollMarginTop: '96px' }}>
          <Certifications showTitle={true} />
        </div>
      </div>
    </section>
  );
};
