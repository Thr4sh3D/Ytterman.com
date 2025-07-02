import { useEffect } from 'react';

export const DynamicSitemap = () => {
  useEffect(() => {
    // This component doesn't render anything visible
    // It's just a utility to trigger sitemap generation
    const updateSitemap = async () => {
      try {
        // Call the sitemap generation function directly via fetch
        // since it returns XML, not JSON
        const response = await fetch('/api/functions/generate-sitemap', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          console.log('Sitemap generated successfully');
        } else {
          console.error('Error generating sitemap:', response.statusText);
        }
      } catch (error) {
        console.error('Error generating sitemap:', error);
      }
    };
    
    // Generate sitemap when the app loads
    updateSitemap();
    
    // Set up a weekly refresh
    const intervalId = setInterval(updateSitemap, 7 * 24 * 60 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return null;
};