# För-rendering för sök och AI

Produktionsbygget skapar färdig HTML för alla statiska routes i `src/App.tsx`. Det innebär att sökmotorer och AI-crawlers får sidans H1, brödtext, länkar, metadata och JSON-LD utan att först behöva köra JavaScript.

## Byggflöde

`npm run build` gör följande:

1. genererar sitemap,
2. bygger den vanliga Vite-klienten,
3. bygger server-entryn `src/entry-server.tsx`,
4. för-renderar statiska React Router-routes till `dist/<route>/index.html`,
5. kör affärsfakta- och prerenderkontrollerna.

Klienten finns kvar i varje HTML-fil och hydrerar det befintliga innehållet, så formulär, navigation och övrig interaktivitet fungerar som tidigare.

## GitHub Pages och dynamiska routes

`dist/404.html` innehåller en för-renderad, `noindex`-märkt felsida. Den har också attributet `data-spa-fallback="true"`. GitHub Pages använder filen för okända sökvägar och behåller den begärda URL:en. Klienten monterar då från scratch så dynamiska routes som `/blogg/:slug` fortfarande kan hanteras av React Router utan hydreringskonflikt.

Dynamiska blogginlägg är ännu inte statiskt för-renderade och kan därför fortfarande få HTTP 404 vid en direktförfrågan på GitHub Pages. Det är en begränsning i hostingen, inte i React-routingen. Om blogginläggen ska indexeras stabilt bör de genereras till egna HTML-filer vid build eller sajten flyttas till en host med redirects/SSR.

## Kontroller

`npm run test:prerender` verifierar för varje statisk route:

- verkligt innehåll i `#root`, inklusive `<main>` och H1,
- exakt en title och canonical,
- description och robots-direktiv,
- att Suspense-laddaren inte är det enda innehållet,
- att det borttagna publika telefonnumret inte finns i HTML.

Kontrollen ingår i produktionsbygget och stoppar deploy om någon av punkterna fallerar.
