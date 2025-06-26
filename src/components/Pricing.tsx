import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = [
    {
      name: "Kontrollansvarig",
      price: "Från 25 000 kr",
      description: "Komplett KA-tjänst för ditt byggprojekt",
      features: [
        "Kontrollplan och kontrollprogram",
        "Teknisk kontroll under byggtiden",
        "Slutbesked och dokumentation",
        "Löpande rådgivning",
        "Digital hantering"
      ],
      popular: false
    },
    {
      name: "BAS-P + BAS-U",
      price: "Från 35 000 kr",
      description: "Komplett arbetsmiljösamordning",
      features: [
        "Arbetsmiljöplan (BAS-P)",
        "Samordning under utförande (BAS-U)",
        "Riskbedömningar",
        "Säkerhetsronder",
        "Dokumentation och rapporter"
      ],
      popular: false
    },
    {
      name: "Komplett Paket",
      price: "Från 55 000 kr",
      description: "KA + BAS-P + BAS-U i ett paket",
      features: [
        "Alla KA-tjänster",
        "Alla BAS-P tjänster", 
        "Alla BAS-U tjänster",
        "Samordnad process",
        "Bästa värdet för pengar",
        "Prioriterad support"
      ],
      popular: true
    }
  ];

  return (
    <section id="priser" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tydliga Priser
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fast pris eller tydlig timdebitering. Inga dolda kostnader.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 ${
              pkg.popular ? 'border-accent' : 'border-border'
            }`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Populärast</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-accent mb-2">
                  {pkg.price}
                </div>
                <p className="text-muted-foreground">
                  {pkg.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={scrollToContact}
                className={`w-full ${
                  pkg.popular 
                    ? 'earth-gradient text-white hover:opacity-90' 
                    : 'border border-accent text-accent hover:bg-accent hover:text-white'
                }`}
                variant={pkg.popular ? 'default' : 'outline'}
              >
                Begär offert
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center bg-secondary/30 rounded-xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Timdebitering för mindre uppdrag
          </h3>
          <p className="text-muted-foreground mb-4">
            För konsultation, rådgivning eller mindre kontrolluppdrag erbjuder jag timdebitering.
          </p>
          <div className="text-2xl font-bold text-accent mb-4">
            1 200 kr/timme
          </div>
          <p className="text-sm text-muted-foreground">
            Exklusive moms. Restid debiteras med 50%.
          </p>
        </div>
      </div>
    </section>
  );
};