import { Calendar, FileText, Target, TrendingUp } from 'lucide-react';

interface ContentItem {
  title: string;
  type: 'blog' | 'guide' | 'case-study';
  keywords: string[];
  priority: 'high' | 'medium' | 'low';
  estimatedTraffic: string;
  publishDate: string;
  status: 'planned' | 'in-progress' | 'published';
}

export const ContentPlan = () => {
  const contentItems: ContentItem[] = [
    {
      title: "Komplett guide: Vad kostar en kontrollansvarig i Västernorrland 2024?",
      type: "guide",
      keywords: ["kontrollansvarig kostnad", "KA pris Västernorrland", "byggkontroll kostnad"],
      priority: "high",
      estimatedTraffic: "500-800/månad",
      publishDate: "2024-02-01",
      status: "planned"
    },
    {
      title: "BAS-P vs BAS-U: Skillnader, ansvar och när du behöver vilken",
      type: "blog",
      keywords: ["BAS-P BAS-U skillnad", "byggarbetsmiljösamordnare", "AFS 1999:3"],
      priority: "high",
      estimatedTraffic: "300-500/månad",
      publishDate: "2024-02-08",
      status: "planned"
    },
    {
      title: "Bygglovsprocess i Sundsvall: Steg-för-steg guide 2024",
      type: "guide",
      keywords: ["bygglov Sundsvall", "bygglovsansökan", "byggnadsnämnd Sundsvall"],
      priority: "high",
      estimatedTraffic: "400-600/månad",
      publishDate: "2024-02-15",
      status: "planned"
    },
    {
      title: "Case Study: Hur vi hjälpte ett villaprojekt i Härnösand",
      type: "case-study",
      keywords: ["kontrollansvarig villa", "byggprojekt Härnösand", "PBL villa"],
      priority: "medium",
      estimatedTraffic: "200-300/månad",
      publishDate: "2024-02-22",
      status: "planned"
    },
    {
      title: "Tekniskt samråd: Vad händer och hur förbereder du dig?",
      type: "blog",
      keywords: ["tekniskt samråd", "byggnadsnämnd", "kontrollansvarig samråd"],
      priority: "medium",
      estimatedTraffic: "250-400/månad",
      publishDate: "2024-03-01",
      status: "planned"
    },
    {
      title: "Arbetsmiljöplan: Mall och guide för BAS-P",
      type: "guide",
      keywords: ["arbetsmiljöplan mall", "BAS-P arbetsmiljöplan", "AFS arbetsmiljö"],
      priority: "medium",
      estimatedTraffic: "300-450/månad",
      publishDate: "2024-03-08",
      status: "planned"
    },
    {
      title: "Vanliga fel i byggprojekt som kontrollansvarig upptäcker",
      type: "blog",
      keywords: ["byggfel", "kontrollansvarig kontroll", "byggkvalitet"],
      priority: "medium",
      estimatedTraffic: "200-350/månad",
      publishDate: "2024-03-15",
      status: "planned"
    },
    {
      title: "Bygglov för tillbyggnad: Regler och process i Västernorrland",
      type: "guide",
      keywords: ["bygglov tillbyggnad", "tillbyggnad regler", "PBL tillbyggnad"],
      priority: "high",
      estimatedTraffic: "350-500/månad",
      publishDate: "2024-03-22",
      status: "planned"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <FileText className="w-4 h-4" />;
      case 'guide': return <Target className="w-4 h-4" />;
      case 'case-study': return <TrendingUp className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Innehållsstrategi Q1 2024
      </h2>
      
      <div className="grid gap-6">
        {contentItems.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  {getTypeIcon(item.type)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.publishDate}
                    </span>
                    <span className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {item.estimatedTraffic}
                    </span>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                {item.priority}
              </span>
            </div>
            
            <div className="mb-3">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Målnyckelord:</h4>
              <div className="flex flex-wrap gap-2">
                {item.keywords.map((keyword, keyIndex) => (
                  <span key={keyIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 capitalize">
                {item.type.replace('-', ' ')}
              </span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                item.status === 'published' ? 'bg-green-100 text-green-800' :
                item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {item.status.replace('-', ' ')}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Innehållsstrategi mål Q1 2024
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Publicera 8 högkvalitativa artiklar fokuserade på lokala sökord</li>
          <li>• Öka organisk trafik med 150% genom målriktade nyckelord</li>
          <li>• Etablera expertauktoritet inom byggkontroll i Västernorrland</li>
          <li>• Skapa värdefulla resurser som genererar leads</li>
          <li>• Förbättra konverteringsgrad genom bättre innehåll</li>
        </ul>
      </div>
    </div>
  );
};