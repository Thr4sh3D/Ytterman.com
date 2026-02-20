// SEO Keyword Mapping
// Mappar sökord till primär sida och relaterade sidor för intern länkning och SEO-optimering

import { knowledgeBase } from './knowledgeBase';
import { faqItems } from './faq';

export interface SEOMapping {
  keyword: string;
  primary: {
    slug: string;
    type: 'guide' | 'faq-category' | 'service-page' | 'location-page';
    url: string;
    title: string;
  };
  related: Array<{
    slug: string;
    type: 'guide' | 'faq-category' | 'service-page' | 'location-page';
    url: string;
    title: string;
    relevance: 'high' | 'medium' | 'low';
  }>;
  searchIntent?: 'informational' | 'transactional' | 'navigational' | 'commercial';
}

// Hjälpfunktion för att normalisera keywords
const normalizeKeyword = (keyword: string): string => {
  return keyword.toLowerCase().trim();
};

// Kommuner i Västernorrland (ort-specifika keywords utan duplicerat innehåll)
const municipalities = [
  'sundsvall', 'härnösand', 'sollefteå', 'kramfors', 'timrå', 
  'örnsköldsvik', 'ånge', 'västernorrland'
];

// Bygg SEO-mappning automatiskt från content
const buildSEOMap = (): SEOMapping[] => {
  const mappings: Map<string, SEOMapping> = new Map();

  // 1. Processera guider från knowledgeBase
  knowledgeBase.forEach(guide => {
    guide.keywords.forEach(keyword => {
      const normalized = normalizeKeyword(keyword);
      
      if (!mappings.has(normalized)) {
        // Bestäm search intent baserat på keyword
        let searchIntent: SEOMapping['searchIntent'] = 'informational';
        if (keyword.includes('pris') || keyword.includes('kostnad') || keyword.includes('offert')) {
          searchIntent = 'commercial';
        } else if (municipalities.includes(normalized)) {
          searchIntent = 'navigational';
        }

        mappings.set(normalized, {
          keyword: keyword,
          primary: {
            slug: guide.slug,
            type: municipalities.includes(normalized) ? 'location-page' : 'guide',
            url: municipalities.includes(normalized) ? '/omraden' : guide.link,
            title: municipalities.includes(normalized) 
              ? `Kontrollansvarig & BAS i ${keyword}` 
              : guide.title
          },
          related: [],
          searchIntent
        });
      } else {
        // Lägg till som relaterad sida
        const existing = mappings.get(normalized)!;
        if (!existing.related.find(r => r.slug === guide.slug)) {
          existing.related.push({
            slug: guide.slug,
            type: 'guide',
            url: guide.link,
            title: guide.title,
            relevance: 'high'
          });
        }
      }
    });
  });

  // 2. Processera FAQ-items (lägg till som relaterade, inte primära)
  faqItems.forEach(faq => {
    if (!faq.keywords) return;
    
    faq.keywords.forEach(keyword => {
      const normalized = normalizeKeyword(keyword);
      
      if (!mappings.has(normalized)) {
        // Om ingen guide har detta keyword, gör FAQ-kategorin primär
        mappings.set(normalized, {
          keyword: keyword,
          primary: {
            slug: faq.category,
            type: 'faq-category',
            url: '/faq',
            title: `FAQ: ${keyword}`
          },
          related: [],
          searchIntent: 'informational'
        });
      } else {
        // Lägg till FAQ som relaterad
        const existing = mappings.get(normalized)!;
        const faqUrl = `/faq#${faq.category}`;
        if (!existing.related.find(r => r.url === faqUrl)) {
          existing.related.push({
            slug: faq.category,
            type: 'faq-category',
            url: faqUrl,
            title: `FAQ: ${faq.question.substring(0, 50)}...`,
            relevance: 'medium'
          });
        }
      }
    });
  });

  // 3. Special handling för tjänste-specifika keywords
  const serviceKeywords = {
    'kontrollansvarig': {
      primary: { slug: 'kontrollansvarig', type: 'service-page' as const, url: '/kontrollansvarig', title: 'Kontrollansvarig Tjänster' }
    },
    'bas-p': {
      primary: { slug: 'bas-p', type: 'service-page' as const, url: '/bas-p', title: 'BAS-P Tjänster' }
    },
    'bas-u': {
      primary: { slug: 'bas-u', type: 'service-page' as const, url: '/bas-u', title: 'BAS-U Tjänster' }
    },
    'överlåtelsebesiktning': {
      primary: { slug: 'overlatelsebesiktning', type: 'service-page' as const, url: '/overlatelsebesiktning', title: 'Överlåtelsebesiktning Tjänster' }
    }
  };

  Object.entries(serviceKeywords).forEach(([keyword, data]) => {
    if (mappings.has(keyword)) {
      const existing = mappings.get(keyword)!;
      // Om tjänstesida finns, gör den primär och flytta guiden till relaterad
      if (existing.primary.type === 'guide') {
        existing.related.unshift({
          ...existing.primary,
          relevance: 'high' as const
        });
      }
      existing.primary = data.primary;
    }
  });

  // 4. Hantera ort-keywords: ALLA orter ska peka på /omraden (ingen duplicering)
  municipalities.forEach(municipality => {
    if (mappings.has(municipality)) {
      const existing = mappings.get(municipality)!;
      existing.primary = {
        slug: 'omraden',
        type: 'location-page',
        url: '/omraden',
        title: `Kontrollansvarig & BAS i Västernorrland`
      };
      existing.searchIntent = 'navigational';
      
      // Alla guider som nämner orter är relaterade
      existing.related.forEach(rel => {
        rel.relevance = 'medium';
      });
    }
  });

  return Array.from(mappings.values());
};

// Exportera färdig SEO-mappning
export const seoMap: SEOMapping[] = buildSEOMap();

// Hjälpfunktioner för att söka i SEO-mappningen
export const getKeywordMapping = (keyword: string): SEOMapping | undefined => {
  const normalized = normalizeKeyword(keyword);
  return seoMap.find(m => normalizeKeyword(m.keyword) === normalized);
};

export const getPrimaryPageForKeyword = (keyword: string): SEOMapping['primary'] | undefined => {
  const mapping = getKeywordMapping(keyword);
  return mapping?.primary;
};

export const getRelatedPagesForKeyword = (keyword: string): SEOMapping['related'] => {
  const mapping = getKeywordMapping(keyword);
  return mapping?.related || [];
};

// Hitta alla keywords för en specifik sida
export const getKeywordsForPage = (slug: string): string[] => {
  return seoMap
    .filter(m => m.primary.slug === slug || m.related.some(r => r.slug === slug))
    .map(m => m.keyword);
};

// Statistik för dokumentation
export const getSEOStats = () => {
  const stats = {
    totalKeywords: seoMap.length,
    guidePrimary: seoMap.filter(m => m.primary.type === 'guide').length,
    faqPrimary: seoMap.filter(m => m.primary.type === 'faq-category').length,
    servicePrimary: seoMap.filter(m => m.primary.type === 'service-page').length,
    locationPrimary: seoMap.filter(m => m.primary.type === 'location-page').length,
    byIntent: {
      informational: seoMap.filter(m => m.searchIntent === 'informational').length,
      transactional: seoMap.filter(m => m.searchIntent === 'transactional').length,
      navigational: seoMap.filter(m => m.searchIntent === 'navigational').length,
      commercial: seoMap.filter(m => m.searchIntent === 'commercial').length
    }
  };
  return stats;
};
