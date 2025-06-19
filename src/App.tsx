import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogVadGorEnKontrollansvarig from "./pages/BlogVadGorEnKontrollansvarig";
import BlogKaEllerBasP from "./pages/BlogKaEllerBasP";
import KASundsvall from "./pages/KASundsvall";
import KAHarnosand from "./pages/KAHarnosand";
import KASolleftea from "./pages/KASolleftea";
import KATimra from "./pages/KATimra";
import KAKramfors from "./pages/KAKramfors";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('App component is rendering');
  
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blogg" element={<Blog />} />
              <Route path="/blogg/vad-gor-en-kontrollansvarig" element={<BlogVadGorEnKontrollansvarig />} />
              <Route path="/blogg/ka-eller-bas-p" element={<BlogKaEllerBasP />} />
              <Route path="/ka-sundsvall" element={<KASundsvall />} />
              <Route path="/ka-harnosand" element={<KAHarnosand />} />
              <Route path="/ka-solleftea" element={<KASolleftea />} />
              <Route path="/ka-timra" element={<KATimra />} />
              <Route path="/ka-kramfors" element={<KAKramfors />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;