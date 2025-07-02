Deno.serve(async (req) => {
  try {
    // Du kan anpassa versionsnumret här eller hämta det från en konfigurationsfil
    const version = "1.0.0";
    
    return new Response(JSON.stringify({ version }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});