/**
 * Byggstart-planerare – produktsida (säljlager)
 *
 * Denna sida marknadsför och säljer den digitala produkten "Byggstart-planerare".
 * Själva produkten är ett fristående interaktivt digitalt verktyg som kunden laddar ned
 * efter köp.  Produktfilen finns under:
 *   public/products/byggstart-planerare/byggstart-planerare-v1.html
 */

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  Download,
  FileText,
  ClipboardList,
  Users,
  DollarSign,
  CalendarDays,
  CheckSquare,
  BarChart3,
  Info,
  Phone,
  Mail,
  Shield,
  Wifi,
  RefreshCw,
  Package,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { normalizeInternalPath } from '@/utils/url';


// ─────────────────────────────────────────────────────────────────────────────
// Innehållssektioner i produkten
// ─────────────────────────────────────────────────────────────────────────────

const PRODUCT_SECTIONS = [
  { icon: ClipboardList, title: 'Projektinfo', desc: 'Projektnamn, adress, byggherre, typ, storlek och tidsramar.' },
  { icon: FileText, title: 'Lov & handlingar', desc: 'Tillståndstyp, lovnummer, startbesked och checklista för handlingar.' },
  { icon: Users, title: 'Entreprenörer', desc: 'Kontaktregister för alla aktörer – roll, företag, telefon och avtal.' },
  { icon: DollarSign, title: 'Budget', desc: 'Kostnadsposter per kategori med budget och utfall.' },
  { icon: CalendarDays, title: 'Tidsplan', desc: 'Milstolpar med datum och avbockningsstatus.' },
  { icon: CheckSquare, title: 'Kontrollpunkter', desc: '12 fördefinierade punkter att bocka av inför byggstart.' },
  { icon: BarChart3, title: 'Sammanfattning', desc: 'Samlad projektöversikt med statusindikator och progress.' },
];

const PRODUCT_FEATURES = [
  'Öppnas direkt i webbläsaren – ingen installation krävs',
  'Autosparning via localStorage i din webbläsare',
  'Export och import av projektdata som JSON',
  'Mobilanpassad och datorvänlig',
  'Diskret CTA till Tobias tjänster vid behov',
  'Disclaimer om professionell rådgivning inkluderad',
];

