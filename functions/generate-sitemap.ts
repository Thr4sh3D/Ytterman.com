import { createSuperdevClient } from 'npm:@superdevhq/client@0.1.51';

const superdev = createSuperdevClient({ 
  appId: Deno.env.get('SUPERDEV_APP_ID'), 
});

Deno.serve(async (req) => {
  try {
    // Get the domain from the deployment
    const domain = await getDomain(req);
    
    if (!domain) {
      return new Response(JSON.stringify({ error: "No domain found for deployment" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    
    // Generate sitemap XML
    const xml = await generateSitemapXml(req, domain);
    
    return new Response(JSON.stringify({ success: true, sitemap: xml }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});

async function getDomain(req: Request) {
  try {
    // Try to get domain from request headers first
    const host = req.headers.get('host');
    if (host && !host.includes('localhost') && !host.includes('127.0.0.1')) {
      return host;
    }
    
    // Fallback to deployment info
    try {
      const deploymentInfo = await superdev.app.getDeploymentInfo();
      return deploymentInfo?.domain || null;
    } catch (deployError) {
      console.log("Could not get deployment info:", deployError.message);
      return null;
    }
  } catch (error) {
    console.error("Error getting domain:", error);
    return null;
  }
}

async function generateSitemapXml(req: Request, domain: string) {
  // Define static routes
  const staticRoutes = [
    "/",
    "/tjanster",
    "/kontrollansvarig",
    "/bas-p",
    "/bas-u",
    "/blogg",
    "/kontakt",
    "/tack",
    "/analys"
  ];
  
  // Get dynamic routes from blog posts
  let blogPosts = [];
  try {
    // Set up authentication if available
    const authHeader = req.headers.get('Authorization');
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      superdev.auth.setToken(token);
    }
    
    // Fetch published blog posts using the entity
    blogPosts = await superdev.entities.BlogPost.filter({ published: true });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    // Continue without blog posts if there's an error
  }
  
  // Start building the XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add static routes
  for (const route of staticRoutes) {
    xml += '  <url>\n';
    xml += `    <loc>https://${domain}${route}</loc>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  }
  
  // Add dynamic blog post routes
  for (const post of blogPosts) {
    if (post.slug) {
      xml += '  <url>\n';
      xml += `    <loc>https://${domain}/blogg/${post.slug}</loc>\n`;
      xml += '    <changefreq>monthly</changefreq>\n';
      xml += '    <priority>0.6</priority>\n';
      xml += '  </url>\n';
    }
  }
  
  // Close the XML
  xml += '</urlset>';
  
  return xml;
}