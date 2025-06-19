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
  console.log('🚀 App component is starting to render');
  console.log('📦 All imports loaded successfully');
  
  try {
    console.log('🔧 Creating app structure...');
    
    return (
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <div style={{ minHeight: '100vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
                <h1 style={{ color: 'red', fontSize: '24px', marginBottom: '20px' }}>
                  🔍 DEBUG: App is rendering - you should see this!
                </h1>
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
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    );
  } catch (error) {
    console.error('💥 Error in App component:', error);
    return (
      <div style={{ padding: '20px', backgroundColor: 'red', color: 'white' }}>
        <h1>ERROR IN APP COMPONENT</h1>
        <p>{error.toString()}</p>
      </div>
    );
  }
};

export default App;