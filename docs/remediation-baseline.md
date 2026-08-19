# Ytterman.com – teknisk och innehållsmässig åtgärdsbaslinje

**Datum:** 2026-08-13  
**Granskad bas:** `main` vid `f5c04f6ea3da65245e953216d28dfa39ba524adc`  
**Omfattning:** inventering och prioritering; inga produktionsändringar ingår i detta steg

## 1. Sammanfattning

Ytterman.com är en React/Vite-applikation som byggs och publiceras via Netlify. Webbplatsen har en fungerande produktionsbuild, många relevanta tjänste- och ortssidor samt route-specifik metadata i genererade HTML-skal. Huvudinnehållet finns däremot inte i byggd HTML utan skapas först när klient-JavaScript körs. Det gör webbplatsen mer beroende av renderande sökrobotar och försämrar läsbarheten för enklare AI-crawlers.

De mest brådskande riskerna är inte designproblem utan motsägande fakta, tjänstelöften, certifieringsformuleringar, prissättning, mätning utan monterad samtyckesdialog och avsaknad av en gemensam källa för företagsdata. Samma uppgifter förekommer i många komponenter, metadataobjekt och byggskript; en enkel textsökning ger 517 relevanta träffar i 76 filer.

Rekommenderad ordning:

1. P0: centralisera och korrigera verifierade fakta, tjänstelöften, priser, kontaktuppgifter och partnerleverans.
2. P0: stoppa analys- och annonsskript före samtycke och ta bort personuppgifter från mätdata.
3. P1: införa prerendering/SSG med verkligt sidinnehåll i varje indexerbar HTML-fil.
4. P1: samla routes, metadata, sitemap och schema i gemensamma datakällor.
5. P1: bygga ett säkert och mätbart offertflöde.
6. P2: förbättra prestanda, innehållskvalitet, lokal SEO och CI.

## 2. Verifierade affärsregler

Dessa uppgifter är styrande för kommande implementation och får inte ersättas med antaganden:

| Område | Verifierad regel |
|---|---|
| Kontrollansvarig | Tobias Ytterman är certifierad kontrollansvarig enligt PBL, behörighet N för projekt av normal art. |
| Certifikat | Kiwa Certification AB, certifikat `KA11926`, giltigt till och med `2030-07-02`. |
| BAS-P/BAS-U | Tobias erbjuder uppdrag som BAS-P och BAS-U. Webbplatsen ska beskriva utbildning, kompetens och erfarenhet, inte kalla rollen myndighetscertifierad. |
| Regelverk BAS | AFS 2023:3 är aktuell huvudreferens. |
| Slutbesked | Kontrollansvarig lämnar bland annat eget utlåtande och underlag. Byggnadsnämnden beslutar om slutbesked. |
| Slutbesiktning | KA-uppdraget får inte generellt beskrivas som att KA utför entreprenadrättslig slutbesiktning eller verifierar entreprenadens kontraktsenlighet. |
| Energideklaration | Ytterman erbjuder tjänsten. Själva energideklarationen utförs genom behöriga partners som är certifierade energiexperter. Tobias/Ytterman får beskrivas som kundens kontakt och samordnare, men inte som certifierad energiexpert. |
| Erfarenhet | Uppgiften om mer än 20 års erfarenhet är ägarverifierad och får användas konsekvent. |
| SBR | Tobias är ansluten till SBR men ännu inte medlem. Endast formuleringen ”ansluten till SBR” får användas. |
| Prisstruktur 2026 | Tillbyggnad: Bas 29 500 kr / Plus 34 500 kr. Ombyggnation: Bas 32 500 kr / Plus 38 500 kr. Nyproduktion fritidshus: Bas 34 500 kr / Plus 39 500 kr. KA + BAS-P/U: från cirka 46 500–52 500 kr. Beloppen är inklusive moms. |
| Kompletteringar | En normal kompletteringsvända ingår. Upprepade kompletteringar på grund av ändringar eller bristande underlag debiteras separat. |

