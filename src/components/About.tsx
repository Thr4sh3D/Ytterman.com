import { Award, Users, Clock, MapPin } from 'lucide-react';

export const About = () => {
  const stats = [
    {
      icon: Clock,
      number: "20+",
      label: "År inom bygg"
    },
    {
      icon: Award,
      number: "100+",
      label: "Genomförda projekt"
    },
    {
      icon: Users,
      number: "50+",
      label: "Nöjda kunder"
    },
    {
      icon: MapPin,
      number: "5",
      label: "Kommuner i Västernorrland"
    }
  ];

  return (
    <section id="om-mig" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Om Tobias Ytterman
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Jag heter Tobias Ytterman och har över 20 års erfarenhet inom bygg, 
                räddningstjänst och projektledning. Jag har arbetat som snickare, 
                arbetsledare, BAS‑U/BAS‑P och kontrollansvarig i allt från småhus 
                till vindkraftsprojekt och industribyggnation.
              </p>
              
              <p>
                Som certifierad kontrollansvarig och byggarbetsmiljösamordnare enligt 
                det nya regelverket 2025 hjälper jag dig att säkerställa en trygg och 
                regelrätt byggprocess. Jag tror på tydlig kommunikation, digital hantering 
                och att vara tillgänglig när mina kunder behöver mig.
              </p>
              
              <p>
                Baserad i Viksjö men verksam i hela Västernorrland. Jag arbetar både med 
                privatpersoner, företag och bostadsrättsföreningar. Som medlem i SBR 
                (Svenska Byggingenjörers Riksförbund) håller jag mig uppdaterad med 
                branschens senaste utveckling.
              </p>
            </div>

            <div className="mt-8 p-6 bg-background rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Certifieringar & Utbildningar
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Kontrollansvarig enligt PBL</li>
                <li>• BAS-P (Byggarbetsmiljösamordnare projektering)</li>
                <li>• BAS-U (Byggarbetsmiljösamordnare utförande)</li>
                <li>• Certifierad enligt nya regelverket 2025</li>
                <li>• Medlem i SBR – Svenska Byggingenjörers Riksförbund</li>
                <li>• Byggingenjör</li>
                <li>• Kontinuerlig vidareutbildning inom byggrätt och arbetsmiljö</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-background rounded-xl p-8 shadow-lg">
                  <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-background rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Varför välja mig?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Certifierad enligt senaste regelverket 2025</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Medlem i SBR för kontinuerlig kompetensutveckling</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Lokal kunskap om Västernorrlands byggmarknad</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Digital hantering för effektiv kommunikation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Flexibel och anpassar mig efter ditt projekt</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tydliga priser och inga dolda kostnader</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};