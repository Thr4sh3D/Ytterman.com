import { lazy } from 'react';

// Lazy load komponenter för bättre prestanda
export const LazyServices = lazy(() => import('./Services').then(module => ({ default: module.Services })));
export const LazyPricing = lazy(() => import('./Pricing').then(module => ({ default: module.Pricing })));
export const LazyAbout = lazy(() => import('./About').then(module => ({ default: module.About })));
export const LazyContact = lazy(() => import('./Contact').then(module => ({ default: module.Contact })));
export const LazyServiceQuickMessages = lazy(() => import('./ServiceQuickMessages').then(module => ({ default: module.ServiceQuickMessages })));
export const LazyFAQ = lazy(() => import('./FAQ').then(module => ({ default: module.FAQ })));