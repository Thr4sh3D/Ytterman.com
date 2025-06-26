import { Award, Clock, MapPin, Users } from 'lucide-react';

export const About = () => {
  const stats = [
    {
      icon: Clock,
      number: "20+",
      label: "År i branschen"
    },
    {
      icon: Users,
      number: "200+",
      label: "Nöjda kunder"
    },
    {
      icon: Award,
      number: "100%",
      label: "Certifierad KA & BAS"
    },
    {
      icon: MapPin,
      number: "24h",
      label: "Svarstid"
    }
  ];

  const certifications = [
    "Certifierad Kontrollansvarig",
    "BAS-P (Byggarbetsmiljösamordnare Projektering)",
    "BAS-U (Byggarbetsmiljösamordnare Utförande)",
    "Kontinuerlig vidareutbildning"
  ];

  return (
    <section id="om-mig" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Om Tobias Ytterman
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Med över 20 års erfarenhet inom byggbranschen hjälper jag dig navigera 
              genom den komplexa byggprocessen. Som certifierad kontrollansvarig och 
              byggarbetsmiljösamordnare säkerställer jag att ditt projekt följer alla 
              regler och föreskrifter.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Jag tror på personlig service och transparens. Därför erbjuder jag fast pris 
              utan dolda kostnader och är alltid tillgänglig för mina kunder. Mitt mål är 
              att göra din byggprocess så smidig och trygg som möjligt.
            </p>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Certifieringar & Kompetens
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-secondary/30 rounded-2xl p-8 text-center">
            <div className="w-48 h-48 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="w-24 h-24 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Tobias Ytterman
            </h3>
            <p className="text-muted-foreground mb-4">
              Kontrollansvarig & BAS
            </p>
            <p className="text-sm text-muted-foreground">
              "Jag brinner för att hjälpa mina kunder att genomföra sina byggprojekt 
              på ett säkert och regelrätt sätt. Varje projekt är unikt och förtjänar 
              personlig uppmärksamhet."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};