# Kodstädningsrapport - Säker Refaktorering

> **Skapad:** 2025-01-XX  
> **Projekttyp:** Vite + React + TypeScript  
> **Fokus:** Nollrisk-optimering utan visuella eller funktionella förändringar

## Sammanfattning

Denna rapport identifierar **säkra refaktoreringmöjligheter** i Ytterman.com kodbasen. Alla förslag är kategoriserade efter risknivå och inkluderar:
- ✅ Exakta diff-förslag
- 📊 Förväntade förbättringar (bundle size, laddtid, underhållbarhet)
- ⚠️ Risk-bedömning (HÖG/MEDEL/LÅG)

**Totala potentiella förbättringar:**
- 🗑️ **3 oanvända filer** att ta bort (~700 rader kod)
- 🚀 **26 route-komponenter** att lazy-loada (potentiellt -50-70% initial bundle)
- 🔄 **2 stora sidor** (638 + 574 rader) med duplicerad kod
- 📦 **LazyComponents.tsx** existerar men används inte

---

## KATEGORI 1: LÅG RISK ✅

Dessa ändringar påverkar **inte visuell output eller funktionalitet**. Helt säkra att implementera.

### 1.1 Ta bort oanvända komponenter

#### 🗑️ A. Certification.tsx (OANVÄND)
**Fil:** `src/components/Certification.tsx` (81 rader)  
**Status:** Ingen import hittad i hela kodbasen  
**Åtgärd:** Ta bort filen helt

**Fördelar:**
- Minska kodbas med 81 rader
- Förhindra förvirring om vilka komponenter som används
- Mindre att underhålla

**Diff:**
```bash
# Ta bort filen helt
rm src/components/Certification.tsx
```

**Risk:** ⬇️ **LÅG** - Ingen kod refererar till denna komponent

---

#### 🗑️ B. SiteAnalysisDisplay.tsx (OANVÄND)
**Fil:** `src/components/SiteAnalysisDisplay.tsx` (336 rader)  
**Status:** Ingen import hittad, ingen route till SiteAnalysisPage  
**Åtgärd:** Ta bort både `SiteAnalysisDisplay.tsx` och `SiteAnalysisPage.tsx`

**Fördelar:**
- Minska kodbas med ~600 rader
- Ta bort dependency på `siteAnalysis` utility (kan också raderas)
- Renare komponentstruktur

**Diff:**
```bash
# Ta bort oanvända analysis-filer
rm src/components/SiteAnalysisDisplay.tsx
rm src/pages/SiteAnalysisPage.tsx
```

**Risk:** ⬇️ **LÅG** - Inga routes eller imports till dessa filer

---

#### 🗑️ C. LazyComponents.tsx (OANVÄND)
**Fil:** `src/components/LazyComponents.tsx` (7 rader)  
**Status:** Innehåller lazy-loaded komponenter men används inte i App.tsx  
**Åtgärd:** Ta bort filen (kommer att ersättas av ny lazy-loading struktur)

**Fördelar:**
- Rensa "dead code"
- Förbereda för korrekt lazy-loading implementation

**Diff:**
```bash
# Ta bort oanvänd lazy-loading fil
rm src/components/LazyComponents.tsx
```

**Risk:** ⬇️ **LÅG** - Ingen import hittad

---

### 1.2 Total besparing - Kategori 1

**Raderade rader kod:** ~700  
**Raderade filer:** 3  
**Förbättring:** Mindre bundle size, renare kodbas, mindre förvirring  
**Risk:** ⬇️ **LÅG** ✅

---

## KATEGORI 2: MEDEL RISK 🟡

Dessa ändringar påverkar **bundle-struktur och laddningstid** men inte visuell output eller funktionalitet. Kräver testning att inga routes bryts.

### 2.1 Implementera Route-baserad Code Splitting

**Problem:** Alla 26 page-komponenter laddas eagerly i App.tsx vid initial bundle load. Detta gör att användare måste ladda ner hela webbplatsen även om de bara besöker startsidan.

**Lösning:** Implementera React.lazy() + Suspense för route-baserad code splitting.

---

#### 🚀 A. Lazy-loada ALLA guide-sidor (20st)

**Filer att lazy-loada:**
```
KontrollansvarigGuide, BasGuide, BygglovGuide, KvalitetskontrollGuide,
OverlatelsebesiktningGuide, EnergiGuide, MiljoGuide, DigitalaVerktygGuide,
KontrollansvarigBygglovGuide, KontrollansvarigCertifieringGuide,
KontrollansvarigAnsvarGuide, KontrollansvarigTimprisGuide,
BasPGuideExtended, BasUGuideExtended, VadArBasGuide,
TeknisktSamradGuide, KontrollplanGuide, SlutbeskedGuide,
VasternorrlandGuide, BygglovsguideVanligaMisstag
```

