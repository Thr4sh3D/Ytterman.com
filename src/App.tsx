import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { DynamicSitemap } from "@/components/DynamicSitemap";
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
import TackPage from "./pages/TackPage";
import BlogCleanupPage from "./pages/BlogCleanupPage";

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
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <GoogleTagManager />
          <PerformanceOptimizer />
          <DynamicSitemap />
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
              <Route path="/kontakt" element={<KontaktPage />} />
              <Route path="/tack" element={<TackPage />} />
              <Route path="/analys" element={<SiteAnalysisPage />} />
              <Route path="/admin/blog-cleanup" element={<BlogCleanupPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;