import { lazy } from 'react';

export const LazyServices = lazy(() => import('./Services').then(module => ({ default: module.Services })));
export const LazyPricing = lazy(() => import('./Pricing').then(module => ({ default: module.Pricing })));
export const LazyAbout = lazy(() => import('./About').then(module => ({ default: module.About })));
export const LazyContact = lazy(() => import('./Contact').then(module => ({ default: module.Contact })));
export const LazyServiceQuickMessages = lazy(() => import('./ServiceQuickMessages').then(module => ({ default: module.ServiceQuickMessages })));
export const LazyWhyStrongKA2025 = lazy(() => import('./WhyStrongKA2025').then(module => ({ default: module.WhyStrongKA2025 })));
export const LazyKAProcess = lazy(() => import('./KAProcess').then(module => ({ default: module.KAProcess })));
export const LazyWhoIHelp = lazy(() => import('./WhoIHelp').then(module => ({ default: module.WhoIHelp })));