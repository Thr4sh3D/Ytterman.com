import { Shield, Users, FileCheck, AlertTriangle, Building, Clipboard } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Kontrollansvarig (KA)",
      description: "Säkerställer att byggnationen följer gällande regler och föreskrifter",
      features: [
        "Kontrollplan och kontrollbesiktningar",
        "Slutbesiktning och slutbevis",
        "Teknisk kontroll under hela processen",
        "Dokumentation och rapportering"
      ]
    },
    {
      icon: Users,
      title: "BAS-P (Projektering)",
      description: "Arbetsmiljösamordning under projekteringsfasen",
      features: [
        "Arbetsmiljöplan för projektet",
        "Riskbedömning och säkerhetsanalys",
        "Samordning mellan projektörer",
        "Underlag för BAS-U"
      ]
    },
    {
      icon: AlertTriangle,
      title: "BAS-U (Utförande)",
      description: "Arbetsmiljösamordning under utförandefasen",
      features: [
        "Samordning av arbetsmiljöarbetet",
        "Kontroll av säkerhetsåtgärder",
        "Arbetsmiljöbesiktningar",
        "Incidentrapportering"
      ]
    },
    {
      icon: Building,
      title: "BRF & Större Projekt",
      description: "Specialiserad hantering av komplexa byggprojekt",
      features: [
        "Projektledning och samordning",
        "Flera kontrollansvariga vid behov",
        "Utökad BAS-funktion",
        "Skräddarsydda lösningar"
      ]
    },
    {
      icon: FileCheck,
      title: "Bygglovsprocess",
      description: "Hjälp med bygglovsansökan och myndighetsärenden",
      features: [
        "Bygglovsansökan",
        "Kontakt med byggnadsnämnden",
        "Teknisk dokumentation",
        "Uppföljning av ärendet"
      ]
    },
    {
      icon: Clipboard,
      title: "Konsultation",
      description: "Rådgivning och expertis för ditt byggprojekt",
      features: [
        "Kostnadsfri första konsultation",
        "Projektplanering och rådgivning",
        "Regelverkshjälp",
        "Problemlösning"
      ]
    }
  ];

  return (
    <section id="tjanster" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Mina Tjänster
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Komplett service för din byggprocess - från projektering till slutbesiktning. 
            Jag hjälper dig navigera genom regelverket och säkerställer en trygg byggprocess.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary/30 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 earth-gradient rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};