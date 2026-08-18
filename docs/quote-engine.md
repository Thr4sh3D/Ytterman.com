# Offertmotor – drift med Netlify Forms

## Arkitektur

Ytterman.com publiceras på GitHub Pages. GitHub Pages kan inte köra serverkod, därför skickar
webbläsaren offertförfrågan till en separat Netlify Function. Ingen e-posttjänst, databasnyckel
eller annan hemlighet finns i klientens JavaScript.

Flödet är:

1. `ContactForm` samlar kvalificerande projekt- och kontaktuppgifter i två korta steg.
2. Webbläsaren skickar uppgifterna till `VITE_QUOTE_REQUEST_ENDPOINT`.
3. `netlify/functions/quote-request.ts` validerar payload, origin, honeypot, formulärtid,
   storleksgräns och rate limit.
4. Funktionen bestämmer leveransmodell, granskningskö och eventuell partnerkontroll från
   serverns egen konfiguration.
5. Funktionen lämnar den verifierade förfrågan till Netlify Forms som lagrar leadet och
   kan skicka en e-postavisering.

Det gamla direkta EmailJS-anropet från webbläsaren är borttaget. n8n behövs inte.

## Konfiguration

GitHub repository variable:

```text
VITE_QUOTE_REQUEST_ENDPOINT=https://ytterman-offert.netlify.app/api/quote-request
```

Servervariabler i Netlify:

| Variabel | Innehåll |
|---|---|
| `QUOTE_RATE_LIMIT_SALT` | Slumpad hemlig sträng för hashning av rate-limit-nycklar |
| `QUOTE_ALLOWED_ORIGINS` | Valfri kommaseparerad tilläggslista; `https://ytterman.com` ingår alltid |
| `QUOTE_FORM_DELIVERY_URL` | Valfri överstyrning av formulärmottagare; annars används Netlifys inbyggda `URL` |

Variabler som ska vara hemliga får inte börja med `VITE_`, eftersom Vite då bygger in dem i
publikt JavaScript. Efter ändrade servervariabler måste projektet driftsättas på nytt.

## Netlify Forms-schema

Det statiska formuläret i `index.html` används bara för Netlifys byggtidsdetektering. Kunden ser
och använder React-formuläret. Serverfunktionen lämnar följande fält till formuläret
`quote-request`:

| Grupp | Fält |
|---|---|
| Identitet | `leadId`, `receivedAt`, `source` |
| Tjänst | `service`, `serviceLabel`, `deliveryModel` |
| Projekt | `projectType`, `municipality`, `size`, `permitStatus`, `desiredStart` |
| Kontakt | `name`, `email`, `phone`, `message` |
| Routing | `routingQueue`, `routingStatus`, `routingOwner` |
| Partnerkontroll | `requiresPartnerVerification`, `partnerVerificationStatus` |
| Attribution | `landingPage`, `utmSource`, `utmMedium`, `utmCampaign`, `utmContent`, `utmTerm` |

## Routingregler

- Normala förfrågningar får `routingQueue = quote-review` och Tobias som ägare.
- Energideklaration får `routingQueue = energy-partner-verification` och
  `partnerVerificationStatus = required`.
- En energideklaration får inte skickas vidare till utförare förrän det manuellt har
  kontrollerats att partnerns energiexpert har giltig certifiering för uppdraget.
- `leadId` används som unik referens vid uppföljning och eventuell framtida integration.
- Bekräftelsen till kunden lovar inte en viss svarstid eller att uppdraget är accepterat.
- UTM och landningssida sparas på leadet men skickas inte till Google tillsammans med
  kontaktuppgifter.

## Avisering och daglig hantering

I Netlify väljs **Project configuration → Notifications → Emails and webhooks → Form submission
notifications**. Lägg en e-postavisering för formuläret `quote-request` till
`tobias@ytterman.com`.

Alla verifierade förfrågningar finns även under **Forms** i projektet `ytterman-offert`. E-post är
avisering; Netlify Forms är primär inkorg tills leadet har bedömts och flyttats till ordinarie
kundhantering.

## Releasekontroll

1. Kör `npm run typecheck`, `npm run lint`, `npm run test:quote` och `npm run build`.
2. Kontrollera att Netlify-driften visar formuläret `quote-request`.
3. Testa att tomt formulär, fel origin, honeypot och fler än fem försök per 15 minuter stoppas.
4. Skicka ett KA-testlead och kontrollera `routingQueue = quote-review`.
5. Skicka ett energideklarationslead och kontrollera `routingQueue = energy-partner-verification`
   samt `partnerVerificationStatus = required`.
6. Kontrollera att båda leaden syns i Netlify Forms och att e-postaviseringen kommer fram.
7. Kontrollera att inga kontaktuppgifter förekommer i Google `dataLayer`.
