/**
 * This file ensures that all public pages are accessible without authentication
 * It forces the client to operate in a fully public mode for non-admin pages
 * CRITICAL: This must run BEFORE any Superdev client initialization
 */

// Determine if current page should be public (no auth required)
const isPublicPage = () => {
  const pathname = window.location.pathname;
  return pathname !== '/admin/blog-cleanup' && !pathname.startsWith('/admin/');
};

// Force public mode configuration IMMEDIATELY
if (isPublicPage()) {
  // Set multiple flags to ensure public access
  localStorage.setItem('superdev_public_mode', 'true');
  localStorage.setItem('superdev_skip_auth', 'true');
  localStorage.setItem('superdev_disable_login', 'true');
  
  // Clear any existing auth tokens for public pages
  localStorage.removeItem('superdev_auth_token');
  localStorage.removeItem('superdev_jwt_token');
  
  // Clear any auth-related query parameters that might trigger login flows
  if (window.location.search.includes('code=') || 
      window.location.search.includes('state=') ||
      window.location.search.includes('error=')) {
    
    // Strip ALL query parameters to prevent auth redirects
    const cleanUrl = window.location.pathname;
    history.replaceState(null, '', cleanUrl);
  }
  
  // Override any global auth interceptors
  (window as any).__SUPERDEV_PUBLIC_MODE__ = true;
  (window as any).__SUPERDEV_DISABLE_AUTH__ = true;
  
} else {
  // For admin pages, remove public mode flags and allow auth
  localStorage.removeItem('superdev_public_mode');
  localStorage.removeItem('superdev_skip_auth');
  localStorage.removeItem('superdev_disable_login');
  (window as any).__SUPERDEV_PUBLIC_MODE__ = false;
  (window as any).__SUPERDEV_DISABLE_AUTH__ = false;
}

export {};