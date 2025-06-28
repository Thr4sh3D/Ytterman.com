import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";
import KontrollansvarigSundsvall from "./pages/local/KontrollansvarigSundsvall";
import BasPHarnosand from "./pages/local/BasPHarnosand";
import ByggkontrollSolleftea from "./pages/local/ByggkontrollSolleftea";
import KontrollansvarigTimra from "./pages/local/KontrollansvarigTimra";
import BasUKramfors from "./pages/local/BasUKramfors";
import KontrollansvarigTjanst from "./pages/KontrollansvarigTjanst";
import BasPTjanst from "./pages/BasPTjanst";
import BasUTjanst from "./pages/BasUTjanst";
import VillorSmahus from "./pages/VillorSmahus";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blogg" element={<Blog />} />
            <Route path="/blogg/:slug" element={<BlogPost />} />
            <Route path="/tjanster" element={<Services />} />
            
            {/* Tjänstesidor */}
            <Route path="/kontrollansvarig" element={<KontrollansvarigTjanst />} />
            <Route path="/bas-p" element={<BasPTjanst />} />
            <Route path="/bas-u" element={<BasUTjanst />} />
            
            {/* Branschspecifika sidor */}
            <Route path="/villor-smahus" element={<VillorSmahus />} />
            
            {/* Lokala sidor */}
            <Route path="/kontrollansvarig-sundsvall" element={<KontrollansvarigSundsvall />} />
            <Route path="/bas-p-harnosand" element={<BasPHarnosand />} />
            <Route path="/byggkontroll-solleftea" element={<ByggkontrollSolleftea />} />
            <Route path="/kontrollansvarig-timra" element={<KontrollansvarigTimra />} />
            <Route path="/bas-u-kramfors" element={<BasUKramfors />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
