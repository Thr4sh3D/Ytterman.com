import React from 'react';
import { SEO } from "@/components/SEO";
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calculator, Clock, Zap, Home, ArrowRight, Phone, Mail } from 'lucide-react';

const EnergiberakningOnlinePage = () => {
  const benefits = [
    {
      title: "Snabb och enkel",
      description: "Få din energiberäkning klar på bara några minuter direkt online",
      icon: <Clock className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Professionell kvalitet",
      description: "Samma noggrannhet som traditionella energiberäkningar",
      icon: <Calculator className="w-8 h-8 text-green-600" />
    },
    {
      title: "Kostnadeffektivt",
      description: "Betydligt lägre kostnad än traditionella energiberäkningar",
      icon: <Zap className="w-8 h-8 text-amber-600" />
    }
  ];

  const features = [
    "Automatiserad beräkning baserat på dina uppgifter",
    "Professionell rapport som uppfyller alla krav",
    "Direkt nedladdning när beräkningen är klar",
    "Stöd för alla typer av byggnader",
    "Kvalitetssäkrad av certifierade experter",
    "24/7 tillgänglighet - beräkna när det passar dig"
  ];

  return (
    <>
      <SEO
        title="Energiberäkning Online Västernorrland - Snabb & Professionell | Ytterman"
        description="Gör din energiberäkning online snabbt och enkelt. Professionell kvalitet till fast pris 2,999 kr. Sundsvall, Härnösand, Sollefteå. Svar inom minuter!"
        keywords="energiberäkning online, energiberäkning bygglov, energiberäkning pris, energiberäkning snabb, energiberäkning Västernorrland, Sundsvall, Härnösand"
        url="https://ytterman.com/energiberakning-online"
        type="webpage"
      />
      
      <CanonicalUrl path="/energiberakning-online" />

      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-blue-50/30 to-stone-50">

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-amber-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Ny tjänst
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Energiberäkning Online
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Snabb, enkel och professionell energiberäkning direkt online. 
                Perfekt för bygglov, energideklarationer och renoveringsprojekt.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Klar på minuter</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  <span>Professionell kvalitet</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span>Endast 2,999 kr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              Varför välja vår online-tjänst?
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Samma professionella kvalitet som traditionella energiberäkningar, 
              men snabbare, enklare och mer kostnadseffektivt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-stone-200 hover:shadow-lg transition-shadow">
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

          {/* Features */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 mb-16">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">
              Vad ingår i tjänsten?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Section */}
          <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-8 text-center mb-16">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">
              Transparent prissättning
            </h3>
            <div className="text-4xl font-bold text-blue-600 mb-2">
              2,999 kr
            </div>
            <p className="text-stone-600 mb-6">
              Fast pris oavsett byggnadens storlek eller komplexitet
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-stone-600">
              <span>✓ Inga dolda kostnader</span>
              <span>✓ Professionell rapport</span>
              <span>✓ Direkt nedladdning</span>
            </div>
          </div>
        </div>

        {/* Online Tool Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-stone-800 mb-4">
                Starta din energiberäkning nu
              </h2>
              <p className="text-xl text-stone-600 mb-6">
                Fyll i dina uppgifter nedan så får du din professionella energiberäkning på bara några minuter.
              </p>
            </div>

            {/* Embedded Tool */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-stone-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-center gap-2 text-stone-600 mb-2">
                  <Calculator className="w-5 h-5" />
                  <span className="font-medium">Energiberäkning Online</span>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg border border-stone-200">
                <iframe 
                  src="https://energi.holidaygroup.se/?utm_source=ytterman&pr=2999" 
                  width="100%" 
                  height="2200" 
                  style={{border: 0, display: 'block'}}
                  title="Energiberäkning Online"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-stone-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">
              Behöver du hjälp?
            </h2>
            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
              Har du frågor om energiberäkningen eller behöver personlig rådgivning? 
              Kontakta mig så hjälper jag dig gärna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt?service=energiberakning-online" 
                className="earth-gradient hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Kontakta mig
              </a>
              <a 
                href="tel:+46706424242" 
                className="border-2 border-stone-300 hover:border-stone-400 text-stone-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Ring direkt
              </a>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Relaterade tjänster
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Energideklaration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Komplett energideklaration för din fastighet med energiklass och åtgärdsförslag.
                </CardDescription>
                <a 
                  href="/energideklaration" 
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
                >
                  Läs mer <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Kontrollansvarig</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Professionell kontrollansvarig för ditt byggprojekt enligt gällande regelverk.
                </CardDescription>
                <a 
                  href="/kontrollansvarig" 
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
                >
                  Läs mer <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">BAS-P & BAS-U</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Säkerhetssamordning för projektering och utförande av ditt byggprojekt.
                </CardDescription>
                <a 
                  href="/bas-p" 
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
                >
                  Läs mer <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default EnergiberakningOnlinePage;