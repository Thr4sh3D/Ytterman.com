# Remediation Baseline – ytterman.com

> **Datum:** 2026-08-13  
> **Syfte:** Fullständig nulägesinventering inför SEO- och korrekthetsåtgärder.  
> **Regel:** Ingen produktionskod har ändrats i detta steg.

---

## 1. Teknisk arkitektur

| Egenskap | Värde |
|---|---|
| Ramverk | React 18 (CSR – ren Single-Page Application) |
| Router | `react-router-dom` v6, `BrowserRouter` |
| Build-verktyg | Vite 5, plugin `@vitejs/plugin-react-swc` |
| Språk | TypeScript 5.5 |
| Styling | Tailwind CSS 3.4 + shadcn/ui (Radix UI-primitiverna) |
| Pakethanterare | npm (`package-lock.json` och `bun.lockb` finns parallellt) |
| Deployment | **Netlify** (`netlify.toml` → `dist/`) |
| Serverless functions | `netlify/functions/` – `blog-api.ts`, `blog-sitemap.ts`, `blogseo-webhook.ts` |
| E-post (kontaktformulär) | EmailJS (`@emailjs/browser` v4) |
| State / data fetching | TanStack Query v5 |
| SEO-rubriker | `react-helmet-async` v2 (klient-side `<Helmet>`) |
| Blogg-backend | Netlify Blobs (`@netlify/blobs`) |
| Supabase CDN | Certifikat-bilder och konsol-capture-script läses från `ellprnxjjzatijdxcogk.supabase.co` |

### Innehåll i byggd HTML kontra JavaScript

Sidan är en **ren CSR-SPA**. Den enda statiska HTML-filen är `dist/index.html`; all sidtext renderas av JavaScript. Sökmotorer som inte kör JS ser enbart:

```html
<div id="root"></div>
```

Metadata (`<title>`, `<meta description>`, canonical, JSON-LD) injiceras av `react-helmet-async` **efter** att JS har laddats, vilket innebär att de inte är synliga i den initiala HTML-responsen.

### URL-strategi

Netlify-fångstregeln `/* → /index.html (200)` gör att alla routes levererar samma `index.html`. React Router tar sedan över routing på klienten.

---

## 2. Sid- och routeinventering

Alla 75 publika routes definierade i `src/App.tsx`:

### 2.1 Huvudsidor (eager-laddade)

| Route | Komponent |
|---|---|
| `/` | `src/pages/Index.tsx` |
| `/tjanster` | `src/pages/TjansterPage.tsx` |
| `/kontakt` | `src/pages/KontaktPage.tsx` |
| `/om` | `src/pages/About.tsx` |

### 2.2 Tjänstesidor (lazy)

| Route | Komponent |
|---|---|
| `/kontrollansvarig` | `KontrollansvarigPage.tsx` |
| `/kontrollansvarig-i-fjallen` | `KontrollansvarigFjallPage.tsx` |
| `/bas-p` | `BasPPage.tsx` |
| `/bas-u` | `BasUPage.tsx` |
| `/energideklaration` | `EnergiDeklarationPage.tsx` |
| `/overlatelsebesiktning` | `OverlatelsebesiktningPage.tsx` |
| `/energiberakning-online` | `EnergiberakningOnlinePage.tsx` |
| `/bygglovshandlingar` | `BygglovshandlingarPage.tsx` |

### 2.3 Stad-specifika Kontrollansvarig-sidor (lazy)

| Route | Komponent |
|---|---|
| `/kontrollansvarig-sundsvall` | `KontrollansvarigSundsvall.tsx` |
| `/kontrollansvarig-harnosand` | `KontrollansvarigHarnosand.tsx` |
| `/kontrollansvarig-timra` | `KontrollansvarigTimra.tsx` |
| `/kontrollansvarig-kramfors` | `KontrollansvarigKramfors.tsx` |
| `/kontrollansvarig-solleftea` | `KontrollansvarigSolleftea.tsx` |

