import { ArrowRight, Check, Info, Mail, MinusCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  KA_BAS_PACKAGE,
  KA_PACKAGE_LEVELS,
  KA_PROJECT_OFFERS,
  OFFER_EXCLUSIONS,
  OFFER_TERMS,
} from '@/config/commercialOffers';
import { PRICING } from '@/config/company';

export const PricingPackages = () => (
  <section id="paket-priser" className="bg-gradient-to-br from-slate-50 to-amber-50 py-16 sm:py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">
          Paketpriser {PRICING.year} inklusive moms
        </p>
        <h2 className="mb-5 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
          Bas eller Plus – se priset för ditt projekt
        </h2>
        <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
          Bas ger en tydligt avgränsad KA-leverans. Plus passar när projektet behöver fler
          avstämningar, fler besök och tätare uppföljning.
        </p>
      </div>

      <div className="mx-auto mb-12 max-w-5xl">
        <div className="space-y-4 md:hidden">
          {KA_PROJECT_OFFERS.map((offer) => (
            <article key={offer.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">{offer.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{offer.description}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">KA Bas</dt>
                  <dd className="mt-1 text-lg font-bold text-slate-900">{offer.basPrice}</dd>
                </div>
                <div className="rounded-lg bg-primary/10 p-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-primary">KA Plus</dt>
                  <dd className="mt-1 text-lg font-bold text-slate-900">{offer.plusPrice}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
          <table className="w-full text-left">
            <caption className="sr-only">Paketpriser per projekttyp inklusive moms</caption>
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold" scope="col">Projekttyp</th>
                <th className="px-6 py-4 font-semibold" scope="col">KA Bas</th>
                <th className="px-6 py-4 font-semibold" scope="col">KA Plus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {KA_PROJECT_OFFERS.map((offer) => (
                <tr key={offer.id}>
                  <th className="px-6 py-5" scope="row">
                    <span className="block font-semibold text-slate-900">{offer.name}</span>
                    <span className="mt-1 block max-w-xl text-sm font-normal text-slate-600">{offer.description}</span>
                  </th>
                  <td className="px-6 py-5 text-lg font-bold text-slate-900">{offer.basPrice}</td>
                  <td className="bg-primary/5 px-6 py-5 text-lg font-bold text-primary">{offer.plusPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mx-auto mb-8 grid max-w-5xl gap-6 lg:grid-cols-2">
        {KA_PACKAGE_LEVELS.map((level) => (
          <article
            key={level.id}
            className={`relative rounded-2xl bg-white p-6 shadow-sm sm:p-8 ${
              level.popular ? 'border-2 border-primary' : 'border border-slate-200'
            }`}
          >
            {level.popular && (
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                <Star className="h-4 w-4" /> Utökad nivå
              </span>
            )}
            <h3 className="text-2xl font-bold text-slate-900">{level.name}</h3>
            <p className="mt-1 font-semibold text-primary">{level.subtitle}</p>
            <p className="mt-4 text-slate-600">{level.description}</p>
            <h4 className="mt-6 font-semibold text-slate-900">Detta ingår</h4>
            <ul className="mt-3 space-y-3">
              {level.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-7 w-full earth-gradient text-white hover:opacity-90">
              <Link to={`/kontakt/?service=ka&utm_source=ytterman&utm_medium=internal&utm_campaign=${level.id}`}>
                Få offert på {level.name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </article>
        ))}
      </div>

      <article id="ka-bas-paket" className="mx-auto mb-8 max-w-5xl scroll-mt-28 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-amber-800">{KA_BAS_PACKAGE.subtitle}</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">{KA_BAS_PACKAGE.name}</h3>
            <p className="mt-3 text-3xl font-bold text-primary">{KA_BAS_PACKAGE.price}</p>
            <p className="mt-1 text-sm text-slate-600">inklusive moms, beroende på projekt</p>
            <p className="mt-5 text-slate-700">{KA_BAS_PACKAGE.description}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Möjligt innehåll enligt slutlig offert</h4>
            <ul className="mt-3 space-y-3">
              {KA_BAS_PACKAGE.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6 earth-gradient text-white hover:opacity-90">
              <Link to="/kontakt/?service=ka-bas&utm_source=ytterman&utm_medium=internal&utm_campaign=ka-bas-paket">
                Få offert på paketet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
        <aside className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <MinusCircle className="h-5 w-5 text-slate-500" /> Detta ingår inte
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
            {OFFER_EXCLUSIONS.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </aside>
        <aside className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <Info className="h-5 w-5 text-blue-700" /> Villkor före start
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
            {OFFER_TERMS.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </aside>
      </div>

      <div className="mx-auto mt-10 max-w-3xl text-center">
        <h3 className="mb-3 text-2xl font-bold text-slate-900">Osäker på vilket paket som passar?</h3>
        <p className="mb-7 text-slate-700">
          Beskriv projektet och skicka de handlingar du har, så får du ett förslag på omfattning och nästa steg.
        </p>
        <Button asChild size="lg" className="earth-gradient text-white hover:opacity-90">
          <Link to="/kontakt/?utm_source=ytterman&utm_medium=internal&utm_campaign=pricing-help">
            <Mail className="mr-2 h-5 w-5" /> Begär offert
          </Link>
        </Button>
      </div>
    </div>
  </section>
);
