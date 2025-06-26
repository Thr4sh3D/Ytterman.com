import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingProps {
  onPackageSelect?: (packageId: string) => void;
}

export const Pricing = ({ onPackageSelect }: PricingProps) => {
  const packages = [
    {
      id: 'kontrollansvarig',
      name: 'Kontrollansvarig',
      price: 'Från 15 000 kr',
      description: 'För mindre projekt och enkla byggnationer',
      popular: false,
      features: [
        'Kontrollplan',
        'Kontrollbesiktningar',
        'Slutbesiktning',
        'Slutbevis',
        'Teknisk dokumentation',
        'Myndighetsrapportering'
      ]
    },
    {
      id: 'ka-bas-paket',
      name: 'KA + BAS Paket',
      price: 'Från 25 000 kr',
      description: 'Mest populära - komplett lösning för de flesta projekt',
      popular: true,
      features: [
        'Kontrollansvarig (KA)',
        'BAS-P (Projektering)',
        'BAS-U (Utförande)',
        'Arbetsmiljöplan',
        'Riskbedömningar',
        'Samordning hela processen',
        'Slutdokumentation'
      ]
    },
    {
      id: 'brf-stora-projekt',
      name: 'BRF & Större Projekt',
      price: 'Offert efter behov',
      description: 'För komplexa projekt och bostadsrättsföreningar',
      popular: false,
      features: [
        'Skräddarsydd lösning',
        'Projektledning',
        'Flera kontrollansvariga',
        'Utökad BAS-funktion',
        'Specialistkompetens',
        'Löpande uppföljning',
        'Dedikerad kontaktperson'
      ]
    }
  ];

  const handlePackageSelect = (packageId: string) => {
    if (onPackageSelect) {
      onPackageSelect(packageId);
    }
    
    // Scrolla till kontaktformuläret
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="priser" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Transparenta Priser
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fast pris utan dolda kostnader. Välj det paket som passar ditt projekt bäst. 
            Alla priser inkluderar komplett service och dokumentation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                pkg.popular ? 'ring-2 ring-accent' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Mest populära</span>
                  </div>
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
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => handlePackageSelect(pkg.id)}
                className={`w-full py-3 ${
                  pkg.popular 
                    ? 'earth-gradient text-white hover:opacity-90' 
                    : 'border border-accent text-accent hover:bg-accent hover:text-white'
                }`}
                variant={pkg.popular ? 'default' : 'outline'}
              >
                Välj detta paket
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Osäker på vilket paket som passar dig?
          </p>
          <Button 
            onClick={() => handlePackageSelect('')}
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-white"
          >
            Få kostnadsfri konsultation
          </Button>
        </div>
      </div>
    </section>
  );
};