Officiella referenser:

- Boverket, kontrollansvariga: <https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollansvariga/>
- Boverket, slutbesked: <https://www.boverket.se/sv/pbl-kunskapsbanken/lov--byggande/byggprocessen/slutbesked>
- Arbetsmiljöverket, AFS 2023:3: <https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20233/>
- Boverket, certifierad energiexpert: <https://www.boverket.se/sv/energideklaration/hitta-energiexpert>

## 3. Teknisk arkitektur

| Del | Nuläge | Viktiga filer |
|---|---|---|
| Frontend | React 18.3, TypeScript, Vite 5.4 | `src/main.tsx`, `src/App.tsx`, `vite.config.ts` |
| Routing | `BrowserRouter` med 55 route-deklarationer, varav 52 statiska URL:er skrivs till sitemap | `src/App.tsx` |
| UI | Tailwind CSS och Radix/shadcn-komponenter | `src/index.css`, `tailwind.config.ts`, `src/components/ui/` |
| Metadata | React Helmet samt flera överlappande SEO- och schemakomponenter | `AdvancedSEO.tsx`, `SEO.tsx`, `SEOOptimizer.tsx`, `JsonLdSchema.tsx`, `CanonicalUrl.tsx` |
| Hosting | Netlify, publicering från `dist`, SPA-fallback till `/index.html` | `netlify.toml`, `public/_redirects` |
| Serverfunktioner | Netlify Functions finns främst för blogg/webhook; kontaktformuläret använder dem inte | `netlify/functions/`, `functions/` |
| Kontaktformulär | Klientanrop via EmailJS med service-, template- och public key i källkod | `src/components/ContactForm.tsx`, `src/components/Contact.tsx`, `src/lib/emailjs.ts` |
| Analys/annonser | Google Ads-tag laddas direkt i `index.html`; flera delvis duplicerade spårningskomponenter finns | `index.html`, `ConversionTracking.tsx`, `useGoogleAdsTracking.ts`, `GoogleConsentMode.tsx` |
| Sitemap | Regex-utläsning ur `App.tsx`; `lastmod` sätts till byggdatum för alla URL:er | `scripts/generate-sitemap.js` |
| Route-HTML | Skript kopierar HTML-skal och byter metadata men renderar inte React-innehållet | `scripts/create-github-pages-routes.mjs` |

### Driftflöde

`npm run build` utför följande:

1. `vite build`
2. kopierar `dist/index.html` till `dist/404.html`
3. skapar `dist/<route>/index.html` för 52 routes
4. genererar `public/sitemap-static.xml` och `public/sitemap.xml`

Netlify publicerar `dist`. Route-mapparna förbättrar HTTP-status och ger route-specifik title, description och canonical, men samtliga granskade HTML-filer innehåller fortfarande `<div id="root"></div>` utan H1 eller huvudtext.

## 4. Routeinventering

### Huvud- och informationssidor

- `/`
- `/tjanster`
- `/kontakt`
- `/om`
- `/faq`
- `/priser`
- `/omraden`
- `/integritetspolicy`
- `/tack` – finns i build men är exkluderad ur sitemap; bör uttryckligen vara `noindex`

### Tjänster och produkter

- `/kontrollansvarig`
- `/kontrollansvarig-i-fjallen`
- `/bas-p`
- `/bas-u`
- `/energideklaration`
- `/overlatelsebesiktning`
- `/energiberakning-online`
- `/bygglovshandlingar`
- `/produkter`
- `/byggstart-planerare`

### Ortssidor – kontrollansvarig

- `/kontrollansvarig-sundsvall`
- `/kontrollansvarig-harnosand`
- `/kontrollansvarig-timra`
- `/kontrollansvarig-kramfors`
- `/kontrollansvarig-solleftea`

### Ortssidor – överlåtelsebesiktning

