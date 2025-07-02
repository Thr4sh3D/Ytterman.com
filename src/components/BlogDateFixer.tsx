import { useEffect } from 'react';
import { BlogPost } from '@/entities';

export const BlogDateFixer = () => {
  useEffect(() => {
    const fixFutureDates = async () => {
      try {
        // Hämta alla blogginlägg
        const posts = await BlogPost.list();
        const currentDate = new Date();
        const postsToUpdate = [];

        for (const post of posts) {
          const postDate = new Date(post.created_at);
          
          // Om datumet är i framtiden, uppdatera det
          if (postDate > currentDate) {
            // Skapa ett slumpmässigt datum från de senaste 6 månaderna
            const sixMonthsAgo = new Date();
            sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
            
            const randomTime = sixMonthsAgo.getTime() + 
              Math.random() * (currentDate.getTime() - sixMonthsAgo.getTime());
            
            const newDate = new Date(randomTime);
            
            postsToUpdate.push({
              id: post.id,
              data: {
                created_at: newDate.toISOString()
              }
            });
          }
        }

        // Uppdatera alla inlägg med framtida datum
        if (postsToUpdate.length > 0) {
          await BlogPost.batch().update(postsToUpdate);
          console.log(`Uppdaterade ${postsToUpdate.length} blogginlägg med framtida datum`);
        }
      } catch (error) {
        console.error('Fel vid uppdatering av blogginlägg datum:', error);
      }
    };

    fixFutureDates();
  }, []);

  return null; // Denna komponent renderar inget
};