# SEO Keyword Map - Översikt

## Sammanfattning

SEO-kartan mappar alla keywords från kunskapsbanken och FAQ till primära sidor för att undvika keyword cannibalization och duplicerat innehåll. Varje keyword har **en primär sida** och kan ha flera relaterade sidor.

## Principer

### 1. En Primär Sida per Keyword
- Varje keyword pekar på **exakt en** huvudsida
- Förhindrar konkurrens mellan egna sidor i sökmotorer
- Ger klarhet om vilken sida som ska rankas för varje term

### 2. Smarta Prioriteringsregler

**Prioritetsordning för primär sida:**
1. **Tjänstesidor** (`/kontrollansvarig`, `/bas-p`, `/bas-u`) - För transaktionella keywords
2. **Guider** (`/guider/*`) - För informationella keywords  
3. **FAQ-kategorier** (`/faq#kategori`) - För specifika frågor
4. **Ortssidor** (`/omraden`) - För geografiska keywords

### 3. Inga Ort-Dupliceringar
- **ALLA orter** → `/omraden` (en gemensam landningssida)
- Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå, Örnsköldsvik, Ånge
- Undviker thin content och duplicate content issues
- Guider kan nämna orter men är inte primära för ortnamn

### 4. Search Intent Classification
Varje keyword klassificeras:
- **Informational**: Användaren söker kunskap (ex: "vad är kontrollansvarig")
- **Commercial**: Användaren undersöker köp (ex: "kontrollansvarig pris")
- **Transactional**: Användaren vill köpa/boka (ex: "anlita kontrollansvarig")
- **Navigational**: Användaren söker specifik sida (ex: "kontrollansvarig sundsvall")

## Keyword-Kategorier

### Core Service Keywords (Primära Tjänster)

| Keyword | Primär Sida | Type | Search Intent | Relaterade |
|---------|-------------|------|---------------|------------|
| kontrollansvarig | `/kontrollansvarig` | service-page | commercial | `/guider/kontrollansvarig`, `/faq#kontrollansvarig` |
| BAS-P | `/bas-p` | service-page | commercial | `/guider/bas`, `/faq#basP` |
| BAS-U | `/bas-u` | service-page | commercial | `/guider/bas`, `/faq#basU` |
| överlåtelsebesiktning | `/overlatelsebesiktning` | service-page | commercial | `/guider/overlatelsebesiktning`, `/faq#overlatelsebesiktning` |

**Rationale**: Tjänstesidor är primära för att direkt konvertera users som söker efter tjänsten.

---

### Process & Regulatory Keywords

| Keyword | Primär Sida | Type | Search Intent | Relaterade |
|---------|-------------|------|---------------|------------|
| bygglov | `/guider/bygglov` | guide | informational | `/faq#bygglov` |
| bygglovsansökan | `/guider/bygglov` | guide | informational | - |
| bygglovsprocess | `/guider/bygglov` | guide | informational | - |
| PBL | `/guider/kontrollansvarig` | guide | informational | - |
| plan- och bygglagen | `/guider/kontrollansvarig` | guide | informational | - |
| teknisk kontroll | `/guider/kontrollansvarig` | guide | informational | `/guider/kvalitetskontroll` |
| slutbevis | `/guider/kontrollansvarig` | guide | informational | `/guider/kvalitetskontroll` |
| kontrollplan | `/guider/kontrollansvarig` | guide | informational | `/guider/kvalitetskontroll` |

**Rationale**: Guider ger djup information om processer och regelverk.

---

### Quality & Safety Keywords

| Keyword | Primär Sida | Type | Search Intent | Relaterade |
|---------|-------------|------|---------------|------------|
| kvalitetskontroll | `/guider/kvalitetskontroll` | guide | informational | `/guider/kontrollansvarig` |
| byggkvalitet | `/guider/kvalitetskontroll` | guide | informational | - |
| kontrollpunkter | `/guider/kvalitetskontroll` | guide | informational | - |
| slutbesiktning | `/guider/kvalitetskontroll` | guide | informational | `/guider/kontrollansvarig` |
| säkerhetssamordnare | `/guider/bas` | guide | informational | `/bas-p`, `/bas-u` |
| arbetsmiljö | `/guider/bas` | guide | informational | `/faq#basP`, `/faq#basU` |
| arbetsmiljöplan | `/guider/bas` | guide | informational | - |
| säkerhetsronder | `/guider/bas` | guide | informational | `/faq#basU` |

**Rationale**: Quality/safety topics är best served av educational guides.

---

### Property & Energy Keywords

| Keyword | Primär Sida | Type | Search Intent | Relaterade |
|---------|-------------|------|---------------|------------|
| fastighetsbesiktning | `/guider/overlatelsebesiktning` | guide | informational | `/overlatelsebesiktning` |
| försäljningsbesiktning | `/guider/overlatelsebesiktning` | guide | informational | `/overlatelsebesiktning` |
| köpebesiktning | `/guider/overlatelsebesiktning` | guide | informational | - |
| husbesiktning | `/guider/overlatelsebesiktning` | guide | informational | - |
| energideklaration | `/guider/energi` | guide | informational | - |
| energiklass | `/guider/energi` | guide | informational | - |
| energiprestanda | `/guider/energi` | guide | informational | - |
| energibesparing | `/guider/energi` | guide | informational | `/guider/miljo` |

**Rationale**: Specialized topics med egna comprehensive guides.

---

### Sustainability Keywords

| Keyword | Primär Sida | Type | Search Intent | Relaterade |
|---------|-------------|------|---------------|------------|
| hållbart byggande | `/guider/miljo` | guide | informational | `/guider/energi` |
| miljötänk | `/guider/miljo` | guide | informational | - |
| BREEAM | `/guider/miljo` | guide | informational | - |
| LEED | `/guider/miljo` | guide | informational | - |
| miljöcertifiering | `/guider/miljo` | guide | informational | - |
| grön byggnad | `/guider/miljo` | guide | informational | - |

**Rationale**: Nisch-topic som kräver dedicated guide.

---

### Technology Keywords

| Keyword | Primär Sida | Type | Search Intent | Relaterade |
|---------|-------------|------|---------------|------------|
| digitala verktyg | `/guider/digitala-verktyg` | guide | informational | - |
| projekthantering | `/guider/digitala-verktyg` | guide | informational | - |
| digital dokumentation | `/guider/digitala-verktyg` | guide | informational | - |
| byggappar | `/guider/digitala-verktyg` | guide | informational | - |

**Rationale**: Tech topics isolerade till egen guide.

---

### Pricing Keywords (Commercial Intent)

| Keyword | Primär Sida | Type | Search Intent | Relaterade |
|---------|-------------|------|---------------|------------|
| pris | `/faq#pricing` | faq-category | commercial | `/kontrollansvarig`, `/bas-p`, `/bas-u` |
| kostnad | `/faq#pricing` | faq-category | commercial | `/priser` |
| offert | `/faq#pricing` | faq-category | commercial | `/kontakt` |
| fast pris | `/faq#pricing` | faq-category | commercial | - |
| timpris | `/faq#pricing` | faq-category | commercial | - |
| paketpris | `/faq#pricing` | faq-category | commercial | - |

**Rationale**: Pricing FAQ är mest direkt svar på prisfrågor, länkar till tjänstesidor för konvertering.

---

### Geographic Keywords (Västernorrland)

**VIKTIGT: Alla orter pekar på samma landningssida för att undvika duplicate content**

| Keyword | Primär Sida | Type | Search Intent | Relaterade |
|---------|-------------|------|---------------|------------|
| Västernorrland | `/omraden` | location-page | navigational | Alla guider |
| Sundsvall | `/omraden` | location-page | navigational | Alla guider |
| Härnösand | `/omraden` | location-page | navigational | Alla guider |
| Sollefteå | `/omraden` | location-page | navigational | Alla guider |
| Kramfors | `/omraden` | location-page | navigational | Alla guider |
| Timrå | `/omraden` | location-page | navigational | Alla guider |
| Örnsköldsvik | `/omraden` | location-page | navigational | Alla guider |
| Ånge | `/omraden` | location-page | navigational | Alla guider |

**Rationale**: 
- ❌ **INTE** separata sidor per ort (duplicate content)
- ✅ **EN** gemensam `/omraden` som täcker alla kommuner
- ✅ Alla guider kan nämna orter naturligt i text
- ✅ Undviker thin content och duplicate content penalties

---

### FAQ-Specific Keywords

