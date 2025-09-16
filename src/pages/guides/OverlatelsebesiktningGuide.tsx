import React from 'react';
import { GuideLayout } from '@/components/GuideLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Search, Camera, FileText, AlertTriangle, Home, Shield, Clock } from 'lucide-react';

const OverlatelsebesiktningGuide = () => {
  const guideData = {
    title: "Överlåtelsebesiktning - Komplett Guide",
    description: "Allt du behöver veta om överlåtelsebesiktning inför fastighetsförsäljning",
    readTime: "10 min",
    category: "Fastighetsbesiktning",
    lastUpdated: "2024-12-19"
  };

  const inspectionAreas = [
    {
      title: "Konstruktion & Byggnadsskal",
      items: [
        "Grund och källare",
        "Bärande konstruktioner",
        "Väggar och tak",
        "Fönster och dörrar",
        "Balkonger och uteplatser"
      ],
      icon: <Home className="w-6 h-6" />
    },
    {
      title: "Installationer",
      items: [
        "Elinstallationer och säkringar",
        "VVS-system och rörledningar",
        "Ventilationssystem",
        "Värmesystem",
        "Avloppssystem"
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Fukt & Miljö",
      items: [
        "Fuktmätningar",
        "Ventilationskontroll",
        "Radonmätning",
        "Asbest och PCB",
        "Mögel och bakterier"
      ],
      icon: <AlertTriangle className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Bokning och förberedelse",
      description: "Vi bokar en tid som passar dig och går igenom vad som ska besiktigas. Du får en checklista över vad som behöver vara tillgängligt.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Besiktning på plats",
      description: "Grundlig genomgång av hela fastigheten, både invändigt och utvändigt. Vi dokumenterar alla iakttagelser med foton.",
      icon: <Search className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Dokumentation",
      description: "Alla fynd fotograferas och dokumenteras noggrant för att skapa en komplett bild av fastighetens skick.",
      icon: <Camera className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Besiktningsrapport",
      description: "Detaljerad rapport med alla iakttagelser, foton och rekommendationer levereras inom 48 timmar.",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Trygg försäljning",
      description: "Undvik överraskningar och tvister efter försäljning genom att dokumentera fastighetens skick i förväg.",
      icon: <Shield className="w-8 h-8 text-green-600" />
    },
    {
      title: "Rätt pris",
      description: "Få en realistisk bild av fastighetens värde och eventuella renoveringsbehov som påverkar priset.",
      icon: <Home className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Snabbare försäljning",
      description: "Köpare känner sig tryggare när de vet att fastigheten är professionellt besiktigad.",
      icon: <Clock className="w-8 h-8 text-purple-600" />
    }
  ];

  const commonIssues = [
    {
      category: "Fuktproblem",
      severity: "Hög",
      description: "Fukt i källare, badrum eller kök kan orsaka stora skador",
      color: "bg-red-100 text-red-800"
    },
    {
      category: "Elinstallationer",
      severity: "Hög",
      description: "Gamla eller felaktiga elinstallationer kan vara brandfarliga",
      color: "bg-red-100 text-red-800"
    },
    {
      category: "Takskador",
      severity: "Medel",
      description: "Läckage eller skador på tak kan leda till fuktproblem",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      category: "Ventilation",
      severity: "Medel",
      description: "Dålig ventilation kan orsaka fukt- och luftkvalitetsproblem",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      category: "Ytskador",
      severity: "Låg",
      description: "Kosmetiska skador som påverkar fastighetens utseende",
      color: "bg-green-100 text-green-800"
    }
  ];

  return (
    <GuideLayout {...guideData}>
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Vad är en överlåtelsebesiktning?</h2>
          <div className="prose prose-lg max-w-none text-stone-600">
            <p>
              En överlåtelsebesiktning är en teknisk undersökning av en fastighet som genomförs 
              inför försäljning. Syftet är att identifiera eventuella fel, brister och 
              underhållsbehov som kan påverka fastighetens värde eller säkerhet.
            </p>
            <p>
              Besiktningen utförs av en certifierad besiktningsman och resulterar i en detaljerad 
              rapport som ger både säljare och köpare en objektiv bild av fastighetens skick. 
              Detta skapar trygghet för båda parter och kan förebygga framtida tvister.
            </p>
          </div>
        </section>

        {/* Why needed */}
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Varför behövs en överlåtelsebesiktning?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  För säljaren
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Undvik överraskningar under försäljningsprocessen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Sätt rätt pris baserat på fastighetens faktiska skick</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Minska risken för prisavdrag efter köparens besiktning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Visa transparens och seriositet gentemot köpare</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-blue-600" />
                  För köparen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Få en objektiv bedömning av fastighetens skick</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Identifiera framtida underhållsbehov och kostnader</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Underlag för prisförhandling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Trygghet i köpbeslutet</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What we inspect */}
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Vad kontrollerar vi?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {inspectionAreas.map((area, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="text-primary">{area.icon}</div>
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-stone-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Så går besiktningen till</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-primary">{step.icon}</div>
                    <h3 className="text-xl font-semibold text-stone-800">{step.title}</h3>
                  </div>
                  <p className="text-stone-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common issues */}
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Vanliga fel och brister</h2>
          <p className="text-stone-600 mb-6">
            Här är de vanligaste problemen vi upptäcker vid överlåtelsebesiktningar och 
            hur allvarliga de kan vara för fastigheten.
          </p>
          <div className="space-y-4">
            {commonIssues.map((issue, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-stone-800">{issue.category}</h3>
                    <Badge className={issue.color}>{issue.severity} risk</Badge>
                  </div>
                  <p className="text-stone-600 text-sm">{issue.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Fördelar med överlåtelsebesiktning</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cost and timeline */}
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Kostnad och tidsåtgång</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Priser</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Lägenhet (50-100 m²)</span>
                    <Badge variant="secondary">8,000 - 12,000 kr</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Villa (100-200 m²)</span>
                    <Badge variant="secondary">12,000 - 18,000 kr</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Större villa (200+ m²)</span>
                    <Badge variant="secondary">18,000 - 25,000 kr</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Specialmätningar</span>
                    <Badge variant="secondary">Tillkommer vid behov</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tidsåtgång</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Besiktning på plats</span>
                    <Badge variant="outline">2-4 timmar</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rapportskrivning</span>
                    <Badge variant="outline">1-2 dagar</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Färdig rapport</span>
                    <Badge variant="outline">24-48 timmar</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Uppföljning</span>
                    <Badge variant="outline">Efter behov</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            Behöver du överlåtelsebesiktning?
          </h2>
          <p className="text-xl text-stone-600 mb-6">
            Kontakta mig för en kostnadsfri konsultation och offert anpassad efter din fastighet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/kontakt?service=overlatelsebesiktning" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Boka besiktning
            </a>
            <a 
              href="/overlatelsebesiktning" 
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Läs mer om tjänsten
            </a>
          </div>
        </section>
      </div>
    </GuideLayout>
  );
};

export default OverlatelsebesiktningGuide;