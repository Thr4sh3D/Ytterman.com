import React from 'react';
import Navigation from '../components/Navigation';

const NotFound = () => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Navigation />
        <h1 style={{ color: '#dc3545', textAlign: 'center' }}>404 - Page Not Found</h1>
        <p style={{ textAlign: 'center', color: '#6c757d' }}>
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;