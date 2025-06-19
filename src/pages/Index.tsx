import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

const Index = () => {
  const [diagnostics, setDiagnostics] = useState({
    hydrated: false,
    timestamp: '',
    websocketStatus: 'checking...',
    websocketError: null,
    healthCheck: 'pending',
    errors: [],
    warnings: []
  });

  useEffect(() => {
    // Mark hydration complete - this should happen deterministically
    setDiagnostics(prev => ({
      ...prev,
      hydrated: true,
      timestamp: new Date().toLocaleString()
    }));

    // Test WebSocket connection - the main blocker
    const testWebSocket = () => {
      console.log('🔍 Testing WebSocket connection...');
      
      try {
        const ws = new WebSocket('wss://aorpjse3ulohvjtaxgvsp.mysuperdev.app/');
        
        const timeout = setTimeout(() => {
          ws.close();
          setDiagnostics(prev => ({
            ...prev,
            websocketStatus: 'timeout',
            websocketError: 'Connection timeout - likely 503 Service Unavailable',
            errors: [...prev.errors, 'WebSocket connection timeout (probable 503)']
          }));
        }, 5000);

        ws.onopen = () => {
          clearTimeout(timeout);
          console.log('✅ WebSocket connection successful');
          setDiagnostics(prev => ({
            ...prev,
            websocketStatus: 'connected'
          }));
          ws.close();
        };

        ws.onerror = (error) => {
          clearTimeout(timeout);
          console.error('❌ WebSocket error:', error);
          setDiagnostics(prev => ({
            ...prev,
            websocketStatus: 'failed',
            websocketError: 'Connection failed - check if service is running',
            errors: [...prev.errors, 'WebSocket 503 Service Unavailable - upstream service unreachable']
          }));
        };

        ws.onclose = (event) => {
          clearTimeout(timeout);
          if (event.code !== 1000 && event.code !== 1006) {
            console.log(`WebSocket closed with code: ${event.code}`);
            setDiagnostics(prev => ({
              ...prev,
              websocketStatus: `closed (${event.code})`,
              websocketError: `Unexpected close code: ${event.code}`
            }));
          }
        };

      } catch (error) {
        console.error('WebSocket test failed:', error);
        setDiagnostics(prev => ({
          ...prev,
          websocketStatus: 'test failed',
          websocketError: error.message,
          errors: [...prev.errors, `WebSocket test error: ${error.message}`]
        }));
      }
    };

    // Test health endpoint
    const testHealthEndpoint = async () => {
      try {
        const response = await fetch('https://aorpjse3ulohvjtaxgvsp.mysuperdev.app/health', {
          method: 'HEAD',
          mode: 'no-cors'
        });
        setDiagnostics(prev => ({
          ...prev,
          healthCheck: 'reachable'
        }));
      } catch (error) {
        setDiagnostics(prev => ({
          ...prev,
          healthCheck: 'unreachable',
          errors: [...prev.errors, 'Health endpoint unreachable']
        }));
      }
    };

    // Run tests with slight delay to avoid race conditions
    setTimeout(() => {
      testWebSocket();
      testHealthEndpoint();
    }, 1000);

    // Check for common hydration issues
    if (typeof window !== 'undefined') {
      // Look for potential hydration mismatches
      const hasRandomElements = document.querySelector('[data-random]');
      const hasDateElements = document.querySelector('[data-date]');
      
      if (hasRandomElements || hasDateElements) {
        setDiagnostics(prev => ({
          ...prev,
          warnings: [...prev.warnings, 'Potential hydration mismatch sources detected']
        }));
      }
    }
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': return '#d4edda';
      case 'failed': 
      case 'timeout': 
      case 'unreachable': return '#f8d7da';
      case 'checking...': 
      case 'pending': return '#fff3cd';
      default: return '#e2e3e5';
    }
  };

  const getStatusBorder = (status) => {
    switch (status) {
      case 'connected': return '#c3e6cb';
      case 'failed': 
      case 'timeout': 
      case 'unreachable': return '#f5c6cb';
      case 'checking...': 
      case 'pending': return '#ffeaa7';
      default: return '#d6d8db';
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Navigation />
        
        <h1 style={{ 
          color: '#2c3e50', 
          fontSize: '32px', 
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          🔧 System Diagnostics
        </h1>
        
        <p style={{ 
          textAlign: 'center', 
          color: '#6c757d', 
          marginBottom: '30px',
          fontSize: '16px'
        }}>
          Focused on the real issues blocking your app
        </p>

        {/* PRIORITY 1: WebSocket Service Health */}
        <div style={{ 
          marginBottom: '20px', 
          padding: '20px', 
          backgroundColor: getStatusColor(diagnostics.websocketStatus),
          border: `2px solid ${getStatusBorder(diagnostics.websocketStatus)}`,
          borderRadius: '8px'
        }}>
          <h2 style={{ margin: '0 0 15px 0', color: '#495057', fontSize: '20px' }}>
            🚨 PRIORITY 1: WebSocket Service (wss://aorpjse3ulohvjtaxgvsp.mysuperdev.app/)
          </h2>
          <div style={{ marginBottom: '10px' }}>
            <strong>Status:</strong> <span style={{ 
              color: diagnostics.websocketStatus === 'connected' ? '#155724' : '#721c24',
              fontWeight: 'bold'
            }}>
              {diagnostics.websocketStatus}
            </span>
          </div>
          {diagnostics.websocketError && (
            <div style={{ 
              marginBottom: '15px', 
              padding: '10px', 
              backgroundColor: '#fff', 
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              <strong>Error:</strong> {diagnostics.websocketError}
            </div>
          )}
          
          {diagnostics.websocketStatus !== 'connected' && (
            <div style={{ marginTop: '15px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#495057' }}>Immediate Actions:</h4>
              <ol style={{ margin: 0, paddingLeft: '20px', color: '#495057' }}>
                <li style={{ marginBottom: '5px' }}>
                  <strong>Check if service is running:</strong> SSH/kubectl into the pod
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <strong>Verify proxy config:</strong> NGINX needs <code>proxy_set_header Upgrade $http_upgrade;</code>
                </li>
                <li style={{ marginBottom: '5px' }}>
                  <strong>Preview env wake-up:</strong> Hit any HTTP endpoint first to wake the service
                </li>
                <li style={{ marginBottom: '0' }}>
                  <strong>Check target group health:</strong> AWS ALB health checks must be green
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* PRIORITY 2: React Hydration */}
        <div style={{ 
          marginBottom: '20px', 
          padding: '20px', 
          backgroundColor: diagnostics.hydrated ? '#d4edda' : '#fff3cd',
          border: `1px solid ${diagnostics.hydrated ? '#c3e6cb' : '#ffeaa7'}`,
          borderRadius: '8px'
        }}>
          <h2 style={{ margin: '0 0 15px 0', color: '#495057', fontSize: '18px' }}>
            ⚛️ PRIORITY 2: React Hydration (Error #418)
          </h2>
          <div style={{ marginBottom: '10px' }}>
            <strong>Status:</strong> <span style={{ 
              color: diagnostics.hydrated ? '#155724' : '#856404'
            }}>
              {diagnostics.hydrated ? 'Hydration completed successfully' : 'Hydrating...'}
            </span>
          </div>
          <div style={{ fontSize: '14px', color: '#6c757d' }}>
            <strong>To debug hydration mismatches:</strong>
            <ul style={{ margin: '5px 0 0 0', paddingLeft: '20px' }}>
              <li>Run with <code>NODE_ENV=development</code> for full error messages</li>
              <li>Check for Date.now(), Math.random(), or window checks in render</li>
              <li>Use React DevTools Profiler to find remounting components</li>
            </ul>
          </div>
        </div>

        {/* Health Check Status */}
        <div style={{ 
          marginBottom: '20px', 
          padding: '15px', 
          backgroundColor: getStatusColor(diagnostics.healthCheck),
          border: `1px solid ${getStatusBorder(diagnostics.healthCheck)}`,
          borderRadius: '8px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#495057' }}>
            🏥 Health Endpoint Check
          </h3>
          <p style={{ margin: 0, color: '#6c757d' }}>
            Status: <strong>{diagnostics.healthCheck}</strong>
          </p>
        </div>

        {/* Error Summary */}
        {diagnostics.errors.length > 0 && (
          <div style={{ 
            marginBottom: '20px', 
            padding: '15px', 
            backgroundColor: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: '8px'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#721c24' }}>
              🚨 Critical Issues Found
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {diagnostics.errors.map((error, index) => (
                <li key={index} style={{ color: '#721c24', marginBottom: '5px' }}>
                  {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Warnings (Lower Priority) */}
        {diagnostics.warnings.length > 0 && (
          <div style={{ 
            marginBottom: '20px', 
            padding: '15px', 
            backgroundColor: '#fff3cd',
            border: '1px solid #ffeaa7',
            borderRadius: '8px'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#856404' }}>
              ⚠️ Warnings (Address After Critical Issues)
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {diagnostics.warnings.map((warning, index) => (
                <li key={index} style={{ color: '#856404', marginBottom: '5px' }}>
                  {warning}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ignore These (Harmless) */}
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#e2e3e5',
          border: '1px solid #d6d8db',
          borderRadius: '8px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#495057' }}>
            😌 Safe to Ignore (Harmless Warnings)
          </h3>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#6c757d', fontSize: '14px' }}>
            <li style={{ marginBottom: '5px' }}>
              <strong>Unrecognized feature: 'vr', 'battery':</strong> Old Permissions-Policy tokens
            </li>
            <li style={{ marginBottom: '5px' }}>
              <strong>A listener indicated an asynchronous response:</strong> Browser extension noise
            </li>
            <li style={{ marginBottom: '0' }}>
              <strong>CodeEditor received projectId ... false/true:</strong> Noisy console.log in your code
            </li>
          </ul>
        </div>

        {/* Quick Commands */}
        <div style={{ 
          marginTop: '20px',
          padding: '15px', 
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '8px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#495057' }}>
            🛠️ Quick Debug Commands
          </h3>
          <div style={{ 
            fontFamily: 'monospace',
            fontSize: '12px',
            backgroundColor: '#ffffff',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #dee2e6'
          }}>
            <div style={{ marginBottom: '5px' }}>
              <strong>Test health:</strong> curl -I https://aorpjse3ulohvjtaxgvsp.mysuperdev.app/health
            </div>
            <div style={{ marginBottom: '5px' }}>
              <strong>Check DNS:</strong> dig aorpjse3ulohvjtaxgvsp.mysuperdev.app
            </div>
            <div style={{ marginBottom: '0' }}>
              <strong>Container logs:</strong> kubectl logs deploy/realtime-server
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;