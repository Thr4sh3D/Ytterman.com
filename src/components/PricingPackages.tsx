import { ArrowRight, Check, Mail, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { pricingPackages } from '@/content/pricingPackages';
import { PRICING } from '@/config/company';

export const PricingPackages = () => (
  <section id="paket-priser" className="bg-gradient-to-br from-slate-50 to-amber-50 py-16 sm:py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">Tydliga paketpriser {PRICING.year}</p>
        <h2 className="mb-5 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
          Välj nivån som passar ditt projekt
        </h2>
        <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
          Du ser startpriset direkt. Offerten bekräftar omfattning, platsbesök, resor och
          kompletteringsvillkor innan du bestämmer dig.
        </p>
      </div>

      <div className="mx-auto mb-10 grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-3">
        {pricingPackages.map((pkg) => (
          <article
            key={pkg.id}
            className={`relative flex flex-col rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:p-8 ${
              pkg.popular ? 'border-2 border-primary lg:-translate-y-2' : 'border border-slate-200'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="earth-gradient flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold text-white shadow-lg">
                  <Star className="h-4 w-4" /> Utökad uppföljning
                </span>
              </div>
            )}

            <div className="mb-6 text-center">
              <h3 className="mb-2 text-2xl font-bold text-slate-900">{pkg.name}</h3>
              <p className="mb-4 text-sm font-semibold text-primary">{pkg.subtitle}</p>
              <div className="text-3xl font-bold text-slate-900 md:text-4xl">{pkg.price}</div>
              {pkg.priceSubtext && <p className="mt-1 text-sm text-slate-600">{pkg.priceSubtext}</p>}
              <p className="mt-4 leading-relaxed text-slate-600">{pkg.description}</p>
            </div>

            <ul className="mb-8 flex-grow space-y-3">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild className={`w-full ${pkg.popular ? 'earth-gradient text-white' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
              <Link to={`/kontakt/?package=${pkg.id}&source=pricing`}>
                Få offert på {pkg.name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </article>
        ))}
      </div>

      <div className="mx-auto mb-10 max-w-4xl rounded-xl border border-amber-200 bg-white/80 p-5 text-sm text-slate-700">
        <strong>Bra att veta:</strong> {PRICING.supplementRule} Projektets komplexitet,
        platsbesök och resor kan påverka slutpriset och anges därför i offerten.
      </div>

      <div className="text-center">
        <h3 className="mb-3 text-2xl font-bold text-slate-900">Osäker på vilket paket som passar?</h3>
        <p className="mx-auto mb-7 max-w-2xl text-slate-700">
          Beskriv projektet och skicka de handlingar du har, så får du ett förslag på omfattning och nästa steg.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="earth-gradient text-white hover:opacity-90">
            <Link to="/kontakt/?source=pricing-help">
              <Mail className="mr-2 h-5 w-5" /> Få offert
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link to="/priser/">Se alla projekttypspriser</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
