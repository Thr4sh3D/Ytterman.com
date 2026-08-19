import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { ScrollToTop } from '@/components/ScrollToTop';
import { UrlCanonicalizer } from '@/components/UrlCanonicalizer';
import { RouteSeo } from '@/components/RouteSeo';
import { createAppQueryClient } from '@/lib/queryClient';
import { lazy, Suspense } from 'react';
import { ROUTE_PATHS } from '@/config/routeRegistry.mjs';

// Critical Pages (eager load for fast initial render)
import Index from '@/pages/Index';
import TjansterPage from '@/pages/TjansterPage';
import KontaktPage from '@/pages/KontaktPage';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';
import { AnalyticsProvider } from '@/components/AnalyticsProvider';
import GoogleConsentMode from '@/components/GoogleConsentMode';

// Lazy-loaded Service Pages
const KontrollansvarigPage = lazy(() => import('@/pages/KontrollansvarigPage'));
const BasPPage = lazy(() => import('@/pages/BasPPage'));
const BasUPage = lazy(() => import('@/pages/BasUPage'));
const EnergiDeklarationPage = lazy(() => import('@/pages/EnergiDeklarationPage'));
const OverlatelsebesiktningPage = lazy(() => import('@/pages/OverlatelsebesiktningPage'));
const EnergiberakningOnlinePage = lazy(() => import('@/pages/EnergiberakningOnlinePage'));
const BygglovshandlingarPage = lazy(() => import('@/pages/BygglovshandlingarPage'));

// Fjäll landing page
const KontrollansvarigFjallPage = lazy(() => import('@/pages/KontrollansvarigFjallPage'));

// City-specific Kontrollansvarig Pages
const KontrollansvarigSundsvall = lazy(() => import('@/pages/KontrollansvarigSundsvall'));
const KontrollansvarigHarnosand = lazy(() => import('@/pages/KontrollansvarigHarnosand'));
const KontrollansvarigTimra = lazy(() => import('@/pages/KontrollansvarigTimra'));
const KontrollansvarigKramfors = lazy(() => import('@/pages/KontrollansvarigKramfors'));
const KontrollansvarigSolleftea = lazy(() => import('@/pages/KontrollansvarigSolleftea'));

// City-specific Överlåtelsebesiktning Pages
const OverlatelsebesiktningSundsvall = lazy(() => import('@/pages/OverlatelsebesiktningSundsvall'));
const OverlatelsebesiktningHarnosand = lazy(() => import('@/pages/OverlatelsebesiktningHarnosand'));
const OverlatelsebesiktningTimra = lazy(() => import('@/pages/OverlatelsebesiktningTimra'));
const OverlatelsebesiktningKramfors = lazy(() => import('@/pages/OverlatelsebesiktningKramfors'));
const OverlatelsebesiktningSolleftea = lazy(() => import('@/pages/OverlatelsebesiktningSolleftea'));
const OverlatelsebesiktningOrnskoldsvik = lazy(() => import('@/pages/OverlatelsebesiktningOrnskoldsvik'));
const OverlatelsebesiktningAnge = lazy(() => import('@/pages/OverlatelsebesiktningAnge'));

// Lazy-loaded Info Pages
const GuidesPage = lazy(() => import('@/pages/GuidesPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const TackPage = lazy(() => import('@/pages/TackPage'));
const Integritetspolicy = lazy(() => import('@/pages/Integritetspolicy'));
const PriserPage = lazy(() => import('@/pages/PriserPage'));
const OmradenPage = lazy(() => import('@/pages/OmradenPage'));
const ForetagPage = lazy(() => import('@/pages/ForetagPage'));
const SamarbetaPage = lazy(() => import('@/pages/SamarbetaPage'));

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

// Blogg
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));

// Interaktiva verktyg / digitala produkter
const ByggstartPlanerare = lazy(() => import('@/pages/ByggstartPlanerare'));
const ProdukterPage = lazy(() => import('@/pages/ProdukterPage'));

