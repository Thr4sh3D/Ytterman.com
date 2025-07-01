import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Search, Globe, TrendingUp, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SiteAnalysisPage = () => {
  const [url, setUrl] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeWebsite = async () => {
    if (!url) return;
    
    setLoading(true);
    
    // Simulate analysis - in real implementation, this would call an API
    setTimeout(() => {
      setAnalysis({
        url: url,
        score: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
        issues: [
          { type: 'error', message: 'Saknar meta-beskrivning på 3 sidor', count: 3 },
          { type: 'warning', message: 'Långsamma laddningstider', count: 1 },
          { type: 'info', message: 'Optimeringsmöjligheter för bilder', count: 5 }
        ],
        recommendations: [
          'Lägg till meta-beskrivningar på alla sidor',
          'Optimera bildstorlekar för snabbare laddning',
          'Förbättra intern länkstruktur',
          'Lägg till strukturerad data (Schema.org)',
          'Optimera för mobila enheter'
        ],
        keywords: [
          { keyword: 'kontrollansvarig', position: 15, volume: 1200 },
          { keyword: 'BAS-P', position: 8, volume: 800 },
          { keyword: 'byggkontroll', position: 22, volume: 2100 }
        ]
      });
      setLoading(false);
    }, 2000);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getIssueIcon = (type) => {
    switch (type) {
      case 'error': return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning': return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default: return <CheckCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <>
      <AdvancedSEO 
        title="Gratis SEO-analys för Byggföretag | Ytterman"
        description="Få en kostnadsfri SEO-analys av din byggföretags webbplats. Upptäck förbättringsmöjligheter och öka din synlighet online. Specialiserat på byggbranschen."
        keywords="SEO analys byggföretag, webbplatsanalys, SEO audit, byggföretag marknadsföring, online synlighet bygg, SEO konsult byggbransch"
        url="https://ytterman.com/analys"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Gratis SEO-analys för Byggföretag
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Få en kostnadsfri analys av din webbplats och upptäck hur du kan 
                  förbättra din synlighet online och attrahera fler kunder.
                </p>
                
                <div className="max-w-2xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input
                        type="url"
                        placeholder="Ange din webbplats URL (t.ex. https://exempel.se)"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="pl-10 py-3 text-lg"
                      />
                    </div>
                    <Button 
                      onClick={analyzeWebsite}
                      disabled={!url || loading}
                      className="earth-gradient text-white hover:opacity-90 px-8 py-3 text-lg"
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Analyserar...
                        </>
                      ) : (
                        <>
                          <Search className="w-5 h-5 mr-2" />
                          Analysera
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-slate-500 mt-4">
                    Analysen är helt kostnadsfri och tar bara några sekunder
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Analysis Results */}
          {analysis && (
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                      Analysresultat för {analysis.url}
                    </h2>
                    <div className={`text-6xl font-bold ${getScoreColor(analysis.score)} mb-4`}>
                      {analysis.score}/100
                    </div>
                    <p className="text-slate-600">SEO-poäng</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Issues */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <AlertCircle className="w-5 h-5 mr-2 text-yellow-500" />
                          Identifierade problem
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {analysis.issues.map((issue, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              {getIssueIcon(issue.type)}
                              <div className="flex-1">
                                <p className="text-sm text-slate-700">{issue.message}</p>
                                <Badge variant="outline" className="mt-1">
                                  {issue.count} st
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Recommendations */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                          Rekommendationer
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {analysis.recommendations.slice(0, 5).map((rec, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-slate-700">{rec}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Keywords */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Search className="w-5 h-5 mr-2 text-blue-500" />
                          Nyckelord
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {analysis.keywords.map((kw, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <div>
                                <p className="font-medium text-slate-900">{kw.keyword}</p>
                                <p className="text-xs text-slate-500">{kw.volume} sökningar/mån</p>
                              </div>
                              <Badge variant={kw.position <= 10 ? "default" : "secondary"}>
                                #{kw.position}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* CTA */}
                  <div className="text-center bg-slate-50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Vill du förbättra dina resultat?
                    </h3>
                    <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                      Kontakta oss för en djupare analys och personlig SEO-strategi 
                      anpassad för byggföretag. Vi hjälper dig att öka din synlighet 
                      och attrahera fler kvalificerade kunder.
                    </p>
                    <Button 
                      onClick={() => window.location.href = '/kontakt'}
                      className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                    >
                      Få personlig SEO-konsultation
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Benefits Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-12">
                  Varför SEO är viktigt för byggföretag
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Fler kvalificerade leads",
                      description: "Attrahera kunder som aktivt söker efter dina tjänster"
                    },
                    {
                      title: "Lokal synlighet",
                      description: "Syns när folk söker efter byggföretag i ditt område"
                    },
                    {
                      title: "Konkurrensfördelar",
                      description: "Sticka ut från konkurrenterna med bättre online-närvaro"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
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