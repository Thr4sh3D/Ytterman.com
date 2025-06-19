import React from 'react';
import Navigation from '../components/Navigation';

const Blog = () => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Navigation />
        <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>Blog</h1>
        <p style={{ textAlign: 'center', color: '#6c757d' }}>
          Blog content will be added here once the WebSocket issues are resolved.
        </p>
      </div>
    </div>
  );
};

export default Blog;