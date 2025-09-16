import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, BookOpen, CheckCircle, ArrowRight, Home } from 'lucide-react';

const GuidesPage = () => {
  const guides = [
    {
      id: 1,
      title: "Kontrollansvarigs roll i byggprocessen",
      description: "En komplett guide om vad en kontrollansvarig gör och varför det är viktigt för ditt byggprojekt.",
      readTime: "8 min",
      category: "Kontrollansvarig",
      href: "/guider/kontrollansvarig",
      content: [
        "Vad är en kontrollansvarig?",
        "Lagkrav och certifiering",
        "Kontrollansvarigs ansvar",
        "När behövs en kontrollansvarig?",
        "Kostnader och tidsåtgång"
      ]
    },
    {
      id: 2,
      title: "BAS-P vs BAS-U: Skillnader och när de behövs",
      description: "Förstå skillnaderna mellan BAS-P och BAS-U samt när respektive roll krävs i ditt projekt.",
      readTime: "6 min",
      category: "Säkerhetssamordning",
      href: "/guider/bas",
      content: [
        "Vad är BAS-P (projektering)?",
        "Vad är BAS-U (utförande)?",
        "Lagkrav enligt AFS 1999:3",
        "När krävs BAS-P respektive BAS-U?",
        "Samarbete mellan BAS-P och BAS-U"
      ]
    },
    {
      id: 3,
      title: "Bygglovsprocessen i Västernorrland",
      description: "Steg-för-steg guide genom bygglovsprocessen för kommunerna i Västernorrland.",
      readTime: "10 min",
      category: "Bygglov",
      href: "/guider/bygglov",
      content: [
        "Förberedelser inför bygglovsansökan",
        "Nödvändiga handlingar",
        "Kommunala skillnader",
        "Handläggningstider",
        "Vanliga fallgropar att undvika"
      ]
    },
    {
      id: 4,
      title: "Kvalitetskontroll under byggtiden",
      description: "Hur du säkerställer kvalitet genom hela byggprocessen med rätt kontroller vid rätt tidpunkt.",
      readTime: "12 min",
      category: "Kvalitetskontroll",
      href: "/guider/kvalitetskontroll",
      content: [
        "Planering av kvalitetskontroller",
        "Kritiska kontrollpunkter",
        "Dokumentation och rapportering",
        "Samarbete med entreprenörer",
        "Slutbesiktning och garantier"
      ]
    },
    {
      id: 5,
      title: "Digitala verktyg för byggprojekt",
      description: "Moderna digitala lösningar som effektiviserar byggprocessen och förbättrar kommunikationen.",
      readTime: "7 min",
      category: "Digitalisering",
      href: "/guider/digitala-verktyg",
      content: [
        "Projekthanteringsverktyg",
        "Digital dokumentation",
        "Kommunikationsplattformar",
        "Mobila inspektionsappar",
        "Integrering med befintliga system"
      ]
    },
    {
      id: 6,
      title: "Miljötänk i byggprocessen",
      description: "Hur du integrerar hållbarhet och miljöhänsyn i ditt byggprojekt från start till mål.",
      readTime: "9 min",
      category: "Miljö & Hållbarhet",
      href: "/guider/miljo",
      content: [
        "Miljöcertifieringar (BREEAM, LEED)",
        "Materialval och återvinning",
        "Energieffektivisering",
        "Avfallshantering på byggarbetsplatsen",
        "Långsiktig hållbarhet"
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Kontrollansvarig": "bg-blue-100 text-blue-800",
      "Säkerhetssamordning": "bg-red-100 text-red-800",
      "Bygglov": "bg-green-100 text-green-800",
      "Kvalitetskontroll": "bg-purple-100 text-purple-800",
      "Digitalisering": "bg-orange-100 text-orange-800",
      "Miljö & Hållbarhet": "bg-emerald-100 text-emerald-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <>
      <Helmet>
        <title>Guider - Trygg Byggprocess med Ytterman</title>
        <meta name="description" content="Omfattande guider om byggprocessen, kontrollansvarig, BAS-P/BAS-U och kvalitetskontroll. Expert råd från Tobias Ytterman." />
        <meta name="keywords" content="byggguider, kontrollansvarig guide, BAS-P guide, BAS-U guide, byggprocess, kvalitetskontroll" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-50">
        {/* Top Navigation Bar */}
        <div className="bg-white border-b border-stone-200 shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a href="/">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Hem
                  </Button>
                </a>
              </div>
              
              <div className="text-sm text-stone-500">
                Expertguider för Byggprocessen
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-stone-800 to-amber-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expertguider för Byggprocessen
              </h1>
              <p className="text-xl md:text-2xl text-stone-200 mb-8">
                Djupgående kunskap och praktiska råd från över 20 års erfarenhet inom byggbranschen
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span>{guides.length} Expertguider</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>Tobias Ytterman</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Certifierad Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Card key={guide.id} className="hover:shadow-lg transition-all duration-300 border-stone-200 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge className={getCategoryColor(guide.category)}>
                      {guide.category}
                    </Badge>
                    <div className="flex items-center text-stone-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {guide.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-stone-800 leading-tight group-hover:text-amber-700 transition-colors">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="text-stone-600">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-stone-700 text-sm mb-3">Innehåll:</h4>
                      <ul className="space-y-1">
                        {guide.content.map((item, index) => (
                          <li key={index} className="flex items-start text-sm text-stone-600">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href={guide.href}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors group"
                    >
                      Läs hela guiden
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-stone-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">
              Behöver du personlig rådgivning?
            </h2>
            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
              Kontakta mig för skräddarsydd hjälp med ditt specifika byggprojekt. 
              Med över 20 års erfarenhet hjälper jag dig navigera genom hela processen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Kontakta mig
              </a>
              <a 
                href="/tjanster" 
                className="border-2 border-stone-300 hover:border-stone-400 text-stone-700 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Se alla tjänster
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuidesPage;