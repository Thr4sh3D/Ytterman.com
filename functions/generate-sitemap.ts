import { BlogPost } from "../src/entities";

Deno.serve(async (req) => {
  try {
    // Get all published blog posts
    const blogPosts = await BlogPost.filter({ published: true });
    
    // Base URL of the website
    const baseUrl = "https://ytterman.com";
    
    // Current date in ISO format for lastmod
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Start building the XML sitemap
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Static pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/tjanster</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/kontrollansvarig</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/bas-p</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/bas-u</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blogg</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/kontakt</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/analys</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;

  // Add blog posts to sitemap
  for (const post of blogPosts) {
    sitemap += `
  <url>
    <loc>${baseUrl}/blogg/${post.slug}</loc>
    <lastmod>${post.updated_at ? new Date(post.updated_at).toISOString().split('T')[0] : currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  // Close the sitemap
  sitemap += `
</urlset>`;

    // Write the sitemap to a file in the public directory
    try {
      await Deno.writeTextFile("/tmp/sitemap.xml", sitemap);
      console.log("Sitemap file written successfully");
    } catch (writeError) {
      console.error("Error writing sitemap file:", writeError);
    }

    // Return the sitemap as XML
    return new Response(sitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response(JSON.stringify({ error: "Failed to generate sitemap" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
});