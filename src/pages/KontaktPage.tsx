import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';
import { Helmet } from 'react-helmet-async';
import { MapPin } from 'lucide-react';

export default function KontaktPage() {
  return (
    <>
      <Helmet>
        <title>Kontakta oss | Byggkontroll & Teknisk Konsultation</title>
        <meta name="description" content="Kontakta oss för frågor om kontrollansvarig, BAS-P, BAS-U eller andra byggtekniska tjänster. Vi hjälper dig med ditt byggprojekt." />
        <meta name="keywords" content="kontakt, byggkontroll, kontrollansvarig, BAS-P, BAS-U, byggprojekt" />
      </Helmet>
      
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakta oss</h1>
            <p className="text-xl text-green-50 max-w-2xl">
              Har du frågor eller vill diskutera ditt projekt? Vi finns här för att hjälpa dig.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Vi finns i Västernorrland
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Vi erbjuder våra tjänster i hela Västernorrland, inklusive Sundsvall, Härnösand, Sollefteå, Kramfors, Timrå och omkringliggande områden.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <MapPin className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Huvudkontor</h3>
                      <p className="text-gray-700">
                        Storgatan 45<br />
                        852 30 Sundsvall
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <MapPin className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Filial Härnösand</h3>
                      <p className="text-gray-700">
                        Nybrogatan 15<br />
                        871 31 Härnösand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-green-600 absolute -top-4 -left-4 w-24 h-24 rounded-tl-3xl opacity-20"></div>
                <div className="bg-green-600 absolute -bottom-4 -right-4 w-24 h-24 rounded-br-3xl opacity-20"></div>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Karta över Västernorrland" 
                  className="rounded-xl shadow-xl relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}