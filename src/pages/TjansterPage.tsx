import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead, faqSchema } from '@/components/SEOComponents';
import { TechnicalSEO } from '@/components/TechnicalSEO';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Users, Building, Shield, Eye, ArrowRight, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function TjansterPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Vilka tjänster erbjuder ni inom byggkontroll?",
      answer: "Vi erbjuder kontrollansvarig (KA), BAS-P (byggarbetsmiljösamordnare planering), BAS-U (byggarbetsmiljösamordnare utförande), teknisk konsultation och bygglovshjälp."
    },
    {
      question: "Hur lång tid tar det att få en kontrollansvarig tilldelad?",
      answer: "Vi kan normalt tilldela en kontrollansvarig inom 1-2 arbetsdagar efter att vi mottagit alla nödvändiga handlingar och information om projektet."
    },
    {
      question: "Arbetar ni med både privata och kommersiella projekt?",
      answer: "Ja, vi arbetar med alla typer av byggprojekt - från privata villabyggen till stora kommersiella och industriella projekt i hela Västernorrland."
    },
    {
      question: "Vad kostar era tjänster?",
      answer: "Kostnaden varierar beroende på projektets storlek och komplexitet. Kontakta oss för en kostnadsfri offert anpassad efter ditt specifika projekt."
    },
    {
      question: "Kan ni hjälpa med bygglovsansökan?",
      answer: "Ja, vi hjälper till med hela bygglovsprocessen inklusive handlingar, ansökan och kontakt med byggnadsnämnden."
    }
  ];

  return (
    <>
      <SEOHead
        title="Våra tjänster - Kontrollansvarig, BAS-P, BAS-U & Byggkonsultation"
        description="Kompletta byggkontrolltjänster i Västernorrland. Kontrollansvarig, BAS-P, BAS-U, teknisk konsultation och bygglovshjälp. Certifierade experter med över 15 års erfarenhet."
        keywords="kontrollansvarig Västernorrland, BAS-P, BAS-U, byggkontroll, teknisk konsultation, bygglov, certifierad, Sundsvall, Härnösand"
        url="https://buildcontrol.se/tjanster"
        structuredData={faqSchema(faqs)}
      />
      <TechnicalSEO />
      
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Våra tjänster</h1>
            <p className="text-xl text-blue-50 max-w-2xl">
              Kompletta lösningar för byggkontroll och teknisk konsultation i Västernorrland
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Professionella byggkontrolltjänster
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Vi erbjuder alla tjänster du behöver för ett säkert och regelrätt byggprojekt
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kontrollansvarig (KA)</h3>
                <p className="text-gray-700 mb-4">
                  Certifierad kontrollansvarig enligt PBL för alla typer av byggprojekt. Vi säkerställer kvalitet och regelefterlevnad.
                </p>
                <Link 
                  to="/kontrollansvarig" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Läs mer <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">BAS-P</h3>
                <p className="text-gray-700 mb-4">
                  Byggarbetsmiljösamordnare för planering och projektering enligt AFS. Säker arbetsmiljö från start.
                </p>
                <Link 
                  to="/bas-p" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Läs mer <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">BAS-U</h3>
                <p className="text-gray-700 mb-4">
                  Byggarbetsmiljösamordnare för utförande enligt AFS. Säkerhet och samordning på byggarbetsplatsen.
                </p>
                <Link 
                  to="/bas-u" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Läs mer <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Teknisk konsultation</h3>
                <p className="text-gray-700 mb-4">
                  Experthjälp inom byggnadsteknik, konstruktion och regelverksanalys för komplexa projekt.
                </p>
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  Kontakta oss <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bygglovshjälp</h3>
                <p className="text-gray-700 mb-4">
                  Hjälp med bygglovsansökan, handlingar och kontakt med byggnadsnämnden för smidig process.
                </p>
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Kontakta oss <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kvalitetskontroll</h3>
                <p className="text-gray-700 mb-4">
                  Oberoende kvalitetskontroll och besiktning för att säkerställa högsta standard på ditt projekt.
                </p>
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  Kontakta oss <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vanliga frågor om våra tjänster
              </h2>
              <p className="text-lg text-gray-600">
                Här hittar du svar på de vanligaste frågorna om våra byggkontrolltjänster
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="w-full text-left bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <HelpCircle className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                    </div>
                    {openFaq === index && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Redo att starta ditt projekt?
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Kontakta oss idag för en kostnadsfri konsultation och offert anpassad efter ditt specifika byggprojekt.
                </p>
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                >
                  Få kostnadsfri offert <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}