### 2.4 Stad-specifika Överlåtelsebesiktning-sidor (lazy)

| Route | Komponent |
|---|---|
| `/overlatelsebesiktning-sundsvall` | `OverlatelsebesiktningSundsvall.tsx` |
| `/overlatelsebesiktning-harnosand` | `OverlatelsebesiktningHarnosand.tsx` |
| `/overlatelsebesiktning-timra` | `OverlatelsebesiktningTimra.tsx` |
| `/overlatelsebesiktning-kramfors` | `OverlatelsebesiktningKramfors.tsx` |
| `/overlatelsebesiktning-solleftea` | `OverlatelsebesiktningSolleftea.tsx` |
| `/overlatelsebesiktning-ornskoldsvik` | `OverlatelsebesiktningOrnskoldsvik.tsx` |
| `/overlatelsebesiktning-ange` | `OverlatelsebesiktningAnge.tsx` |

### 2.5 Infosidor (lazy)

| Route | Komponent |
|---|---|
| `/faq` | `FAQPage.tsx` |
| `/priser` | `PriserPage.tsx` |
| `/omraden` | `OmradenPage.tsx` |
| `/tack` | `TackPage.tsx` |
| `/integritetspolicy` | `Integritetspolicy.tsx` |

### 2.6 Guider (lazy, 19 st)

| Route | Komponent |
|---|---|
| `/guider` | `GuidesPage.tsx` |
| `/guider/kontrollansvarig` | `KontrollansvarigGuide.tsx` |
| `/guider/bas` | `BasGuide.tsx` |
| `/guider/bygglov` | `BygglovGuide.tsx` |
| `/guider/kvalitetskontroll` | `KvalitetskontrollGuide.tsx` |
| `/guider/overlatelsebesiktning` | `OverlatelsebesiktningGuide.tsx` |
| `/guider/energi` | `EnergiGuide.tsx` |
| `/guider/miljo` | `MiljoGuide.tsx` |
| `/guider/digitala-verktyg` | `DigitalaVerktygGuide.tsx` |
| `/guider/kontrollansvarig-bygglov` | `KontrollansvarigBygglovGuide.tsx` |
| `/guider/kontrollansvarig-certifiering` | `KontrollansvarigCertifieringGuide.tsx` |
| `/guider/kontrollansvarig-ansvar` | `KontrollansvarigAnsvarGuide.tsx` |
| `/guider/kontrollansvarig-timpris` | `KontrollansvarigTimprisGuide.tsx` |
| `/guider/bas-p-guide` | `BasPGuideExtended.tsx` |
| `/guider/bas-u-guide` | `BasUGuideExtended.tsx` |
| `/guider/vad-ar-bas` | `VadArBasGuide.tsx` |
| `/guider/tekniskt-samrad` | `TeknisktSamradGuide.tsx` |
| `/guider/kontrollplan` | `KontrollplanGuide.tsx` |
| `/guider/slutbesked` | `SlutbeskedGuide.tsx` |
| `/guider/vasternorrland` | `VasternorrlandGuide.tsx` |
| `/guider/bygglovsguide-vanliga-misstag-husbygge` | `BygglovsguideVanligaMisstag.tsx` |

### 2.7 Blogg och produkter (lazy)

| Route | Komponent |
|---|---|
| `/blogg` | `BlogPage.tsx` |
| `/blogg/:slug` | `BlogPostPage.tsx` |
| `/produkter` | `ProdukterPage.tsx` |
| `/byggstart-planerare` | `ByggstartPlanerare.tsx` |

### 2.8 Saknas i sitemap (routes som finns i App.tsx men inte i sitemap-static.xml)

- `/tjanster`
- `/om`
- `/tack`
- `/kontrollansvarig-i-fjallen` (finns i sitemap men med lägre prioritet)
- `/blogg/:slug` (dynamiska blogginlägg – hanteras av Netlify function `blog-sitemap.ts`)

