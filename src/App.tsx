import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { ScrollToTop } from '@/components/ScrollToTop';

// Pages
import Index from '@/pages/Index';
import TjansterPage from '@/pages/TjansterPage';
import KontaktPage from '@/pages/KontaktPage';
import KontrollansvarigPage from '@/pages/KontrollansvarigPage';
import BasPPage from '@/pages/BasPPage';
import BasUPage from '@/pages/BasUPage';
import EnergiDeklarationPage from '@/pages/EnergiDeklarationPage';
import OverlatelsebesiktningPage from '@/pages/OverlatelsebesiktningPage';
import EnergiberakningOnlinePage from '@/pages/EnergiberakningOnlinePage';
import GuidesPage from '@/pages/GuidesPage';
import FAQPage from '@/pages/FAQPage';
import About from '@/pages/About';
import TackPage from '@/pages/TackPage';
import Integritetspolicy from '@/pages/Integritetspolicy';
import PriserPage from '@/pages/PriserPage';
import OmradenPage from '@/pages/OmradenPage';

// Guide Pages
import KontrollansvarigGuide from '@/pages/guides/KontrollansvarigGuide';
import BasGuide from '@/pages/guides/BasGuide';
import BygglovGuide from '@/pages/guides/BygglovGuide';
import KvalitetskontrollGuide from '@/pages/guides/KvalitetskontrollGuide';
import OverlatelsebesiktningGuide from '@/pages/guides/OverlatelsebesiktningGuide';
import EnergiGuide from '@/pages/guides/EnergiGuide';
import MiljoGuide from '@/pages/guides/MiljoGuide';
import DigitalaVerktygGuide from '@/pages/guides/DigitalaVerktygGuide';
import KontrollansvarigBygglovGuide from '@/pages/guides/KontrollansvarigBygglovGuide';
import KontrollansvarigCertifieringGuide from '@/pages/guides/KontrollansvarigCertifieringGuide';
import KontrollansvarigAnsvarGuide from '@/pages/guides/KontrollansvarigAnsvarGuide';
import KontrollansvarigTimprisGuide from '@/pages/guides/KontrollansvarigTimprisGuide';
import BasPGuideExtended from '@/pages/guides/BasPGuideExtended';
import BasUGuideExtended from '@/pages/guides/BasUGuideExtended';
import VadArBasGuide from '@/pages/guides/VadArBasGuide';
import TeknisktSamradGuide from '@/pages/guides/TeknisktSamradGuide';
import KontrollplanGuide from '@/pages/guides/KontrollplanGuide';
import SlutbeskedGuide from '@/pages/guides/SlutbeskedGuide';
import VasternorrlandGuide from '@/pages/guides/VasternorrlandGuide';
import BygglovsguideVanligaMisstag from '@/pages/guides/BygglovsguideVanligaMisstag';

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
                    <ScrollToTop />
                    <div className="min-h-screen">
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
                        <Toaster />
                    </div>
                </Router>
            </QueryClientProvider>
        </HelmetProvider>
    );
}

export default App;