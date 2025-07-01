import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Search, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

export default function SiteAnalysisPage() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<null | {
    score: number;
    issues: Array<{
      type: 'error' | 'warning' | 'success';
      message: string;
    }>;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis with a delay
    setTimeout(() => {
      // Mock results
      setResults({
        score: 78,
        issues: [
          { type: 'success', message: 'Sidan har en tydlig titel och meta-beskrivning' },
          { type: 'success', message: 'Sidan laddar snabbt (under 3 sekunder)' },
          { type: 'warning', message: 'Några bilder saknar alt-text för tillgänglighet' },
          { type: 'warning', message: 'Mobilanpassningen kan förbättras' },
          { type: 'error', message: 'Saknar SSL-certifikat (HTTPS)' },
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Webbplatsanalys | Byggkontroll & Teknisk Konsultation</title>
        <meta name="description" content="Analysera din webbplats för att hitta förbättringsmöjligheter inom SEO, prestanda och användarvänlighet." />
        <meta name="keywords" content="webbplatsanalys, SEO, prestanda, användarvänlighet" />
      </Helmet>
      
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Webbplatsanalys</h1>
            <p className="text-xl text-green-50 max-w-2xl">
              Analysera din webbplats för att hitta förbättringsmöjligheter inom SEO, prestanda och användarvänlighet.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Analysera din webbplats
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                      Webbplatsens URL
                    </label>
                    <div className="flex">
                      <input
                        type="url"
                        id="url"
                        placeholder="https://exempel.se"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                      <button
                        type="submit"
                        disabled={isAnalyzing}
                        className={`bg-green-600 text-white px-6 py-2 rounded-r-lg font-medium transition-colors ${isAnalyzing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-700'}`}
                      >
                        {isAnalyzing ? 'Analyserar...' : 'Analysera'}
                      </button>
                    </div>
                  </div>
                </form>
                
                {isAnalyzing && (
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600 mb-4"></div>
                    </div>
                    <p className="text-gray-700">Analyserar webbplatsen...</p>
                  </div>
                )}
                
                {results && !isAnalyzing && (
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-gray-900">Resultat</h3>
                      <div className="flex items-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                          results.score >= 80 ? 'bg-green-500' : 
                          results.score >= 60 ? 'bg-yellow-500' : 
                          'bg-red-500'
                        }`}>
                          {results.score}
                        </div>
                        <span className="ml-2 text-gray-700">poäng</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {results.issues.map((issue, index) => (
                        <div 
                          key={index} 
                          className={`flex items-start p-4 rounded-lg ${
                            issue.type === 'success' ? 'bg-green-50' : 
                            issue.type === 'warning' ? 'bg-yellow-50' : 
                            'bg-red-50'
                          }`}
                        >
                          {issue.type === 'success' && <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />}
                          {issue.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />}
                          {issue.type === 'error' && <XCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />}
                          <span className={`${
                            issue.type === 'success' ? 'text-green-700' : 
                            issue.type === 'warning' ? 'text-yellow-700' : 
                            'text-red-700'
                          }`}>
                            {issue.message}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Vill du förbättra din webbplats?
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Kontakta oss för en mer detaljerad analys och förslag på förbättringar.
                </p>
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center justify-center bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Få en fullständig analys
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}