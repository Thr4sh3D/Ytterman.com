import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { TechnicalSEO } from '@/components/TechnicalSEO';
import { SEOOptimizer } from '@/components/SEOOptimizer';
import { PerformanceMonitor } from '@/components/PerformanceMonitor';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TjansterPage from "./pages/TjansterPage";
import KontrollansvarigPage from "./pages/KontrollansvarigPage";
import BasPPage from "./pages/BasPPage";
import BasUPage from "./pages/BasUPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import KontaktPage from "./pages/KontaktPage";
import SiteAnalysisPage from "./pages/SiteAnalysisPage";
import ResourcesPage from "./pages/ResourcesPage";
import BlogAdminPage from "./pages/BlogAdminPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TechnicalSEO />
        <SEOOptimizer />
        <PerformanceMonitor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tjanster" element={<TjansterPage />} />
            <Route path="/kontrollansvarig" element={<KontrollansvarigPage />} />
            <Route path="/bas-p" element={<BasPPage />} />
            <Route path="/bas-u" element={<BasUPage />} />
            <Route path="/blogg" element={<BlogPage />} />
            <Route path="/blogg/:slug" element={<BlogPostPage />} />
            <Route path="/admin/blogg" element={<BlogAdminPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/analys" element={<SiteAnalysisPage />} />
            <Route path="/resurser" element={<ResourcesPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
