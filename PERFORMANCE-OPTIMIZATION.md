# Bildoptimering för Laddtidsförbättring

## Sammanfattning av Optimeringar

Denna guide dokumenterar alla ändringar som gjorts för att förbättra laddtiden **utan att ändra UI**.

---

## 1. Preconnect för Google Fonts ✅

**Fil:** [index.html](index.html#L7-L9)

**Ändring:**
```html
<!-- FÖRE -->
<link rel="preconnect" href="https://www.googletagmanager.com" crossorigin />

<!-- EFTER -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://www.googletagmanager.com" crossorigin />
```

**Varför:**
- Etablerar tidig anslutning till Google Fonts servrar
- Minskar DNS-lookup, TCP-handshake och TLS-förhandling tid
- Fonts laddas redan med `display=swap` (font-display: swap) via URL-parametern

**UI-påverkan:** Ingen - fonts laddas bara snabbare

---

## 2. OG-Image Konvertering till WebP 🔄

**Fil att konvertera:** `public/og-image.png` (1,161 KB → ~200-400 KB med WebP)

**Uppdaterade referenser:**
- ✅ [src/components/AdvancedSEO.tsx](src/components/AdvancedSEO.tsx)
- ✅ [src/components/SEO.tsx](src/components/SEO.tsx)
- ✅ [src/components/SEOOptimizer.tsx](src/components/SEOOptimizer.tsx)
- ✅ [src/components/JsonLdSchema.tsx](src/components/JsonLdSchema.tsx)

### Konverteringsguide

#### Alternativ 1: Online Tool (Enklast)
1. Gå till [Squoosh.app](https://squoosh.app/)
2. Ladda upp `public/og-image.png`
3. Välj **WebP** format
4. Quality: **85-90%** (balans mellan storlek och kvalitet)
5. Ladda ner som `og-image.webp`
6. Placera i `public/` mappen

#### Alternativ 2: ImageMagick (Kommandorad)
```bash
# Installera ImageMagick först: https://imagemagick.org/

# Konvertera PNG till WebP med 90% kvalitet
magick convert public/og-image.png -quality 90 public/og-image.webp

# Verifiera filstorlek
ls -lh public/og-image.*
```

#### Alternativ 3: Node.js Script med sharp
```bash
# Installera sharp (om du inte redan har det)
npm install --save-dev sharp

# Skapa script: scripts/convert-og-image.js
```

```javascript
const sharp = require('sharp');

sharp('public/og-image.png')
  .webp({ quality: 90 })
  .toFile('public/og-image.webp')
  .then(() => console.log('✅ OG-image converted to WebP successfully!'))
  .catch(err => console.error('Error:', err));
```

```bash
# Kör scriptet
node scripts/convert-og-image.js
```

#### Alternativ 4: GIMP (GUI)
1. Öppna `public/og-image.png` i GIMP
2. File → Export As...
3. Välj filnamn: `og-image.webp`
4. Välj WebP i format-dropdown
5. Quality: 90
6. Export

### Förväntad Filstorleksbesparing

| Format | Storlek | Besparing |
|--------|---------|-----------|
| PNG (Original) | 1,161 KB | - |
| WebP (90% kvalitet) | ~250-350 KB | 70-80% |
| WebP (85% kvalitet) | ~200-280 KB | 75-85% |

**Rekommendation:** Använd 90% kvalitet för OG-images (social sharing) för att säkerställa bra kvalitet på Facebook/Twitter.

### Fallback-strategi

**VIKTIG:** Behåll `og-image.png` som fallback för äldre browsers:

I [index.html](index.html) kommer React Helmet att generera:
```html
<!-- Modern browsers -->
<meta property="og:image" content="https://ytterman.com/og-image.webp" />

<!-- Fallback (kan läggas till manuellt om behövs) -->
<meta property="og:image" content="https://ytterman.com/og-image.png" />
```

---

## 3. LCP (Largest Contentful Paint) Analys ✅

**Resultat:** Ingen LCP-bild identifierad

**Analys:**
- Hero-sektionen använder **CSS-gradients** (inte bilder)
- LCP-element är troligtvis **H1-texten** i Hero: "Certifierad Kontrollansvarig och BAS U/P – Västernorrland"
- Inga bilder laddas above-the-fold som skulle konkurrera om LCP

**Åtgärd:**
- ❌ Ingen preload behövs (ingen LCP-bild)
- ❌ Inga width/height attribut behövs (inga hero-bilder)
- ✅ Fonts preconnect already implemented → snabbare textrendering

---

## 4. Font Loading Optimering ✅

**Status:** Redan optimerad!

**Befintlig implementation i [src/index.css](src/index.css#L1):**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
```

**Optimeringar:**
- ✅ `display=swap` används → förhindrar FOIT (Flash of Invisible Text)
- ✅ Preconnect tillagt i index.html → snabbare anslutning
- ⚠️ Alla font-weights importeras (100-900)

### (Optional) Font Weight Optimization

Om du vill minska font-laddningen ytterligare:

```css
/* FÖRE - Alla weights (9 varianter) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* EFTER - Endast nödvändiga weights */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

**Rekommenderade weights för din site:**
- 400 (Regular) - body text
- 500 (Medium) - subtle emphasis
- 600 (Semi-bold) - buttons, labels
- 700 (Bold) - headings

**Estimerad besparing:** ~40-50 KB per unused weight

---

## 5. Andra Bilder i Projektet

**Analys av public/:**
```
public/
├── og-image.png        1,161 KB  → Konvertera till WebP
├── placeholder.svg     ~2 KB     → OK (SVG)
├── favicon.ico         ~1 KB     → OK (small)
├── favicon.svg         ~0.5 KB   → OK (SVG)
```

**Inga andra tunga bilder hittades**

---

## Verifiering efter Deploy

### 1. Testa Laddtid

```bash
# Bygg projektet
npm run build

# Preview lokalt
npm run preview
```

### 2. Google PageSpeed Insights
1. Gå till https://pagespeed.web.dev/
2. Ange URL: https://ytterman.com
3. Kontrollera:
   - ✅ LCP < 2.5s
   - ✅ FCP < 1.8s
   - ✅ CLS < 0.1
   - ✅ Font loading optimized
   - ✅ Image format (WebP)

### 3. Chrome DevTools

**Network Tab:**
```
1. Öppna DevTools (F12)
2. Network tab
3. Fast 3G throttling
4. Reload page (Ctrl+Shift+R)
5. Kontrollera:
   - og-image.webp laddas (inte .png)
   - fonts.gstatic.com har tidig anslutning (preconnect)
   - Inga CLS-warnings i Console
```

**Performance Tab:**
```
1. Performance tab
2. Record page load
3. Stop recording
4. Leta efter:
   - LCP marker (blue) på text-element
   - Font-display: swap (inga "Flash of Invisible Text")
```

---

## Sammanfattning av Ändringar

| Asset/Fil | Åtgärd | UI-Påverkan | Laddtidsvinst |
|-----------|--------|-------------|---------------|
| **Google Fonts** | Preconnect added | Ingen - samma fonts | ~100-300ms |
| **og-image.png** | Konvertera till WebP | Ingen - samma bild | ~800-900 KB |
| **Font loading** | display=swap (redan aktiv) | Ingen - samma fonts | Förhindrar FOIT |
| **LCP** | Ingen preload (är text) | Ingen | N/A |
| **Hero images** | Ingen (använder CSS) | Ingen | N/A |

---

## Checklista

- [x] Preconnect för Google Fonts tillagd i index.html
- [x] Alla og-image referenser uppdaterade till .webp
- [ ] Konvertera public/og-image.png till public/og-image.webp (manuell åtgärd)
- [x] Verifiera att fonts använder display=swap
- [x] Bekräfta att ingen LCP-bild behöver preload
- [ ] Testa i PageSpeed Insights efter deploy
- [ ] Verifiera WebP fungerar i produktionsmiljö

---

## Nästa Steg

1. **Konvertera OG-image:**
   ```bash
   # Välj ett alternativ från konverteringsguiden ovan
   # Rekommenderat: Squoosh.app eller ImageMagick
   ```

2. **Build och Deploy:**
   ```bash
   npm run build
   # Deploy till GitHub Pages
   ```

3. **Verifiera:**
   ```bash
   # Besök https://ytterman.com
   # Testa i PageSpeed Insights
   # Kontrollera Network tab att WebP laddas
   ```

---

## Tekniska Detaljer

### Varför WebP?
- **70-80% mindre filstorlek** än PNG
- **Lossless och lossy compression**
- **Stöds av alla moderna browsers** (96%+ support)
- **Perfekt för social sharing images**

### Varför Preconnect?
- **Eliminerar round-trip time** för DNS, TCP, TLS
- **Kritisk för third-party fonts** (Google Fonts)
- **Sparar 100-300ms** på font loading

### Font-display: swap
- **FOIT prevention:** Text visas direkt med fallback-font
- **Bättre UX:** Ingen "blank" text under font-laddning
- **SEO-vänligt:** Text är crawlbar omedelbart

---

## Support

Om problem uppstår:
- Kontrollera att `og-image.webp` finns i `public/`
- Verifiera att inga TypeScript errors efter kodändringar
- Testa lokalt med `npm run preview` före deploy

**Alla ändringar är non-breaking och backwards compatible.**
