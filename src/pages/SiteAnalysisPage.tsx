import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CheckCircle, AlertTriangle, XCircle, Zap, Search, Smartphone, Shield } from 'lucide-react';

const SiteAnalysisPage = () => {
  const [analysisData, setAnalysisData] = useState({
    performance: 95,
    seo: 98,
    accessibility: 96,
    bestPractices: 94,
    loadTime: 1.2,
    mobileScore: 97
  });

  const seoChecks = [
    { name: "Meta-taggar", status: "pass", description: "Alla sidor har optimerade meta-taggar" },
    { name: "Strukturerad data", status: "pass", description: "Schema.org markup implementerat" },
    { name: "Sitemap", status: "pass", description: "XML sitemap genererad och indexerad" },
    { name: "Robots.txt", status: "pass", description: "Korrekt robots.txt konfiguration" },
    { name: "Canonical URLs", status: "pass", description: "Canonical taggar på alla sidor" },
    { name: "Open Graph", status: "pass", description: "Social media meta-taggar" },
    { name: "Laddningstid", status: "pass", description: "Under 2 sekunder laddningstid" },
    { name: "Mobiloptimering", status: "pass", description: "Responsiv design implementerad" }
  ];

  const performanceMetrics = [
    { name: "First Contentful Paint", value: "0.8s", status: "excellent" },
    { name: "Largest Contentful Paint", value: "1.2s", status: "excellent" },
    { name: "Cumulative Layout Shift", value: "0.05", status: "excellent" },
    { name: "First Input Delay", value: "12ms", status: "excellent" }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "SEO Analys", url: "https://ytterman.com/analys" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
      case 'excellent':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'fail':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <>
      <AdvancedSEO 
        title="SEO & Prestanda Analys - Teknisk Optimering | Ytterman"
        description="Teknisk SEO-analys av Yttermans webbplats. Se prestanda, tillgänglighet och SEO-poäng för optimal användarupplevelse och söksynlighet."
        keywords="SEO analys, webbprestanda, Core Web Vitals, teknisk SEO, tillgänglighet, mobiloptimering"
        url="https://ytterman.com/analys"
        breadcrumbs={breadcrumbs}
        organization={true}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Breadcrumbs */}
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  SEO & Prestanda Analys
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Teknisk analys av webbplatsens prestanda, SEO och användarupplevelse. 
                  Vi optimerar kontinuerligt för bästa möjliga resultat.
                </p>
              </div>
            </div>
          </section>

          {/* Performance Scores */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Prestanda Översikt
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  <div className="text-center p-6 bg-slate-50 rounded-xl">
                    <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className={`text-4xl font-bold mb-2 ${getScoreColor(analysisData.performance)}`}>
                      {analysisData.performance}
                    </div>
                    <h3 className="font-semibold text-slate-900">Prestanda</h3>
                  </div>
                  
                  <div className="text-center p-6 bg-slate-50 rounded-xl">
                    <Search className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className={`text-4xl font-bold mb-2 ${getScoreColor(analysisData.seo)}`}>
                      {analysisData.seo}
                    </div>
                    <h3 className="font-semibold text-slate-900">SEO</h3>
                  </div>
                  
                  <div className="text-center p-6 bg-slate-50 rounded-xl">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className={`text-4xl font-bold mb-2 ${getScoreColor(analysisData.accessibility)}`}>
                      {analysisData.accessibility}
                    </div>
                    <h3 className="font-semibold text-slate-900">Tillgänglighet</h3>
                  </div>
                  
                  <div className="text-center p-6 bg-slate-50 rounded-xl">
                    <Smartphone className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className={`text-4xl font-bold mb-2 ${getScoreColor(analysisData.mobileScore)}`}>
                      {analysisData.mobileScore}
                    </div>
                    <h3 className="font-semibold text-slate-900">Mobil</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Web Vitals */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Core Web Vitals
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-slate-900 text-sm">
                          {metric.name}
                        </h3>
                        {getStatusIcon(metric.status)}
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SEO Checklist */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  SEO Kontrollista
                </h2>
                
                <div className="space-y-4">
                  {seoChecks.map((check, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg">
                      {getStatusIcon(check.status)}
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {check.name}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {check.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technical Details */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Tekniska Detaljer
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-4">Prestanda</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Optimerade bilder med lazy loading</li>
                      <li>• Minifierad CSS och JavaScript</li>
                      <li>• CDN för snabbare laddning</li>
                      <li>• Komprimering aktiverad</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-4">SEO</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Strukturerad data (Schema.org)</li>
                      <li>• Optimerade meta-taggar</li>
                      <li>• XML sitemap</li>
                      <li>• Canonical URLs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-4">Säkerhet</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• HTTPS aktiverat</li>
                      <li>• Säkra headers</li>
                      <li>• Content Security Policy</li>
                      <li>• Regelbundna säkerhetsuppdateringar</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default SiteAnalysisPage;