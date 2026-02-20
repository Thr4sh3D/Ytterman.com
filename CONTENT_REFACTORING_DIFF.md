# Content Refactoring Diff

## Created Files

### 1. `src/content/faq.ts` (+215 lines)
```diff
+ // FAQ Content Data
+ // Centraliserad source of truth för alla FAQ-items
+ 
+ export interface FAQItem {
+   question: string;
+   answer: string;
+   category: string;
+   keywords?: string[];
+ }
+ 
+ export const faqItems: FAQItem[] = [
+   // 32 FAQ items across 9 categories
+   // kontrollansvarig, basP, basU, general, pricing, 
+   // bygglov, certifiering, overlatelsebesiktning, lokalt
+ ];
+ 
+ export const faqData = {
+   get kontrollansvarig() { return getFAQByCategory('kontrollansvarig'); },
+   get basP() { return getFAQByCategory('basP'); },
+   // ... etc
+ };
```

### 2. `src/content/knowledgeBase.ts` (+132 lines)
```diff
+ // Knowledge Base Content Data
+ // Centraliserad metadata för alla guider
+ 
+ export interface GuideMetadata {
+   slug: string;
+   title: string;
+   description: string;
+   category: string;
+   readTime: string;
+   icon: string;
+   seo: { title: string; description: string; };
+   keywords: string;
+   link: string;
+ }
+ 
+ export const knowledgeBase: GuideMetadata[] = [
+   // 8 guides: kontrollansvarig, bas, bygglov, kvalitetskontroll,
+   // overlatelsebesiktning, energi, miljo, digitala-verktyg
+ ];
```

## Modified Files

### 1. `src/components/FAQ.tsx` (-150 lines)
```diff
  export const FAQ = ({ items, title = "Vanliga frågor", className = "" }: FAQProps) => {
    // ... component logic unchanged
  };
  
- // Predefined FAQ data for different pages
- export const faqData = {
-   kontrollansvarig: [
-     {
-       question: "Vad gör en kontrollansvarig (KA)?",
-       answer: "En kontrollansvarig ansvarar för..."
-     },
-     // ... 150+ lines of hardcoded data
-   ],
-   basP: [ /* ... */ ],
-   basU: [ /* ... */ ],
-   general: [ /* ... */ ],
-   pricing: [ /* ... */ ],
-   bygglov: [ /* ... */ ],
-   certifiering: [ /* ... */ ],
-   overlatelsebesiktning: [ /* ... */ ],
-   lokalt: [ /* ... */ ],
-   get bas() { return [...this.basP, ...this.basU]; }
- };
+ // Re-export faqData from content file for backwards compatibility
+ export { faqData } from '@/content/faq';
```

**Result**: 
- ✅ Same export API (no breaking changes)
- ✅ Component JSX unchanged (UI identical)

### 2. `src/pages/GuidesPage.tsx` (-40 lines, +15 lines)
```diff
- import { BookOpen, Shield, Users, FileText, Building, Zap, Leaf, Laptop } from 'lucide-react';
+ import { BookOpen, Shield, Users, FileText, Building, Zap, Leaf, Laptop, LucideIcon } from 'lucide-react';
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
+ import { knowledgeBase } from '@/content/knowledgeBase';
  
+ // Icon mapping for dynamic icon resolution
+ const iconMap: Record<string, LucideIcon> = {
+   Shield, Users, FileText, Building, BookOpen, Zap, Leaf, Laptop
+ };
+ 
  const GuidesPage = () => {
-   const guides = [
-     {
-       title: 'Kontrollansvarigs roll i byggprocessen',
-       description: 'En komplett guide om vad en kontrollansvarig gör...',
-       icon: Shield,
-       link: '/guider/kontrollansvarig',
-       category: 'Kontrollansvarig',
-       readTime: '8 min'
-     },
-     {
-       title: 'BAS-P vs BAS-U: Skillnader och när de behövs',
-       description: 'Förstå skillnaderna mellan BAS-P och BAS-U...',
-       icon: Users,
-       link: '/guider/bas',
-       category: 'Säkerhetssamordning',
-       readTime: '6 min'
-     },
-     // ... 6 more hardcoded guides
-   ];
+   const guides = knowledgeBase.map(guide => ({
+     ...guide,
+     icon: iconMap[guide.icon] || FileText
+   }));
  
    // ... rest of component unchanged
```

**Result**:
- ✅ Same render output (UI identical)
- ✅ Dynamic icon mapping instead of hardcoded
- ✅ Single source of truth for guide metadata

## Summary

### Changes
| Metric | Value |
|--------|-------|
| Files created | 2 |
| Files modified | 2 |
| Lines added | +347 |
| Lines removed | -190 |
| Net change | +157 |

### Impact
| Aspect | Status |
|--------|--------|
| UI changes | ✅ None (0) |
| CSS changes | ✅ None (0) |
| Markup changes | ✅ None (0) |
| Breaking changes | ✅ None (0) |
| TypeScript errors | ✅ None (0) |

### Quality
- ✅ **Separation of Concerns**: Content isolated from presentation
- ✅ **DRY Principle**: No data duplication
- ✅ **Type Safety**: Strong TypeScript interfaces
- ✅ **Maintainability**: Easy to update content
- ✅ **Scalability**: Ready for CMS/API integration
- ✅ **Backwards Compatible**: All existing imports work

### Verification
```bash
# TypeScript compilation
✅ No errors found

# UI/CSS verification
✅ No Tailwind classes modified
✅ No new CSS files
✅ Component markup unchanged
✅ Rendering logic identical
```

## Conclusion
**Refactoring complete and verified** - content moved to separate data files with zero visual impact.
