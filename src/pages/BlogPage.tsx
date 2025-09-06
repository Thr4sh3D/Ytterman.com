import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Blogg</h1>
          <p className="text-slate-600">Bloggfunktionalitet kommer snart</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;