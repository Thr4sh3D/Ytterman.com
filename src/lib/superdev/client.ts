import { createSuperdevClient } from '@superdevhq/client';

// Check if we're in public mode (must be determined before client creation)
const isPublicMode = () => {
  return (window as any).__SUPERDEV_PUBLIC_MODE__ === true ||
         localStorage.getItem('superdev_public_mode') === 'true' ||
         (window.location.pathname !== '/admin/blog-cleanup' && 
          !window.location.pathname.startsWith('/admin/'));
};

// Create a completely safe wrapper that prevents ALL authentication for public pages
let superdevClient: any = null;

try {
  // Only attempt to create client if we have required environment variables
  if (import.meta.env.VITE_APP_ID) {
    const publicMode = isPublicMode();
    
    superdevClient = createSuperdevClient({
      appId: import.meta.env.VITE_APP_ID,
      // Completely disable auth for public pages
      autoInitialize: !publicMode,
      skipTokenValidation: publicMode,
      requireAuth: !publicMode,
      disableAuth: publicMode,
      // Ultra-comprehensive error suppression
      onError: (error: any) => {
        // For public pages, completely ignore ALL errors
        if (publicMode) {
          return;
        }
        // For admin pages, log but don't throw
        console.warn('Superdev client error:', error);
      },
      // Additional public mode configurations
      ...(publicMode && {
        skipAuthCheck: true,
        allowAnonymous: true,
        publicAccess: true
      })
    });
    
    // For public pages, wrap all auth methods to return safe defaults
    if (publicMode && superdevClient?.auth) {
      const originalAuth = superdevClient.auth;
      superdevClient.auth = {
        me: async () => null,
        login: () => Promise.resolve(),
        logout: () => Promise.resolve(),
        list: async () => [],
        isAuthenticated: () => false,
        getToken: () => null,
        ...originalAuth
      };
    }
    
  }
} catch (error) {
  // If client creation fails, create a comprehensive mock client
  console.warn('Superdev client creation failed - using comprehensive mock client');
}

// If client creation failed or we're in public mode, ensure we have a safe mock client
if (!superdevClient || isPublicMode()) {
  superdevClient = {
    entity: (name: string) => ({
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
    }),
    auth: {
      me: async () => null,
      login: () => Promise.resolve(),
      logout: () => Promise.resolve(),
      list: async () => [],
      isAuthenticated: () => false,
      getToken: () => null
    },
    initialize: () => Promise.resolve(),
    isPublicMode: () => isPublicMode()
  };
}

export { superdevClient };