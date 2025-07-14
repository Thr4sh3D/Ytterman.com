import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const TackPage = () => {
  return (
    <>
      <Helmet>
        <title>Tack - Ditt meddelande har skickats</title>
        <meta name="description" content="Tack för ditt meddelande. Vi återkommer till dig inom kort." />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center px-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tack!</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md">
            Ditt meddelande har skickats. Vi återkommer till dig inom kort.
          </p>
          <Link 
            to="/" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Tillbaka till startsidan
          </Link>
        </div>
      </div>
    </>
  );
};

export default TackPage;