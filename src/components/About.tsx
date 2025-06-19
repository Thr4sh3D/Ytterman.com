import { Award, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const About = () => {
  const certifications = [
    'Kontrollansvarig enligt PBL (KA)',
    'Byggarbetsmiljösamordnare BAS‑P & BAS‑U',
    'Ställningsutbildning 2–9 meter (AFS 2013:4) - Instruktör',
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
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                    <img 
                      src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1750350948620-profile_pic_color_square.png"
                      alt="Tobias Ytterman - Kontrollansvarig & BAS-P/BAS-U"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Tobias Ytterman</CardTitle>
                    <p className="text-muted-foreground text-lg">Kontrollansvarig & BAS-P/BAS-U</p>
                    <p className="text-sm text-accent font-medium mt-1">20+ års erfarenhet</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Jag heter Tobias Ytterman och har över 20 års erfarenhet inom bygg, räddningstjänst och projektledning. 
                  Jag har arbetat som snickare, arbetsledare, BAS‑U/BAS‑P och kontrollansvarig i allt från småhus till 
                  vindkraftsprojekt och industribyggnation.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>Bor i Viksjö, arbetar i Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Briefcase className="w-5 h-5 text-accent" />
                    <span>Erbjuder platsbesök i hela Västernorrland</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-earth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-accent" />
                  <span>Varför välja mig?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>20+ års bred erfarenhet från olika byggprojekt</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Praktisk bakgrund som snickare och projektledare</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Erfarenhet från småhus till stora industriprojekt</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Digital hantering för effektiv kommunikation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Snabb återkoppling och personlig service</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Lokalkännedom i hela Västernorrlands kustland</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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