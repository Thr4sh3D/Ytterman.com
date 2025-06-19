import { Award, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const About = () => {
  const certifications = [
    'Kontrollansvarig enligt PBL (KA)',
    'Byggarbetsmiljösamordnare BAS‑P & BAS‑U',
    'Ställningsutbildning 2–9 meter (AFS 2013:4)',
    'Fallskydd & HLR‑instruktör',
    'Motorsåg & Röjsåg – Säker Skog',
    'ESA instruerad person – elnära arbeten',
    'Drönarkort A1/A2/A3 (EASA)'
  ];

  return (
    <section id="om-mig" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Om <span className="text-gradient">Mig</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Över 20 års erfarenhet inom bygg, räddningstjänst och projektledning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <Card className="shadow-earth">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">TY</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Tobias Ytterman</CardTitle>
                    <p className="text-muted-foreground">Kontrollansvarig & BAS-P/BAS-U</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Jag heter Tobias Ytterman och har över 20 års erfarenhet inom bygg, räddningstjänst och projektledning. 
                  Jag har arbetat som snickare, insatsledare, BAS‑U/BAS‑P och kontrollansvarig i allt från småhus till 
                  vindkraftsprojekt och industribyggnation.
                </p>
                
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Bor i Viksjö, arbetar främst i Sundsvall med omnejd</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground mt-2">
                  <Briefcase className="w-5 h-5 text-accent" />
                  <span>Erbjuder platsbesök i hela Västernorrland</span>
                </div>
              </CardContent>
            </Card>

            {/* ... keep existing code (rest of the component) */}
          </div>

          {/* Right Column - Certifications */}
          <div>
            <Card className="shadow-earth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-accent" />
                  <span>Utbildningar & Certifikat</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-secondary/30 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 earth-gradient-light rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-center">Projekttyper jag arbetat med</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="font-medium">Bostäder:</div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Småhus</li>
                    <li>• Tillbyggnader</li>
                    <li>• BRF-projekt</li>
                    <li>• Renoveringar</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Industri & Övrigt:</div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Vindkraftsprojekt</li>
                    <li>• Industribyggnation</li>
                    <li>• Kommersiella lokaler</li>
                    <li>• Infrastruktur</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};