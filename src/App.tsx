import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { GoogleSearchConsole } from '@/components/GoogleSearchConsole';
import Index from "./pages/Index";
import TjansterPage from "./pages/TjansterPage";
import KontaktPage from "./pages/KontaktPage";
import GuidesPage from "./pages/GuidesPage";
import FAQPage from "./pages/FAQPage";
import Integritetspolicy from "./pages/Integritetspolicy";
import KontrollansvarigGuide from "./pages/guides/KontrollansvarigGuide";
import BasGuide from "./pages/guides/BasGuide";
import BygglovGuide from "./pages/guides/BygglovGuide";
import KvalitetskontrollGuide from "./pages/guides/KvalitetskontrollGuide";
import DigitalaVerktygGuide from "./pages/guides/DigitalaVerktygGuide";
import MiljoGuide from "./pages/guides/MiljoGuide";

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
            {/* Catch-all route for non-existent pages */}
            <Route path="*" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;