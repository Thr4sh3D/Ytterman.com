// This function manages the version number for the website
// It stores the version in memory and uses a simple counter approach
// Since serverless functions are stateless, we'll use a simpler approach

Deno.serve(async (req) => {
  try {
    // For serverless environments, we'll use a timestamp-based approach
    // This ensures each deployment gets a unique version
    const now = new Date();
    const dateString = now.toISOString().split('T')[0]; // YYYY-MM-DD
    const timeString = now.toTimeString().split(' ')[0].replace(/:/g, ''); // HHMMSS
    
    // Create a version string with date and time
    const versionString = `${dateString}-${timeString}`;
    
    return new Response(JSON.stringify({ version: versionString }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error generating version:", error);
    
    // Fallback version if there's any error
    const fallbackVersion = new Date().toISOString().split('T')[0] + "-1";
    
    return new Response(JSON.stringify({ version: fallbackVersion }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
});