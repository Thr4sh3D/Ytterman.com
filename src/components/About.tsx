import { Award, Clock, MapPin, Users } from 'lucide-react';

export const About = () => {
  const stats = [
    {
      icon: Clock,
      value: '20+',
      label: 'År av erfarenhet'
    },
    {
      icon: Award,
      value: '500+',
      label: 'Genomförda projekt'
    },
    {
      icon: Users,
      value: '100%',
      label: 'Nöjda kunder'
    },
    {
      icon: MapPin,
      value: 'Västernorrland',
      label: 'Vårt verksamhetsområde'
    }
  ];

  return (
    <section id="om-mig" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Om Ytterman
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                Med över 20 års erfarenhet inom byggbranschen har jag utvecklat en djup förståelse 
                för vad som krävs för en framgångsrik byggprocess. Som certifierad Kontrollansvarig 
                och Byggarbetsmiljösamordnare hjälper jag dig navigera genom regelverket och 
                säkerställer att ditt projekt genomförs säkert och enligt gällande bestämmelser.
              </p>
              
              <p>
                Jag tror på personlig service och nära samarbete med mina kunder. Varje projekt 
                är unikt, och jag anpassar mina tjänster efter dina specifika behov och förutsättningar. 
                Med fast pris och tydlig kommunikation får du trygghet genom hela byggprocessen.
              </p>
              
              <p>
                Mitt verksamhetsområde sträcker sig över hela Västernorrland, med bas i Sundsvall. 
                Jag arbetar med allt från mindre villaprojekt till större kommersiella byggnationer 
                och har gedigen erfarenhet av både nybyggnation och renovering.
              </p>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Certifieringar</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-secondary px-4 py-2 rounded-lg text-sm font-medium">
                  Certifierad Kontrollansvarig (KA)
                </span>
                <span className="bg-secondary px-4 py-2 rounded-lg text-sm font-medium">
                  BAS-P (Projektering)
                </span>
                <span className="bg-secondary px-4 py-2 rounded-lg text-sm font-medium">
                  BAS-U (Utförande)
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 earth-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};