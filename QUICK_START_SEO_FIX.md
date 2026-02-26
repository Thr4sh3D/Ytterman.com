# 🚀 Quick Start - Deploy SEO Fixes

## Deploy Now (5 minuter)

```powershell
# 1. Commita alla ändringar
git add .
git commit -m "Fix: SEO improvements - 404 handling, DNS config, canonical URLs"
git push origin main

# 2. Vänta på deploy (~2-5 min)
# Följ: https://github.com/Thr4sh3D/Ytterman.com/actions

# 3. Testa direkt efter deploy
.\scripts\test-redirects.ps1
```

## DNS-Fix (VIKTIGT - samme dag)

Logga in hos din DNS-leverantör och lägg till:

```
Type    Name    Value
CNAME   www     thr4sh3d.github.io
```

Eller använd dessa A-records för apex domain:
```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
```

Verifiera efter 30-60 min:
```powershell
nslookup www.ytterman.com
curl -I https://www.ytterman.com/
```

## GitHub Pages Settings

1. Gå till: https://github.com/Thr4sh3D/Ytterman.com/settings/pages
2. ✅ Aktivera "Enforce HTTPS"
3. ✅ Verifiera Custom domain: `ytterman.com`

## Search Console (Dag 2-3)

1. Öppna: https://search.google.com/search-console
2. För varje URL:
   - https://ytterman.com/guider/bas-u-guide
   - https://ytterman.com/omraden
3. Klicka: **Inspektera URL** → **Testa live-URL** → **Begär indexering**
4. Validera fixes:
   - Indexering → Sidor → "Hittades inte (404)" → **Validera fix**
   - Indexering → Sidor → "Sida med omdirigering" → **Validera fix**

## Uppföljning

- **Dag 7:** Kolla Search Console för minskade problem
- **Dag 14:** Kör `.\scripts\test-redirects.ps1` igen
- **Dag 14:** Verifiera indexerade sidor ökade

---

📖 **Detaljerad guide:** [SEO_FIX_IMPLEMENTATION_GUIDE.md](SEO_FIX_IMPLEMENTATION_GUIDE.md)  
📊 **Sammanfattning:** [SEO_FIX_SUMMARY.md](SEO_FIX_SUMMARY.md)
