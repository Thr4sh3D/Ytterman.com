import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, ClipboardCheck, Eye, ArrowRight } from 'lucide-react';

export default function BasUPage() {
  return (
    <>
      <Helmet>
        <title>BAS-U | Byggkontroll & Teknisk Konsultation</title>
        <meta name="description" content="Byggarbetsmiljösamordnare för utförande (BAS-U) enligt AFS. Vi hjälper dig med samordning på byggarbetsplatsen, säkerhetsrutiner och skyddsronder." />
        <meta name="keywords" content="BAS-U, byggarbetsmiljösamordnare, säkerhetsrutiner, skyddsronder, AFS" />
      </Helmet>
      
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">BAS-U</h1>
            <p className="text-xl text-green-50 max-w-2xl">
              Byggarbetsmiljösamordnare för utförande enligt Arbetsmiljöverkets föreskrifter.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Vad gör en BAS-U?
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  En byggarbetsmiljösamordnare för utförande (BAS-U) ansvarar för att samordna arbetsmiljöarbetet under själva byggskedet. BAS-U ska säkerställa att alla som arbetar på byggarbetsplatsen följer arbetsmiljöplanen och att arbetet utförs på ett säkert sätt.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Enligt Arbetsmiljöverkets föreskrifter (AFS 1999:3) måste byggherren utse en BAS-U för alla byggprojekt där mer än ett företag är inblandat. BAS-U ska ha den utbildning, kompetens och erfarenhet som krävs för uppdraget.
                </p>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Certifierad enligt AFS</h3>
                      <p className="text-gray-600">Alla våra BAS-U är certifierade enligt Arbetsmiljöverkets föreskrifter.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Praktisk erfarenhet</h3>
                      <p className="text-gray-600">Vi har praktisk erfarenhet av att vara BAS-U för olika typer av byggprojekt.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-green-600 absolute -top-4 -left-4 w-24 h-24 rounded-tl-3xl opacity-20"></div>
                <div className="bg-green-600 absolute -bottom-4 -right-4 w-24 h-24 rounded-br-3xl opacity-20"></div>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="BAS-U på byggarbetsplats" 
                  className="rounded-xl shadow-xl relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Våra tjänster som BAS-U
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Vi erbjuder kompletta tjänster som byggarbetsmiljösamordnare för utförande
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Samordning</h3>
                <p className="text-gray-700">
                  Vi samordnar arbetsmiljöarbetet mellan olika entreprenörer på byggarbetsplatsen och säkerställer att alla följer arbetsmiljöplanen.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <ClipboardCheck className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Säkerhetsrutiner</h3>
                <p className="text-gray-700">
                  Vi implementerar och övervakar säkerhetsrutiner på byggarbetsplatsen för att förebygga olyckor och tillbud.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Skyddsronder</h3>
                <p className="text-gray-700">
                  Vi genomför regelbundna skyddsronder för att identifiera och åtgärda potentiella arbetsmiljörisker på byggarbetsplatsen.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Behöver du en BAS-U?
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig att säkerställa en säker arbetsmiljö under hela byggskedet.
                  </p>
                  <Link 
                    to="/kontakt" 
                    className="inline-flex items-center justify-center bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Kontakta oss <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="BAS-U" 
                    className="rounded-xl shadow-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}