import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingProps {
  onPackageSelect: (packageId: string) => void;
}

export const Pricing = ({ onPackageSelect }: PricingProps) => {
  const packages = [
    {
      id: 'villa',
      name: 'Villa/Småhus',
      price: 'Från 15 000 kr',
      description: 'Perfekt för mindre byggprojekt',
      features: [
        'Kontrollansvarig (KA)',
        'Kontrollplan',
        'Kontrollbesiktningar',
        'Slutbesiktning och slutbevis',
        'Teknisk dokumentation'
      ],
      popular: false
    },
    {
      id: 'flerfamilj',
      name: 'Flerfamiljshus',
      price: 'Från 35 000 kr',
      description: 'För större bostadsprojekt',
      features: [
        'Kontrollansvarig (KA)',
        'BAS-P och BAS-U',
        'Utökad kontrollplan',
        'Regelbundna besiktningar',
        'Arbetsmiljösamordning',
        'Komplett dokumentation'
      ],
      popular: true
    },
    {
      id: 'kommersiell',
      name: 'Kommersiella Byggnader',
      price: 'Offert på förfrågan',
      description: 'Skräddarsydda lösningar för komplexa projekt',
      features: [
        'Fullständig KA-tjänst',
        'BAS-P och BAS-U',
        'Projektspecifik kontrollplan',
        'Kontinuerlig uppföljning',
        'Myndighetssamordning',
        'Specialistkompetens'
      ],
      popular: false
    }
  ];

  return (
    <section id="priser" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Transparenta Priser
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fast pris utan dolda kostnader. Välj det paket som passar ditt projekt bäst.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                pkg.popular ? 'ring-2 ring-accent' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="earth-gradient text-white px-4 py-2 rounded-full text-sm font-medium">
                    Populärast
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                <div className="text-3xl font-bold text-accent">{pkg.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => onPackageSelect(pkg.id)}
                className={`w-full ${
                  pkg.popular
                    ? 'earth-gradient text-white hover:opacity-90'
                    : 'border-accent text-accent hover:bg-accent hover:text-white'
                }`}
                variant={pkg.popular ? 'default' : 'outline'}
              >
                Välj detta paket
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};