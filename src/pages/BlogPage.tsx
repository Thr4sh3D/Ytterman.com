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

const estimateReadingTimeFromDescription = (description?: string) => {
  const safeDescription = typeof description === 'string' ? description : '';
  return Math.max(
    MIN_READING_TIME_MINUTES,
    Math.ceil(safeDescription.split(' ').filter(Boolean).length / DESCRIPTION_WORDS_PER_MINUTE),
  );
};

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog-posts')
      .then((res) => (res.ok ? res.json() : []))
      .then((data: BlogPostMeta[]) => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Guider', url: 'https://ytterman.com/guider' },
    { name: 'Blogg', url: 'https://ytterman.com/blogg' },
  ];

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

          {/* Posts grid */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
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
                ) : posts.length === 0 ? (
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
                    {posts
                      .filter((post) => post.slug && post.title)
                      .map((post) => (
                      <BlogCard
                        key={post.id}
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
