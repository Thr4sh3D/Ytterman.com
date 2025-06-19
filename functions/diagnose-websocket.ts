Deno.serve(async (req) => {
  console.log('🔍 Starting WebSocket diagnostics...');
  
  const diagnostics = {
    timestamp: new Date().toISOString(),
    tests: [],
    environment: {},
    recommendations: []
  };

  try {
    // Test 1: Check environment variables
    diagnostics.environment = {
      SUPABASE_URL: Deno.env.get('SUPABASE_URL') ? 'SET' : 'MISSING',
      SUPABASE_ANON_KEY: Deno.env.get('SUPABASE_ANON_KEY') ? 'SET' : 'MISSING',
      SUPERDEV_APP_ID: Deno.env.get('SUPERDEV_APP_ID') ? 'SET' : 'MISSING'
    };

    // Test 2: Try HTTP connection to the WebSocket endpoint
    try {
      const httpResponse = await fetch('https://aorpjse3ulohvjtaxgvsp.mysuperdev.app/', {
        method: 'GET',
        headers: {
          'User-Agent': 'Superdev-Diagnostics/1.0'
        }
      });
      
      diagnostics.tests.push({
        name: 'HTTP Endpoint Test',
        status: httpResponse.ok ? 'PASS' : 'FAIL',
        details: {
          status: httpResponse.status,
          statusText: httpResponse.statusText,
          headers: Object.fromEntries(httpResponse.headers.entries())
        }
      });

      if (httpResponse.status === 503) {
        diagnostics.recommendations.push('HTTP endpoint returns 503 - Service is completely down');
        diagnostics.recommendations.push('Check if Supabase realtime service is running');
        diagnostics.recommendations.push('Verify container health and resource limits');
      }

    } catch (error) {
      diagnostics.tests.push({
        name: 'HTTP Endpoint Test',
        status: 'ERROR',
        details: { error: error.message }
      });
    }

    // Test 3: DNS Resolution
    try {
      const dnsTest = await fetch('https://aorpjse3ulohvjtaxgvsp.mysuperdev.app/favicon.ico', {
        method: 'HEAD'
      });
      
      diagnostics.tests.push({
        name: 'DNS Resolution',
        status: 'PASS',
        details: 'Domain resolves correctly'
      });
    } catch (error) {
      diagnostics.tests.push({
        name: 'DNS Resolution', 
        status: 'FAIL',
        details: { error: error.message }
      });
      diagnostics.recommendations.push('DNS resolution failed - check domain configuration');
    }

    // Test 4: WebSocket simulation (we can't actually test WS from Deno easily, but we can check the upgrade path)
    try {
      const wsUpgradeTest = await fetch('https://aorpjse3ulohvjtaxgvsp.mysuperdev.app/', {
        method: 'GET',
        headers: {
          'Connection': 'Upgrade',
          'Upgrade': 'websocket',
          'Sec-WebSocket-Version': '13',
          'Sec-WebSocket-Key': 'dGhlIHNhbXBsZSBub25jZQ=='
        }
      });

      diagnostics.tests.push({
        name: 'WebSocket Upgrade Path',
        status: wsUpgradeTest.status === 101 ? 'PASS' : 'FAIL',
        details: {
          status: wsUpgradeTest.status,
          expectedStatus: 101,
          actualResponse: wsUpgradeTest.statusText
        }
      });

      if (wsUpgradeTest.status === 503) {
        diagnostics.recommendations.push('WebSocket upgrade also returns 503 - Realtime service is down');
      }

    } catch (error) {
      diagnostics.tests.push({
        name: 'WebSocket Upgrade Path',
        status: 'ERROR', 
        details: { error: error.message }
      });
    }

    // Test 5: Check if this is a preview environment issue
    const isPreviewEnv = Deno.env.get('VERCEL_ENV') === 'preview' || 
                        Deno.env.get('NETLIFY_CONTEXT') === 'deploy-preview' ||
                        req.headers.get('host')?.includes('preview');
    
    if (isPreviewEnv) {
      diagnostics.recommendations.push('PREVIEW ENVIRONMENT DETECTED - These often have cold-start issues');
      diagnostics.recommendations.push('Try hitting the main HTTP endpoint first to wake up the service');
      diagnostics.recommendations.push('Preview environments may have limited WebSocket support');
    }

    // Generate final recommendations
    const failedTests = diagnostics.tests.filter(test => test.status === 'FAIL' || test.status === 'ERROR');
    
    if (failedTests.length > 0) {
      diagnostics.recommendations.push('IMMEDIATE ACTIONS NEEDED:');
      diagnostics.recommendations.push('1. Check Supabase dashboard for service status');
      diagnostics.recommendations.push('2. Verify realtime service is enabled in Supabase project');
      diagnostics.recommendations.push('3. Check if you have hit rate limits or quota');
      diagnostics.recommendations.push('4. Try restarting the Supabase realtime service');
    }

    return new Response(JSON.stringify(diagnostics, null, 2), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Diagnostics failed:', error);
    
    return new Response(JSON.stringify({
      error: 'Diagnostics failed',
      details: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
});