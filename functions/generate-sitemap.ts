import { createSuperdevClient } from 'npm:@superdevhq/client@0.1.51';

const superdev = createSuperdevClient({ 
  appId: Deno.env.get('SUPERDEV_APP_ID'), 
});

Deno.serve(async (req) => {
  try {
    // Fetch all published blog posts
    const blogPosts = await superdev.entities.BlogPost.filter({ published: true });
    
    // Base URLs for the site
    const baseUrl = "https://ytterman.com";
    const staticUrls = [
      { url: "/", changefreq: "weekly", priority: "1.0" },
      { url: "/tjanster", changefreq: "monthly", priority: "0.8" },
      { url: "/kontrollansvarig", changefreq: "monthly", priority: "0.8" },
      { url: "/bas-p", changefreq: "monthly", priority: "0.8" },
      { url: "/bas-u", changefreq: "monthly", priority: "0.8" },
      { url: "/blogg", changefreq: "weekly", priority: "0.8" },
      { url: "/kontakt", changefreq: "monthly", priority: "0.7" },
    ];
    
    // Generate XML
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Add static URLs
    staticUrls.forEach(page => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += '  </url>\n';
    });
    
    // Add blog posts
    blogPosts.forEach(post => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}/blogg/${post.slug}</loc>\n`;
      xml += '    <changefreq>monthly</changefreq>\n';
      xml += '    <priority>0.6</priority>\n';
      if (post.updated_at) {
        xml += `    <lastmod>${new Date(post.updated_at).toISOString().split('T')[0]}</lastmod>\n`;
      } else if (post.created_at) {
        xml += `    <lastmod>${new Date(post.created_at).toISOString().split('T')[0]}</lastmod>\n`;
      }
      xml += '  </url>\n';
    });
    
    xml += '</urlset>';
    
    return new Response(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", { status: 500 });
  }
});