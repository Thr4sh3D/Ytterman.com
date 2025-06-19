import { FileCheck, HardHat, Package, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Services = () => {
  return (
    <section id="tjanster" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Mina <span className="text-gradient">Tjänster</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professionell hjälp genom hela byggprocessen – från bygglov till slutbesked
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Kontrollansvarig */}
          <Card className="shadow-earth hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Kontrollansvarig (KA)</CardTitle>
              <CardDescription className="text-lg">
                Från bygglov till slutbesked
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Jag hjälper dig med kontrollplaner, dokumentation och kommunikation med byggnadsnämnden. 
                Som kontrollansvarig säkerställer jag att ditt byggprojekt följer alla regler och föreskrifter.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Kontrollplan och teknisk dokumentation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Kommunikation med byggnadsnämnden</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Slutkontroll och slutbesked</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Löpande uppföljning under byggtiden</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* BAS-P/BAS-U */}
          <Card className="shadow-earth hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl">BAS‑P / BAS‑U</CardTitle>
              <CardDescription className="text-lg">
                Arbetsmiljöansvar från planering till färdigt bygge
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                För dig som vill ha ett säkert och lagligt byggprojekt utan krångel. 
                Jag ansvarar för arbetsmiljön under hela byggprocessen.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Arbetsmiljöplan (BAS-P)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Koordinering under utförande (BAS-U)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Säkerhetsronder och dokumentation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Utbildning och information till personal</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-earth hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Komplett Paket</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Kombinera KA + BAS‑P/U för en smidig och kostnadseffektiv lösning. 
                Ett kontaktperson genom hela projektet.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-earth hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">BRF-Projekt</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Specialiserad hjälp för bostadsrättsföreningar med större ombyggnads- 
                eller renoveringsprojekt.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};