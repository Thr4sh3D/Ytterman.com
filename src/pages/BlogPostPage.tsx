import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';

interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  content: string;
  format: 'markdown' | 'html';
  published_at: string;
  main_image_url: string;
  meta_description: string;
  keyword: string | null;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blog-posts?slug=${encodeURIComponent(slug)}`)
      .then((res) => {
        if (res.status === 404) { setNotFound(true); return null; }
        return res.json();
      })
      .then((data) => { if (data) setArticle(data); })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Guider', url: 'https://ytterman.com/guider' },
    { name: 'Blogg', url: 'https://ytterman.com/blogg' },
    ...(article ? [{ name: article.title, url: `https://ytterman.com/blogg/${article.slug}` }] : []),
  ];

  return (
    <>
      {article && (
        <>
          <AdvancedSEO
            title={`${article.title} | Ytterman`}
            description={article.meta_description}
            keywords={article.keyword ?? 'byggkunskap, kontrollansvarig, byggprocess'}
            url={`https://ytterman.com/blogg/${article.slug}`}
            type="article"
            breadcrumbs={breadcrumbs}
          />
          <CanonicalUrl path={`/blogg/${article.slug}`} />
        </>
      )}

      <div className="min-h-screen">
        <Header />

        <main>
          {/* Breadcrumbs */}
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

          <div className="container mx-auto px-4 py-16 max-w-4xl">
            {loading ? (
              <div className="space-y-6">
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="aspect-video w-full rounded-xl" />
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => <Skeleton key={i} className="h-4 w-full" />)}
                </div>
              </div>
            ) : notFound || !article ? (
              <div className="text-center py-20">
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Artikel hittades inte</h1>
                <p className="text-slate-500 mb-8">
                  Artikeln du söker finns inte eller har tagits bort.
                </p>
                <Link
                  to="/blogg/"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Tillbaka till bloggen
                </Link>
              </div>
            ) : (
              <article>
                {/* Back link */}
                <Link
                  to="/blogg/"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mb-8 block"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Tillbaka till bloggen
                </Link>

                {/* Header */}
                <header className="mb-8">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.published_at)}</span>
                    </div>
                    {article.keyword && (
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {article.keyword}
                        </span>
                      </div>
                    )}
                  </div>
                  <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
                    {article.title}
                  </h1>
                  <p className="text-xl text-slate-600">{article.meta_description}</p>
                </header>

                {/* Featured image */}
                {article.main_image_url && (
                  <div className="aspect-video overflow-hidden rounded-xl mb-10">
                    <img
                      src={article.main_image_url}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                {article.format === 'markdown' ? (
                  <div className="prose prose-slate prose-lg max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {article.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div
                    className="prose prose-slate prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                )}

                {/* Footer CTA */}
                <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Behöver du hjälp med ditt byggprojekt?
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Kontakta Tobias Ytterman för en kostnadsfri konsultation om
                    kontrollansvarig, BAS-P/BAS-U eller överlåtelsebesiktning.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/kontakt/"
                      className="inline-flex items-center justify-center px-6 py-3 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                    >
                      Kontakta oss
                    </a>
                    <a
                      href="tel:+46761118447"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 text-slate-900 rounded-lg hover:border-slate-400 transition-colors font-semibold"
                    >
                      Ring: 076-111 84 47
                    </a>
                  </div>
                </div>
              </article>
            )}
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPostPage;
