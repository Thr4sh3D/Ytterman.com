import React from 'react';
import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';
import { CheckCircle, AlertTriangle, FileText, Search, Terminal, Code, Shield, Server, Globe, RefreshCw } from 'lucide-react';

const SeoFelsokningGuide = () => {
  return (
    <GuideLayout
      title="Felsök indexeringsproblem i Google Search Console"
      description="Konkret felsökningsplan för när Google Search Console visar att validering misslyckats. Checklista, curl-kommandon och vanliga felkonfigurationer."
      category="Teknisk SEO"
      readTime="15 min"
      seoTitle="Felsök Google Search Console Validering - Teknisk SEO Guide | Ytterman"
      seoDescription="Komplett felsökningsguide för misslyckad validering i Google Search Console. Prioriterad checklista, curl-kommandon, HTML-exempel och vanliga felkonfigurationer i WordPress, Cloudflare, Nginx och Apache."
      keywords="Google Search Console, indexering, validering misslyckats, teknisk SEO, canonical, robots.txt, sitemap, felsökning"
      canonicalPath="/guider/seo-felsokning"
    >
      <div className="prose prose-stone max-w-none">

        {/* ─── Sektion 1: Vanliga orsaker ─── */}
        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          Varför misslyckas valideringen?
        </h2>

        <p className="text-lg text-stone-700 mb-6">
          När Google Search Console visar <strong>"Valideringen misslyckades"</strong> efter att du försökt
          åtgärda indexeringsproblem (till exempel för URL:er som{' '}
          <code className="bg-stone-100 px-1 py-0.5 rounded text-sm">https://ytterman.com/energideklaration</code>{' '}
          eller{' '}
          <code className="bg-stone-100 px-1 py-0.5 rounded text-sm">https://ytterman.com/guider/bygglov</code>)
          beror det nästan alltid på att Google fortfarande ser ett tekniskt hinder.
          Nedan listar vi de vanligaste orsakerna, ordnade efter hur ofta de förekommer.
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-semibold text-red-800 mb-1">1. noindex-tagg eller X-Robots-Tag-header</h3>
            <p className="text-red-700 text-sm">
              En <code className="bg-red-100 px-1 rounded">&lt;meta name="robots" content="noindex"&gt;</code> i HTML
              eller en <code className="bg-red-100 px-1 rounded">X-Robots-Tag: noindex</code>-header i serversvaret
              talar om för Google att sidan inte ska indexeras.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-semibold text-red-800 mb-1">2. Canonical pekar på annan URL</h3>
            <p className="text-red-700 text-sm">
              Om <code className="bg-red-100 px-1 rounded">&lt;link rel="canonical"&gt;</code> pekar
              på en annan sida (till exempel utan trailing slash, eller till www-variant) väljer Google den URL:en i stället.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-semibold text-red-800 mb-1">3. Blockerad av robots.txt</h3>
            <p className="text-red-700 text-sm">
              Om <code className="bg-red-100 px-1 rounded">Disallow: /energideklaration</code> finns i robots.txt
              kan Google inte crawla sidan och kan inte validera.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-semibold text-red-800 mb-1">4. HTTP-statuskod inte 200</h3>
            <p className="text-red-700 text-sm">
              301/302-redirect, 404, 410, 500 eller 503 gör att Google inte anser sidan som giltig.
              Speciellt vanligt med SPA-sajter (React, Vue) som serverar 404.html med status 200.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-semibold text-red-800 mb-1">5. Redirect-kedjor eller loopar</h3>
            <p className="text-red-700 text-sm">
              Flera hopp (till exempel <code className="bg-red-100 px-1 rounded">http → https → www → icke-www → trailing slash</code>)
              gör att Google ger upp. Idealt: max 1 redirect.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-semibold text-red-800 mb-1">6. Saknas i sitemap.xml</h3>
            <p className="text-red-700 text-sm">
              Om URL:en inte finns i sitemapen, eller sitemapen har syntaxfel,
              prioriterar Google ner crawlning av sidan.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-semibold text-red-800 mb-1">7. Soft 404 (tomt eller tunt innehåll)</h3>
            <p className="text-red-700 text-sm">
              Google anser att sidan saknar reellt innehåll och markerar den som "Soft 404".
              Vanligt med React/SPA om JavaScript inte renderar korrekt för Googlebot.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h3 className="font-semibold text-red-800 mb-1">8. Servern svarar för långsamt</h3>
            <p className="text-red-700 text-sm">
              Om servern tar mer än 5 sekunder markerar Google det som crawl-fel.
              CDN-konfiguration, cachehantering eller tunga JavaScript-buntar kan orsaka detta.
            </p>
          </div>
        </div>

        {/* ─── Sektion 2: Prioriterad checklista ─── */}
        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <CheckCircle className="w-6 h-6 text-green-600" />
          Prioriterad checklista
        </h2>

        <p className="mb-4 text-stone-700">
          Gå igenom punkterna i ordning. De flesta valideringsfel beror på de tre första punkterna.
        </p>

        <div className="bg-white border border-stone-200 rounded-lg overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead className="bg-stone-50">
              <tr>
                <th className="text-left p-3 font-semibold text-stone-700">#</th>
                <th className="text-left p-3 font-semibold text-stone-700">Kontrollpunkt</th>
                <th className="text-left p-3 font-semibold text-stone-700">Vad du letar efter</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="p-3 font-bold text-green-700">1</td>
                <td className="p-3 font-medium">HTTP-statuskod</td>
                <td className="p-3 text-stone-600">Ska vara exakt <code className="bg-stone-100 px-1 rounded">200 OK</code></td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-green-700">2</td>
                <td className="p-3 font-medium">robots-metatag & X-Robots-Tag</td>
                <td className="p-3 text-stone-600">Får EJ innehålla <code className="bg-stone-100 px-1 rounded">noindex</code></td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-green-700">3</td>
                <td className="p-3 font-medium">Canonical URL</td>
                <td className="p-3 text-stone-600">Ska peka på sig själv (self-referencing), inklusive trailing slash</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-green-700">4</td>
                <td className="p-3 font-medium">robots.txt</td>
                <td className="p-3 text-stone-600">URL:en får EJ vara blockerad av Disallow</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-green-700">5</td>
                <td className="p-3 font-medium">Redirect-kedja</td>
                <td className="p-3 text-stone-600">Max 1 redirect; inga loopar</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-green-700">6</td>
                <td className="p-3 font-medium">sitemap.xml</td>
                <td className="p-3 text-stone-600">URL:en ska finnas med (exakt samma format, inklusive trailing slash)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-green-700">7</td>
                <td className="p-3 font-medium">Sidans innehåll (Soft 404)</td>
                <td className="p-3 text-stone-600">Unikt, relevant innehåll som Googlebot kan rendera</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-green-700">8</td>
                <td className="p-3 font-medium">Laddningstid</td>
                <td className="p-3 text-stone-600">Servern ska svara på under 3 sekunder</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ─── Sektion 3: curl-kommandon ─── */}
        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Terminal className="w-6 h-6 text-purple-600" />
          Färdiga curl-kommandon för felsökning
        </h2>

        <p className="mb-4 text-stone-700">
          Kör dessa kommandon i terminalen. Byt ut URL:en mot den du felsöker.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Kontrollera statuskod, redirect och headers</h3>
            <pre className="bg-stone-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -o /dev/null -s -w "HTTP-status: %{http_code}\\nRedirect: %{redirect_url}\\nTotal tid: %{time_total}s\\n" \\
  -H "User-Agent: Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" \\
  -L "https://ytterman.com/energideklaration"`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Visa alla HTTP-headers (inklusive X-Robots-Tag)</h3>
            <pre className="bg-stone-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -I -L -H "User-Agent: Googlebot" \\
  "https://ytterman.com/energideklaration"`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Kontrollera hela redirect-kedjan</h3>
            <pre className="bg-stone-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -v -L -s -o /dev/null \\
  "https://ytterman.com/energideklaration" 2>&1 | grep -E "< HTTP|< location|< Location"`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Hämta HTML och sök efter noindex och canonical</h3>
            <pre className="bg-stone-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -s -L -H "User-Agent: Googlebot" \\
  "https://ytterman.com/energideklaration" \\
  | grep -i -E 'noindex|canonical|robots'`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Kontrollera robots.txt</h3>
            <pre className="bg-stone-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -s "https://ytterman.com/robots.txt"`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Kontrollera sitemap.xml</h3>
            <pre className="bg-stone-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -s "https://ytterman.com/sitemap.xml" \\
  | grep -i "energideklaration"`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-stone-800 mb-2">Samma kontroller för guider/bygglov</h3>
            <pre className="bg-stone-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`# Repetera för varje URL som misslyckas:
curl -I -L -H "User-Agent: Googlebot" "https://ytterman.com/guider/bygglov"
curl -s -L "https://ytterman.com/guider/bygglov" | grep -i -E 'noindex|canonical|robots'
curl -s "https://ytterman.com/sitemap.xml" | grep -i "bygglov"`}
            </pre>
          </div>
        </div>

        {/* ─── Sektion 4: Korrekt HTML head-exempel ─── */}
        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Code className="w-6 h-6 text-blue-600" />
          Så ska korrekt HTML head se ut
        </h2>

        <p className="mb-4 text-stone-700">
          En sida som ska indexeras korrekt måste ha dessa element i <code className="bg-stone-100 px-1 rounded">&lt;head&gt;</code>.
          Exemplet nedan visar korrekt konfiguration för{' '}
          <code className="bg-stone-100 px-1 rounded">https://ytterman.com/energideklaration/</code>:
        </p>

        <pre className="bg-stone-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-4">
{`<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Titel (unik per sida, max 60 tecken) -->
  <title>Energideklaration i Västernorrland | Ytterman</title>

  <!-- Meta description (unik, max 160 tecken) -->
  <meta name="description" content="Certifierad energiexpert utför energideklaration i Västernorrland. Boka enkelt online." />

  <!-- ✅ Robots: index + follow (eller utelämna helt – standard är index,follow) -->
  <meta name="robots" content="index, follow" />

  <!-- ✅ Canonical: pekar på sig själv MED trailing slash (GitHub Pages) -->
  <link rel="canonical" href="https://ytterman.com/energideklaration/" />

  <!-- Open Graph -->
  <meta property="og:title" content="Energideklaration i Västernorrland | Ytterman" />
  <meta property="og:url" content="https://ytterman.com/energideklaration/" />
  <meta property="og:type" content="website" />

  <!-- Språk -->
  <meta property="og:locale" content="sv_SE" />
  <html lang="sv" />
</head>`}
        </pre>

        <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-amber-800 mb-3">⚠️ Vanliga fel i HTML head</h3>
          <ul className="space-y-2 text-amber-700 text-sm">
            <li>• <strong>Dubbla canonical-taggar</strong> – cacheplugin eller SEO-plugin lägger in en extra canonical</li>
            <li>• <strong>Canonical utan trailing slash</strong> – GitHub Pages gör 301-redirect till trailing slash, så canonical bör matcha</li>
            <li>• <strong>noindex kvar från staging/dev</strong> – kontrollera att meta robots inte är kvar från testmiljön</li>
            <li>• <strong>title-taggen saknas eller är duplicerad</strong> – Helmet/react-helmet-async kan skapa flera title-taggar</li>
            <li>• <strong>JavaScript renderar head för sent</strong> – Googlebot kanske inte väntar på att React renderar alla meta-taggar</li>
          </ul>
        </div>

        {/* ─── Sektion 5: Vanliga felkonfigurationer ─── */}
        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Server className="w-6 h-6 text-orange-600" />
          Vanliga felkonfigurationer per plattform
        </h2>

        <div className="space-y-6 mb-8">

          {/* WordPress */}
          <div className="bg-white border border-stone-200 p-6 rounded-lg">
            <h3 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-500" />
              WordPress
            </h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• <strong>Yoast/RankMath</strong> har "noindex" ikryssad för specifik sida eller hel posttyp</li>
              <li>• <strong>Inställningar → Läs</strong> → "Avråd sökmotorer" är ibockad (lägger till noindex globalt)</li>
              <li>• <strong>Dubbla sitemap</strong>: Yoast + RankMath + manuell sitemap samtidigt</li>
              <li>• <strong>Permalink-ändring</strong> utan redirect från gammal URL ger 404</li>
            </ul>
          </div>

          {/* Cacheplugin */}
          <div className="bg-white border border-stone-200 p-6 rounded-lg">
            <h3 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-green-500" />
              Cacheplugins (WP Super Cache, W3 Total Cache, LiteSpeed)
            </h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• <strong>Gammal cachad version</strong> – sidan serveras med noindex trots att det är borttaget i CMS</li>
              <li>• <strong>HTML-minifiering</strong> tar bort head-taggar om de är felformaterade</li>
              <li>• <strong>Statisk HTML-cache</strong> skapades innan canonical/meta-taggar var korrekta</li>
              <li><strong>Lösning:</strong> Rensa ALL cache, verifiera med <code className="bg-stone-100 px-1 rounded">curl -I</code> att rätt HTML serveras</li>
            </ul>
          </div>

          {/* SEO-plugin */}
          <div className="bg-white border border-stone-200 p-6 rounded-lg">
            <h3 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
              <Search className="w-5 h-5 text-purple-500" />
              SEO-plugins (Yoast, RankMath, All in One SEO)
            </h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• <strong>Canonical override</strong> – pluginet sätter canonical till fel URL (utan trailing slash, http i stället för https)</li>
              <li>• <strong>Redirect-modul</strong> – pluginet har skapat en redirect som du glömt bort</li>
              <li>• <strong>noindex per taxonomi</strong> – kategorier/taggar satta till noindex som även påverkar enskilda inlägg</li>
              <li><strong>Lösning:</strong> Granska varje URL i pluginets avancerade flik</li>
            </ul>
          </div>

          {/* Cloudflare */}
          <div className="bg-white border border-stone-200 p-6 rounded-lg">
            <h3 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-500" />
              Cloudflare
            </h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• <strong>Page Rules</strong> – en regel lägger till redirect eller "forwarding" som skapar kedja</li>
              <li>• <strong>"Always Use HTTPS"</strong> – kan skapa extra redirect-hopp</li>
              <li>• <strong>Cache Everything</strong> – serverar gammal HTML med felaktiga headers</li>
              <li>• <strong>Bot Fight Mode / Under Attack Mode</strong> – blockerar eller fördröjer Googlebot</li>
              <li>• <strong>Transform Rules</strong> – kan modifiera URL eller headers på oväntat sätt</li>
              <li><strong>Lösning:</strong> Purge cache helt, kontrollera Page Rules och Transform Rules, testa med Googlebot User-Agent</li>
            </ul>
          </div>

          {/* Nginx */}
          <div className="bg-white border border-stone-200 p-6 rounded-lg">
            <h3 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-teal-500" />
              Nginx
            </h3>
            <pre className="bg-stone-100 p-3 rounded text-xs overflow-x-auto mb-3">
{`# ❌ FEL – lägger till noindex via header
add_header X-Robots-Tag "noindex, nofollow";

# ❌ FEL – redirect-loop mellan trailing slash och non-trailing
rewrite ^(.+)/$ $1 permanent;

# ❌ FEL – felaktig try_files för SPA returnerar 404 status
location / {
    try_files $uri $uri/ =404;
}

# ✅ RÄTT – SPA (React) config:
location / {
    try_files $uri $uri/ /index.html;
}

# ✅ RÄTT – konsekvent trailing slash:
rewrite ^([^.]*[^/])$ $1/ permanent;`}
            </pre>
            <p className="text-stone-600 text-sm">
              <strong>Lösning:</strong> Kontrollera alla <code className="bg-stone-100 px-1 rounded">add_header</code>,
              <code className="bg-stone-100 px-1 rounded">rewrite</code> och{' '}
              <code className="bg-stone-100 px-1 rounded">try_files</code>-direktiv i samtliga server- och location-block.
            </p>
          </div>

          {/* Apache */}
          <div className="bg-white border border-stone-200 p-6 rounded-lg">
            <h3 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-red-500" />
              Apache (.htaccess)
            </h3>
            <pre className="bg-stone-100 p-3 rounded text-xs overflow-x-auto mb-3">
{`# ❌ FEL – noindex-header satt globalt
Header set X-Robots-Tag "noindex"

# ❌ FEL – redirect-loop mellan www och non-www
RewriteRule ^(.*)$ https://www.example.com/$1 [R=301,L]
# ...och i en annan .htaccess:
RewriteRule ^(.*)$ https://example.com/$1 [R=301,L]

# ✅ RÄTT – SPA fallback:
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /index.html [L]

# ✅ RÄTT – konsekvent trailing slash:
RewriteCond %{REQUEST_URI} !/$
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ /$1/ [R=301,L]`}
            </pre>
            <p className="text-stone-600 text-sm">
              <strong>Lösning:</strong> Kontrollera alla <code className="bg-stone-100 px-1 rounded">.htaccess</code>-filer
              i dokumentroten och undermappar. Flera .htaccess-filer kan överlappa.
            </p>
          </div>

          {/* GitHub Pages */}
          <div className="bg-white border border-stone-200 p-6 rounded-lg">
            <h3 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-gray-700" />
              GitHub Pages (relevant för ytterman.com)
            </h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• <strong>301-redirect till trailing slash</strong> – GitHub Pages lägger automatiskt till trailing slash, canonical och sitemap måste matcha</li>
              <li>• <strong>404.html som fallback</strong> – SPA-routing kräver en 404.html som kopierar index.html, men svarar med statuskod 404</li>
              <li>• <strong>CNAME-fel</strong> – om CNAME-filen saknas eller har fel domän kan det bli redirect-loop</li>
              <li>• <strong>Ingen server-side rendering</strong> – Googlebot ser bara fallback-HTML tills JavaScript exekveras</li>
              <li><strong>Lösning:</strong> Säkerställ att canonical/sitemap har trailing slash, att 404.html finns och att JavaScript renderar korrekt</li>
            </ul>
          </div>
        </div>

        {/* ─── Sektion 6: Så felsöker du URL för URL ─── */}
        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <Search className="w-6 h-6 text-indigo-600" />
          Så felsöker du URL för URL
        </h2>

        <p className="text-stone-700 mb-6">
          Följ detta steg-för-steg-flöde för varje URL som Google rapporterar som icke-validerad.
          Exemplet utgår från <code className="bg-stone-100 px-1 rounded">https://ytterman.com/energideklaration</code>.
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
            <h3 className="font-semibold text-indigo-800 mb-2">Steg 1: Testa i Google Search Console URL-inspektionsverktyg</h3>
            <ol className="list-decimal list-inside text-indigo-700 text-sm space-y-1">
              <li>Gå till Google Search Console → URL-inspektion</li>
              <li>Klistra in den exakta URL:en: <code className="bg-indigo-100 px-1 rounded">https://ytterman.com/energideklaration</code></li>
              <li>Klicka "Testa live-URL" (inte den cachade versionen)</li>
              <li>Se under "Sidan kunde indexeras" – om det står "Nej", se orsaken</li>
              <li>Kontrollera "Identifierad canonical" och "Google-vald canonical" – de MÅSTE matcha</li>
            </ol>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
            <h3 className="font-semibold text-indigo-800 mb-2">Steg 2: Kontrollera HTTP-svaret med curl</h3>
            <pre className="bg-stone-900 text-green-400 p-3 rounded text-xs overflow-x-auto mb-2">
{`curl -I -L -H "User-Agent: Googlebot" "https://ytterman.com/energideklaration"`}
            </pre>
            <p className="text-indigo-700 text-sm">
              <strong>Förväntat resultat:</strong> Statusrad ska visa <code className="bg-indigo-100 px-1 rounded">HTTP/2 200</code>.
              Inga <code className="bg-indigo-100 px-1 rounded">X-Robots-Tag: noindex</code>.
              Om du ser 301/302 – notera vart den redirectar och kontrollera att slutdestinationen är 200.
            </p>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
            <h3 className="font-semibold text-indigo-800 mb-2">Steg 3: Kontrollera HTML-källan</h3>
            <pre className="bg-stone-900 text-green-400 p-3 rounded text-xs overflow-x-auto mb-2">
{`curl -s -L "https://ytterman.com/energideklaration" | grep -i -E 'noindex|canonical|<title'`}
            </pre>
            <p className="text-indigo-700 text-sm">
              <strong>Förväntat resultat:</strong><br />
              – Ingen rad med "noindex"<br />
              – Canonical ska vara: <code className="bg-indigo-100 px-1 rounded">https://ytterman.com/energideklaration/</code><br />
              – Title ska finnas och vara unik
            </p>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
            <h3 className="font-semibold text-indigo-800 mb-2">Steg 4: Kontrollera robots.txt</h3>
            <pre className="bg-stone-900 text-green-400 p-3 rounded text-xs overflow-x-auto mb-2">
{`curl -s "https://ytterman.com/robots.txt"`}
            </pre>
            <p className="text-indigo-700 text-sm">
              <strong>Förväntat resultat:</strong> Inga <code className="bg-indigo-100 px-1 rounded">Disallow</code>-regler
              som blockerar <code className="bg-indigo-100 px-1 rounded">/energideklaration</code> eller
              <code className="bg-indigo-100 px-1 rounded">/guider/</code>.
              Ska bara visa <code className="bg-indigo-100 px-1 rounded">Allow: /</code>.
            </p>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
            <h3 className="font-semibold text-indigo-800 mb-2">Steg 5: Kontrollera sitemap</h3>
            <pre className="bg-stone-900 text-green-400 p-3 rounded text-xs overflow-x-auto mb-2">
{`curl -s "https://ytterman.com/sitemap.xml" | grep "energideklaration"`}
            </pre>
            <p className="text-indigo-700 text-sm">
              <strong>Förväntat resultat:</strong> Exakt URL{' '}
              <code className="bg-indigo-100 px-1 rounded">https://ytterman.com/energideklaration/</code>{' '}
              ska finnas i sitemapen (med trailing slash). Om den saknas eller har fel format, uppdatera sitemapen.
            </p>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
            <h3 className="font-semibold text-indigo-800 mb-2">Steg 6: Testa renderad sida (SPA/JavaScript)</h3>
            <p className="text-indigo-700 text-sm mb-2">
              Om sajten är en SPA (som React) kan Googlebot ha problem att rendera sidan.
              Använd Googles verktyg för att kontrollera:
            </p>
            <ol className="list-decimal list-inside text-indigo-700 text-sm space-y-1">
              <li>I URL-inspektion → klicka "Visa testad sida" → "Skärmdump"</li>
              <li>Kontrollera att sidan visas korrekt med innehåll</li>
              <li>Kontrollera "Mer info" för att se vilka resurser som blockeras</li>
            </ol>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
            <h3 className="font-semibold text-indigo-800 mb-2">Steg 7: Repetera för varje URL</h3>
            <p className="text-indigo-700 text-sm">
              Upprepa steg 1–6 för <code className="bg-indigo-100 px-1 rounded">https://ytterman.com/guider/bygglov</code> och
              alla andra URL:er som visar valideringsfel. Dokumentera resultaten i en tabell:
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-indigo-100">
                  <tr>
                    <th className="p-2 text-left">URL</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">noindex?</th>
                    <th className="p-2 text-left">Canonical OK?</th>
                    <th className="p-2 text-left">I sitemap?</th>
                    <th className="p-2 text-left">Åtgärd</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-100">
                  <tr>
                    <td className="p-2">/energideklaration</td>
                    <td className="p-2">200 ✅</td>
                    <td className="p-2">Nej ✅</td>
                    <td className="p-2">Ja ✅</td>
                    <td className="p-2">Ja ✅</td>
                    <td className="p-2">Ingen</td>
                  </tr>
                  <tr>
                    <td className="p-2">/guider/bygglov</td>
                    <td className="p-2">200 ✅</td>
                    <td className="p-2">Nej ✅</td>
                    <td className="p-2">Ja ✅</td>
                    <td className="p-2">Ja ✅</td>
                    <td className="p-2">Ingen</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ─── Sektion 7: Bevisa för Google ─── */}
        <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-800 mb-6">
          <RefreshCw className="w-6 h-6 text-green-600" />
          Så bevisar du för Google att problemet är löst
        </h2>

        <p className="text-stone-700 mb-6">
          Efter att du åtgärdat problemen måste du aktivt signalera till Google att felet är löst.
          Google validerar inte automatiskt – du måste begära omvalidering.
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <h3 className="font-semibold text-green-800 mb-1">1. Begär omvalidering i Search Console</h3>
            <p className="text-green-700 text-sm">
              Gå till <strong>Indexering → Sidor</strong> → klicka på det specifika problemet →
              klicka <strong>"Validera korrigering"</strong>. Google börjar då kontrollera URL:erna igen.
              Processen tar vanligtvis 2–14 dagar.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <h3 className="font-semibold text-green-800 mb-1">2. Begär indexering per URL</h3>
            <p className="text-green-700 text-sm">
              I URL-inspektionsverktyget: klistra in varje URL och klicka <strong>"Begär indexering"</strong>.
              Detta sätter URL:en i Googles prioriterade kö. Du kan göra detta för max ~10 URL:er per dag.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <h3 className="font-semibold text-green-800 mb-1">3. Skicka in uppdaterad sitemap</h3>
            <p className="text-green-700 text-sm">
              Gå till <strong>Sitemaps</strong> i Search Console. Ta bort och lägg till sitemapen igen:
              <code className="bg-green-100 px-1 rounded ml-1">https://ytterman.com/sitemap.xml</code>.
              Kontrollera att alla URL:er har uppdaterat <code className="bg-green-100 px-1 rounded">&lt;lastmod&gt;</code>-datum.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <h3 className="font-semibold text-green-800 mb-1">4. Rensa CDN/server-cache</h3>
            <p className="text-green-700 text-sm">
              Se till att Cloudflare, Nginx-cache eller andra CDN-lager inte serverar gammal HTML.
              Purge/rensa cache för de berörda URL:erna.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <h3 className="font-semibold text-green-800 mb-1">5. Verifiera med curl INNAN du validerar</h3>
            <p className="text-green-700 text-sm">
              Kör alltid curl-kontrollerna ovan <strong>innan</strong> du trycker "Validera korrigering".
              Om du validerar och Google fortfarande ser felet har du förbrukat ditt valideringsförsök
              och måste vänta tills processen slutförts (kan ta veckor) innan du kan försöka igen.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <h3 className="font-semibold text-green-800 mb-1">6. Övervaka valideringsstatusen</h3>
            <p className="text-green-700 text-sm">
              Efter att du begärt validering, följ statusen i Search Console:
            </p>
            <ul className="text-green-700 text-sm mt-2 space-y-1">
              <li>• <strong>"Startade"</strong> – Google har börjat kontrollera</li>
              <li>• <strong>"Kolla på"</strong> – Google kontrollerar fortfarande URL:er</li>
              <li>• <strong>"Klarad"</strong> – ✅ Alla URL:er godkända</li>
              <li>• <strong>"Misslyckad"</strong> – ❌ Minst en URL hade fortfarande fel – börja om från checklistan</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <h3 className="font-semibold text-green-800 mb-1">7. Tidsramar att förvänta</h3>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• <strong>URL-inspektion live-test:</strong> Resultat på minuter</li>
              <li>• <strong>Begär indexering:</strong> 1–7 dagar</li>
              <li>• <strong>Validera korrigering:</strong> 2–14 dagar (ibland upp till 28 dagar)</li>
              <li>• <strong>Fullständig omcrawlning:</strong> 2–4 veckor beroende på sajtens storlek</li>
            </ul>
          </div>
        </div>

        {/* ─── Sammanfattning ─── */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-blue-800 mb-3">📋 Sammanfattning: Snabb åtgärdslista</h3>
          <ol className="list-decimal list-inside text-blue-700 space-y-2 text-sm">
            <li>Kör <code className="bg-blue-100 px-1 rounded">curl -I -L</code> med Googlebot User-Agent på varje URL</li>
            <li>Verifiera att statuskod är 200, ingen noindex, canonical pekar rätt</li>
            <li>Kontrollera robots.txt – inga Disallow för berörda sökvägar</li>
            <li>Kontrollera sitemap.xml – alla URL:er med trailing slash och korrekt format</li>
            <li>Rensa ALLA cache-lager (CDN, server, plugin)</li>
            <li>Testa live-URL i Search Console och se skärmdump</li>
            <li>Begär indexering per URL i URL-inspektionsverktyget</li>
            <li>Klicka "Validera korrigering" först när curl visar korrekt svar</li>
            <li>Vänta och övervaka – tryck INTE på validera igen under pågående validering</li>
          </ol>
        </div>

        {/* ─── Relaterade guider ─── */}
        <div className="mt-12 pt-8 border-t border-stone-200">
          <h3 className="text-xl font-semibold text-stone-800 mb-4">Relaterade guider</h3>
          <ul className="space-y-2 text-stone-700">
            <li>• <Link to="/guider/bygglov/" className="text-amber-600 hover:text-amber-700 font-medium underline">Bygglovsprocessen steg för steg</Link></li>
            <li>• <Link to="/guider/energi/" className="text-amber-600 hover:text-amber-700 font-medium underline">Energideklaration och energikrav</Link></li>
            <li>• <Link to="/guider/digitala-verktyg/" className="text-amber-600 hover:text-amber-700 font-medium underline">Digitala verktyg för byggprojekt</Link></li>
          </ul>
        </div>
      </div>
    </GuideLayout>
  );
};

export default SeoFelsokningGuide;
