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
    
    const user = await superdev.auth.me();
    if (!user) {
      return new Response('Unauthorized', { status: 401 });
    }

    // Hitta blogginlägget med titeln "Vanliga misstag i byggprocessen - Undvik dessa fallgropar"
    const targetTitle = "Vanliga misstag i byggprocessen - Undvik dessa fallgropar";
    const allPosts = await superdev.entities.BlogPost.list();
    
    const postToUpdate = allPosts.find(post => post.title === targetTitle);

    if (!postToUpdate) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Blogginlägg hittades inte' 
      }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Uppdatera med en passande bild för byggmisstag
    const imageUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80";

    await superdev.entities.BlogPost.update(postToUpdate.id, {
      featured_image: imageUrl
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Uppdaterade blogginlägget "${targetTitle}" med bild`,
      imageUrl: imageUrl
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error('Error updating blog post:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});