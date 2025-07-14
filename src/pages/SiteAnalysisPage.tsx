import React from 'react';
import { Helmet } from 'react-helmet-async';

const SiteAnalysisPage = () => {
  return (
    <>
      <Helmet>
        <title>Webbanalys - Gratis SEO-analys av din webbplats</title>
        <meta name="description" content="Få en kostnadsfri analys av din webbplats SEO-prestanda och tips för förbättringar." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Gratis Webbanalys
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Få en kostnadsfri analys av din webbplats SEO-prestanda
          </p>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Din webbplats URL
                </label>
                <input
                  type="url"
                  id="website"
                  placeholder="https://example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-postadress (för att få rapporten)
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Starta gratis analys
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteAnalysisPage;