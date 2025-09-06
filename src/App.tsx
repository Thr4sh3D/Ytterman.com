import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { GoogleSearchConsole } from '@/components/GoogleSearchConsole';
import { Suspense, lazy } from 'react';

// Lazy load all pages for better performance
const Index = lazy(() => import("./pages/Index"));
const TjansterPage = lazy(() => import("./pages/TjansterPage"));
const KontaktPage = lazy(() => import("./pages/KontaktPage"));
const GuidesPage = lazy(() => import("./pages/GuidesPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const Integritetspolicy = lazy(() => import("./pages/Integritetspolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load guide pages
const KontrollansvarigGuide = lazy(() => import("./pages/guides/KontrollansvarigGuide"));
const BasGuide = lazy(() => import("./pages/guides/BasGuide"));
const BygglovGuide = lazy(() => import("./pages/guides/BygglovGuide"));
const KvalitetskontrollGuide = lazy(() => import("./pages/guides/KvalitetskontrollGuide"));
const DigitalaVerktygGuide = lazy(() => import("./pages/guides/DigitalaVerktygGuide"));
const MiljoGuide = lazy(() => import("./pages/guides/MiljoGuide"));

// Loading component for better UX during lazy loading
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-slate-600">Laddar sida...</p>
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: (failureCount, error: any) => {
        // Don't retry authentication errors
        if (error?.message?.includes('Failed to fetch') || 
            error?.message?.includes('invalid JWT')) {
          return false;
        }
        return failureCount < 3;
      }
    },
  },
});

const App = () => (
  <HelmetProvider>
    <GoogleSearchConsole />
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tjanster" element={<TjansterPage />} />
              <Route path="/guider" element={<GuidesPage />} />
              <Route path="/guider/kontrollansvarig" element={<KontrollansvarigGuide />} />
              <Route path="/guider/bas" element={<BasGuide />} />
              <Route path="/guider/bygglov" element={<BygglovGuide />} />
              <Route path="/guider/kvalitetskontroll" element={<KvalitetskontrollGuide />} />
              <Route path="/guider/digitala-verktyg" element={<DigitalaVerktygGuide />} />
              <Route path="/guider/miljo" element={<MiljoGuide />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/kontakt" element={<KontaktPage />} />
              <Route path="/integritetspolicy" element={<Integritetspolicy />} />
              {/* Catch-all route for 404 pages - CRITICAL for SEO */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;