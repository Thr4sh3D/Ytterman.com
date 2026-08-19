import { ArrowRight, BadgeCheck, CheckCircle2, Mail, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HeroBanner } from './HeroBanner';
import { BAS, COMPANY, KA_CERT, PRICE_LABELS } from '@/config/company';

const benefits = [
  'Kontrollansvar med rätt underlag och kontrollpunkter i rätt skede',
  'Okulär överlåtelsebesiktning med tydligt avtalad omfattning',
  'Tydliga kostnader, villkor och nästa steg före uppdraget',
];

export const Hero = () => (
  <section
    id="hem"
    className="overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10 pb-14 pt-24 sm:pb-20 lg:pt-28"
  >
    <div className="container mx-auto px-4">
      <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        <div className="animate-fade-in">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/80 px-3 py-2 text-sm font-semibold text-accent shadow-sm backdrop-blur">
            <BadgeCheck className="h-5 w-5" />
            Kontrollansvarig · Överlåtelsebesiktning
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Tryggare när du bygger – och när du{' '}
            <span className="text-gradient">köper hus.</span>
          </h1>

          <p className="mb-3 text-xl font-semibold leading-relaxed text-foreground sm:text-2xl">
            Kontrollansvarig och överlåtelsebesiktning i {COMPANY.region}
          </p>
          <p className="mb-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Jag hjälper dig genom byggprojektets kontrollprocess och inför fastighetsöverlåtelsen.
            För byggprojekt kan jag även ta uppdrag som {BAS.rolesLabel} och samordna
            arbetsmiljöarbetet under projektering och utförande.
          </p>

          <ul className="mb-8 space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-base text-foreground sm:text-lg">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent sm:h-6 sm:w-6" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="earth-gradient min-h-12 text-base text-white hover:opacity-90 sm:px-7">
              <Link to="/kontakt/?service=kontrollansvarig&amp;source=hero">
                Begär offert för KA
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-12 border-2 border-accent text-base text-accent hover:bg-accent hover:text-white sm:px-7">
              <Link to="/kontakt/?service=overlatelsebesiktning&amp;source=hero">
                <Search className="mr-2 h-5 w-5" aria-hidden="true" />
                Fråga om besiktning
              </Link>
            </Button>
          </div>

          <Link className="mt-4 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline" to="/priser/">
            Se KA-paket från {PRICE_LABELS.kaBasFrom.replace('Från ', '')}
          </Link>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-muted-foreground">
            <span>{COMPANY.experienceLabel}</span>
            <span className="hidden sm:inline">•</span>
            <span>{COMPANY.affiliation.label}</span>
            <span className="hidden sm:inline">•</span>
            <a className="inline-flex items-center hover:text-accent" href={COMPANY.emailHref}>
              <Mail className="mr-1.5 h-4 w-4" /> {COMPANY.email}
            </a>
          </div>
        </div>

        <div className="animate-slide-up">
          <HeroBanner />
        </div>
      </div>
    </div>
  </section>
);
