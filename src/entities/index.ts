import { superdevClient } from "@/lib/superdev/client";

// Ultra-safe entity wrapper that never throws errors and respects public mode
const createSafeEntity = (entityName: string) => {
  try {
    // Check if we're in public mode
    const isPublicMode = (window as any).__SUPERDEV_PUBLIC_MODE__ === true ||
                        localStorage.getItem('superdev_public_mode') === 'true';
    
    // For public pages, return mock entity immediately
    if (isPublicMode && entityName !== 'BlogPost') {
      return {
        list: async () => [],
        filter: async () => [],
        get: async () => null,
        create: async () => null,
        update: async () => null,
        delete: async () => null,
        find: async () => null,
        query: () => ({
          where: () => ({ exec: async () => [] }),
          exec: async () => []
        }),
        schema: () => ({}),
        bulkCreate: async () => [],
        batch: () => ({
          create: async () => [],
          update: async () => [],
          delete: async () => []
        })
      };
    }
    
    const entity = superdevClient?.entity?.(entityName);
    
    if (!entity) {
      // Return comprehensive mock entity if client is not available
      return {
        list: async () => [],
        filter: async () => [],
        get: async () => null,
        create: async () => null,
        update: async () => null,
        delete: async () => null,
        find: async () => null,
        query: () => ({
          where: () => ({ exec: async () => [] }),
          exec: async () => []
        }),
        schema: () => ({}),
        bulkCreate: async () => [],
        batch: () => ({
          create: async () => [],
          update: async () => [],
          delete: async () => []
        })
      };
    }

    // Create a comprehensive proxy to handle ALL possible errors
    return new Proxy(entity, {
      get(target, prop) {
        const originalMethod = target[prop];
        
        if (typeof originalMethod === 'function') {
          return async function(...args: any[]) {
            try {
              return await originalMethod.apply(target, args);
            } catch (error: any) {
              // Return safe defaults for all errors - no logging to keep console clean
              if (String(prop).includes('list') || String(prop).includes('filter')) {
                return [];
              } else if (String(prop).includes('get') || String(prop).includes('find')) {
                return null;
              } else if (String(prop).includes('create') || String(prop).includes('update') || String(prop).includes('delete')) {
                return null;
              } else if (String(prop).includes('schema')) {
                return {};
              } else if (String(prop).includes('bulk') || String(prop).includes('batch')) {
                return [];
              }
              return [];
            }
          };
        }
        
        return originalMethod;
      }
    });
  } catch (error) {
    // Return comprehensive mock entity if anything fails
    return {
      list: async () => [],
      filter: async () => [],
      get: async () => null,
      create: async () => null,
      update: async () => null,
      delete: async () => null,
      find: async () => null,
      query: () => ({
        where: () => ({ exec: async () => [] }),
        exec: async () => []
      }),
      schema: () => ({}),
      bulkCreate: async () => [],
      batch: () => ({
        create: async () => [],
        update: async () => [],
        delete: async () => []
      })
    };
  }
};

// Create completely safe entity managers
export const BlogPost = createSafeEntity("BlogPost");

// Ultra-safe User entity with public mode awareness
export const User = {
  me: async () => {
    try {
      // Check if we're in public mode
      const isPublicMode = (window as any).__SUPERDEV_PUBLIC_MODE__ === true ||
                          localStorage.getItem('superdev_public_mode') === 'true';
      
      // For public pages, never attempt authentication
      if (isPublicMode) {
        return null;
      }
      
      return await superdevClient?.auth?.me?.() || null;
    } catch (error) {
      return null;
    }
  },
  login: () => {
    try {
      // Check if we're in public mode
      const isPublicMode = (window as any).__SUPERDEV_PUBLIC_MODE__ === true ||
                          localStorage.getItem('superdev_public_mode') === 'true';
      
      // For public pages, never trigger login
      if (isPublicMode) {
        return Promise.resolve();
      }
      
      return superdevClient?.auth?.login?.() || Promise.resolve();
    } catch (error) {
      return Promise.resolve();
    }
  },
  logout: () => {
    try {
      return superdevClient?.auth?.logout?.() || Promise.resolve();
    } catch (error) {
      return Promise.resolve();
    }
  },
  list: async () => {
    try {
      return await superdevClient?.auth?.list?.() || [];
    } catch (error) {
      return [];
    }
  }
};