import { lazy } from 'react';

// Lazy load existing components
export const LazyServices = lazy(() => import('@/components/Services').then(module => ({ default: module.Services })));
export const LazyPricing = lazy(() => import('@/components/Pricing').then(module => ({ default: module.Pricing })));
export const LazyAbout = lazy(() => import('@/components/About').then(module => ({ default: module.About })));
export const LazyContact = lazy(() => import('@/components/Contact').then(module => ({ default: module.Contact })));
export const LazyServiceQuickMessages = lazy(() => import('@/components/ServiceQuickMessages').then(module => ({ default: module.ServiceQuickMessages })));

// Lazy load new components
export const LazyWhyStrongKA2025 = lazy(() => import('@/components/WhyStrongKA2025').then(module => ({ default: module.WhyStrongKA2025 })));
export const LazyKAProcess = lazy(() => import('@/components/KAProcess').then(module => ({ default: module.KAProcess })));
export const LazyWhoIHelp = lazy(() => import('@/components/WhoIHelp').then(module => ({ default: module.WhoIHelp })));