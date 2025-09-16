import React from 'react';
import { GuideLayout } from '@/components/GuideLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Home, Calculator, Award, TrendingDown, Building, FileText } from 'lucide-react';

const EnergiGuide = () => {
  const guideData = {
    title: "Energideklaration - Komplett Guide",
    description: "Allt du behöver veta om energideklaration för din fastighet",
    readTime: "8 min",
    category: "Energi & Miljö",
    lastUpdated: "2024-12-19"
  };

  const energyClasses = [
    { class: "A", color: "bg-green-600", description: "Mycket låg energiförbrukning" },
    { class: "B", color: "bg-green-500", description: "Låg energiförbrukning" },
    { class: "C", color: "bg-yellow-500", description: "Måttlig energiförbrukning" },
    { class: "D", color: "bg-orange-500", description: "Hög energiförbrukning" },
    { class: "E", color: "bg-red-500", description: "Mycket hög energiförbrukning" },
    { class: "F", color: "bg-red-600", description: "Extremt hög energiförbrukning" },
    { class: "G", color: "bg-red-700", description: "Oacceptabelt hög energiförbrukning" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Bokning och planering",
      description: "Vi bokar en tid för energibesiktning och går igenom vad som behövs för din fastighet.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Energibesiktning",
      description: "Grundlig besiktning av byggnadens energisystem, isolering och installationer.",
      icon: <Home className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Energiberäkning",
      description: "Beräkning av energiprestanda och klassificering enligt gällande standarder.",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Energideklaration",
      description: "Färdig energideklaration med energiklass och konkreta åtgärdsförslag.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Sänk energikostnaderna",
      description: "Få konkreta förslag på energibesparande åtgärder som kan minska dina energikostnader med upp till 30%.",
      icon: <TrendingDown className="w-8 h-8 text-green-600" />
    },
    {
      title: "Öka fastighetsvärdet",
      description: "En bra energiklass kan öka din fastighets marknadsvärde och göra den mer attraktiv för köpare.",
      icon: <Building className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Uppfyll lagkrav",
      description: "Energideklaration är obligatorisk vid försäljning och uthyrning av fastigheter över 50 m².",
      icon: <FileText className="w-8 h-8 text-purple-600" />
    }
  ];

  return (
    <GuideLayout {...guideData}>
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Vad är en energideklaration?</h2>
          <div className="prose prose-lg max-w-none text-stone-600">
            <p>
              En energideklaration är ett dokument som visar en byggnads energiprestanda och ger 
              information om energiförbrukning, energiklass samt förslag på energibesparande åtgärder. 
              Det är ett viktigt verktyg för att förstå och förbättra din fastighets energieffektivitet.
            </p>
            <p>
              Energideklarationen är obligatorisk vid försäljning och uthyrning av byggnader över 50 m² 
              och ska uppdateras regelbundet för att säkerställa att informationen är aktuell.
            </p>
          </div>
        </section>

        {/* When is it required */}
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">När behövs en energideklaration?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-primary" />
                  Obligatoriska situationer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Vid försäljning av fastighet över 50 m²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Vid uthyrning av lokaler över 50 m²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>För offentliga byggnader över 250 m²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Vid större renoveringar</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Frivilliga situationer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>För att identifiera energibesparingar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Inför planerade renoveringar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>För miljöcertifiering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>För att öka fastighetsvärdet</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Energy Classes */}
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Energiklasser</h2>
          <p className="text-stone-600 mb-6">
            Energiklassning sker på en skala från A till G, där A är den bästa klassen med lägst 
            energiförbrukning och G är den sämsta klassen.
          </p>
          <div className="grid gap-3">
            {energyClasses.map((energyClass) => (
              <div key={energyClass.class} className="flex items-center gap-4 p-4 bg-white rounded-lg border">
                <div className={`w-12 h-12 ${energyClass.color} rounded-lg flex items-center justify-center text-white font-bold text-xl`}>
                  {energyClass.class}
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800">Energiklass {energyClass.class}</h3>
                  <p className="text-stone-600">{energyClass.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Så går processen till</h2>
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

        {/* Benefits */}
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Fördelar med energideklaration</h2>
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

        {/* What we check */}
        <section>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Vad kontrollerar vi?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Byggnadsskal</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Vägg- och takisolering
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Fönster och dörrar
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Köldbryggor
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Lufttäthet
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Installationer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Värmesystem
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Ventilationssystem
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Varmvattensystem
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Belysning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Energikällor</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Förnybar energi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Solceller/solfångare
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Värmepumpar
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Energilagring
                  </li>
                </ul>
              </CardContent>
            </Card>
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
                    <span>Småhus (50-150 m²)</span>
                    <Badge variant="secondary">8,000 - 12,000 kr</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Större villa (150-300 m²)</span>
                    <Badge variant="secondary">12,000 - 18,000 kr</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Flerbostadshus</span>
                    <Badge variant="secondary">Offert efter besiktning</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Kommersiella lokaler</span>
                    <Badge variant="secondary">Offert efter besiktning</Badge>
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
                    <span>Beräkning och analys</span>
                    <Badge variant="outline">3-5 dagar</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Färdig energideklaration</span>
                    <Badge variant="outline">1-2 veckor</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Giltighet</span>
                    <Badge variant="outline">10 år</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            Behöver du energideklaration?
          </h2>
          <p className="text-xl text-stone-600 mb-6">
            Kontakta mig för en kostnadsfri konsultation och offert anpassad efter din fastighet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/kontakt?service=energideklaration" 
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Begär offert
            </a>
            <a 
              href="/energideklaration" 
              className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Läs mer om tjänsten
            </a>
          </div>
        </section>
      </div>
    </GuideLayout>
  );
};

export default EnergiGuide;