---

## 3. SEO, metadata och strukturerade data

### 3.1 Metadata-generering

- **Primär SEO-komponent:** `src/components/SEO.tsx` – används av de flesta sidor, sätter `<title>`, `<meta description>`, canonical, OG-taggar.
- **Fallback i `index.html`:** Statiska SEO-taggar för URL `https://ytterman.com/` med Google Consent Mode v2-initiering.
- **Canonical:** Sätts per sida via `SEO.tsx` / `AdvancedSEO.tsx`. Komponent `CanonicalUrl.tsx` och `UrlCanonicalizer.tsx` finns men är separata hjälpkomponenter.
- **`AdvancedSEO.tsx`:** Ytterligare JSON-LD-schema, OpenGraph, Twitter cards.
- **`SEOEnhancements.tsx`:** Lägger till keywords meta-tag och preconnect-hints.
- **`SEOOptimizer.tsx`:** Ännu ett lager JSON-LD.

⚠️ **Risker:** Tre separata komponenter (`SEO.tsx`, `AdvancedSEO.tsx`, `SEOOptimizer.tsx`) genererar potentiellt duplicerad JSON-LD per sida.

### 3.2 JSON-LD-schema

Definitioner finns i:
- `index.html` – `LocalBusiness`-schema med telefon `+46761118447`
- `src/components/JsonLdSchema.tsx` – `ProfessionalService` + `Person`
- `src/components/SEO.tsx` – `ProfessionalService`
- `src/components/AdvancedSEO.tsx` – `LocalBusiness`, `BreadcrumbList`, `WebPage`

`JsonLdSchema.tsx` innehåller `"name": "Certifierad BAS-P/BAS-U"` i `hasCredential` – felaktig titel, se P1-lista.

### 3.3 Sitemap

| Fil | Innehåll |
|---|---|
| `public/sitemap.xml` | Sitemap-index, pekar på `sitemap-static.xml` |
| `public/sitemap-static.xml` | 54 statiska URLs, genererad 2026-05-20 |
| `netlify/functions/blog-sitemap.ts` | Dynamisk sitemap för blogginlägg |

`sitemap-static.xml` inkluderar **inte** `/tjanster` och `/om`. Blogg-slug-sitemapen är Netlify Function och inte kopplad till sitemap-index.

### 3.4 robots.txt

```
User-agent: *
Allow: /
Sitemap: https://ytterman.com/sitemap.xml
```

Korrekt. Blockar inga routes.

### 3.5 Typsnitt och externa resurser

- **Google Fonts:** Inter (400–800), laddas via `<link rel="preload">` + `<link rel="stylesheet">` i `index.html`. Renderings-blockerande utan JS.
- **Supabase CDN:** `ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/cdn/console-capture.js` – externt script i `<body>`, **alltid laddat**, oklar funktion (konsol-capture).

---

## 4. Analytics, spårning och cookies

| Tjänst | Implementering | ID |
|---|---|---|
| Google Ads / gtag.js | `index.html` inline + `src/components/GoogleAdsTracking.tsx` | `AW-17296101730` |
| Google Analytics | `index.html` – `gtag('config', 'GA_MEASUREMENT_ID', ...)` | **Platshållar-ID `GA_MEASUREMENT_ID`** – ej verklig mätnings-ID |
| Google Tag Manager | `src/components/GoogleTagManager.tsx` | Komponent finns men inget GTM-ID är hårdkodat; måste skickas som prop |
| Google Search Console | `src/components/GoogleSearchConsole.tsx` | Verifierings-meta finns i `index.html`: `RzdLk5ZZjJoDLBeC-hu0eQ2O5fVjF4M-EXUewixYTs` |
| Google Consent Mode v2 | `index.html` inline script | Standardkonsent: `analytics_storage: denied`, `ad_storage: denied` |

⚠️ `GA_MEASUREMENT_ID` i `index.html` är ett platshållar-ID. Google Analytics mäter ingenting just nu.

