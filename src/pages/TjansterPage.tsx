import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Services } from '@/components/Services';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function TjansterPage() {
  return (
    <>
      <Helmet>
        <title>Våra tjänster | Byggkontroll & Teknisk Konsultation</title>
        <meta name="description" content="Vi erbjuder professionella tjänster som kontrollansvarig, BAS-P och BAS-U för alla typer av byggprojekt i Västernorrland." />
        <meta name="keywords" content="byggkontroll, kontrollansvarig, BAS-P, BAS-U, byggprojekt, teknisk konsultation" />
      </Helmet>
      
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Våra tjänster</h1>
            <p className="text-xl text-green-50 max-w-2xl">
              Vi erbjuder professionella tjänster för alla typer av byggprojekt i Västernorrland.
            </p>
          </div>
        </section>
        
        <Services />
        
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Specialiserade tjänster
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Utöver våra huvudtjänster erbjuder vi även specialiserade tjänster för olika typer av projekt
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Villor & Småhus</h3>
                <p className="text-gray-700 mb-6">
                  Specialanpassade tjänster för privatpersoner som bygger eller renoverar villor och småhus.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Kontrollansvarig för nybyggnation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Kontrollansvarig för tillbyggnad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Teknisk rådgivning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Bygglovshandlingar</span>
                  </li>
                </ul>
                
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Kontakta oss för mer information <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bostadsrättsföreningar</h3>
                <p className="text-gray-700 mb-6">
                  Specialiserade tjänster för bostadsrättsföreningar som renoverar eller bygger om.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Kontrollansvarig för större renoveringar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">BAS-P och BAS-U för föreningar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Projektledning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Besiktningar</span>
                  </li>
                </ul>
                
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Kontakta oss för mer information <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Behöver du hjälp med ditt byggprojekt?
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig att hitta rätt tjänster för just ditt projekt.
                  </p>
                  <Link 
                    to="/kontakt" 
                    className="inline-flex items-center justify-center bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Kontakta oss
                  </Link>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Byggprojekt" 
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