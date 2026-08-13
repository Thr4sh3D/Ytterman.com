# SEO Implementation Overview - Ytterman.com

## Status: ✅ FULLY IMPLEMENTED

Dynamisk SEO med Open Graph och Twitter Cards är redan implementerat för alla kunskapsbank-artiklar och FAQ-sidan via `react-helmet-async`.

---

## Implementation Details

### Core Components

#### 1. **AdvancedSEO Component** (`src/components/AdvancedSEO.tsx`)
Central SEO-komponent som hanterar:
- ✅ `<title>` tags
- ✅ Meta descriptions
- ✅ Canonical URLs
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD schema)
- ✅ Geographic meta tags
- ✅ Article-specific meta tags

```tsx
<AdvancedSEO 
  title="SEO Title"
  description="SEO Description"
  keywords="keyword1, keyword2"
  url="https://ytterman.com/path"
  type="article"
  organization={true}
  breadcrumbs={breadcrumbs}
  article={{
    publishedTime: "2025-02-20",
    author: "Tobias Ytterman",
    section: "Guider",
    tags: ["tag1", "tag2"]
  }}
/>
```

#### 2. **GuideLayout Component** (`src/components/GuideLayout.tsx`)
Wrapper för alla guide-artiklar som automatiskt applicerar SEO:
- Tar emot SEO-metadata som props
- Renderar AdvancedSEO med korrekt data
- Lägger till breadcrumbs och canonical URL
- Används av alla 19 guide-artiklar

#### 3. **knowledgeBase.ts** (`src/content/knowledgeBase.ts`)
Centraliserad SEO-metadata för alla guider:
```typescript
{
  slug: 'kontrollansvarig-bygglov',
  seo: {
    title: 'Kontrollansvarig Bygglov - Roll, Ansvar & Process 2025 | Ytterman',
    description: 'Komplett guide om kontrollansvarigs roll vid bygglov...'
  },
  keywords: ['kontrollansvarig bygglov', 'KA bygglov', ...]
}
```

---

## Open Graph & Twitter Meta Tags

### Implemented OG Tags:
```html
<meta property="og:type" content="article" />
<meta property="og:title" content="[Page Title]" />
<meta property="og:description" content="[Page Description]" />
<meta property="og:url" content="https://ytterman.com/[path]" />
<meta property="og:image" content="/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="sv_SE" />
<meta property="og:site_name" content="Ytterman" />

<!-- Article-specific -->
<meta property="article:published_time" content="[ISO Date]" />
<meta property="article:author" content="Tobias Ytterman" />
<meta property="article:section" content="Guider" />
<meta property="article:tag" content="[keyword]" />
```

### Implemented Twitter Tags:
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Page Title]" />
<meta name="twitter:description" content="[Page Description]" />
<meta name="twitter:image" content="/og-image.png" />
<meta name="twitter:site" content="@ytterman" />
<meta name="twitter:creator" content="@tobiasytterman" />
```

---

## Complete URL → Title → Description List

### Guider (19 artiklar)

#### 1. **Kontrollansvarig**
- **URL:** `https://ytterman.com/guider/kontrollansvarig`
- **Title:** Kontrollansvarig Guide - Allt du behöver veta 2025 | Ytterman
- **Description:** Komplett guide om kontrollansvarigs roll, ansvar och när du behöver en. Expert råd från certifierad kontrollansvarig Tobias Ytterman i Västernorrland.
- **Keywords:** kontrollansvarig, byggkontroll, PBL, plan- och bygglagen, bygglov, teknisk kontroll, slutbevis, kontrollplan, Västernorrland

#### 2. **BAS (BAS-P vs BAS-U)**
- **URL:** `https://ytterman.com/guider/bas`
- **Title:** BAS-P och BAS-U Guide - Säkerhetssamordning 2025 | Ytterman
- **Description:** Komplett guide om BAS-P och BAS-U roller, skillnader och lagkrav enligt AFS 1999:3. Expert råd från certifierad säkerhetssamordnare Tobias Ytterman i Västernorrland.
- **Keywords:** BAS-P, BAS-U, säkerhetssamordnare, arbetsmiljö, AFS 1999:3, byggarbetsmiljö, arbetsmiljöplan, Västernorrland

#### 3. **Bygglov**
- **URL:** `https://ytterman.com/guider/bygglov`
- **Title:** Bygglov Guide Västernorrland - Sundsvall, Härnösand | Ytterman
- **Description:** Komplett guide för bygglovsprocessen i Västernorrlands kommuner. Handläggningstider, krav och tips från expert Tobias Ytterman.
- **Keywords:** bygglov, bygglovsansökan, bygglovsprocess, Västernorrland, Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå

#### 4. **Kvalitetskontroll**
- **URL:** `https://ytterman.com/guider/kvalitetskontroll`
- **Title:** Kvalitetskontroll Guide - Byggkvalitet & Kontrollpunkter | Ytterman
- **Description:** Komplett guide om kvalitetskontroll i byggprojekt. Kritiska kontrollpunkter, dokumentation och slutbesiktning. Expert råd från Tobias Ytterman.
- **Keywords:** kvalitetskontroll, byggkvalitet, kontrollpunkter, slutbesiktning, byggdokumentation, kvalitetssäkring

#### 5. **Överlåtelsebesiktning**
- **URL:** `https://ytterman.com/guider/overlatelsebesiktning`
- **Title:** Överlåtelsebesiktning Guide - Fastighetsbesiktning Försäljning | Ytterman
- **Description:** Komplett guide om överlåtelsebesiktning vid fastighetsförsäljning. Processen, kostnad och vad som ingår. Expert råd från Tobias Ytterman i Västernorrland.
- **Keywords:** överlåtelsebesiktning, fastighetsbesiktning, försäljningsbesiktning, köpebesiktning, husbesiktning, fastighetsförsäljning, Västernorrland

#### 6. **Energi**
- **URL:** `https://ytterman.com/guider/energi`
- **Title:** Energideklaration Guide - Energiklass & Besparingspotential | Ytterman
- **Description:** Komplett guide om energideklaration för fastigheter. Energiklasser, lagkrav, besparingstips och processen. Expert råd från Tobias Ytterman i Västernorrland.
- **Keywords:** energideklaration, energiklass, energiprestanda, energibesiktning, energibesparing, fastighetsenergideklaration, Västernorrland

#### 7. **Miljö**
- **URL:** `https://ytterman.com/guider/miljo`
- **Title:** Miljötänk Byggprocess - Hållbart Byggande & Certifiering | Ytterman
- **Description:** Guide till hållbart byggande och miljötänk. BREEAM, LEED, energieffektivisering och miljöcertifiering. Expert råd från Tobias Ytterman.
- **Keywords:** hållbart byggande, miljötänk, BREEAM, LEED, energieffektivisering, miljöcertifiering, grön byggnad

#### 8. **Digitala Verktyg**
- **URL:** `https://ytterman.com/guider/digitala-verktyg`
- **Title:** Digitala Verktyg Byggprojekt - Effektivisering & Kommunikation | Ytterman
- **Description:** Guide till moderna digitala verktyg för byggprojekt. Projekthantering, dokumentation och kommunikation. Expert råd från Tobias Ytterman.
- **Keywords:** digitala verktyg, byggprojekt, projekthantering, digital dokumentation, byggappar, kommunikation

#### 9. **Kontrollansvarig & Bygglov** ⭐ NY
- **URL:** `https://ytterman.com/guider/kontrollansvarig-bygglov`
- **Title:** Kontrollansvarig Bygglov - Roll, Ansvar & Process 2025 | Ytterman
- **Description:** Komplett guide om kontrollansvarigs roll vid bygglov. När KA behövs, ansvar i processen och hur vi hjälper dig. Expert råd från Tobias Ytterman i Västernorrland.
- **Keywords:** kontrollansvarig bygglov, KA bygglov, bygglovsprocess, kontrollansvarig ansökan, startbesked, Västernorrland

#### 10. **KA Certifiering** ⭐ NY
- **URL:** `https://ytterman.com/guider/kontrollansvarig-certifiering`
- **Title:** Kontrollansvarig Certifiering - Krav, Process & Förnyelse | Ytterman
- **Description:** Allt om certifiering för kontrollansvarig: Boverkets krav, certifieringsorgan, utbildning, prov och förnyelse. Expert guide från certifierad KA Tobias Ytterman.
- **Keywords:** kontrollansvarig certifiering, KA certifikat, Boverket certifiering, certifieringsorgan, KA utbildning, certifieringskrav

#### 11. **KA Ansvar** ⭐ NY
- **URL:** `https://ytterman.com/guider/kontrollansvarig-ansvar`
- **Title:** Kontrollansvarigs Ansvar - Juridik, Skyldigheter & Befogenheter | Ytterman
- **Description:** Komplett guide om kontrollansvarigs ansvar enligt PBL. Juridiskt ansvar, skyldigheter, befogenheter och ansvarsförsäkring. Expert råd från Tobias Ytterman.
- **Keywords:** kontrollansvarig ansvar, KA skyldigheter, juridiskt ansvar, PBL ansvar, ansvarsförsäkring, befogenheter

#### 12. **KA Timpris** ⭐ NY
- **URL:** `https://ytterman.com/guider/kontrollansvarig-timpris`
- **Title:** Kontrollansvarig Timpris & Priser 2025 - Vad Kostar Det? | Ytterman
- **Description:** Transparent prissättning för kontrollansvarig. Timpris, fast pris, genomsnittskostnader och vad som påverkar priset. Kostnadsfri offert från Ytterman.
- **Keywords:** kontrollansvarig timpris, kontrollansvarig pris, KA kostnad, vad kostar kontrollansvarig, prissättning, fast pris

#### 13. **BAS-P Guide** ⭐ NY
- **URL:** `https://ytterman.com/guider/bas-p-guide`
- **Title:** BAS-P Guide - Arbetsmiljösamordnare Projektering 2025 | Ytterman
- **Description:** Omfattande guide om BAS-P enligt AFS 1999:3. Roll, ansvar, arbetsmiljöplan, riskbedömning och samordning. Expert råd från certifierad BAS-P Tobias Ytterman.
- **Keywords:** BAS-P, arbetsmiljösamordnare projektering, arbetsmiljöplan, riskbedömning, AFS 1999:3, projekteringsfas

#### 14. **BAS-U Guide** ⭐ NY
- **URL:** `https://ytterman.com/guider/bas-u-guide`
- **Title:** BAS-U Guide - Byggarbetsmiljösamordnare Utförande 2025 | Ytterman
- **Description:** Omfattande guide om BAS-U enligt AFS 1999:3. Roll, säkerhetsronder, samordningsmöten och byggarbetsplatssäkerhet. Expert råd från certifierad BAS-U Tobias Ytterman.
- **Keywords:** BAS-U, arbetsmiljösamordnare utförande, säkerhetsronder, byggarbetsplats, arbetsmiljö byggplats, samordningsmöten

#### 15. **Vad är BAS** ⭐ NY
- **URL:** `https://ytterman.com/guider/vad-ar-bas`
- **Title:** Vad är BAS? BAS-P & BAS-U Förklarat - Lagkrav & Skillnader | Ytterman
- **Description:** Enkelt förklarad guide om BAS: vad är byggarbetsmiljösamordnare, skillnad mellan BAS-P och BAS-U, lagkrav och när du behöver BAS. Expert råd från Tobias Ytterman.
- **Keywords:** vad är BAS, byggarbetsmiljösamordnare, BAS förklaring, BAS-P BAS-U skillnad, när behövs BAS, AFS 1999:3

#### 16. **Tekniskt Samråd** ⭐ NY
- **URL:** `https://ytterman.com/guider/tekniskt-samrad`
- **Title:** Tekniskt Samråd - Syfte, Process & Krav enligt PBL | Ytterman
- **Description:** Allt om tekniskt samråd i byggprocessen: när det krävs, vem deltar, hur det genomförs och vad som dokumenteras. Expert råd från Tobias Ytterman i Västernorrland.
- **Keywords:** tekniskt samråd, samråd bygglov, PBL samråd, byggsamråd, byggmöte, samrådsmöte

#### 17. **Kontrollplan** ⭐ NY
- **URL:** `https://ytterman.com/guider/kontrollplan`
- **Title:** Kontrollplan Byggprojekt - Upprättande, Innehåll & Krav | Ytterman
- **Description:** Komplett guide om kontrollplan enligt PBL: vad den ska innehålla, kritiska kontrollpunkter, uppföljning och dokumentation. Expert råd från KA Tobias Ytterman.
- **Keywords:** kontrollplan, kontrollplan bygglov, kontrollpunkter, teknisk kontroll, kvalitetsplan, PBL kontroll

#### 18. **Slutbesked** ⭐ NY
- **URL:** `https://ytterman.com/guider/slutbesked`
- **Title:** Slutbesked Bygglov - Krav, Process & Slutbevis enligt PBL | Ytterman
- **Description:** Allt om slutbesked och slutbevis: krav för slutbesked, ansökan, handlingar, kontrollansvarigs intyg och när byggnaden får tas i bruk. Expert guide från Tobias Ytterman.
- **Keywords:** slutbesked, slutbevis, slutbesked bygglov, ibruktagande, PBL slutbesked, byggnadsnämnd

#### 19. **Västernorrland Regional Guide** ⭐ NY
- **URL:** `https://ytterman.com/guider/vasternorrland`
- **Title:** Kontrollansvarig Västernorrland - Sundsvall, Härnösand, Sollefteå | Ytterman
- **Description:** Kontrollansvarig och BAS-tjänster i Västernorrland. Lokala byggkrav, handläggningstider och erfarenhet från Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå, Örnsköldsvik. Expert Tobias Ytterman.
- **Keywords:** kontrollansvarig Västernorrland, BAS Sundsvall, kontrollansvarig Härnösand, bygglov Timrå, kontrollansvarig Sollefteå, BAS Kramfors, Örnsköldsvik

---

### FAQ-sida

#### 20. **FAQ**
- **URL:** `https://ytterman.com/faq`
- **Title:** FAQ Kontrollansvarig & BAS - 32+ Frågor & Svar | Västernorrland
- **Description:** Komplett FAQ om kontrollansvarig, BAS-P, BAS-U, bygglov, certifiering, priser och lokala tjänster i Sundsvall, Härnösand, Timrå. Expertråd från Tobias Ytterman. Svar på alla dina frågor!
- **Keywords:** FAQ kontrollansvarig, vanliga frågor BAS, kontrollansvarig bygglov, certifiering KA, pris kontrollansvarig, kontrollansvarig Sundsvall, BAS Härnösand, bygglov frågor, Västernorrland

---

## How SEO Works in the Application

### Automatic Flow:
1. **User visits guide URL** (e.g., `/guider/kontrollansvarig-bygglov`)
2. **React Router** loads corresponding component (`KontrollansvarigBygglovGuide.tsx`)
3. **Component renders `GuideLayout`** with SEO props from code
4. **GuideLayout calls `AdvancedSEO`** component
5. **AdvancedSEO uses `react-helmet-async`** to inject meta tags into `<head>`
6. **Search engines & social platforms** read the meta tags

### For Guides:
```tsx
// Example: KontrollansvarigBygglovGuide.tsx
<GuideLayout
  title="User-visible title"
  seoTitle="Kontrollansvarig Bygglov - Roll, Ansvar & Process 2025 | Ytterman"
  seoDescription="Komplett guide om kontrollansvarigs roll vid bygglov..."
  keywords="kontrollansvarig bygglov, KA bygglov, bygglovsprocess"
  canonicalPath="/guider/kontrollansvarig-bygglov"
>
  {/* Article content */}
</GuideLayout>
```

### For FAQ:
```tsx
// FAQPage.tsx
<AdvancedSEO 
  title="FAQ Kontrollansvarig & BAS - 32+ Frågor & Svar | Västernorrland"
  description="Komplett FAQ om kontrollansvarig, BAS-P, BAS-U..."
  url="https://ytterman.com/faq"
  faq={allFaqItems} // Generates FAQ schema markup
/>
```