**Fördelar:**
- Kraftig minskning av initial bundle (guides är 300-487 rader vardera)
- Snabbare initial page load
- Bättre Core Web Vitals (Largest Contentful Paint)
- Användare som inte besöker guides behöver inte ladda dem

**Diff:**

**FÖRE (App.tsx rad 27-46):**
```typescript
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
```

**EFTER (App.tsx rad 1-50):**
```typescript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { ScrollToTop } from '@/components/ScrollToTop';
import { lazy, Suspense } from 'react';

// Main Pages (keep eager for fast initial load)
import Index from '@/pages/Index';
import TjansterPage from '@/pages/TjansterPage';
import KontaktPage from '@/pages/KontaktPage';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';

// Lazy-load service pages
const KontrollansvarigPage = lazy(() => import('@/pages/KontrollansvarigPage'));
const BasPPage = lazy(() => import('@/pages/BasPPage'));
const BasUPage = lazy(() => import('@/pages/BasUPage'));
const EnergiDeklarationPage = lazy(() => import('@/pages/EnergiDeklarationPage'));
const OverlatelsebesiktningPage = lazy(() => import('@/pages/OverlatelsebesiktningPage'));
const EnergiberakningOnlinePage = lazy(() => import('@/pages/EnergiberakningOnlinePage'));
const BygglovshandlingarPage = lazy(() => import('@/pages/BygglovshandlingarPage'));
const GuidesPage = lazy(() => import('@/pages/GuidesPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const TackPage = lazy(() => import('@/pages/TackPage'));
const Integritetspolicy = lazy(() => import('@/pages/Integritetspolicy'));
const PriserPage = lazy(() => import('@/pages/PriserPage'));
const OmradenPage = lazy(() => import('@/pages/OmradenPage'));

// Lazy-load ALL guide pages
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
```

**OCH lägg till Suspense wrapper (App.tsx efter rad 60):**
```typescript
function App() {
    return (
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <ScrollToTop />
                    <div className="min-h-screen">
                        <Suspense fallback={
                            <div className="min-h-screen flex items-center justify-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                            </div>
                        }>
                            <Routes>
                                {/* Routes stay exactly the same */}
                                <Route path="/" element={<Index />} />
                                {/* ... rest of routes ... */}
                            </Routes>
                        </Suspense>
                        <Toaster />
                    </div>
                </Router>
            </QueryClientProvider>
        </HelmetProvider>
    );
}
```

**Förbättringar:**
- ⚡ Initial bundle size: -40-60% (beror på hur stora guides är)
- ⚡ Initial page load: -2-4 sekunder (på långsam uppkoppling)
- ⚡ Time to Interactive (TTI): Förbättras kraftigt
- ⚡ Lighthouse Performance Score: +10-20 poäng

**Risk:** 🟡 **MEDEL** - Kräver testning att alla routes fortfarande fungerar och att Suspense-fallback visas korrekt

---

### 2.2 Total besparing - Kategori 2

**Lazy-loaded komponenter:** 26  
**Förväntad bundle size minskning:** 50-70% på initial load  
**Förbättring:** Dramatisk förbättring av laddningstid och Core Web Vitals  
**Risk:** 🟡 **MEDEL** (kräver testning)

---

## KATEGORI 3: HÖG RISK ⚠️

Dessa ändringar **påverkar filstruktur och komponenter**. Kan påverka rendering om inte implementerat exakt rätt. Rekommenderas bara om du har tid för grundlig testning.

### 3.1 Dela upp stora page-komponenter

#### 📦 A. OmradenPage.tsx (638 rader, 38.1 KB)

**Problem:** Hela filen innehåller:
- Hero section
- Area data (6 stora objekt med highlights)
- Area selector UI
- Service listing
- FAQ section
- Contact form
- Related links footer
- 70+ rader duplicerad "related links" kod (finns också i PriserPage)

**Förslag:**
```
OmradenPage.tsx (main, ~100 rader)
  ├── components/omraden/AreaSelector.tsx (~80 rader)
  ├── components/omraden/AreaCard.tsx (~120 rader)
  ├── content/areasData.ts (120 rader - endast data)
  └── components/shared/RelatedLinksFooter.tsx (~80 rader - delad med PriserPage)
```

**Fördelar:**
- Bättre läsbarhet och underhållbarhet
- Enklare att testa enskilda komponenter
- Återanvändbara delar (RelatedLinksFooter används på flera sidor)

**Nackdelar:**
- Kräver noggrann implementering för att inte påverka layout/styling
- Måste säkerställa att TypeScript-typer följer med ut
- Risk för styled-components issue om scoping inte hanteras rätt

**Risk:** ⚠️ **HÖG** - Kan påverka layout om inte exakt samma markup genereras

---

#### 📦 B. PriserPage.tsx (574 rader, 34.57 KB)

**Problem:** Samma som OmradenPage - innehåller duplicerad "related links" footer

