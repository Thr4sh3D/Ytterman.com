# Offertmotor – drift och n8n-kontrakt

## Arkitektur

Ytterman.com publiceras på GitHub Pages. GitHub Pages kan inte köra serverkod, därför skickar
webbläsaren aldrig direkt till n8n och innehåller inga n8n-hemligheter.

Flödet är:

1. `ContactForm` samlar kvalificerande projekt- och kontaktuppgifter i två korta steg.
2. Webbläsaren skickar uppgifterna till `VITE_QUOTE_REQUEST_ENDPOINT`.
3. Serverless-funktionen `netlify/functions/quote-request.ts` validerar payload, origin,
   honeypot, formulärtid, storleksgräns och rate limit.
4. Funktionen bestämmer leveransmodell och kö från serverns egen konfiguration.
5. Funktionen skickar en signerad, strukturerad payload till n8n.

Det gamla direkta EmailJS-anropet från webbläsaren är borttaget.

## Servervariabler

Följande sätts endast där serverless-funktionen körs, exempelvis i Netlify. De får inte läggas
som `VITE_`-variabler eftersom de då blir publika i JavaScript-bundlen.

| Variabel | Innehåll |
|---|---|
| `N8N_QUOTE_WEBHOOK_URL` | Full HTTPS-adress till n8n-webhooken |
| `N8N_QUOTE_WEBHOOK_SECRET` | Slumpad hemlighet som kontrolleras av n8n |
| `QUOTE_RATE_LIMIT_SALT` | Separat slumpad sträng för hashning av rate-limit-nycklar |
| `QUOTE_ALLOWED_ORIGINS` | Valfri kommaseparerad tilläggslista; `https://ytterman.com` ingår alltid |

När proxyfunktionen har en publik URL sätts följande repository variable i GitHub:

```text
VITE_QUOTE_REQUEST_ENDPOINT=https://<serverless-domän>/api/quote-request
```

Starta därefter om workflowen `Deploy to GitHub Pages`. Proxyadressen är publik men innehåller
ingen behörighet. n8n-adress och hemlighet finns bara på serversidan.

## Payload till n8n

```json
{
  "leadId": "uuid",
  "receivedAt": "2026-08-18T15:30:00.000Z",
  "source": "ytterman.com",
  "service": "ka|bas-p|bas-u|ka-bas|energideklaration|overlatelsebesiktning|bygglovshandlingar|other",
  "serviceLabel": "Visningsnamn",
  "deliveryModel": "ytterman|partner|mixed",
  "projectType": "string",
  "municipality": "string",
  "size": "string",
  "permitStatus": "string",
  "desiredStart": "YYYY-MM",
  "contact": {
    "name": "string",
    "email": "string",
    "phone": "string"
  },
  "message": "string",
  "attribution": {
    "landingPage": "string",
    "source": "string",
    "utmSource": "string",
    "utmMedium": "string",
    "utmCampaign": "string",
    "utmContent": "string",
    "utmTerm": "string"
  },
  "routing": {
    "queue": "quote-review|energy-partner-verification|manual-triage",
    "status": "new",
    "owner": "tobias",
    "requiresPartnerVerification": true
  },
  "partnerVerification": {
    "status": "required",
    "assignedPartner": null,
    "certificateVerifiedAt": null,
    "verifiedBy": null
  }
}
```

## n8n-regler

- Webhooken ska kräva samma hemlighet i `Authorization: Bearer …` eller `X-Webhook-Secret`.
- Normala förfrågningar läggs i `quote-review` med Tobias som ägare.
- Energideklaration läggs i `energy-partner-verification` och får inte skickas vidare till en
  utförare förrän partner, certifikatsstatus, kontrolltidpunkt och kontrollant har registrerats.
- `leadId` används som idempotency-nyckel för att undvika dubbla ärenden.
- Bekräftelse till kunden skickas först när leadet har sparats. Bekräftelsen får inte lova en
  viss svarstid eller att uppdraget är accepterat.
- UTM och landningssida sparas på leadet men skickas inte vidare till Google tillsammans med
  kontaktuppgifter.

## Releasekontroll

1. Kör `npm run typecheck`, `npm run lint`, `npm run test:quote` och `npm run build`.
2. Testa att tomt formulär, fel origin, honeypot och fler än fem försök per 15 minuter stoppas.
3. Skicka ett testlead för KA och kontrollera kön `quote-review`.
4. Skicka ett testlead för energideklaration och kontrollera att det stannar i
   `energy-partner-verification` med `partnerVerification.status = required`.
5. Kontrollera att inga kontaktuppgifter förekommer i Google `dataLayer`.
