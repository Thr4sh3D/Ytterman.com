import React from 'react';

const App = () => {
  console.log('🚀 App starting - minimal version');
  
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: 'lightblue', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        color: 'darkblue', 
        fontSize: '32px', 
        marginBottom: '20px' 
      }}>
        ✅ MINIMAL SUCCESS: Appen fungerar!
      </h1>
      <p style={{ 
        fontSize: '18px', 
        marginBottom: '10px',
        color: 'darkgreen'
      }}>
        🎉 Detta är en minimal version utan React Router
      </p>
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: 'white', 
        border: '2px solid green',
        borderRadius: '8px'
      }}>
        <h2 style={{ color: 'darkblue', marginBottom: '10px' }}>
          Debug Status:
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '5px' }}>✅ React rendering fungerar</li>
          <li style={{ marginBottom: '5px' }}>✅ Grundläggande styling fungerar</li>
          <li style={{ marginBottom: '5px' }}>✅ Ingen React Router (för nu)</li>
          <li style={{ marginBottom: '5px' }}>✅ Inga externa dependencies</li>
        </ul>
      </div>
      <div style={{
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px'
      }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Timestamp: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default App;