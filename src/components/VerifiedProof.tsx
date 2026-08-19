import { getPublishedCaseStudies, getPublishedCustomerReviews } from '@/content/verifiedProof';

export const VerifiedProof = () => {
  const cases = getPublishedCaseStudies();
  const reviews = getPublishedCustomerReviews();

  if (cases.length === 0 && reviews.length === 0) return null;

  return (
    <section className="my-10 space-y-8" aria-label="Verifierade kundbevis">
      {cases.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Verifierade projekt</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {cases.map((item) => (
              <article key={item.id} className="rounded-lg border bg-white p-5">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.summary}</p>
                <p className="mt-3 text-sm text-slate-500">{item.service} · {item.area}</p>
              </article>
            ))}
          </div>
        </div>
      )}

      {reviews.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Verifierade kundomdömen</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {reviews.map((item) => (
              <figure key={item.id} className="rounded-lg border bg-white p-5">
                <blockquote className="text-slate-700">“{item.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-slate-500">
                  {item.authorLabel} · {item.service}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
