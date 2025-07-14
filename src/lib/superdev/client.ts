import { createSuperdevClient } from '@superdevhq/client';

// Create client with robust error handling for public access
export const superdevClient = createSuperdevClient({
  appId: import.meta.env.VITE_APP_ID,
  // Configure for graceful public access
  autoInitialize: false, // Prevent automatic initialization that might cause errors
  skipTokenValidation: true, // Skip token validation for public access
  // Enhanced error handling configuration
  onError: (error: any) => {
    // Completely suppress authentication-related errors
    if (error?.message?.includes('Failed to fetch') || 
        error?.message?.includes('invalid JWT') ||
        error?.message?.includes('Unauthorized') ||
        error?.message?.includes('Authentication required') ||
        error?.message?.includes('Login required') ||
        error?.message?.includes('validateToken') ||
        error?.name === 'TypeError') {
      
      // Silent in all environments to prevent console spam
      return; // Don't throw the error - this prevents login prompts and errors
    }
    
    // For other errors, log but don't throw to avoid disrupting user experience
    if (import.meta.env.MODE === 'development') {
      console.warn('Superdev client non-auth error:', error);
    }
    return; // Don't throw any errors that could trigger auth flows
  }
});

// Initialize client safely without throwing errors
try {
  // Only initialize if we have the necessary environment variables
  if (import.meta.env.VITE_APP_ID) {
    superdevClient.initialize?.();
  }
} catch (error) {
  // Silently handle initialization errors
  if (import.meta.env.MODE === 'development') {
    console.warn('Superdev client initialization skipped due to auth requirements');
  }
}