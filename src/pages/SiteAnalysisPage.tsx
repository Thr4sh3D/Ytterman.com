import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOComponents';
import { TechnicalSEO } from '@/components/TechnicalSEO';
import { Search, CheckCircle, AlertTriangle, XCircle, BarChart3, Globe, Smartphone } from 'lucide-react';
import { useState } from 'react';

export default function SiteAnalysisPage() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const mockResults = {
    seo: {
      score: 78,
      issues: [
        { type: 'warning', message: 'Meta description saknas på 3 sidor' },
        { type: 'error', message: 'H1-taggar duplicerade på 2 sidor' },
        { type: 'success', message: 'Alla bilder har alt-text' }
      ]
    },
    performance: {
      score: 85,
      loadTime: 2.3,
      issues: [
        { type: 'warning', message: 'Bilder kan komprimeras för bättre prestanda' },
        { type: 'success', message: 'Bra caching-inställningar' }
      ]
    },
    mobile: {
      score: 92,
      issues: [
        { type: 'success', message: 'Responsiv design fungerar väl' },
        { type: 'warning', message: 'Vissa knappar kan vara större för touch' }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Gratis Webbplatsanalys - SEO & Prestanda | BuildControl"
        description="Få en kostnadsfri analys av din webbplats. Vi kontrollerar SEO, prestanda, mobilanpassning och ger konkreta förbättringsförslag."
        keywords="webbplatsanalys, SEO analys, prestanda test, mobilanpassning, gratis, BuildControl"
        url="https://buildcontrol.se/analys"
      />
      <TechnicalSEO />
      
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gratis Webbplatsanalys</h1>
            <p className="text-xl text-purple-50 max-w-2xl">
              Få en kostnadsfri analys av din webbplats och upptäck förbättringsmöjligheter
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {!analysisComplete ? (
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Analysera din webbplats
                  </h2>
                  
                  <form onSubmit={handleAnalysis} className="max-w-md mx-auto">
                    <div className="flex">
                      <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://dinwebbplats.se"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isAnalyzing}
                        className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-r-lg font-medium transition-colors disabled:opacity-50"
                      >
                        {isAnalyzing ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Analyserar...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Search className="w-4 h-4 mr-2" />
                            Analysera
                          </div>
                        )}
                      </button>
                    </div>
                  </form>
                  
                  <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">SEO-analys</h3>
                      <p className="text-gray-600">
                        Vi kontrollerar meta-taggar, rubriker, innehåll och teknisk SEO
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Prestanda</h3>
                      <p className="text-gray-600">
                        Laddningstider, optimering och användarupplevelse
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Mobilanpassning</h3>
                      <p className="text-gray-600">
                        Responsiv design och mobilvänlighet
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Analysresultat för {url}
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* SEO Score */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">SEO</h3>
                        <div className="text-2xl font-bold text-orange-600">{mockResults.seo.score}/100</div>
                      </div>
                      <div className="space-y-2">
                        {mockResults.seo.issues.map((issue, index) => (
                          <div key={index} className="flex items-start">
                            {issue.type === 'success' && <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />}
                            {issue.type === 'warning' && <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />}
                            {issue.type === 'error' && <XCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />}
                            <span className="text-sm text-gray-700">{issue.message}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Performance Score */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">Prestanda</h3>
                        <div className="text-2xl font-bold text-green-600">{mockResults.performance.score}/100</div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Laddningstid: <span className="font-semibold">{mockResults.performance.loadTime}s</span></p>
                      </div>
                      <div className="space-y-2">
                        {mockResults.performance.issues.map((issue, index) => (
                          <div key={index} className="flex items-start">
                            {issue.type === 'success' && <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />}
                            {issue.type === 'warning' && <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />}
                            <span className="text-sm text-gray-700">{issue.message}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Mobile Score */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">Mobil</h3>
                        <div className="text-2xl font-bold text-green-600">{mockResults.mobile.score}/100</div>
                      </div>
                      <div className="space-y-2">
                        {mockResults.mobile.issues.map((issue, index) => (
                          <div key={index} className="flex items-start">
                            {issue.type === 'success' && <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />}
                            {issue.type === 'warning' && <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />}
                            <span className="text-sm text-gray-700">{issue.message}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Vill du ha hjälp med förbättringarna?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Vi hjälper dig att optimera din webbplats för bättre SEO, prestanda och användarupplevelse.
                    </p>
                    <button className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-3 rounded-lg font-medium transition-colors">
                      Kontakta oss för hjälp
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}