const productFaq = [
  {
    question: 'Vad är Byggstart-planerare?',
    answer: 'Det är ett interaktivt digitalt verktyg du laddar ned efter köp. Du öppnar det direkt i din webbläsare och arbetar offline – ingen inloggning, ingen abonnemang.',
  },
  {
    question: 'Vad ingår i produkten?',
    answer: 'En zip-fil med det digitala verktyget. Verktyget innehåller 7 sektioner: projektinfo, lov/handlingar, entreprenörer, budget, tidsplan, kontrollpunkter och sammanfattning.',
  },
  {
    question: 'Ersätter verktyget en kontrollansvarig?',
    answer: 'Nej. Verktyget är ett praktiskt planeringshjälpmedel och ersätter inte certifierad kontrollansvarig (KA), BAS-P/U, energiberäkning eller annan professionell rådgivning.',
  },
  {
    question: 'Kan jag spara mitt arbete?',
    answer: 'Ja. Verktyget sparar automatiskt i webbläsarens localStorage. Du kan också exportera all data som JSON och importera den igen närsomhelst.',
  },
  {
    question: 'Hur köper jag?',
    answer: 'Kontakta Tobias Ytterman via formuläret nedan eller per telefon. Du betalar och laddar ned direkt – inga mellanhänder.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Komponent
// ─────────────────────────────────────────────────────────────────────────────

const ByggstartPlanerare = () => {
  const contactProductPath = normalizeInternalPath('/kontakt?produkt=byggstart-planerare') || '/kontakt/?produkt=byggstart-planerare';

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Produkter', url: 'https://ytterman.com/produkter' },
    { name: 'Byggstart-planerare', url: 'https://ytterman.com/byggstart-planerare' },
  ];

  return (
    <>
      <AdvancedSEO
        title="Byggstart-planerare – Digital produkt för byggplanering | Ytterman"
        description="Ladda ned ett interaktivt digitalt verktyg för att planera din byggstart. Samla projektinfo, lov, handlingar, entreprenörer, budget och kontrollpunkter – öppnas direkt i webbläsaren."
        keywords="byggstart planerare, byggprojekt verktyg, digital produkt, kontrollansvarig, BAS-P, BAS-U, bygglov, Ytterman"
        url="https://ytterman.com/byggstart-planerare"
        type="website"
        breadcrumbs={breadcrumbs}
        faq={productFaq}
      />
      <CanonicalUrl path="/byggstart-planerare" />

      <div className="min-h-screen bg-slate-50">
        <Header />

        {/* Breadcrumb */}
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { label: 'Produkter', href: '/produkter' },
                { label: 'Byggstart-planerare', href: '/byggstart-planerare' },
              ]}
            />
          </div>
        </section>

        {/* Hero */}
        <section className="bg-white border-b py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              {/* Left: text */}
              <div className="flex-1">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 mb-3">
                  Digital produkt
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Byggstart-planerare
                </h1>
                <p className="text-lg text-slate-600 mb-6 max-w-xl leading-relaxed">
                  Ett interaktivt digitalt verktyg som du laddar ned, öppnar direkt i din webbläsare och använder helt offline. Planera din byggstart strukturerat – från lov och handlingar till budget och kontrollpunkter.
                </p>
                <ul className="space-y-2 mb-8">
                  {PRODUCT_FEATURES.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: purchase card */}
              <div className="md:w-72 flex-shrink-0">
                <Card className="border-slate-200 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Package className="w-5 h-5 text-primary" />
                      <CardTitle className="text-base font-semibold text-slate-800">
                        Vad ingår
                      </CardTitle>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-1.5 mt-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                        Interaktivt digitalt verktyg (offline-klart)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                        7 planeringsmoduler
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                        Autosparning + JSON-export
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                        Livstidstillgång, inga månadsavgifter
                      </li>
                    </ul>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-slate-900">497 kr</span>
                      <span className="text-slate-500 text-sm ml-1">inkl. moms</span>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="w-full earth-gradient text-white hover:opacity-90 mb-2"
                    >
                      {/*
                        Köpknapp – nuvarande flöde: kontaktformulär med förifylld produkt.
                        Framtida alternativ: ersätt href med en extern checkout-länk (t.ex.
                        Stripe Payment Link, Gumroad, eller Lemon Squeezy) för automatisk
                        betalning och omedelbar filleverans utan manuell hantering.
                      */}
                      <Link to={contactProductPath}>
                        <Download className="w-4 h-4 mr-2" />
                        Köp och ladda ned
                      </Link>
                    </Button>
                    <p className="text-center text-xs text-slate-500">
                      Betalning via faktura eller kort. Du får filen direkt.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Product features / sections */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Vad finns i verktyget?
            </h2>
            <p className="text-slate-600 mb-8">
              Sju sammanlänkade moduler täcker hela planeringsprocessen från idé till byggstart.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRODUCT_SECTIONS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Card key={i} className="border-slate-200 hover:border-primary/30 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800 text-sm mb-0.5">{s.title}</div>
                          <div className="text-slate-500 text-xs leading-relaxed">{s.desc}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white border-y py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Så här fungerar det
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { step: '1', icon: Download, label: 'Köp och ladda ned', desc: 'Betala och ladda ned verktyget direkt.' },
                { step: '2', icon: Wifi, label: 'Öppna lokalt', desc: 'Dubbelklicka på filen – fungerar offline.' },
                { step: '3', icon: RefreshCw, label: 'Fyll i och spara', desc: 'Autosparning sker löpande i webbläsaren.' },
                { step: '4', icon: FileText, label: 'Exportera', desc: 'Exportera din planering som JSON när du vill.' },
              ].map(({ step, icon: Icon, label, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-xs font-semibold text-primary mb-1">Steg {step}</div>
                  <div className="font-semibold text-slate-800 text-sm mb-1">{label}</div>
                  <div className="text-slate-500 text-xs">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Vanliga frågor
            </h2>
            <div className="space-y-4">
              {productFaq.map((item, i) => (
                <Card key={i} className="border-slate-200">
                  <CardContent className="p-5">
                    <div className="font-semibold text-slate-800 mb-1.5">{item.question}</div>
                    <div className="text-slate-600 text-sm leading-relaxed">{item.answer}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="pb-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
              <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Information:</strong> Byggstart-planeraren är ett praktiskt stöd för
                planering och dokumentation. Den ersätter inte projektspecifik bedömning,
                certifierad kontrollansvarig (KA), BAS-P/U-uppdrag, energiberäkning eller
                annan professionell rådgivning där sådan krävs enligt lag.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-white border-t py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="w-14 h-14 rounded-xl earth-gradient flex items-center justify-center mx-auto mb-4">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Redo att planera din byggstart?
            </h2>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              Köp Byggstart-planeraren och få ett strukturerat verktyg direkt i din webbläsare. Behöver du också certifierad KA eller BAS-P/U – hör av dig så tar vi hand om allt.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" className="earth-gradient text-white hover:opacity-90">
                <Link to={contactProductPath}>
                  <Download className="w-4 h-4 mr-2" />
                  Köp nu – 497 kr
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300">
                <a href="tel:+46761118447">
                  <Phone className="w-4 h-4 mr-2" />
                  Ring Tobias
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300">
                <a href="mailto:tobias@ytterman.com">
                  <Mail className="w-4 h-4 mr-2" />
                  tobias@ytterman.com
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ByggstartPlanerare;