### 4.1 Cookie/samtycke-hantering

- `GoogleConsentMode.tsx` – Consent Mode v2, React-komponent
- `GoogleConsentMode` existerar parallellt med inline-scriptet i `index.html`
- Ingen cookiebanner/CMP (Consent Management Platform) är implementerad. GDPR-efterlevnad saknas för besökare i EU.

---

## 5. Formulär, webhookar och bokning

| Funktion | Implementering |
|---|---|
| Kontaktformulär | `src/components/ContactForm.tsx` → `src/lib/emailjs.ts` (EmailJS) |
| EmailJS-konfiguration | `SERVICE_ID = 'service_hkaan9a'`, `TEMPLATE_ID = 'template_r43g9li'`, `PUBLIC_KEY = 'HiImRG5AmvO4_ias5'` (hårdkodade i källkoden) |
| Bokning/överlåtelsebesiktning | Intern länk `/kontakt/?project=overlatelsebesiktning` via `src/config/booking.ts` |
| Netlify webhook | `netlify/functions/blogseo-webhook.ts` |
| Blogg-API | `netlify/functions/blog-api.ts` (CRUD via Netlify Blobs) |
| Betalning | **Ingen betalningsfunktion finns** |

⚠️ EmailJS `PUBLIC_KEY` är exponerad i källkoden (public repo). Detta är i linje med EmailJS-modellen men innebär att vem som helst kan använda nyckeln för att skicka e-post via samma service. Domän-whitelist i EmailJS-konsolen bör verifieras.

---

## 6. Företagsuppgifter och innehållsdata – källfiler

| Data | Källfil |
|---|---|
| Företagsnamn, ägare, e-post, plats | `src/config/company.ts` (COMPANY-konstant) |
| Telefonnummer (config) | `src/config/company.ts` – värdet är `'070-xxx xx xx'` (**platshållare**) |
| Telefonnummer (JSON-LD, emailjs) | `+46761118447` hårdkodat i `index.html`, `src/components/JsonLdSchema.tsx`, `src/lib/emailjs.ts` |
| KA-certifikat (nummer, giltighet) | `src/config/company.ts` (KA_CERT-konstant) – `KA11926`, giltig t.o.m. `2030-07-02` |
| BAS-utbildning (datum, leverantör) | `src/config/company.ts` (BAS_TRAINING-konstant) – `UtbildningsKraft`, `2025-06-25` |
| Priser (paket) | `src/content/pricingPackages.ts` – KA Bas 29 500 kr, KA Plus 34 500 kr, Premium 46 500–52 500 kr |
| Timpris | `src/pages/PriserPage.tsx` och `src/pages/guides/KontrollansvarigTimprisGuide.tsx` |
| Tjänstetexter | Resp. sida-komponent + `src/content/knowledgeBase.ts` |
| FAQ-innehåll | `src/content/faq.tsx` |
| Stad-data Kontrollansvarig | `src/content/kontrollansvarigCityData.ts` |
| Stad-data Överlåtelsebesiktning | `src/content/overlatelsebesiktningCityData.ts` |

---

## 7. Identifierade problem – rangordnade

### P0 – Kritiska (juridik/faktafel, kan skada förtroendet)

