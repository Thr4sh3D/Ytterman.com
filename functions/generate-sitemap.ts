Deno.serve(async (req) => {
  try {
    // Define the static routes for the sitemap
    const routes = [
      { url: '/', priority: '1.0', changefreq: 'weekly' },
      { url: '/tjanster', priority: '0.9', changefreq: 'monthly' },
      { url: '/kontrollansvarig', priority: '0.9', changefreq: 'monthly' },
      { url: '/bas-p', priority: '0.9', changefreq: 'monthly' },
      { url: '/bas-u', priority: '0.9', changefreq: 'monthly' },
      { url: '/blogg', priority: '0.8', changefreq: 'weekly' },
      { url: '/kontakt', priority: '0.7', changefreq: 'monthly' },
      { url: '/analys', priority: '0.6', changefreq: 'monthly' }
    ];

    // Get the domain from environment or request headers
    const host = req.headers.get('host');
    const protocol = req.headers.get('x-forwarded-proto') || 'https';
    
    if (!host) {
      return new Response(JSON.stringify({ 
        error: 'No domain found for deployment',
        message: 'Sitemap generation requires a deployed domain'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const baseUrl = `${protocol}://${host}`;
    const currentDate = new Date().toISOString().split('T')[0];

    // Generate XML sitemap
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    routes.forEach(route => {
      sitemap += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    });

    sitemap += `
</urlset>`;

    return new Response(JSON.stringify({ 
      success: true,
      sitemap: sitemap,
      message: 'Sitemap generated successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      success: false
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
});