---

## Validation & Testing

### Test SEO Implementation:

1. **View page source** (Ctrl+U in browser)
   - See all meta tags in `<head>`

2. **Use browser DevTools**
   ```
   Elements tab → <head> → Look for:
   - <title>
   - <meta name="description">
   - <meta property="og:*">
   - <meta name="twitter:*">
   ```

3. **Online validators:**
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
   - Google Rich Results Test: https://search.google.com/test/rich-results

4. **Google Search Console:**
   - Submit sitemap with all URLs
   - Monitor index coverage
   - Check mobile usability

---

## Structured Data (JSON-LD Schema)

Already implemented in AdvancedSEO component:

### Organization Schema ✅
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ytterman",
  "description": "Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare...",
  "url": "https://ytterman.com",
  "email": "tobias@ytterman.com",
  "areaServed": ["Sundsvall", "Härnösand", "Sollefteå", "Kramfors", "Timrå"]
}
```

### Article Schema ✅
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article Title]",
  "description": "[Article Description]",
  "author": {
    "@type": "Person",
    "name": "Tobias Ytterman"
  },
  "publisher": { ... },
  "datePublished": "[ISO Date]"
}
```

### Breadcrumb Schema ✅
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Hem", "item": "https://ytterman.com" },
    { "position": 2, "name": "Guider", "item": "https://ytterman.com/guider" },
    { "position": 3, "name": "[Guide Name]", "item": "[Guide URL]" }
  ]
}
```

### FAQ Schema ✅
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Vad gör en kontrollansvarig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En kontrollansvarigansvarar för teknisk kontroll..."
      }
    }
  ]
}
```

---

## Next Steps & Recommendations

### ✅ Already Optimized:
- [x] Dynamic title tags per page
- [x] Unique meta descriptions
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] Canonical URLs
- [x] Structured data (JSON-LD)
- [x] Breadcrumbs
- [x] Article metadata
- [x] FAQ schema

### 🎯 Additional Improvements (Optional):

1. **Create OG Image per Guide**
   - Generate unique 1200x630px images for each guide
   - Include guide title and Ytterman branding
   - Update `image` prop in GuideLayout

2. **Add lastmod to Sitemap**
   - Update `public/sitemap.xml` with lastmod dates
   - Add all 11 new guide URLs

3. **Implement hreflang tags**
   - If planning international versions (e.g., Norwegian)
   - Add `<link rel="alternate" hreflang="sv" ... />`

4. **Monitor Performance**
   - Set up Google Analytics 4
   - Track guide page views
   - Monitor FAQ engagement

5. **Create Google Business Profile**
   - Add Ytterman to Google My Business
   - Link to website for local SEO boost

---

## File Locations

### Core SEO Files:
- `src/components/AdvancedSEO.tsx` - Main SEO component
- `src/components/GuideLayout.tsx` - Guide wrapper with SEO
- `src/components/CanonicalUrl.tsx` - Canonical URL component
- `src/content/knowledgeBase.ts` - SEO metadata for guides
- `src/content/faq.tsx` - FAQ data with keywords
- `public/sitemap.xml` - Sitemap for search engines
- `public/robots.txt` - Crawler instructions

### Implementation Files:
- All guide files: `src/pages/guides/*.tsx`
- FAQ page: `src/pages/FAQPage.tsx`
- App routing: `src/App.tsx`

---

## Summary

✅ **Dynamisk SEO är fullt implementerat** för alla 19 kunskapsbank-artiklar och FAQ-sidan.  
✅ **Open Graph och Twitter Cards** fungerar för delning på sociala medier.  
✅ **Structured data (JSON-LD)** finns för Google Rich Results.  
✅ **Canonical URLs** är korrekt konfigurerade.  
✅ **Ingen UI-förändring** - allt fungerar transparent i bakgrunden.

Systemet är **production-ready** och följer moderna SEO best practices!