| # | Problem | Berörda filer |
|---|---|---|
| P0-1 | **`certifierad BAS-P/U`** används som titel i renderat UI och JSON-LD. BAS-rollen saknar formell certifiering; titeln är felaktig och missledande. | `src/pages/BasPPage.tsx` (rad 121, 143), `src/pages/BasUPage.tsx` (121, 143), `src/components/JsonLdSchema.tsx` (87), `src/components/AdvancedSEO.tsx` (161), `src/components/SEO.tsx` (81), `src/pages/KontrollansvarigFjallPage.tsx` (151), `src/pages/guides/BasGuide.tsx` (204) |
| P0-2 | **`certifierad energiexpert`** – Tobias är INTE certifierad energiexpert. `SEOContent.tsx` och `knowledgeBase.ts` inkluderar "certifierad energiexpert" i SEO-nyckelord kopplade till Tobias, vilket kan uppfattas som att han innehar certifieringen. | `src/components/SEOContent.tsx` (97), `src/content/knowledgeBase.ts` (34 i keywords) |
| P0-3 | **`/logo.png` saknas** – refereras i JSON-LD i `AdvancedSEO.tsx` och `SEOOptimizer.tsx` som `https://ytterman.com/logo.png`. Filen finns inte i `public/`. Sökmotorer och structured data-validatorer rapporterar fel. | `src/components/AdvancedSEO.tsx` (253), `src/components/SEOOptimizer.tsx` (77) |
| P0-4 | **`GA_MEASUREMENT_ID`** är ett platshållar-ID i `index.html`. Google Analytics samlar inte in data. | `index.html` (rad 64) |
| P0-5 | **Telefon i `company.ts`** är platshållaren `'070-xxx xx xx'`. Används troligtvis inte i rendering (hårdkodat nummer används istället), men skapar risk vid framtida refaktorering. | `src/config/company.ts` (rad 16) |

### P1 – Allvarliga (SEO, trovärdighet, regelverk)

| # | Problem | Berörda filer |
|---|---|---|
| P1-1 | **`slutbevis`** används som SEO-nyckelord och i brödtext. Korrekt term är **`slutbesked`** (PBL-terminologi). "Slutbevis" är ett vardagsord som inte förekommer i lagtext. | `src/components/SEOEnhancements.tsx`, `src/components/SEO.tsx`, `src/components/SEOContent.tsx`, `src/components/About.tsx`, `src/content/knowledgeBase.ts`, `src/content/faq.tsx`, `src/content/kontrollansvarigCityData.ts`, `src/pages/guides/SlutbeskedGuide.tsx`, `src/pages/guides/KontrollansvarigGuide.tsx`, `src/pages/KontrollansvarigPage.tsx` |
| P1-2 | **`AFS 1999:3`** nämns i kommentarer i `company.ts` som förklarande text (inte i UI). Inga render-träffar. Ingen åtgärd behövs i UI, men bör bekräftas att det inte läcker ut via genererade sidor. | `src/config/company.ts` (kommentar, rad 42, 59) |
| P1-3 | **`WhyStrongKA2025.tsx`** påstår att "Från och med juli 2025 skärps kraven på teknisk kontroll" – obelagt påstående. Nuläget är 2026; "2025" är nu historisk tid, frasen kan missuppfattas. | `src/components/WhyStrongKA2025.tsx` |
| P1-4 | **Ingen cookiebanner/CMP.** Google Ads-spårning och consent mode är implementerat men samtycke inhämtas aldrig aktivt från besökaren. GDPR-krav uppfylls inte. | `index.html`, `src/components/GoogleConsentMode.tsx` |
| P1-5 | **`sitemap-static.xml` saknar `/tjanster` och `/om`.** Dessa sidor indexeras inte via sitemap. | `public/sitemap-static.xml` |
| P1-6 | **Blogg-sitemap (`blog-sitemap.ts`) är inte länkad i `sitemap.xml`-index.** Blogginlägg syns inte för sökmotorer via sitemap-protokollet. | `public/sitemap.xml`, `netlify/functions/blog-sitemap.ts` |
| P1-7 | **`"2025"` i SEO-titlar** – 21+ sidor har hårdkodad `2025` i `seoTitle`/`title`-props. Nu när vi är 2026 är dessa titlar föråldrade. | `src/content/knowledgeBase.ts`, `src/pages/PriserPage.tsx`, `src/pages/guides/*.tsx` (se avsnitt 7.2 nedan) |
| P1-8 | **Duplicerade JSON-LD-komponenter.** `SEO.tsx`, `AdvancedSEO.tsx`, `SEOOptimizer.tsx` och `JsonLdSchema.tsx` kan injicera överlappande schema på samma sida. | `src/components/SEO.tsx`, `src/components/AdvancedSEO.tsx`, `src/components/SEOOptimizer.tsx`, `src/components/JsonLdSchema.tsx` |

