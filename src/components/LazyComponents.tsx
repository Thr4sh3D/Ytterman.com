import { lazy } from 'react';

export const LazyServices = lazy(() => import('./Services').then(module => ({ default: module.Services })));
export const LazyPricing = lazy(() => import('./Pricing').then(module => ({ default: module.Pricing })));
export const LazyAbout = lazy(() => import('./About').then(module => ({ default: module.About })));
export const LazyContact = lazy(() => import('./Contact').then(module => ({ default: module.Contact })));
export const LazyServiceQuickMessages = lazy(() => import('./ServiceQuickMessages').then(module => ({ default: module.ServiceQuickMessages })));