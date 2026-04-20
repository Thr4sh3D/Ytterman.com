/**
 * ProdukterPage – lista över digitala produkter på ytterman.com
 *
 * Denna sida är säljlagret för digitala produkter (nedladdningsbara verktyg).
 * Varje produkt har en egen produktsida med köpknapp.
 * Lägg till fler produkter i PRODUCTS-arrayen när de finns tillgängliga.
 */

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Download,
  ClipboardList,
  Wifi,
  Package,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { normalizeInternalPath } from '@/utils/url';

// ─────────────────────────────────────────────────────────────────────────────
// Produktkatalog – lägg till fler produkter här i takt med att de lanseras
// ─────────────────────────────────────────────────────────────────────────────

interface DigitalProduct {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  features: string[];
  badge?: string;
  icon: React.ReactNode;
  available: boolean;
}

const PRODUCTS: DigitalProduct[] = [
  {
    slug: '/byggstart-planerare',
    name: 'Byggstart-planerare',
    tagline: 'Planera din byggstart – offline, i din webbläsare',
    description:
      'Ett interaktivt digitalt verktyg som täcker hela planeringsprocessen: projektinfo, lov och handlingar, entreprenörer, budget, tidsplan, kontrollpunkter och sammanfattning.',
    price: '497 kr',
    features: [
      'Fungerar offline – ingen internet krävs',
      'Autosparning via localStorage',
      'Export/import som JSON',
      '7 planeringsmoduler',
      'Mobilanpassad',
    ],
    badge: 'Ny',
    icon: <ClipboardList className="w-6 h-6 text-primary" />,
    available: true,
  },
  // Platshållare – kommande produkter
  {
    slug: '#',
    name: 'Mer på väg',
    tagline: 'Fler digitala verktyg lanseras inom kort',
    description:
      'Vi arbetar på fler nedladdningsbara verktyg för byggprojektets olika faser. Anmäl ditt intresse via kontaktformuläret.',
    price: '',
    features: [],
    icon: <Package className="w-6 h-6 text-slate-400" />,
    available: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Komponent
// ─────────────────────────────────────────────────────────────────────────────

const ProdukterPage = () => {
  const contactPath = normalizeInternalPath('/kontakt') || '/kontakt/';
  const servicesPath = normalizeInternalPath('/tjanster') || '/tjanster/';

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Produkter', url: 'https://ytterman.com/produkter' },
  ];

  return (
    <>
      <AdvancedSEO
        title="Digitala produkter för byggprojekt | Ytterman"
        description="Nedladdningsbara interaktiva verktyg för privatpersoner och proffs. Planera din byggstart offline med Yttermans digitala produkter."
        keywords="digitala produkter, byggprojekt verktyg, byggstart planerare, nedladdningsbart digitalt verktyg, Ytterman"
        url="https://ytterman.com/produkter"
        type="website"
        breadcrumbs={breadcrumbs}
      />
      <CanonicalUrl path="/produkter" />

      <div className="min-h-screen bg-slate-50">
        <Header />

        {/* Breadcrumb */}
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: 'Produkter', href: '/produkter' }]} />
          </div>
        </section>

        {/* Hero */}
        <section className="bg-white border-b py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 mb-4">
              Digitala produkter
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Verktyg som hjälper dig bygga smartare
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nedladdningsbara digitala verktyg – inga abonnemang, ingen inloggning.
              Öppna direkt i din webbläsare och jobba offline.
            </p>

            {/* USPs */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                { icon: <Download className="w-5 h-5 text-primary" />, label: 'Ladda ned direkt' },
                { icon: <Wifi className="w-5 h-5 text-primary" />, label: 'Fungerar offline' },
                { icon: <Package className="w-5 h-5 text-primary" />, label: 'Ingen prenumeration' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Tillgängliga produkter</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <Card
                  key={product.slug}
                  className={`border-slate-200 flex flex-col ${product.available ? 'hover:border-primary/40 transition-colors' : 'opacity-60'}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {product.icon}
                      </div>
                      {product.badge && (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-base font-semibold text-slate-800">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-xs text-slate-500">
                      {product.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1">
                      {product.description}
                    </p>
                    {product.features.length > 0 && (
                      <ul className="space-y-1 mb-4">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-center gap-1.5 text-xs text-slate-600">
                            <ChevronRight className="w-3 h-3 text-primary flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                    {product.available ? (
                      <div>
                        {product.price && (
                          <div className="font-bold text-slate-900 mb-3">
                            {product.price}{' '}
                            <span className="text-slate-500 font-normal text-xs">inkl. moms</span>
                          </div>
                        )}
                        <Button asChild className="w-full earth-gradient text-white hover:opacity-90">
                          <Link to={normalizeInternalPath(product.slug) || product.slug}>
                            Läs mer & köp
                            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-slate-200 text-slate-500"
                      >
                        <Link to={contactPath}>Anmäl intresse</Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About digital products */}
        <section className="bg-white border-y py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Vad är en digital produkt från Ytterman?
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Varje digital produkt är ett interaktivt verktyg du laddar ned och öppnar direkt
              i din webbläsare – utan internet, utan konto och utan abonnemang.
              Dina uppgifter sparas lokalt på din enhet.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Produkterna är skapade av Tobias Ytterman – certifierad kontrollansvarig, BAS-P/U
              och byggkonsult med 20+ års erfarenhet. De kompletterar Tobias konsulttjänster
              och är framtagna för privatpersoner och proffs som vill ha ordning på sin
              byggprocess.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link to={servicesPath}>
                Se Tobias konsulttjänster
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ProdukterPage;
