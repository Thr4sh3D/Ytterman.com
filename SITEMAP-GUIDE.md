# Sitemap & Robots.txt Setup

## Översikt

Projektet har nu en komplett SEO-setup för GitHub Pages med domänen https://ytterman.com:

- ✅ `public/robots.txt` - Sökmotor-instruktioner
- ✅ `public/sitemap.xml` - Automatiskt genererad sitemap med alla routes
- ✅ `scripts/generate-sitemap.js` - Script som genererar sitemap från App.tsx

## Filer

### public/robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://ytterman.com/sitemap.xml
```

Enkel och ren konfiguration som:
- Tillåter alla sökmotorer att indexera hela sajten
- Pekar på sitemap-filen

### public/sitemap.xml

Innehåller **22 routes** från din React Router:
- Homepage (/)
- 8 huvudsidor (tjanster, kontakt, om, faq, etc.)
- 6 service-sidor (kontrollansvarig, bas-p, bas-u, etc.)
- 8 guide-sidor (/guider/*)

Varje URL har:
- `<loc>` - Fullständig URL
- `<lastmod>` - Dagens datum (uppdateras vid regenerering)
- `<changefreq>` - Hur ofta sidan ändras
- `<priority>` - Sidans prioritet (0.0-1.0)

### scripts/generate-sitemap.js

Ett Node.js-script som:
1. Läser `src/App.tsx`
2. Extraherar alla `<Route path="..." />` paths
3. Filtrerar bort 404-routen (`path="*"`)
4. Genererar `sitemap.xml` med rätt prioriteter
5. Skriver till `public/sitemap.xml`

## Hur Man Använder

### Generera Sitemap (När Routes Ändras)

Kör efter att du lagt till/tagit bort routes i `App.tsx`:

```bash
# Alternativ 1: Med npm script
npm run generate:sitemap

# Alternativ 2: Direkt med node
node scripts/generate-sitemap.js
```

**Output:**
```
🔍 Extracting routes from App.tsx...
✅ Found 22 routes:
  - /
  - /bas-p
  - /bas-u
  ...
📝 Generating sitemap.xml...
✅ Sitemap generated successfully
📊 Total URLs: 22
```

### När Ska Man Köra Scriptet?

- ✅ Efter att ha lagt till nya routes i `App.tsx`
- ✅ Efter att ha tagit bort routes
- ✅ Efter refactoring av router-strukturen
- ✅ Innan produktion-deploy (optional, men rekommenderat)

### CI/CD Integration (Optional)

Om du vill automatisera detta, lägg till i GitHub Actions workflow:

```yaml
# .github/workflows/deploy.yml
- name: Generate Sitemap
  run: node scripts/generate-sitemap.js
  
- name: Build
  run: npm run build
```

## Prioriteter

Scriptet använder följande prioritetslogik:

| Route/Pattern | Priority | Change Freq | Beskrivning |
|--------------|----------|-------------|-------------|
| `/` | 1.0 | weekly | Homepage (högst prioritet) |
| `/tjanster` | 0.9 | monthly | Tjänster-sidan |
| `/kontakt` | 0.9 | monthly | Kontakt-sidan |
| `/kontrollansvarig` | 0.9 | monthly | Huvudtjänster |
| `/bas-p`, `/bas-u` | 0.9 | monthly | Huvudtjänster |
| `/energideklaration` | 0.8 | monthly | Service-sidor |
| `/faq` | 0.8 | monthly | FAQ (viktigt för SEO) |
| `/guider` | 0.7 | monthly | Guide-översikt |
| `/guider/*` | 0.7 | monthly | Individuella guider |
| `/om` | 0.7 | monthly | Om-sidan |
| `/integritetspolicy` | 0.3 | yearly | Policy-sidor |
| `/tack` | 0.2 | yearly | Thank you page |

### Anpassa Prioriteter

Redigera `ROUTE_PRIORITIES` i `scripts/generate-sitemap.js`:

```javascript
const ROUTE_PRIORITIES = {
  '/': { priority: '1.0', changefreq: 'weekly' },
  '/din-nya-route': { priority: '0.9', changefreq: 'daily' },
  // ...
};
```

## Verifiering

### Lokal Testning

1. Bygg projektet:
   ```bash
   npm run build
   ```

2. Kör preview:
   ```bash
   npm run preview
   ```

3. Testa URLs:
   - http://localhost:4173/robots.txt
   - http://localhost:4173/sitemap.xml

### Produktion

Efter deploy till GitHub Pages, verifiera:
- https://ytterman.com/robots.txt
- https://ytterman.com/sitemap.xml

### Google Search Console

1. Gå till [Google Search Console](https://search.google.com/search-console)
2. Välj din property (ytterman.com)
3. Gå till **Sitemaps** (vänster meny)
4. Lägg till: `https://ytterman.com/sitemap.xml`
5. Klicka **Submit**

Google kommer nu crawla alla dina routes automatiskt.

## Tekniska Detaljer

### Route-Extraction Regex

Scriptet använder regex för att hitta routes:
```javascript
const routeRegex = /<Route\s+path="([^"]+)"/g;
```

Detta matchar:
- `<Route path="/example" ...>`
- `<Route path="/example/nested" element={...} />`

### Filtrering

Wildcard routes (`*`) filtreras bort:
```javascript
if (route !== '*') {
  routes.push(route);
}
```

404-sidan ska INTE vara med i sitemap.

### Datum-Format

`lastmod` använder ISO 8601 format (YYYY-MM-DD):
```javascript
const today = new Date().toISOString().split('T')[0];
// Output: "2026-02-20"
```

## Troubleshooting

### PowerShell Execution Policy Error

Om du får ett execution policy-fel när du kör npm-script:

```bash
# Använd node direkt istället
node scripts/generate-sitemap.js
```

### Routes Saknas i Sitemap

1. Kontrollera att routes finns i `src/App.tsx`
2. Kontrollera att de har format: `<Route path="/example" ...>`
3. Kör scriptet igen: `node scripts/generate-sitemap.js`

### Fel Prioritet på Route

Redigera `ROUTE_PRIORITIES` i scriptet och kör om.

## Nästa Steg

1. ✅ Verifiera att alla routes är med i sitemap
2. ✅ Submit sitemap till Google Search Console
3. ✅ Övervaka indexering i Search Console
4. ⚠️ Uppdatera sitemap när du lägger till nya routes

## Referenser

- [Sitemap XML Standard](https://www.sitemaps.org/protocol.html)
- [Google Search Console](https://search.google.com/search-console)
- [Robots.txt Tester](https://support.google.com/webmasters/answer/6062598)
