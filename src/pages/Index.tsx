import React from 'react';

const Index = () => {
  console.log('🏠 Index page is rendering');
  
  try {
    return (
      <div style={{ padding: '20px', backgroundColor: 'lightblue', minHeight: '400px' }}>
        <h1 style={{ color: 'darkblue', fontSize: '32px', marginBottom: '20px' }}>
          ✅ SUCCESS: Index page is working!
        </h1>
        <p style={{ fontSize: '18px', marginBottom: '10px' }}>
          🎉 Om du ser detta meddelande fungerar grundläggande rendering.
        </p>
        <p style={{ fontSize: '16px', color: 'darkgreen' }}>
          📍 Du är på startsidan (Index.tsx)
        </p>
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'white', border: '2px solid green' }}>
          <h2>Debug Information:</h2>
          <ul>
            <li>✅ React rendering works</li>
            <li>✅ Routing works</li>
            <li>✅ Index component loads</li>
            <li>✅ Basic styling works</li>
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    console.error('💥 Error in Index component:', error);
    return (
      <div style={{ padding: '20px', backgroundColor: 'red', color: 'white' }}>
        <h1>ERROR IN INDEX COMPONENT</h1>
        <p>{error.toString()}</p>
      </div>
    );
  }
};

export default Index;