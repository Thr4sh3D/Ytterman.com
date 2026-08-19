import { Mail } from 'lucide-react';
import { COMPANY } from '@/config/company';

const reviewRequestHref = `${COMPANY.emailHref}?subject=${encodeURIComponent('Recension efter avslutat projekt')}`;

export const ReviewRequestCta = () => (
  <section className="border-y border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-2xl font-bold text-slate-900">Har vi avslutat ett projekt tillsammans?</h2>
      <p className="mx-auto mt-3 max-w-2xl text-slate-600">
        Be om en recensionslänk om du vill dela din upplevelse. Ingen förfrågan skickas automatiskt
        från webbplatsen.
      </p>
      <a
        href={reviewRequestHref}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        Be om recensionslänk
      </a>
    </div>
  </section>
);
