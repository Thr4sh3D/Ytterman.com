# 🔧 Implementeringsguide: SEO-fix för ytterman.com

## 📋 Sammanfattning av Problem och Lösningar

### Problem i Google Search Console:
1. ✅ **"Sida med omdirigering"** - http/www-varianter
2. ✅ **"Hittades inte (404)"** - /guider/bas-u-guide och /omraden

### Rotorsak:
- Detta är en **React SPA på GitHub Pages** - alla redirects måste hanteras via DNS och client-side routing
- GitHub Pages ser alla client-side routes som 404 första gången, sedan använder vi 404.html→index.html trick
- HTTP→HTTPS hanteras automatiskt av GitHub Pages
- www→non-www **måste konfigureras via DNS**

---

## 🚀 Del 1: Kod-ändringar (✅ KLART)

Följande filer har skapats/uppdaterats:

### Nya filer:
- ✅ `_config.yml` - Jekyll-konfiguration för GitHub Pages
- ✅ `public/.nojekyll` - Inaktiverar Jekyll-processning
- ✅ `public/CNAME` - Konfigurerar custom domain
- ✅ `scripts/test-redirects.ps1` - Verifieringsscript

### Uppdaterade filer:
- ✅ `public/404.html` - Förbättrad SEO med meta refresh + noindex
- ✅ `package.json` - Ny build:prod script

---

## 🌐 Del 2: DNS-konfiguration (⚠️ MANUELL ÅTGÄRD KRÄVS)

För att fixa www→non-www redirects måste du konfigurera DNS hos din domain-registrar.

### Steg 1: Logga in hos din DNS-leverantör
(t.ex. Loopia, Binero, Cloudflare, Namecheap, etc.)

### Steg 2: Konfigurera DNS-poster

**Alternativ A: Endast non-www (REKOMMENDERAT)**
```
Type    Name    Value                           TTL
A       @       185.199.108.153                 3600
A       @       185.199.109.153                 3600
A       @       185.199.110.153                 3600
A       @       185.199.111.153                 3600
CNAME   www     thr4sh3d.github.io              3600
```

**Alternativ B: Både www och non-www (båda fungerar)**
```
Type    Name    Value
ALIAS   @       thr4sh3d.github.io
CNAME   www     thr4sh3d.github.io
```

### Steg 3: Verifiera DNS-ändringar
```powershell
# Kör i PowerShell efter 10-60 minuter
nslookup ytterman.com
nslookup www.ytterman.com
```

### ⚠️ VIKTIGT: 
GitHub Pages hanterar INTE www-redirect automatiskt. Du måste:
1. Antingen konfigurera DNS att peka www till non-www
2. Eller använda en DNS-leverantör med redirect-funktionalitet (t.ex. Cloudflare)

---

## ⚙️ Del 3: GitHub Pages-inställningar

### Steg 1: Gå till GitHub Repository Settings
1. Öppna: https://github.com/Thr4sh3D/Ytterman.com/settings/pages
2. Scrolla till "GitHub Pages" sektionen

### Steg 2: Verifiera inställningar
- ✅ **Source:** Deploy from a branch: `main` → `/root`
- ✅ **Custom domain:** `ytterman.com` (ska redan vara konfigurerad)
- ✅ **Enforce HTTPS:** ☑️ **MÅSTE vara aktiverad** (checka denna!)

### Steg 3: Spara ändringar
Om du ändrade något, klicka "Save" och vänta ~1 minut för att GitHub ska processera.

---

## 🔍 Del 4: Verifiera att allt fungerar

### Steg 1: Deploy
```powershell
# Commita och pusha ändringarna
git add .
git commit -m "Fix: SEO improvements - 404 handling and canonical URLs"
git push origin main

# Vänta ~2-5 minuter för GitHub Actions deploy
```

### Steg 2: Kör verifieringsscript
```powershell
# Kör från projektets root-mapp
.\scripts\test-redirects.ps1
```

