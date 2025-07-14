import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Sidan hittades inte</title>
        <meta name="description" content="Den sida du letar efter kunde inte hittas." />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sidan hittades inte</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md">
            Tyvärr kunde vi inte hitta sidan du letar efter. Den kan ha flyttats eller tagits bort.
          </p>
          <Link 
            to="/" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Tillbaka till startsidan
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;