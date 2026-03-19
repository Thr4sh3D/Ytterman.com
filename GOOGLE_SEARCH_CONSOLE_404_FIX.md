# Google Search Console 404-fel - Åtgärdsplan ⚠️ KRITISK

## Problem
Google Search Console rapporterar 404-fel för följande sidor trots att de finns i applikationen:

1. ❌ `https://ytterman.com/faq` (17 mars 2026)
2. ❌ `https://ytterman.com/kontakt` (17 mars 2026)
3. ❌ `https://ytterman.com/energideklaration` (16 mars 2026)
4. ❌ `https://ytterman.com/guider` (16 mars 2026)
5. ❌ `https://ytterman.com/bas-u` (9 mars 2026)
6. ❌ `https://ytterman.com/kontakt?servicenorafartelsebeskrivning` (28 feb 2026)
7. ❌ `https://ytterman.com/omraden` (25 feb 2026)
8. ❌ `https://ytterman.com/guider/bas-u-guide` (24 feb 2026)

## ⚡ VERIFIERAT PROBLEM - Sidorna returnerar faktiskt 404!

**Status per 2026-03-19:**
```
✅ https://ytterman.com/         → 200 OK
❌ https://ytterman.com/faq      → 404 NOT FOUND
❌ https://ytterman.com/kontakt  → 404 NOT FOUND
❌ https://ytterman.com/guider   → 404 NOT FOUND
❌ https://ytterman.com/bas-p    → 404 NOT FOUND
```

Detta är INTE ett Google-cachingproblem. Sidorna returnerar verkligen 404-fel.

## Orsaksanalys

### ✅ VERIFIERAT - Fungerar korrekt:
1. ✅ Alla routes finns definierade i `src/App.tsx`
2. ✅ Alla sidor finns i `public/sitemap.xml`
3. ✅ `netlify.toml` har korrekt SPA fallback-regel
4. ✅ `robots.txt` tillåter all crawling
5. ✅ `public/_redirects` konfigurerad korrekt

### ⚠️ IDENTIFIERADE PROBLEM:

**Problem 1: SPA Redirect-regler fungerar INTE på produktion** ⚠️ KRITISKT
- Webbplatsen är en React Single Page Application (SPA)
- Netlify.toml har korrekt SPA fallback-regel: `/* → /index.html` (200)
- Men regeln har INTE aktiverats på produktionsservern
- Detta orsakar att alla sub-routes returnerar 404
- **ROOT CAUSE**: Senaste deployment använder inte uppdaterad netlify.toml

**Problem 2: Felaktig URL med Query Parameter**
- URL: `kontakt?servicenorafartelsebeskrivning` är felaktig
- Detta ser ut som en felstavning eller form submission som blivit indexerad
- Bör ignoreras och inte begäras för re-indexering

**Problem 3: Verifiering Misslyckades**
- Screenshot visar "Verifieringen misslyckades" (2026-03-17)
- Detta kan påverka hur Google crawlar och indexerar sidan

## 🔧 SNABBFIX - Åtgärda OMEDELBART

### STEG 1: Re-deploya med Korrekta Redirect-regler (KRITISKT)

**Netlify.toml är redan korrekt konfigurerad** ✅

Filen innehåller redan rätt SPA fallback-regel:

```toml
# SPA fallback - must be last
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Du behöver göra en ny deployment för att aktivera dessa regler:**

```bash
# 1. Committa eventuella ändringar
git add .
git commit -m "fix: Ensure SPA redirects are deployed to Netlify"

