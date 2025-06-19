import React from 'react';
import Navigation from '../components/Navigation';

const KASundsvall = () => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Navigation />
        <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>KA Sundsvall</h1>
        <p style={{ textAlign: 'center', color: '#6c757d' }}>
          KA Sundsvall content will be added here.
        </p>
      </div>
    </div>
  );
};

export default KASundsvall;