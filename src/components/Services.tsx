import { Shield, CheckCircle, FileText, Users, Building, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Shield,
      title: "Kontrollansvarig (KA)",
      description: "Professionell kontrollansvarig för alla typer av byggprojekt enligt PBL.",
      features: [
        "Kontrollplan och kontrollprogram",
        "Teknisk kontroll under byggtiden",
        "Slutbesked och dokumentation",
        "Rådgivning kring bygglov"
      ]
    },
    {
      icon: Users,
      title: "BAS-P (Projektering)",
      description: "Byggarbetsmiljösamordnare under projekteringsskedet.",
      features: [
        "Arbetsmiljöplan för projektet",
        "Riskbedömning och säkerhetsanalys",
        "Samordning med projektörer",
        "Underlag för BAS-U"
      ]
    },
    {
      icon: Building,
      title: "BAS-U (Utförande)",
      description: "Byggarbetsmiljösamordnare under utförandeskedet.",
      features: [
        "Arbetsmiljösamordning på byggplatsen",
        "Säkerhetsronder och kontroller",
        "Samordning mellan entreprenörer",
        "Dokumentation och rapportering"
      ]
    }
  ];

  return (
    <section id="tjanster" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Mina Tjänster
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professionella tjänster inom byggkontroll och arbetsmiljösamordning för trygg byggprocess
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="earth-gradient text-white hover:opacity-90"
          >
            Kontakta mig för offert
          </Button>
        </div>
      </div>
    </section>
  );
};