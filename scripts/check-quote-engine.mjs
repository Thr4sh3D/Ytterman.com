import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { QUOTE_SERVICES, QUOTE_SERVICE_IDS, getQuoteService } from '../src/config/quoteRequest.mjs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const packageJson = JSON.parse(read('package.json'));
const contactForm = read('src/components/ContactForm.tsx');
const contactSection = read('src/components/Contact.tsx');
const client = read('src/lib/quoteRequest.ts');
const endpoint = read('netlify/functions/quote-request.ts');
const workflow = read('.github/workflows/deploy.yml');

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

assert.equal((contactForm.match(/<form\b/g) || []).length, 1, 'Offertmotorn ska ha exakt ett formulär.');
assert.equal((contactSection.match(/<form\b/g) || []).length, 0, 'Startsidan får inte ha en parallell formulärimplementation.');
assert.ok(contactForm.includes('Steg {step} av 2'), 'Tvåstegsflödet saknas.');
assert.ok(contactForm.includes('quote-website'), 'Honeypot-fältet saknas.');
assert.ok(contactForm.includes('integritetspolicyn'), 'Integritetsbekräftelsen saknas.');
assert.ok(!existsSync(new URL('../src/lib/emailjs.ts', import.meta.url)), 'Klientbaserad EmailJS-fil får inte finnas kvar.');
assert.ok(!packageJson.dependencies?.['@emailjs/browser'], 'EmailJS får inte vara ett klientberoende.');

assert.ok(client.includes("VITE_QUOTE_REQUEST_ENDPOINT"), 'Publik proxyendpoint saknas.');
assert.ok(!client.includes('N8N_QUOTE_WEBHOOK_URL'), 'n8n-adressen får inte byggas in i klienten.');
assert.ok(!client.includes('N8N_QUOTE_WEBHOOK_SECRET'), 'n8n-hemligheten får inte byggas in i klienten.');

for (const requirement of [
  'N8N_QUOTE_WEBHOOK_URL',
  'N8N_QUOTE_WEBHOOK_SECRET',
  'QUOTE_RATE_LIMIT_SALT',
  'allowedOrigins',
  'quoteRequestSchema',
  'website',
  'MIN_FORM_TIME_MS',
  'consumeRateLimit',
  'requiresPartnerVerification',
]) {
  assert.ok(endpoint.includes(requirement), `Serverendpointen saknar ${requirement}.`);
}

assert.ok(workflow.includes('VITE_QUOTE_REQUEST_ENDPOINT: ${{ vars.VITE_QUOTE_REQUEST_ENDPOINT }}'));

const prerenderedContact = new URL('../dist/kontakt/index.html', import.meta.url);
if (existsSync(prerenderedContact)) {
  const html = readFileSync(prerenderedContact, 'utf8');
  assert.ok(html.includes('Offertförfrågan'), 'Prerenderad kontaktsida saknar offertmotorn.');
  assert.ok(html.includes('Berätta kort om projektet'), 'Prerenderad kontaktsida saknar första steget.');
}

console.log('✓ Offertmotor, säker proxy och energipartnerrouting är verifierade.');
