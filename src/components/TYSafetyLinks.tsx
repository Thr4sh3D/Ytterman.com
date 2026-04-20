import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const resources = [
  {
    title: 'TY Safety om BAS-P och BAS-U',
    description: 'Läs mer om rollerna och hur arbetsmiljösamordning fungerar i praktiken.',
    href: 'https://www.tysafety.se/bas-p-bas-u/',
  },
  {
    title: 'TY Safetys utbildning i BAS-P/BAS-U',
    description: 'Fördjupa dig i utbildning och kompetenskrav för BAS-rollerna.',
    href: 'https://www.tysafety.se/utbildning/bas-u-bas-p/',
  },
];

interface TYSafetyLinksProps {
  title?: string;
  description?: string;
}

export const TYSafetyLinks = ({
  title = 'Fördjupa dig hos vår systersite TY Safety',
  description = 'Här hittar du mer läsning och utbildningsinformation för BAS-P och BAS-U.',
}: TYSafetyLinksProps) => {
  return (
    <section className="not-prose mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <div className="mb-6 flex items-start gap-4">
        <div className="rounded-xl bg-blue-100 p-3">
          <ShieldCheck className="h-6 w-6 text-blue-700" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <p className="mt-2 text-slate-600">{description}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <Card key={resource.href} className="border-slate-200 bg-white shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-slate-900">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-slate-600">{resource.description}</p>
              <a
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-semibold text-blue-700 transition-colors hover:text-blue-800"
              >
                Besök sidan
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
