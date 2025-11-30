import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';

// Pages
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
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
                            <Route path="/" element={<Index />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        <Toaster />
                    </div>
                </Router>
            </QueryClientProvider>
        </HelmetProvider>
    );
}

export default App;