import React from 'react';
import { Helmet } from 'react-helmet-async';

const TjansterPage = () => {
  return (
    <>
      <Helmet>
        <title>Våra Tjänster - SEO & Innehållsmarknadsföring</title>
        <meta name="description" content="Upptäck våra professionella SEO-tjänster och innehållsmarknadsföringslösningar." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Våra Tjänster
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 border border-gray-200 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SEO Optimering</h2>
              <p className="text-gray-600 mb-6">
                Komplett SEO-strategi för att förbättra din synlighet i sökmotorer.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Teknisk SEO-audit</li>
                <li>• Nyckelordsanalys</li>
                <li>• On-page optimering</li>
                <li>• Länkbyggnad</li>
              </ul>
            </div>
            
            <div className="p-8 border border-gray-200 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Innehållsmarknadsföring</h2>
              <p className="text-gray-600 mb-6">
                Strategiskt innehåll som engagerar och konverterar din målgrupp.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Blogginlägg</li>
                <li>• Webbsidetexter</li>
                <li>• Social media innehåll</li>
                <li>• E-postmarknadsföring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TjansterPage;