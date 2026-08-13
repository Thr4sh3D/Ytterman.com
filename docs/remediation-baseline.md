# Remediation baseline for Ytterman.com

Senast verifierad i denna gren: 2026-08-13.

## 1. Syfte och avgränsning

Detta steg 1-dokument är en nulägesinventering. Det gör inga produktionsändringar och beskriver endast nuvarande läge i koden som underlag för senare P0/P1-rättningar.

## 2. Arkitekturöversikt

- Frontend: Vite + React 18 + TypeScript + React Router (`/src/App.tsx`).
- Rendering: klientrenderad SPA med `react-helmet-async` för route-specifik metadata.
- Hosting-spår i repo:
  - GitHub Pages-stöd via `scripts/copy-404.mjs` och `scripts/create-github-pages-routes.mjs`.
  - Netlify-konfiguration via `/netlify.toml`.
- Byggkommando: `npm run build` kör Vite-build, kopierar `404.html`, skapar route-mappar och genererar sitemap.

## 3. Routes och indexerbar yta

Mätt via `npm run build` 2026-08-13:

- 52 statiska routes extraheras från `/src/App.tsx`.
- 52 route-mappar skapas för GitHub Pages-SPA-routing.
- 52 URL:er skrivs till `public/sitemap-static.xml`.
- 1 dynamisk route finns i appen: `/blogg/:slug` (ingår inte i den statiska sitemapgeneratorn).

Huvudgrupper i nuvarande route-yta:

- Startsida, kontakt, priser, FAQ, områden, om.
- Tjänstesidor för KA, BAS-P, BAS-U, energideklaration, energiberäkning, bygglovshandlingar, överlåtelsebesiktning.
- Ortsspecifika KA- och överlåtelsebesiktningssidor.
- Guider.
- Blogg och digital produkt (`/byggstart-planerare`).

## 4. Klientrenderad HTML

`/index.html` levererar i nuläget i princip ett SPA-skal:

- statisk `<div id="root"></div>`
- grundmetadata
- Google-taggar / consent bootstrap
- ett statiskt JSON-LD-block

All route-specifik text, huvudinnehåll och merparten av metadata injiceras först efter klientrendering via React och `AdvancedSEO`.

Konsekvens i nuläget:

- HTML-svaret utan JavaScript är mycket tunt.
- sökmotorers fallback-innehåll styrs i stor utsträckning av standardtaggarna i `index.html`
- route-specifik metadata/schema är beroende av att klient-JS körs

## 5. Metadata och schema

Nuvarande metadata/schema kommer från minst tre lager:

1. statiska standardtaggar i `/index.html`
2. `AdvancedSEO` som används brett i sidkomponenter
3. `JsonLdSchema` som används separat på bl.a. startsida och kontaktsida

Observerade nulägesrisker:

- dubbla sanningskällor för titel, description, canonical och JSON-LD
- flera hårdkodade kontakt- och verksamhetsuppgifter i komponenter
- `src/config/company.ts` finns som tänkt central källa, men har **0 importer** i `/src`
- `JsonLdSchema.tsx` och `AdvancedSEO.tsx` innehåller fortfarande BAS-P/BAS-U som credentials
- `index.html` innehåller fortfarande ett statiskt `LocalBusiness`-schema som inte samordnas med den senare React-genererade metadata-kedjan

## 6. Mätning, cookies och externa script

Nuvarande mät-/cookieupplägg:

- `index.html` laddar Google tag för `AW-17296101730`
- `index.html` kör även `gtag('config', 'GA_MEASUREMENT_ID', ...)` med placeholder-värde
- consent default sätts inline innan övriga Google-script
- `GoogleConsentMode.tsx` implementerar banner/UI och lagrar val i `localStorage`
- `GoogleConsentMode.tsx` är inte globalt monterad i `/src/App.tsx`
- `ConversionTracking` används i minst `KontaktPage`, `PriserPage` och `OmradenPage`

Lokal cookie/storage-användning som observerats:

- `localStorage`: `google-consent-choice`, `google-consent-timestamp`
- cookie i `src/components/ui/sidebar.tsx` för sidebar-tillstånd

## 7. Formulär och leadflöden

Observerat via kodsökning:

- 3 `<form>`-förekomster i `/src`
- 2 aktiva formulärkomponenter: `ContactForm.tsx`, `Contact.tsx`
- 1 exempelformulär: `ContactFormExample.tsx`

Nuvarande leadflöde:

- formulär skickar från klienten via `/src/lib/emailjs.ts`
- EmailJS `SERVICE_ID`, `TEMPLATE_ID` och `PUBLIC_KEY` ligger hårdkodade i klientkod
- formulärtexter lovar återkoppling/offert inom 24 timmar på flera ställen
- projektval innehåller fortfarande `energideklaration`

