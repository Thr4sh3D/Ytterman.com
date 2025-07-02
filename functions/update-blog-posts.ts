import { createSuperdevClient } from 'npm:@superdevhq/client@0.1.51';

const superdev = createSuperdevClient({ 
  appId: Deno.env.get('SUPERDEV_APP_ID'), 
});

Deno.serve(async (req) => {
  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response('Unauthorized', { status: 401 });
    }
    
    const token = authHeader.split(' ')[1];
    superdev.auth.setToken(token);
    
    // Hämta alla blogginlägg
    const posts = await superdev.entities.BlogPost.filter({});
    
    // Filtrera bort SEO-relaterade inlägg
    const seoKeywords = ['seo', 'sökmotoroptimering', 'google', 'ranking', 'webbplats', 'hemsida', 'webbutveckling'];
    const seoPostIds = [];
    
    // Identifiera SEO-inlägg baserat på nyckelord i titel, innehåll eller nyckelord
    for (const post of posts) {
      const postContent = (post.title + ' ' + post.content + ' ' + post.keywords).toLowerCase();
      if (seoKeywords.some(keyword => postContent.includes(keyword.toLowerCase()))) {
        seoPostIds.push(post.id);
      }
    }
    
    // Ta bort SEO-inlägg
    for (const id of seoPostIds) {
      await superdev.entities.BlogPost.delete(id);
    }
    
    // Uppdatera resterande inlägg med spridda datum och förbättrad formatering
    const remainingPosts = posts.filter(post => !seoPostIds.includes(post.id));
    
    // Skapa datum spridda över 2025
    const startDate = new Date('2025-01-15');
    const endDate = new Date('2025-11-15');
    
    for (let i = 0; i < remainingPosts.length; i++) {
      const post = remainingPosts[i];
      
      // Beräkna ett jämnt fördelat datum
      const daysToAdd = Math.floor(i * (endDate.getTime() - startDate.getTime()) / (remainingPosts.length - 1 || 1) / (1000 * 60 * 60 * 24));
      const postDate = new Date(startDate);
      postDate.setDate(startDate.getDate() + daysToAdd);
      
      // Förbättra formatering av innehållet
      let enhancedContent = post.content;
      
      // Lägg till rubriker om de saknas
      if (!enhancedContent.includes('<h2>') && !enhancedContent.includes('<h3>')) {
        const paragraphs = enhancedContent.split('\n\n');
        if (paragraphs.length > 2) {
          // Lägg till rubriker mellan stycken
          for (let j = 2; j < paragraphs.length; j += 2) {
            const words = paragraphs[j-1].split(' ').filter(w => w.length > 3).slice(0, 3);
            if (words.length > 0) {
              const headingText = words.join(' ').replace(/[^\w\såäöÅÄÖ]/g, '') + '...';
              paragraphs.splice(j, 0, `<h2>${headingText}</h2>`);
            }
          }
          enhancedContent = paragraphs.join('\n\n');
        }
      }
      
      // Lägg till listor om de saknas
      if (!enhancedContent.includes('<ul>') && !enhancedContent.includes('<ol>')) {
        const paragraphs = enhancedContent.split('\n\n');
        for (let j = 0; j < paragraphs.length; j++) {
          if (paragraphs[j].length > 100 && !paragraphs[j].startsWith('<h')) {
            const sentences = paragraphs[j].split('. ');
            if (sentences.length >= 3) {
              const listItems = sentences.slice(0, 3).map(s => `<li>${s}.</li>`);
              paragraphs[j] = `<p>${sentences[0]}.</p>\n<ul>\n${listItems.join('\n')}\n</ul>\n<p>${sentences.slice(3).join('. ')}</p>`;
              break;
            }
          }
        }
        enhancedContent = paragraphs.join('\n\n');
      }
      
      // Lägg till citat om de saknas
      if (!enhancedContent.includes('<blockquote>')) {
        const paragraphs = enhancedContent.split('\n\n');
        for (let j = 1; j < paragraphs.length - 1; j++) {
          if (paragraphs[j].length > 50 && paragraphs[j].length < 200 && !paragraphs[j].startsWith('<')) {
            paragraphs[j] = `<blockquote>\n${paragraphs[j]}\n</blockquote>`;
            break;
          }
        }
        enhancedContent = paragraphs.join('\n\n');
      }
      
      // Generera en bild om den saknas
      let featuredImage = post.featured_image;
      if (!featuredImage || featuredImage.trim() === '') {
        // Använd platshållarbilder baserade på kategori
        const placeholderImages = {
          'Kontrollansvarig': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000',
          'BAS-P': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000',
          'BAS-U': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000',
          'Bygglov': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000'
        };
        
        featuredImage = placeholderImages[post.category] || 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000';
      }
      
      // Uppdatera inlägget
      await superdev.entities.BlogPost.update(post.id, {
        content: enhancedContent,
        featured_image: featuredImage,
        created_at: postDate.toISOString(),
        reading_time: Math.max(3, Math.ceil(enhancedContent.length / 1000))
      });
    }
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: `Uppdaterade ${remainingPosts.length} inlägg och tog bort ${seoPostIds.length} SEO-relaterade inlägg.` 
    }), {
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