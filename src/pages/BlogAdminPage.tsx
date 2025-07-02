import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogManager } from '@/components/BlogManager';
import { ContentStrategy } from '@/components/ContentStrategy';
import { SEOHead } from '@/components/SEOComponents';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, FileText, Target, TrendingUp } from 'lucide-react';

export default function BlogAdminPage() {
  return (
    <>
      <SEOHead
        title="Blogg Administration - BuildControl"
        description="Hantera blogginlägg och content marketing strategi"
        url="https://buildcontrol.se/admin/blogg"
        robots="noindex, nofollow"
      />
      
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Blogg & Content Marketing
            </h1>
            <p className="text-gray-600">
              Hantera ditt innehåll och optimera din content marketing-strategi
            </p>
          </div>

          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="posts" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Blogginlägg
              </TabsTrigger>
              <TabsTrigger value="strategy" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Content Strategi
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Analys
              </TabsTrigger>
              <TabsTrigger value="seo" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                SEO Optimering
              </TabsTrigger>
            </TabsList>

            <TabsContent value="posts">
              <BlogManager />
            </TabsContent>

            <TabsContent value="strategy">
              <ContentStrategy />
            </TabsContent>

            <TabsContent value="analytics">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Analytics kommer snart
                </h3>
                <p className="text-gray-600">
                  Här kommer du kunna se detaljerad statistik över dina blogginlägg, 
                  läsare och SEO-prestanda.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="seo">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  SEO-verktyg kommer snart
                </h3>
                <p className="text-gray-600">
                  Här kommer du kunna optimera dina artiklar för sökmotorer, 
                  analysera nyckelord och följa rankningar.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </>
  );
}