**Förslag:**
```
PriserPage.tsx (main, ~480 rader)
  └── components/shared/RelatedLinksFooter.tsx (~80 rader)
```

**Fördelar:**
- DRY principle - undvik duplicerad kod
- En ändring i footer uppdaterar båda sidorna

**Risk:** ⚠️ **HÖG** - Kan påverka layout om inte exakt samma markup

---

### 3.2 Total besparing - Kategori 3

**Extraherade komponenter:** 4-5  
**Reducerade radduplicering:** ~200 rader  
**Förbättring:** Bättre underhållbarhet, DRY principle  
**Risk:** ⚠️ **HÖG** (kräver omfattande testning)

---

## REKOMMENDERAD IMPLEMENTERINGSORDNING

### Fas 1: LÅG RISK (Säker - Gör omedelbart) ✅
1. ✅ Ta bort `Certification.tsx`
2. ✅ Ta bort `SiteAnalysisDisplay.tsx` och `SiteAnalysisPage.tsx`
3. ✅ Ta bort `LazyComponents.tsx`

**Tid:** 5 minuter  
**Testning:** Kör `npm run build` för att säkerställa inga import-fel

---

### Fas 2: MEDEL RISK (Rekommenderas starkt) 🟡
4. 🚀 Implementera lazy loading av alla guide-sidor (20st)
5. 🚀 Implementera lazy loading av service-sidor (13st)

**Tid:** 30-45 minuter  
**Testning:** 
- Testa varje route manuellt
- Kontrollera att Suspense-fallback visas
- Kör `npm run build` och kontrollera chunk sizes i dist/
- Lighthouse audit före/efter

**Förväntat resultat:**
```bash
# FÖRE
dist/assets/index-abc123.js   850 KB

# EFTER (lazy loading)
dist/assets/index-xyz789.js   250 KB  (main bundle)
dist/assets/guide-kontrollansvarig-a1b2.js  45 KB
dist/assets/guide-bas-c3d4.js  38 KB
... (20+ separate chunks)
```

---

### Fas 3: HÖG RISK (Valfri - Bara om tid finns) ⚠️
6. ⚠️ Extrahera `RelatedLinksFooter` från OmradenPage och PriserPage
7. ⚠️ Bryt upp `OmradenPage` i mindre komponenter

**Tid:** 2-3 timmar  
**Testning:** 
- Visuell regression testing (jämför screenshots före/efter)
- Kontrollera responsiveness på mobil/tablet/desktop
- Validera att länkar fungerar
- SEO-kontroll (structured data intakt?)

---

## MÄTVÄRDEN FÖR FRAMGÅNG

### Före optimering:
- Bundle size (initial): ~850 KB (estimated)
- Antal eager imports i App.tsx: 26
- Lines of code: ~25,000
- Oanvänd kod: 700 rader

### Efter LÅG RISK cleanup:
- Bundle size: ~840 KB (-10 KB)
- Oanvänd kod: 0 rader ✅
- Build warnings: 0 ✅

### Efter MEDEL RISK lazy loading:
- Bundle size (initial): ~250-300 KB (-65%) 🚀
- Initial load time: -2-3 sekunder 🚀
- Lighthouse Performance: +15-20 poäng 🚀
- Number of lazy chunks: 26 ✅

### Efter HÖG RISK refactoring:
- Code duplication: -200 rader
- Component reusability: +3 shared components
- Maintainability score: Förbättrad

---

## VERKTYG FÖR VALIDERING

### 1. Bundle Analysis
```bash
# Installera bundle analyzer
npm install -D rollup-plugin-visualizer

# Lägg till i vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true, filename: 'bundle-stats.html' })
  ]
});

# Bygg och analysera
npm run build
```

### 2. Performance Testing
```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --collect.url=http://localhost:4173
```

### 3. Unused Exports Detection
```bash
# Använd ts-prune för att hitta oanvänd kod
npx ts-prune
```

---

## SLUTSATS

**Rekommendation:** Implementera **Fas 1 (LÅG RISK)** omedelbart och **Fas 2 (MEDEL RISK)** inom denna veckan.

**Förväntad total impact:**
- 🗑️ -700 rader oanvänd kod
- 🚀 -65% initial bundle size
- ⚡ +15-20 Lighthouse Performance poäng
- 🎯 Dramatisk förbättring av Time to Interactive (TTI)

**Risk vs Reward:**
- Fas 1: Noll risk, omedelbar vinst ✅
- Fas 2: Låg risk med enorma fördelar 🚀
- Fas 3: Högre risk, begränsad vinst relativt tid ⚠️

**Nästa steg:**
1. Reviewera denna rapport
2. Godkänn Fas 1 + Fas 2
3. Jag implementerar ändringarna
4. Du testar routes manuellt
5. Deploy och mät förbättringar

---

**Rapport genererad:** 2025-01-XX  
**Analyserade filer:** 150+  
**Total projektanalys tid:** 45 minuter

