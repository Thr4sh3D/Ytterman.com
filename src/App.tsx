import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/sonner";

const Index = lazy(() => import("./pages/Index"));
const TjansterPage = lazy(() => import("./pages/TjansterPage"));
const KontaktPage = lazy(() => import("./pages/KontaktPage"));
const GuidesPage = lazy(() => import("./pages/GuidesPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const Integritetspolicy = lazy(() => import("./pages/Integritetspolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));

// Service pages
const KontrollansvarigPage = lazy(() => import("./pages/KontrollansvarigPage"));
const BasPPage = lazy(() => import("./pages/BasPPage"));
const BasUPage = lazy(() => import("./pages/BasUPage"));
const EnergiDeklarationPage = lazy(() => import("./pages/EnergiDeklarationPage"));
const OverlatelsebesiktningPage = lazy(() => import("./pages/OverlatelsebesiktningPage"));

const KontrollansvarigGuide = lazy(() => import("./pages/guides/KontrollansvarigGuide"));
const BasGuide = lazy(() => import("./pages/guides/BasGuide"));
const BygglovGuide = lazy(() => import("./pages/guides/BygglovGuide"));
const KvalitetskontrollGuide = lazy(() => import("./pages/guides/KvalitetskontrollGuide"));
const DigitalaVerktygGuide = lazy(() => import("./pages/guides/DigitalaVerktygGuide"));
const MiljoGuide = lazy(() => import("./pages/guides/MiljoGuide"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tjanster" element={<TjansterPage />} />
              
              {/* Service pages */}
              <Route path="/kontrollansvarig" element={<KontrollansvarigPage />} />
              <Route path="/bas-p" element={<BasPPage />} />
              <Route path="/bas-u" element={<BasUPage />} />
              <Route path="/energideklaration" element={<EnergiDeklarationPage />} />
              <Route path="/overlatelsebesiktning" element={<OverlatelsebesiktningPage />} />
              
              <Route path="/guider" element={<GuidesPage />} />
              <Route path="/guider/kontrollansvarig" element={<KontrollansvarigGuide />} />
              <Route path="/guider/bas" element={<BasGuide />} />
              <Route path="/guider/bygglov" element={<BygglovGuide />} />
              <Route path="/guider/kvalitetskontroll" element={<KvalitetskontrollGuide />} />
              <Route path="/guider/digitala-verktyg" element={<DigitalaVerktygGuide />} />
              <Route path="/guider/miljo" element={<MiljoGuide />} />
              <Route path="/blogg" element={<BlogPage />} />
              <Route path="/blogg/:slug" element={<BlogPostPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/kontakt" element={<KontaktPage />} />
              <Route path="/integritetspolicy" element={<Integritetspolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;