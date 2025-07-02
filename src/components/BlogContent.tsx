import { useMemo } from 'react';
import { CheckCircle, AlertCircle, Info, Lightbulb } from 'lucide-react';

interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  const formattedContent = useMemo(() => {
    if (!content) return '';

    let html = content;

    // Convert markdown headers
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4 flex items-center"><span class="w-1 h-6 bg-primary mr-3 rounded"></span>$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center"><span class="w-1 h-8 bg-primary mr-4 rounded"></span>$1</h2>');
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold text-slate-900 mt-8 mb-6">$1</h1>');

    // Convert markdown bold and italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');

    // Convert markdown links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:text-primary/80 underline font-medium">$1</a>');

    // Convert markdown lists
    html = html.replace(/^- (.*$)/gm, '<li class="flex items-start mb-2"><span class="text-primary mr-3 mt-1">•</span><span>$1</span></li>');
    html = html.replace(/^(\d+)\. (.*$)/gm, '<li class="flex items-start mb-2"><span class="text-primary font-semibold mr-3 mt-1">$1.</span><span>$2</span></li>');

    // Wrap consecutive list items in ul/ol
    html = html.replace(/((<li class="flex items-start mb-2"><span class="text-primary mr-3 mt-1">•<\/span>.*?<\/li>\s*)+)/g, '<ul class="space-y-1 mb-6">$1</ul>');
    html = html.replace(/((<li class="flex items-start mb-2"><span class="text-primary font-semibold mr-3 mt-1">\d+\.<\/span>.*?<\/li>\s*)+)/g, '<ol class="space-y-1 mb-6">$1</ol>');

    // Convert checkboxes
    html = html.replace(/^- ✅ (.*$)/gm, '<div class="flex items-start mb-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-400"><CheckCircle class="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" /><span class="text-green-800">$1</span></div>');
    html = html.replace(/^- ❌ (.*$)/gm, '<div class="flex items-start mb-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400"><AlertCircle class="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" /><span class="text-red-800">$1</span></div>');

    // Convert special callouts
    html = html.replace(/^> \*\*(.*?):\*\* (.*$)/gm, '<div class="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg"><div class="flex items-start"><Info class="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" /><div><strong class="text-blue-900 font-semibold">$1:</strong> <span class="text-blue-800">$2</span></div></div></div>');
    html = html.replace(/^> (.*$)/gm, '<blockquote class="my-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg"><div class="flex items-start"><Lightbulb class="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" /><span class="text-amber-800 italic">$1</span></div></blockquote>');

    // Convert tables
    html = html.replace(/\|(.+)\|/g, (match, content) => {
      const cells = content.split('|').map(cell => cell.trim()).filter(cell => cell);
      const isHeader = match.includes('**') || content.includes('---');
      
      if (content.includes('---')) {
        return ''; // Skip separator rows
      }
      
      const cellTag = isHeader ? 'th' : 'td';
      const cellClass = isHeader 
        ? 'px-4 py-3 text-left font-semibold text-slate-900 bg-slate-50 border-b-2 border-slate-200' 
        : 'px-4 py-3 text-slate-700 border-b border-slate-200';
      
      const cellsHtml = cells.map(cell => 
        `<${cellTag} class="${cellClass}">${cell.replace(/\*\*(.*?)\*\*/g, '$1')}</${cellTag}>`
      ).join('');
      
      return `<tr class="hover:bg-slate-50">${cellsHtml}</tr>`;
    });

    // Wrap table rows in table
    html = html.replace(/((<tr class="hover:bg-slate-50">.*?<\/tr>\s*)+)/g, '<div class="my-8 overflow-x-auto"><table class="w-full border border-slate-200 rounded-lg overflow-hidden shadow-sm">$1</table></div>');

    // Convert paragraphs
    html = html.replace(/^(?!<[^>]+>)(.+)$/gm, '<p class="mb-4 text-slate-700 leading-relaxed">$1</p>');

    // Clean up extra spaces and line breaks
    html = html.replace(/\n\s*\n/g, '\n');
    html = html.replace(/\n/g, ' ');

    return html;
  }, [content]);

  return (
    <div 
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: formattedContent }}
    />
  );
};