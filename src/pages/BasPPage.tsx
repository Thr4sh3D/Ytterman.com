import React from 'react';
import { Helmet } from 'react-helmet-async';

const BasPPage = () => {
  return (
    <>
      <Helmet>
        <title>BAS P - Byggarbetsmiljösamordnare Projektering</title>
        <meta name="description" content="Information om BAS P - Byggarbetsmiljösamordnare under projektering." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            BAS P - Byggarbetsmiljösamordnare Projektering
          </h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600">
              Information om BAS P tjänster och ansvar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasPPage;