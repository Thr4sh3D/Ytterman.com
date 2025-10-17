import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import GoogleConsentMode from '@/components/GoogleConsentMode';
import GoogleAdsTracking from '@/components/GoogleAdsTracking';

// Pages
import Index from '@/pages/Index';
import KontaktPage from '@/pages/KontaktPage';
import TjansterPage from '@/pages/TjansterPage';
import KontrollansvarigPage from '@/pages/KontrollansvarigPage';
import BasPPage from '@/pages/BasPPage';
import BasUPage from '@/pages/BasUPage';
import EnergiDeklarationPage from '@/pages/EnergiDeklarationPage';
import OverlatelsebesiktningPage from '@/pages/OverlatelsebesiktningPage';
import EnergiberakningOnlinePage from '@/pages/EnergiberakningOnlinePage';
import GuidesPage from '@/pages/GuidesPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import About from '@/pages/About';
import FAQPage from '@/pages/FAQPage';
import Integritetspolicy from '@/pages/Integritetspolicy';
import TackPage from '@/pages/TackPage';
import NotFound from '@/pages/NotFound';

// Guide Pages
import KontrollansvarigGuide from '@/pages/guides/KontrollansvarigGuide';
import BasGuide from '@/pages/guides/BasGuide';
import BygglovGuide from '@/pages/guides/BygglovGuide';
import KvalitetskontrollGuide from '@/pages/guides/KvalitetskontrollGuide';
import DigitalaVerktygGuide from '@/pages/guides/DigitalaVerktygGuide';
import MiljoGuide from '@/pages/guides/MiljoGuide';
import EnergiGuide from '@/pages/guides/EnergiGuide';
import OverlatelsebesiktningGuide from '@/pages/guides/OverlatelsebesiktningGuide';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Index />} />
              <Route path="/kontakt" element={<KontaktPage />} />
              <Route path="/tack" element={<TackPage />} />
              <Route path="/tjanster" element={<TjansterPage />} />
              <Route path="/kontrollansvarig" element={<KontrollansvarigPage />} />
              <Route path="/bas-p" element={<BasPPage />} />
              <Route path="/bas-u" element={<BasUPage />} />
              <Route path="/energideklaration" element={<EnergiDeklarationPage />} />
              <Route path="/overlatelsebesiktning" element={<OverlatelsebesiktningPage />} />
              <Route path="/energiberakning-online" element={<EnergiberakningOnlinePage />} />
              <Route path="/guider" element={<GuidesPage />} />
              <Route path="/blogg" element={<BlogPage />} />
              <Route path="/blogg/:slug" element={<BlogPostPage />} />
              <Route path="/om-oss" element={<About />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/integritetspolicy" element={<Integritetspolicy />} />
              
              {/* Guide Pages */}
              <Route path="/guider/kontrollansvarig" element={<KontrollansvarigGuide />} />
              <Route path="/guider/bas" element={<BasGuide />} />
              <Route path="/guider/bygglov" element={<BygglovGuide />} />
              <Route path="/guider/kvalitetskontroll" element={<KvalitetskontrollGuide />} />
              <Route path="/guider/digitala-verktyg" element={<DigitalaVerktygGuide />} />
              <Route path="/guider/miljo" element={<MiljoGuide />} />
              <Route path="/guider/energi" element={<EnergiGuide />} />
              <Route path="/guider/overlatelsebesiktning" element={<OverlatelsebesiktningGuide />} />
              
              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <GoogleConsentMode />
            <GoogleAdsTracking 
              conversionId="AW-CONVERSION_ID"
              phoneConversionLabel="PHONE_CONVERSION_LABEL"
              formConversionLabel="FORM_CONVERSION_LABEL"
            />
          </div>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;