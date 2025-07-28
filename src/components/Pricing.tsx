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
      name: 'Kontrollansvarig',
      price: 'Från 15,000 SEK',
      description: 'Perfekt för mindre projekt och villabyggare',
      features: [
        'Kontrollplan enligt PBL',
        'Teknisk kontroll under byggprocessen',
        'Besiktningar och dokumentation',
        'Slutbevis och överlämning',
        'Rådgivning under hela projektet'
      ],
      popular: false
    },
    {
      id: 'ka-bas-paket',
      name: 'KA + BAS Paket',
      price: 'Från 25,000 SEK',
      description: 'Vårt populäraste paket - komplett lösning',
      features: [
        'Kontrollansvarig (KA)',
        'BAS-P (Projektering)',
        'BAS-U (Utförande)',
        'Arbetsmiljöplan och riskbedömning',
        'Kontinuerlig uppföljning',
        'Alla nödvändiga besiktningar',
        'Slutbevis och dokumentation'
      ],
      popular: true
    },
    {
      id: 'brf-stora-projekt',
      name: 'BRF & Större Projekt',
      price: 'Offert på förfrågan',
      description: 'Skräddarsydda lösningar för komplexa projekt',
      features: [
        'Fullständig projektledning',
        'Specialistkompetens',
        'Koordinering med myndigheter',
        'Omfattande dokumentation',
        'Dedikerad projektansvarig',
        'Regelbundna statusrapporter'
      ],
      popular: false
    }
  ];

  const handleGetQuote = (packageId: string) => {
    navigate(`/kontakt?service=${packageId}&source=pricing-section`);
  };

  return (
    <section id="priser" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Transparenta Priser
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Välj det paket som passar ditt projekt bäst. Alla priser är fasta och 
            inkluderar allt du behöver för en trygg byggprocess.
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
                    Populärast
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
                <p className="text-muted-foreground">
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

              <Button
                onClick={() => handleGetQuote(pkg.id)}
                className={`w-full py-3 ${
                  pkg.popular
                    ? 'earth-gradient text-white hover:opacity-90'
                    : 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
                }`}
                variant={pkg.popular ? 'default' : 'outline'}
              >
                Få en offert
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Alla priser är exklusive moms. Kontakta oss för en kostnadsfri konsultation 
            och skräddarsydd offert för ditt specifika projekt.
          </p>
        </div>
      </div>
    </section>
  );
};