#### P1-7 – Fullständig lista filer med hårdkodad `2025` i titlar/SEO

`src/content/knowledgeBase.ts`, `src/pages/PriserPage.tsx`, `src/pages/guides/SlutbeskedGuide.tsx`, `src/pages/guides/KontrollansvarigTimprisGuide.tsx`, `src/pages/guides/VadArBasGuide.tsx`, `src/pages/guides/BasPGuideExtended.tsx`, `src/pages/guides/BasUGuideExtended.tsx`, `src/pages/guides/KontrollansvarigAnsvarGuide.tsx`, `src/pages/guides/TeknisktSamradGuide.tsx`, `src/pages/guides/KontrollansvarigCertifieringGuide.tsx`, `src/pages/guides/KontrollansvarigGuide.tsx`, `src/pages/guides/KontrollansvarigBygglovGuide.tsx`, `src/pages/guides/KontrollplanGuide.tsx`, `src/pages/guides/BasGuide.tsx`, `src/pages/guides/VasternorrlandGuide.tsx`, `src/pages/guides/BygglovsguideVanligaMisstag.tsx`, `src/pages/KontrollansvarigCityPage.tsx`

### P2 – Förbättringar (prestanda, underhållbarhet)

| # | Problem | Berörda filer |
|---|---|---|
| P2-1 | **CSR-only SPA – ingen statisk HTML.** Sökmotorer och sociala medier får `<div id="root"></div>` tills JS laddats. Metadata (title, description, canonical, OG) injiceras klient-side via `react-helmet-async`. | Arkitekturellt beslut; se avsnitt 9 |
| P2-2 | **`og-image.png` är 1,2 MB.** Bör komprimeras till < 200 kB. | `public/og-image.png` |
| P2-3 | **`supabase console-capture.js`** laddas alltid från extern CDN. Syfte oklart ("console capture"). Bör utvärderas och eventuellt tas bort. | `index.html` (rad 143) |
| P2-4 | **EmailJS public key hårdkodad i källkod.** Flytta till environment variable. | `src/lib/emailjs.ts` |
| P2-5 | **14 ESLint-varningar** (`react-refresh/only-export-components`) – alla i shadcn/ui-genererade filer och `FAQ.tsx`, `SEOContent.tsx`. Inga errors. | Se avsnitt 8.2 |
| P2-6 | **`favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`** refereras i `index.html` men saknas i `public/`. Ger 404-request för ikoner. | `index.html` (rad 21–23) |
| P2-7 | **Telefonnummer inkonsekvent.** `+46761118447` i JSON-LD/emailjs, `070-xxx xx xx` (platshållare) i `company.ts`. | `src/config/company.ts`, `index.html`, `src/components/JsonLdSchema.tsx`, `src/lib/emailjs.ts` |

---

## 8. Build- och testkommandon

### 8.1 Kommandon

```bash
# Installera beroenden
npm install

# Produktionsbuild (Vite + post-scripts)
npm run build
# Exekverar:
#   vite build
#   node scripts/copy-404.mjs
#   node scripts/create-github-pages-routes.mjs   ← saknas i repo (se nedan)
#   node scripts/generate-sitemap.js

# Lint
npm run lint
# Exekverar: eslint .

# Dev-server
npm run dev

# Förhandsgranska build
npm run preview

# Generera sitemap separat
npm run generate:sitemap
```

⚠️ `scripts/create-github-pages-routes.mjs` refereras i `build`-kommandot men **filen finns inte i repo**. Build-kommandot misslyckas med "Module not found" i en ren checkout utan att `node_modules` finns. Med installerade `node_modules` och `vite` bygger det OK tills detta script körs.

### 8.2 Lint-resultat (0 errors, 14 warnings)

