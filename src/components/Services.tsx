import { Shield, Users, FileCheck, Building, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Kontrollansvarig (KA)",
      description: "Säkerställer att byggnationen följer gällande lagar och föreskrifter",
      features: [
        "Kontrollplan och kontrollbesiktningar",
        "Slutbesiktning och slutbevis",
        "Teknisk kontroll under byggprocessen",
        "Dokumentation och rapportering"
      ],
      price: "Från 15 000 kr"
    },
    {
      icon: Users,
      title: "BAS-P (Projektering)",
      description: "Arbetsmiljösamordning under projekteringsfasen",
      features: [
        "Arbetsmiljöplan för projektering",
        "Riskbedömning och säkerhetsanalys",
        "Samordning mellan projektörer",
        "Underlag för BAS-U"
      ],
      price: "Från 8 000 kr"
    },
    {
      icon: Building,
      title: "BAS-U (Utförande)",
      description: "Arbetsmiljösamordning under byggfasen",
      features: [
        "Arbetsmiljöplan för utförande",
        "Säkerhetsronder och kontroller",
        "Samordning mellan entreprenörer",
        "Incidentrapportering"
      ],
      price: "Från 12 000 kr"
    },
    {
      icon: FileCheck,
      title: "Kombinerade Paket",
      description: "Kostnadseffektiva lösningar för hela byggprocessen",
      features: [
        "KA + BAS-P/U i ett paket",
        "Smidig övergång mellan faser",
        "Enhetlig dokumentation",
        "Rabatterade priser"
      ],
      price: "Från 25 000 kr"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tjanster" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Mina Tjänster
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professionella tjänster inom byggkontroll och arbetsmiljösamordning. 
            Certifierad enligt nya regelverket 2025 och anpassat för ditt projekt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t pt-4">
                <div className="text-lg font-bold text-accent mb-3">
                  {service.price}
                </div>
                <Button 
                  onClick={scrollToContact}
                  className="w-full earth-gradient text-white hover:opacity-90"
                >
                  Begär offert
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-2xl p-8 text-center">
          <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Snabb Återkoppling
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Jag svarar vanligtvis inom 24 timmar och kan ofta erbjuda snabba 
            starttider för akuta projekt. Kontakta mig för en kostnadsfri konsultation.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="earth-gradient text-white hover:opacity-90"
          >
            Kontakta mig idag
          </Button>
        </div>
      </div>
    </section>
  );
};