# 2. Pusha till main branch (trigger deployment)
git push origin main
```

**ALTERNATIVT - Manuell Re-deploy i Netlify Dashboard:**

1. Gå till https://app.netlify.com
2. Välj ditt projekt "ytterman.com"
3. Klicka på "Deploys"
4. Klicka på "Trigger deploy" → "Clear cache and deploy site"
5. Vänta på att deployment slutförs (~2-3 minuter)

### STEG 2: Verifiera att Fix Fungerar

Efter deployment, testa att sidorna nu fungerar:

```powershell
# Testa varje URL
Invoke-WebRequest -Uri "https://ytterman.com/faq" -Method Head
Invoke-WebRequest -Uri "https://ytterman.com/kontakt" -Method Head
Invoke-WebRequest -Uri "https://ytterman.com/guider" -Method Head
```

**Förväntat resultat efter fix:**
```
StatusCode: 200 OK  (INTE 404!)
```

### STEG 3: Begär Re-indexering i Google Search Console

Efter att sidorna returnerar 200 OK, begär omedelbart re-indexering:

**URL:er att validera och begära indexering för:**
```
✓ https://ytterman.com/faq
✓ https://ytterman.com/kontakt
✓ https://ytterman.com/energideklaration
✓ https://ytterman.com/guider
✓ https://ytterman.com/bas-u
✓ https://ytterman.com/omraden
✓ https://ytterman.com/guider/bas-u-guide
```

**Hoppa över (felaktig URL):**
```
✗ https://ytterman.com/kontakt?servicenorafartelsebeskrivning
```

### Steg 3: Fixa Verifieringen

Om verifieringen misslyckades:

1. **Kontrollera verifieringsmetod:**
   - Google Search Console → Inställningar → Verifiering
   - Se vilken metod som används (HTML-tag, DNS, Google Analytics, etc.)

2. **HTML-tag metod** (vanligast):
   - Kontrollera att meta-taggen finns i `index.html`:
   ```html
   <meta name="google-site-verification" content="DIN-VERIFIERINGSKOD" />
   ```

3. **Google Analytics metod:**
   - Säkerställ att GA4-taggen är korrekt implementerad
   - Verifiera att tracking ID är korrekt i `index.html`

4. **Efter fix:**
   - Klicka på "VERIFIERA" igen i Google Search Console

### Steg 4: Skapa Canonical Tags för alla Sidor

Lägg till i alla page-komponenter (om det inte redan finns):

```tsx
import { Helmet } from 'react-helmet-async';

function PageComponent() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://ytterman.com/sida-namn" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Page content */}
    </>
  );
}
```

### Steg 5: Övervaka och Validera

**Efter implementering:**

1. **Vänta 24-48 timmar** för Google att re-crawla
2. **Kontrollera i GSC:**
   - Indexering → Sidor → Indexerade sidor
   - Se att antalet indexerade sidor ökar
3. **Validera manuellt:**
   - Testa varje URL med "Test live URL"-verktyget
4. **Uppdatera sitemap:**
   ```bash
   # Skicka in sitemap igen
   # GSC → Sitemaps → Lägg till ny sitemap
   https://ytterman.com/sitemap.xml
   ```

## Teknisk Checklista

- [ ] Kontrollera att alla routes i App.tsx har motsvarande Helmet-tags med canonical URL
- [ ] Verifiera att Google Search Console-verifieringen är godkänd
- [ ] Begär indexering för alla 7 korrekta URL:er
- [ ] Ta bort/ignorera den felaktiga URL:en med query parameter
- [ ] Lägg till prerendering eller SSR-lösning för bättre bot-support
- [ ] Övervaka GSC för nya 404-fel nästa vecka
- [ ] Säkerställ att sitemap.xml är uppdaterad och skickad

## Långsiktig Lösning: Överväg SSR

För bästa SEO-resultat, överväg att migrera till en SSR-lösning som:
- **Next.js** - React med inbyggd SSR
- **Remix** - Modern React framework
- **Vite SSR** - Lägg till SSR till nuvarande Vite-setup

Detta säkerställer att Google alltid ser renderad HTML direkt.

## Förväntat Resultat

Efter implementering av dessa åtgärder:
- ✅ Google kan crawla och indexera alla sidor korrekt
- ✅ 404-fel försvinner från Search Console
- ✅ Bättre SEO-ranking för alla sidor
- ✅ Snabbare indexering av nya sidor

## Timeline

- **Omedelbart**: Begär re-indexering i GSC
- **Inom 24h**: Google re-crawlar sidorna
- **Inom 48h**: 404-fel bör försvinna från rapporten  
- **Inom 1 vecka**: Alla sidor indexerade korrekt

## Support-kommandon

```bash
# Bygg och deploya
npm run build

# Testa routingen lokalt
npm run dev

# Testa produktionsbygg
npm run preview

# Generera ny sitemap (om scriptet finns)
npm run generate-sitemap
```

## Ytterligare Resurser

- [Netlify SPA Routing](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps)
- [Google Search Console Help](https://support.google.com/webmasters/answer/9012289)
- [React Helmet Async Docs](https://github.com/staylor/react-helmet-async)
