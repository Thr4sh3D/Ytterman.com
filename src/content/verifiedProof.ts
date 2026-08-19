export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  service: string;
  area: string;
  completedAt: string;
  verified: boolean;
  publicationConsent: boolean;
}

export interface CustomerReview {
  id: string;
  quote: string;
  authorLabel: string;
  service: string;
  datePublished: string;
  rating?: number;
  sourceUrl?: string;
  verified: boolean;
  publicationConsent: boolean;
}

// Lägg endast till verkligt underlag efter faktakontroll och dokumenterat publiceringsmedgivande.
export const caseStudies: readonly CaseStudy[] = [];
export const customerReviews: readonly CustomerReview[] = [];

export const getPublishedCaseStudies = (): readonly CaseStudy[] =>
  caseStudies.filter((item) => item.verified && item.publicationConsent);

export const getPublishedCustomerReviews = (): readonly CustomerReview[] =>
  customerReviews.filter((item) => item.verified && item.publicationConsent);