Alla varningar är `react-refresh/only-export-components` i:
- `src/components/FAQ.tsx`
- `src/components/SEOContent.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/form.tsx`
- `src/components/ui/navigation-menu.tsx`
- `src/components/ui/sidebar.tsx`
- `src/components/ui/toggle.tsx`
- `src/components/ui/toggle-group.tsx`

### 8.3 Tester

Inga testramverk är konfigurerade. Inga testfiler finns i repo.

---

## 9. Bundle-storlek (mätbara basvärden)

Från `vite build` 2026-08-13:

| Chunk | Storlek (rå) | Gzip |
|---|---|---|
| `index-D_bfvgXC.js` (entry) | **212 kB** | 56 kB |
| `BlogPostPage--Fz8Vjyv.js` | 184 kB | 58 kB |
| `react-vendor-CffrGP6S.js` | 141 kB | 45 kB |
| `ui-vendor-AWSYj-Un.js` | 80 kB | 27 kB |
| `PriserPage-8dfkcBZx.js` | 29 kB | 6 kB |
| `icons-vendor-Du9M5ccw.js` | 29 kB | 6 kB |
| `OmradenPage-hFTP6DcW.js` | 32 kB | 7 kB |
| router-vendor | 21 kB | 8 kB |
| query-vendor | 25 kB | 8 kB |
| **Total initial JS (entry + react-vendor + ui-vendor)** | **~433 kB** | **~128 kB** |

**Bilder:**

| Fil | Storlek |
|---|---|
| `public/og-image.png` | 1,2 MB ⚠️ |
| `src/assets/images/tobias-ytterman-profile-900.webp` | 72 kB |
| `src/assets/images/tobias-ytterman-profile-512.webp` | 36 kB |
| `public/favicon.ico` | 16 kB |
| `public/favicon.svg` | 4 kB |

**CSS:** Genereras av Tailwind vid build (ingen separat CSS-fil inmätt; ingår i Vite-output via JS).

**Typsnitt:** Google Inter laddas externt från `fonts.googleapis.com`. Storlek beror på subset; inte cached locally.

**Lighthouse:** Inte kört i denna inventering. Referensvärde saknas. Rekommendation: kör `npx lighthouse https://ytterman.com --output=json` och spara resultatet.

---

## 10. Hur statisk HTML kan införas med minsta möjliga ingrepp

Siten är en CSR-SPA. Statisk HTML för sökmotorer kan läggas till på tre sätt, i stigande ingrepp:

### Alternativ A – Prerendering vid build (minsta ingrepp, rekommenderat)

