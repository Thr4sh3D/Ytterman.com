import { Clock, Package, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="priser" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tydliga <span className="text-gradient">Priser</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Alla priser inkluderar moms. Kontakta mig för fast pris, offert eller ett förutsättningslöst samtal om ditt projekt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Villa/Tillbyggnad */}
          <Card className="shadow-earth hover:shadow-lg transition-shadow duration-300 relative">
            <CardHeader>
              <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Villa/Tillbyggnad</CardTitle>
              <CardDescription>Perfekt för privatpersoner</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Kontrollansvarig (KA)</span>
                    <span className="text-lg font-bold text-primary">18 000–30 000 kr</span>
                  </div>
                </div>
                <div className="border-b border-border pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">BAS‑P/U</span>
                    <span className="text-lg font-bold text-primary">8 000–12 000 kr</span>
                  </div>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Paketpris</span>
                    <span className="text-xl font-bold text-accent">24 000–38 000 kr</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Spara pengar med vårt kombinerade paket</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BRF/Lokal */}
          <Card className="shadow-earth hover:shadow-lg transition-shadow duration-300 relative">
            <CardHeader>
              <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">BRF eller Lokal</CardTitle>
              <CardDescription>För större projekt</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-8">
                  <span className="text-3xl font-bold text-primary">30 000–60 000 kr</span>
                  <p className="text-muted-foreground mt-2">Beroende på omfattning</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Anpassat efter projektets storlek</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Omfattande dokumentation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Löpande projektuppföljning</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Timpris */}
          <Card className="shadow-earth hover:shadow-lg transition-shadow duration-300 relative md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Timpris</CardTitle>
              <CardDescription>För tilläggsarbete och konsultation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-8">
                  <span className="text-3xl font-bold text-primary">1 000–1 400 kr</span>
                  <p className="text-muted-foreground mt-2">Per timme</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Tilläggsarbete</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Extra möten</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Platsbesök</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Konsultation</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-card p-8 rounded-2xl shadow-earth max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Behöver du en offert?</h3>
            <p className="text-muted-foreground mb-6">
              Kontakta mig för fast pris, offert eller ett förutsättningslöst samtal om ditt projekt. 
              Jag ger alltid en kostnadsfri första konsultation.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="earth-gradient text-white hover:opacity-90"
            >
              Begär offert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};