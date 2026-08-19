import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CalendarDays, Clock, ExternalLink, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { normalizeInternalPath } from '@/utils/url';
import { BAS, COMPANY, KA_CERT } from '@/config/company';
import { GUIDE_UPDATED_AT, type OfficialSource } from '@/config/officialSources';

interface GuideLayoutProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  children: ReactNode;
  canonicalPath?: string;
  updatedAt?: string;
  sources?: readonly OfficialSource[];
}

export const GuideLayout = ({
  title,
  description,
  category,
  readTime,
  seoTitle,
  seoDescription,
  keywords,
  children,
  canonicalPath,
  updatedAt = GUIDE_UPDATED_AT,
  sources = [],
}: GuideLayoutProps) => {
  // Ensure trailing slash for GitHub Pages compatibility
  const trailingCanonical = canonicalPath && !canonicalPath.endsWith('/') ? canonicalPath + '/' : canonicalPath;
  const breadcrumbs = [
    { name: 'Hem', url: COMPANY.siteUrl },
    { name: 'Guider', url: `${COMPANY.siteUrl}/guider/` },
    { name: title, url: trailingCanonical ? `${COMPANY.siteUrl}${trailingCanonical}` : '' }
  ];

  return (
    <>
      <AdvancedSEO 
        title={seoTitle}
        description={seoDescription}
        keywords={keywords}
        url={trailingCanonical ? `${COMPANY.siteUrl}${trailingCanonical}` : `${COMPANY.siteUrl}/guider/`}
        type="article"
        organization={true}
        breadcrumbs={breadcrumbs}
        article={{
          author: 'Tobias Ytterman',
          modifiedTime: updatedAt,
          section: 'Guider',
          tags: keywords.split(', ')
        }}
      />
      
      {canonicalPath && <CanonicalUrl path={canonicalPath} />}
      
      <div className="min-h-screen bg-slate-50">
        <Header />
        
        <main>
          {/* Breadcrumbs */}
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    <Tag className="w-3 h-3 inline mr-1" />
                    {category}
                  </span>
                  <span className="flex items-center text-slate-600 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {readTime} läsning
                  </span>
                  <span className="flex items-center text-slate-600 text-sm">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    Uppdaterad <time dateTime={updatedAt}>{updatedAt}</time>
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  {title}
                </h1>
                
                <p className="text-xl text-slate-600 mb-8">
                  {description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                      TY
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Tobias Ytterman</p>
                      <p className="text-sm text-slate-600">
                        {KA_CERT.authorizationLabel} · Utbildad för {BAS.rolesLabel}
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => window.location.href = normalizeInternalPath('/kontakt')}
                    className="earth-gradient text-white hover:opacity-90"
                  >
                    Kontakta oss
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {children}

                {sources.length > 0 && (
                  <aside className="mt-12 border-t border-slate-200 pt-8" aria-labelledby="official-sources-title">
                    <h2 id="official-sources-title" className="text-2xl font-bold text-slate-900">Officiella källor</h2>
                    <p className="mt-2 text-sm text-slate-600">
                      Kontrollera alltid senaste lydelsen och det enskilda projektets beslut hos ansvarig myndighet.
                    </p>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {sources.map((source) => (
                        <li key={source.url}>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-full items-start justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-900 hover:border-primary/40"
                          >
                            <span>
                              <span className="block font-semibold">{source.title}</span>
                              <span className="mt-1 block text-sm text-slate-600">{source.publisher}</span>
                            </span>
                            <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </aside>
                )}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Behöver du hjälp med ditt byggprojekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Skicka projektets underlag så återkommer vi med nästa steg och offert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = normalizeInternalPath('/kontakt')}
                  size="lg"
                  className="earth-gradient text-white hover:opacity-90"
                >
                  Be om offert
                </Button>
                <Button 
                  onClick={() => window.location.href = COMPANY.emailHref}
                  size="lg"
                  variant="outline"
                  className="border-white text-slate-900 hover:bg-white hover:text-slate-900"
                >
                  Mejla Tobias
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};