- `/overlatelsebesiktning-sundsvall`
- `/overlatelsebesiktning-harnosand`
- `/overlatelsebesiktning-timra`
- `/overlatelsebesiktning-kramfors`
- `/overlatelsebesiktning-solleftea`
- `/overlatelsebesiktning-ornskoldsvik`
- `/overlatelsebesiktning-ange`

### Guider

- `/guider`
- `/guider/kontrollansvarig`
- `/guider/bas`
- `/guider/bygglov`
- `/guider/kvalitetskontroll`
- `/guider/overlatelsebesiktning`
- `/guider/energi`
- `/guider/miljo`
- `/guider/digitala-verktyg`
- `/guider/kontrollansvarig-bygglov`
- `/guider/kontrollansvarig-certifiering`
- `/guider/kontrollansvarig-ansvar`
- `/guider/kontrollansvarig-timpris`
- `/guider/bas-p-guide`
- `/guider/bas-u-guide`
- `/guider/vad-ar-bas`
- `/guider/tekniskt-samrad`
- `/guider/kontrollplan`
- `/guider/slutbesked`
- `/guider/vasternorrland`
- `/guider/bygglovsguide-vanliga-misstag-husbygge`

### Blogg och systemroutes

- `/blogg`
- `/blogg/:slug` – dynamisk och inte med i statisk sitemap
- `*` – 404-route

## 5. Prioriterade fynd

### P0 – fakta, förtroende och regelefterlevnad

| Fynd | Risk | Primära filer | Krav i steg 2 |
|---|---|---|---|
| Ingen central källa för företagsdata, certifikat, priser och tjänsters leveransmodell | Motstridiga uppgifter återkommer efter varje ändring | `index.html`, SEO-komponenter, tjänste-/ortsidor, contentfiler | Skapa typad central konfiguration och använd den i synlig text, metadata och schema. |
| BAS-P/U förekommer som certifiering eller credential | Vilseledande kompetenspåstående | `ServiceHero.tsx`, `Certifications.tsx`, `AdvancedSEO.tsx`, `JsonLdSchema.tsx`, BAS-sidor/guider | Beskriv roll, utbildning, kompetens och erfarenhet; använd inte BAS som certifieringscredential. |
| Behörighet N blandas med ”fullständig behörighet” | Felaktig bild av certifikatets omfattning | `Certifications.tsx`, KA-sidor och schema | Visa Kiwa, KA11926, N, normal art och giltighetstid konsekvent. |
| KA beskrivs som utförare av slutbesiktning och den som ansöker/utfärdar slutbesked | Sammanblandning av PBL-roll och entreprenadrättslig besiktning | `KAProcess.tsx`, KA-guider, tjänste- och prissidor | Beskriv kontroller, närvaro vid besiktningar och eget utlåtande. Byggherren begär och byggnadsnämnden beslutar om slutbesked. |
| Energideklaration framställs som egen certifierad expertleverans | Otydligt vem som har lagstadgad kompetens | `EnergiDeklarationPage.tsx`, `TjansterPage.tsx`, formulär, metadata/schema | Behåll tjänsten aktiv men ange tydligt att deklarationen utförs av certifierad energiexpert hos behörig partner och att Ytterman samordnar leveransen. Partnerns behörighet ska verifieras före uppdrag. |
| Gamla priser och flera prisformat finns parallellt | Felaktiga förväntningar och låg offertkvalitet | `PriserPage.tsx`, `Pricing.tsx`, `PricingPackages.tsx`, `TjansterPage.tsx`, FAQ, ortsdata, guider, schema | Använd 2026 års ägarverifierade paket från en central källa. |
| Löften om svar inom 24 timmar, start inom 1–2 veckor, rapport inom 48 timmar och ”svar inom minuter” | Operativt löfte utan kapacitetskoppling | formulär, metadata, tjänste- och ortssidor | Ta bort eller gör löften konfigurerbara och publicera bara sådant som kan hållas. |
| Digitala produkter lovar köp utan fungerande leverans | Vilseledande köpresa | `ProdukterPage.tsx`, `ByggstartPlanerare.tsx` | Visa intresse för opublicerade egna produkter. Energiberäkning online är däremot en aktiv extern partnertjänst och ska länkas med tydlig provisionsupplysning. |
| Google Ads-script laddas innan aktivt samtycke; samtyckeskomponenten är inte monterad | Cookie- och integritetsrisk | `index.html`, `GoogleConsentMode.tsx`, `ConversionTracking.tsx` | Ladda valfria script först efter aktivt val; ge likvärdiga acceptera/avvisa/ändra-alternativ. |
| Formulärspårning skickar besökarens namn till `dataLayer` | Onödig personuppgift i analysflöde | `ContactForm.tsx`, `useGoogleAdsTracking.ts` | Ta bort namn och andra direkt identifierande uppgifter från analys. |
| Företagsidentitet och adress är inte konsekventa | Förtroende-, NAP- och avtalsrisk | `index.html`, integritetspolicy, schema, ortsdata | Ägarverifiera juridiskt namn, organisationsnummer, postadress och verksamhetsadress innan publicering av villkor/schema. |

