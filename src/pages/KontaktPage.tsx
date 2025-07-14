import React from 'react';
import { Helmet } from 'react-helmet-async';

const KontaktPage = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt - Kom i kontakt med oss</title>
        <meta name="description" content="Kontakta oss för en kostnadsfri konsultation om SEO och innehållsmarknadsföring." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Kontakt
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kom i kontakt</h2>
              <p className="text-gray-600 mb-8">
                Vi hjälper gärna dig med dina frågor om SEO och innehållsmarknadsföring. 
                Kontakta oss för en kostnadsfri konsultation.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">E-post</h3>
                  <p className="text-gray-600">info@example.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telefon</h3>
                  <p className="text-gray-600">08-123 456 78</p>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Namn
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Meddelande
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Skicka meddelande
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KontaktPage;