import React from 'react';
import { Helmet } from 'react-helmet-async';

const BasUPage = () => {
  return (
    <>
      <Helmet>
        <title>BAS U - Byggarbetsmiljösamordnare Utförande</title>
        <meta name="description" content="Information om BAS U - Byggarbetsmiljösamordnare under utförande." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            BAS U - Byggarbetsmiljösamordnare Utförande
          </h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600">
              Information om BAS U tjänster och ansvar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasUPage;