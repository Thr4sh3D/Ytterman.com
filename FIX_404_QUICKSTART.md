# SNABBSTART: Lösung för 404-fel i Google Search Console

## ⚠️ KRITISKT PROBLEM IDENTIFIERAT

Alla sidor utom startsidan returnerar **404 NOT FOUND** när de testas direkt:

```
✅ https://ytterman.com/         → 200 OK
❌ https://ytterman.com/faq      → 404 
❌ https://ytterman.com/kontakt  → 404 
❌ https://ytterman.com/guider   → 404 
❌ https://ytterman.com/bas-p    → 404 
```

## Orsak

SPA (Single Page Application) redirect-reglerna i `netlify.toml` är inte aktiverade på produktionsservern.

## 🚀 LÖSNING (Gör detta NU!)

### Steg 1: Re-deploya till Netlify

**Alternativ A - Via Git:**
```bash
git add .
git commit -m "fix: Activate SPA redirects for all routes"
git push origin main
```

**Alternativ B - Via Netlify Dashboard:**
1. Gå till https://app.netlify.com
2. Välj "ytterman.com"
3. Klicka "Deploys"
4. Klicka"Trigger deploy" → "Clear cache and deploy site"
5. Vänta 2-3 minuter

### Steg 2: Verifiera (efter deploy)

Testa att sidorna nu fungerar:

```powershell
Invoke-WebRequest -Uri "https://ytterman.com/faq" -Method Head
# Ska returnera: StatusCode: 200 OK
```

### Steg 3: Begär Re-indexering i Google Search Console

1. Öppna: https://search.google.com/search-console
2. Gå till: "Indexering" → "Sidor" → "Hittades inte (404)"
3. För varje URL nedan:
   - Klicka på URL:en
   - Klicka "TESTA LIVE-VERSION"
   - När testet visar OK → Klicka "BEGÄR INDEXERING"

**URL:er att indexera:**
- https://ytterman.com/faq
- https://ytterman.com/kontakt
- https://ytterman.com/energideklaration
- https://ytterman.com/guider
- https://ytterman.com/bas-u
- https://ytterman.com/omraden
- https://ytterman.com/guider/bas-u-guide

## ⏰ Tidsram

- **Nu**: Re-deploya
- **Efter 5 min**: Testa att sidorna fungerar
- **Efter 24h**: Begär indexering i GSC
- **Efter 48-72h**: 404-fel ska vara borta

## 📄 Mer Information

Se [GOOGLE_SEARCH_CONSOLE_404_FIX.md](./GOOGLE_SEARCH_CONSOLE_404_FIX.md) för fullständig guide.

## ✅ Vad som är fixat

- [x] netlify.toml har korrekt SPA fallback-regel
- [x] Alla routes finns i App.tsx
- [x] Sitemap innehåller alla sidor
- [x] SEO meta-tags är korrekta
- [ ] **Deployment behövs för att aktivera fix**
