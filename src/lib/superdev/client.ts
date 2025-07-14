import { createSuperdevClient } from '@superdevhq/client';

// Create client with error handling configuration
export const superdevClient = createSuperdevClient({
  appId: process.env.SUPERDEV_APP_ID,
  // Add error handling configuration
  onError: (error: any) => {
    // Suppress common development authentication errors
    if (error?.message?.includes('Failed to fetch') || 
        error?.message?.includes('invalid JWT') ||
        error?.name === 'TypeError') {
      // Log only in development, suppress in production
      if (process.env.NODE_ENV === 'development') {
        console.warn('Superdev auth error (development):', error.message);
      }
      return; // Don't throw the error
    }
    // Re-throw other errors
    throw error;
  }
});

// Export configured client
export default superdevClient;