import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const BlogPostPage = () => {
  return (
    <>
      <Helmet>
        <title>Bloggpost | Ytterman</title>
        <meta name="description" content="Byggkunskap, tips och nyheter om kontrollansvarig, BAS-P, BAS-U och byggprocessen i Västernorrland." />
        <link rel="canonical" href="https://ytterman.com/blogg/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Bloggpost</h1>
            <p className="text-slate-600">Bloggfunktionalitet kommer snart</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;