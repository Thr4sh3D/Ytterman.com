/**
 * This file ensures that all public pages are accessible without authentication
 * It forces the client to operate in a fully public mode for non-admin pages
 */

// Force public mode for the Superdev client
if (window.location.pathname !== '/admin/blog-cleanup' && 
    !window.location.pathname.startsWith('/admin/')) {
  // Prevent any authentication redirects or prompts on public pages
  localStorage.setItem('superdev_public_mode', 'true');
  
  // Clear any auth-related query parameters that might trigger login flows
  if (window.location.search.includes('?code=') || 
      window.location.search.includes('&code=') ||
      window.location.search.includes('?state=') || 
      window.location.search.includes('&state=')) {
    
    // Strip auth-related query parameters
    const cleanUrl = window.location.pathname;
    history.replaceState(null, '', cleanUrl);
  }
} else {
  // For admin pages, remove the public mode flag
  localStorage.removeItem('superdev_public_mode');
}

export {};