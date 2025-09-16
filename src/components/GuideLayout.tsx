import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowLeft, CheckCircle, Home } from 'lucide-react';

interface GuideLayoutProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  children: React.ReactNode;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string;
}

export const GuideLayout = ({ 
  title, 
  description, 
  category, 
  readTime, 
  children,
  seoTitle,
  seoDescription,
  keywords
}: GuideLayoutProps) => {
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
        <title>{seoTitle || `${title} - Trygg Byggprocess med Ytterman`}</title>
        <meta name="description" content={seoDescription || description} />
        {keywords && <meta name="keywords" content={keywords} />}
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-50">
        {/* Top Navigation Bar - More prominent */}
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
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-stone-600 hover:bg-stone-100"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Tillbaka
                </Button>
              </div>
              
              <div className="text-sm text-stone-500">
                Expertguider för Byggprocessen
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-stone-800 to-amber-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge className={getCategoryColor(category)}>
                  {category}
                </Badge>
                <div className="flex items-center text-stone-200">
                  <Clock className="w-4 h-4 mr-1" />
                  {readTime}
                </div>
                <div className="flex items-center text-stone-200">
                  <User className="w-4 h-4 mr-1" />
                  Tobias Ytterman
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h1>
              <p className="text-xl text-stone-200">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 md:p-12">
              {children}
            </div>
          </div>
        </div>

        {/* Navigation Section - Bottom */}
        <div className="bg-stone-50 py-8 border-t border-stone-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
              <a href="/">
                <Button 
                  className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Tillbaka till startsidan
                </Button>
              </a>
              <a href="/guider">
                <Button 
                  variant="outline" 
                  className="border-stone-300 hover:border-stone-400 text-stone-700 px-6 py-3"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Alla guider
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-stone-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-stone-800 mb-4">
              Behöver du hjälp med ditt projekt?
            </h2>
            <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
              Kontakta mig för personlig rådgivning och professionell hjälp med ditt byggprojekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Kontakta mig
              </a>
              <a 
                href="/tjanster" 
                className="border-2 border-stone-300 hover:border-stone-400 text-stone-700 px-6 py-3 rounded-lg font-semibold transition-colors"
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