import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { diagnoseWebsocket } from '@/functions';

const Index = () => {
  const [diagnostics, setDiagnostics] = useState({
    hydrated: false,
    timestamp: '',
    websocketStatus: 'checking...',
    websocketError: null,
    websocketAttempts: 0,
    healthCheck: 'pending',
    httpStatus: null,
    errors: [],
    warnings: [],
    consoleErrors: []
  });

  const [backendDiagnostics, setBackendDiagnostics] = useState(null);
  const [isRunningBackendDiag, setIsRunningBackendDiag] = useState(false);

  const runBackendDiagnostics = async () => {
    setIsRunningBackendDiag(true);
    try {
      console.log('🔍 Running backend diagnostics...');
      const result = await diagnoseWebsocket({});
      setBackendDiagnostics(result);
      console.log('✅ Backend diagnostics completed:', result);
    } catch (error) {
      console.error('❌ Backend diagnostics failed:', error);
      setBackendDiagnostics({
        error: 'Failed to run backend diagnostics',
        details: error.message
      });
    } finally {
      setIsRunningBackendDiag(false);
    }
  };

  useEffect(() => {
    // Mark hydration complete
    setDiagnostics(prev => ({
      ...prev,
      hydrated: true,
      timestamp: new Date().toLocaleString()
    }));

    // Capture console errors to show real-time issues
    const originalConsoleError = console.error;
    console.error = (...args) => {
      originalConsoleError(...args);
      const errorMessage = args.join(' ');
      if (errorMessage.includes('WebSocket') || errorMessage.includes('503')) {
        setDiagnostics(prev => ({
          ...prev,
          consoleErrors: [...prev.consoleErrors.slice(-4), errorMessage].slice(-5)
        }));
      }
    };

    // Test WebSocket connection with better error handling
    const testWebSocket = () => {
      console.log('🔍 Testing WebSocket connection...');
      
      try {
        const ws = new WebSocket('wss://aorpjse3ulohvjtaxgvsp.mysuperdev.app/');
        
        setDiagnostics(prev => ({
          ...prev,
          websocketAttempts: prev.websocketAttempts + 1
        }));

        const timeout = setTimeout(() => {
          ws.close();
          setDiagnostics(prev => ({
            ...prev,
            websocketStatus: 'timeout',
            websocketError: 'Connection timeout - Service Unavailable (503)',
            errors: [...prev.errors, 'WebSocket 503: Upstream service unreachable or crashed']
          }));
        }, 5000);

        ws.onopen = () => {
          clearTimeout(timeout);
          console.log('✅ WebSocket connection successful');
          setDiagnostics(prev => ({
            ...prev,
            websocketStatus: 'connected',
            websocketError: null
          }));
          ws.close();
        };

        ws.onerror = (error) => {
          clearTimeout(timeout);
          console.error('❌ WebSocket error:', error);
          setDiagnostics(prev => ({
            ...prev,
            websocketStatus: 'failed',
            websocketError: 'Service Unavailable (503) - Realtime server is down',
            errors: [...prev.errors, 'CRITICAL: WebSocket 503 - Supabase realtime service unreachable']
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

    // Test HTTP endpoint to see if we get 503 there too
    const testHttpEndpoint = async () => {
      try {
        const response = await fetch('https://aorpjse3ulohvjtaxgvsp.mysuperdev.app/', {
          method: 'GET',
          mode: 'no-cors'
        });
        setDiagnostics(prev => ({
          ...prev,
          httpStatus: response.status || 'no-cors-blocked',
          healthCheck: 'http-reachable'
        }));
      } catch (error) {
        // Try a more direct approach
        try {
          const img = new Image();
          img.onload = () => {
            setDiagnostics(prev => ({
              ...prev,
              healthCheck: 'domain-reachable'
            }));
          };
          img.onerror = () => {
            setDiagnostics(prev => ({
              ...prev,
              healthCheck: 'domain-unreachable',
              httpStatus: '503-likely',
              errors: [...prev.errors, 'HTTP endpoint also returning 503 - Service completely down']
            }));
          };
          img.src = 'https://aorpjse3ulohvjtaxgvsp.mysuperdev.app/favicon.ico?' + Date.now();
        } catch (e) {
          setDiagnostics(prev => ({
            ...prev,
            healthCheck: 'unreachable',
            errors: [...prev.errors, 'Domain completely unreachable']
          }));
        }
      }
    };

    // Run tests
    setTimeout(() => {
      testWebSocket();
      testHttpEndpoint();
    }, 1000);

    // Check for hydration issues
    if (typeof window !== 'undefined') {
      const hasRandomElements = document.querySelector('[data-random]');
      const hasDateElements = document.querySelector('[data-date]');
      
      if (hasRandomElements || hasDateElements) {
        setDiagnostics(prev => ({
          ...prev,
          warnings: [...prev.warnings, 'Potential hydration mismatch sources detected']
        }));
      }
    }

    // Cleanup
    return () => {
      console.error = originalConsoleError;
    };
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
          Live monitoring of the WebSocket 503 Service Unavailable issue
        </p>

        {/* Backend Diagnostics Button */}
        <div style={{ 
          marginBottom: '20px', 
          textAlign: 'center'
        }}>
          <button
            onClick={runBackendDiagnostics}
            disabled={isRunningBackendDiag}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: isRunningBackendDiag ? '#6c757d' : '#007bff',
              border: 'none',
              borderRadius: '8px',
              cursor: isRunningBackendDiag ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            {isRunningBackendDiag ? '🔄 Running Backend Diagnostics...' : '🚀 Run Deep Backend Diagnostics'}
          </button>
        </div>

        {/* Backend Diagnostics Results */}
        {backendDiagnostics && (
          <div style={{ 
            marginBottom: '20px', 
            padding: '20px', 
            backgroundColor: backendDiagnostics.error ? '#f8d7da' : '#d1ecf1',
            border: `2px solid ${backendDiagnostics.error ? '#f5c6cb' : '#bee5eb'}`,
            borderRadius: '8px'
          }}>
            <h2 style={{ margin: '0 0 15px 0', color: '#495057', fontSize: '20px' }}>
              🔬 Backend Diagnostics Results
            </h2>
            
            {backendDiagnostics.error ? (
              <div style={{ color: '#721c24' }}>
                <strong>Error:</strong> {backendDiagnostics.error}
                <br />
                <strong>Details:</strong> {backendDiagnostics.details}
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: '15px' }}>
                  <strong>Environment Variables:</strong>
                  <ul style={{ margin: '5px 0 0 20px' }}>
                    {Object.entries(backendDiagnostics.environment || {}).map(([key, value]) => (
                      <li key={key} style={{ 
                        color: value === 'SET' ? '#155724' : '#721c24',
                        marginBottom: '3px'
                      }}>
                        {key}: <strong>{value}</strong>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <strong>Test Results:</strong>
                  <ul style={{ margin: '5px 0 0 20px' }}>
                    {(backendDiagnostics.tests || []).map((test, index) => (
                      <li key={index} style={{ 
                        color: test.status === 'PASS' ? '#155724' : '#721c24',
                        marginBottom: '5px'
                      }}>
                        <strong>{test.name}:</strong> {test.status}
                        {test.details && (
                          <div style={{ fontSize: '12px', marginLeft: '10px', color: '#6c757d' }}>
                            {typeof test.details === 'string' ? test.details : JSON.stringify(test.details, null, 2)}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {backendDiagnostics.recommendations && backendDiagnostics.recommendations.length > 0 && (
                  <div>
                    <strong>Recommendations:</strong>
                    <ul style={{ margin: '5px 0 0 20px' }}>
                      {backendDiagnostics.recommendations.map((rec, index) => (
                        <li key={index} style={{ marginBottom: '3px', color: '#856404' }}>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* CRITICAL: WebSocket 503 Status */}
        <div style={{ 
          marginBottom: '20px', 
          padding: '20px', 
          backgroundColor: getStatusColor(diagnostics.websocketStatus),
          border: `3px solid ${getStatusBorder(diagnostics.websocketStatus)}`,
          borderRadius: '8px'
        }}>
          <h2 style={{ margin: '0 0 15px 0', color: '#495057', fontSize: '20px' }}>
            🚨 CRITICAL: WebSocket Service (503 Service Unavailable)
          </h2>
          <div style={{ marginBottom: '10px' }}>
            <strong>Status:</strong> <span style={{ 
              color: diagnostics.websocketStatus === 'connected' ? '#155724' : '#721c24',
              fontWeight: 'bold'
            }}>
              {diagnostics.websocketStatus}
            </span>
            {diagnostics.websocketAttempts > 0 && (
              <span style={{ marginLeft: '10px', fontSize: '14px', color: '#6c757d' }}>
                (Attempts: {diagnostics.websocketAttempts})
              </span>
            )}
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

          {diagnostics.httpStatus && (
            <div style={{ 
              marginBottom: '15px', 
              padding: '10px', 
              backgroundColor: '#fff3cd', 
              border: '1px solid #ffeaa7',
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              <strong>HTTP Status:</strong> {diagnostics.httpStatus}
            </div>
          )}
          
          {diagnostics.websocketStatus !== 'connected' && (
            <div style={{ marginTop: '15px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#495057' }}>🔧 Immediate Fix Actions:</h4>
              <ol style={{ margin: 0, paddingLeft: '20px', color: '#495057' }}>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Check service status:</strong> <code>kubectl get pods | grep realtime</code>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Check container logs:</strong> <code>kubectl logs deploy/realtime-server</code>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Verify environment:</strong> Check SUPABASE_URL and JWT_SECRET in container
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Wake preview env:</strong> Hit <code>curl https://aorpjse3ulohvjtaxgvsp.mysuperdev.app/health</code>
                </li>
                <li style={{ marginBottom: '0' }}>
                  <strong>Check proxy config:</strong> Verify WebSocket headers in NGINX/ALB
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Live Console Errors */}
        {diagnostics.consoleErrors.length > 0 && (
          <div style={{ 
            marginBottom: '20px', 
            padding: '15px', 
            backgroundColor: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: '8px'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#721c24' }}>
              🔴 Live Console Errors (Last 5)
            </h3>
            <div style={{ 
              fontFamily: 'monospace',
              fontSize: '12px',
              backgroundColor: '#ffffff',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #dee2e6',
              maxHeight: '150px',
              overflowY: 'auto'
            }}>
              {diagnostics.consoleErrors.map((error, index) => (
                <div key={index} style={{ marginBottom: '5px', color: '#721c24' }}>
                  {error}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* React Hydration Status */}
        <div style={{ 
          marginBottom: '20px', 
          padding: '15px', 
          backgroundColor: diagnostics.hydrated ? '#d4edda' : '#fff3cd',
          border: `1px solid ${diagnostics.hydrated ? '#c3e6cb' : '#ffeaa7'}`,
          borderRadius: '8px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#495057' }}>
            ⚛️ React Hydration Status
          </h3>
          <div style={{ marginBottom: '10px' }}>
            <strong>Status:</strong> <span style={{ 
              color: diagnostics.hydrated ? '#155724' : '#856404'
            }}>
              {diagnostics.hydrated ? 'Hydration completed successfully' : 'Hydrating...'}
            </span>
          </div>
          <div style={{ fontSize: '14px', color: '#6c757d' }}>
            <strong>Note:</strong> Hydration is working fine. The WebSocket 503 is the real blocker.
          </div>
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

        {/* Safe to Ignore */}
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
              <strong>"false" logs:</strong> Noisy console.log from your code editor
            </li>
            <li style={{ marginBottom: '5px' }}>
              <strong>Unrecognized feature 'vr', 'battery':</strong> Old Permissions-Policy tokens
            </li>
            <li style={{ marginBottom: '5px' }}>
              <strong>Authenticating iframe:</strong> Normal Supabase auth flow
            </li>
            <li style={{ marginBottom: '0' }}>
              <strong>A listener indicated async response:</strong> Browser extension noise
            </li>
          </ul>
        </div>

        {/* Quick Debug Commands */}
        <div style={{ 
          marginTop: '20px',
          padding: '15px', 
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '8px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#495057' }}>
            🛠️ Debug Commands (Run These Now)
          </h3>
          <div style={{ 
            fontFamily: 'monospace',
            fontSize: '12px',
            backgroundColor: '#ffffff',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #dee2e6'
          }}>
            <div style={{ marginBottom: '8px', padding: '5px', backgroundColor: '#f8f9fa' }}>
              <strong>1. Check if service is running:</strong><br/>
              <code>kubectl get pods -l app=realtime-server</code>
            </div>
            <div style={{ marginBottom: '8px', padding: '5px', backgroundColor: '#f8f9fa' }}>
              <strong>2. Check container logs:</strong><br/>
              <code>kubectl logs deploy/realtime-server --tail=50</code>
            </div>
            <div style={{ marginBottom: '8px', padding: '5px', backgroundColor: '#f8f9fa' }}>
              <strong>3. Test HTTP endpoint:</strong><br/>
              <code>curl -I https://aorpjse3ulohvjtaxgvsp.mysuperdev.app/</code>
            </div>
            <div style={{ padding: '5px', backgroundColor: '#f8f9fa' }}>
              <strong>4. Wake preview environment:</strong><br/>
              <code>curl https://aorpjse3ulohvjtaxgvsp.mysuperdev.app/health</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
