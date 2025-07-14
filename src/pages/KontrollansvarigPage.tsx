import React from 'react';
import { Helmet } from 'react-helmet-async';

const KontrollansvarigPage = () => {
  return (
    <>
      <Helmet>
        <title>Kontrollansvarig - BAS P & BAS U</title>
        <meta name="description" content="Information om kontrollansvarig för BAS P och BAS U." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Kontrollansvarig
          </h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Information om våra tjänster som kontrollansvarig för BAS P och BAS U.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KontrollansvarigPage;