import React from 'react';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hem - Din SEO & Innehållsmarknadsföring Partner</title>
        <meta name="description" content="Professionell SEO och innehållsmarknadsföring för ditt företag. Vi hjälper dig att synas online och nå fler kunder." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Din Partner för
              <span className="text-blue-600 block">SEO & Innehållsmarknadsföring</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Vi hjälper företag att växa online genom strategisk SEO, 
              engagerande innehåll och datadriven marknadsföring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Kom igång idag
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Läs mer om våra tjänster
              </button>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Våra Tjänster
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">SEO Optimering</h3>
                <p className="text-gray-600">
                  Förbättra din synlighet i sökmotorer och attrahera fler kvalificerade besökare.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✍️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innehållsskapande</h3>
                <p className="text-gray-600">
                  Engagerande innehåll som konverterar besökare till kunder.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Analys & Rapporter</h3>
                <p className="text-gray-600">
                  Detaljerad uppföljning och insikter för kontinuerlig förbättring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Redo att ta nästa steg?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Kontakta oss idag för en kostnadsfri konsultation och se hur vi kan hjälpa ditt företag att växa.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Kontakta oss
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;