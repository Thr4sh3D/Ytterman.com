import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import {
  QUOTE_SERVICES,
  QUOTE_SERVICE_IDS,
  getQuoteService,
  quoteServiceRequiresConstructionDetails,
} from '../src/config/quoteRequest.mjs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const packageJson = JSON.parse(read('package.json'));
const contactForm = read('src/components/ContactForm.tsx');
const contactSection = read('src/components/Contact.tsx');
const client = read('src/lib/quoteRequest.ts');
const endpoint = read('netlify/functions/quote-request.ts');
const workflow = read('.github/workflows/deploy.yml');
const indexHtml = read('index.html');

assert.deepEqual(QUOTE_SERVICE_IDS, [
  'ka',
  'bas-p',
  'bas-u',
  'ka-bas',
  'energideklaration',
  'overlatelsebesiktning',
  'bygglovshandlingar',
  'other',
]);

for (const serviceId of QUOTE_SERVICE_IDS) {
  assert.ok(getQuoteService(serviceId), `${serviceId} saknar routingdefinition.`);
}

assert.equal(QUOTE_SERVICES.energideklaration.deliveryModel, 'partner');
assert.equal(QUOTE_SERVICES.energideklaration.queue, 'energy-partner-verification');
assert.equal(QUOTE_SERVICES.energideklaration.requiresPartnerVerification, true);
assert.equal(quoteServiceRequiresConstructionDetails('overlatelsebesiktning'), false);
assert.equal(quoteServiceRequiresConstructionDetails('ka'), true);

assert.equal((contactForm.match(/<form\b/g) || []).length, 1, 'Offertmotorn ska ha exakt ett formulär.');
assert.equal((contactSection.match(/<form\b/g) || []).length, 0, 'Startsidan får inte ha en parallell formulärimplementation.');
assert.ok(contactForm.includes('Steg {step} av 2'), 'Tvåstegsflödet saknas.');
assert.ok(contactForm.includes('quote-website'), 'Honeypot-fältet saknas.');
assert.ok(contactForm.includes('integritetspolicyn'), 'Integritetsbekräftelsen saknas.');
assert.ok(contactForm.includes('quoteServiceRequiresConstructionDetails(formData.service)'), 'Besiktningsflödet ska dölja irrelevanta bygglovsfält.');
assert.ok(client.includes("requiresConstructionDetails ? formData.projectType.trim() : 'not-applicable'"), 'Irrelevanta besiktningsfält ska normaliseras i payloaden.');
assert.ok(!existsSync(new URL('../src/lib/emailjs.ts', import.meta.url)), 'Klientbaserad EmailJS-fil får inte finnas kvar.');
assert.ok(!packageJson.dependencies?.['@emailjs/browser'], 'EmailJS får inte vara ett klientberoende.');

assert.ok(client.includes("VITE_QUOTE_REQUEST_ENDPOINT"), 'Publik proxyendpoint saknas.');
assert.ok(indexHtml.includes('name="quote-request"'), 'Netlify Forms-schemat saknas i statisk HTML.');
assert.ok(indexHtml.includes('data-netlify="true"'), 'Automatisk formulärdetektering saknas.');
assert.ok(indexHtml.includes('name="routingQueue"'), 'Routingfältet saknas i Netlify Forms-schemat.');
assert.ok(!indexHtml.includes('console-capture.js'), 'Externt konsolinfångningsscript får inte laddas.');
assert.ok(!client.includes('N8N_'), 'n8n-konfiguration får inte byggas in i klienten.');

for (const requirement of [
  'QUOTE_FORM_DELIVERY_URL',
  'QUOTE_RATE_LIMIT_SALT',
  "process.env.URL",
  'allowedOrigins',
  'quoteRequestSchema',
  'website',
  'MIN_FORM_TIME_MS',
  'consumeRateLimit',
  'requiresPartnerVerification',
  'quoteServiceRequiresConstructionDetails',
  "data[field] !== 'not-applicable'",
  "'form-name': 'quote-request'",
  'application/x-www-form-urlencoded',
]) {
  assert.ok(endpoint.includes(requirement), `Serverendpointen saknar ${requirement}.`);
}

assert.ok(!endpoint.includes('N8N_'), 'Serverendpointen ska inte kräva n8n.');

assert.ok(workflow.includes('VITE_QUOTE_REQUEST_ENDPOINT: ${{ vars.VITE_QUOTE_REQUEST_ENDPOINT }}'));

const prerenderedContact = new URL('../dist/kontakt/index.html', import.meta.url);
if (existsSync(prerenderedContact)) {
  const html = readFileSync(prerenderedContact, 'utf8');
  assert.ok(html.includes('Offertförfrågan'), 'Prerenderad kontaktsida saknar offertmotorn.');
  assert.ok(html.includes('Berätta kort om projektet'), 'Prerenderad kontaktsida saknar första steget.');
}

console.log('✓ Offertmotor, säker proxy och energipartnerrouting är verifierade.');
