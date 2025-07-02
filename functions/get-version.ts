// This function manages the version number for the website
// It stores the version in a file in the /tmp directory
// If it's a new day, it resets the counter to 1
// If it's the same day, it increments the counter by 1

Deno.serve(async (req) => {
  try {
    const versionFilePath = "/tmp/version.json";
    let versionData = { date: "", counter: 0 };
    
    // Try to read existing version data
    try {
      const fileContent = await Deno.readTextFile(versionFilePath);
      versionData = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist or can't be read, we'll create it
      console.log("No existing version file, creating new one");
    }
    
    // Get current date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    // Check if it's a new day
    if (versionData.date !== today) {
      // New day, reset counter
      versionData = {
        date: today,
        counter: 1
      };
    } else {
      // Same day, increment counter
      versionData.counter += 1;
    }
    
    // Save updated version data
    await Deno.writeTextFile(versionFilePath, JSON.stringify(versionData));
    
    // Format version string as YYYY-MM-DD-N
    const versionString = `${versionData.date}-${versionData.counter}`;
    
    return new Response(JSON.stringify({ version: versionString }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error managing version:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
});