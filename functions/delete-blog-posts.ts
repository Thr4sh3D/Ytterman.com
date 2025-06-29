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

    // Hämta alla blogginlägg från 29 juni 2025
    const targetDate = '2025-06-29';
    const allPosts = await superdev.entities.BlogPost.list();
    
    const postsToDelete = allPosts.filter(post => {
      const postDate = new Date(post.created_at).toISOString().split('T')[0];
      return postDate === targetDate;
    });

    console.log(`Hittade ${postsToDelete.length} blogginlägg från ${targetDate}`);

    // Ta bort varje blogginlägg
    const deletePromises = postsToDelete.map(post => 
      superdev.entities.BlogPost.delete(post.id)
    );

    await Promise.all(deletePromises);

    return new Response(JSON.stringify({ 
      success: true, 
      deletedCount: postsToDelete.length,
      message: `Tog bort ${postsToDelete.length} blogginlägg från ${targetDate}`
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error('Error deleting blog posts:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});