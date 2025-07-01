import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Target, TrendingUp, Users, FileText, Search } from 'lucide-react';

interface ContentIdea {
  id: string;
  title: string;
  category: string;
  keywords: string[];
  difficulty: 'Lätt' | 'Medium' | 'Svår';
  priority: 'Hög' | 'Medium' | 'Låg';
  estimatedTraffic: number;
  status: 'Planerad' | 'Pågående' | 'Klar';
  targetAudience: string;
  contentType: string;
}

export const ContentStrategy = () => {
  const [selectedCategory, setSelectedCategory] = useState('Alla');

  const contentIdeas: ContentIdea[] = [
    {
      id: '1',
      title: 'Komplett guide: Vad kostar kontrollansvarig 2024?',
      category: 'Kontrollansvarig',
      keywords: ['kontrollansvarig kostnad', 'KA pris', 'byggkontroll kostnad'],
      difficulty: 'Lätt',
      priority: 'Hög',
      estimatedTraffic: 500,
      status: 'Klar',
      targetAudience: 'Byggherrar',
      contentType: 'Guide'
    },
    {
      id: '2',
      title: 'BAS-P vs BAS-U: Skillnader och när du behöver vilken',
      category: 'BAS',
      keywords: ['BAS-P BAS-U skillnad', 'byggarbetsmiljösamordnare'],
      difficulty: 'Medium',
      priority: 'Hög',
      estimatedTraffic: 300,
      status: 'Klar',
      targetAudience: 'Byggherrar, Entreprenörer',
      contentType: 'Jämförelse'
    },
    {
      id: '3',
      title: 'Bygglov Sundsvall: Process, tider och kostnader 2024',
      category: 'Bygglov',
      keywords: ['bygglov Sundsvall', 'bygglovsprocess', 'bygglov kostnad'],
      difficulty: 'Medium',
      priority: 'Hög',
      estimatedTraffic: 400,
      status: 'Planerad',
      targetAudience: 'Lokala byggherrar',
      contentType: 'Lokal guide'
    },
    {
      id: '4',
      title: 'Tekniskt samråd: Så förbereder du dig optimalt',
      category: 'Bygglov',
      keywords: ['tekniskt samråd', 'byggnadsnämnd', 'samrådshandlingar'],
      difficulty: 'Medium',
      priority: 'Medium',
      estimatedTraffic: 250,
      status: 'Planerad',
      targetAudience: 'Byggherrar',
      contentType: 'Guide'
    },
    {
      id: '5',
      title: 'Arbetsmiljöplan mall: BAS-P guide med checklistor',
      category: 'BAS',
      keywords: ['arbetsmiljöplan mall', 'BAS-P checklista', 'AFS 1999:3'],
      difficulty: 'Svår',
      priority: 'Medium',
      estimatedTraffic: 350,
      status: 'Planerad',
      targetAudience: 'BAS-P, Projektledare',
      contentType: 'Mall + Guide'
    },
    {
      id: '6',
      title: 'Kontrollplan mall: Så skapar du en professionell kontrollplan',
      category: 'Kontrollansvarig',
      keywords: ['kontrollplan mall', 'PBL kontrollplan', 'byggkontroll'],
      difficulty: 'Svår',
      priority: 'Medium',
      estimatedTraffic: 200,
      status: 'Planerad',
      targetAudience: 'Kontrollansvariga, Byggherrar',
      contentType: 'Mall + Guide'
    },
    {
      id: '7',
      title: 'Byggfel och reklamationer: Så hanterar du dem rätt',
      category: 'Säkerhet',
      keywords: ['byggfel reklamation', 'byggskador', 'kvalitetskontroll'],
      difficulty: 'Medium',
      priority: 'Låg',
      estimatedTraffic: 180,
      status: 'Planerad',
      targetAudience: 'Byggherrar, Husägare',
      contentType: 'Guide'
    },
    {
      id: '8',
      title: 'Nya PBL-regler 2024: Vad du behöver veta',
      category: 'Regelverk',
      keywords: ['PBL 2024', 'nya byggregler', 'plan bygglag ändringar'],
      difficulty: 'Svår',
      priority: 'Hög',
      estimatedTraffic: 600,
      status: 'Pågående',
      targetAudience: 'Alla i byggbranschen',
      contentType: 'Nyhetsanalys'
    }
  ];

  const categories = ['Alla', 'Kontrollansvarig', 'BAS', 'Bygglov', 'Säkerhet', 'Regelverk'];

  const filteredIdeas = selectedCategory === 'Alla' 
    ? contentIdeas 
    : contentIdeas.filter(idea => idea.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Klar': return 'bg-green-100 text-green-800';
      case 'Pågående': return 'bg-yellow-100 text-yellow-800';
      case 'Planerad': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Hög': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Låg': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalEstimatedTraffic = contentIdeas.reduce((sum, idea) => sum + idea.estimatedTraffic, 0);
  const completedContent = contentIdeas.filter(idea => idea.status === 'Klar').length;
  const inProgressContent = contentIdeas.filter(idea => idea.status === 'Pågående').length;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Content Marketing Strategi</h1>
        <p className="text-gray-600">
          Planera och följ upp din innehållsstrategi för att maximera SEO och kundengagemang
        </p>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-2xl font-bold">{contentIdeas.length}</p>
                <p className="text-sm text-gray-600">Innehållsidéer</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <p className="text-2xl font-bold">{totalEstimatedTraffic}</p>
                <p className="text-sm text-gray-600">Uppskattad trafik/mån</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Target className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <p className="text-2xl font-bold">{completedContent}</p>
                <p className="text-sm text-gray-600">Klart innehåll</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-orange-600 mr-3" />
              <div>
                <p className="text-2xl font-bold">{inProgressContent}</p>
                <p className="text-sm text-gray-600">Pågående projekt</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="ideas" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ideas">Innehållsidéer</TabsTrigger>
          <TabsTrigger value="calendar">Innehållskalender</TabsTrigger>
          <TabsTrigger value="keywords">Nyckelordsstrategi</TabsTrigger>
        </TabsList>

        <TabsContent value="ideas" className="space-y-4">
          {/* Kategorifilter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Innehållsidéer */}
          <div className="grid gap-4">
            {filteredIdeas.map(idea => (
              <Card key={idea.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{idea.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge className={getStatusColor(idea.status)}>
                        {idea.status}
                      </Badge>
                      <Badge className={getPriorityColor(idea.priority)}>
                        {idea.priority}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Målgrupp</p>
                      <p className="text-sm text-gray-600">{idea.targetAudience}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Innehållstyp</p>
                      <p className="text-sm text-gray-600">{idea.contentType}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Svårighetsgrad</p>
                      <p className="text-sm text-gray-600">{idea.difficulty}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Uppskattad trafik</p>
                      <p className="text-sm text-gray-600">{idea.estimatedTraffic} besök/mån</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Nyckelord</p>
                    <div className="flex flex-wrap gap-1">
                      {idea.keywords.map(keyword => (
                        <Badge key={keyword} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{idea.category}</Badge>
                    <Button size="sm" variant="outline">
                      Skapa innehåll
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Innehållskalender Q1 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Januari 2024</h3>
                    <div className="space-y-2">
                      <div className="p-2 bg-green-50 rounded text-sm">
                        <strong>Vecka 2:</strong> Kontrollansvarig kostnad guide
                      </div>
                      <div className="p-2 bg-yellow-50 rounded text-sm">
                        <strong>Vecka 4:</strong> Nya PBL-regler 2024
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Februari 2024</h3>
                    <div className="space-y-2">
                      <div className="p-2 bg-blue-50 rounded text-sm">
                        <strong>Vecka 1:</strong> Bygglov Sundsvall guide
                      </div>
                      <div className="p-2 bg-blue-50 rounded text-sm">
                        <strong>Vecka 3:</strong> Tekniskt samråd guide
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Mars 2024</h3>
                    <div className="space-y-2">
                      <div className="p-2 bg-blue-50 rounded text-sm">
                        <strong>Vecka 1:</strong> Arbetsmiljöplan mall
                      </div>
                      <div className="p-2 bg-blue-50 rounded text-sm">
                        <strong>Vecka 3:</strong> Kontrollplan mall
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Nyckelordsstrategi Västernorrland
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Primära nyckelord (hög volym)</h3>
                  <div className="space-y-2">
                    {[
                      { keyword: 'kontrollansvarig Sundsvall', volume: '320/mån', difficulty: 'Medium' },
                      { keyword: 'BAS-P Västernorrland', volume: '210/mån', difficulty: 'Låg' },
                      { keyword: 'byggkontroll Härnösand', volume: '180/mån', difficulty: 'Låg' },
                      { keyword: 'kontrollansvarig kostnad', volume: '590/mån', difficulty: 'Hög' }
                    ].map(item => (
                      <div key={item.keyword} className="flex justify-between items-center p-2 border rounded">
                        <span className="text-sm">{item.keyword}</span>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">{item.volume}</Badge>
                          <Badge variant="outline" className="text-xs">{item.difficulty}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Long-tail nyckelord</h3>
                  <div className="space-y-2">
                    {[
                      { keyword: 'vad kostar kontrollansvarig villa', volume: '90/mån', difficulty: 'Låg' },
                      { keyword: 'BAS-P BAS-U skillnad förklaring', volume: '70/mån', difficulty: 'Låg' },
                      { keyword: 'bygglov process Sundsvall kommun', volume: '50/mån', difficulty: 'Låg' },
                      { keyword: 'tekniskt samråd förberedelse tips', volume: '40/mån', difficulty: 'Låg' }
                    ].map(item => (
                      <div key={item.keyword} className="flex justify-between items-center p-2 border rounded">
                        <span className="text-sm">{item.keyword}</span>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">{item.volume}</Badge>
                          <Badge variant="outline" className="text-xs">{item.difficulty}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};