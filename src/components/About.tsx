import { Award, Users, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const About = () => {
  return (
    <section id="om-mig" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Om mig – Tobias Ytterman
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Jag heter Tobias Ytterman och har över 20 års erfarenhet inom bygg, räddningstjänst och projektledning. 
              Jag har arbetat som snickare, arbetsledare, BAS‑U/BAS‑P och kontrollansvarig i allt från småhus till 
              vindkraftsprojekt och industribyggnation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Min bakgrund som snickare och arbetsledare ger mig en unik förståelse för byggprocessen 
                  från grunden. Jag vet vad som krävs på byggarbetsplatsen och kan därför erbjuda praktiska 
                  och genomförbara lösningar som kontrollansvarig.
                </p>
                
                <p className="text-muted-foreground">
                  Genom åren har jag arbetat med allt från småhusprojekt till stora industribyggnationer 
                  och vindkraftsprojekt. Denna breda erfarenhet gör att jag kan hantera projekt av olika 
                  storlekar och komplexitet med trygghet och professionalitet.
                </p>

                <p className="text-muted-foreground">
                  Som kontrollansvarig och BAS-U/BAS-P fokuserar jag på tydlig kommunikation, digital 
                  hantering och att vara tillgänglig för mina kunder. Jag tror på att bygga långsiktiga 
                  relationer baserade på förtroende och kvalitet.
                </p>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="shadow-earth">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">20+</h3>
                  <p className="text-muted-foreground">År inom byggbranschen</p>
                </CardContent>
              </Card>

              <Card className="shadow-earth">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">100+</h3>
                  <p className="text-muted-foreground">Genomförda projekt</p>
                </CardContent>
              </Card>

              <Card className="shadow-earth">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">24h</h3>
                  <p className="text-muted-foreground">Svarstid på förfrågningar</p>
                </CardContent>
              </Card>

              <Card className="shadow-earth">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">100%</h3>
                  <p className="text-muted-foreground">Certifierad och försäkrad</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="bg-card p-8 rounded-xl shadow-earth">
            <h3 className="text-2xl font-bold text-center mb-8">Min bakgrund</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
                <h4 className="font-bold mb-2">Snickare & Arbetsledare</h4>
                <p className="text-sm text-muted-foreground">
                  Började som snickare och utvecklades till arbetsledare. Praktisk erfarenhet från byggarbetsplatsen.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h4 className="font-bold mb-2">BAS-U & BAS-P</h4>
                <p className="text-sm text-muted-foreground">
                  Certifiering inom byggarbetsmiljö. Arbetat med projekt från småhus till vindkraft.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h4 className="font-bold mb-2">Kontrollansvarig</h4>
                <p className="text-sm text-muted-foreground">
                  Certifierad KA enligt PBL. Kombinerar praktisk erfarenhet med regelkunskap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};