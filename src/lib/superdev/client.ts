import { createSuperdevClient } from '@superdevhq/client';

// Create client with public-friendly error handling configuration
export const superdevClient = createSuperdevClient({
  appId: import.meta.env.VITE_APP_ID,
  // Configure for public access - don't force authentication
  requireAuth: false, // Allow public access
  // Add error handling configuration that doesn't interrupt user experience
  onError: (error: any) => {
    // Suppress ALL authentication-related errors to prevent login prompts
    if (error?.message?.includes('Failed to fetch') || 
        error?.message?.includes('invalid JWT') ||
        error?.message?.includes('Unauthorized') ||
        error?.message?.includes('Authentication required') ||
        error?.message?.includes('Login required') ||
        error?.name === 'TypeError') {
      
      // Only log in development, completely silent in production
      if (import.meta.env.MODE === 'development') {
        console.warn('Superdev auth bypassed for public access:', error.message);
      }
      return; // Don't throw the error - this prevents login prompts
    }
    
    // For other errors, log but don't throw to avoid disrupting user experience
    console.warn('Superdev client error:', error);
    return; // Don't throw any errors that could trigger auth flows
  }
});

// Export configured client
export default superdevClient;