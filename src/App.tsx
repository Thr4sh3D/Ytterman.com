import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { ScrollToTop } from '@/components/ScrollToTop';
import { lazy, Suspense } from 'react';

// Critical Pages (eager load for fast initial render)
import Index from '@/pages/Index';
import TjansterPage from '@/pages/TjansterPage';
import KontaktPage from '@/pages/KontaktPage';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';

// Lazy-loaded Service Pages
const KontrollansvarigPage = lazy(() => import('@/pages/KontrollansvarigPage'));
const BasPPage = lazy(() => import('@/pages/BasPPage'));
const BasUPage = lazy(() => import('@/pages/BasUPage'));
const EnergiDeklarationPage = lazy(() => import('@/pages/EnergiDeklarationPage'));
const OverlatelsebesiktningPage = lazy(() => import('@/pages/OverlatelsebesiktningPage'));
const EnergiberakningOnlinePage = lazy(() => import('@/pages/EnergiberakningOnlinePage'));
const BygglovshandlingarPage = lazy(() => import('@/pages/BygglovshandlingarPage'));

// Lazy-loaded Info Pages
const GuidesPage = lazy(() => import('@/pages/GuidesPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const TackPage = lazy(() => import('@/pages/TackPage'));
const Integritetspolicy = lazy(() => import('@/pages/Integritetspolicy'));
const PriserPage = lazy(() => import('@/pages/PriserPage'));
const OmradenPage = lazy(() => import('@/pages/OmradenPage'));

// Lazy-loaded Guide Pages
const KontrollansvarigGuide = lazy(() => import('@/pages/guides/KontrollansvarigGuide'));
const BasGuide = lazy(() => import('@/pages/guides/BasGuide'));
const BygglovGuide = lazy(() => import('@/pages/guides/BygglovGuide'));
const KvalitetskontrollGuide = lazy(() => import('@/pages/guides/KvalitetskontrollGuide'));
const OverlatelsebesiktningGuide = lazy(() => import('@/pages/guides/OverlatelsebesiktningGuide'));
const EnergiGuide = lazy(() => import('@/pages/guides/EnergiGuide'));
const MiljoGuide = lazy(() => import('@/pages/guides/MiljoGuide'));
const DigitalaVerktygGuide = lazy(() => import('@/pages/guides/DigitalaVerktygGuide'));
const KontrollansvarigBygglovGuide = lazy(() => import('@/pages/guides/KontrollansvarigBygglovGuide'));
const KontrollansvarigCertifieringGuide = lazy(() => import('@/pages/guides/KontrollansvarigCertifieringGuide'));
const KontrollansvarigAnsvarGuide = lazy(() => import('@/pages/guides/KontrollansvarigAnsvarGuide'));
const KontrollansvarigTimprisGuide = lazy(() => import('@/pages/guides/KontrollansvarigTimprisGuide'));
const BasPGuideExtended = lazy(() => import('@/pages/guides/BasPGuideExtended'));
const BasUGuideExtended = lazy(() => import('@/pages/guides/BasUGuideExtended'));
const VadArBasGuide = lazy(() => import('@/pages/guides/VadArBasGuide'));
const TeknisktSamradGuide = lazy(() => import('@/pages/guides/TeknisktSamradGuide'));
const KontrollplanGuide = lazy(() => import('@/pages/guides/KontrollplanGuide'));
const SlutbeskedGuide = lazy(() => import('@/pages/guides/SlutbeskedGuide'));
const VasternorrlandGuide = lazy(() => import('@/pages/guides/VasternorrlandGuide'));
const BygglovsguideVanligaMisstag = lazy(() => import('@/pages/guides/BygglovsguideVanligaMisstag'));

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
                    <ScrollToTop />
                    <div className="min-h-screen">
                        <Suspense fallback={
                            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-amber-50">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
                                    <p className="text-stone-600 font-medium">Laddar...</p>
                                </div>
                            </div>
                        }>
                            <Routes>
                            {/* Main Pages */}
                            <Route path="/" element={<Index />} />
                            <Route path="/tjanster" element={<TjansterPage />} />
                            <Route path="/kontakt" element={<KontaktPage />} />
                            <Route path="/om" element={<About />} />
                            <Route path="/faq" element={<FAQPage />} />
                            <Route path="/priser" element={<PriserPage />} />
                            <Route path="/omraden" element={<OmradenPage />} />
                            <Route path="/tack" element={<TackPage />} />
                            <Route path="/integritetspolicy" element={<Integritetspolicy />} />
                            
                            {/* Service Pages */}
                            <Route path="/kontrollansvarig" element={<KontrollansvarigPage />} />
                            <Route path="/bas-p" element={<BasPPage />} />
                            <Route path="/bas-u" element={<BasUPage />} />
                            <Route path="/energideklaration" element={<EnergiDeklarationPage />} />
                            <Route path="/overlatelsebesiktning" element={<OverlatelsebesiktningPage />} />
                            <Route path="/energiberakning-online" element={<EnergiberakningOnlinePage />} />
                            <Route path="/bygglovshandlingar" element={<BygglovshandlingarPage />} />
                            
                            {/* Guides */}
                            <Route path="/guider" element={<GuidesPage />} />
                            <Route path="/guider/kontrollansvarig" element={<KontrollansvarigGuide />} />
                            <Route path="/guider/bas" element={<BasGuide />} />
                            <Route path="/guider/bygglov" element={<BygglovGuide />} />
                            <Route path="/guider/kvalitetskontroll" element={<KvalitetskontrollGuide />} />
                            <Route path="/guider/overlatelsebesiktning" element={<OverlatelsebesiktningGuide />} />
                            <Route path="/guider/energi" element={<EnergiGuide />} />
                            <Route path="/guider/miljo" element={<MiljoGuide />} />
                            <Route path="/guider/digitala-verktyg" element={<DigitalaVerktygGuide />} />
                            <Route path="/guider/kontrollansvarig-bygglov" element={<KontrollansvarigBygglovGuide />} />
                            <Route path="/guider/kontrollansvarig-certifiering" element={<KontrollansvarigCertifieringGuide />} />
                            <Route path="/guider/kontrollansvarig-ansvar" element={<KontrollansvarigAnsvarGuide />} />
                            <Route path="/guider/kontrollansvarig-timpris" element={<KontrollansvarigTimprisGuide />} />
                            <Route path="/guider/bas-p-guide" element={<BasPGuideExtended />} />
                            <Route path="/guider/bas-u-guide" element={<BasUGuideExtended />} />
                            <Route path="/guider/vad-ar-bas" element={<VadArBasGuide />} />
                            <Route path="/guider/tekniskt-samrad" element={<TeknisktSamradGuide />} />
                            <Route path="/guider/kontrollplan" element={<KontrollplanGuide />} />
                            <Route path="/guider/slutbesked" element={<SlutbeskedGuide />} />
                            <Route path="/guider/vasternorrland" element={<VasternorrlandGuide />} />
                            <Route path="/guider/bygglovsguide-vanliga-misstag-husbygge" element={<BygglovsguideVanligaMisstag />} />
                            
                            {/* 404 - Must be last */}
                            <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                        <Toaster />
                    </div>
                </Router>
            </QueryClientProvider>
        </HelmetProvider>
    );
}

export default App;