| Keyword | Primär Sida | Type | Search Intent | Relaterade |
|---------|-------------|------|---------------|------------|
| lagkrav | `/faq#kontrollansvarig` | faq-category | informational | `/guider/kontrollansvarig` |
| certifiering | `/faq#certifiering` | faq-category | informational | `/guider/kontrollansvarig` |
| tid | `/faq#general` | faq-category | informational | - |
| process | `/faq#general` | faq-category | informational | - |

**Rationale**: Specifika frågor best answered i FAQ-format.

---

## Statistik

### Keyword Distribution

```
Total Keywords: 60+
├── Guide Primary: ~35 (58%)
├── Service Page Primary: ~4 (7%)
├── FAQ Category Primary: ~15 (25%)
└── Location Page Primary: ~8 (13%)
```

### Search Intent Distribution

```
├── Informational: ~45 (75%) - Guides & FAQ
├── Commercial: ~10 (17%) - Pricing & Service pages
├── Navigational: ~8 (13%) - Location pages
└── Transactional: ~0 (0%) - Handled by CTA:s
```

---

## Implementation Benefits

### ✅ SEO Fördelar
1. **Ingen Keyword Cannibalization** - En tydlig vinnare per keyword
2. **Starkare Page Authority** - Alla signaler pekar på en sida
3. **Bättre User Experience** - Users hittar rätt sida direkt
4. **Undviker Duplicate Content** - Inga ort-dupliceringar

### ✅ Innehållsstrategi
1. **Tydlig Content Hierarchy** - Tjänster → Guider → FAQ
2. **Smart Internal Linking** - Från primär till relaterade
3. **Scalability** - Lätt att lägga till nya keywords
4. **Data-Driven** - Keywords i centraliserad data

### ✅ Maintenance
1. **Single Source of Truth** - `seoMap.ts` genereras automatiskt
2. **Type-Safe** - TypeScript interfaces
3. **Testable** - Kan verifiera keyword-mappningar programmatiskt
4. **Documented** - Detta dokument + inline comments

---

## Användning i Kod

### Hitta primär sida för keyword
```typescript
import { getPrimaryPageForKeyword } from '@/content/seoMap';

const primary = getPrimaryPageForKeyword('kontrollansvarig');
// Returns: { slug: 'kontrollansvarig', type: 'service-page', url: '/kontrollansvarig', title: '...' }
```

### Hitta relaterade sidor
```typescript
import { getRelatedPagesForKeyword } from '@/content/seoMap';

const related = getRelatedPagesForKeyword('bygglov');
// Returns: [{ slug: 'kontrollansvarig', url: '/guider/kontrollansvarig', relevance: 'high' }, ...]
```

### Hitta alla keywords för en sida
```typescript
import { getKeywordsForPage } from '@/content/seoMap';

const keywords = getKeywordsForPage('kontrollansvarig');
// Returns: ['kontrollansvarig', 'KA', 'byggkontroll', 'PBL', ...]
```

### SEO-statistik
```typescript
import { getSEOStats } from '@/content/seoMap';

const stats = getSEOStats();
// Returns: { totalKeywords: 60, guidePrimary: 35, ... }
```

---

## Framtida Förbättringar

### 1. Automatisk Canonical Tag Generation
```typescript
// Generera canonical tags baserat på SEO-mappning
const canonical = getPrimaryPageForKeyword(currentKeyword)?.url;
```

### 2. Dynamic Internal Linking
```typescript
// Automatiskt föreslå interna länkar i content
const suggestions = getRelatedPagesForKeyword(keyword);
```

### 3. Keyword Gap Analysis
```typescript
// Identifiera keywords utan primär sida
const gaps = findKeywordGaps();
```

### 4. Competitor Keyword Tracking
```typescript
// Jämför egen keyword-täckning mot konkurrenter
const coverage = analyzeKeywordCoverage(competitorKeywords);
```

---

## Slutsats

SEO-kartan ger en **strategisk översikt** över hur keywords mappas till sidor för att:
- ✅ Maximera SEO-potential
- ✅ Undvika kannibalisering
- ✅ Ge tydlig content hierarchy
- ✅ Skapa smart internal linking
- ✅ Undvika duplicate content (särskilt för orter)

**Viktigt**: Detta är en levande karta som uppdateras automatiskt när nya guider eller FAQ-items läggs till i `knowledgeBase.ts` och `faq.ts`.
