import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BlogCard } from '@/components/BlogCard';
import { Skeleton } from '@/components/ui/skeleton';
import { BookOpen } from 'lucide-react';
import type { BlogPostMeta } from '@/types/blog';

const MIN_READING_TIME_MINUTES = 3;
const DESCRIPTION_WORDS_PER_MINUTE = 50;
const POSTS_BATCH_SIZE = 9;

const estimateReadingTimeFromDescription = (description?: string) => {
  const safeDescription = typeof description === 'string' ? description : '';
  const wordCount = (safeDescription.match(/\S+/g) || []).length;

  return Math.max(
    MIN_READING_TIME_MINUTES,
    Math.ceil(wordCount / DESCRIPTION_WORDS_PER_MINUTE),
  );
};

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    fetch(`/api/blog-posts?limit=${POSTS_BATCH_SIZE}`)
      .then(async (res) => {
        const data = res.ok ? ((await res.json()) as BlogPostMeta[]) : [];
        const total = Number.parseInt(res.headers.get('X-Total-Count') || '0', 10);

        setPosts(Array.isArray(data) ? data : []);
        setTotalPosts(Number.isFinite(total) ? total : 0);
      })
      .catch(() => {
        setPosts([]);
        setTotalPosts(0);
      })
      .finally(() => setLoading(false));
  }, []);

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Guider', url: 'https://ytterman.com/guider' },
    { name: 'Blogg', url: 'https://ytterman.com/blogg' },
  ];
  const publishedPosts = posts.filter((post) => post.slug && post.title);
  const hasMorePosts = posts.length < totalPosts;

  const loadMorePosts = () => {
    setLoadingMore(true);

    fetch(`/api/blog-posts?limit=${POSTS_BATCH_SIZE}&offset=${posts.length}`)
      .then(async (res) => {
        const data = res.ok ? ((await res.json()) as BlogPostMeta[]) : [];
        const total = Number.parseInt(res.headers.get('X-Total-Count') || '0', 10);

        setPosts((currentPosts) => {
          const existingIds = new Set(currentPosts.map((post) => post.id));
          const nextPosts = Array.isArray(data)
            ? data.filter((post) => post.id && !existingIds.has(post.id))
            : [];

          return [...currentPosts, ...nextPosts];
        });
        setTotalPosts(Number.isFinite(total) ? total : 0);
      })
      .finally(() => setLoadingMore(false));
  };

  return (
    <>
      <AdvancedSEO
        title="Blogg – Byggkunskap & Tips | Ytterman"
        description="Expertartiklar om kontrollansvarig, BAS-P, BAS-U, bygglov och byggprocessen i Västernorrland. Ny kunskap publiceras varje dag."
        keywords="byggblogg, kontrollansvarig tips, BAS-P BAS-U, bygglov råd, byggkunskap, Västernorrland"
        url="https://ytterman.com/blogg"
        type="website"
        organization={true}
        breadcrumbs={breadcrumbs}
      />
      <CanonicalUrl path="/blogg" />

      <div className="min-h-screen">
        <Header />

        <main>
          {/* Breadcrumbs */}
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

          {/* Hero */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 earth-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Blogg från Ytterman
                </h1>
                <p className="text-xl text-slate-600">
                  Dagliga expertartiklar om byggprocessen – kontrollansvarig,
                  BAS-P/BAS-U, bygglov och mycket mer.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white border-y border-slate-100">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Kunskap för dig som planerar, bygger eller förvaltar
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    I bloggen samlar Tobias Ytterman artiklar om kontrollansvarig, BAS-P, BAS-U,
                    bygglov, energifrågor och vanliga misstag i byggprocessen. Innehållet är skrivet
                    för att hjälpa både privatpersoner, fastighetsägare och professionella aktörer att
                    fatta bättre beslut tidigare i projektet.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Målet är att göra komplexa regler och tekniska frågor mer begripliga. Du får
                    praktiska förklaringar, checklistor och resonemang som går att använda när du ska
                    planera nästa steg, jämföra lösningar eller förbereda dialogen med kommunen,
                    entreprenörer och andra konsulter.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    Det här hittar du i bloggen
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>Guider om kontrollansvarig, kontrollplaner och tekniskt samråd</li>
                    <li>Artiklar om BAS-P, BAS-U och arbetsmiljö i byggprojekt</li>
                    <li>Tips kring bygglov, handlingar, tidsplanering och projektstyrning</li>
                    <li>Innehåll om energiberäkning, energideklaration och byggteknik</li>
                    <li>Lokalt relevanta råd för projekt i Västernorrland och närliggande områden</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Posts grid */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="max-w-3xl mb-10">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Senaste artiklar och guider
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Här hittar du löpande publicerade inlägg om byggprocessen, vanliga frågor från
                    kunder och fördjupningar inom kontrollansvar, BAS, energifrågor och bygglov. Nya
                    artiklar fylls på efter hand och hjälper dig att orientera dig i både små och stora
                    beslut längs vägen.
                  </p>
                </div>

                {loading ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <Skeleton className="aspect-video w-full" />
                        <div className="p-6 space-y-3">
                          <Skeleton className="h-4 w-1/3" />
                          <Skeleton className="h-6 w-full" />
                          <Skeleton className="h-16 w-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : publishedPosts.length === 0 ? (
                  <div className="text-center py-20">
                    <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold text-slate-700 mb-3">
                      Inga inlägg publicerade än
                    </h2>
                    <p className="text-slate-500">
                      Nya artiklar publiceras dagligen. Kom tillbaka snart!
                    </p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {publishedPosts
                      .map((post, index) => (
                        <BlogCard
                          key={post.id}
                          priority={index < 3}
                          post={{
                            id: post.id,
                            title: post.title,
                            slug: post.slug,
                            excerpt: post.meta_description || '',
                            featured_image: post.main_image_url,
                            category: post.keyword ?? 'Byggkunskap',
                            author: 'Tobias Ytterman',
                            reading_time: estimateReadingTimeFromDescription(post.meta_description),
                            created_at: post.published_at,
                            tags: post.keyword ? [post.keyword] : [],
                          }}
                        />
                     ))}
                  </div>
                )}

                {!loading && hasMorePosts && (
                  <div className="mt-12 text-center">
                    <button
                      type="button"
                      onClick={loadMorePosts}
                      disabled={loadingMore}
                      className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-900 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors font-semibold disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loadingMore ? 'Laddar fler artiklar...' : 'Visa fler artiklar'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Behöver du professionell hjälp?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation om ditt byggprojekt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/kontakt/"
                  className="inline-flex items-center justify-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                >
                  Kontakta oss
                </a>
                <a
                  href="tel:+46761118447"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold"
                >
                  Ring: 076-111 84 47
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPage;