### P1 – crawlbarhet, SEO och konvertering

| Fynd | Konsekvens | Rekommenderad lösning |
|---|---|---|
| Byggd HTML saknar H1 och huvudtext på alla stickprov | Enklare crawlers och AI-system ser bara metadata och tom root | Prerendera alla indexerbara routes vid build. Behåll Vite/React om möjligt. |
| Router, route-HTML och sitemap har separata manuella/regexbaserade källor | Routes och metadata kan driva isär | Skapa en gemensam typad route registry för router, prerender, sitemap och metadata. |
| Minst sju överlappande SEO-/canonical-/schemaimplementationer | Dubbla eller motstridiga taggar och schema | Konsolidera till en sidmetadatafunktion och ett validerat schema-lager. |
| Sitemap sätter dagens datum som `lastmod` för samtliga URL:er vid varje build | Sökmotorn får en falsk ändringssignal | Använd verkligt innehållsdatum eller utelämna `lastmod`; ändra källskriptet. |
| Bloggen har `changefreq=daily` och synlig text om dagliga artiklar | Löfte och crawlsignal stämmer inte med publicering | Byt till ”Guider och kunskap”; använd realistisk frekvens eller ingen `changefreq`. |
| Kontaktformuläret är kort men ospecificerat och går direkt från webbläsaren till EmailJS | Svag leadkvalificering, begränsat spamskydd och svår automation | Tvåstegsformulär via säker serverfunktion/integrationsproxy med honeypot, rate limit, UTM och strukturerad payload. |
| Flera parallella kontaktformulär/implementationer | Olika beteende och mätning beroende på sida | Behåll en gemensam formulärkomponent och en serverendpoint. |
| Ortssidor innehåller flera specifika påståenden om restid, kommunrelationer, lokalkännedom och fria resor | Doorway-/förtroenderisk om uppgifterna inte kan styrkas | Behåll endast unikt, verifierbart lokalt innehåll och gemensam areaServed-logik. |

### P2 – kvalitet, prestanda och förvaltning

| Fynd | Basvärde/konsekvens | Åtgärd |
|---|---|---|
| Stor total JavaScript-output | 1 391 934 byte rå JS över alla chunks | Fortsätt route-split, ta bort oanvända admin-/bloggverktyg och granska tunga beroenden. |
| Stor initial klientlast | Cirka 522 kB rå JS för entry + preloadade vendors, cirka 156 kB gzip | Minska entry och preloadad UI-kod; verifiera per route efter prerendering. |
| Stor CSS | 124 092 byte rå, cirka 18,7 kB gzip | Mät oanvänd CSS och kontrollera Tailwind content-scan. |
| Stor Open Graph-bild | `public/og-image.png`: 1 161 730 byte | Optimera format, komprimering och dimensioner utan synlig kvalitetsförlust. |
| Saknade tillgångar | `/logo.png`, favicon-PNG:er och apple-touch-icon refereras men saknas | Skapa resurserna eller ta bort felaktiga referenser; lägg broken-asset-test. |
| Inga automatiserade tester i `package.json` | Regressioner upptäcks endast via build/lint | Lägg till innehålls-, route-, schema-, cookie- och formulärtester. |
| Ingen GitHub Actions-workflow på PR #44 | Endast Netlify deploy-preview rapporteras | Lägg CI för install, build, lint, typecheck, statisk HTML och länkcheck. |
| TypeScript-build fallerar | Flera befintliga fel i admin/blogg, integrationsstubs och breadcrumbs | Skapa separat teknisk skuld-PR eller inkludera rättning i releasegrinden före slutrelease. |
| Lint är grön med varningar | 14 varningar | Klassificera och reducera varningar; inför senare `--max-warnings=0`. |
| `*.tsbuildinfo` saknas i `.gitignore` | Lokala typecheck-filer blir otrackade | Lägg till `*.tsbuildinfo`. |

