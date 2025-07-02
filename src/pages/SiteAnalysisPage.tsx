import { SiteAnalysisDisplay } from '@/components/SiteAnalysisDisplay';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const SiteAnalysisPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <SiteAnalysisDisplay />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SiteAnalysisPage;