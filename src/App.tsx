import React from 'react';
import ClientOnlyTimestamp from './components/ClientOnlyTimestamp';

const App = () => {
  console.log('🚀 App starting - hydration-safe version');
  
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
        ✅ HYDRATION-SAFE SUCCESS
      </h1>
      <p style={{ 
        fontSize: '18px', 
        marginBottom: '10px',
        color: 'darkgreen'
      }}>
        🎉 Denna version undviker alla hydration-problem
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
          <li style={{ marginBottom: '5px' }}>✅ Ingen Date.now() i render</li>
          <li style={{ marginBottom: '5px' }}>✅ Inga Math.random() värden</li>
          <li style={{ marginBottom: '5px' }}>✅ Inga window-checks i render</li>
          <li style={{ marginBottom: '5px' }}>✅ Deterministisk rendering</li>
          <li style={{ marginBottom: '5px' }}>✅ Client-only komponenter för dynamiska värden</li>
        </ul>
      </div>
      
      <ClientOnlyTimestamp />
      
      <div style={{
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#fff3cd',
        border: '1px solid #ffeaa7',
        borderRadius: '5px'
      }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#856404' }}>
          Nästa steg för att fixa WebSocket-problemet:
        </h3>
        <ol style={{ margin: 0, paddingLeft: '20px', color: '#856404' }}>
          <li>Kontrollera att WebSocket-servern körs</li>
          <li>Verifiera att URL:en är korrekt</li>
          <li>Kolla reverse-proxy konfiguration</li>
        </ol>
      </div>
    </div>
  );
};

export default App;