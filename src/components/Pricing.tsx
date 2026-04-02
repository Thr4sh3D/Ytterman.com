import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface PricingProps {
    onPackageSelect: (packageId: string) => void;
}

export const Pricing = ({ onPackageSelect }: PricingProps) => {
    const navigate = useNavigate();

    const packages = [
        {
            id: 'kontrollansvarig',
            name: 'Grundpaket – Lagkrav KA',
            price: 'Från 19,999 SEK',
            description: 'Du uppfyller lagkraven och får ditt projekt godkänt – snabbt och professionellt.',
            features: [
                'Kontrollplan enligt PBL (skräddarsydd)',
                'Teknisk kontroll enligt plan',
                'Obligatoriska besiktningar',
                'Slutbevis när allt är klart',
                'Grundläggande dokumentation',
                '✓ Så här går det till: 1) Handlingar in 2) Fast pris inom 24h 3) Guidning till slutbesked'
            ],
            popular: false,
            note: 'Perfekt för mindre projekt där du redan har koll på byggprocessen'
        },
        {
            id: 'ka-bas-paket',
            name: 'Pluspaket – Trygg KA',
            price: 'Från 29,990 SEK',
            description: 'Du slipper stress och oro – jag finns med dig hela vägen och löser problem innan de blir dyra.',
            features: [
                'Allt i Grundpaket +',
                'BAS-P (Projektering) och BAS-U (Utförande)',
                'Löpande rådgivning under hela projektet',
                'Snabb återkoppling via telefon & WhatsApp',
                'Hjälp med avvikelsehantering',
                'Komplett dokumentation för framtida behov',
                '✓ Så här går det till: 1) Projektgenomgång 2) Fast pris 3) Löpande stöd till slutbesked'
            ],
            popular: true,
            note: 'Rekommenderas för privatpersoner och mindre BRF-projekt'
        },
        {
            id: 'brf-stora-projekt',
            name: 'Premium – Projektstöd',
            price: 'Offert på förfrågan',
            description: 'Allt samlat i en hand – du slipper allt krångel medan projektet rinner på utan stopp.',
            features: [
                'Allt i Pluspaket +',
                'Dedikerad projektansvarig (jag)',
                'Löpande möten med projektgruppen',
                'Koordinering med kommun & myndigheter',
                'Hjälp med upphandling av entreprenörer',
                'Statusrapporter till styrelse/byggherre',
                '✓ Så här går det till: 1) Helhetsbild 2) Fast offert 3) Total projektstöd'
            ],
            popular: false,
            note: 'För större BRF-projekt, kommersiella fastigheter eller komplexa projekt'
        }
    ];

    const handleGetQuote = (packageId: string) => {
        navigate(`/kontakt/?service=${packageId}&source=pricing-section`);
    };

    return (
        <section id="priser" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        Välj rätt nivå för ditt projekt – tryggt och transparent
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Fasta priser och tydliga paket. Du väljer själv hur mycket trygghet och stöd du vill ha – från grundläggande lagkrav till fullständigt projektstöd. Inga dolda kostnader.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                                pkg.popular 
                                    ? 'border-accent scale-105' 
                                    : 'border-border hover:border-accent/50'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="earth-gradient text-white px-6 py-2 rounded-full text-sm font-semibold">
                                        Mest populär
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    {pkg.name}
                                </h3>
                                <div className="text-3xl font-bold text-accent mb-4">
                                    {pkg.price}
                                </div>
                                <p className="text-muted-foreground font-medium">
                                    {pkg.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <p className="text-sm text-slate-700">
                                    <strong>Passar för:</strong> {pkg.note}
                                </p>
                            </div>

                            <Button
                                onClick={() => handleGetQuote(pkg.id)}
                                className={`w-full py-3 ${
                                    pkg.popular
                                        ? 'earth-gradient text-white hover:opacity-90'
                                        : 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
                                }`}
                                variant={pkg.popular ? 'default' : 'outline'}
                            >
                                {pkg.popular ? 'Starta med kostnadsfri konsultation' : 'Be om fast pris'}
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        <strong>Fasta priser, inga dolda kostnader.</strong> Alla priser inkluderar moms. Kontakta mig för en kostnadsfri konsultation – du får ett fast prisförslag inom 24 timmar som är anpassat för just ditt projekt.
                    </p>
                </div>
            </div>
        </section>
    );
};