### Steg 3: Manuella tester med curl
```powershell
# Test 1: Canonical URL (ska ge 200 OK)
curl -I https://ytterman.com/

# Test 2: Tidigare 404-sidor (ska nu ge 200 OK efter redirect)
curl -I https://ytterman.com/guider/bas-u-guide
curl -I https://ytterman.com/omraden

# Test 3: HTTPS enforcement (GitHub hanterar automatiskt)
curl -I http://ytterman.com/
# Förväntat resultat: 301 -> https://ytterman.com/

# Test 4: www-redirect (beror på DNS-konfiguration)
curl -I http://www.ytterman.com/
curl -I https://www.ytterman.com/
# Förväntat resultat efter DNS-fix: 301 -> https://ytterman.com/
```

### Förväntade resultat:
```
✅ https://ytterman.com/                    → 200 OK
✅ https://ytterman.com/guider/bas-u-guide  → 200 OK
✅ https://ytterman.com/omraden             → 200 OK
✅ http://ytterman.com/                     → 301 → https://ytterman.com/
⏳ www.ytterman.com/*                       → (beror på DNS)
```

---

## 📊 Del 5: Google Search Console - Åtgärder

### Steg 1: Validera att fixar fungerar (vänta 24-48h efter deploy)

#### För "Sida med omdirigering"-problemet:
1. Öppna: [Search Console → Sidor](https://search.google.com/search-console)
2. Hitta "Sida med omdirigering" under "Varför sidor inte indexeras"
3. Klicka på URL:erna:
   - `http://ytterman.com/`
   - `https://www.ytterman.com/`
   - `http://www.ytterman.com/`
4. För varje URL:
   - Klicka **"INSPEKTERA URL"**
   - Klicka **"TESTA LIVE-URL"**
   - Verifiera att Google ser redirect → https://ytterman.com/
   - Klicka **"BEGÄR INDEXERING"**

#### För "404"-problemet:
1. Hitta under "Hittades inte (404)":
   - `https://ytterman.com/guider/bas-u-guide`
   - `https://ytterman.com/omraden`
2. För varje URL:
   - Klicka **"INSPEKTERA URL"**
   - Klicka **"TESTA LIVE-URL"**
   - Verifiera att Google nu får **200 OK** (inte 404!)
   - Klicka **"BEGÄR INDEXERING"**

### Steg 2: Validera fixen globalt
1. Gå till **Sidor** → **Varför sidor inte indexeras**
2. Klicka på **"Validera fix"** för:
   - "Sida med omdirigering"
   - "Hittades inte (404)"
3. Google kommer testa alla berörda URL:er (tar 1-2 veckor)

### Steg 3: Övervaka resultat
- Kolla **Search Console** varje vecka
- Under **"Sidor"** ska du se:
  - ✅ Minskning av "Sida med omdirigering"
  - ✅ Minskning av "Hittades inte (404)"
  - ✅ Ökning av indexerade sidor

---

## 📝 Checklista för Genomförande

### Fas 1: Deployment (Dag 1)
- [ ] Commita och pusha alla kod-ändringar
- [ ] Verifiera GitHub Actions deploy körs framgångsrikt
- [ ] Kör `.\scripts\test-redirects.ps1` lokalt
- [ ] Testa manuellt: `curl -I https://ytterman.com/guider/bas-u-guide`
- [ ] Testa manuellt: `curl -I https://ytterman.com/omraden`

### Fas 2: DNS-konfiguration (Dag 1-2)
- [ ] Logga in hos DNS-leverantör
- [ ] Konfigurera CNAME: www → ytterman.com (eller ta bort www helt)
- [ ] Vänta 10-60 minuter för DNS-propagering
- [ ] Verifiera: `nslookup www.ytterman.com`
- [ ] Testa: `curl -I https://www.ytterman.com/`

### Fas 3: GitHub Pages (Dag 1)
- [ ] Gå till GitHub Settings → Pages
- [ ] Aktivera "Enforce HTTPS"
- [ ] Verifiera Custom domain: ytterman.com
- [ ] Spara och vänta 1 minut

### Fas 4: Search Console (Dag 2-3, efter DNS propagerat)
- [ ] Inspektera URL: https://ytterman.com/guider/bas-u-guide
- [ ] Testa live-URL (verifiera 200 OK)
- [ ] Begär indexering
- [ ] Inspektera URL: https://ytterman.com/omraden
- [ ] Testa live-URL (verifiera 200 OK)
- [ ] Begär indexering
- [ ] Validera fix för "Sida med omdirigering"
- [ ] Validera fix för "Hittades inte (404)"

### Fas 5: Uppföljning (Vecka 1-2)
- [ ] Dag 7: Kolla Search Console → Sidor
- [ ] Dag 14: Verifiera att "404" och "redirect" minskade
- [ ] Dag 14: Verifiera att indexerade sidor ökade
- [ ] Dag 14: Kör `.\scripts\test-redirects.ps1` igen

---

## 🆘 Felsökning

### Problem: "www.ytterman.com ger fortfarande fel"
**Lösning:** 
- Vänta längre (DNS kan ta upp till 48h)
- Kolla DNS: `nslookup www.ytterman.com`
- Verifiera CNAME pekar till rätt destination

### Problem: "/guider/bas-u-guide ger fortfarande 404"
**Lösning:**
1. Öppna: https://ytterman.com/guider/bas-u-guide i inkognito-läge
2. Öppna DevTools (F12) → Network tab
3. Ladda om sidan
4. Kontrollera:
   - Första request: Borde vara 404 (GitHub ser ingen HTML-fil)
   - Andra request: 404.html laddas
   - JavaScript redirect sker till /
   - React Router renderar rätt komponent

Om detta INTE händer:
- Kolla att dist/404.html finns efter build
- Kolla att GitHub Pages deployment inkluderar 404.html

### Problem: "Google ser fortfarande 404"
**Lösning:**
- Google's crawler kanske inte kör JavaScript omedelbart
- Vänta 1-2 veckor och begär re-indexering igen
- Alternativ: Implementera SSG/SSR (Next.js, Astro, etc.) för pre-rendering

### Problem: "Sida med omdirigering" försvinner inte
**Lösning:**  
- Detta är FÖRVÄNTAT för www-varianter tills DNS är fixad
- För http-varianter: Verifiera "Enforce HTTPS" är aktiverat
- Begär indexering av canonical URL (https://ytterman.com/)

---

## 🎯 Förväntade Resultat (Efter 2 veckor)

### ✅ Vad du ska se i Search Console:
1. **Indexerade sidor:** Ökar med +2 (bas-u-guide + omraden)
2. **Hittades inte (404):** Minskar till 0 för dessa 2 URLs
3. **Sida med omdirigering:** 
   - http://ytterman.com/ → Borde försvinna (GitHub redirectar)
   - www-varianter → Borde försvinna (efter DNS-fix)
4. **Click-through rate:** Kan öka när fler sidor indexeras

### ✅ Vad du ska se på sajten:
- Alla URL:er fungerar utan 404
- HTTPS överallt
- www redirectar till non-www (efter DNS-fix)
- Snabb load tid (SPA + optimerad 404.html)

---

## 📚 Ytterligare Resurser

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Google Search Console Help](https://support.google.com/webmasters)
- [React Router Documentation](https://reactrouter.com/)
- [DNS Configuration Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## ❓ Kontakt

Om problem kvarstår efter att ha följt denna guide:
1. Kör `.\scripts\test-redirects.ps1` och spara output
2. Kolla GitHub Actions logs: https://github.com/Thr4sh3D/Ytterman.com/actions
3. Kontrollera browser DevTools → Network när du besöker problem-URL:er
4. Dokumentera exakt vad som händer och fråga i GitHub Issues

---

**Lycka till! 🚀**