## 6. Metadata, schema och entitet

Nuläget har god ambition men för många parallella källor:

- 18 filer innehåller JSON-LD och totalt finns 24 `application/ld+json`-förekomster.
- `AdvancedSEO`, `SEO`, `SEOOptimizer`, `SEOEnhancements`, `JsonLdSchema`, `CanonicalUrl` och sidunika Helmet-block överlappar.
- `index.html` innehåller en statisk LocalBusiness-entitet med `addressLocality: Härnösand`, medan flera sidor anger Viksjö som bas/kontor.
- `scripts/create-github-pages-routes.mjs` har ytterligare en separat metadata-tabell med gamla årtal, priser och certifieringspåståenden.
- Logo-schema pekar på saknad `/logo.png`.
- Recensions- och medlemskapsuppgifter måste komma från verifierade data och aldrig genereras från exempeldata.

Målarkitektur:

1. `companyConfig` – juridisk och publik identitet, kontakt, NAP, certifikat och branschanslutning.
2. `serviceConfig` – leveransmodell (`tobias`, `partner`, `digital`), publiceringsstatus, priser och behörighetskrav.
3. `routeRegistry` – path, indexstatus, metadata, sitemapstatus, sida och uppdateringsdatum.
4. Schema byggs från dessa källor och valideras som JSON under build/test.

## 7. Mätning och samtycke

Nuläge:

- `index.html` laddar `gtag.js` för `AW-17296101730` direkt.
- `GA_MEASUREMENT_ID` är en kvarlämnad platshållare.
- `ConversionTracking` kan dessutom ladda `AW-XXXXXXXXX`.
- `GoogleConsentMode.tsx` finns men importeras/monteras inte i appen.
- Inställningsvyns analys-toggle har ingen implementerad statehantering.
- Ingen synlig permanent väg finns för att återkalla/ändra samtycke.
- Formulärhändelsen lägger namn i `dataLayer`.

Mål i steg 5:

- Inga valfria Google-anrop före aktivt samtycke.
- Miljövariabler för riktiga publika mät-ID:n och ingen platshållarkonfiguration.
- Händelser utan personuppgifter: form start/skickat/fel, telefon, e-post, bokning, pris och köpstart.
- UTM och landningssida följer leadet, men skickas inte som onödig persondata till annonssystem.
- Samtycke kan accepteras, avvisas, anpassas och återkallas.

## 8. Formulär och integrationer

Nuläget använder EmailJS direkt från klienten. Public key är avsett att vara publik, men service/template kan missbrukas om leverantörens domän- och rate-limit-skydd inte är korrekt konfigurerat. Formuläret har endast namn, e-post, telefon, projekttyp och fritext. Det saknar bland annat kommun, projektstorlek, lovstatus, starttid, honeypot, serverside-validering och UTM-mappning.

Målpayload för senare offertflöde:

