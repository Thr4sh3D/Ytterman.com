import { Check, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Pricing = () => {
  const packages = [
    {
      name: "Kontrollansvarig",
      subtitle: "För mindre projekt",
      price: "15 000",
      period: "från",
      popular: false,
      features: [
        "Kontrollplan",
        "Kontrollbesiktningar",
        "Slutbesiktning",
        "Slutbevis",
        "Digital dokumentation",
        "Telefonsupport"
      ]
    },
    {
      name: "KA + BAS Paket",
      subtitle: "Mest populära",
      price: "25 000",
      period: "från",
      popular: true,
      features: [
        "Kontrollansvarig",
        "BAS-P (Projektering)",
        "BAS-U (Utförande)",
        "Arbetsmiljöplan",
        "Säkerhetsronder",
        "Komplett dokumentation",
        "Prioriterad support",
        "Rabatterat pris"
      ]
    },
    {
      name: "BRF & Större Projekt",
      subtitle: "För komplexa projekt",
      price: "Offert",
      period: "efter behov",
      popular: false,
      features: [
        "Skräddarsydd lösning",
        "Projektledning",
        "Flera kontrollansvariga",
        "Utökad BAS-funktion",
        "Regelbundna möten",
        "Detaljerad rapportering",
        "24/7 support",
        "Flexibel fakturering"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/46761118447?text=Hej! Jag är intresserad av dina priser och tjänster.', '_blank');
  };

  return (
    <section id="priser" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Tydliga Priser
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Inga dolda kostnader. Välj det paket som passar ditt projekt bäst. 
            Alla priser är inklusive moms och baseras på projektets omfattning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                pkg.popular ? 'ring-2 ring-accent scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Mest populär</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {pkg.subtitle}
                </p>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-sm text-muted-foreground">{pkg.period}</span>
                  <span className="text-4xl font-bold text-accent">
                    {pkg.price === "Offert" ? pkg.price : `${pkg.price} kr`}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
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
                {pkg.price === "Offert" ? "Begär offert" : "Välj paket"}
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 text-center">
          <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Osäker på vilket paket som passar?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ring mig för en kostnadsfri konsultation så hjälper jag dig att hitta 
            den bästa lösningen för ditt projekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="earth-gradient text-white hover:opacity-90"
            >
              Ring 076-111 84 47
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-white"
            >
              Skicka meddelande
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};