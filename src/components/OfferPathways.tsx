import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pathways = [
  { name: 'Kontrollansvarig', description: 'KA enligt PBL', href: '/kontrollansvarig/' },
  { name: 'BAS-P', description: 'Projektering', href: '/bas-p/' },
  { name: 'BAS-U', description: 'Utförande', href: '/bas-u/' },
  { name: 'KA + BAS', description: 'Paket och priser', href: '/priser/#ka-bas-paket' },
  { name: 'Företag', description: 'Projekt eller portfölj', href: '/foretag/' },
  { name: 'Offert', description: 'Beskriv projektet', href: '/kontakt/' },
] as const;

interface OfferPathwaysProps {
  title?: string;
  className?: string;
}

export const OfferPathways = ({
  title = 'Hitta rätt upplägg för projektet',
  className = '',
}: OfferPathwaysProps) => (
  <section className={`bg-slate-50 py-12 sm:py-16 ${className}`} aria-labelledby="offer-pathways-title">
    <div className="container mx-auto px-4">
      <h2 id="offer-pathways-title" className="mb-7 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {pathways.map((pathway) => (
          <Link
            key={pathway.href}
            to={pathway.href}
            className="group flex min-h-24 items-center justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-primary/40 hover:shadow-md"
          >
            <span>
              <span className="block font-semibold text-slate-900 group-hover:text-primary">{pathway.name}</span>
              <span className="mt-1 block text-sm text-slate-600">{pathway.description}</span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);