```json
{
  "service": "ka|bas-p|bas-u|ka-bas|energideklaration|other",
  "deliveryModel": "ytterman|partner|mixed",
  "projectType": "string",
  "municipality": "string",
  "size": "string",
  "permitStatus": "string",
  "desiredStart": "string",
  "contact": {
    "name": "string",
    "email": "string",
    "phone": "string"
  },
  "message": "string",
  "attribution": {
    "landingPage": "string",
    "utmSource": "string",
    "utmMedium": "string",
    "utmCampaign": "string"
  }
}
```

Energideklarationslead ska sätta `deliveryModel: partner` och skapa ett internt kontrollsteg som bekräftar att tilldelad energiexpert har giltig certifiering.

## 9. Baslinjetester

Körda på `main` vid ovan angiven commit:

| Kontroll | Resultat |
|---|---|
| `npm ci` | Godkänd efter isolerad skrivbar npm-cache i granskningsmiljön |
| `npm run build` | Godkänd, Vite transformerade 2 089 moduler och skapade 52 route-mappar |
| `npm run lint` | Godkänd med 0 fel och 14 varningar |
| `npx tsc -b --pretty false` | Underkänd på befintliga typfel i admin/blogg/integrationsstubs, trackingexempel och breadcrumbs |
| Statisk HTML: `/`, KA, BAS-P, BAS-U, energideklaration och kontakt | Samtliga hade tom `<div id="root"></div>` och 0 H1 i byggd HTML |
| Enhet/integration/e2e | Saknas i repositoryt |
| Lighthouse | Inte kört i denna baslinje; ingen browserbaserad CI finns |

Typecheck-felen är baslinjeskuld och ska inte felaktigt hänföras till kommande innehållsändringar. De ska ändå vara lösta innan slutlig releasegrind gör TypeScript-kontrollen obligatorisk.

## 10. Föreslagen genomförandeordning

### Steg 2 – P0 fakta och förtroende

- Central konfiguration för företag, KA, BAS, SBR, priser, tjänster och leveransmodell.
- Energideklaration kvarstår som aktiv partnertjänst.
- Full textsökning och regressionstest för förbjudna/inkonsekventa formuleringar.
- Rättade saknade resurser, produktlöften och externa korrigeringslista.

### Steg 3 – statisk HTML

- Gemensam route registry.
- Build-time prerendering av alla indexerbara routes.
- Test som kräver H1 och relevant huvudtext i byggd HTML.

### Steg 4 – SEO och AI-entitet

- Ett metadatalager och ett schema-lager.
- Tydlig Person/ProfessionalService/Service-modell.
- Partnerlevererad energideklaration modelleras utan att certifieringen tillskrivs Tobias.

### Steg 5 – samtycke och analys

- Blockera valfria script före samtycke.
- En enda mätimplementation, miljökonfigurerad och utan PII.

### Steg 6 – offertmotor

- Ett kvalificerande formulär, säker endpoint och strukturerad n8n-payload.
- Automatisk routing av energideklaration till verifierad partnerprocess.

### Steg 7–9

- Erbjudanden/B2B, lokalt innehåll och verifierade case.
- Prestanda, tillgänglighet, CI och slutlig releaseaudit.

## 11. Manuella ägarverifieringar före steg 2

- Juridiskt avtalsnamn, organisationsnummer och korrekt post-/verksamhetsadress.
- Om partner för energideklaration får namnges publikt eller endast beskrivas som certifierad partner.
- Hur partnerns giltiga certifiering kontrolleras och dokumenteras per uppdrag.
- Vilka svarstids- och leveranslöften som faktiskt kan hållas.
- Exakt geografiskt område och regler för resekostnader.
- Vilka digitala produkter som faktiskt är färdiga för betalning och automatisk leverans.
- Vilka recensioner och case som är verifierade och får publiceras.
- Att Google Business Profile, Bygglov.se och andra externa profiler använder samma NAP och certifieringsformuleringar.

---

Denna fil är den tekniska baslinjen för efterföljande åtgärds-PR:er. Varje sådan PR ska hänvisa till berörd P0/P1/P2-punkt, ha avgränsad diff och redovisa build, lint, tester samt kvarvarande manuella kontroller.
