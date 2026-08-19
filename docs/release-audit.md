# Release-audit – steg 9

Datum: 2026-08-19  
Gren: `agent/release-audit-step9`  
Produktionsrelease: **inte genomförd**

## Sammanfattning

Steg 9 gör webbplatsens befintliga innehåll lättare, mer robust och enklare att kontrollera före release. Arbetet ändrar inte erbjudandena eller den beslutade beskrivningen av energideklaration: Ytterman erbjuder och samordnar tjänsten, medan deklarationen utförs av en certifierad energiexpert via behörig partner.

Den allvarligaste upptäckten var att den publika Open Graph-bilden visade budskapet ”Build full-stack apps in seconds” och alltså inte representerade Ytterman. Den är ersatt med en egen Ytterman-bild.

## Genomförda förbättringar

- Ersatt OG-bilden med en varumärkesriktig bild i 1200 × 630 px.
- Minskat OG-bilden från 1 161 730 till 27 822 byte, en minskning med 97,6 procent.
- Lagt till bildtyp, dimensioner och alt-text för Open Graph och Twitter Cards.
- Tagit bort den externa, render-blockerande Google Fonts-laddningen och använder en systemfont-stack.
- Lagt bilder under första vyn på lazy loading och asynkron avkodning.
- Säkerställt att bilder inte döljs med `opacity: 0` när JavaScript är avstängt.
- Delat fler sidor i separata route-chunks.
- Tagit bort den oanvända React Query-providern, dess initiala vendor-chunk och ett stort antal oanvända komponenter och paket.
- Tagit bort klientkod som inte längre ingick i den aktiva applikationen.
- Förbättrat färgkontrast för primärfärg och gradienter.
- Lagt till global, tydlig fokusmarkering och stöd för `prefers-reduced-motion`.
- Lagt till global hoppa-till-innehåll-länk.
- Förbättrat mobilmenyns namn, status och koppling till navigationen.
- Förbättrat FAQ-kontrollernas ARIA-koppling.
- Lagt till fokusfälla, Escape-hantering och återställning av fokus i cookie-dialogen.
- Kopplat formulärmeddelanden till den toast-komponent som faktiskt är monterad.
- Förstärkt kontrollen som stoppar Google-, analys- och marknadsföringsresurser före samtycke.

## Automatisk releasegrind

Den nya GitHub Actions-kontrollen `.github/workflows/quality.yml` kör vid pull request och kan även startas manuellt. Den gör ingen deployment.

`npm run release:check` kör:

1. TypeScript-kontroll.
2. ESLint.
3. Produktionens klient- och SSR-build.
4. Alla tidigare kontroller av affärsfakta, P0-formuleringar, statisk HTML, SEO/entity, offertflöde och lokal SEO.
5. Den nya releasekontrollen.
6. Samtyckes- och analyskontrollen.

Den nya releasekontrollen stoppar releasen om den hittar:

- saknad byggd route eller avvikelse mellan sitemap och ruttregister;
- annat än exakt en H1 och ett `main` per viktig route;
- otillräckligt statiskt huvudinnehåll utan JavaScript;
- fel canonical-URL;
- bild utan alt-text eller utan lazy loading/uttrycklig prioritet;
- knapp eller formulärfält utan tillgängligt namn;
- ogiltig JSON-LD;
- internt länk- eller ankarmål som saknas;
- inkonsekvent `mailto:` eller ogiltig `tel:`;
- Google-, analys-, marknadsförings- eller Google Fonts-resurs före samtycke;
- OG-bild med fel dimension eller för stor fil;
- CSS, JavaScript-chunk eller initial gzip-last över fastställd budget;
- skillnad mellan deklarerade paket i `package.json` och rotposten i `package-lock.json`.

## Mätvärden

| Mätpunkt | Före steg 9 | Efter ändring |
|---|---:|---:|
| Open Graph-bild | 1 161 730 byte, 3402 × 1646 | 27 822 byte, 1200 × 630 |
| CSS | 116,15 kB / 17,96 kB gzip | 74,49 kB / 11,82 kB gzip |
| Största JavaScript-chunk | minst 216,26 kB för tidigare entry | 199,86 kB |
| Initiala resurser | cirka 154,06 kB gzip | 126,99 kB gzip |
| För-renderade routes | 49 + 7 redirects + 404 | Ska vara oförändrat; verifieras i PR |
| Interna referenser | 1 912, inga saknade vid baslinjen | Räknas och verifieras i PR |

Värdena efter ändring kommer från pull requestens `Release quality`-logg. Jämfört med baslinjen minskade CSS med cirka 35,9 procent rått och 34,2 procent gzip. Den initiala gzip-lasten minskade med cirka 17,6 procent och ligger under budgeten 150 kB.

## Lighthouse

En representativ mobilmätning genomfördes 2026-08-19 mot produktion med PageSpeed Insights, Lighthouse 13.4.1, emulerad Moto G Power och långsam 4G. Samtliga kontrollerade routes klarade releasegränsen minst 90 för SEO och tillgänglighet.

| Route | Prestanda | Tillgänglighet | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Startsida | 97 | 96 | 100 | 100 |
| /kontrollansvarig/ | 97 | 98 | 100 | 100 |
| /kontakt/ | 97 | 100 | 100 | 100 |
| /kontrollansvarig-sundsvall/ | 100 | 100 | 100 | 100 |
| /guider/nar-kravs-kontrollansvarig/ | 100 | 100 | 100 | 100 |

Startsidan och KA-sidan fick avdrag för rubrikhopp. Startsidan fick även avdrag för kontrast i paket- och certifikatdelarna. Slutrevisionen rättar dessa element utan att ändra sidornas synliga struktur och lägger till en automatisk releasekontroll som stoppar nya hopp i rubrikhierarkin. En ny livekörning görs efter merge för att verifiera det publicerade eftervärdet.

## Kvarvarande manuella kontroller

- Bekräfta i riktig webbläsare att inga Google-anrop sker före samtycke och att anrop startar först efter rätt val.
- Bekräfta att återkallat samtycke stoppar nya anrop och rensar de avsedda Google-cookies.
- Skicka en verklig testförfrågan via preview/live endpoint och kontrollera mottagning och felsvar.
- Testa tangentbord, fokusordning, mobilmeny och cookie-dialog i mobil Safari och Chrome.
- Gör en snabb skärmläsarkontroll av startsida och kontaktflöde.
- Kontrollera externa länkar och den externt hostade Bygglov.se-badgen.
- Validera representativ JSON-LD i Googles Rich Results Test.

## Rollback

Ingen automatisk produktionsrelease ingår i pull requesten. Vid problem efter merge återställs squash-commiten för steg 9 med en vanlig revert. Det återställer kod, paket, workflow och OG-bild i ett sammanhållet steg. GitHub Pages-deployen kan därefter köras från den återställda `main`-grenen.
