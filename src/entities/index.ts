import { superdevClient } from "@/lib/superdev/client";

// Wrap entity calls with error handling
const createEntityWithErrorHandling = (entityName: string) => {
  const entity = superdevClient.entity(entityName);
  
  // Create a proxy to handle errors gracefully
  return new Proxy(entity, {
    get(target, prop) {
      const originalMethod = target[prop];
      
      if (typeof originalMethod === 'function') {
        return async function(...args: any[]) {
          try {
            return await originalMethod.apply(target, args);
          } catch (error: any) {
            // Handle authentication errors gracefully
            if (error?.message?.includes('Failed to fetch') || 
                error?.message?.includes('invalid JWT') ||
                error?.name === 'TypeError') {
              console.warn(`Entity ${entityName} method ${String(prop)} failed due to auth issues (development)`);
              return []; // Return empty array for list operations
            }
            throw error;
          }
        };
      }
      
      return originalMethod;
    }
  });
};

export const BlogPost = createEntityWithErrorHandling("BlogPost");
export const User = superdevClient.auth;