Lägg till Vite SSG-plugin, t.ex. [`vite-plugin-ssg`](https://github.com/antfu/vite-ssg) eller [`vite-ssg`](https://github.com/antfu/vite-ssg):

1. `npm install vite-ssg` (eller `vite-plugin-prerender`)
2. Ändra `vite.config.ts` – lägg till plugin, lista routes från `src/App.tsx`
3. `build`-kommandot genererar en statisk HTML-fil per route i `dist/`
4. Netlify serverar rätt HTML direkt utan SPA-fallback

Påverkade filer: `vite.config.ts`, `package.json`, möjligen `src/main.tsx`.  
**Ingen komponent-kod behöver ändras.**

### Alternativ B – Netlify Edge Functions / On-demand SSR (medelstort ingrepp)

Kräver omstrukturering till Netlify Edge Functions för att rendera React server-side per request. Större ingrepp.

### Alternativ C – Netlify prerender (extern tjänst)

Konfigurera `netlify.toml` med `[prerendering]` för att använda Netlify's inbyggda prerender-tjänst (kräver Netlify Business-plan).

---

## 11. Osäkra företagsuppgifter för ägarverifiering

Följande uppgifter behöver verifieras av webbplatsägaren innan de publiceras eller används i marknadsföring:

| Uppgift | Nuläge | Status |
|---|---|---|
| Telefonnummer (config) | `070-xxx xx xx` i `src/config/company.ts` | ⚠️ **Platshållare – måste fyllas i** |
| Telefonnummer (JSON-LD/emailjs) | `+46761118447` | ✅ Verifieras mot faktiskt nummer |
| KA-certifikatnummer | `KA11926` via Kiwa | ✅ Verifieringsurl: `https://idun.kiwa.se/certificates/25642` |
| KA-certifikat giltigt t.o.m. | `2030-07-02` | Verifieras mot Kiwa |
| BAS-utbildning | `UtbildningsKraft`, avslutad `2025-06-25`, giltig t.o.m. `2030-06-24` | Verifieras mot intyg |
| Gällande BAS-föreskrift | `AFS 2023:3` (ersätter AFS 1999:3 fr.o.m. 2025-01-01) | ✅ Korrekt |
| Titel "certifierad BAS-P/U" | Används i UI och JSON-LD | ⚠️ **Felaktig – BAS har inget certifieringskrav** |
| Titel "certifierad energiexpert" | Tobias är INTE certifierad energiexpert | ⚠️ **Kräver tydlig disclaiming** |
| Priser (KA Bas, KA Plus, Premium) | 29 500 / 34 500 / 46 500–52 500 kr inkl. moms | Verifieras mot aktuell prislista |
| "Behörighet N" (KA) | Normal art | ✅ Verifierbart via Kiwa-certifikat |
| Org-adress i JSON-LD (`index.html`) | Härnösand | `company.ts` anger Viksjö – **inkonsekvent** |
| Företagsnamn i JSON-LD | `"Ytterman Bygg & Konsult"` | `company.ts` anger `"Ytterman"` – **inkonsekvent** |
| `priceRange` i JSON-LD | `"Från 2,999 SEK"` i `JsonLdSchema.tsx` | Stämmer inte med faktiska paketpriser (29 500 kr+) |

---

## 12. Rekommenderad åtgärdsordning

1. **[P0-3]** Lägg till `logo.png` i `public/` eller uppdatera JSON-LD-referenserna till befintlig bild (`og-image.png`).
2. **[P0-4]** Ersätt `GA_MEASUREMENT_ID` med verkligt Google Analytics-mätnings-ID.
3. **[P0-5 + P2-7]** Konsolidera telefonnummer – välj ett format och uppdatera `company.ts`, `index.html`, `JsonLdSchema.tsx`.
4. **[P0-1]** Byt ut "Certifierad BAS-P/U" mot korrekt formulering, t.ex. "Kursintyg BAS-P & BAS-U (AFS 2023:3)".
5. **[P2-6]** Lägg till `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` i `public/` för att eliminera 404-requests.
6. **[P0-2]** Justera SEO-nyckelord kring "certifierad energiexpert" så att de inte kopplas till Tobias.
7. **[P1-1]** Ersätt "slutbevis" med "slutbesked" i brödtext och keywords.
8. **[P1-4]** Implementera cookiebanner/CMP (t.ex. Cookiebot, Axeptio) för GDPR-efterlevnad.
9. **[P1-5 + P1-6]** Uppdatera `sitemap-static.xml` (lägg till `/tjanster`, `/om`) och länka blogg-sitemap i sitemap-index.
10. **[P1-7]** Automatisera årsreferenser i SEO-titlar (t.ex. dynamisk `new Date().getFullYear()`).
11. **[P1-8]** Konsolidera JSON-LD-generering till en enda källa per sida.
12. **[P2-1]** Utvärdera prerendering (Alternativ A ovan) för att ge sökmotorer statisk HTML.
13. **[P2-2]** Komprimera `og-image.png` till < 200 kB.
14. **[P2-3]** Utvärdera och eventuellt ta bort Supabase `console-capture.js`.
15. **[P1-3]** Uppdatera `WhyStrongKA2025.tsx` – "juli 2025" är nu historisk tid; anpassa texten.