## 8. Sitemapgenerator

Nuvarande generator i `/scripts/generate-sitemap.js`:

- läser routes direkt från `/src/App.tsx`
- exkluderar bara `/tack`
- hoppar över wildcard och parametriserade routes
- sätter `lastmod` till dagens datum för **alla** URL:er vid varje körning
- sätter bloggindex till `changefreq=daily`

Mätt 2026-08-13:

- `public/sitemap-static.xml` innehåller 52 URL:er
- samtliga observerade `lastmod`-värden sattes till `2026-08-13`

## 9. Innehålls- och sanningskällerisker

Detta är en nulägeslista över risker som bör hanteras i senare ändringssteg.

### 9.1 Central konfiguration används inte

- `/src/config/company.ts` exporterar `COMPANY`, `KA_CERT`, `BAS`, `SLUTBESKED`, `ENERGI`
- sökning i `/src` gav 0 importer av den filen

### 9.2 BAS påstås fortfarande som certifiering/credential

Exempel i nuläget:

- `/src/components/JsonLdSchema.tsx`
- `/src/components/AdvancedSEO.tsx`
- `/src/pages/guides/BasGuide.tsx`
- `/src/components/Certifications.tsx`
- `/src/components/ServiceHero.tsx`

### 9.3 Energideklaration är fortsatt aktiv och indexerbar

Exempel i nuläget:

- route finns kvar i `/src/App.tsx`
- tjänstesida finns kvar i `/src/pages/EnergiDeklarationPage.tsx`
- projektval finns kvar i kontaktformulär
- sitemap innehåller `/energideklaration/`
- `ENERGI.certifiedExpert` är `false`, men används inte för avpublicering/noindex

### 9.4 KA-rollen och slutbesiktning/slutbesked är inte helt renodlade

Exempel i nuläget:

- `/src/components/KAProcess.tsx`
- `/src/pages/guides/KontrollansvarigBygglovGuide.tsx`
- guider och SEO-texter innehåller fortfarande formuleringar om slutbesiktning som behöver juridisk/faktamässig genomgång

### 9.5 Priser och löften är fortfarande spridda

Kod- och innehållssökning visar kvarvarande exempel på:

- `19 999` / `15 000`
- “offert inom 24 timmar”
- “uppstart inom 1-2 veckor”
- bloggpåståenden om daglig publicering

Förekomster finns bl.a. i:

- `/src/pages/TjansterPage.tsx`
- `/src/pages/PriserPage.tsx`
- `/src/components/Pricing.tsx`
- `/src/pages/BlogPage.tsx`
- flera guide- och innehållsfiler

### 9.6 Verifierade styrkor är inte konsekvent samordnade

Följande uppgifter förekommer fortfarande på flera ställen, men utan central styrning:

- “20+ års erfarenhet”
- medlemskap i SBR / “Svenska Byggingenjörers Riksförbund”

## 10. Build, lint, typecheck och CI-baslinje

Verifierat 2026-08-13 i denna sandbox:

| Kontroll | Resultat |
| --- | --- |
| `npm ci` | lyckades |
| `npm run build` | lyckades |
| `npm run lint` | 0 fel, 14 varningar |
| `npx tsc --noEmit` | lyckades utan diagnostik |

Observerade lint-varningar:

- `react-hooks/exhaustive-deps`
- `react-refresh/only-export-components`

GitHub Actions-kontroll via MCP 2026-08-13:

- senaste run som syntes för denna PR-kontext: `Addressing comment on PR #45`
- status vid kontroll: `in_progress`
- `get_job_logs(... failed_only: true)` rapporterade `No failed jobs found in this workflow run`

## 11. Mätbara basvärden att bära vidare till steg 2

- 52 statiska routes i app/sitemap
- 1 dynamisk bloggroute utanför statisk sitemap
- 0 importer av central konfigurationsfil
- 3 formulärförekomster i `/src`
- 14 lint-varningar / 0 lint-fel
- 0 TypeScript-diagnostiker i denna miljö
- sitemap-generatorn stämplar samtliga URL:er med samma byggdatum

## 12. Rekommenderad nästa arbetsordning

Steg 2 bör utgå från uppdaterad `main` och separera inventering från produktionsrättningar. Prioriterad ordning:

1. börja använda central konfiguration som faktisk sanningskälla
2. avpublicera/noindexa ej verifierbara energideklarationspåståenden
3. rensa BAS-/KA-/slutbesiktningspåståenden i innehåll, metadata och schema
4. konsolidera priser, SLA-löften och styrkeuttalanden
5. rätta sitemapgeneratorn i källskriptet istället för genererad XML