export function AppRoutes() {
    return (
        <>
                    <UrlCanonicalizer />
                    <RouteSeo />
                    <ScrollToTop />
                    <AnalyticsProvider />
                    <GoogleConsentMode />
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
                            <Route path={ROUTE_PATHS.home} element={<Index />} />
                            <Route path={ROUTE_PATHS.services} element={<TjansterPage />} />
                            <Route path={ROUTE_PATHS.contact} element={<KontaktPage />} />
                            <Route path={ROUTE_PATHS.about} element={<About />} />
                            <Route path={ROUTE_PATHS.faq} element={<FAQPage />} />
                            <Route path={ROUTE_PATHS.prices} element={<PriserPage />} />
                            <Route path={ROUTE_PATHS.areas} element={<OmradenPage />} />
                            <Route path={ROUTE_PATHS.business} element={<ForetagPage />} />
                            <Route path={ROUTE_PATHS.collaboration} element={<SamarbetaPage />} />
                            <Route path={ROUTE_PATHS.thankYou} element={<TackPage />} />
                            <Route path={ROUTE_PATHS.privacy} element={<Integritetspolicy />} />
                            
                            {/* Service Pages */}
                            <Route path={ROUTE_PATHS.kontrollansvarig} element={<KontrollansvarigPage />} />
                            <Route path={ROUTE_PATHS.kontrollansvarigFjall} element={<KontrollansvarigFjallPage />} />
                            <Route path={ROUTE_PATHS.basP} element={<BasPPage />} />
                            <Route path={ROUTE_PATHS.basU} element={<BasUPage />} />
                            <Route path={ROUTE_PATHS.energyDeclaration} element={<EnergiDeklarationPage />} />
                            <Route path={ROUTE_PATHS.inspection} element={<OverlatelsebesiktningPage />} />
                            <Route path={ROUTE_PATHS.energyCalculation} element={<EnergiberakningOnlinePage />} />
                            <Route path={ROUTE_PATHS.buildingPermitDocuments} element={<BygglovshandlingarPage />} />
                            
                            {/* City-specific Kontrollansvarig Pages */}
                            <Route path={ROUTE_PATHS.kontrollansvarigSundsvall} element={<KontrollansvarigSundsvall />} />
                            <Route path={ROUTE_PATHS.kontrollansvarigHarnosand} element={<KontrollansvarigHarnosand />} />
                            <Route path={ROUTE_PATHS.kontrollansvarigTimra} element={<KontrollansvarigTimra />} />
                            <Route path={ROUTE_PATHS.kontrollansvarigKramfors} element={<KontrollansvarigKramfors />} />
                            <Route path={ROUTE_PATHS.kontrollansvarigSolleftea} element={<KontrollansvarigSolleftea />} />
                            
                            {/* City-specific Överlåtelsebesiktning Pages */}
                            <Route path={ROUTE_PATHS.inspectionSundsvall} element={<OverlatelsebesiktningSundsvall />} />
                            <Route path={ROUTE_PATHS.inspectionHarnosand} element={<OverlatelsebesiktningHarnosand />} />
                            <Route path={ROUTE_PATHS.inspectionTimra} element={<OverlatelsebesiktningTimra />} />
                            <Route path={ROUTE_PATHS.inspectionKramfors} element={<OverlatelsebesiktningKramfors />} />
                            <Route path={ROUTE_PATHS.inspectionSolleftea} element={<OverlatelsebesiktningSolleftea />} />
                            <Route path={ROUTE_PATHS.inspectionOrnskoldsvik} element={<OverlatelsebesiktningOrnskoldsvik />} />
                            <Route path={ROUTE_PATHS.inspectionAnge} element={<OverlatelsebesiktningAnge />} />
                            
                            {/* Guides */}
                            <Route path={ROUTE_PATHS.guides} element={<GuidesPage />} />
                            <Route path={ROUTE_PATHS['guide-kontrollansvarig']} element={<KontrollansvarigGuide />} />
                            <Route path={ROUTE_PATHS['guide-bas']} element={<BasGuide />} />
                            <Route path={ROUTE_PATHS['guide-bygglov']} element={<BygglovGuide />} />
                            <Route path={ROUTE_PATHS['guide-kvalitetskontroll']} element={<KvalitetskontrollGuide />} />
                            <Route path={ROUTE_PATHS['guide-overlatelsebesiktning']} element={<OverlatelsebesiktningGuide />} />
                            <Route path={ROUTE_PATHS['guide-energi']} element={<EnergiGuide />} />
                            <Route path={ROUTE_PATHS['guide-miljo']} element={<MiljoGuide />} />
                            <Route path={ROUTE_PATHS['guide-digitala-verktyg']} element={<DigitalaVerktygGuide />} />
                            <Route path={ROUTE_PATHS['guide-kontrollansvarig-bygglov']} element={<KontrollansvarigBygglovGuide />} />
                            <Route path={ROUTE_PATHS['guide-kontrollansvarig-certifiering']} element={<KontrollansvarigCertifieringGuide />} />
                            <Route path={ROUTE_PATHS['guide-kontrollansvarig-ansvar']} element={<KontrollansvarigAnsvarGuide />} />
                            <Route path={ROUTE_PATHS['guide-kontrollansvarig-timpris']} element={<KontrollansvarigTimprisGuide />} />
                            <Route path={ROUTE_PATHS['guide-bas-p-guide']} element={<BasPGuideExtended />} />
                            <Route path={ROUTE_PATHS['guide-bas-u-guide']} element={<BasUGuideExtended />} />
                            <Route path={ROUTE_PATHS['guide-vad-ar-bas']} element={<VadArBasGuide />} />
                            <Route path={ROUTE_PATHS['guide-tekniskt-samrad']} element={<TeknisktSamradGuide />} />
                            <Route path={ROUTE_PATHS['guide-kontrollplan']} element={<KontrollplanGuide />} />
                            <Route path={ROUTE_PATHS['guide-slutbesked']} element={<SlutbeskedGuide />} />
                            <Route path={ROUTE_PATHS['guide-vasternorrland']} element={<VasternorrlandGuide />} />
                            <Route path={ROUTE_PATHS['guide-bygglovsguide-vanliga-misstag-husbygge']} element={<BygglovsguideVanligaMisstag />} />

                            {/* Blogg */}
                            <Route path={ROUTE_PATHS.blog} element={<BlogPage />} />
                            <Route path="/blogg/:slug" element={<BlogPostPage />} />

                            {/* Digitala produkter */}
                            <Route path={ROUTE_PATHS.products} element={<ProdukterPage />} />
                            <Route path={ROUTE_PATHS.buildingStartPlanner} element={<ByggstartPlanerare />} />
                            
                            {/* 404 - Must be last */}
                            <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                        <Toaster />
                    </div>
        </>
    );
}

const queryClient = createAppQueryClient();

function App() {
    return (
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </QueryClientProvider>
        </HelmetProvider>
    );
}

export default App;
