import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

const Index = () => {
  const [debugInfo, setDebugInfo] = useState({
    hydrated: false,
    timestamp: '',
    websocketStatus: 'checking...',
    errors: []
  });

  useEffect(() => {
    // Markera att hydration är klar
    setDebugInfo(prev => ({
      ...prev,
      hydrated: true,
      timestamp: new Date().toLocaleString()
    }));

    // Testa WebSocket-anslutning
    const testWebSocket = () => {
      try {
        const ws = new WebSocket('wss://aorpjse3ulohvjtaxgvsp.mysuperdev.app/');
        
        ws.onopen = () => {
          console.log('✅ WebSocket connection successful');
          setDebugInfo(prev => ({
            ...prev,
            websocketStatus: 'connected'
          }));
          ws.close();
        };

        ws.onerror = (error) => {
          console.error('❌ WebSocket error:', error);
          setDebugInfo(prev => ({
            ...prev,
            websocketStatus: 'failed - 503 error',
            errors: [...prev.errors, 'WebSocket 503 Service Unavailable']
          }));
        };

        ws.onclose = (event) => {
          if (event.code !== 1000) {
            console.log('WebSocket closed with code:', event.code);
            setDebugInfo(prev => ({
              ...prev,
              websocketStatus: `closed (${event.code})`
            }));
          }
        };

      } catch (error) {
        console.error('WebSocket test failed:', error);
        setDebugInfo(prev => ({
          ...prev,
          websocketStatus: 'test failed',
          errors: [...prev.errors, `WebSocket test error: ${error.message}`]
        }));
      }
    };

    // Vänta lite innan WebSocket-test för att undvika race conditions
    setTimeout(testWebSocket, 1000);
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Navigation />
        
        <h1 style={{ 
          color: '#2c3e50', 
          fontSize: '28px', 
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          🔧 System Diagnostics Dashboard
        </h1>

        {/* ... keep existing code (all the diagnostic sections) */}
        
        {/* Hydration Status */}
        <div style={{ 
          marginBottom: '20px', 
          padding: '15px', 
          backgroundColor: debugInfo.hydrated ? '#d4edda' : '#fff3cd',
          border: `1px solid ${debugInfo.hydrated ? '#c3e6cb' : '#ffeaa7'}`,
          borderRadius: '8px'
        }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#495057' }}>
            {debugInfo.hydrated ? '✅' : '⏳'} React Hydration Status
          </h2>
          <p style={{ margin: 0, color: '#6c757d' }}>
            {debugInfo.hydrated 
              ? `Hydration completed successfully at ${debugInfo.timestamp}`
              : 'Waiting for hydration to complete...'
            }
          </p>
        </div>

        {/* WebSocket Status */}
        <div style={{ 
          marginBottom: '20px', 
          padding: '15px', 
          backgroundColor: debugInfo.websocketStatus === 'connected' ? '#d4edda' : '#f8d7da',
          border: `1px solid ${debugInfo.websocketStatus === 'connected' ? '#c3e6cb' : '#f5c6cb'}`,
          borderRadius: '8px'
        }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#495057' }}>
            {debugInfo.websocketStatus === 'connected' ? '✅' : '❌'} WebSocket Connection
          </h2>
          <p style={{ margin: '0 0 10px 0', color: '#6c757d' }}>
            Status: <strong>{debugInfo.websocketStatus}</strong>
          </p>
          <p style={{ margin: 0, fontSize: '14px', color: '#6c757d' }}>
            Target: wss://aorpjse3ulohvjtaxgvsp.mysuperdev.app/
          </p>
        </div>

        {/* Error Log */}
        {debugInfo.errors.length > 0 && (
          <div style={{ 
            marginBottom: '20px', 
            padding: '15px', 
            backgroundColor: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: '8px'
          }}>
            <h2 style={{ margin: '0 0 10px 0', color: '#721c24' }}>
              🚨 Detected Issues
            </h2>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {debugInfo.errors.map((error, index) => (
                <li key={index} style={{ color: '#721c24', marginBottom: '5px' }}>
                  {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Plan */}
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#e2e3e5',
          border: '1px solid #d6d8db',
          borderRadius: '8px'
        }}>
          <h2 style={{ margin: '0 0 15px 0', color: '#495057' }}>
            📋 Recommended Actions (Priority Order)
          </h2>
          <ol style={{ margin: 0, paddingLeft: '20px', color: '#495057' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>Fix WebSocket 503:</strong> Check if realtime server container is running
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Verify Environment:</strong> Ensure SUPABASE_URL matches deployed instance
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Check Proxy Config:</strong> Verify WebSocket support in Nginx/Cloudflare
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Test Health:</strong> curl -I https://aorpjse3ulohvjtaxgvsp.mysuperdev.app/health
            </li>
            <li style={{ marginBottom: '0' }}>
              <strong>Monitor Logs:</strong> kubectl logs or docker logs for crash-loops
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Index;