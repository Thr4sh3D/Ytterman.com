import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries for better caching
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast'
          ],
          'query-vendor': ['@tanstack/react-query'],
          'helmet-vendor': ['react-helmet-async'],
          'icons-vendor': ['lucide-react'],
          // Separate lazy components to reduce main bundle
          'lazy-components': [
            './src/components/LazyComponents'
          ]
        }
      }
    },
    // Optimize chunk size warning limit
    chunkSizeWarningLimit: 600,
    // Disable source maps for production to reduce size
    sourcemap: false,
    // Use esbuild for minification (faster and included by default)
    minify: 'esbuild',
    // Optimize target for modern browsers
    target: 'es2020'
  },
  // Optimize dev server
  server: {
    port: 3000,
    open: true
  },
  // Pre-bundle dependencies for faster dev startup
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'lucide-react',
      'react-helmet-async'
    ]
  }
});