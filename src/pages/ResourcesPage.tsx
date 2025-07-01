import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOComponents';
import { TechnicalSEO } from '@/components/TechnicalSEO';
import { Download, FileText, CheckCircle, ExternalLink, Calculator, BookOpen } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      title: "Kontrollplan mall för villa",
      description: "Färdig mall för kontrollplan enligt PBL. Anpassad för villaprojekt i Västernorrland.",
      type: "PDF Mall",
      size: "2.3 MB",
      downloads: 1247,
      icon: <FileText className="w-6 h-6" />,
      featured: true
    },
    {
      title: "BAS-P Arbetsmiljöplan mall",
      description: "Komplett mall för arbetsmiljöplan enligt AFS 1999:3. Inkluderar riskbedömningar.",
      type: "PDF Mall",
      size: "1.8 MB",
      downloads: 892,
      icon: <FileText className="w-6 h-6" />,
      featured: true
    },
    {
      title: "Checklista tekniskt samråd",
      description: "Komplett checklista för förberedelse inför tekniskt samråd med byggnadsnämnden.",
      type: "PDF Checklista",
      size: "0.5 MB",
      downloads: 634,
      icon: <CheckCircle className="w-6 h-6" />,
      featured: false
    },
    {
      title: "Kostnadskalkylator KA",
      description: "Beräkna ungefärlig kostnad för kontrollansvarig baserat på ditt projekt.",
      type: "Online verktyg",
      size: "-",
      downloads: 2156,
      icon: <Calculator className="w-6 h-6" />,
      featured: true
    },
    {
      title: "Bygglovsguide Västernorrland",
      description: "Steg-för-steg guide för bygglovsansökan i alla kommuner i Västernorrland.",
      type: "PDF Guide",
      size: "3.1 MB",
      downloads: 1543,
      icon: <BookOpen className="w-6 h-6" />,
      featured: false
    },
    {
      title: "BAS-U Skyddsrond mall",
      description: "Mall för dokumentation av skyddsronder enligt AFS krav.",
      type: "Excel Mall",
      size: "0.8 MB",
      downloads: 456,
      icon: <FileText className="w-6 h-6" />,
      featured: false
    }
  ];

  const guides = [
    {
      title: "Så väljer du rätt kontrollansvarig",
      description: "Komplett guide med kriterier och frågor att ställa",
      readTime: "8 min",
      link: "/blogg/valj-ratt-kontrollansvarig"
    },
    {
      title: "PBL-krav för olika byggprojekt",
      description: "Översikt över när kontrollansvarig krävs enligt PBL",
      readTime: "6 min",
      link: "/blogg/pbl-krav-byggprojekt"
    },
    {
      title: "Vanliga fel i byggprojekt",
      description: "De 10 vanligaste felen vi ser som kontrollansvariga",
      readTime: "10 min",
      link: "/blogg/vanliga-fel-byggprojekt"
    }
  ];

  return (
    <>
      <SEOHead
        title="Gratis resurser - Mallar, guider och verktyg för byggprojekt"
        description="Ladda ner gratis mallar för kontrollplan, arbetsmiljöplan, checklistor och guider för byggprojekt. Expertresurser från BuildControl."
        keywords="kontrollplan mall, arbetsmiljöplan mall, bygglov guide, BAS-P mall, gratis byggresurser, byggprojekt mallar"
        url="https://buildcontrol.se/resurser"
      />
      <TechnicalSEO />
      
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gratis resurser</h1>
            <p className="text-xl text-green-50 max-w-2xl">
              Mallar, guider och verktyg för att förenkla ditt byggprojekt. Alla resurser är skapade av våra experter.
            </p>
          </div>
        </section>
        
        {/* Featured Resources */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Populära resurser
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {resources.filter(resource => resource.featured).map((resource, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      {resource.icon}
                    </div>
                    <div>
                      <span className="text-sm text-green-600 font-medium">{resource.type}</span>
                      {resource.size !== "-" && (
                        <span className="text-sm text-gray-500 ml-2">• {resource.size}</span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {resource.downloads.toLocaleString()} nedladdningar
                    </span>
                    <button className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Ladda ner
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* All Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Alla resurser
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-3 rounded-lg mr-4">
                        {resource.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {resource.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{resource.type}</span>
                          {resource.size !== "-" && (
                            <>
                              <span className="mx-2">•</span>
                              <span>{resource.size}</span>
                            </>
                          )}
                          <span className="mx-2">•</span>
                          <span>{resource.downloads.toLocaleString()} nedladdningar</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Ladda ner
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Guides Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Expertguider
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {guides.map((guide, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {guide.readTime} läsning
                    </span>
                    <a 
                      href={guide.link}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    >
                      Läs guide <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Behöver du personlig hjälp?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Våra resurser är en bra start, men ibland behöver du experthjälp. Kontakta oss för en kostnadsfri konsultation.
              </p>
              <button className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg font-medium text-lg transition-colors">
                Boka kostnadsfri konsultation
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}