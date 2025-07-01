import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { analyzeSite, SiteAnalysisResult } from '@/utils/siteAnalysis';
import { Loader2, Eye, Palette, Type, Image, Layout, Users } from 'lucide-react';

export const SiteAnalysisDisplay = () => {
  const [analysis, setAnalysis] = useState<SiteAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runAnalysis = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await analyzeSite('https://ytterman.com');
      setAnalysis(result);
      console.log('Site analysis completed:', result);
    } catch (err) {
      setError('Kunde inte analysera webbplatsen. Försök igen.');
      console.error('Analysis error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Analys av ytterman.com
        </h2>
        <p className="text-muted-foreground mb-6">
          Steg 2: Studera och dokumentera den ursprungliga webbplatsens design och innehåll
        </p>
        
        {!analysis && (
          <Button 
            onClick={runAnalysis} 
            disabled={loading}
            className="earth-gradient text-white hover:opacity-90"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Analyserar webbplats...
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 mr-2" />
                Starta analys av ytterman.com
              </>
            )}
          </Button>
        )}
        
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600">{error}</p>
          </div>
        )}
      </div>

      {analysis && (
        <div className="space-y-8">
          {/* Layout & Struktur */}
          <div className="bg-slate-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Layout className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-xl font-bold">Layout & Struktur</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Struktur</h4>
                <ul className="text-sm space-y-1">
                  {analysis.layout.structure.map((item, index) => (
                    <li key={index} className="text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Navigation</h4>
                <ul className="text-sm space-y-1">
                  {analysis.layout.navigation.map((item, index) => (
                    <li key={index} className="text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Sektioner</h4>
                <ul className="text-sm space-y-1">
                  {analysis.layout.sections.map((item, index) => (
                    <li key={index} className="text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Färgschema */}
          <div className="bg-slate-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Palette className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-xl font-bold">Färgschema</h3>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Primära</h4>
                <ul className="text-sm space-y-1">
                  {analysis.colors.primary.map((color, index) => (
                    <li key={index} className="text-muted-foreground">• {color}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Sekundära</h4>
                <ul className="text-sm space-y-1">
                  {analysis.colors.secondary.map((color, index) => (
                    <li key={index} className="text-muted-foreground">• {color}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Accent</h4>
                <ul className="text-sm space-y-1">
                  {analysis.colors.accent.map((color, index) => (
                    <li key={index} className="text-muted-foreground">• {color}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Bakgrund</h4>
                <ul className="text-sm space-y-1">
                  {analysis.colors.background.map((color, index) => (
                    <li key={index} className="text-muted-foreground">• {color}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Typografi */}
          <div className="bg-slate-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Type className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-xl font-bold">Typografi</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Rubriker</h4>
                <ul className="text-sm space-y-1">
                  {analysis.typography.headings.map((item, index) => (
                    <li key={index} className="text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Brödtext</h4>
                <ul className="text-sm space-y-1">
                  {analysis.typography.bodyText.map((item, index) => (
                    <li key={index} className="text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Typsnitt</h4>
                <ul className="text-sm space-y-1">
                  {analysis.typography.fonts.map((item, index) => (
                    <li key={index} className="text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Innehåll */}
          <div className="bg-slate-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-xl font-bold">Innehåll</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Huvudrubrik</h4>
                <p className="text-muted-foreground">{analysis.content.mainHeading}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Underrubriker</h4>
                  <ul className="text-sm space-y-1">
                    {analysis.content.subHeadings.map((item, index) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Nyckelmeddelanden</h4>
                  <ul className="text-sm space-y-1">
                    {analysis.content.keyMessages.map((item, index) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Tjänster</h4>
                  <ul className="text-sm space-y-1">
                    {analysis.content.services.map((item, index) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Kontaktinfo</h4>
                  <ul className="text-sm space-y-1">
                    {analysis.content.contactInfo.map((item, index) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bilder & Visuella element */}
          <div className="bg-slate-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Image className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-xl font-bold">Bilder & Visuella Element</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Hero-bild</h4>
                <p className="text-muted-foreground">{analysis.images.heroImage || 'Ingen hero-bild identifierad'}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Tjänstebilder</h4>
                  <ul className="text-sm space-y-1">
                    {analysis.images.serviceImages.map((item, index) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Profilbilder</h4>
                  <ul className="text-sm space-y-1">
                    {analysis.images.profileImages.map((item, index) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Logotyper</h4>
                  <ul className="text-sm space-y-1">
                    {analysis.images.logos.map((item, index) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Användarupplevelse */}
          <div className="bg-slate-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-xl font-bold">Användarupplevelse</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Call-to-Actions</h4>
                <ul className="text-sm space-y-1">
                  {analysis.userExperience.callToActions.map((item, index) => (
                    <li key={index} className="text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Navigation</h4>
                <ul className="text-sm space-y-1">
                  {analysis.userExperience.navigation.map((item, index) => (
                    <li key={index} className="text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Mobiloptimering</h4>
                <ul className="text-sm space-y-1">
                  {analysis.userExperience.mobileOptimization.map((item, index) => (
                    <li key={index} className="text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Analys Slutförd
            </h3>
            <p className="text-green-600">
              Steg 2 är nu genomfört. Vi har dokumenterat den ursprungliga webbplatsens 
              design, layout, färger, typografi och innehåll. Denna information kan nu 
              användas för att jämföra med nuvarande implementation och planera nästa steg.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};