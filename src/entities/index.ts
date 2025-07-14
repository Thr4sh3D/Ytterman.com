import { superdevClient } from "@/lib/superdev/client";

// Wrap entity calls with error handling that doesn't require authentication
const createEntityWithErrorHandling = (entityName: string) => {
  const entity = superdevClient.entity(entityName);
  
  // Create a proxy to handle errors gracefully without requiring login
  return new Proxy(entity, {
    get(target, prop) {
      const originalMethod = target[prop];
      
      if (typeof originalMethod === 'function') {
        return async function(...args: any[]) {
          try {
            return await originalMethod.apply(target, args);
          } catch (error: any) {
            // Handle authentication errors gracefully - return empty data instead of forcing login
            if (error?.message?.includes('Failed to fetch') || 
                error?.message?.includes('invalid JWT') ||
                error?.message?.includes('Unauthorized') ||
                error?.message?.includes('Authentication required') ||
                error?.name === 'TypeError') {
              console.warn(`Entity ${entityName} method ${String(prop)} failed due to auth issues - returning empty data for public access`);
              
              // Return appropriate empty data based on method
              if (String(prop).includes('list') || String(prop).includes('filter')) {
                return []; // Return empty array for list operations
              } else if (String(prop).includes('get') || String(prop).includes('find')) {
                return null; // Return null for single item operations
              }
              return []; // Default to empty array
            }
            throw error;
          }
        };
      }
      
      return originalMethod;
    }
  });
};

// Create public-safe entity managers
export const BlogPost = createEntityWithErrorHandling("BlogPost");

// Create a public-safe User entity that doesn't require authentication for basic operations
export const User = {
  // Override methods to be public-safe
  me: async () => {
    try {
      return await superdevClient.auth.me();
    } catch (error) {
      // Return null if not authenticated instead of throwing error
      return null;
    }
  },
  login: () => superdevClient.auth.login(),
  logout: () => superdevClient.auth.logout(),
  list: async () => {
    try {
      return await superdevClient.auth.list();
    } catch (error) {
      return []; // Return empty array if not authenticated
    }
  }
};